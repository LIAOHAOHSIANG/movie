<template>
    <div class="container not-banner">
        <div class="container tag_group">
            <div class="tag_group-container">
                <wtw-select-button @click="type='all'" :active="type=='all'">全部</wtw-select-button>
                <wtw-select-button @click="type='movie'" :active="type=='movie'">電影</wtw-select-button>
                <wtw-select-button @click="type='drama'" :active="type=='drama'">影集</wtw-select-button>
            </div>
        </div>
        <div class="search_movie_group card_gird">
            <div v-for="($item) in getList()" :key="$item.id" class="card_gird-item">
                <movie-card 
                v-if="$item.media_type =='movie'"
                :title="$item.title"
                :score="$item.vote_average"
                :link="'/movie/'+$item.id"
                :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                ></movie-card>
                <movie-card 
                v-else-if="$item.media_type =='tv'"
                :title="$item.name"
                :score="$item.vote_average"
                :link="'/drama/'+$item.id"
                :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                ></movie-card>
                <movie-card 
                v-else
                :title="$item.name || $item.title"
                :score="$item.vote_average"
                :link="$item.title?('/movie/'+$item.id):('/drama/'+$item.id)"
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
import WtwSelectButton from '/components/WtwSelectButton.vue'
import MovieCard from '/components/MovieCard.vue'
import { getSearchAll,getSearchMovie,getSearchDrama } from '/modules/fetch.js'
import WtwButton from '/components/WtwButton.vue'

export default {
    components: { 
        WtwSelectButton,
        MovieCard,
        WtwButton 
    },
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function(){
        return {
            type:"all",
            page:1,
            list:[],
            movie_page:1,
            movie_list:[],
            drama_page:1,
            drama_list:[],
            title:"搜尋"
        }
    },
    mounted:function(){
        this.getAll();
    },
    methods:{
        getList:function(){
            switch(this.type){
                case "all":
                    return this.list;
                case "movie":
                    console.log("change movie");
                    console.log(this.movie_list);
                    if(this.movie_list.length==0){
                        this.getMovie();
                    }
                    return this.movie_list;
                case "drama":
                    console.log("change drama");
                    if(this.drama_list.length==0){
                        this.getDrama();
                    }
                    return this.drama_list;
            }
            return [];
        },
        getAll:function(){
            var $search_text = this.$route.params.search;
            getSearchAll($search_text,this.page)
            .then((response)=>{
                var $data = response.data;
                $data.results.forEach(element => {
                    this.list.push(element);
                });
                this.page = this.page +1;
            })
        },
        getMovie:function(){
            var $search_text = this.$route.params.search;
            getSearchMovie($search_text,this.movie_page)
            .then((response)=>{
                var $data = response.data;
                $data.results.forEach(element => {
                    this.movie_list.push(element);
                });
                this.movie_page = this.movie_page +1;
            })
        },
        getDrama:function(){
            var $search_text = this.$route.params.search;
            getSearchDrama($search_text,this.drama_page)
            .then((response)=>{
                var $data = response.data;
                $data.results.forEach(element => {
                    this.drama_list.push(element);
                });
                this.drama_page = this.drama_page +1;
            })
        },
        getNextPage:function(){
            switch(this.type){
                case "all":
                    this.getAll();
                    break;
                case "movie":
                    this.getMovie();
                    break;
                case "drama":
                    this.getDrama();
                    break;
            }
        }, 

    }
    
}
</script>

<style lang="scss">
    @import 'assets/sass/style.scss';
    .tag_group{
        background-color: rgba(104, 107, 114, 0.1);
        border-radius: 10px;
        &-container{
            max-width: 992px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 18px;
            padding-bottom: 18px;
            .wtw-select-button{
                width: 108px;
                height: 32px;
                margin-right:10px;
            }
        }
    }
    .search_movie_group{
        padding-top: 42px;
        max-width: 992px;
        margin-left: auto;
        margin-right: auto;
    }
</style>