<template>
    <div class="filter">
        <div class="filter_group">
            <WtwTitle>類型</WtwTitle>
            <div class="wtw-select filter_group-content">
                <WtwSelectButton v-for="($item,$key) in list" :key="$key" 
                class="filter-button" :active="select_item && $item.id === select_item.id"
                v-on:click="selectType($item)"
                >{{$item.name}}</WtwSelectButton>
            </div>
        </div>
        <div class="filter_group">
            <WtwTitle>年份</WtwTitle>
            <div class="wtw-select  filter_group-content">
                <WtwSelectButton v-for="($item,$key) in year_list" :key="$key"  
                class="filter-button" :active="$item == select_year" 
                v-on:click="selectYear($item)"
                >{{$item}}</WtwSelectButton>
            </div>
        </div>
    </div>
</template>

<script>
import WtwTitle from './WtwTitle.vue'
import WtwSelectButton from './WtwSelectButton.vue';

export default {
    props:{
        list:{
            type: Array
        },
    },
    components:{
        WtwSelectButton,
        WtwTitle
    },
    data:function(){
        return {
            select_item: null,
            year_list:['全部'],
            select_year:"全部",
        }
    },
    mounted:function(){
        this.select_item = this.list[0] ?? null;
        this.$emit('onChangeType', this.select_item.id);
        for(var $y = 2022;$y >= 1998; $y--){
            this.year_list.push($y);
        }
    },
    methods:{
        selectType:function($select_item){
            this.$emit('onChangeType', $select_item.id);
            this.select_item = $select_item;
        },
        selectYear:function($select_year){
            this.$emit('onChangeYear', $select_year);
            this.select_year = $select_year;
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