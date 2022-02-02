<template>
  <div class="parent">
    <article class="parent__article left">
      <div class="parent__image">
        <img src="@/assets/images/articles/2.jpg" alt="مقاله های فوتبال دستی" />
      </div>
      <div class="parent__arrow">
        <ArrowGreen class="rev" />
        <p class="rtl">مقاله قبلی</p>
      </div>
    </article>
    <article class="parent__article right">
      <div class="parent__arrow">
        <ArrowGreen />
        <p>مقاله بعدی</p>
      </div>
      <div class="parent__image">
        <img
          src="@/assets/images/articles/12.jpg"
          alt="مقاله های فوتبال دستی"
        />
      </div>
    </article>
  </div>
</template>

<script>
import ArrowGreen from "@/components/svg/ArrowGreen";
export default {
  name: "FooterArticle",
  components: { ArrowGreen }
};
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  background: #fff;
  overflow: hidden;
  width: 100%;

  &__article {
    display: flex;
    transition: all 0.5s;
    cursor: pointer;
    &.left {
      transform: translateX(calc(50% - 650px));
      &:hover {
        transform: translateX(0);
      }
    }
    &.right {
      transform: translateX(calc(50% - 300px));
      &:hover {
        transform: translateX(-180px);
      }
    }
  }

  &__image {
    min-width: 600px;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__arrow {
    width: 100px;
    height: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;

    p {
      font-size: 10px;
    }
  }
}
.rev {
  transform: rotate(180deg);
}
</style>
