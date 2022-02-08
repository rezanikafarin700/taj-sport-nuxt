<template>
  <div class="parent">
    <Header />
    <div class="wrapper">
      <Nuxt />
      
    </div>
    <div class="foot-article"></div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
export default {
  name: "Product",
  components: { Header },
  methods: {
    goToRoute() {
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background-color: #e5e5e5;
}
.wrapper {
  padding : 100px 0;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
}
.foot-article {
  background: #e5e5e5;
  height: 250px;
}
</style>
