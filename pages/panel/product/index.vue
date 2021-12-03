<template>
  <div>
    <div class="container rtl">
      <div class="active">صفحه محصول</div>
      <table class="table">
        <thead>
          <th><td>شماره</td></th>
          <th><td>عکس</td></th>
          <th><td>عنوان</td></th>
          <th><td>کد</td></th>
          <th><td>ویرایش</td></th>
          <th class="parent"><div class="cursor btn-select" @click="goToRoute('panel-product-add-product')">+</div>
          <td>حذف</td></th>
        </thead>
        <tbody>
          <tr :class="{'table-active' : index %2 == 0 }"  v-for="(product,index) in products" :key="index">
            <td>{{ product.id}}</td>
            <td><img :src="`http://localhost/Asia/public/images/products/${product.id}/${product.image}`"></td>
            <td>{{ product.name}}</td>
            <td>{{ product.code}}</td>
            <td><p  class="cursor" @click="edit(product.id)">ویرایش</p></td>
            <td><button  class="cursor" @click="del(product.id)">حذف</button></td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  layout: "PanelLayout",

  components: {},

  data() {
    return {
      products: [],
      url: process.env.BASE_URL,
    };
  },

  async fetch() {
    this.products = await this.$axios.$get(process.env.BASE_URL + "products");
  },

  methods: {
    goToRoute(url) {
      this.$router.push({ name: `${url}` });
    },
    del(productId){
      const isDelete = confirm('آیا رکورد حذف شود ؟');
      if(isDelete){
      this.$router.push({name : 'panel-product-delete-product',params : {id : productId}});
      this.$nuxt.refresh();
      }
    },
      edit(productId){
      const isEdit = confirm('آیا رکورد ویرایش شود ؟');
      if(isEdit){
      this.$router.push({name : 'panel-product-edit-product',params : {id : productId}});
      this.$nuxt.refresh();
      }
    },

  },
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
