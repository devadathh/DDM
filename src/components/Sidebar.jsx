import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", borderRight: "1px solid gray", padding: "20px" }}>
      <h3>DepMonitor</h3>
      <Link to="/dashboard">Dashboard</Link><br /><br />
      <Link to="/projects">Projects</Link><br /><br />
      <Link to="/dependencies">Dependencies</Link><br /><br />
      <Link to="/vulnerabilities">Vulnerabilities</Link><br /><br />
      <Link to="/alerts">Alerts</Link><br /><br />
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Sidebar;
