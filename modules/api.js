import axios from "axios";



const getConfig = () => {
    var $token = localStorage.getItem('access_token');
    return {
        headers: {
            Authorization: "Bearer " + $token
        }
    };
}

const getUserAvatar = async() => {
    return axios.get(process.env.API_BASE_URL+"user_avatar", getConfig())
}



export {
    getUserAvatar
}