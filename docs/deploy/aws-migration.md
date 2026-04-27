# AWS Migration Guide

This guide documents how to move the Startup Garage website from GitHub Pages to production hosting on AWS. The site is a static React + Vite single-page app, so the recommended architecture is **S3 (origin) + CloudFront (CDN) + Route 53 (DNS) + ACM (TLS)**. A second section covers when and how to evolve to a server-side-rendered (SSR) stack if future requirements outgrow static hosting.

---

## 1. Why move off GitHub Pages

GitHub Pages is a great launch platform — free, fast to ship, deploy on push. The site is intentionally engineered to keep AWS migration low-risk:

- The build output (`dist/`) is fully static.
- All routing is client-side (React Router) with a `404.html` SPA fallback.
- The base path is controlled by a single environment variable (`VITE_BASE`) at build time.

Reasons to migrate:

- Custom domain on a single canonical URL with full control over DNS and TLS.
- Edge caching and global CDN performance via CloudFront.
- Per-route HTTP headers, redirects, and security policies.
- Logging, WAF, and observability via AWS-native tooling.
- A platform the rest of the SG infra can grow into (auth, APIs, future SSR).

---

## 2. Target architecture (static)

```
[ Browser ]
     │
     ▼
[ Route 53 ] → www.startupgarage.org / startupgarage.org
     │ (alias)
     ▼
[ CloudFront distribution ] ── Origin: S3 (private bucket, OAC)
     │   - HTTPS via ACM cert (us-east-1)
     │   - Custom error responses 403 + 404 → /index.html (SPA fallback)
     │   - Default cache: 1d for HTML, 1y for hashed assets
     ▼
[ S3 bucket ] ── /index.html, /assets/*.{js,css}, /favicon.svg, etc.
```

Key decisions:

- **S3 bucket is private.** Access is granted only to CloudFront via Origin Access Control (OAC). Never enable static website hosting / public ACLs.
- **TLS cert** must live in `us-east-1` to be attached to a CloudFront distribution.
- **Apex + www**. Either the apex (`startupgarage.org`) or `www` is canonical; the other 301-redirects to it. Easiest setup: apex points to CloudFront, `www` is a separate CloudFront distribution that redirects to the apex (or vice versa).

---

## 3. One-time AWS setup

The steps below are written for the AWS CLI but are equally clear in the console.

### 3.1 Create the S3 origin bucket

```bash
aws s3api create-bucket \
  --bucket startup-garage-web \
  --region us-east-1
aws s3api put-public-access-block \
  --bucket startup-garage-web \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
aws s3api put-bucket-encryption \
  --bucket startup-garage-web \
  --server-side-encryption-configuration \
    '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
```

### 3.2 Request the ACM certificate (in `us-east-1`)

```bash
aws acm request-certificate \
  --domain-name startupgarage.org \
  --subject-alternative-names www.startupgarage.org \
  --validation-method DNS \
  --region us-east-1
```

Validate via Route 53 by adding the CNAMEs ACM provides.

### 3.3 Create the CloudFront distribution

- **Origin**: the S3 bucket from 3.1, secured with an Origin Access Control (OAC) — _not_ a legacy OAI.
- **Default root object**: `index.html`.
- **Viewer protocol policy**: Redirect HTTP to HTTPS.
- **Allowed methods**: GET, HEAD.
- **Compress objects automatically**: yes.
- **Alternate domain names (CNAMEs)**: `startupgarage.org`, `www.startupgarage.org`.
- **SSL certificate**: ACM cert from 3.2.
- **Custom error responses** (critical for SPA routing):
  - `403 Forbidden` → `/index.html`, response code `200`, TTL `0`.
  - `404 Not Found` → `/index.html`, response code `200`, TTL `0`.
- **Cache policy**: use `CachingOptimized` for `/assets/*` (long TTL — files are content-hashed by Vite); use `CachingDisabled` (or a 5-minute TTL) for `/index.html` so deploys roll out quickly.

After the distribution is created, attach a bucket policy that grants `s3:GetObject` only to the OAC principal — CloudFront will produce the exact policy snippet to copy.

### 3.4 Wire up DNS in Route 53

- A/AAAA aliases for `startupgarage.org` and `www.startupgarage.org` → CloudFront distribution.
- TXT/MX records remain unchanged.

---

## 4. Deploy pipeline

### 4.1 Build for AWS

The site already supports an environment-driven base path. For the AWS deploy, base is just `/`:

```bash
VITE_BASE=/ npm run build
```

This produces a `dist/` folder ready for upload.

### 4.2 Upload to S3

Two-pass upload — long-cache hashed assets first, then short-cache HTML last so users always pull a coherent set:

```bash
# 1. Hashed, immutable assets
aws s3 sync dist/ s3://startup-garage-web/ \
  --delete \
  --exclude "*" \
  --include "assets/*" \
  --include "*.svg" \
  --include "*.png" \
  --include "*.ico" \
  --include "*.woff*" \
  --cache-control "public, max-age=31536000, immutable"

# 2. HTML + manifest (short cache so deploys are visible quickly)
aws s3 sync dist/ s3://startup-garage-web/ \
  --delete \
  --exclude "assets/*" \
  --cache-control "public, max-age=300, must-revalidate"
```

### 4.3 Invalidate CloudFront

```bash
aws cloudfront create-invalidation \
  --distribution-id E1ABCDEF1GHIJK \
  --paths "/index.html" "/" "/404.html"
```

(Hashed asset paths don't need invalidation because their filenames change on every build.)

### 4.4 Automate via GitHub Actions

When you're ready to flip the canary, add a sibling workflow alongside `deploy-pages.yml`:

```yaml
name: Deploy to AWS
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci || npm install
      - run: VITE_BASE=/ npm run build
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::<account-id>:role/StartupGarageDeploy
          aws-region: us-east-1
      - run: |
          aws s3 sync dist/ s3://startup-garage-web/ --delete \
            --exclude "*" --include "assets/*" \
            --cache-control "public, max-age=31536000, immutable"
          aws s3 sync dist/ s3://startup-garage-web/ --delete \
            --exclude "assets/*" \
            --cache-control "public, max-age=300, must-revalidate"
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DIST_ID }} \
            --paths "/index.html" "/" "/404.html"
```

Use **GitHub OIDC + IAM role** (`role-to-assume`) instead of long-lived access keys. The IAM role only needs `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the bucket and `cloudfront:CreateInvalidation` on the distribution.

---

## 5. Cutover plan

A safe DNS cutover that lets you roll back fast:

1. Stand up CloudFront pointing at the populated S3 bucket. Verify with the CloudFront `*.cloudfront.net` URL.
2. Lower TTL on the existing `startupgarage.org` records to 60 seconds 24 hours before cutover.
3. Switch Route 53 alias records to CloudFront.
4. Smoke-test all primary routes (`/`, `/our-pathway`, `/events`, `/connections`, `/groups/the-forge`, `/resources-tools`) on both bare and `www` domains. Test deep-link refreshes — they must hit the SPA fallback and render the correct page.
5. Restore TTL to a normal value (≥ 1 hour).
6. Disable the GitHub Pages deployment workflow.

---

## 6. Optional: SSR upgrade path

Static hosting is right for this site today. If future requirements demand server rendering — for example dynamic event detail pages, authenticated dashboards, gated resources, or full SEO control over generated pages — the site can move from "static SPA" to "server-rendered React" without rewriting components. Two paths:

### 6.1 AWS Amplify Hosting (lowest lift)

- Treat Amplify as managed CI/CD on top of CloudFront + Lambda@Edge.
- Add a framework adapter (e.g. `@vercel/remix` analog or Next.js if migrating).
- Amplify handles SSR, ISR, and edge caching and gives you preview environments per PR.

### 6.2 Custom SSR via CloudFront + Lambda@Edge / Functions

- Replace Vite with a meta-framework (Next.js or Remix), reusing the existing components/content modules verbatim.
- Build for Node, deploy server bundle to Lambda, static assets stay on S3.
- CloudFront routes HTML requests to Lambda, asset requests to S3.
- Best for teams that want full control and already operate Lambdas.

In both cases, the content modules under `src/content/pages/*.js` become the single source of truth for page data and would slot into a CMS (e.g. Contentful, Sanity, or a simple Markdown loader) when editing content needs to leave the codebase.

---

## 7. Operational checklist

- [ ] AWS account + IAM role for OIDC-based GitHub Actions deploys
- [ ] S3 bucket (private, encrypted)
- [ ] ACM cert in us-east-1, validated
- [ ] CloudFront distribution with OAC, custom 403/404 responses, two cache policies
- [ ] Route 53 alias records to CloudFront for apex + `www`
- [ ] Deploy pipeline running on `main` with two-pass S3 sync + CloudFront invalidation
- [ ] Smoke tests for every route, including hard refresh on deep links
- [ ] CloudWatch dashboards / WAF rules / log shipping per security review
