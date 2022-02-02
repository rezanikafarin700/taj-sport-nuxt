<template>
  <div>
    <div class="card">
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
        <div class="card__title">{{ product.name }}</div>
        <div class="card__text">
          <div>قیمت : {{ product.price.toLocaleString("fa") }} تومان</div>
          <div>اندازه : {{ product.size }}</div>
          <div>مدل : {{ product.model }}</div>
          <div>کد محصول : {{ product.code }}</div>
        </div>
      </div>
    </div>
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
