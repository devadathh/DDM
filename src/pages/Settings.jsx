import "../styles/settings.css";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

function Settings() {
  const [riskScore, setRiskScore] = useState(70);

  return (
    <MainLayout>
      <div className="settings-content">

        {/* Page Header */}
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account and preferences</p>
        </div>

        {/* ================= PROFILE SETTINGS ================= */}
        <div className="settings-card">
          <div className="settings-section-title">
            Profile Settings
          </div>

          <div className="profile-grid">
            <div className="profile-field">
              <label>Full Name</label>
              <input defaultValue="John Doe" />
            </div>

            <div className="profile-field">
              <label>Email Address</label>
              <input defaultValue="john.doe@company.com" />
            </div>

            <div className="profile-field">
              <label>Company</label>
              <input defaultValue="TechCorp Inc." />
            </div>

            <div className="profile-field">
              <label>Role</label>
              <input defaultValue="Security Engineer" />
            </div>
          </div>

          <button className="btn-primary">Save Profile</button>
        </div>

        {/* ================= NOTIFICATION PREFERENCES ================= */}
        <div className="settings-card">
          <div className="settings-section-title">
            Notification Preferences
          </div>

          {[
            {
              title: "Critical Vulnerabilities",
              desc: "Get notified immediately for critical security issues",
            },
            {
              title: "High Severity Alerts",
              desc: "Notifications for high-priority security alerts",
            },
            {
              title: "Drift Detection",
              desc: "Alerts when dependencies fall behind",
            },
            {
              title: "Weekly Reports",
              desc: "Receive weekly summary reports via email",
            },
            {
              title: "Email Notifications",
              desc: "Enable email delivery for all notifications",
            },
            {
              title: "Slack Integration",
              desc: "Send notifications to Slack channels",
            },
          ].map((item, index) => (
            <div key={index} className="preference-row">
              <div className="preference-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
          ))}

          <button className="btn-primary">Save Preferences</button>
        </div>

        {/* ================= SCAN FREQUENCY ================= */}
        <div className="settings-card">
          <div className="settings-section-title">
            Scan Frequency
          </div>

          <div className="profile-field">
            <label>Automatic Scan Frequency</label>
            <select className="settings-select">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <div className="preference-row">
            <div className="preference-text">
              <h4>Automatic Scanning</h4>
              <p>Run automated scans based on frequency</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="preference-row">
            <div className="preference-text">
              <h4>Scan on Commit</h4>
              <p>Trigger scans when code is committed to repository</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>

          <button className="btn-primary">Save Settings</button>
        </div>

        {/* ================= AI RISK CONFIGURATION ================= */}
        <div className="settings-card">
          <div className="settings-section-title">
            AI Risk Threshold Configuration
          </div>

          <div className="slider-container">
            <div className="slider-label">
              Alert Threshold (Risk Score)
            </div>

            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max="100"
                value={riskScore}
                onChange={(e) => setRiskScore(e.target.value)}
                className="settings-slider"
              />
              <div className="slider-value">
                {riskScore}
              </div>
            </div>
          </div>

          <div className="risk-bar"></div>

          <div className="preference-row">
            <div className="preference-text">
              <h4>Automatic Recommendations</h4>
              <p>AI-generated remediation suggestions</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="preference-row">
            <div className="preference-text">
              <h4>Priority Alerts</h4>
              <p>Use AI to prioritize alert delivery</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>

          <button className="btn-primary">
            Save Configuration
          </button>
        </div>

      </div>
    </MainLayout>
  );
}

export default Settings;
