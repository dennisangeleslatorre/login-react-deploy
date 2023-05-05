import axios from 'axios';

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const facebookAppSecret = process.env.REACT_APP_FACEBOOK_APP_SECRET;

export const loginService = async () => {
    return new Promise( (resolve, reject) => {
        try {
            window.FB.login((res) => {
                resolve(res);
            }, {scope: 'email,user_birthday,user_gender,public_profile'});
        } catch (error) {
            console.log("error", error);
            reject(error);
        }
    })
}


export const logoutService = async () => {
    return new Promise( (resolve, reject) => {
        try {
            window.FB.logout(response => {
                resolve(false);
            });
        } catch (error) {
            reject(error);
        }
    })
}

export const generateToken = async (token) => {
    const url = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${facebookAppId}&client_secret=${facebookAppSecret}&fb_exchange_token=${token}`;
    const response = await axios.get(url);
    return response.data;
}

export const getDataUser = async (userId, token) => {
    const url = `https://graph.facebook.com/${userId}?fields=id,name,email,picture&access_token=${token}`;
    const response = await axios.get(url);
    console.log("body", response.data);
    return response.data;
}

export const loginResponse = async () => {
    const responseLogin = await loginService();
    if(responseLogin.status === "connected") {
        const bodyResponse = {status: "connected", isLogged: true};
        bodyResponse.longLivedToken = await generateToken(responseLogin.authResponse.accessToken);
        bodyResponse.userData = await getDataUser(responseLogin.authResponse.userID, responseLogin.authResponse.accessToken);
        return bodyResponse;
    }
    return {status: "disconnected", isLogged: false};
}