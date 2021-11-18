<template>
  <div>
    <div class="container rtl">
      <table class="table">
        <thead>
          <th><td>شماره</td></th>
          <th><td>عکس</td></th>
          <th><td>عنوان</td></th>
          <th><td>ویرایش</td></th>
          <th class="parent"><div class="cursor btn-select" @click="goToRoute('panel-baner-AddBanner')">+</div><td>حذف</td></th>
        </thead>
        <tbody>
          <tr :class="{'table-active' : index %2 == 0 }"  v-for="(banner,index) in banners" :key="index">
            <td>{{ banner.id}}</td>
            <td><img :src="`http://localhost/Asia/public/images/banners/${banner.id}/${banner.image}`"></td>
            <td>{{ banner.title}}</td>
            <td><p  class="cursor">ویرایش</p></td>
            <td><p  class="cursor">حذف</p></td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  layout: "PanelLayout",

  components: {},

  data() {
    return {
      banners: [],
      url: process.env.BASE_URL,
    };
  },

  async fetch() {
    this.banners = await this.$axios.$get(process.env.BASE_URL + "banner");
  },

  methods: {
    goToRoute(url) {
      this.$router.push({ name: `${url}` });
    }
  }
};
</script>

<style lang="scss" scoped>

img {
  // image-rendering: auto;
  // image-rendering: crisp-edges;
  image-rendering: pixelated;
  width: 50px;
  height: 50px;
}

.cursor{
  cursor: pointer;
  user-select: none;
}
.btn-select{
  background-color: rgba(0,0,0,0.05);
  font-weight: bold;
  padding: .5rem 1rem;
  border-radius: 4px;
  white-space: nowrap;
  display: inline-block;
}

small {
  display: block;
}

.parent{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

}
th{
  padding-bottom: .5rem;
  border-bottom-width: 0;
}

label {
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.form-control-plaintext {
  background: #fff;
}
</style>
