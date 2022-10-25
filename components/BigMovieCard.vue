<template>
    <div class="big_movie_card" :style="{'background-image' : 'url(https://image.tmdb.org/t/p/w440_and_h660_face/'+img_url+')'}">      
        <div v-if="has_play_button"  @click="$emit('click')" class="play_button">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z" fill="white"/>
            </svg>
        </div>
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
        },
        has_play_button:{
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';
    .big_movie_card{
        flex:0 0 auto;
        width: 323px;
        height: 430px;
        background-color: white;
        border-radius: 20px;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .play_button{
            width: 72px;
            height: 72px;
            background: $primary_color;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg{
                width: 20px;
                height: 20px;
            }
        }
    }
</style>