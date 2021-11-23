<template>
  <div>
    <br /><br />
    <h1>Delete Article Footer</h1>
    <h2>index record = {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  name: "DeleteBanner",

  data() {
    return {};
  },
  mounted() {
    this.$axios.delete(
      process.env.BASE_URL + "banner/" + `${this.$route.params.id}`
    );
    this.$router.push({ name: "panel-baner" });
  }
};
</script>

<style lang="scss" scoped></style>
