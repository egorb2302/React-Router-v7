import { NavLink, Outlet, useNavigate } from 'react-router';

interface DashboardLogoutProps {
    onLogout: () => void,
}

export default function DashboardLayout({ onLogout }: DashboardLogoutProps) {
    const nav = useNavigate();

    const handleLogout = () => {
        if (onLogout) onLogout();
        nav('/login');
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside className="w-3xs border-r-2 p-5 bg-cyan-950">
                <div className="bg-zinc-50 w-fit p-4 pr-6 rounded-2xl mb-6">
                    <h1 className="text-3xl font-semibold">Dashboard<span className="ml-2 text-3xl font-bold text-blue-950">.</span></h1>
                </div>
                <ul className="flex-col flex gap-3">
                    <div className="cursor-pointer">
                        <li className="w-40 p-2 bg-zinc-50 rounded-xl font-semibold text-center">
                            <NavLink to="/dashboard/users">All users</NavLink>
                        </li>
                    </div>
                    <div className="cursor-pointer">
                        <li className="w-40 p-2 bg-zinc-50 rounded-xl font-semibold text-center">
                            <NavLink to="/dashboard/settings">Settings</NavLink>
                        </li>
                    </div>  
                    <button className="w-40 p-2 bg-red-800 text-white text-xs 
                    tracking-wider font-semibold rounded-b-2xl cursor-pointer" 
                    onClick={handleLogout}>Quit & Logout</button>
                </ul>
            </aside>
            <main className="w-full">
                <Outlet />
            </main>
        </div>
    )
}