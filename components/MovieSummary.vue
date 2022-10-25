<template>
    <div class="container not-banner">
        <div v-if="model" class="movie_information">
            <big-movie-card
                @click="display_trailer=true"
                :img_url="model.backdrop_path"
                :has_play_button="video"
            ></big-movie-card>
            <div class="movie_information-content">
                <div class="genre">
                    <div v-for="($item) in genre_list" :key="$item.id"  class="genre_item">{{$item.name}}</div>
                </div>
                <h1>{{model.title || model.name}}
                    <div class="scope">{{model.vote_average.toFixed(1)}}</div>
                </h1>
                <section>
                    <wtw-title>{{model.release_date || model.first_air_date}}</wtw-title>
                    <div v-for="($item,$key) in model.spoken_languages" :key="$key">
                        <wtw-title  v-if="$item.name">{{$item.name}}</wtw-title>
                    </div>
                    <WtwTitle v-if="type=='movie'">{{getHourTime(model.runtime)}}</WtwTitle>
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
        <div v-if="model" class="movie_information ">
            <div class="cast">
                <div v-for="$item in model.credits.cast" :key="$item.id" class="cast_item">
                    <div class="cast_image" :style="{'background-image':'url(https://www.themoviedb.org/t/p/original/'+$item.profile_path+')'}">
                    </div>
                    <div>
                        {{$item.name}}
                    </div>
                    
                </div>
            </div>
        </div>
        <div v-if="model && review_list.length > 0" class="movie_information">
            <div class="review">
                
                <div class="review_item"  v-for="$item in review_list" :key="$item.id">
                    <div class="review_item-author_image" :style="{'background-image':'url(https://www.themoviedb.org/t/p/original/'+$item.author_details.avatar_path+')'}">
                    </div>
                    <div class="review_item-content">
                        <div class="review_item-author_name">
                            {{$item.author_details.username}}
                        </div>
                        <div>
                            星號
                        </div>
                        <div class="review_item-comment">
                            {{$item.content}}
                        </div>

                    </div>
                    <div class="review_item-edit">編輯</div>
                </div>
            </div>
        </div>
        <div v-if="model && recommend_list.length > 0" class="movie_information recommend">
            <movie-area :list="recommend_list" :type="type" title="相關影片"></movie-area>
        </div>        
        <div v-if="video && display_trailer" @click="display_trailer=false" class="trailer" >
            <iframe :src="'https://www.youtube.com/embed/'+video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import BigMovieCard from '/components/BigMovieCard.vue';
import WtwTitle from '/components/WtwTitle.vue';
import MovieArea from '/components/MovieArea.vue'

export default {
    components: { 
        BigMovieCard, 
        WtwTitle,
        MovieArea
    },
    props:{
        model:{
            type: Object,
            require: true
        },
        type:{
            type: String,
            require: true
        }
    },  
    data: function () {
        return {
            movie_id: null,
            genre_list:[],
            provide_list:[],
            video:null,
            recommend_list:[],
            recommend_page:1,
            review_list:[],
            display_trailer:false
        };
    },
    mounted: function () {
        this.model.videos.results.forEach((element,$key) => {
            if($key==0){
                this.video = element.key
            }
        });
        try{
            if(this.type == 'movie'){
                this.provide_list = this.model['watch/providers'].results.TW.rent;
            }else{
                this.provide_list = this.model['watch/providers'].results.TW.flatrate;
            }
        }catch($ex){
            console.log("load error");
        }
        
        this.genre_list = this.model.genres;
        this.recommend_list = this.model['recommendations'].results;
        this.review_list = this.model['reviews'].results;
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
        padding:20px 16px;
        background-color: rgba(104, 107, 114, 0.1);
        border-radius: 20px;
        margin-bottom: 12px;
        display: flex;
        &-content{
            margin-left: 35px;
            .genre{
                display: flex;
                &_item{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-left: 12px;
                    padding-right: 12px;
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
        .cast{
            overflow-x: scroll;
            display: flex;
            &_item{
                width: 76px; 
                margin-right: 13px;
                text-align: center;
            }
            &_image{
                width: 76px;
                height: 75px;
                border-radius: 12px;
                background-size: cover;
                background-position: center;
                background-color: #FFFFFF;
            }
        }
        .review{
            width: 100%;
            &_item{
                background: rgba(27, 30, 37, 1);
                display: flex;
                padding:10px 16px;
                border-radius: 14px;
                width: auto;
                &-author_image{
                    width: 46px;
                    height: 46px;
                    background-color:white;
                    border-radius: 100%;
                    flex:0 0 46px;
                    margin-right: 12px;
                }
                &-author_name{
                    font-size: 16px;
                    font-weight: bold;
                }

                &-content{
                    flex:1 0 auto;
                }
                &-comment{
                    font-size: 14px;
                    font-weight: 400;
                }

                &-edit{
                    color: rgba(193, 1, 113, 1);
                    font-size: 14px;
                    flex:0 0 29px;
                    margin-left: 12px;
                }
            }
        }
        &.recommend{
            padding:0px;
        }
    }
    .trailer{
        background: rgba(27, 30, 37, 0.8);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        iframe{
            width:60vw;
            height:33.75vw;
        }
    }
</style>