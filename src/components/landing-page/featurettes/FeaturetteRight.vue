<template>
  <div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">{{recipe.name}}. <span class="text-muted">It'll blow your mind.</span>
        </h2>
        <p class="lead"> {{recipe.description}}</p>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" :src="recipe.image" alt="Recipe image">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Featurette",
    props: ['recipe']
  }
</script>

<style scoped>

</style>
