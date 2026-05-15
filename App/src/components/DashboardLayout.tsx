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
            <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '20px' }}>
                <h1>Dashboard</h1>
                <ul>
                    <li><NavLink to="/dashboard/users">All users</NavLink></li>
                    <li><NavLink to="/dashboard/settings">Settings</NavLink></li>
                    <button onClick={handleLogout}>Quit & Logout</button>
                </ul>
            </aside>
            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </main>
        </div>
    )
}