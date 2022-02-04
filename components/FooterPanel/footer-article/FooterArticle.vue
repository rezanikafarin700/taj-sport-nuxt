<template>
  <div class="body">
    <div class="body__item body__left">
      <div class="body__image">
        <img src="@/assets/images/articles/2.jpg" alt="مقاله های فوتبال دستی" />
      </div>
      <div class="body__help">
        <ArrowGreen class="rev" />
        <p class="italic">Prev Article</p>
      </div>
    </div>
    <div class="body__item body__right">
      <div class="body__image">
        <img
          src="@/assets/images/articles/12.jpg"
          alt="مقاله های فوتبال دستی"
        />
      </div>
      <div class="body__help">
        <ArrowGreen />
        <p class="italic">Next Article</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowGreen from "@/components/svg/ArrowGreen";
export default {
  name: "FooterArticle",
  components: {
    ArrowGreen
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 2rem;

  &__item {
    width: 730px;
    height: 260px;
    display: flex;
    transition: all 1s;
    &:hover{
      p{
        color : #28a46c;
      }
    }

  }
  &__left {
    transform: translateX(-300px);
    &:hover {
      transform: translateX(-2rem);
    }
  }
  &__right {
    transform: translateX(300px);
    flex-direction: row-reverse;
    &:hover {
      transform: translateX(2rem);
    }
  }
  &__image {
    width: 80%;
    flex: 0 0 auto;
    height: 100%;
    margin : 0 2rem;
    @media (max-width: 1000px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__help{
    text-align: center;
    padding-top : 3.5rem;
  }
}
.italic {
  font-style: italic;
  font-size: 12px;
}
.rev{
  transform : rotate(180deg);
}
</style>
