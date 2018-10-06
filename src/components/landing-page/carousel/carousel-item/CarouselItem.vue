<template>
  <b-carousel-slide :caption="item.name"
                    :text="item.message"
                     style="max-height: 500px ">
    <img slot="img" class="d-block img-fluid w-100"  :src="item.image" alt="image slot">
  </b-carousel-slide>
</template>

<script>
    export default {
        name: "CarouselItem",
       props: ["item"]
    }
</script>

<style scoped>

</style>
