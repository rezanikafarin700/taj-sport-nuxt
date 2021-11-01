<template>
  <div>
    <div class="header">
      <div class="container rtl panel-items">
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel' }">صفحه پنل</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel-baner' }">صفحه بنر</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel-baner-AddBanner' }">افزودن بنر</nuxt-link>
        <nuxt-link class="menu" tag="div" :to="{ name: 'panel-baner-EditBanner' }">ویرایش بنر</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBanner"
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
