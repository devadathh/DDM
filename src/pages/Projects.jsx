import "../styles/dashboard.css";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="dashboard-wrapper">

      {/* SIDEBAR (same as dashboard) */}
      <div className="sidebar">
        <h2>DepMonitor</h2>
        <a>Dashboard</a>
        <a className="active">Projects</a>
        <a>Dependencies</a>
        <a>Vulnerabilities</a>
        <a>Alerts</a>
        <a>Settings</a>
      </div>

      {/* MAIN AREA */}
      <div className="dashboard-main">

        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left">
            <button className="project-dropdown">
              All Projects ▾
            </button>
          </div>

          <div className="topbar-right">
            <span className="icon">🔔</span>
            <span className="icon">⚙</span>
            <div className="avatar">O</div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="dashboard-content">

          {/* HEADER */}
          <div className="projects-header">
            <div>
              <h1>Projects</h1>
              <p>Manage and monitor your software projects</p>
            </div>

            <button className="new-project-btn">
              + New Project
            </button>
          </div>

          {/* SUMMARY CARDS */}
          <div className="projects-summary-row">

            <div className="summary-card">
              <div>
                <p>Total Projects</p>
                <h2>6</h2>
              </div>
              <div className="summary-icon blue"></div>
            </div>

            <div className="summary-card">
              <div>
                <p>Active Vulnerabilities</p>
                <h2 className="red-text">11</h2>
              </div>
              <div className="summary-icon red"></div>
            </div>

            <div className="summary-card">
              <div>
                <p>Total Dependencies</p>
                <h2>1047</h2>
              </div>
              <div className="summary-icon purple"></div>
            </div>

          </div>

          {/* PROJECT CARDS GRID */}
          <div className="projects-grid">

            {/* CARD 1 */}
            <div className="project-card">
              <div className="project-top">
                <div>
                  <h3>react-app</h3>
                  <span className="tech">JavaScript</span>
                </div>
                <span className="danger-icon">⚠</span>
              </div>

              <p>Main React application for customer portal</p>

              <div className="project-stats">
                <div>
                  <p>Dependencies</p>
                  <strong>234</strong>
                </div>
                <div>
                  <p>Vulnerabilities</p>
                  <strong className="red-text">5</strong>
                </div>
              </div>

              <div className="project-footer">
                <span>Scanned 2 hours ago</span>
                <span className="badge critical">CRITICAL</span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="project-card">
              <div className="project-top">
                <div>
                  <h3>api-service</h3>
                  <span className="tech">TypeScript</span>
                </div>
                <span className="warning-icon">⚠</span>
              </div>

              <p>Backend API service built with Node.js</p>

              <div className="project-stats">
                <div>
                  <p>Dependencies</p>
                  <strong>156</strong>
                </div>
                <div>
                  <p>Vulnerabilities</p>
                  <strong className="red-text">2</strong>
                </div>
              </div>

              <div className="project-footer">
                <span>Scanned 5 hours ago</span>
                <span className="badge warning">WARNING</span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="project-card">
              <div className="project-top">
                <div>
                  <h3>frontend-dashboard</h3>
                  <span className="tech">TypeScript</span>
                </div>
                <span className="safe-icon">✔</span>
              </div>

              <p>Admin dashboard for internal use</p>

              <div className="project-stats">
                <div>
                  <p>Dependencies</p>
                  <strong>189</strong>
                </div>
                <div>
                  <p>Vulnerabilities</p>
                  <strong className="green-text">0</strong>
                </div>
              </div>

              <div className="project-footer">
                <span>Scanned 1 hour ago</span>
                <span className="badge safe">SAFE</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
