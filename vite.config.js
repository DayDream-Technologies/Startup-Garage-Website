import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// When deploying to a project GitHub Pages site (e.g. user.github.io/Startup-Garage-Website/),
// set VITE_BASE to "/Startup-Garage-Website/". For a custom domain or AWS, leave it as "/".
const base = process.env.VITE_BASE || '/';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base,
    define: {
      __EVENTBRITE_API_KEY__: JSON.stringify(env.Enetbrite_API_KEY || ''),
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
