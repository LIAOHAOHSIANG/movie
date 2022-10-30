<template>
    <div class="container not-banner">
        我的片單
        <div v-for="($item) in $store.state.playlist.movie_list" :key="$item.id" class="card_gird-item">
            <movie-card 
            :title="$item.title"
            :score="$item.vote_average"
            :link="'/movie/'+$item.id"
            :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
            ></movie-card>
        </div>
    </div>
</template>

<script>

import MovieCard from '/components/MovieCard.vue';

export default {
    components: { MovieCard },
    name: 'PlaylistView',
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function (){
        return {
            title:"我的片單"
        }
    }
}
</script>

<style lang="scss">
</style>
