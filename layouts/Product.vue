<template>
  <div>
    <Header />
    <div class="parent">
      <div class="wrapper">
        <Nuxt />
      </div>
      <div class="parent__foot-article"></div>
      <transition name="fade" mode="out-in">
      <Modal  v-if="openModal" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Modal from "@/components/modal/Modal.vue";
export default {
  name: "Product",
  components: { Header, Modal },
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
  padding: 100px 0;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
}
</style>
