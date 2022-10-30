<template>
    <div>
        <movie-summary  v-if="model" :model="model" type="drama"></movie-summary>
    </div>
</template>

<script>
import MovieSummary from '/components/MovieSummary.vue';
import { getDrama } from '/modules/fetch.js'

export default {
    components: { 
        MovieSummary 
    },
    head:function(){
        return {
            title: this.title,
        }
    },
    data:function(){
        return {
            drama_id:null,
            model:null,
            title:""
        }
    },
    mounted:function(){
        this.drama_id = this.$route.params.id;
        getDrama(this.drama_id)
        .then( (response) => {
            var $data = response.data;
            this.model = $data;
            this.title = this.model.name;
        });
    }
}
</script>