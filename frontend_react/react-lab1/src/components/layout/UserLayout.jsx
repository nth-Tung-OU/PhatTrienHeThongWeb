import { Outlet } from "react-router-dom";
import SiteHeader from "./layout/SiteHeader";

function UserLayout() {
  return (
    <div className="app-root">
        <SiteHeader />
        <main className="site-main">
            <Outlet />
        </main>
    </div>
  );
}

export default UserLayout;