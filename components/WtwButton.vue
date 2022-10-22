<template>
    <button @click="$emit('click')" class="wtw-button" :class="{'light':light}">
        <div class="wtw-button_conatiner">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    props:{
        light:{
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';

    .wtw-button{
        background: $primary_color;
        border:0px;
        padding: 10px;
        color:white;
        border-radius: 13px;
        cursor: pointer;
        padding:1px;
        @media (max-width:$breakpoint-mobile){
            width: 103px;
            height: 27px;
            font-size: 14px;
            padding:3px;
        }
        &.light .wtw-button_conatiner{
            background: $primary_color;
        }
        &_conatiner{
            border-radius: 13px;
            width: 100%;
            height: 100%;
            background: #1B1E25;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        &:hover .wtw-button_conatiner{
            background: $primary_color;
        }
    }
</style>