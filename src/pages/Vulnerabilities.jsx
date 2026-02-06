import "../styles/dashboard.css";
import "../styles/vulnerabilities.css";

function Vulnerabilities() {
  return (
    <div className="dashboard-wrapper">

      {/* === SAME SIDEBAR AS DASHBOARD === */}
      <div className="sidebar">
        <h2>DepMonitor</h2>
        <a>Dashboard</a>
        <a>Projects</a>
        <a>Dependencies</a>
        <a className="active">Vulnerabilities</a>
        <a>Alerts</a>
        <a>Settings</a>
      </div>

      <div className="dashboard-main">

        <div className="topbar">
          <div>All Vulnerabilities</div>
        </div>

        <div className="dashboard-content">

          {/* ================= HEADER ================= */}
          <div className="vuln-header">
            <h1>Vulnerabilities</h1>
            <p>Known security vulnerabilities in your dependencies</p>
          </div>

          {/* ================= STATS ================= */}
          <div className="vuln-stats-row">
            <div className="vuln-stat-card">
              <h4>Critical</h4>
              <div className="vuln-value sev-critical">1</div>
            </div>

            <div className="vuln-stat-card">
              <h4>High</h4>
              <div className="vuln-value sev-high">1</div>
            </div>

            <div className="vuln-stat-card">
              <h4>Medium</h4>
              <div className="vuln-value sev-medium">2</div>
            </div>

            <div className="vuln-stat-card">
              <h4>Low</h4>
              <div className="vuln-value sev-low">1</div>
            </div>
          </div>

          {/* ================= SEARCH & FILTER ================= */}
          <div className="vuln-toolbar">
            <input
              className="vuln-search"
              placeholder="Search CVE ID or dependency..."
            />

            <select className="vuln-filter">
              <option>All Severities</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* ================= VULNERABILITY CARD 1 ================= */}
          <div className="vuln-card">
            <div className="vuln-card-header">
              <span className="vuln-cve">CVE-2024-1234</span>
              <span className="vuln-tag tag-critical">CRITICAL</span>
              <span className="cvss-pill">CVSS: 9.8</span>
            </div>

            <div className="vuln-description">
              Prototype pollution vulnerability that could lead to remote code execution.
            </div>

            <div className="vuln-meta">
              Dependency: lodash@4.17.20 &nbsp; | &nbsp;
              Project: react-app &nbsp; | &nbsp;
              Published: 2024-01-10
            </div>

            <div className="vuln-footer">
              <a className="vuln-link">View NVD Details</a>

              <div className="vuln-actions">
                <button className="btn-ignore">Ignore</button>
                <button className="btn-fix">Fix Now</button>
              </div>
            </div>
          </div>

          {/* ================= VULNERABILITY CARD 2 ================= */}
          <div className="vuln-card">
            <div className="vuln-card-header">
              <span className="vuln-cve">CVE-2024-5678</span>
              <span className="vuln-tag tag-high">HIGH</span>
              <span className="cvss-pill">CVSS: 7.5</span>
            </div>

            <div className="vuln-description">
              Cross-site scripting vulnerability due to improper input validation.
            </div>

            <div className="vuln-meta">
              Dependency: express@4.18.2 &nbsp; | &nbsp;
              Project: api-service &nbsp; | &nbsp;
              Published: 2024-01-12
            </div>

            <div className="vuln-footer">
              <a className="vuln-link">View NVD Details</a>

              <div className="vuln-actions">
                <button className="btn-ignore">Ignore</button>
                <button className="btn-fix">Fix Now</button>
              </div>
            </div>
          </div>

          {/* ================= VULNERABILITY CARD 3 ================= */}
          <div className="vuln-card">
            <div className="vuln-card-header">
              <span className="vuln-cve">CVE-2024-3456</span>
              <span className="vuln-tag tag-low">LOW</span>
              <span className="cvss-pill">CVSS: 3.7</span>
            </div>

            <div className="vuln-description">
              Information disclosure through verbose error messages.
            </div>

            <div className="vuln-meta">
              Dependency: axios@1.5.0 &nbsp; | &nbsp;
              Project: mobile-app &nbsp; | &nbsp;
              Published: 2024-01-08
            </div>

            <div className="vuln-footer">
              <a className="vuln-link">View NVD Details</a>

              <div className="vuln-actions">
                <button className="btn-ignore">Ignore</button>
                <button className="btn-fix">Fix Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Vulnerabilities;
