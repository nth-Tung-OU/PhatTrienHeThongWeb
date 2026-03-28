import { Link, NavLink } from 'react-router-dom'

function SiteHeader() {
    return (
        <header className = "site-header">
            <div className="site-header__inner">
                <Link to={"/"} className="site-logo">Content Hub</Link>
            </div>
            <nav className="site-nav">
                <NavLink to={"/"} end className={({isActive}) => (isActive ? "active" : "")}>Trang chủ</NavLink>
                <NavLink to={"/login"} end className={({isActive}) => (isActive ? "active" : "")}>Đăng nhập</NavLink>
                <NavLink to={"/register"} end className={({isActive}) => (isActive ? "active" : "")}>Đăng ký</NavLink>
                <NavLink to={"/me"} end className={({isActive}) => (isActive ? "active" : "")}>Trang cá nhân</NavLink>
                <NavLink to={"/admin/users"} end className={({isActive}) => (isActive ? "active" : "")}>Quản lý users</NavLink>
            </nav>
        </header>
    )
}

export default SiteHeader;