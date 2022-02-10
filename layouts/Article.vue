<template>
  <div>
    <Header />
    <div class="parent">
      <Nuxt />
      <transition name="fade" mode="out-in">
        <Modal v-if="openModal" />
      </transition>

      <div class="wrapper-small">
        <div class="parent__text rtl">
          <div class="parent__btn" @click="goToRoute">صفحه اصلی</div>
        </div>
      </div>
      <FooterArticle />
      <div class="parent__foot-article"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Modal from "@/components/modal/Modal.vue";
import FooterArticle from "@/components/FooterPanel/footer-article/FooterArticle";
export default {
  name: "Article",
  components: { Modal ,Header, FooterArticle},
  data() {
    return {
      openModal: false
    };
  },

  methods: {
    goToRoute() {
      this.$router.push({ name: "index" });
    },
    getStatusOpenModal(event) {
      this.openModal = event;
      console.log("event = ", event);
    }
  },
  mounted() {
    this.$nuxt.$on("onClick", this.getStatusOpenModal);
  },
  beforeDestroy() {
    this.$nuxt.$off("onClick", this.getStatusOpenModal);
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  position: relative;

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
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
    text-decoration: none;
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 420px) {
      font-size: 14px;
      white-space: nowrap;
      min-width: 100px;
      padding: 0.5rem 1rem;
    }
  }
  &__foot-article {
    background: #e5e5e5;
    height: 250px;
  }
}
.wrapper-small {
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
