<template>
    <div class="container not-banner">
        戲劇詳細頁面
        {{model}}
    </div>
</template>

<script>
import { getDrama } from '/modules/fetch.js'

export default {
    data:function(){
        return {
            drama_id:null,
            model:null
        }
    },
    mounted:function(){
        this.drama_id = this.$route.params.id;
        getDrama(this.drama_id)
        .then( (response) => {
            var $data = response.data;
            console.log($data);
            this.model = $data;
        });
    }
}
</script>