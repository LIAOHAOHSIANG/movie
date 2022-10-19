<template>
    <div class="container not-banner">
        <filter-div v-if="genre_list.length>0" :list="genre_list" 
            v-on:onChangeType="changeType"
            v-on:onChangeYear="changeYear"></filter-div>
        <div class="card_gird">
            <div v-for="($item) in list" :key="$item.id" class="card_gird-item">
                <movie-card 
                :title="$item.name"
                :score="$item.vote_average"
                :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                ></movie-card>
            </div>
        </div>
    </div>
</template>

<script>
import FilterDiv from '/components/WtwFilter.vue'
import MovieCard from '/components/MovieCard.vue'
import { getDramaGenre,getDiscoverDrama } from '/modules/fetch.js'

export default {
    name: 'MovieView',
    components: {
        FilterDiv,
        MovieCard,
    },
    data:function () {
        return {
            genre_list:[],
            list:[],
            genre_id:null,
            year:null
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
            getDiscoverDrama(this.genre_id,this.year)
            .then( (response) => {
                console.log("更新成功");
                var $data = response.data;
                this.list = $data.results;
                console.log(this.list);

            });
        },
        changeYear:function($value){
            this.year = $value;
            this.refreshMovie();
        },
        changeType:function($value){
            this.genre_id = $value;
            this.refreshMovie();
        }
    }
}
</script>

<style lang="scss">
    .card_gird{
        display: flex;
        flex-wrap: wrap;
        padding-left: 16px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        &-item{
            margin-right: 16px;
            margin-bottom: 34px;
        }
    }
</style>
