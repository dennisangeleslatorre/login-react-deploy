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
          console.log("tes 2");
        generateToken("EAAKZADLYlA6ABACB5i3rBZAULx1OIRW3oGc3o2wOmaTHJ4pzAougg4kowhUCU3Cn9JznHq3eNA4JAlpJmp4xnhY3VLxEZButpYeM0fF6SOEIwVTkK8o9A6JtOt9ZCAYSLNA9QWl2gWCy8VhiUO82C4ZCZBKD3xhiapKlBqbOYxoHw7uZCIUlAKKMypN0CNRbvoq8yQKwbuDA5gzgwakkx4v");
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