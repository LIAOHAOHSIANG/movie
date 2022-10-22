<template>
    <div class="big_movie_card" :style="{'background-image' : 'url(https://image.tmdb.org/t/p/w440_and_h660_face/'+img_url+')'}">
        
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String
        },
        score:{
            type: Number
        }, 
        link:{
            type: String,
        },
        img_url:{
            type: String,
            require: true
        }
    },
}
</script>

<style lang="scss">
    .big_movie_card{
        flex:0 0 auto;
        width: 323px;
        height: 430px;
        background-color: white;
        border-radius: 20px;
        background-size: cover;
        background-position: center;
    }
</style>