<template>
  <div>
    <div class="products">
      <div class="products__description rtl">
        <div class="title-product">تولیدات تاج اسپرت</div>
        <br />
        <div class="products__text">انتخاب کنید</div>
        <div class="products__line">___</div>
        <div class="products__para">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </div>
        <button class="products__btn">خرید آسان</button>
      </div>

      <div class="products__box">
        <div class="products__box--ratio"></div>
        <div class="products__box--left-btn"></div>
        <div class="products__box--right-btn"></div>
        <!-- به جای استفاده از کلاس های زیر کلاس های دلخواه انتخاب کردیم -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <div v-swiper="swiperOption" class=" ml-auto relative swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="index"
              v-for="(product, index) in products"
            >
              <div class="ratio"></div>
              <div class="product-information">
                <div class="text dastnevis rtl">
                  <p class="title-product">
                    {{ product.name }}
                  </p>
                  <p>مدل : {{ product.model }}</p>
                  <p>اندازه : {{ product.size }}</p>
                  <p></p>
                  <p>جنس : {{ product.material }}</p>
                  <p></p>
                  <p>قیمت : {{ product.price }} تومان</p>
                  <p></p>
                  <p class="show-price">تخفیف : {{ product.discount }} %</p>
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
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
Swiper.use([Autoplay, Navigation, Pagination]);
export default {
  name: "ProductIntro",
  directives: {
    swiper: directive
  },

  components: {
    directive,
    Navigation,
    Swiper
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
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
          // clickable: true
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables/color_variable";

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  background-color: $background-product;

  &__btn {
    border: 1px solid green;
    color: green;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
  }

  &__description {
    flex: 0 0 auto;
    width: 30%;
  }
  &__box {
    background-color: $background-box;
    width: 60%;
    flex: 0 0 auto;
    position: relative;

    &--ratio {
      padding-top: 50%;
      position: relative;
    }

    &--left-btn {
      position: absolute;
      left: -25px;
      top: 50%;
      width: 8px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-position: center;
      background-size: cover;
      background-image: url("@/assets/icons/arrow-left.png");
    }
    &--right-btn {
      position: absolute;
      right: -25px;
      top: 50%;
      width: 8px;
      height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      background-position: center;
      background-size: cover;
      background-image: url("@/assets/icons/arrow-right.png");
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
}
.title-product {
  font-size: 20px;
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
