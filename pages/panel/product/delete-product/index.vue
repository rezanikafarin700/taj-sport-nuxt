<template>
  <div>
    <br /><br />
    <h1>Delete product</h1>
    <h2>index record = {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  name: "delete-product",
  layout : "PanelLayout",

  data() {
    return {};
  },
  mounted() {
    this.$axios.delete(
      process.env.BASE_URL + "products/" + `${this.$route.params.id}`
    );
    this.$router.push({ name: "panel-product" });
  }
};
</script>

<style lang="scss" scoped></style>
