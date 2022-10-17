<template>
    <div class="movie-card">
        <div class="movie-card_poster" :style="{'background-image' : 'url('+url+')'}">
            <div class="movie-card_score">8.3</div>
        </div>
        <div class="movie-card_title">蜘蛛人返家日</div>
    </div>
</template>


<script>
export default {
    data:function(){
        return {
            url:"https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/02/jordan-peele-us-poster.jpg?ssl=1"
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
        width: 152px;
        height: 226px;
        margin-bottom: 34px;

        &_poster{
            position: relative;;
            width: 152px;
            height: 201px;
            background-size: 100% 100%;
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