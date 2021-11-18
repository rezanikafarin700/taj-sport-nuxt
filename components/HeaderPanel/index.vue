<template>
  <div>
    <div class="header">
      <div class="container rtl panel-items">
        <nuxt-link class="menu" tag="div" :to="{ name: 'index' }">صفحه اصلی</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel' }">صفحه پنل</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel-baner' }">صفحه بنر</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel-article' }">صفحه مقاله</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel-footer' }">صفحه فوتر</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPanel"
};
</script>

<style lang="scss" scoped>
.header {
  background: #000;
  padding: 1rem 0;
  display: flex;
  flex-direction: row-reverse;
}
.menu{
    color : #fff;
    cursor: pointer;
    margin-left: 2rem;
}
</style>
