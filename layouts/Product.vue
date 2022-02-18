<template>
  <div>
    <Header />
    <div class="parent">
      <div class="wrapper">
        <Nuxt />
      </div>
      <FooterProduct />
      <transition name="fade" mode="out-in">
      <Modal  v-if="openModal" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Modal from "@/components/modal/Modal.vue";
import FooterProduct from '@/components/FooterPanel/footer-product/FooterProduct'

export default {
  name: "Product",
  components: { Header, Modal,FooterProduct },
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
  background-color: #e5e5e5;
  position: relative;

  &__foot-article {
    background: #e5e5e5;
    height: 250px;
  }
}
.wrapper {
  padding-top: 50px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
}
</style>
