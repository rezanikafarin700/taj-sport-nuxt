<template>
  <div class="wrapper-small rtl">
    <div class="box-panel">
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(send)">
          <div class="form-group">
            <ValidationProvider
              name="عکس"
              rules="required|min:1,max:1"
              v-slot="{ errors }"
            >
              <label for="get-multi-image"
                >در این قسمت فقط قادر به انتخاب یک عکس برای مقاله هستید</label
              >
              <GetMultiImage :once="true" id="get-multi-image" v-model="file" />
              <div class="invalid">{{ errors[0] }}</div>
            </ValidationProvider>
            <div class="space-bottom"></div>

            <ValidationProvider
              name="عنوان مقاله"
              rules="required|min:2"
              v-slot="{ errors }"
            >
              <label for="label-input" class="label-input">
                عنوان مقاله را وارد کنید
              </label>
              <input
                type="text"
                class="form-control-plaintext"
                id="demoTitle"
                v-model="article.title"
              />
              <small class="invalid">{{ errors[0] }}</small>
            </ValidationProvider>

            <div class="space-bottom"></div>
          </div>

          <ValidationProvider
            name="توضیحات مقاله"
            rules="required|min:2"
            v-slot="{ errors }"
          >
            <label for="label-input" class="label-input">
              توضیحات لازم مربوط به مقاله را وارد کنید
            </label>

            <textarea
              v-model="article.description"
              class="form-control-plaintext"
              id="demoDescription"
              cols="30"
              rows="10"
            ></textarea>

            <small class="invalid">{{ errors[0] }}</small>
          </ValidationProvider>

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
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import GetMultiImage from "@/components/GetMultiImage";
export default {
  name: "AddArticle",
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
      fd.append("description", vm.article.description);
      fd.append("title", vm.article.title);
      fd.append("image", vm.file[0]);
      console.log(fd, "fd");
      this.$axios({
        method: "post",
        url: process.env.BASE_URL + "article",
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
          utils.handelError(this, err);
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
