<template>
  <div>
    <div class="wrapper">
      <div class="send-box rtl">
        <nuxt-link :to="{ name: 'account-register' }">ثبت نام</nuxt-link>
        <br />
        <br />
        <nuxt-link :to="{ name: 'account-Login' }">لاگین</nuxt-link>
        <br />
        <br />
        <button @click="logout">لاگ اوت</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  layout: "account",

  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped></style>
