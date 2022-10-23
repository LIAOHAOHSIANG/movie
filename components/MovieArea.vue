<template>
    <div class="hot_movie container" :class="{'dark_background':isDark}">
        <div class="hot_movie-title movie_container">
            {{title}}
        </div>
        <div class="movie-swiper">
            <div class="slick-prev">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84077 21.0027C8.62731 21.0034 8.4164 20.9563 8.22354 20.8648C8.03068 20.7733 7.86076 20.6398 7.72628 20.474L0.825041 11.9011C0.614887 11.6454 0.5 11.3247 0.5 10.9938C0.5 10.6628 0.614887 10.3421 0.825041 10.0865L7.96918 1.51348C8.21171 1.22169 8.56022 1.03819 8.93804 1.00336C9.31586 0.968526 9.69204 1.08521 9.98383 1.32773C10.2756 1.57026 10.4591 1.91877 10.494 2.29659C10.5288 2.67441 10.4121 3.05059 10.1696 3.34238L3.78272 11.0009L9.95526 18.6594C10.13 18.8692 10.241 19.1245 10.2751 19.3954C10.3092 19.6662 10.265 19.9412 10.1478 20.1877C10.0305 20.4342 9.84514 20.6419 9.61351 20.7864C9.38188 20.9308 9.11372 21.0059 8.84077 21.0027Z" fill="white"/>
                </svg>
            </div>
            <div class="movie_container">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div v-for="($item) in list" :key="$item.id" class="swiper-slide">
                            <MovieCard
                            :title="$item.title"
                            :score="$item.vote_average"
                            :link="'/movie/'+$item.id"
                            :img_url="'https://image.tmdb.org/t/p/w220_and_h330_face/'+$item.backdrop_path"
                            ></MovieCard>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slick-next">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.15923 0.997297C2.37269 0.996572 2.5836 1.04368 2.77646 1.13517C2.96932 1.22666 3.13924 1.36019 3.27372 1.52596L10.175 10.0989C10.3851 10.3546 10.5 10.6753 10.5 11.0062C10.5 11.3372 10.3851 11.6579 10.175 11.9135L3.03082 20.4865C2.78829 20.7783 2.43978 20.9618 2.06196 20.9966C1.68414 21.0315 1.30796 20.9148 1.01617 20.6723C0.724376 20.4297 0.54088 20.0812 0.506045 19.7034C0.471212 19.3256 0.587892 18.9494 0.830419 18.6576L7.21728 10.9991L1.04475 3.34058C0.870023 3.13085 0.759037 2.87546 0.724917 2.60462C0.690798 2.33379 0.734972 2.05885 0.852216 1.81234C0.969459 1.56582 1.15486 1.35806 1.38649 1.21361C1.61812 1.06917 1.88628 0.994107 2.15923 0.997297Z" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import MovieCard from '/components/MovieCard.vue';
import 'swiper/css/swiper.css';

export default {
    components: {
        MovieCard,
    },
    props: {
        title:{
            type: String
        },
        isDark:{
            type: Boolean,
            default: false
        },
        list:{
            type: Array,
            default: []
        }
    },
    methods: {
    },
    data:function(){
        return {
        }
    },
    mounted:function() {

        new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView:'auto',
            observer:true,
            observeParents:true,
            // Navigation arrows
            navigation: {
                nextEl: '.slick-next',
                prevEl: '.slick-prev',
            },

        });
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';
    .hot_movie{
        &:first-child{
            position: relative;
            top:0px;
            left: 0px;
            z-index:10;
        }
        .movie-swiper{
            display: flex;
            align-items: center;
        }
        .movie_container{
            width: calc(100% - 208px);
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;
            @media (max-width:$breakpoint-tablet){
                width: 100%;
            }
        }
        .slick{
            &-prev{
                background-color: #686B72;
                width: 50px;
                height: 50px;
                border-radius: 13px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:hover{
                    background-color: #686B72;
                }
                &::before{
                    content: "";
                }
                @media (max-width:$breakpoint-tablet){
                    display: none;
                }
            }
            &-next{
                background-color: #686B72;
                width: 50px;
                height: 50px;
                border-radius: 13px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:hover{
                    background-color: #686B72;
                }
                &::before{
                    content: "";
                }
                @media (max-width:$breakpoint-tablet){
                    display: none;
                }
            }
        }

        .swiper{
            &-slide {
                width: 152px;
                // height:  201px;
                margin-right: 16px;
            }
        }
        padding: 40px 26px;
        overflow-x: hidden;
        overflow-y: hidden;
        @media (max-width:$breakpoint-tablet){
            padding: 30px 16px;
        }
        &.dark_background{
            background-color: rgba(104, 107, 114, 0.1);
            border-radius: 20px;
            @media (max-width:$breakpoint-tablet){
                border-radius: 0px;
            }
        }
        
        &-title{
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 14px;
        }
        &-content{
            display: flex;
        }
    }
</style>