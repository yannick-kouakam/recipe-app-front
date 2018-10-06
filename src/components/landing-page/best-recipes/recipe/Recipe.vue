<template>
    <b-card :title="recipe.name"
            :img-src="recipe.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; min-width: 20rem"
            class="mb-2">
      <p class="card-text">
        {{ recipe.description}}
      </p>
      <b-button href="#" variant="btn btn-sm btn-outline-secondary">view</b-button>
    </b-card>
</template>

<script>
  export default {
    name: "Recipe",
    props: ['recipe']
  }
</script>

<style scoped>

</style>
