<template>
    <a :href="link" class="movie-card">
        <div class="movie-card_poster" :style="{'background-image' : 'linear-gradient(180deg, rgba(22, 22, 22, 0) 30.58%, rgba(22, 22, 22, 0.98) 100%), url('+img_url+')'}">
            <div class="movie-card_score">{{score.toFixed(1)}}</div>
        </div>
        <div class="movie-card_title">{{title}}</div>
    </a>
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
            default:"https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/02/jordan-peele-us-poster.jpg?ssl=1"
        }
    },
    data:function(){
        return {
        }
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';

    /** moive Area */
    .movie{
        max-width: calc( 1280px - 188px );
        margin-left: auto;
        margin-right: auto;
        margin-top: 42px;
        display: flex;
        flex-wrap: wrap;
        &-card{
            display: block;
            width: 152px;
            height: 226px;

            &_poster{
                position: relative;
                width: 152px;
                height: 201px;
                background-size: 100% 100%;
                border-radius: 8px;
            }

            &_score{
                background: $primary_color;
                position: absolute;
                right: 4px;
                bottom: 8px;
                width: 33px;
                height: 20px;
                text-align: center;
                border-radius: 4px;
                box-sizing: border-box;
            }

            &_title{
                color:white;
                margin-top: 4px;
                height: 21px;
                line-height: 21px;
                font-size: 14px;
                text-align: center;
            }
        }
    }
</style>