<template>
  <div class="parent">
    <div class="parent__head">
      <h1 class="title-items dastnevis">{{ title }}</h1>
    </div>
    <div class="parent__image">
      <img
        :src="require(`@/${url}/${image}`)"
        :alt="title"
        v-for="(image, index) in images"
        :key="index"
      />
    </div>
    <div class="parent__text rtl">
      <div class="parent__zigzag">
        <img src="@/assets/icons/zigzag-black.png" :alt="title" />
      </div>
      <div v-for="(t, index) in text" :key="index">
        <h2 class="title-article" v-if="t.para.indexOf('.') == -1">
          {{ t.para }}
        </h2>
        <p v-else>{{ t.para }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContinueArticle",

  props: {
    images: {
      type: Array,
      required: true
    },

    title: {
      type: String,
      default: "ادامه مقاله"
    },

    text: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      default: `assets/images/history`
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background: #f5f5f5;
  padding: 100px 0 25px 0;
  @media (max-width: 768px) {
    padding: 50px 0 25px 0;
  }

  &__head {
    width: 100%;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  &__image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__text {
    padding: 25px 150px;
    background: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 25px;
    min-width: 300px;
    @media (max-width: 768px) {
      padding: 25px 2rem;
    }
    @media (max-width: 319px) {
      padding: 25px 1rem;
    }

    p {
      text-align: justify;
    }
  }
  &__zigzag {
    width: 35px;
    height: 6px;
    margin: 1rem 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
.title-items {
  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 319px) {
    font-size: 14px;
    letter-spacing: 2px;
  }
}
</style>
