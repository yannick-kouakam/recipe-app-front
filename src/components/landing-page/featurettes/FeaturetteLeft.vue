<template>
  <div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">{{recipe.name}}. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">{{recipe.description}}.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="featurette-image img-fluid mx-auto" :src="recipe.image" alt="Recipe image">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FeaturetteLeft",
    props: ['recipe']
  }
</script>

<style scoped>

</style>
