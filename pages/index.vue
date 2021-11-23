<template>
  <div>
    <header-slider-by-button :images="banners" @changeScroll="getOutput" />
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

    <div class="parent-items">
      <div class="space"></div>
      <div class="parent-items__parent-logo">
        <logo />
      </div>
      <div class="title-items center">انواع فوتبال دستی</div>
      <div class="wrapper">
        <div class="parent-items__items">
          <div
            class="parent-items__item"
            v-for="(foosball, index) in firstSeriesOfArticles"
            :key="index"
          >
            <card-intro :product="foosball" />
          </div>
        </div>
      </div>
    </div>

    <div class="container-products-intro">
      <div class="wrapper">
        <ProductIntro :products="products" />
      </div>
    </div>

    <div class="background-article">
      <div class="wrapper">
        <div class="title-items" style="color : #ffffff">
          <div class="space"></div>
          <div class="center">نکات مهم هنگام خرید فوتبال دستی</div>
        </div>
        <div class="background-article__pages">
          <div class="background-article__page">
            <p v-for="(note, index) in notesPage1" :key="index">
              <span class="bold"> {{ note.title }}</span>
              {{ note.description }}
            </p>
            <div class="page-number">صفحه یک</div>
          </div>
          <div class="background-article__page">
            <p v-for="(note, index) in notesPage2" :key="index">
              <span class="bold"> {{ note.title }}</span>
              {{ note.description }}
            </p>
            <div class="page-number">صفحه دو</div>
          </div>
        </div>
        <div class="space"></div>
      </div>
    </div>

    <div class="container-cards">
      <div class="wrapper">
        <div class="title-items center">آشنایی با محصولات تاج اسپرت</div>
        <div class="space"></div>
        <div class="cards">
          <div
            class="cards__card"
            v-for="(product, index) in products"
            :key="index"
          >
            <card :product="product" />
          </div>
        </div>

        <div class="spinner center" v-if="products.length == 0">
          <img width="90" height="60" src="~assets/images/gif/spinner.gif" />
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="article space">
        <div
          class="article__image"
          :style="{ backgroundImage: `url(images/articles/6.jpg)` }"
        >
          <div class="article__image--ratio">
            <img
              src="~assets/images/articles/6.jpg"
              alt="فوتبال دستی و خاطرات"
            />
          </div>
        </div>
        <div class="article__text">
          <div class="title-items">خاطرات ماندگار</div>
          <div class="article__intro">
            <p v-for="(p, index) in para" :key="index">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="parent-items space">
      <div class="parent-items__parent-logo">
        <logo />
      </div>
      <div class="title-items center">انواع فوتبال دستی</div>
      <div class="wrapper">
        <div class="parent-items__items">
          <div
            class="parent-items__item"
            v-for="(foosball, index) in secondSeriesOfArticles"
            :key="index"
          >
            <card-intro :product="foosball" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSliderByButton from "@/components/HeaderSliderByButton";
import CartIntro from "@/components/CardIntro";
import Logo from "@/components/Logo.vue";
import ProductIntro from "@/components/ProductInro";
import axios from "axios";
import { notesPage1, notesPage2, para } from "./variables";

export default {
  name: "index",
  components: {
    HeaderSliderByButton,
    Logo,
    CartIntro,
    ProductIntro
  },
  data() {
    return {
      banners: [],
      products: [],
      notesPage1,
      notesPage2,
      para,
      firstSeriesOfArticles: [],
      secondSeriesOfArticles: [],
      showPages: false,
      showP: 0
    };
  },

  methods: {
    getOutput(e) {
      this.showPages = e;
    }
  },

  mounted() {
    const request1 = axios.get(process.env.BASE_URL + "banner");
    const request2 = axios.get(process.env.BASE_URL + "article");
    const request3 = axios.get(process.env.BASE_URL + "products");
    axios.all([request1, request2, request3]).then(
      axios.spread((...responses) => {
        this.banners = responses[0].data;
        this.firstSeriesOfArticles = responses[1].data.splice(0, 4);
        this.secondSeriesOfArticles = responses[1].data.splice(0, 4);
        this.products = responses[2].data;
      })
    );
  }
};
</script>

<style lang="scss" scoped>
@import "index";
</style>
