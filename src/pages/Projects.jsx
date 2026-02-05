import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-wrapper">

      <div className="sidebar">
        <h2>DepMonitor</h2>
        <a className="active">Dashboard</a>
        <a>Projects</a>
        <a>Dependencies</a>
        <a>Vulnerabilities</a>
        <a>Alerts</a>
        <a>Settings</a>
      </div>

      <div className="projects-main">

        <div className="topbar">
          <div>All Projects</div>
          <button>New Project</button>
        </div>

        <div className="projects-content">

          <div className="projects-header">
            <h1>Projects</h1>
            <p>Manage and monitor your software projects</p>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <h4>Total Projects</h4>
              <div className="stat-value">6</div>
            </div>

            <div className="stat-card">
              <h4>Active Vulnerabilities</h4>
              <div className="stat-value">11</div>
            </div>

            <div className="stat-card">
              <h4>Total Dependencies</h4>
              <div className="stat-value">1047</div>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h3>react-app</h3>
              <div className="project-language">JavaScript</div>
              <div className="project-description">
                Main React application for customer portal
              </div>

              <div className="project-metrics">
                <span>Dependencies: 234</span>
                <span>Vulnerabilities: 5</span>
              </div>

              <div className="project-footer">
                <span>Scanned 2 hours ago</span>
                <span className="badge badge-critical">CRITICAL</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
