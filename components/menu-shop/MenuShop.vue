<template>
  <div class="items">
    <div
      class="items__item"
      v-for="(product, index) in products"
      :key="index"
      @click="goToFoosball(product.id)"
    >
      <div class="items__image">
        <div class="items__ratio"></div>
        <img
          :src="require(`@/assets/images/shop/${product.image}`)"
          alt="فروشگاه فوتبال دستی تاج اسپرت"
        />
      </div>
      <div class="items__overlay">
        <p class="dastnevis">{{ product.name }}</p>
        <p class="dastnevis green-color">{{ product.model }} مدل</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuShop",
  props: {
    products: {
      type: Array,
      require: true
    }
  },

  methods: {
    goToFoosball(id) {
      this.$router.push({ name: "buy-Buy", params: { id: id } });
      localStorage.setItem("productId", id);
      if (this.$route.name == 'buy-Buy') {
        window.location.reload(true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  height: 100%;
  display: flex;

  &__item {
    width: 25%;
    height: 100%;
    padding: 100px 0 120px 0;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover {
      .items__overlay {
        opacity: 1;
      }
    }
  }

  &__ratio {
    position: relative;
  }

  &__image {
    width: 80%;
    // height: 80%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__overlay {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-style: italic;
    color: #222;
  }
}

.green-color {
  color: #1aa170;
}
</style>
