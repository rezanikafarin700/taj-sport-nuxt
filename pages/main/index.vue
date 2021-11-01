<template>
  <div>
    <h1></h1>
    <!-- <header-slider-by-button :images="images" /> -->
  </div>
</template>

<script>
// import HeaderSliderByButton from "@/components/HeaderSliderByButton";
export default {
  name: "main",
  components: {
    // HeaderSliderByButton
  },
  data() {
    return {
      images: [],
      a : ''
    };
  },
  mounted() {
    this.$axios.$get("http://localhost/Asia/public/api/banner")
    .then(res=>{
      console.log('res = ',res.data);
    })
  }
};
</script>

<style lang="scss" scoped></style>
