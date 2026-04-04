export default function Sidebar() {
    return (
        <aside className="hidden border-r border-slate-200/80 bg-slate-900 text-slate-300 lg:block">
            <div className="sticky top-[57px] flex flex-col gap-1 p-4">
                <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Menu</p>
                <nav className="flex flex-col gap-0.5">
                    <a href="/dashboard" className="rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/10 hover:text-white">Tổng quan</a>
                    <a href="/users" className="rounded-lg bg-white/10 px-3 py-2.5 text-sm font-semibold text-white shadow-inner">Người dùng</a>
                    <a href="/courses" className="rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/10 hover:text-white">Khóa học</a>
                    <a href="/settings" className="rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-white/10 hover:text-white">Cài đặt</a>
                </nav>
            </div>
        </aside>
    )
}