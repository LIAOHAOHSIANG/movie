<template>
    <div class="container not-banner">
        我的片單
    </div>
</template>

<script>

export default {
    name: 'PlaylistView',
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function (){
        return {
            title:"我的片單"
        }
    }
}
</script>

<style lang="scss">
</style>
