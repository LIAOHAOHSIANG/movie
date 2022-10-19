<template>
    <div>
        <WtwBanner></WtwBanner>
        <div>
            <MovieArea title="熱門電影"></MovieArea>
            <MovieArea title="熱門韓劇" :is-dark="true"></MovieArea>
            <MovieArea title="熱門陸劇、台劇"></MovieArea>
            <MovieArea title="熱門美劇" :is-dark="true"></MovieArea>
        </div>
    </div>
</template>

<script>
import WtwBanner from "/components/WtwBanner.vue";
import MovieArea from '/components/MovieArea.vue';

export default {
    name: 'HomeView',
    components: {
        WtwBanner,
        MovieArea
    },
}
</script>
