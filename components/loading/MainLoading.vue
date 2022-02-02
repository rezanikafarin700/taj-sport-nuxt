<template>
  <div class="parent">
    <transition>
      <div class="parent__content">
        <div class="title-items dastnevis">تاج اسپرت</div>
        <img width="90" height="60" src="~assets/images/gif/spinner.gif" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MainLoading",
  layout: "empty"
};
</script>

<style lang="scss" scoped>
.parent {
  min-height: 100vh;
  background: #e5e5e5;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transition: all .5s;
  }
}
.v-enter{
  transform: translateY(-200px);
}
.v-enter-active{
  transform: translateY(-200px);
}
</style>
