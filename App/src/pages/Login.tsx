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
        <div className="absolute w-80 h-auto rounded-2xl 
        justify-self-center mt-50 bg-zinc-50 flex-col p-5">
            <h1 className="w-full text-center text-3xl font-semibold mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="w-full">
                    <span className="text-1xs pl-1">email</span>
                    <input className="w-full border-none bg-blue-100 h-10 p-2 rounded-xl font-semibold"
                    type="email" placeholder="email@example.com" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} required/>
                </div>
                <div className="w-full">
                    <span className="text-1xs pl-1">password</span>
                    <input className="w-full border-none bg-blue-100 
                    h-10 p-2 rounded-xl font-semibold"
                    type="text" placeholder="qwerty123" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} required/>
                </div>
                {error && <p className="text-red-500 pl-2">{error}</p>}
                <div className="w-full mt-10 flex-col">
                    <p className="text-xs text-gray-500 mb-2">
                        email is "admin@gmail.com", and password is "123"
                    </p>
                    <button className="w-full bg-blue-200 h-12 
                    rounded-2xl cursor-pointer text-2xs font-bold 
                    hover:bg-blue-300 active:scale-95 
                    active:opacity-80 duration-200" type="submit">Login</button>
                </div>      
            </form>
        </div>
    )
}