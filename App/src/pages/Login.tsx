import { useNavigate } from "react-router";
import React, { useState } from 'react';

interface LoginProps {
    onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === 'admin@gmail.com' && password === '123') {
            onLogin();
            nav('/dashboard')
        } else {
            setError('Invalid pass or email')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" placeholder="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} required/>
                </div>
                <div>
                    <input type="text" placeholder="qwerty" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} required/>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}