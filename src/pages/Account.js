import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import '../styles/logreg.css'

export const Account = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const navigate = useNavigate();

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button onClick={() => navigate('/')} type="submit">Create Account</button>
        </form>
        
    </div>
    )
}

export default Account



