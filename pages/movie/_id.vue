<template>
    <div class="container not-banner">
        <div v-if="model" class="movie_information">
            <big-movie-card></big-movie-card>
            <div class="movie_information-content">
                <h1>{{model.title}}</h1>
                <div>{{model.vote_average}}</div>
                <wtw-title>{{model.release_date}}</wtw-title>
                <wtw-title v-for="($item,$key) in model.spoken_languages" :key="$key">{{$item.name}}</wtw-title>
                <WtwTitle>{{model.runtime}}</WtwTitle>
                <div>導演</div>
                <wtw-title>劇情介紹</wtw-title>
                <div>{{model.overview}}</div>
                <wtw-title>播放平台</wtw-title>
            </div>
        </div>
        <div v-if="model" class="movie_information">
            演員名單
        </div>
        <div v-if="model" class="movie_information">
            評論
        </div>
        <div v-if="model" class="movie_information">
            相關影片
        </div>
        {{model}}
    </div>
</template>

<script>
import { getMovie } from '/modules/fetch.js'
import BigMovieCard from '/components/BigMovieCard.vue';
import WtwTitle from '/components/WtwTitle.vue';

export default {
    components: { 
        BigMovieCard, 
        WtwTitle
    },
    data: function () {
        return {
            movie_id: null,
            model: null
        };
    },
    mounted: function () {
        this.movie_id = this.$route.params.id;
        getMovie(this.movie_id)
            .then((response) => {
            var $data = response.data;
            console.log($data);
            this.model = $data;
        });
    },
    
}
</script>

<style lang="scss">
    .movie_information{
        display: flex;
        padding:20px 16px;
        background-color: rgba(104, 107, 114, 0.1);
        border-radius: 20px;
        margin-bottom: 12px;
        &-content{
            margin-left: 35px;
        }
    }
</style>