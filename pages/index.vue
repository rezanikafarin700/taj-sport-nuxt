<template>
  <div>
    <MainLoading v-if="products.length == 0" />
    <template v-else>
      <Header />
      <HeaderSlider :images="banners" @changeScroll="getOutput" />
      <div class="start-intro">
        <div class="wrapper">
          <div class="start-intro__title dastnevis">
            ساعاتی خوش با فوتبال دستی
          </div>
          <p class="start-intro__text dastnevis">
            فوتبال دستی از بازی های نوستالژی و دوست داشتنی تمام افراد دنیا اعم
            از بانوان و آقایان می باشد که قدر مسلم اغلب ما موفق به کسب تجربه
            بازی با آن شده ایم. امروزه دنیای فوتبال دستی ها کاملا پیشرفت کرده و
            می توان در کنار مدل های ساده پیشین با مدل های فوق العاده جذابی نیز
            از این نوع میزهای ورزشی و تفریحی مواجه شویم که البته این تنوع مدلی
            سبب قدری پیچیده شدن خرید فوتبال دستی برای عاشقان این بازی شده است.
            با این حال ما تصمیم داریم تا در این مقاله شما را با یکسری از نکات
            مهم در خصوص خرید فوتبال دستی آشنا نماییم که قطعا به کارتان خواهد
            آمد.
          </p>
        </div>
      </div>

      <div class="parent-items">
        <div class="space"></div>
        <div class="parent-items__parent-logo">
          <logo />
        </div>
        <h1 class="title-items center dastnevis">انواع فوتبال دستی</h1>
        <div class="wrapper">
          <div class="parent-items__items">
            <div
              class="parent-items__item"
              v-for="(foosball, index) in firstSeriesOfArticles"
              :key="index"
            >
              <CardIntro
                :product="foosball"
                textOverlay="ادامه داستان"
                @onClick="goToRoute(index)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container-products-intro">
        <div class="wrapper">
          <ProductIntro :products="products" />
        </div>
      </div>

      <div class="container-cards">
        <div class="wrapper">
          <h3 class="title-items center dastnevis">
            آشنایی با محصولات تاج اسپرت
          </h3>
          <div class="space"></div>
          <div class="cards">
            <div
              class="cards__card"
              v-for="(product, index) in products"
              :key="index"
              @click="goToFoosball(product.id)"
            >
              <Card :product="product" />
            </div>
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
            <div class="title-items dastnevis">تولد فوتبال دستی</div>
            <br />
            <div class="article__intro">
              <p class="start-intro__text para">
                فوتبال دستی ( فوتبال رومیزی) نوعی بازی است که بین دو یا چهار
                نفر، بر یک میز مخصوص با آدمک هایی که به میله هایی وصل شده اند،
                انجام می گیرد. این بازی به فضای بزرگی احتیاج ندارد اما بسیار
                هیجان انگیز و سرگرم کننده است. فوتبال دستی، میزهای پایه دار و
                بدون پایه دارد و بازی خوبی برای روزهایی است که هوا برای بیرون
                رفتن از خانه مناسب نیست.
              </p>
              <p class="start-intro__text para">
                بازی فوتبال دستی را یک فرد اسپانیایی اختراع کرد. او نویسنده و
                شاعری بود که بعد از مجروح شدن در جنگ داخلی اسپانیا، در بیمارستان
                بستری شده بود. او در بیمارستان، پسر بچه هایی را می دید که عاشق
                فوتبال بودند اما به خاطر آسیب دیدگی پا، توان بازی نداشتند. این
                نویسنده به فکر افتاد تا برای این جور بچه ها، بازی مناسبی طراحی
                کند. تلاش های او کم کم به نتیجه رسید و بازی فوتبال دستی مورد
                استقبال بچه ها و بزرگ تر ها قرار گرفت.
              </p>
              <p class="start-intro__text para">
                فوتبال دستی از بازی های نوستالژی و دوست داشتنی تمام افراد دنیا
                اعم از بانوان و آقایان می باشد که قدر مسلم اغلب ما موفق به کسب
                تجربه بازی با آن شده ایم. امروزه دنیای فوتبال دستی ها کاملا
                پیشرفت کرده و می توان در کنار مدل های ساده پیشین با مدل های فوق
                العاده جذابی نیز از این نوع میزهای ورزشی و تفریحی مواجه شویم که
                البته این تنوع مدلی سبب قدری پیچیده شدن خرید فوتبال دستی برای
                عاشقان این بازی شده است. با این حال ما تصمیم داریم تا در این
                مقاله شما را با یکسری از نکات مهم در خصوص خرید فوتبال دستی آشنا
                نماییم که قطعا به کارتان خواهد آمد.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="parent-items">
        <div class="parent-items__parent-logo">
          <Logo />
        </div>
        <h2 class="title-items center dastnevis">انواع فوتبال دستی</h2>
        <div class="wrapper">
          <div class="parent-items__items">
            <div
              class="parent-items__item"
              v-for="(foosball, index) in secondSeriesOfArticles"
              :key="index"
            >
              <CardIntro :product="foosball" textOverlay="ادامه داستان" />
            </div>
          </div>
        </div>
      </div>
      <Articles v-show="!isArticlePath" />
      <Footer />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Logo from "@/components/Logo";
import Card from "@/components/card/Card";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Articles from "@/components/articles/Articles";
import CardIntro from "@/components/card-intro/CardIntro";
import MainLoading from "@/components/loading/MainLoading";
import HeaderSlider from "@/components/header-slider/HeaderSlider";
import ProductIntro from "@/components/product-intro/ProductIntro";

export default {
  name: "index",
  layout: "empty",
  components: {
    Logo,
    Card,
    Header,
    Footer,
    Articles,
    CardIntro,
    MainLoading,
    HeaderSlider,
    ProductIntro
  },
  data() {
    return {
      showP: 0,
      banners: [],
      products: [],
      showPages: false,
      firstSeriesOfArticles: [],
      secondSeriesOfArticles: [],
      url: process.env.IMAGE_URL + "products/"
    };
  },

  methods: {
    getOutput(e) {
      this.showPages = e;
    },
    goToFoosball(id) {
      this.$router.push({ name: "Buy", params: { id: id } });
    },
    goToRoute(index) {
      switch (index) {
        case 0:
          this.$router.push({ name: "history-History" });
          break;
        // case 1 :
        //   break;
      }
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
