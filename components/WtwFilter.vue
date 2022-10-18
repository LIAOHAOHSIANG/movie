<template>
    <div class="filter">
        <div class="filter_group">
            <WtwTitle>類型</WtwTitle>
            <div class="wtw-select filter_group-content">
                <WtwSelectButton v-for="($item,$key) in list" :key="$key" 
                class="filter-button" :active="select_item && $item.id == select_item.id"
                v-click="selectType($item)"
                >{{$item.name}}</WtwSelectButton>
            </div>
        </div>
        <div class="filter_group">
            <WtwTitle>年份</WtwTitle>
            <div class="wtw-select  filter_group-content">
                <WtwSelectButton v-for="($item,$key) in year_list" :key="$key"  class="filter-button" :active="$item == select_year" >{{$item}}</WtwSelectButton>
            </div>
        </div>
    </div>
</template>

<script>
import WtwSelectButton from './WtwSelectButton.vue';
export default {
    props:{
        list:{
            type: Array
        }
    },
    components:{
        WtwSelectButton
    },
    data:function(){
        return {
            select_item: null,
            year_list:['全部','2022','2021','2020','2019','2018','2017','2016','2015'],
            select_year:"全部",
        }
    },
    methods:{
        selectType:function($select_item){
            this.select_item = $select_item;
        }
    }
    
}
</script>

<style lang="scss">
/** filter */
.filter{
    background-color: rgba(104,107,114,0.1);
    padding: 24px;
    border-radius: 20px;
    margin-bottom: 12px;
    &_group{
        margin-bottom: 28px;
        &-content{
            margin-top: 16px;
        }
    }

    &-button{
        width: 66.36px;
        height: 28px;
        margin: 8px 6px;
    }
}
</style>