<template>
    <div class="banner">
      <div class="swiper-wrapper">
        <div v-for="($item,$key) in list" :key="$key" class="swiper-slide"> 
          <div class="banner-item" :style="{ 'background': getBackground($item.image)}">
              <div class="banner-item-box banner-container">
                  <div class="banner-item-scope">{{$item.vote_average}}</div>
                  <div class="banner-item-title">{{$item.title}}</div>
                  <div class="banner-item-summary">{{$item.overview}}</div>
                  <div class="banner-item-button_group">
                      <div class="banner-item-button black">更多資訊</div>
                      <div class="banner-item-button">加入片單</div>
                  </div>
              </div>
          </div>
          </div>
      </div>
      <div class="banner-container">
        <div class="swiper-pagination "></div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css';
import { getTopRateMovie } from '/modules/fetch.js';

export default {
  data:function() {
    return {
      list:[],
      swiper:null
    }
  }, 
  mounted:function() {
    getTopRateMovie()
    .then((response)=>{
      const results = response.data.results;
      console.log(results)
      results.forEach((result)=>{
        this.list.push({
          title:result.title,
          image:result.backdrop_path,
          overview:result.overview,
          vote_average:result.vote_average
        });
      
      })
    })
    this.initBanners();
  },
  methods:{
    getBackground:function($image) {
      return "linear-gradient(360deg, #1B1E25 0%, rgba(27, 30, 37, 0) 29.22%), radial-gradient(72.5% 427.7% at 96.33% 50%, rgba(27, 30, 37, 0) 39.58%, rgba(27, 30, 37, 0.93) 94.79%),url('https://image.tmdb.org/t/p/original/"+$image+"')";
    },  
    initBanners:function() {
      this.swiper = new Swiper('.banner', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:1,
        observer:true,
        observeParents:true,
        // Navigation arrows
        navigation: {
            nextEl: '.slick-next2',
            prevEl: '.slick-prev2',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
          renderCustom: function (swiper, current, total) {
            let $str = "";
            for (let i = 0; i < total; i++ ) {
              let $classNmae = "";
              if(i == current-1){
                $classNmae = "active";
              }
              $str = $str + "<div class='item "+$classNmae+"'></div>" ;
            }
            $str = $str + "";

            return $str;
          },
        },
    });
    }
  }
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';

    /** Home Page */
    .banner{
        height: 720px;
        overflow: hidden;
        margin-bottom: -71px;
        &-item{
            color:white;
            width: 100vw;
            height: 720px;
            background-size: 100% auto !important;
            background-position: center center;
            &-box{
                position: absolute;
                left: 111px;
                top: 208px;
            }
            &-scope{
                font-size: 70px;
                font-weight: 700;
                background: $primary_color;
                background-clip: text;
                color: transparent;
            }
            &-title{
                width: 50vw;
                height: 110px;
                font-size: 76px;
                line-height: 110px;
                font-weight: 500;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &-summary{
                width: 346px;
                height: 48px;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            &-button{
              &_group{
                  display: flex;
                  margin-top: 16px;
              }
              display: flex;
              justify-content: center;
              align-items: center;
              width: 160px;
              margin-right: 15px;
              border-radius: 13px;
              height: 42px;
              background: $primary_color;
              &.black{
                background: #1B1E25;
                border:1px solid $primary_color;
              }
            }
      
      }
      .swiper-pagination{
        position: absolute;
        bottom: 119px;
        top:  auto;
        left:auto;
        right: 39.88px;
        width: fit-content;
        height: 6px;
        display: flex;
        .item{
          width: 14.43px;
          height: 6px;
          border-radius: 50px;
          margin-left: 7.98px;
          margin-right: 0px;
          background: rgba(255, 255, 255, 0.37);
          cursor: pointer;
          &.active{
            width: 33.81px;
            background-color: #ffffff;
          }
        }

        
      }
    }
    .banner-container{
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }
    .banner{
      height:  720px;
      width: 100vw;
    }

    .banner .swiper-slide {
        width: 100%;
        height:  720px;
    }

</style>

