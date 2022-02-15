<template>
  <div class="close">
    <div class="close__line rotate-left"></div>
    <div class="close__line rotate-right"></div>
  </div>
</template>

<script>
export default {
  name: "CloseIcon"
};
</script>

<style lang="scss" scoped>
.close {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  &__line {
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: #1b1b1b;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    &.rotate-left {
      transform: rotate(45deg);
    }
    &.rotate-right {
      transform: rotate(-45deg);
    }
  }
}
</style>
