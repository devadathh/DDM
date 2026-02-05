import "../../styles/auth.css";

function Register() {
  return (
    <div className="auth-container">
      <div className="logo-box">🛡</div>

      <h1 className="auth-title">Dependency Drift Monitor</h1>
      <p className="auth-subtitle">
        Start monitoring your dependencies today
      </p>

      <div className="auth-card">
        <h2>Create your account</h2>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="form-group">
          <label>Confirm password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="checkbox-row">
          <input type="checkbox" />
          I agree to the <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>
        </div>

        <button className="auth-button">Create account</button>

        <div className="auth-footer">
          Already have an account? <span>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
