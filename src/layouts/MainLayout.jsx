import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px", flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
