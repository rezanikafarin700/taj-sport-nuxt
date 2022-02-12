<template>
  <div class="parent" @click="convert">
    <div class="parent__item" ref="item1"></div>
    <div class="parent__center">
      <div class="parent__line" ref="line1"></div>
      <div class="parent__line" ref="line2"></div>
    </div>
    <div class="parent__item" ref="item2"></div>
  </div>
</template>

<script>
export default {
  name: "HamburgerIcon",
  data() {
    return {
      closeMode: false
    };
  },
  methods: {
    convert() {
      if (!this.closeMode) {
        this.$refs.item1.style.opacity = "0";
        this.$refs.item2.style.opacity = "0";
        this.$refs.line1.style.transform = "rotate(45deg)";
        this.$refs.line2.style.transform = "rotate(-45deg)";
        this.closeMode = true;
        this.$nuxt.$emit("onClick", true);
      } else {
        this.$refs.item1.style.opacity = "1";
        this.$refs.item2.style.opacity = "1";
        this.$refs.line1.style.transform = "rotate(0)";
        this.$refs.line2.style.transform = "rotate(0)";
        this.closeMode = false;
        this.$nuxt.$emit("onClick", false);
      }
    },
    getStatusCloseModal(event) {
      this.closeMode = event;
      this.convert();
    }
  },

  mounted() {
    this.$nuxt.$on("onCloseModal", this.getStatusCloseModal);
  },
  beforeDestroy() {
    this.$nuxt.$off("onCloseModal", this.getStatusCloseModal);
  }
};
</script>

<style scoped lang="scss">
.parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 24px;
  height: 17px;

  &__item {
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #1b1b1b;
    transition: all 0.2s;
  }

  &__center {
    position: relative;
    width: 100%;
    height: 3px;
  }
  &__line {
    @extend .parent__item;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
