'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '../../context/UserContext';
import { loginUser } from '../../services/authService';
import Link from 'next/link';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null); 
    const { login } = useContext(UserContext);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser(username, password);
            login(userData);
            router.push('/');
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {errorMessage && ( 
                    <div id="login-error" className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}

                <button type="submit" className="btn btn-primary" id="submit-button">Login</button>
                <div className="mt-3">
                    <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;