const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const facebookAppSecret = process.env.REACT_APP_FACEBOOK_APP_SECRET;

export const fbAsyncInitService = () => {
    let status = false;
    window.fbAsyncInit = function() {
        window.FB.init({
            appId      : facebookAppId,
            xfbml      : true,
            version    : 'v16.0'
        });
        window.FB.getLoginStatus(response => {
            status = response.status === 'connected';
        });
    };
    return status;
}

export const loginService = () => {
    let status = false;
    window.FB.login(response => {
        status = response.status === 'connected';
        console.log("facebook login", response);
    }, {scope: 'email,user_birthday,user_gender,public_profile'});
    return status;
}


export const logoutService = () => {
    let status = true;
    window.FB.logout(response => {
        status = false;
    });
    return status;
}

export const generateToken = (token) => {
    const url = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&
    client_id=${facebookAppId}&
    client_secret=${facebookAppSecret}&
    fb_exchange_token=${token}`;
    fetch(url).then(res => console.log(res));
}