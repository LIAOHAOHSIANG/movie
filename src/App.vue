<template>
  <div id="app">
    <WtwHeader></WtwHeader>
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
import WtwHeader from './components/WtwHeader.vue';

export default {
  components: {  WtwHeader }
}
</script>

<style lang="scss">
// 變數
$primary_color:linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);

body{
  margin:0px;
  background-color:#1B1E25;
  color:white;
}
// 通用
.container{
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  &.not-banner{
    margin-top: 60px;;
  }
}

a{
  text-decoration: inherit;
  color:inherit;
}


.section_movie{
  padding-top:40px;
  padding-bottom: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(104,107,114,0.1);
  border-radius: 20px;
}

</style>