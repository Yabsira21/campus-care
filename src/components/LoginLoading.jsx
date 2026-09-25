import "./LoginLoading.css";

export default function LoginLoading() {
  return (
    <div className="login-loading-page">
      {/* Left side */}
      <div className="login-loading-illustration">
        <div className="login-loading-logo">
          <div className="login-loading-logo-mark">
            <span />
            <span />
            <span />
          </div>

          <div className="login-loading-logo-text" />
        </div>

        <div className="login-loading-content">
          <div className="login-loading-line large" />
          <div className="login-loading-line large short" />
          <div className="login-loading-line small" />
        </div>
      </div>

      {/* Right side */}
      <div className="login-loading-form-side">
        <div className="login-loading-form">
          <div className="login-loading-eyebrow" />

          <div className="login-loading-title" />

          <div className="login-loading-subtext" />
          <div className="login-loading-subtext short" />

          <div className="login-loading-label" />
          <div className="login-loading-input" />

          <div className="login-loading-button" />
        </div>
      </div>
    </div>
  );
}
