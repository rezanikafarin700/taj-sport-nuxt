<template>
  <div class="articles rtl">
    <header>
      <hr class="line" />
      <h1>مقاله های خواندنی</h1>
    </header>
    <div class="wrapper-small">
      <div class="articles__group">
        <article :key="index" v-for="(article, index) in articles">
          <div class="image">
            <img
              :src="`${url}${article.id}/${article.image}`"
              alt="عکس مقاله فوتبال دستی"
            />
          </div>
          <div class="content">
            <div class="title">{{ article.title }}</div>
            <div class="text">{{ article.description }}</div>
          </div>
        </article>
      </div>
      <footer>
        <div class="more">نمایش وبلاگ</div>
        <div class="line"></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",

  props: {
    url: {
      type: String,
      default: process.env.IMAGE_URL + "footers/"
    }
  },

  data() {
    return {
      articles: []
    };
  },

  mounted() {
    this.$axios
      .get(process.env.BASE_URL + "footer")
      .then(res => {
        this.articles = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.articles {
  background: #f5f5f5;
  padding: 50px 0;

  &__group {
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    article {
      width: calc(25% - 2rem);
      margin: 1rem;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      cursor: pointer;

      .image {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          image-rendering: pixelated;
        }
      }
      .content {
        color: #1a1a1a;

        .title {
          font-weight: 600;
          font-size: 14px;
        }
        .text {
          font-size: 12px;
          text-align: justify;
        }
      }
    }
  }
}
header {
  text-align: center;
  width: 400px;
  margin: 0 auto;
  h1 {
    font-family: "p22-underground", sans-serif;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem 0;
  }
}
footer {
  text-align: center;
  width: 400px;
  margin: 0 auto;

  .more {
    color: #5bb48b;
    padding: 30px 0;
  }
  .line {
    border: none;
    border-top: 1px solid #959595;
    margin: 0 auto;
  }
}
</style>
