import React, { useEffect, useState } from 'react'
import './index.css'
import { generateToken, loginService, logoutService } from '../../services/facebook/FacebookService';

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

const FacebookLoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : facebookAppId,
                xfbml      : true,
                version    : 'v16.0'
            });
            window.FB.getLoginStatus(response => {
                setIsLoggedIn(response.status === 'connected');
            });
        };
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/es_LA/all.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
          console.log("fetch");
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