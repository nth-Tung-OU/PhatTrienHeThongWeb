import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";

function AdminLayout() {
  return (
    <div className="app-root">
        <SiteHeader />
        <main className="site-main">
            <Outlet />
        </main>
    </div>
  );
}

export default AdminLayout;