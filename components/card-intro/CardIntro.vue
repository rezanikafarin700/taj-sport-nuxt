<template>
  <div>
    <section class="parent" @click="$emit('onClick')">
      <div class="parent__image">
        <div class="parent__image--ratio">
          <img v-if="dynamic" :src="`${url}${product.id}/${product.image}`" :alt="alt" />
          <img v-else :src="url" :alt="alt" />
          <div class="overlay dastnevis">
            <div class="text">{{ textOverlay }}</div>
            <div class="img"></div>
          </div>
        </div>
      </div>
      <div class="parent__text">
        <h3 class="parent__title">{{ product.title }}</h3>
        <p class="parent__intro">{{ product.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CartIntro",

  props: {
    product: Object,
    textOverlay: String,

    alt: {
      type: String,
      default: "انواع فوتبال دستی"
    },

    url: {
      type: String,
      default: process.env.IMAGE_URL + "articles/"
    },
    dynamic: {
      type : Boolean,
      default : true
    }
  }
};
</script>

<style scoped lang="scss">
@import "CartIntro";
</style>
