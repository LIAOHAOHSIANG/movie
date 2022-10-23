<template>
    <div>
        <WtwBanner></WtwBanner>
        <div>
            <MovieArea title="熱門電影" :list="hot_movie_list"></MovieArea>
            <MovieArea title="熱門韓劇" type="drama" :list="hot_korean_drama_list" :is-dark="true"></MovieArea>
            <MovieArea title="熱門陸劇、台劇"  type="drama" :list="hot_china_drama_list"></MovieArea>
            <MovieArea title="熱門美劇"  type="drama" :list="hot_america_drama_list" :is-dark="true"></MovieArea>
        </div>
    </div>
</template>

<script>
import WtwBanner from "/components/WtwBanner.vue";
import MovieArea from '/components/MovieArea.vue';
import { getPopularMovie, getPopularDrama} from '/modules/fetch.js'

export default {
    name: 'HomeView',
    components: {
        WtwBanner,
        MovieArea
    },
    data:function(){
        return {
            hot_movie_list:[],
            hot_korean_drama_list:[],
            hot_china_drama_list:[],
            hot_america_drama_list:[]
        }
    },
    mounted:function(){
        getPopularMovie()
        .then((response) => {
            var $data = response.data;
            this.hot_movie_list = $data.results;
        });

        getPopularDrama("ko")
        .then((response) => {
            var $data = response.data;
            this.hot_korean_drama_list = $data.results;
        });

        getPopularDrama("zh")
        .then((response) => {
            var $data = response.data;
            this.hot_china_drama_list = $data.results;
        });

        getPopularDrama("en")
        .then((response) => {
            var $data = response.data;
            this.hot_america_drama_list = $data.results;
        });
    }
}
</script>
