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
    data:function(){
        return {
            movie_id:null,
            model: null
        }
    },
    mounted:function(){
        this.movie_id = this.$route.params.id;
        getMovie(this.movie_id)
            .then((response) => {
                var $data = response.data;
                this.model = $data;
            })
    }
}
</script>