<template>
    <div class="sort">
        <div class="wtw-select sort_group">
            <WtwSelectButton class="sort-button"
                v-for="($item,$key) in list" :key="$key"
                :active="$item === select" >{{$item}}</WtwSelectButton>
        </div>
    </div>
</template>

<script>
import WtwSelectButton from './WtwSelectButton.vue';
export default {
    components:{WtwSelectButton},
    data:function(){
        return {
            list:['人氣','評分' ,'上映日','片名'],
            select:"人氣"
        }
    }
}
</script>

<style lang="scss">
    /** sort */
    .sort{
    background-color: rgba(104,107,114,0.1);
    padding: 18px;
    border-radius: 20px;
    &_group{
        max-width: calc( 1280px - 288px );
        margin-left: auto;
        margin-right: auto;
    }
    &-button{
        width: 102px;
        height: 32px;
        margin-right: 10px;
    }
    }
</style>