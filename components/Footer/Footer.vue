<template>
  <div>
    <div class="footer">
      <div class="end-intro">
        <div class="end-intro__title dastnevis center">
          تقدیم به شما دوست عزیز
        </div>
        <div class="end-intro__text dastnevis">
              ما در این مجوعه سعی داریم تا با تولید محصولاتی با کیفیت ساعاتی پر نشاط
               سر گرم کننده همراه با خاطراتی به یاد ماندنی را برای شما مشتریان عزیز فراهم کنیم
               و با تولید محصولات با کیفیت و متنوع در پی کسب رضایت شما دوستان گرامی هستیم
              <div class=""></div>
          <p class="end-intro__foot dastnevis">
            گروه تولیدی تاج اسپرت
          </p>
        </div>
      </div>

      <div>
        <div class="footer__icons">
          <br />
          <div
            class="footer__icon"
            :style="{
              backgroundImage: `url(${require('@/assets/icons/instagram1.svg')})`
            }"
          ></div>
          <div
            class="footer__icon"
            :style="{
              backgroundImage: `url(${require('@/assets/icons/twiter.svg')})`
            }"
          ></div>
          <div
            class="footer__icon"
            :style="{
              backgroundImage: `url(${require('@/assets/icons/telegram.svg')})`
            }"
          ></div>
          <div
            class="footer__icon"
            :style="{
              backgroundImage: `url(${require('@/assets/icons/whatsapp.svg')})`
            }"
          ></div>
        </div>
      </div>
      <p class="small-font center rtl">
        هر گونه استفاده از مطالب این سایت هیچگونه پیگرد قانونی ندارد پس تا
        میتوانید استفاده کنید
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    articles: Array,
    url: {
      type: String,
      default: process.env.IMAGE_URL + ""
    }
  },
};
</script>

<style scoped lang="scss">
@import "footer";
</style>
