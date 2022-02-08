<template>
  <div class="box">
    <div class="box--ratio"></div>
    <div class="box__left-btn"></div>
    <div class="box__right-btn"></div>

    <div v-swiper="swiperOption" class="ml-auto relative swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(image, index) in images">
          <div class="ratio"></div>
          <div class="product-information">
            <div class="item">
              <img
                :src="`${url}${image.name}`"
                alt="انواع فوتبال دستی تاج اسپرت"
              />
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- end of swiper -->
  </div>
</template>

<script>
Swiper.use([Autoplay, Navigation, Pagination]);
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import { directive } from "vue-awesome-swiper";
export default {
  name: "ProductIntro",
  directives: {
    swiper: directive
  },

  components: {
    Swiper,
    directive,
    Navigation
  },

  props: {
    images: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      default() {
        return this.urlDefault;
      }
    }
  },

  data() {
    return {
      urlDefault: "",
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        speed: 1500,
        loop: true,
        autoplay: false,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".box__left-btn",
          prevEl: ".box__right-btn"
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
    let productId = localStorage.getItem("productId");
    this.urlDefault = process.env.IMAGE_URL + `products/${productId}/`;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables/color_variable";

.box {
  width: 100%;
  flex: 0 0 auto;
  position: relative;
  user-select: none;
  height: 50%;

  @media (max-width: 576px) {
    padiing-bottom: 1rem;
  }
  @media (max-width : 1200px) {
    margin-top: 3rem;
  }

  &--ratio {
    padding-top: 100%;
    position: relative;
    @media (min-width : 767px) and (max-width : 1200px){
      padding-top: 50%;
    }
      @media (max-width : 768px) {
      padding-top: 100%;
    }
  }

  &__left-btn {
    position: absolute;
    left: 20px;
    top: 50%;
    width: 8px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: url("@/assets/icons/arrow-left.png");
    z-index: 100;
    @media (max-width : 768px) {
      top : 40%;
      left : 0;
    }
  }
  &__right-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 8px;
    height: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-position: center;
    background-size: cover;
    background-image: url("@/assets/icons/arrow-right.png");
    z-index: 100;
    @media (max-width : 768px) {
      top : 40%;
      right : 0;
    }
  }

  .swiper-container {
    display: flex;
    margin: auto;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .swiper-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .swiper-slide {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;

    .ratio {
      padding-top: 50%;
      position: relative;
    }
    .product-information {
      position: absolute;
      color: #000;
      width: 80%;
      height: 400px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
      border-radius: $global-border-radius;
      .text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        direction: rtl;
        text-align: right;
        color: #555;
        font-size: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        flex: 0 0 auto;
        object-fit: cover;
        object-position: center;
        border-radius: $global-border-radius;
      }
    }
  }
}

</style>
