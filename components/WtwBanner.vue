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
                    <wtw-button :light="false"  @click="$router.push('/movie/'+$item.id)">
                      更多資訊
                    </wtw-button>
                    <wtw-button v-if="!inPlayList('movie', $item.id)" :light="true" @click="addToList('movie', $item.id)">
                      加入片單
                    </wtw-button>
                    <wtw-button v-else :light="false" @click="removePlayList('movie', $item.id)">
                      移出片單
                    </wtw-button>
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
import WtwButton from './WtwButton.vue';
import { addPlayList } from '/modules/api';

export default {
  components: { WtwButton },
  data:function() {
    return {
      list:[],
      swiper:null,
      play_list:[]
    }
  }, 
  mounted:function() {
    getTopRateMovie()
    .then((response)=>{
      const results = response.data.results;
      results.forEach((result,$key)=>{
        if($key<10){
          this.list.push({
            id:result.id,
            title:result.title,
            image:result.backdrop_path,
            overview:result.overview,
            vote_average:result.vote_average
          });
        }
      
      })
    })
    this.initBanners();
  },
  methods:{
    inPlayList:function($type, $id) {
      const $list = this.play_list.filter(($item)=>{
        return $item.type == $type && $item.id == $id;
      })
      if($list.length>0){
        return true;
      }

      return false;
    },
    addToList:function($type, $id) {
      addPlayList($type, $id)
      .then(()=>{
        alert("成功加入片單");
      })

    },
    removePlayList:function($type, $id) {
      this.play_list.forEach(($item,$key)=>{
        if($item.type == $type && $item.id == $id){
          this.play_list.splice($key,1)
        }
      });
    },
    getBackground:function($image) {
      return "linear-gradient(360deg, #1B1E25 0%, rgba(27, 30, 37, 0) 30%), radial-gradient(72.5% 427.7% at 100% 50%, rgba(27, 30, 37, 0) 0%, rgba(27, 30, 37, 0.93) 98.79%),url('https://image.tmdb.org/t/p/original/"+$image+"')";
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

    /**
      * 計算寬度乘以百分比
      */
    @function getWidthPercentage($percentage) {
      @return calc(100vw * 0.55 * $percentage);
    }

    .banner{
      overflow: hidden;
      margin-bottom: -71px;
      @media (max-width:$breakpoint-mobile){
        margin-top: 60px;
        margin-bottom: 0px;
      }
      &-container{
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top:0px;
        left: 0px;;
      }
      &-item{
        color:white;
        width: 100vw;
        height: getWidthPercentage(1);
        background-size: 100% auto !important;
        background-position: center;
        &-box{
          left: calc(100vw *0.1);
          top: getWidthPercentage(0.25);
          @media (max-width:$breakpoint-tablet){
            top: getWidthPercentage(0.2);
          }
          @media (max-width:$breakpoint-mobile){
            top: getWidthPercentage(0.13);
          }
        }
        &-scope{
          font-size: 70px;
          font-weight: 700;
          background: $primary_color;
          background-clip: text;
          color: transparent;
          @media (max-width:$breakpoint-tablet){
            font-size: 60px;
          }
          @media (max-width:$breakpoint-mobile){
            font-size: 30px;
          }
        }
        &-title{
          width: 65vw;
          height: 110px;
          font-size: 76px;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          @media (max-width:$breakpoint-tablet){
            font-size: 55px;
            height: 80px;
          }
          @media (max-width:$breakpoint-mobile){
            font-size: 38px;
            height: 45px;
          }
        }
        &-summary{
          width: 346px;
          height: 48px;
          text-overflow: ellipsis;
          overflow: hidden;
          @media (max-width:$breakpoint-mobile){
            display: none;
          }
        }

        &-button{
          &_group{
            display: flex;
            margin-top: 18px;
            @media (max-width:$breakpoint-mobile){
              margin-top: 7px;
            }
            .wtw-button{
              width: 160px;
              height: 42px;
              margin-right: 15px;
            }
          }
        }
      }
      .swiper-slide {
        width: 100vw;
        height: calc(100vw * 0.55);
      }
      .swiper-pagination{
        position: absolute;
        bottom: getWidthPercentage(0.1);
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

</style>