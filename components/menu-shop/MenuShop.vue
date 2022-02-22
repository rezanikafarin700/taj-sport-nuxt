<template>
  <div class="items">
    <div class="items__item" v-for="n in 4" :key="n">
      <div class="items__image">
        <div class="items__ratio"></div>
        <img src="@/assets/images/buy/image1.jpg" alt="" />
      </div>
      <div class="items__overlay"></div>
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

  &__ratio{
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
  }
}
</style>
