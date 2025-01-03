'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserContext } from '../../context/UserContext';
import { registerUser } from '../../services/authService';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userData = await registerUser(username, email, password);
            login(userData); // Automatically log the user in after successful signup
            router.push('/');
        } catch (error) {
            console.error('Signup error:', error.message);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            <div className="mt-3">
                <p>Already have an account? <Link href="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;