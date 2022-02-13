<template>
  <div>
    <MainLoading v-if="product == null" />
    <template v-else>
      <section class="content">
        <div class="content__images">
          <Slider :images="images" />
        </div>
        <div class="content__texts">
          <h1 class="title-items dastnevis">{{ product.name }}</h1>
          <div class="content__info dastnevis">
            <p>قیمت : {{ product.price }} تومان</p>
            <p>اندازه : {{ product.size }}</p>
            <p>
              ارتفاع :
              <span v-if="product.height == 0">ندارد</span>
              <span v-else>{{ product.height }} سانتی متر</span>
            </p>
            <p>
              وزن :
              <span v-if="product.weight == 0">ندارد</span>
              <span v-else>{{ product.weight }} گرم</span>
            </p>
            <p>ابعاد دروازه : {{ product.gate }}</p>
            <p>ابعاد آدمک : {{ product.manikin }}</p>
            <p>مدل : {{ product.model }}</p>
            <p>کد محصول : {{ product.code }}</p>
            <p>جنس : {{ product.material }}</p>
            <p>تخفیف : {{ product.discount }} درصد</p>
          </div>
          <hr />
          <div class="title-items dastnevis">توضیحات</div>
          <p>{{ product.description }}</p>
        </div>
      </section>
      <div class="content__btns">
        <button class="content__btn" @click="$router.push({ name: 'index' })">
          صفحه اصلی
        </button>
        <a
          class="content__btn"
          target="_blank"
          href="https://basalam.com/fotballtoys/product/2095458"
          >خرید</a
        >
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "@/components/slider/Slider";
import MainLoading from "@/components/loading/MainLoading";

export default {
  name: "Buy",
  layout: "Product",
  components: {
    Slider,
    MainLoading
  },

  data() {
    return {
      product: null,
      images: [],
      productId: -1
    };
  },

  mounted() {
    this.productId = localStorage.getItem("productId");
    const request1 = axios.get(
      process.env.BASE_URL + "products/" + this.productId
    );
    const request2 = axios.get(
      process.env.BASE_URL + "images/" + this.productId
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
.content {
  width: 100%;
  background-color: #fff;
  color: #222;
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: wrap;

  &__texts {
    text-align: center;
    direction: rtl;
    padding: 2rem;
    width: 50%;
    border-left: 1px solid #e5e5e5;

    @media (max-width: 1200px) {
      width: 100%;
    }

    p {
      font-size: 14px;
      text-align: justify;
    }
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    p {
      width: calc(50% - 2rem);
      flex: 1 1 auto;
      margin: 1rem;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 100;

      @media (max-width: 450px) {
        font-size: 1rem;
      }
    }
  }

  &__images {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1200px) {
      width: 100%;
      margin-top: 3rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 150px;
    background: #fff;
    margin-top: 2rem;
    @media (max-width: 768px) {
      padding: 1.5rem 1rem;
    }
  }
  &__btn {
    background-color: #fff;
    color: #b2b2b2;
    border: 1px solid #b2b2b2;
    display: inline-block;
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
    text-decoration: none;
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 14px;
      white-space: nowrap;
      min-width: 100px;
      padding: 0.5rem 1rem;
    }
  }
}
.title-items {
  @media (max-width: 450px) {
    font-size: 1rem;
  }
}
</style>
