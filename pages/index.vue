<template>
    <div>
        <WtwBanner></WtwBanner>
        <div>
            <MovieArea title="熱門電影" :list="list"></MovieArea>
            <MovieArea title="熱門韓劇" :list="list" :is-dark="true"></MovieArea>
            <MovieArea title="熱門陸劇、台劇" :list="list"></MovieArea>
            <MovieArea title="熱門美劇" :list="list" :is-dark="true"></MovieArea>
        </div>
    </div>
</template>

<script>
import WtwBanner from "/components/WtwBanner.vue";
import MovieArea from '/components/MovieArea.vue';
import {getPopularMovie} from '/modules/fetch.js'
export default {
    name: 'HomeView',
    components: {
        WtwBanner,
        MovieArea
    },
    data:function(){
        return {
            list:[]
        }
    },
    mounted:function(){
        getPopularMovie()
        .then((response) => {
            console.log("更新成功");
            var $data = response.data;
            this.list = $data.results;
            console.log(this.list);

        });
    }
}
</script>
