<template>
  <div>
    <div class="footer">
      <div class="end-intro">
        <div class="end-intro__title dastnevis center">
          تقدیم به شما دوست عزیز
        </div>
        <div class="end-intro__text dastnevis">
          ما در این مجوعه سعی داریم تا با تولید محصولاتی با کیفیت ساعاتی پر نشاط
          سر گرم کننده همراه با خاطراتی به یاد ماندنی را برای شما مشتریان عزیز
          فراهم کنیم و با تولید محصولات با کیفیت و متنوع در پی کسب رضایت شما
          دوستان گرامی هستیم
          <div class=""></div>
          <p class="end-intro__foot dastnevis">
            گروه تولیدی تاج اسپرت
          </p>
        </div>
      </div>

      <div>
        <div class="footer__icons">
          <a target="_blank" href="https://www.instagram.com/taj_sportss/" class="footer__icon"><Instageram /></a>
          <div class="footer__icon"><Twiter /></div>
          <div class="footer__icon"><Telegram /></div>
          <div class="footer__icon"><Whatsapp /></div>
        </div>
      </div>
      <p class="small-font center rtl">
        کليه حقوق محصولات و محتوای اين سایت متعلق به تاج اسپرت می باشد و هر گونه
        کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
      </p>
    </div>
  </div>
</template>

<script>
import Twiter from "@/components/svg/Twiter";
import Telegram from "@/components/svg/Telegram";
import Whatsapp from "@/components/svg/Whatsapp";
import Instageram from "@/components/svg/Instageram";

export default {
  name: "Footer",
  components: {
    Twiter,
    Telegram,
    Whatsapp,
    Instageram
  },
  props: {
    articles: Array,
    url: {
      type: String,
      default: process.env.IMAGE_URL + ""
    }
  }
};
</script>

<style scoped lang="scss">
@import "footer";
</style>
