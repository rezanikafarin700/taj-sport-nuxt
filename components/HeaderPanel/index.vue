<template>
  <div>
    <div class="header">
      <div class="container rtl panel-items">
        <div
          class="menu"
          :class="{ active: link.id == active }"
          :key="index"
          v-for="(link, index) in links"
          @click="goToRoute(link.name,link.id)"
        >
          {{ link.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPanel",

  data() {
    return {
      links: [
        { name: "index", title: "صفحه اصلی", id: 0 },
        { name: "panel", title: "صفحه پنل", id: 1 },
        { name: "panel-baner", title: "صفحه بنر", id: 2 },
        { name: "panel-article", title: "صفحه مقاله", id: 3 },
        { name: "panel-footer", title: "صفحه فوتر", id: 4 }
      ],
      active : -1,
    };
  },

  methods: {
    goToRoute(url,id) {
      this.$router.push({ name: `${url}` });
      this.active = id;
      this.$nuxt.refresh();
    }
  },

  mounted(){
    let name  = this.$route.name;
    for(let link of this.links){
      if(link.name == name){
        this.active = link.id;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #000;
  padding: 1rem 0;
  display: flex;
  flex-direction: row-reverse;
}
.menu {
  color: #fff;
  cursor: pointer;
  margin-left: 2rem;
}
.active {
  color: aqua;
  font-weight: 400;
}
</style>
