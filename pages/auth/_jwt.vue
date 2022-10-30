<template>
    <div>

    </div>
</template>

<script>
export default {
    mounted:function(){
        var $token = this.$route.params.jwt;
        this.$store.dispatch('auth/login', $token)
    }
}
</script>