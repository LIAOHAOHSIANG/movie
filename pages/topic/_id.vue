<template>
    <div class="container not-banner">
        <WtwTitle>{{name}}</WtwTitle>
        <div class="topic_list">
            <div v-for="($item) in list" :key="$item.id" class="topic_item">
                <MovieCard
                v-if="type == 'movie'"
                :title="$item.title"
                :score="$item.vote_average"
                :link="'/movie/'+$item.id"
                :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                ></MovieCard>
                <MovieCard
                v-else
                :title="$item.name"
                :score="$item.vote_average"
                :link="'/drama/'+$item.id"
                :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                ></MovieCard>
            </div>
        </div>
    </div>
</template>

<script>
import WtwTitle from '/components/WtwTitle.vue';
import MovieCard from '/components/MovieCard.vue'
import { getSearchAll, getPopularDrama, getDiscoverMovie ,getProviderMovie} from '/modules/fetch.js'

export default {
    components: {
        MovieCard,
        WtwTitle
    },
    head:function(){
        return {
            title: this.name,
        }
    },
    data:function (){
        return {
            type_id:null,
            name:null,
            list:[],
            type:"movie"
        }
    },
    mounted:function() {
        this.type_id = this.$route.params.id;
        switch(this.type_id){
            case "romantic":
                this.name = "浪漫滿屋";
                getDiscoverMovie(10749)
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "korean_drama":
                this.name = "熱門韓劇";
                this.type = "drama";
                getPopularDrama("ko")
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "comedy":
                this.name = "喜劇之王";
                getDiscoverMovie(35)
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "horror":
                this.name = "驚悚恐怖";
                getDiscoverMovie(26)
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "suspense":
                this.name = "燒腦懸疑";
                getDiscoverMovie(9648)
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "action":
                this.name = "動作冒險";
                getDiscoverMovie("28,12")
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "animation":
                this.name = "動漫卡通";
                getDiscoverMovie(16)
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "zombie":
                this.name = "喪屍末日";
                getSearchAll('殭屍')
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
            case "netflix":
                this.name = "Netflix精選";
                getProviderMovie(8)
                .then((response) => {
                    var $data = response.data;
                    this.list = $data.results;
                });
                break;
        }
    }
}
</script>

<style lang="scss">
    .topic_list{
        display: flex;
        flex-wrap: wrap;
        .topic_item{
            margin-right: 16px;
            margin-bottom: 36px;
        }
    }
</style>