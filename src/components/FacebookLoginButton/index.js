import React, { useEffect, useState } from 'react'
import './index.css'
import { fbAsyncInitService, generateToken, loginService, logoutService } from '../../services/facebook/FacebookService';

const FacebookLoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(fbAsyncInitService());
        generateToken("EAAKZADLYlA6ABAIemopFpfAeW0y0ZCgRjbDF6HYA8IGinsUaN5fy12BqCuAZAZBimf3QW831PuMpzbBP6EkG61B34mTY2QZB0y8OjqXhmg43jwX5OoPb3zA2LxEPPRBtQoEUoLxASlNJJFCrFiyqp9tFjEa5oZCcvWDbhe2AVZCyqw7i4ShvTJeNHQClPaFMBRR43dSkER28d1GauY2ziT5");
    }, []);

    const handleClickLogin = () => {
        setIsLoggedIn(loginService());
    };

    const handleLogout = () => {
        setIsLoggedIn(logoutService());
    };

    return (
        <div>
            {!isLoggedIn ? (
                <button className='btn btn__login__facebook' onClick={handleClickLogin}>Login with Facebook</button>
            ) : (
                <button className='btn btn__logout__facebook' onClick={handleLogout}>Logout</button>
            )}
        </div>
    )
}

export default FacebookLoginButton