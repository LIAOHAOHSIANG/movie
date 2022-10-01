<template>
    <div class="topic container not-banner">
        <div v-for="($item,$key) in list" :key="$key" class="topic_card">
            <div class="topic_card-title">
                {{$item.name}}
            </div>            
        </div>
    </div>
</template>


<script>
    import { getMovieGenre } from '@/fetch';
    export default {
        name: 'TopicView',
        components: {
        },
        data:function (){
            return {
                list:[
                    1,2,3,4,5,6,7,8,9,10,11
                ]
            }
        },
        mounted:function() {
            getMovieGenre()
            .then((response)=>{
                console.log(response.data);
                this.list = response.data.genres;
            })
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