<template>
  <div class="wrapper-small rtl">
    <div class="box-panel">
      <form>
        <div class="form-group">
          <label for="get-multi-image"
            >در این قسمت فقط قادر به انتخاب یک عکس برای فوتر هستید</label
          >
          <small id="emailHelp" class="form-text text-muted"></small>
          <UploadImage
            :once="true"
            :url="url"
            :oldImages="oldImage"
            v-model="file"
          />

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
            @click="goToRoute('panel-article')"
          >
            بازگشت
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UploadImage from "@/components/UploadImage";
export default {
  name: "EditArticle",
  layout: "PanelLayout",

  components: {
    UploadImage
  },

  data() {
    return {
      url: "",
      oldImage: [],
      article: {
        description: "",
        title: ""
      },
      file: []
    };
  },

  methods: {
    goToRoute(url) {
      this.$router.push({ name: `${url}` });
    },
    send() {
      console.log("in Send article.title = ", this.article.title);
      console.log("in Send article.description = ", this.article.description);
      const vm = this;
      const fd = new FormData();
      fd.append("description", vm.article.description);
      fd.append("title", vm.article.title);
      fd.append("image", vm.file[0]);
      console.log(fd, "fd");
      this.$axios({
        method: "post",
        url: process.env.BASE_URL + "article/update/" + this.$route.params.id,
        data: fd,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          console.log(res, "res");
          vm.$router.push({ name: "index" });
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
      .get(process.env.BASE_URL + "article/" + `${this.$route.params.id}`)
      .then(res => {
        this.article = res.data;
        this.url = process.env.IMAGE_URL + "articles/" + this.article.id + "/";
        this.oldImage = this.article.image;
        this.oldImage = this.oldImage.split();
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
