import React, { useState } from 'react';
import InputComponent from '../InputComponent'
import './index.css'
import FacebookLoginButton from '../FacebookLoginButton';


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username: " + username);
        console.log("Password: " + password);
    };

    return (
        <div className='container__login'>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <InputComponent
                    type="username"
                    label="User"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <InputComponent
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">Login</button>
            </form>
            <FacebookLoginButton/>
        </div>
    );
}

export default LoginForm;