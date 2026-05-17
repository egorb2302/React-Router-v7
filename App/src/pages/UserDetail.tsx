import { useParams, Link } from "react-router";
import type { DetailUserType } from "../types/types";

const users: DetailUserType[] = [
    { id: 1, name: 'Joe', mark: 5, info: 'good student' },
    { id: 2, name: 'John', mark: 4, info: 'student with goals' },
    { id: 3, name: 'Mark', mark: 2, info: 'student with the worse marks' },
    { id: 4, name: 'Nick', mark: 5, info: 'basic good-marked student' }
]

export default function UserDetail() {
    const { id } = useParams();
    const user = users.find(u => u.id === Number(id));

    if (!user) return <p>User is not found...</p>

    return (
        <div data-testid="div-element">
            <h1>{user.name}</h1>
            <h2>{user.info}</h2>
            <p>Mark for test: {user.mark}</p>
            <Link to="/dashboard/users">Back to user list</Link>
        </div>
    )
}