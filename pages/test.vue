<template>
  <div>
    <div class="body">
      <div class="stiky" :class="{ show: show }">{{ a }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",

  data() {
    return {
      a: 0,
      show: false,
      message: "false"
    };
  },

  mounted() {
    const vm = this;
    window.onscroll = function(e) {
      console.log(document.documentElement.scrollTop);
      vm.a = document.documentElement.scrollTop;
      this.show = true;
      this.message = "True";
    };
  }
};
</script>

<style lang="scss" scoped>
.stiky {
  position: fixed;
  top: 100px;
  right: 100px;
  background-color: green;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
}
.body {
  height: 3000px;
}
.show {
  background: orange;
}
</style>
