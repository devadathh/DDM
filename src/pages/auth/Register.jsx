import { Link } from "react-router-dom";
import "../../styles/auth.css";

function Register() {
  return (
    <div className="auth-wrapper">

      {/* Logo + Heading */}
      <div className="auth-header">
        <div className="logo-box">
          <span className="shield-icon">🛡️</span>
        </div>
        <h1>Dependency Monitor</h1>
        <p>Start monitoring your dependencies today</p>
      </div>

      {/* Card */}
      <div className="auth-card">
        <h2>Create your account</h2>

        {/* Email */}
        <div className="input-group">
          <label>Email address</label>
          <div className="input-field">
            <span className="input-icon">✉️</span>
            <input type="email" placeholder="you@example.com" />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>
          <div className="input-field">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="••••••••" />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="input-group">
          <label>Confirm password</label>
          <div className="input-field">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="••••••••" />
          </div>
        </div>

        {/* Terms */}
        <div className="terms">
          <label>
            <input type="checkbox" />
            I agree to the{" "}
            <span className="link-text">Terms of Service</span> and{" "}
            <span className="link-text">Privacy Policy</span>
          </label>
        </div>

        {/* Button */}
        <button className="auth-button">Create account</button>

        {/* Footer */}
        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
