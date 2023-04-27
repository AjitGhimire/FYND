<template>
  <HeaderPage />

  <CarouselPage/>
  <!-- <h3>{{ $route.query.userid }}</h3> -->
  <!-- <h3>{{ $route.query.name }}</h3> -->
</template>
<script>
import HeaderPage from "./HeaderPage.vue";

import CarouselPage from './Carousel/CarouselPage.vue'
export default {
  name: "HomePage",

  components: {
    HeaderPage,
    CarouselPage
  },
};
</script>
<style>
nav img {
  width: 100px;
  margin-top: 20px;
}
</style>
