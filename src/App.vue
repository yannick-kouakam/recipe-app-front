<template>
  <div id="app">
    <header-app/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderApp from "./components/Header.vue";
export default {
  name: 'App',
  components:{
    HeaderApp
  }
}
</script>

<style>

</style>
