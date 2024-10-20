import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Admin' && password === '12345') {
            localStorage.setItem('isAuthenticated', 'true');
            window.location.href = '/Profile'; // Перенаправлення на профіль
        } else {
            setError('Неправильне ім’я користувача або пароль');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Авторизація</h2>
                <input 
                    type="text" 
                    placeholder="Ім’я користувача" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Пароль" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default Login;
