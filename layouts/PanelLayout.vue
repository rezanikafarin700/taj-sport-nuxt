<template>
  <div>
    <HeaderPanel>Header My Panel Layout</HeaderPanel>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderPanel from "@/components/HeaderPanel";
export default {
  name: "PanelLayout",
  components: {
    HeaderPanel,
  }
};
</script>

<style lang="scss" scoped>
    .content{
        min-height: 100vh;
        padding: 50px 0;
    }
</style>
