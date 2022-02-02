<template>
  <div class="wrapper">
    <div class="space-top"></div>
    <div class="small-wrapper">
      <div class="send-box rtl">
        <div class="title">لاگین</div>
        <form @submit.prevent="login">
          <label for="email">ایمیل</label>
          <input type="text" v-model="email" id="email" />
          <small></small>
          <br />
          <br />
          <label for="password">پسورد</label>
          <input type="text" v-model="password" id="password" />
          <small></small>
          <br />
          <br />
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  layout: "account",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "index" });
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
