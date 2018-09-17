<template>
  <div id="app">
    <header-app/>
    <router-view/>
    <footer-app/>
  </div>
</template>

<script>
  import HeaderApp from "./components/Header.vue";
  import FooterApp from "./components/Footer.vue";

  export default {
    name: 'App',
    components: {
      HeaderApp,
      FooterApp
    }
  }
</script>

<style>
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    margin-bottom: 60px; /* Margin bottom by footer height */
  }
</style>
