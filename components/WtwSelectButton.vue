<template>
    <button class="wtw-select-button" :class="{'active':active}"  >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props:{
        active:{
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss">
    @import 'assets/sass/variable.scss';
    .wtw-select{
            &-button{
            width: 66.36px;
            height: 28px;
            background-color: black;
            color:white;
            border-radius: 4px;
            border:0px;
            cursor: pointer;
            &.active{
                background: $primary_color;
            }
        }

        &:hover &-button.active{
            background: black;
        }

        &-button:hover{
            background: $primary_color !important
        }
    }
</style>