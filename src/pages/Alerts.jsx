import "../styles/alerts.css";
import MainLayout from "../layouts/MainLayout";

function Alerts() {
  return (
    <MainLayout>
      <div className="alerts-content">

        {/* Page Header */}
        <div className="alerts-header">
          <h1>Alerts</h1>
          <p>Monitor and manage security alerts</p>
        </div>

        {/* ================= STATS ================= */}
        <div className="alerts-stats-row">
          <div className="alerts-stat-card">
            <h4>Total Alerts</h4>
            <div className="alerts-value">6</div>
          </div>

          <div className="alerts-stat-card">
            <h4>Open Alerts</h4>
            <div className="alerts-value value-open">4</div>
          </div>

          <div className="alerts-stat-card">
            <h4>Resolved</h4>
            <div className="alerts-value value-resolved">2</div>
          </div>
        </div>

        {/* ================= SEARCH + FILTER ================= */}
        <div className="alerts-toolbar">
          <input
            className="alerts-search"
            placeholder="Search alerts..."
          />

          <div>
            <select className="alerts-filter">
              <option>All Status</option>
              <option>Open</option>
              <option>Resolved</option>
            </select>

            <select className="alerts-filter">
              <option>All Types</option>
              <option>Vulnerability</option>
              <option>Version Drift</option>
            </select>
          </div>
        </div>

        {/* ================= PROJECT GROUP 1 ================= */}
        <div className="alert-group">
          <div className="alert-group-header">
            <span>react-app</span>
            <span>3 alerts</span>
          </div>

          {/* Alert 1 */}
          <div className="alert-card">
            <div className="alert-content">
              <div className="alert-title">
                Critical vulnerability detected in lodash package
                <span className="alert-status status-open">
                  OPEN
                </span>
              </div>

              <div className="alert-meta">
                Dependency: lodash@4.17.20 &nbsp; | &nbsp;
                Severity: <span className="sev-critical">CRITICAL</span>
                &nbsp; | &nbsp; CVE: CVE-2024-1234
              </div>

              <div className="alert-time">
                2024-01-19 14:30
              </div>
            </div>

            <div className="alert-actions">
              <button className="btn-dismiss">
                Dismiss
              </button>
              <button className="btn-resolve">
                Resolve
              </button>
            </div>
          </div>

          {/* Alert 2 */}
          <div className="alert-card">
            <div className="alert-content">
              <div className="alert-title">
                Version drift detected - 2 versions behind
                <span className="alert-status status-open">
                  OPEN
                </span>
              </div>

              <div className="alert-meta">
                Dependency: webpack@5.88.0 &nbsp; | &nbsp;
                Severity: <span className="sev-low">LOW</span>
              </div>

              <div className="alert-time">
                2024-01-18 14:10
              </div>
            </div>

            <div className="alert-actions">
              <button className="btn-dismiss">
                Dismiss
              </button>
              <button className="btn-resolve">
                Resolve
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROJECT GROUP 2 ================= */}
        <div className="alert-group">
          <div className="alert-group-header">
            <span>api-service</span>
            <span>1 alert</span>
          </div>

          <div className="alert-card">
            <div className="alert-content">
              <div className="alert-title">
                High severity vulnerability found in express
                <span className="alert-status status-open">
                  OPEN
                </span>
              </div>

              <div className="alert-meta">
                Dependency: express@4.18.2 &nbsp; | &nbsp;
                Severity: <span className="sev-high">HIGH</span>
                &nbsp; | &nbsp; CVE: CVE-2024-5678
              </div>

              <div className="alert-time">
                2024-01-19 12:15
              </div>
            </div>

            <div className="alert-actions">
              <button className="btn-dismiss">
                Dismiss
              </button>
              <button className="btn-resolve">
                Resolve
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROJECT GROUP 3 ================= */}
        <div className="alert-group">
          <div className="alert-group-header">
            <span>mobile-app</span>
            <span>1 alert</span>
          </div>

          <div className="alert-card">
            <div className="alert-content">
              <div className="alert-title">
                Low severity vulnerability in axios
                <span className="alert-status status-resolved">
                  RESOLVED
                </span>
              </div>

              <div className="alert-meta">
                Dependency: axios@1.5.0 &nbsp; | &nbsp;
                Severity: <span className="sev-low">LOW</span>
                &nbsp; | &nbsp; CVE: CVE-2024-3456
              </div>

              <div className="alert-time">
                2024-01-18 16:20
              </div>
            </div>

            <div className="alert-actions">
              <span style={{ color: "#059669", fontWeight: "600" }}>
                ✔
              </span>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default Alerts;
