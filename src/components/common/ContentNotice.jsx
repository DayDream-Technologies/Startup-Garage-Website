import './ContentNotice.css';

export default function ContentNotice({ children }) {
  return (
    <div className="content-notice" role="status">
      <p className="content-notice__label">Draft content</p>
      <div className="content-notice__body">{children}</div>
    </div>
  );
}
