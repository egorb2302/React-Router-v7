import { Link, useLocation } from 'react-router';

export default function NotFound() {
    const url = useLocation()
    return (
        <div>
            <h1 style={{ color: 'red' }}>404</h1>
            <h2>Page on url "{url.pathname}" has not found</h2>
            <Link to="/">Back to Home</Link>
        </div>
    )
}