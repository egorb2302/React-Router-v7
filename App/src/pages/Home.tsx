import { Link } from 'react-router'
import type { GeneralUserType } from '../types/types';

const users: GeneralUserType[] = [
    { id: 1, name: 'Joe', mark: 5 },
    { id: 2, name: 'John', mark: 4 },
    { id: 3, name: 'Mark', mark: 2 },
    { id: 4, name: 'Nick', mark: 5 }
]

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to students dashboard!</p>
            <p>Users online: {users.length}</p>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}