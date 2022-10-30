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

const getPlayList = () => {
    return axios.get(process.env.API_BASE_URL+'play_list', getConfig());
}

const addPlayList = ($video_type, $video_id) => {
    var $data = {
        'video_type' : $video_type,
        'video_id' : $video_id
    };
    return axios.post(process.env.API_BASE_URL+'play_list', $data, getConfig());
}

const removePlayList = ($id) => {
    return axios.delete(process.env.API_BASE_URL+'play_list/'+$id, getConfig());
}


export {
    getUserAvatar,
    getPlayList,
    addPlayList,
    removePlayList
}