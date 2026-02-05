import "../styles/dependencies.css";
import MainLayout from "../layouts/MainLayout";

function Dependencies() {
  return (
    <MainLayout>
      <div className="dependencies-content">

        {/* Header */}
        <div className="dependencies-header">
          <h1>Dependencies</h1>
          <p>Monitoring all projects</p>
        </div>

        {/* Stats */}
        <div className="dep-stats-row">
          <div className="dep-stat-card">
            <h4>Total</h4>
            <div className="dep-value">8</div>
          </div>

          <div className="dep-stat-card">
            <h4>Vulnerable</h4>
            <div className="dep-value severity-critical">3</div>
          </div>

          <div className="dep-stat-card">
            <h4>Version Drift</h4>
            <div className="dep-value severity-high">3</div>
          </div>

          <div className="dep-stat-card">
            <h4>Up to Date</h4>
            <div className="dep-value severity-safe">2</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="dep-toolbar">
          <input
            className="dep-search"
            placeholder="Search dependencies..."
          />

          <select className="dep-filter">
            <option>All Status</option>
            <option>Vulnerable</option>
            <option>Version Drift</option>
            <option>Up to Date</option>
          </select>
        </div>

        {/* Table */}
        <table className="dep-table">
          <thead>
            <tr>
              <th>DEPENDENCY</th>
              <th>CURRENT VERSION</th>
              <th>LATEST VERSION</th>
              <th>STATUS</th>
              <th>SEVERITY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>react</td>
              <td><span className="version-pill">18.2.0</span></td>
              <td><span className="version-pill">18.3.1</span></td>
              <td>
                <span className="status-badge status-drift">
                  Version Drift
                </span>
              </td>
              <td>-</td>
              <td><a className="action-link">Details</a></td>
            </tr>

            <tr>
              <td>lodash</td>
              <td><span className="version-pill">4.17.20</span></td>
              <td><span className="version-pill">4.17.21</span></td>
              <td>
                <span className="status-badge status-vulnerable">
                  Vulnerable
                </span>
              </td>
              <td>
                <span className="severity-critical">CRITICAL</span>
              </td>
              <td><a className="action-link">Details</a></td>
            </tr>

            <tr>
              <td>axios</td>
              <td><span className="version-pill">1.6.0</span></td>
              <td><span className="version-pill">1.6.0</span></td>
              <td>
                <span className="status-badge status-safe">
                  Up to Date
                </span>
              </td>
              <td>-</td>
              <td><a className="action-link">Details</a></td>
            </tr>

          </tbody>
        </table>

      </div>
    </MainLayout>
  );
}

export default Dependencies;
