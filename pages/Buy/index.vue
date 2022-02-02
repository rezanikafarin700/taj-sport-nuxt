<template>
  <div class="buy">
    <div class="wrapper">
      <!-- <img :src="`${url}/${product.image}`" /> -->

      <div v-swiper="swiperOption" class=" ml-auto relative swiper-container">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="index"
              v-for="(image, index) in images"
            >
              <div class="ratio"></div>
              <div class="product-information">
                <img
                  :src="`${url}/${image.name}`"
                  alt="انواع فوتبال دستی تاج اسپرت"
                />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- end of swiper -->

      <a target="_blank" href="https://basalam.com/fotballtoys/product/2095458"
        >خرید</a
      >
      {{ product }}
      <hr />
      {{ images }}
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
Swiper.use([Autoplay, Navigation, Pagination]);
import axios from "axios";

export default {
  name: "buy",

  data() {
    return {
      product: {},
      images: [],
      url: process.env.IMAGE_URL + "products/" + this.$route.params.id + "/",

      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        speed: 1500,
        loop: true,
        autoplay: false,
        //  {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".products__box--left-btn",
          prevEl: ".products__box--right-btn"
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
    };
  },

  mounted() {
    const request1 = axios.get(
      process.env.BASE_URL + "products/" + this.$route.params.id
    );
    const request2 = axios.get(
      process.env.BASE_URL + "images/" + this.$route.params.id
    );
    axios.all([request1, request2]).then(
      axios.spread((...responses) => {
        this.product = responses[0].data;
        this.images = responses[1].data;
        let obj = {
          id: 0,
          productId: this.product.id,
          name: this.product.image
        };
        this.images.unshift(obj);
      })
    );
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables/color_variable";
.buy {
  background: #eee;
  padding: 4rem 0;
  a {
    text-decoration: none;
    font-size: 20px;
    color: red;
  }
}

.swiper-container {
  // display: flex;
  // flex-direction: row;
  // margin: auto;
  // overflow: hidden;
  // position: absolute;
  // left: 0;
  // top: 0;
  // width: 100%;
  // height: 100%;
  // align-items: center;
  width: 500px;
  height: 500px;

  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;

    .ratio {
      padding-top: 100%;
      position: relative;
    }
    .product-information {
      position: absolute;
      color: #000;
      width: 100%;
      height: 50%;
      padding: 1rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      border-radius: $global-border-radius;

      .text {
        width: 30%;
        justify-content: space-around;
        padding-bottom: 2rem;
        direction: rtl;
        text-align: center;
      }

      img {
        width: 50%;
        flex: 0 0 auto;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: $global-border-radius;
      }
    }
  }
}
</style>
