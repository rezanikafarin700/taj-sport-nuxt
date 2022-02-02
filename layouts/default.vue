<template>
  <div>
    <Header />
    <Nuxt />
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
