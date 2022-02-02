<template>
  <div class="wrapper">
    <div class="space-top"></div>
    <div class="small-wrapper">
      <div class="send-box rtl">
        <div class="title">ثبت نام</div>

        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(register)">
             <ValidationProvider
              name="نام کاربری"
              rules="required|min:2"
              v-slot="{ errors }">
              <label for="label-input" class="label-input">
                نام کاربری خود را وارد کنید
              </label>

              <input type="text" v-model="username" id="username" />
               <small class="invalid">{{ errors[0] }}</small>
             </ValidationProvider>
            <br />
            <br />
            <ValidationProvider
              name="ایمیل"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label for="label-input" class="label-input">
                ایمیل خود را وارد کنید
              </label>

              <input type="text" v-model="email" id="email" />
              <small class="invalid">{{ errors[0] }}</small>
            </ValidationProvider>
            <br />
            <br />
            <ValidationProvider
              name="پسورد"
              rules="required|min:6"
              v-slot="{ errors }"
            >
              <label for="password">پسورد</label>
              <label for="label-input" class="label-input">
                پسورد خود را وارد کنید
              </label>

              <input type="text" v-model="password" id="password" />
              <small class="invalid">{{ errors[0] }}</small>
            </ValidationProvider>
            <br />
            <br />
            <button type="submit">ارسال</button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  layout: "account",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      type: "USER",
    };
  },

  methods: {
    register() {
      this.$store
        .dispatch("register", {
          username: this.username,
          email: this.email,
          password: this.password,
          type: "USER",
        })
        .then(() => {
          this.$router.push({ name: "index" });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .invalid {
    color : red;
    font-size: 12px;
  }
</style>
