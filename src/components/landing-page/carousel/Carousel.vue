<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"


    >
      <carousel-item-app v-for="(carousel, index) in carousels" :item="carousel" :key="index"/>
    </b-carousel>

  </div>
</template>

<script>
  import CarouselItemApp from "./carousel-item/CarouselItem.vue"
  const msg = "Lorem ipsum dolor sit amet, consectetur adipisicing \n" +
    "elit. Blanditiis eos optio quidem. Blanditiis cumque "
  export default {
    data() {
      return {
        carousels: [
          {name: "First Carousel", message: "", image: "/static/img/recipe/recipe1.png"},
          {name: "Second Carousel", message: "", image: "/static/img/recipe/recipe3.jpg"},
          {name: "fourth Carousel", message: msg, image: "/static/img/recipe/recipe2.jpg"}
        ]
      }
    },
    components: {
      CarouselItemApp
    }
  }
</script>
