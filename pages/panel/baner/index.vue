<template>
  <div>
    <div class="container rtl">
      <div class="active">صفحه بنر</div>
      <table class="table">
        <thead>
          <th><td>شماره</td></th>
          <th><td>عکس</td></th>
          <th><td>عنوان</td></th>
          <th><td>ویرایش</td></th>
          <th class="parent"><div class="cursor btn-select" @click="goToRoute('panel-baner-AddBanner')">+</div><td>حذف</td></th>
        </thead>
        <tbody>
          <tr :class="{'table-active' : index %2 == 0 }"  v-for="(article,index) in articles" :key="index">
            <td>{{ article.id}}</td>
            <td><img :src="`http://localhost/Asia/public/images/banners/${article.id}/${article.image}`"></td>
            <td>{{ article.title}}</td>
            <td><p  class="cursor" @click="edit(article.id)">ویرایش</p></td>
            <td><button  class="cursor" @click="del(article.id)">حذف</button></td>
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
      articles: [],
      url: process.env.BASE_URL,
    };
  },

  async fetch() {
    this.articles = await this.$axios.$get(process.env.BASE_URL + "banner");
  },

  methods: {
    goToRoute(url) {
      this.$router.push({ name: `${url}` });
    },
    del(articleId){
      const isDelete = confirm('آیا رکورد حذف شود ؟');
      if(isDelete){
      this.$router.push({name : 'panel-baner-DeleteBanner',params : {id : articleId}});
      this.$nuxt.refresh();
      }
    },
      edit(articleId){
      const isEdit = confirm('آیا رکورد ویرایش شود ؟');
      if(isEdit){
      this.$router.push({name : 'panel-baner-EditBanner',params : {id : articleId}});
      this.$nuxt.refresh();
      }
    }

  },
};
</script>

<style lang="scss" scoped>

img {
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
