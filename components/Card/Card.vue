<template>
  <div>
    <section class="card">
      <div class="card__overlay">
        <div class="dastnevis text">خرید</div>
        <div class="img"></div>
      </div>
      <div class="card__image">
        <div class="card__image--ratio">
          <img
            :src="
              `${url}${product.id}/${product.image}`
            "
            :alt="alt"
          />
        </div>
      </div>

      <div class="card__intro">
        <h3 class="card__title">{{ product.name }}</h3>
        <div class="card__text">
          <p>قیمت : {{ product.price.toLocaleString("fa") }} تومان</p>
          <p>اندازه : {{ product.size }}</p>
          <p>مدل : {{ product.model }}</p>
          <p>کد محصول : {{ product.code }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    product: Object,
    alt: {
      type: String,
      default: "فوتبال دستی تاج اسپرت"
    },
    url: {
      type: String,
      default: process.env.IMAGE_URL + "products/"
    }
  }
};
</script>

<style scoped lang="scss">
@import "card";
</style>
