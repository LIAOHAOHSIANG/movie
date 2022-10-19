<template>
    <div class="container not-banner">
        電影詳細頁面
        {{model}}
    </div>
</template>

<script>
import { getMovie } from '/modules/fetch.js'

export default {
    data:function(){
        return {
            movie_id:null,
            model:null
        }
    },
    mounted:function(){
        this.movie_id = this.$route.params.id;
        getMovie(this.movie_id)
        .then( (response) => {
            var $data = response.data;
            console.log($data);
            this.model = $data;
        });
    }
}
</script>