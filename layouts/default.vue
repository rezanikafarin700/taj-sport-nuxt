<template>
  <div>
    <Header />
    <div class="content">
      <Nuxt />
      <transition name="fade" mode="out-in">
        <Modal v-if="openModal" />
      </transition>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "default",
  components: {
    Modal,
    Header,
    Footer
  },
  data() {
    return {
      openModal: false
    };
  },
  methods: {
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
.content {
  width: 100%;
  height: 100%;
  position: relative;

}
</style>
