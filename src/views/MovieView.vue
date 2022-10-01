<template>
    <div class="container not-banner">
        <filter-div :list="genre_list"></filter-div>
        <movie-card></movie-card>
    </div>
</template>


<script>
import FilterDiv from '@/components/WtwFilter.vue'
import MovieCard from '@/components/MovieCard.vue'
import { getMovieGenre } from '@/fetch'


export default {
    name: 'MovieView',
    components: {
        FilterDiv,
            MovieCard,

    },
    data:function () {
        return {
            genre_list:[]
        }
    },
    mounted: function () {
        getMovieGenre()
        .then( (response) => {
            this.genre_list =  response.data.genres;
            console.log(this.genre_list);
        });
    }

}
</script>
