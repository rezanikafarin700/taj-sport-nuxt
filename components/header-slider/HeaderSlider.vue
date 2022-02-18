<template>
  <div class="parent" :class="{ 'border-banner': borderBanner }">
    <div class="parent__slide" v-for="(image, i) in images" :key="i">
      <transition name="fade" mode="out-in">
        <div
          v-show="i === index"
          class="parent__image"
          :class="{ fade: isFade }"
          :style="{ backgroundImage: `url(${url}${image.id}/${image.image})` }"
        >
          <div class="parent__overlay">
            <div class="parent__ratio"></div>
          </div>
          <transition name="translate">
            <div class="parent__texts" v-if="showTexts">
              <h1 class="parent__title">{{ image.title }}</h1>
              <p>{{ image.description }}</p>
            </div>
          </transition>
          <div class="parent__ratio"></div>
          <div class="parent__btns" v-if="showBtns">
            <div class="parent__btn" @click="next">Next</div>
            <div @click="scrollBotton">
              <ArrowBottom />
            </div>

            <div class="parent__btn" @click="prev">Prev</div>
          </div>
        </div>
      </transition>
    </div>
    <div class="btn-scroll" @click="scrollTop" v-if="showScroll"></div>
  </div>
</template>

<script>
import ArrowBottom from "@/components/header-slider/ArrowBottom";

export default {
  name: "HeaderSlider",
  components: {
    ArrowBottom
  },
  props: {
    images: {
      type: Array
    },
    url: {
      type: String,
      default: process.env.IMAGE_URL + "banners/"
    }
  },

  data() {
    return {
      index: 0,
      showTexts: true,
      showBtns: true,
      showScroll: false,
      borderBanner: false,
      isFade: false
    };
  },

  methods: {
    scrollBotton() {
      document.documentElement.scrollTop = 650;
    },

    next() {
      if (this.index == this.images.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    },

    prev() {
      if (this.index == 0) {
        this.index = this.images.length - 1;
      } else {
        this.index--;
      }
    },

    scrollTop() {
      document.documentElement.scrollTop = 0;
    }
  },

  mounted() {
    const vm = this;
    window.onscroll = function() {
      if (document.documentElement.scrollTop > 100) {
        vm.showTexts = false;
        vm.showBtns = false;
        vm.showScroll = true;
        vm.borderBanner = true;
        vm.isFade = true;
      } else {
        vm.showTexts = true;
        vm.showBtns = true;
        vm.showScroll = false;
        vm.borderBanner = false;
        vm.isFade = false;
      }

      if (
        document.documentElement.scrollTop > 2600 &&
        document.documentElement.scrollTop < 3500
      ) {
        vm.$emit("changeScroll", true);
      } else {
        vm.$emit("changeScroll", false);
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.parent {
  width: 100%;
  position: relative;
  border: 26px solid #ffffff;
  border-top: none;
  border-bottom: none;
  @media (max-width: 768px) {
    border: none;
  }

  &__slide {
    width: 100%;
  }

  &__image {
    width: 100%;
    max-height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row-reverse;
    background-attachment: fixed;
    position: relative;
    transition: opacity 1s;

    @media (max-width: 600px) {
      background-attachment: local;
    }
  }
  &__ratio {
    padding-top: 100%;
    position: relative;
  }
  &__overlay {
    width: 100%;
    max-height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
  }

  &__texts {
    direction: rtl;
    text-align: justify;
    padding: 8rem 4rem 0 0;
    width: 400px;
    color: #ffffff;
    user-select: text;
    font-weight: 400;
    position: fixed;
    transition: all 0.5s ease;

    @media (max-width: 768px) {
      display: none;
    }
  }
  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__btns {
    width: 100px;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    padding-left: 4rem;

    @media (max-width: 768px) {
      top: 120px;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: flex-start;
      width: 100%;
      padding: 0;
    }
  }
  &__btn {
    color: #fff;
    font-size: 20px;
    border-bottom: 1px solid #fff;
    cursor: pointer;
    @media (max-width: 768px) and (min-width: 449px) {
      font-size: 1rem;
    }
    @media (max-width: 450px) {
      font-size: 14px;
    }
  }
}

.translate-enter {
  transform: translateY(-100px);
  opacity: 0;
}

.translate-leave-active {
  opacity: 0;
}
.border-banner {
  border-color: rgb(238, 232, 232);
}
.fade {
  opacity: 0.9;
}

.btn-scroll {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  right: 0.5rem;
  border-radius: 100%;
  cursor: pointer;
  z-index: 9;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 5px 0px #999;
  transform: rotate(-90deg);

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    width: 8px;
    height: 16px;
    background-position: center;
    background-size: cover;
    background-image: url("@/assets/icons/arrow-right.png");
  }
}
</style>
