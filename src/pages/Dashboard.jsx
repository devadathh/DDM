import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">

      <div className="sidebar">
        <h2>DepMonitor</h2>
        <a className="active">Dashboard</a>
        <a>Projects</a>
        <a>Dependencies</a>
        <a>Vulnerabilities</a>
        <a>Alerts</a>
        <a>Settings</a>
      </div>

      <div className="dashboard-main">

        <div className="topbar">
          <div>All Projects</div>
          <button>Scan All Projects</button>
        </div>

        <div className="dashboard-content">

          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Overview of your dependency security status</p>
          </div>

          <div className="card-row">
            <div className="dashboard-card">
              <h3>Total Projects</h3>
              <div className="card-value">24</div>
              <div className="card-subtext">3 new this month</div>
            </div>

            <div className="dashboard-card">
              <h3>Total Dependencies</h3>
              <div className="card-value">1,248</div>
              <div className="card-subtext">Across all projects</div>
            </div>

            <div className="dashboard-card">
              <h3>Vulnerable Dependencies</h3>
              <div className="card-value">32</div>
              <div className="card-subtext">5 critical issues</div>
            </div>

            <div className="dashboard-card">
              <h3>Dependency Drift</h3>
              <div className="card-value">28</div>
              <div className="card-subtext">Updates available</div>
            </div>
          </div>

          <div className="chart-row">
            <div className="chart-box">
              <h2>Vulnerability Trends</h2>
            </div>

            <div className="chart-box">
              <h2>Dependency Drift Trends</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
