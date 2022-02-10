<template>
  <div class="main">
    <ul class="main__menu rtl dastnevis">
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="goToRoute(index, item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      items: [
        { title: "خرید", path: "", id: 0 },
        { title: "جستجو", path: "", id: 0 },
        { title: "ورود", path: "", id: 0 },
        { title: "ثبت نام", path: "", id: 0 },
        { title: "مقاله ها", path: "", id: 0 },
        { title: "صفحه اصلی", path: "index", id: 0 }
      ]
    };
  },
  methods: {
    goToRoute(index, item) {
      switch (index) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          this.$router.push({ name: item.path });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  left: 0;
  z-index: 3;

  &__menu {
    position: fixed;
    top: 100px;
    left: 50%;
    right: 50%;
    color: #222;
    list-style: none;

    li {
      margin: 1.5rem 0;
      white-space: nowrap;
      font-size: 1.5rem;
      line-height: 1;
      cursor: pointer;
      &:hover {
        color: #28a46c;
      }
    }
  }
}
</style>
