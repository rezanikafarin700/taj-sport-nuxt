<template>
  <div class="main">
    <div class="main__wrapper-close-icon">
      <div @click="$emit('onCloseModalZoom')">
        <CloseIcon bgColor="#fff" />
      </div>
    </div>
    <div class="main__body">
      <div class="main__sidebar">
        <div class="main__images">
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
      let x = e.offsetX;  /* x = e.clientX - d.left;*/
      let y = e.offsetY;  /* y  = e.clientY - d.top;*/

      x = Math.round(100 / (d.width / x)); /* d.width == عرض صفحه*/
      y = Math.round(100 / (d.height / y)); /* d.height == ارتفاع صفحه  */
      zoom.style.backgroundPosition = `${x}% ${y}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  border-radius: 0.25rem;
  cursor: zoom-in;

  &__wrapper-close-icon {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
  }

  &__sidebar {
    border-radius: 0.25rem;
    margin-right: 1rem;
    width: 25%;
    overflow: hidden;
    flex: 0 0 auto;
    cursor: auto;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__images {
    display: flex;
    flex-wrap: wrap;
  }

  &__image {
    background: #fff;
    width: 100px;
    margin: 0.5rem;
    cursor: pointer;
    border-radius: .25rem;
    background-size: cover;
    background-position: center;
    border : 3px solid transparent;
    transition: all .5s;

    .ratio {
      padding-top: 100%;
      position: relative;
    }

    &.active {
      border-color: red;
      border-radius: 0.25rem;
    }
  }
  &__content {
    width: 70%;
    height: 90vh;
    border-radius: 0.25rem;
    flex: 1 1 auto;
    background-size: cover;
    background-position: center;
    transition: all 1s;
    cursor: zoom-out;

    @media (max-width: 768px) {
      width: 100%;
      height: 450px;
    }

    .ratio {
      padding-top: 100%;
      position: relative;
    }
  }
}
</style>
