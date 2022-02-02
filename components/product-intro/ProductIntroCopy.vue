<template>
  <div>
    <div class="products">
      <div class="products__description rtl">
        <FactoryIntro url="images/main-page/intro-factory.jpg" />
      </div>

      <div class="products__box">
         <div class="products__head text  rtl">
                  <p class="title-product">
                    محصولات  کارگاه 
                  </p>
                  <div class="btn-taj">بیشتر...</div>
            </div>

        <div class="products__box--ratio"></div>
        <div class="products__box--left-btn"></div>
        <div class="products__box--right-btn"></div>


        <div v-swiper="swiperOption" class="ml-auto relative swiper-container">
          <div class="swiper-wrapper">

            <div
              class="swiper-slide"
              :key="index"
              v-for="(product, index) in products"
            >
              <div class="ratio"></div>
              <div class="product-information">
                <div class="text  rtl">
                  <p> {{ product.name }} </p>
                  <p>مدل : {{ product.model }}</p>
                  <p>اندازه : {{ product.size }}</p>
                  <p></p>
                  <p>جنس : {{ product.material }}</p>
                  <p></p>
                  <p>قیمت : {{ product.price }} تومان</p>
                  <p></p>
                  <p>تخفیف : {{ product.discount }} %</p>
                </div>
                <img
                  :src="`${url}${product.id}/${product.image}`"
                  alt="انواع فوتبال دستی تاج اسپرت"
                />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- end of swiper -->
        <p class="products__foot dastnevis rtl">هدف ما جلب رضایت شماست</p>
      </div>
    </div>
  </div>
</template>

<script>
Swiper.use([Autoplay, Navigation, Pagination]);
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import { directive } from "vue-awesome-swiper";
import FactoryIntro from "@/components/factory-intro/FactoryIntro";
export default {
  name: "ProductIntro",
  directives: {
    swiper: directive
  },

  components: {
    Swiper,
    directive,
    Navigation,
    FactoryIntro
  },

  props: {
    products: Array,
    url: {
      type: String,
      default: process.env.IMAGE_URL + "products/"
    }
  },

  data() {
    return {
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
  methods: {
    func() {
      this.$refs.test.style.backgroundColor = "red";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables/color_variable";

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row-reverse;
  background-color: $background-product;

  &__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  &__foot{
    text-align: center;
    color : rgba(0,0,0,.4);
    font-size: 18px;
  }

  &__description {
    flex: 0 0 auto;
    width: 40%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__box {
    background-color: $background-box;
    width: 60%;
    flex: 0 0 auto;
    position: relative;
    user-select: none;

    &--ratio {
      padding-top: 50%;
      position: relative;
    }

    &--left-btn {
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
    }
    &--right-btn {
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
    }

    .swiper-container {
      display: flex;
      flex-direction: row;
      margin: auto;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      align-items: center;
    }

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
        justify-content: center;
        align-items: center;
        border-radius: $global-border-radius;

        .text {
          width: 30%;
          justify-content: space-around;
          padding-bottom: 2rem;
          direction: rtl;
          text-align: right;
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
}
.title-product {
  font-size: 20px;
  padding-bottom: .5rem;
  border-bottom: 1px solid #000;
}
.btn-taj{
  cursor: pointer;
  font-weight: bold;
  z-index: 101;
}
.products__text {
  font-size: 18px;
}
.products__para {
  font-size: 14px;
  text-align: justify;
}

.show-price {
  color: rgb(2, 114, 48);
  border-radius: 20px;
  border: 2px solid green;
  padding: 0.5rem 1rem;
  display: inline-block;
}

@media (max-width: 768px) {
  .products {
    &__description {
      width: 100%;
    }
    &__box {
      width: 100%;
    }
  }
}
</style>
