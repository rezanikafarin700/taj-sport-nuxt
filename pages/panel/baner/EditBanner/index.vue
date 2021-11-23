<template>
  <div class="wrapper-small rtl">
    <div class="box-panel">
      <form>
        <div class="form-group">
          <!-- article = {{ article }} -->
          <label for="get-multi-image"
            >در این قسمت فقط قادر به انتخاب یک عکس برای فوتر هستید</label
          >
          <img :src="addressFile" width="100" height="100" alt="فوتبال دستی" />
          <GetMultiImage id="get-multi-image" v-model="file" />
          <small id="emailHelp" class="form-text text-muted"></small>

          <div class="space-bottom"></div>

          <label for="demoTitle">عنوان مقاله را وارد کنید</label>
          <input
            type="text"
            class="form-control-plaintext"
            id="demoTitle"
            v-model="article.title"
          />
          <small id="emailHelp" class="form-text text-muted"></small>

          <div class="space-bottom"></div>

          <label for="demoDescription"
            >توضیحات لازم مربوط به مقاله را وارد کنید</label
          >

          <textarea
            class="form-control-plaintext"
            id="demoDescription"
            cols="30"
            rows="10"
            v-model="article.description"
          ></textarea>

          <small id="emailHelp" class="form-text text-muted"></small>
        </div>

        <div class="space-bottom"></div>

        <div class="btns">
          <button
            type="submit"
            class="btn btn-primary btn-block"
            @click.prevent="send"
          >
            ارسال
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="goToRoute('panel-banner')"
          >
            بازگشت
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import GetMultiImage from "@/components/GetMultiImage";
export default {
  name: "EditBanner",
  layout: "PanelLayout",

  components: {
    GetMultiImage
  },

  data() {
    return {
      article: {
        description: "",
        title: ""
      },
      file: [],
      addressFile: ""
    };
  },

  methods: {
    goToRoute(url) {
      this.$router.push({ name: `${url}` });
    },
    send() {
      console.log('in Send article.title = ',this.article.title);
      console.log('in Send article.description = ',this.article.description);
const vm = this;
      const fd = new FormData();
      fd.append("description", vm.article.description);
      fd.append("title", vm.article.title);
      fd.append("image", vm.file[0]);
      console.log(fd, "fd");
      this.$axios({
        method: "post",
        url: process.env.BASE_URL + "banner/update/" +  this.$route.params.id,
        data: fd,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          console.log(res, "res");
          vm.$router.push({ name: "panel-baner" });
        })
        .catch(err => {
          console.log(err.response.data, "err");
          vm.errors = err.response.data.errors;
          vm.showSave = false;
        });
    }
  },
  mounted() {
    this.$axios
      .get(process.env.BASE_URL + "banner/" + `${this.$route.params.id}`)
      .then(res => {
        this.article = res.data;

        this.addressFile =
          process.env.IMAGE_URL +
          "banners/" +
          this.article.id +
          "/" +
          this.article.image;
      });
  }
};
</script>

<style lang="scss" scoped>
small {
  display: block;
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
img {
  object-fit: cover;
  object-position: center;

}
</style>
