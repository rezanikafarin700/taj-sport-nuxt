<template>
  <div>
    <div class="parent">
      <div class="parent__image">
        <div class="parent__image--ratio">
          <img :src="`${url}${product.id}/${product.image}`" :alt="alt" />
        </div>
      </div>
      <div class="parent__text">
        <div class="parent__title">{{ product.title }}</div>
        <div class="parent__intro">: {{ product.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",

  props: {
    product: Object,

    alt: {
      type: String,
      default: "انواع فوتبال دستی"
    },

    url: {
      type: String,
      default: process.env.IMAGE_URL + "articles/"
    }
  }
};
</script>

<style scoped lang="scss">
@import "CartIntro";
</style>
