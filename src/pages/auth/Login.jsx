
import "../../styles/auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="logo-box">🛡</div>

      <h1 className="auth-title">Dependency Drift Monitor</h1>
      <p className="auth-subtitle">
        Track vulnerabilities and version drift
      </p>

      <div className="auth-card">
        <h2>Sign in to your account</h2>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="auth-row">
          <div>
            <input type="checkbox" /> Remember me
          </div>
          <span style={{ color: "#2563eb", cursor: "pointer" }}>
            Forgot password?
          </span>
        </div>

        <button className="auth-button">Sign in</button>

        <div className="auth-footer">
          Don't have an account?{" "}
          <span style={{ color: "#2563eb", cursor: "pointer" }}>
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
