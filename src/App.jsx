import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

// Main Pages
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Dependencies from "./pages/Dependencies";
import Vulnerabilities from "./pages/Vulnerabilities";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Routes>

      {/* Auth Pages (No Sidebar Layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main App Layout */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="dependencies" element={<Dependencies />} />
        <Route path="vulnerabilities" element={<Vulnerabilities />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  );
}

export default App;
