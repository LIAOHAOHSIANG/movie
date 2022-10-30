<template>
    <div class="topic container not-banner">
        <a v-for="($item,$key) in list" :key="$key" :href="'/topic/'+$item.key" class="topic_card">
            <div class="topic_card-title">
                {{$item.name}}
            </div>            
        </a>
    </div>
</template>

<script>
import { getMovieGenre } from '/modules/fetch.js'

export default {
    name: 'TopicView',
    components: {
    },
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function (){
        return {
            list:[
                {
                    key:"romantic",
                    name:"浪漫滿屋",
                    img_url:""
                },
                {
                    key:"korean_drama",
                    name:"熱門韓劇",
                    img_url:""
                },
                {
                    key:"comedy",
                    name:"喜劇之王",
                    img_url:""
                },
                {
                    key:"horror",
                    name:"驚悚恐怖",
                    img_url:""
                },
                {
                    key:"suspense",
                    name:"燒腦懸疑",
                    img_url:""
                },
                {
                    key:"action",
                    name:"動作冒險",
                    img_url:""
                },
                {
                    key:"animation",
                    name:"動漫卡通",
                    img_url:""
                },
                {
                    key:"zombie",
                    name:"喪屍末日",
                    img_url:""
                },
                {
                    key:"netflix",
                    name:"Netflix精選",
                    img_url:""
                },
            ],
            title:"主題館"
        }
    },
    mounted:function() {
    }
}
</script>

<style lang="scss">
    .topic{
        display: flex;
        flex-wrap: wrap;
        &_card {
            position: static;
            width: calc((100% - 24px * 4) / 3);
            aspect-ratio: 2 / 1;
            display: flex;
            justify-content: right;
            align-items:flex-end;
            background: linear-gradient(180deg, rgba(22, 22, 22, 0.98) -71.5%, rgba(22, 22, 22, 0) 46.55%, rgba(22, 22, 22, 0.98) 100%),url(https://news.agentm.tw/wp-content/uploads/image1-233-750x422.jpg);
            background-position: center;
            background-size: cover;
            margin-left: 24px;
            margin-top:20px;
            &-title{
                color: white;
                font-size: 18px;
                margin:8px;
            }
        }
    }
</style>