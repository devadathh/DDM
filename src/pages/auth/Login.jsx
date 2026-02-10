import { Link } from "react-router-dom";
import "../../styles/auth.css";

function Login() {
  return (
    <div className="auth-wrapper">

      {/* Logo + Heading */}
      <div className="auth-header">
        <div className="logo-box">
          <span className="shield-icon">🛡️</span>
        </div>
        <h1>Dependency Monitor</h1>
        <p>Track vulnerabilities and version drift</p>
      </div>

      {/* Card */}
      <div className="auth-card">
        <h2>Sign in to your account</h2>

        {/* Email */}
        <div className="input-group">
          <label>Email address</label>
          <div className="input-field">
            <span className="input-icon">✉️</span>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>
          <div className="input-field">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="auth-options">
          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <Link to="/forgot-password" className="forgot-link">
            Forgot password?
          </Link>
        </div>

        {/* Button */}
        <button className="auth-button">Sign in</button>

        {/* Bottom Link */}
        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">Sign up</Link>
        </div>
      </div>

      <p className="bottom-text">
        Open-source security monitoring for your projects
      </p>
    </div>
  );
}

export default Login;
