import { Link } from 'react-router'; 

export default function Settings() {
    return (
        <div>
            <h1>Settings</h1>
            <form action="">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="phone" />
                <input type="text" placeholder="email" />
                <button>Save</button>
            </form>
            <Link to="/">Back to Home</Link>
        </div>
    )
}