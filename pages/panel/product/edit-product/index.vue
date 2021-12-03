<template>
  <div>
    <div class="wrapper-small rtl">
      {{ deletedOfOldMainImage }}
      <hr />
      {{ files }}
      <div class="box-panel">
        <div class="title">افزودن محصول جدید</div>
        <form method="post">
          <label class="add-image"
            >افزودن عکس بازدید محصول را تا سه برابر افزایش میدهد</label
          >
          <br />
          <br />
          <!-- <img :src="addressFile" width="100" height="100" alt="فوتبال دستی" /> -->
          <hr />
          <label class="add-image">ویرایش عکس اصلی</label>
          <UploadImage
            :oldImages="image"
            :once="true"
            :url="url"
            v-model="file"
            @deleteOldImage="getDeleteMainImage"
          />
          <br />
          <hr />
          <label class="add-image">ویرایش سایر عکس ها </label>
          <UploadImage
            :oldImages="images"
            :url="url"
            v-model="files"
            @deleteOldImage="getDeleteImage"
          />
          <hr />
          <br />
          <label for="name">نام محصول</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="مثلا فوتبال دستی آسیا"
            v-model="product.name"
          /><br />

          <label for="model">مدل</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="مثلا تاشو"
            v-model="product.model"
          /><br />

          <label for="size">اندازه</label>
          <input
            type="text"
            id="size"
            name="size"
            placeholder="مثلا 75 * 120"
            v-model="product.size"
          /><br />

          <label for="price">قیمت</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="200000"
            v-model="product.price"
          /><br />

          <label for="discount">تخفیف</label>
          <input
            type="text"
            id="discount"
            name="discount"
            placeholder="مثلا 10"
            v-model="product.discount"
          /><br />

          <label for="code">کد محصول</label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="مثلا 100"
            v-model="product.code"
          /><br />

          <label for="material">جنس محصول</label>
          <input
            type="text"
            id="material"
            name="material"
            placeholder="مثلا MDF"
            v-model="product.material"
          /><br />

          <label for="description">توضیحات</label>
          <textarea
            name="description"
            id="description"
            placeholder="توضیحات"
            v-model="product.description"
          ></textarea
          ><br />

          <input type="submit" value="ارسال" @click.prevent="send" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GetMultiImage from "@/components/GetMultiImage";
import UploadImage from "@/components/UploadImage";

export default {
  name: "edit-product",

  layout: "PanelLayout",

  components: {
    GetMultiImage,
    UploadImage
  },

  data() {
    return {
      deletedOfOldImages: [],
      deletedOfOldMainImage : [],
      product: {},
      addressFile: "",
      files: [],
      file: [],
      images: [],
      image: "",
      url: "",
      deleted: []
    };
  },

  methods: {
    getDeleteImage(e) {
      this.deletedOfOldImages = e;
    },
    getDeleteMainImage(e){
      this.deletedOfOldMainImage = e;
    },

    getArrayFromArray(array, propName) {
      let arrayOfString = [];
      for (let arr of array) {
        arrayOfString.push(arr[propName]);
      }
      return arrayOfString;
    },

    send() {
      const vm = this;
      const fd = new FormData();
      fd.append("name", vm.product.name);
      fd.append("model", vm.product.model);
      fd.append("size", vm.product.size);
      fd.append("price", vm.product.price);
      fd.append("discount", vm.product.discount);
      fd.append("code", vm.product.code);
      fd.append("material", vm.product.material);
      fd.append("description", vm.product.description);
      fd.append("deletedOfOldImages", vm.deletedOfOldImages);
      fd.append("mainImage", vm.file[0]);
      for (let i = 0; i < vm.files.length; i++) {
        fd.append("images[" + i + "]", vm.product.files[i]);
      }
      console.log(fd);
      axios({
        method: "post",
        url:
          process.env.BASE_URL +
          "products/update/" +
          `${this.$route.params.id}`,
        data: fd,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          vm.errors = res.data.errors;
          vm.$router.push({ name: "index" });
        })
        .catch(err => {
          vm.errors = err.response.data.errors;
          vm.showSave = false;
        });
      vm.$router.push({ name: "index" });
    }
  },

  mounted() {
    const request1 = axios.get(
      process.env.BASE_URL + "products/" + `${this.$route.params.id}`
    );
    const request2 = axios.get(
      process.env.BASE_URL + "images/" + `${this.$route.params.id}`
    );
    axios.all([request1, request2]).then(
      axios.spread((...responses) => {
        this.product = responses[0].data;
        this.images = responses[1].data;
        console.log("this.images = ", this.images);
        this.url =
          process.env.IMAGE_URL + "products/" + this.images[0].productId + "/";
        this.images = this.getArrayFromArray(this.images, "name");

        this.image = this.product.image;
        this.image = this.image.split();
      })
    );
  }
};
</script>

<style scoped lang="scss">
@import "box-white";

@media (max-width: 425px) and (min-height: 320px) {
  .add-image {
    font-size: 12px;
  }
}
@media (max-width: 320px) {
  .add-image {
    font-size: 10px;
  }
}
</style>
