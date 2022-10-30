<template>
    <div>
        <movie-summary v-if="model" :model="model" type="movie"></movie-summary>
    </div>
</template>

<script>
import { getMovie } from '/modules/fetch.js'
import MovieSummary from '/components/MovieSummary.vue'

export default {
    components: {
        MovieSummary 
    },
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function(){
        return {
            movie_id:null,
            model: null,
            title:"",
        }
    },
    mounted:function(){
        this.movie_id = this.$route.params.id;
        getMovie(this.movie_id)
            .then((response) => {
                var $data = response.data;
                this.model = $data;
                this.title = this.model.title;
            })
    }
}
</script>