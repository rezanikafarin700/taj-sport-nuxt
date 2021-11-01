<template>
  <div>
    <header-slider-by-button :images="banners" />
    <div class="space-bottom"></div>
    <div class="start-intro">
      <div class="wrapper">
        <div class="start-intro__title dastnevis">
          ساعاتی خوش با فوتبال دستی
        </div>
        <p class="start-intro__text dastnevis">
          فوتبال دستی از بازی های نوستالژی و دوست داشتنی تمام افراد دنیا اعم از
          بانوان و آقایان می باشد که قدر مسلم اغلب ما موفق به کسب تجربه بازی با
          آن شده ایم. امروزه دنیای فوتبال دستی ها کاملا پیشرفت کرده و می توان در
          کنار مدل های ساده پیشین با مدل های فوق العاده جذابی نیز از این نوع
          میزهای ورزشی و تفریحی مواجه شویم که البته این تنوع مدلی سبب قدری
          پیچیده شدن خرید فوتبال دستی برای عاشقان این بازی شده است. با این حال
          ما تصمیم داریم تا در این مقاله شما را با یکسری از نکات مهم در خصوص
          خرید فوتبال دستی آشنا نماییم که قطعا به کارتان خواهد آمد.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSliderByButton from "@/components/HeaderSliderByButton";
export default {
  head() {
    return {
      title: "فوتبال دستی تاج اسپرت",
      meta: {
        hid: "description",
        name: "description",
        content: "خرید فوتبال دستی مناسب"
      }
    };
  },

  name: "index",
  components: {
    HeaderSliderByButton
  },

  data() {
    return {
      banners: []
    };
  },
  mounted() {
    this.$axios.get("http://localhost/Asia/public/api/banner").then(res => {
      this.banners = res.data;
      console.log("res = ", this.banners);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "index";
</style>
