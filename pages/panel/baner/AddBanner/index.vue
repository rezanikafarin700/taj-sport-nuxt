<template>
  <div class="wrapper-small rtl">
    <div class="box-panel">
      <form>
        <div class="form-group">
          <label for="get-multi-image">در این قسمت فقط قادر به انتخاب یک عکس برای بنر هستید</label>
          <GetMultiImage  :once="true" id="get-multi-image" v-model="file" />
          <small id="emailHelp" class="form-text text-muted"></small>

          <div class="space-bottom"></div>

          <label for="demoTitle">عنوان بنر را وارد کنید</label>
          <input
            type="text"
            class="form-control-plaintext"
            id="demoTitle"
            v-model="banner.title"
          />
          <small id="emailHelp" class="form-text text-muted"></small>

          <div class="space-bottom"></div>

          <label for="demoDescription"
            >توضیحات لازم مربوط به بنر را وارد کنید</label
          >

          <textarea
            v-model="banner.description"
            class="form-control-plaintext"
            id="demoDescription"
            cols="30"
            rows="10"
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
            @click="goToRoute('panel-baner')"
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
  name: "AddBanner",
  layout: "PanelLayout",

  components: {
    GetMultiImage
  },

  data() {
    return {
      banner: {
        description: "",
        title: "",
      },
      file: []
    };
  },

  methods: {
    goToRoute(url) {
      this.$router.push({ name: `${url}` });
    },
    send() {
      const vm = this;
      const fd = new FormData();
      fd.append("description", vm.banner.description);
      fd.append("title", vm.banner.title);
      fd.append("image", vm.file[0]);
      console.log(fd, "fd");
      this.$axios({
        method: "post",
        url: process.env.BASE_URL + "banner",
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
</style>
