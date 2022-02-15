<template>
  <div class="root">
    <div class="body">
      <div class="image" @mouseover="zoomImage"></div>
      <div class="zoom" ref="zoom"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderSlider from "@/components/header-slider/HeaderSlider";
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "test",
  components: {
    HeaderSlider,
    ContinueArticle
  },

  data() {
    return {
      offsetX: 0,
      offsetY: 0,

      images: ["image1.jpg", "image2.jpg"],

      banners: [],
      products: [],
      firstSeriesOfArticles: [],
      secondSeriesOfArticles: [],
      showPages: false,
      showP: 0,
      url: process.env.IMAGE_URL + "products/"
    };
  },

  // methods: {
  //   zoomImage(e) {
  //     let zoom = this.$refs.zoom;
  //     zoom.style.backgroundPosition = `${e.offsetX}`
  //   }
  // },

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
.root {
  margin: 100px;

  .body {
    display: flex;
    .image {
      width: 250px;
      height: 250px;
      flex: 0 0 auto;
      background-image: url("@/assets/images/rules/image2.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .zoom {
      width: 500px;
      height: 500px;
      flex: 0 0 auto;
      background-image: url("@/assets/images/rules/image2.jpg");
      background-size: 200% 200%;
      background-position: 100px 100px;
      border: 1px solid #000;
    }
  }
}
.body {
  width: 100%;
  background-color: yellow;
  .image {
    width: 100%;
    background-color: pink;
    display: flex;

    .ratio {
      padding-top: 100%;
      position: relative;
      background-color: green;

      img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
