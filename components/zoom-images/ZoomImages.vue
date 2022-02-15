<template>
  <div class="main">
    <div class="main__header">
      <span @click="$emit('onCloseModalZoom')">
        <CloseIcon />
      </span>
      <span class=" title-items dastnevis">{{ title }}</span>
    </div>
    <div class="main__body">
      <div
        class="main__content"
        ref="zoom"
        @mousemove="zoomImage"
        @mouseenter="sizeImage"
        @mouseleave="leaveImage"
        :style="{
          backgroundImage: `url(${url}${images[indexActive].name})`
        }"
      >
        <div class="ratio"></div>
      </div>

      <div class="main__sidebar">
        <div
          class="main__image"
          :class="{ active: index == indexActive }"
          v-for="(image, index) in images"
          :key="index"
          :style="{ backgroundImage: `url(${url}${image.name})` }"
          @click="showImageInContent(image, index)"
        >
          <div class="ratio"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "/components/CloseIcon";
export default {
  name: "ZoomImages",
  components: {
    CloseIcon
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      require: true
    },
    title: {
      type: String,
      default: "تصویر فوتبال دستی تاج اسپرت"
    },
    indexActive: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      indexActive: this.indexActive
    };
  },

  methods: {
    showImageInContent(image, index) {
      let zoom = this.$refs.zoom;
      zoom.style.backgroundImage = `url(${this.url}${image.name})`;
      this.indexActive = index;
    },

    sizeImage() {
      this.$refs.zoom.style.backgroundSize = "250%";
    },

    leaveImage() {
      this.$refs.zoom.style.backgroundSize = "cover";
      this.$refs.zoom.style.backgroundPosition = "center";
    },

    zoomImage(e) {
      let zoom = this.$refs.zoom;
      let d = zoom.getBoundingClientRect();
      let x = e.clientX - d.left;
      let y = e.clientY - d.top;

      x = Math.round(100 / (d.width / x));
      y = Math.round(100 / (d.height / y));
      console.log("X = ", x);
      console.log("Y = ", y);
      zoom.style.backgroundPosition = `${x}% ${y}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #fff;
  box-shadow: 0 0 1px 0 #999;
  width: 70%;
  border-radius: 0.25rem;
  cursor: zoom-in;

  @media (max-width: 768px) {
    width: 100%;
    margin-top : 2rem;
  }

  &__header {
    background: #f5f5f5;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    padding: 2rem;
    box-shadow: 0 0 1px 0 #999;
    cursor: auto;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
  }

  &__sidebar {
    width: 29%;
    height: 100%;
    overflow: hidden;
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    cursor: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &__image {
    width: calc(50% - 2rem);
    min-width: 100px;
    margin: 1rem;
    cursor: pointer;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
      min-width: auto;
    }

    &.active {
      outline: 3px solid red;
      border-radius: 0.25rem;
    }
    .ratio {
      padding-top: 100%;
      position: relative;
    }
  }
  &__content {
    width: 70%;
    height: 450px;
    flex: 1 1 auto;
    background-size: cover;
    background-position: center;
    transition: all 0.5s;
    cursor: zoom-out;
    border-bottom-right-radius: 0.25rem;

    @media (max-width: 768px) {
      width: 100%;
    }

    .ratio {
      padding-top: 100%;
      position: relative;
    }
  }
}
.title-items {
  @media (min-width: 400px) and (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
}
</style>
