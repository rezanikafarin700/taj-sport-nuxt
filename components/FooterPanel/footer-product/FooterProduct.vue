<template>
  <div class="foot">
    <div class="wrapper">
      <div class="title-items dastnevis">
        خرید آنلاین را میتوانید با گزینهای زیر انتخاب کنید
      </div>
      <div class="foot__links">
        <a class="foot__link" target="_blank" href="https://taj-sports.ir/"
          ><TorobLogo
        /></a>
        <a
          class="foot__link"
          target="_blank"
          href="https://basalam.com/fotballtoys"
          ><BasalamLogo
        /></a>
        <a
          class="foot__link"
          target="_blank"
          href="https://www.digikala.com/product/dkp-6761558/%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84-%D8%AF%D8%B3%D8%AA%DB%8C-%D9%85%D8%AF%D9%84-s106/"
          ><DegiKalaLogoFa
        /></a>
      </div>
      <p class="foot__text dastnevis">
        جهت خرید به صورت حضوری به آدرس اراک مهر دشت ... و یا با شماره تلفن های
        0918 11111 و 091822222 تماس حاصل نمایید
      </p>

      <div class="foot__icons">
        <div
          target="_blank"
          href="https://www.instagram.com/taj_sportss/"
          class="foot__icon"
        >
          <Instageram />
        </div>
        <div class="foot__icon"><Twiter /></div>
        <div class="foot__icon"><Telegram /></div>
        <div class="foot__icon"><Whatsapp /></div>
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
import TorobLogo from "@/components/svg/TorobLogo";
import Instageram from "@/components/svg/Instageram";
import BasalamLogo from "~/components/svg/BalalamLogo";
import DegiKalaLogoFa from "@/components/svg/DegiKalaLogoFa";

export default {
  name: "FooterProduct",
  components: {
    Twiter,
    Telegram,
    Whatsapp,
    TorobLogo,
    Instageram,
    BasalamLogo,
    DegiKalaLogoFa
  }
};
</script>

<style lang="scss" scoped>
.foot {
  background: #e5e5e5;
  padding: 4rem 0 2rem 0;

  &__links {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }

  &__link {
    width: calc(33.33333% - 2rem);
    margin: 1rem;
    flex: 0 0 auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &__icons {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin: 1rem;
    cursor: pointer;
  }

  &__text {
    font-weight: 300;
    font-size: 16px;
    padding: 0 2rem;
  }
}
.wrapper {
  text-align: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
}
.small-font {
  padding: 1rem  2rem;
  text-align: center;

}
.title-items {
  text-align: center;
  padding: 0 2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
}
</style>
