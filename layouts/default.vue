<template>
  <div>
    <Header />
    <transition name="slide" mode="out-in">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export default {
  name: "default",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
