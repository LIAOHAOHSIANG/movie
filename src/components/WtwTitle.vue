<template>
    <h3 class="wtw-title">
        <slot></slot>
    </h3>
</template>

<style lang="scss">
    @import '../sass/variable.scss';
    .wtw-title{
    position: relative;
    font-size: 16px;
    line-height: 24px;
    padding-left:11px;
    margin:0px;
    &::before{
        content: "";
        position: absolute;
        height: 24px;
        width: 3px;
        left: 0px;
        background: $primary_color;
        border-radius: 50px;
    }
    }
</style>