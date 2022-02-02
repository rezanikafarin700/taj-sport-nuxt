<template>
  <div class="parent">
    <Header />
    <Nuxt />
    <div class="wrapper-small">
      <div class="parent__text rtl">
        <div class="parent__btn" @click="goToRoute">صفحه اصلی</div>
      </div>
    </div>
    <FooterArticle />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import FooterArticle from '@/components/FooterPanel/footer-article/FooterArticle'
export default {
  name: "Article",
  components: { Header,FooterArticle },
  methods : {
    goToRoute(){
      this.$router.push({name : 'index'})
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background: #f5f5f5;

  &__text {
    padding: 25px 150px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    color: #b2b2b2;
    border: 1px solid #b2b2b2;
    display: inline-block;
    padding: 11px 15px 9px 15px;
    cursor: pointer;
  }
}
</style>
