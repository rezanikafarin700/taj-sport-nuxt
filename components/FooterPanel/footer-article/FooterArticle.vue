<template>
  <div class="body">
    <a :href="handlePath.prevPath" class="body__item body__left">
      <div class="body__image">
        <img :src="handlePath.prevImage" alt="مقاله های فوتبال دستی" />
      </div>
      <div class="body__help">
        <ArrowGreen class="rev" />
        <p class="italic">Prev Article</p>
      </div>
    </a>
    <a :href="handlePath.nextPath" class="body__item body__right">
      <div class="body__image">
        <img :src="handlePath.nextImage" alt="مقاله های فوتبال دستی" />
      </div>
      <div class="body__help">
        <ArrowGreen />
        <p class="italic">Next Article</p>
      </div>
    </a>
  </div>
</template>

<script>
import ArrowGreen from "@/components/svg/ArrowGreen";
export default {
  name: "FooterArticle",
  components: {
    ArrowGreen
  },
  data() {
    return {
      handlePath: {},
      articlesPath: [
        {
          currentPath: "/Articles/history/History",
          nextPath: "/Articles/rules/Rules",
          prevPath: "/Articles/buy/Buy",
          nextImage: require("@/assets/images/rules/image1.jpg"),
          prevImage: require("@/assets/images/buy/image1.jpg")
        },
        {
          currentPath: "/Articles/rules/Rules",
          nextPath: "/Articles/method/Method",
          prevPath: "/Articles/history/History",
          nextImage: require("@/assets/images/methods/span.jpg"),
          prevImage: require("@/assets/images/history/11.jpg")
        },
        {
          currentPath: "/Articles/method/Method",
          nextPath: "/Articles/buy/Buy",
          prevPath: "/Articles/rules/Rules",
          nextImage: require("@/assets/images/buy/image1.jpg"),
          prevImage: require("@/assets/images/rules/image1.jpg")
        },
        {
          currentPath: "/Articles/buy/Buy",
          nextPath: "/Articles/history/History",
          prevPath: "/Articles/method/Method",
          nextImage: require("@/assets/images/history/11.jpg"),
          prevImage: require("@/assets/images/methods/span.jpg")
        }
      ]
    };
  },
  methods: {
    goToRoute(path) {
      this.$router.push({ name: path });
    }
  },
  mounted() {
    this.handlePath = this.articlesPath.find(article => {
      return article.currentPath == $nuxt.$route.path;
    });
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: #222;
  }

  &__item {
    width: 730px;
    height: 260px;
    display: flex;
    transition: all 1s;
    &:hover {
      p {
        color: #28a46c;
      }
    }
  }
  &__left {
    transform: translateX(-300px);
    &:hover {
      transform: translateX(-2rem);
    }
    @media (max-width: 1000px) {
      transform: translateX(0);
      &:hover {
        transform: translateX(0);
      }
    }
  }
  &__right {
    transform: translateX(300px);
    flex-direction: row-reverse;
    &:hover {
      transform: translateX(2rem);
    }
    @media (max-width: 1000px) {
      transform: translateX(0);
      &:hover {
        transform: translateX(0);
      }
    }
  }
  &__image {
    width: 80%;
    flex: 0 0 auto;
    height: 100%;
    margin: 0 2rem;
    @media (max-width: 1000px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__help {
    text-align: center;
    padding-top: 3.5rem;
  }
}
.italic {
  font-style: italic;
  font-size: 12px;
}
.rev {
  transform: rotate(180deg);
}
</style>
