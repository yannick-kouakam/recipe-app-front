<template>
  <div class="album py-5">
    <div class="container">
      <p class="text-center" style="font-size: 1.5rem;color: red; font-weight: bold"> Recently Added</p>
      <b-card-group deck >
          <recipe-app
            v-for="(recipeItem, index) in this.recipes"
            :recipe="recipeItem" :key="index"/>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  import RecipeApp from "./recipe/Recipe.vue";
  const message =  "Lorem ipsum dolor sit amet, consectetur adipisicing \n" +
    "elit. Blanditiis eos optio quidem. Blanditiis cumque "

  export default {
    name: "BestRecipes",
    data(){
      return {
        recipes:[
          {name: "First Recipe", description: message, image: "static/img/recipe/recipe1.png"},
          {name: "Second Recipe", description: message, image: "static/img/recipe/recipe2.jpg"},
          {name: "Third Recipe", description: message, image: "static/img/recipe/recipe3.jpg"},
          {name: "Fourth Recipe", description: message, image: "static/img/recipe/recipe5.jpg"},
          {name: "Fourth Recipe", description: message, image: "static/img/recipe/recipe4.jpg"},
          {name: "Fourth Recipe", description: message, image: "static/img/recipe/recipe2.jpg"}
        ]
      }
    },
    components: {
      RecipeApp
    }
  }
</script>

<style scoped>

</style>
