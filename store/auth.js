import {getUserAvatar} from '/modules/api.js';

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
        context.dispatch('playlist/init', null, { root: true })
        getUserAvatar()
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