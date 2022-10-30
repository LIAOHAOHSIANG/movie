import { getPlayList } from '/modules/api.js';
import { getMovie } from '/modules/fetch.js';

export const state = () => ({
    movie_list: [],
    drama_list: []
})

export const mutations = {
    addMovie(state, $value) {
        state.movie_list.push($value);
    },
    remove(state, $value) {
        state.avatar_url = $value;
    },
}

export const actions = {
    init(context) {
        console.log('ad');
        getPlayList()
        .then((response)=>{
            response.data.forEach(element => {
                getMovie(element.video_id)
                .then(movie_response => {
                    context.commit('addMovie', movie_response.data)
                })
            });
        })
    }
}