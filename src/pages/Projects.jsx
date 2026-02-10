import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Projects</h1>
          <p>Manage and monitor your software projects</p>
        </div>

        <button className="primary-btn">
          + New Project
        </button>
      </div>

      {/* Stats Cards */}
      <div className="projects-stats">

        <div className="stat-card">
          <div className="stat-title">Total Projects</div>
          <div className="stat-number">6</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Active Vulnerabilities</div>
          <div className="stat-number red">11</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Total Dependencies</div>
          <div className="stat-number">1047</div>
        </div>

      </div>

      {/* Project Grid */}
      <div className="project-grid">

        {/* Project Card */}
        <div className="project-card critical">
          <div className="project-header">
            <div>
              <h3>react-app</h3>
              <span className="tech-tag">JavaScript</span>
            </div>
            <span className="alert-icon">⚠</span>
          </div>

          <p>Main React application for customer portal</p>

          <div className="project-stats">
            <div>
              <span>Dependencies</span>
              <strong>234</strong>
            </div>
            <div>
              <span>Vulnerabilities</span>
              <strong className="red">5</strong>
            </div>
          </div>

          <div className="project-footer">
            <span>Scanned 2 hours ago</span>
            <span className="status-badge critical">CRITICAL</span>
          </div>
        </div>

        {/* api-service */}
        <div className="project-card warning">
          <div className="project-header">
            <div>
              <h3>api-service</h3>
              <span className="tech-tag">TypeScript</span>
            </div>
            <span className="alert-icon">⚠</span>
          </div>

          <p>Backend API service built with Node.js</p>

          <div className="project-stats">
            <div>
              <span>Dependencies</span>
              <strong>156</strong>
            </div>
            <div>
              <span>Vulnerabilities</span>
              <strong className="red">2</strong>
            </div>
          </div>

          <div className="project-footer">
            <span>Scanned 5 hours ago</span>
            <span className="status-badge warning">WARNING</span>
          </div>
        </div>

        {/* frontend-dashboard */}
        <div className="project-card safe">
          <div className="project-header">
            <div>
              <h3>frontend-dashboard</h3>
              <span className="tech-tag">TypeScript</span>
            </div>
            <span className="alert-icon green">✔</span>
          </div>

          <p>Admin dashboard for internal use</p>

          <div className="project-stats">
            <div>
              <span>Dependencies</span>
              <strong>189</strong>
            </div>
            <div>
              <span>Vulnerabilities</span>
              <strong className="green">0</strong>
            </div>
          </div>

          <div className="project-footer">
            <span>Scanned 1 hour ago</span>
            <span className="status-badge safe">SAFE</span>
          </div>
        </div>

        {/* mobile-app */}
        <div className="project-card warning">
          <div className="project-header">
            <div>
              <h3>mobile-app</h3>
              <span className="tech-tag">JavaScript</span>
            </div>
            <span className="alert-icon">⚠</span>
          </div>

          <p>React Native mobile application</p>

          <div className="project-stats">
            <div>
              <span>Dependencies</span>
              <strong>312</strong>
            </div>
            <div>
              <span>Vulnerabilities</span>
              <strong className="red">1</strong>
            </div>
          </div>

          <div className="project-footer">
            <span>Scanned 3 hours ago</span>
            <span className="status-badge warning">WARNING</span>
          </div>
        </div>

        {/* data-pipeline */}
        <div className="project-card safe">
          <div className="project-header">
            <div>
              <h3>data-pipeline</h3>
              <span className="tech-tag">Python</span>
            </div>
            <span className="alert-icon green">✔</span>
          </div>

          <p>Python-based data processing pipeline</p>

          <div className="project-stats">
            <div>
              <span>Dependencies</span>
              <strong>67</strong>
            </div>
            <div>
              <span>Vulnerabilities</span>
              <strong className="green">0</strong>
            </div>
          </div>

          <div className="project-footer">
            <span>Scanned 4 hours ago</span>
            <span className="status-badge safe">SAFE</span>
          </div>
        </div>

        {/* ml-service */}
        <div className="project-card warning">
          <div className="project-header">
            <div>
              <h3>ml-service</h3>
              <span className="tech-tag">Python</span>
            </div>
            <span className="alert-icon">⚠</span>
          </div>

          <p>Machine learning model serving API</p>

          <div className="project-stats">
            <div>
              <span>Dependencies</span>
              <strong>89</strong>
            </div>
            <div>
              <span>Vulnerabilities</span>
              <strong className="red">3</strong>
            </div>
          </div>

          <div className="project-footer">
            <span>Scanned 6 hours ago</span>
            <span className="status-badge warning">WARNING</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Projects;
