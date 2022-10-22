<template>
    <div class="container not-banner">
        <div v-if="model" class="movie_information">
            <big-movie-card
                :img_url="model.backdrop_path"
            ></big-movie-card>
            <div class="movie_information-content">
                <div class="genre">
                    <div v-for="($item) in genre_list" :key="$item.id"  class="genre_item">{{$item.name}}</div>
                </div>
                <h1>{{model.title}}
                    <div class="scope">{{model.vote_average}}</div>
                </h1>
                <section>
                    <wtw-title>{{model.release_date}}</wtw-title>
                    <div v-for="($item,$key) in model.spoken_languages" :key="$key">
                        <wtw-title  v-if="$item.name">{{$item.name}}</wtw-title>
                    </div>
                    <WtwTitle>{{getHourTime(model.runtime)}}</WtwTitle>
                </section>
                <section>
                    <wtw-title>導演 Robert Zemeckis</wtw-title>
                </section>
                <section>
                    <wtw-title>劇情介紹</wtw-title>
                </section>
                <section>
                    <div>{{model.overview}}</div>
                </section>
                <section>
                    <wtw-title>播放平台</wtw-title>
                </section>
                <section>
                    <div v-for="($item,$id) in provide_list" :key="$id" class="provider" :style="{'background-image':'url(https://www.themoviedb.org/t/p/original/'+$item.logo_path+')'}" ></div>
                </section>
            </div>
        </div>
        <div v-if="model" class="movie_information">
            演員名單
        </div>
        <div v-if="model" class="movie_information">
            評論
        </div>
        <div v-if="model" class="movie_information">
            <movie-area title="相關影片"></movie-area>
        </div>
        {{model}}
        
        <div>
            <iframe v-if="video" width="560" height="315" :src="'https://www.youtube.com/embed/'+video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import { getMovie } from '/modules/fetch.js'
import BigMovieCard from '/components/BigMovieCard.vue';
import WtwTitle from '/components/WtwTitle.vue';
import MovieArea from '/components/MovieArea.vue'

export default {
    components: { 
        BigMovieCard, 
        WtwTitle,
        MovieArea
    },
    data: function () {
        return {
            movie_id: null,
            model: null,
            genre_list:[],
            provide_list:[],
            video:null
        };
    },
    mounted: function () {
        this.movie_id = this.$route.params.id;
        getMovie(this.movie_id)
            .then((response) => {
            var $data = response.data;
            console.log($data);
            this.model = $data;
            this.model.videos.results.forEach((element,$key) => {
                if($key==0){
                    this.video = element.key
                }
            });
            this.provide_list = this.model['watch/providers'].results.TW.rent;
            this.genre_list = this.model.genres;
        });
    },
    methods:{
        getHourTime:function($time) {
            var $hour = Math.floor($time / 60);
            var $mine = $time % 60;

            return $hour + "小時"+ $mine +"分鐘"
        }
    }
    
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';
    .movie_information{
        display: flex;
        padding:20px 16px;
        background-color: rgba(104, 107, 114, 0.1);
        border-radius: 20px;
        margin-bottom: 12px;
        &-content{
            margin-left: 35px;

            .genre{
                display: flex;
                &_item{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 62.98px;
                    height: 30.32px;
                    background: #161616;
                    border: 0.6px solid #FFFFFF;
                    border-radius: 4px;
                    font-size: 16px;
                    margin-right: 10px;
                }
            }

            h1{
                margin: 0px;
                margin-top: 17.84px;
                display: flex;
                align-items: center;
                .scope{
                    color: transparent; 
                    background: $primary_color;
                    background-clip: text;
                    font-size: 50px;
                    margin-left: 18px;
                    width: 75px;
                }
            }
            section{
                margin-top: 12px;
                display: flex;
                .wtw-title{
                    margin-right: 18px;
                }
                .provider{
                    width: 36px;
                    height: 36px;
                    background-position: center;
                    background-size: cover;
                    margin-right: 9px;
                }
            }
        }
    }
</style>