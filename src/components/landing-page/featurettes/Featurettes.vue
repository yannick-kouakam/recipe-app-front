<template>
  <div >
    <p class="text-center" style="font-size: 1.5rem;color: red; font-weight: bold"> Outstanding Recipe </p>
    <div v-for="(element, index) in this.recipes">
      <featurette-right-app v-if="index % 2 === 0"
        :recipe="element" :key="index"></featurette-right-app>

      <featurette-left-app v-if="index % 2 === 1"
        :recipe="element" :key="index"></featurette-left-app>
    </div>

  </div>
</template>

<script>
  import FeaturetteRightApp from "./FeaturetteRight.vue";
  import FeaturetteLeftApp from "./FeaturetteLeft.vue";
  const message = "Lorem ipsum dolor sit amet, consectetur adipisicing " +
    "elit. Blanditiis eos optio quidem. Blanditiis cumque " +
    "dolorum error illo, ipsam iure officiis optio porro " +
    "provident quia quis rem sunt tenetur unde velit.\n";
  export default {
    name: "Featurettes",
    data() {
      return {
        recipes: [
          {name: "First Featurette", description: message, image: "static/img/recipe/image.jpg"},
          {name: "First Featurette", description: message, image: "static/img/recipe/recipe5.jpg"},
          {name: "First Featurette", description: message, image: "static/img/recipe/recipe6.jpeg"},
          {name: "First Featurette", description: message, image: "static/img/recipe/recipe7.jpg"}]
      }
    },
    components: {
      FeaturetteRightApp,
      FeaturetteLeftApp
    }
  }
</script>

<style scoped>

</style>
