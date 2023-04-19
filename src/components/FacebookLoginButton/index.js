import React, { useEffect, useState } from 'react'
import './index.css'
const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;


const FacebookLoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("facebookAppId", facebookAppId)
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
        }, []);

        const handleLogin = () => {
            window.FB.login(response => {
                setIsLoggedIn(response.status === 'connected');
                console.log("facebook login", response);
            }, {scope: 'email,user_birthday,user_gender,public_profile' });
        };
        const handleLogout = () => {
            window.FB.logout(response => {
                setIsLoggedIn(false);
            });
        };

    return (
        <div>
            {!isLoggedIn ? (
                <button className='btn btn__login__facebook' onClick={handleLogin}>Login with Facebook</button>
            ) : (
                <button className='btn btn__logout__facebook' onClick={handleLogout}>Logout</button>
            )}
        </div>
    )
}

export default FacebookLoginButton