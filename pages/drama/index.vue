<template>
    <div class="container not-banner">
        <filter-div v-if="genre_list.length>0" :list="genre_list" 
            type="drama"
            v-on:onChangeType="changeType"
            v-on:onChangeYear="changeYear"
            v-on:onChangeSort="changeSort"
            ></filter-div>
        <div class="card_gird">
            <div v-for="($item) in list" :key="$item.id" class="card_gird-item">
                <movie-card 
                :title="$item.name"
                :score="$item.vote_average"
                :link="'/drama/'+$item.id"
                :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                ></movie-card>
            </div>
        </div>
        <div class="loading">
            <wtw-button @click="getNextPage()">載入更多</wtw-button>
        </div>
    </div>
</template>

<script>
import FilterDiv from '/components/WtwFilter.vue'
import MovieCard from '/components/MovieCard.vue'
import { getDramaGenre,getDiscoverDrama } from '/modules/fetch.js'
import WtwButton from '/components/WtwButton.vue'

export default {
    name: 'MovieView',
    components: {
        FilterDiv,
        MovieCard,
        WtwButton
    },
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function () {
        return {
            genre_list:[],
            list:[],
            genre_id:null,
            year:null,
            page:1,
            sort_value:'popularity',
            title:"戲劇"
        }
    },
    mounted: function () {
        getDramaGenre()
        .then( (response) => {
            this.genre_list =  response.data.genres;
        });
    },
    methods:{
        refreshMovie:function(){
            getDiscoverDrama(this.genre_id,this.year,1,this.sort_value)
            .then( (response) => {
                console.log("更新成功");
                var $data = response.data;
                this.list = $data.results;
                this.page = this.page + 1;

            });
        },
        getNextPage:function(){
            getDiscoverDrama(this.genre_id,this.year,this.page,this.sort_value)
            .then( (response) => {
                var $data = response.data;
                console.log($data);
                $data.results.forEach(element => {
                    console.log(element);
                    this.list.push(element);
                });
                this.page = this.page + 1;
            });
        }, 
        changeYear:function($value){
            this.year = $value;
            this.refreshMovie();
        },
        changeType:function($value){
            this.genre_id = $value;
            this.refreshMovie();
        },
        changeSort:function($value){
            this.sort_value = $value;
            this.refreshMovie();
        }
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/style.scss';
</style>
