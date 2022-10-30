import axios from 'axios';

export const state = () => ({
    isLogin: false,
    avatar_url: null
})

export const mutations = {
    changeAvatarUrl(state, $value) {
        state.avatar_url = $value;
    },
    changeLoginState(state, $value) {
        state.isLogin = $value;
    }
}

export const actions = {
    check(context) {
        var $token = localStorage.getItem("access_token");
        if($token){
            context.dispatch('login',$token)
        }
    },
    login(context, $token) {
        var $token = $token;
        localStorage.setItem("access_token", $token);
        context.commit('changeLoginState', true)
        axios.get(process.env.API_BASE_URL+"user_avatar",{
            headers: {
                Authorization: "Bearer " + $token
            }
        })
        .then((response)=>{
            localStorage.setItem("user_avatar", response.data);
            context.commit('changeAvatarUrl', response.data)
        }).catch((response)=>{
            console.log(response);
        });
    },
    logout(context) {
        localStorage.setItem("access_token", null);
        localStorage.setItem("user_avatar", null);
        context.commit('changeLoginState', false)
        context.commit('changeAvatarUrl', null)
        console.log('logout');
    }
}