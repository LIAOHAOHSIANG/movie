<template>
    <button @click="$emit('click')" class="wtw-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
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
    }
</style>