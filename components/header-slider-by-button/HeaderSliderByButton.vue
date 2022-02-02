<template>
  <div>
    <div
      class="parent"
      :class="[
        { 'border-banner': borderBanner },
        { parent__overlay: borderBanner }
      ]"
    >
      <div class="ratio"></div>
      <div class="parent__slider" v-for="(image, i) in images" :key="i">
        <transition name="fade">
          <div
            class="parent__slide"
            v-if="index == i"
            :style="{
              backgroundImage: `url(${url}${image.id}/${image.image})`
            }"
          >
            <div class="overlay"></div>
            <transition name="translate">
              <div class="parent__texts" v-if="showTexts">
                <h1 class="parent__title">{{ image.title }}</h1>
                <p>{{ image.description }}</p>
              </div>
            </transition>
          </div>
        </transition>
      </div>
      <div class="parent__parent-btn" v-if="showBtns">
        <div class="parent__btn-prev" @click="prev">PREV</div>
        <div class="parent__btn" @click="scrollBotton">
          <ArrowBottom />
        </div>
        <div class="parent__btn-next" @click="next">NEXT</div>
      </div>
    </div>

    <div class="btn-scroll" @click="scrollTop" v-if="showScroll"></div>
  </div>
</template>

<script>
import ArrowBottom from "@/components/header-slider-by-button/ArrowBottom";
export default {
  name: "HeaderSliderByButton",
  components: {
    ArrowBottom
  },

  props: {
    height: {
      type: Number,
      default: 650
    },
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
      borderBanner: false
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
      if (document.documentElement.scrollTop > 180) {
        vm.showTexts = false;
        vm.showBtns = false;
        vm.showScroll = true;
        vm.borderBanner = true;
      } else {
        vm.showTexts = true;
        vm.showBtns = true;
        vm.showScroll = false;
        vm.borderBanner = false;
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

<style scoped lang="scss">
@import "header-slider-by-button";
</style>
