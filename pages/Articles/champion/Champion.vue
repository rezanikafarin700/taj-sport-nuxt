<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="فدراسیون جهانی فوتبال دستی"
      :text="text"
      :url="`assets/images/champion`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Champion",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: ["image1.avif",'image2.jpg','image3.jpg'],
    }
  }
};
</script>

<style lang="scss" scoped></style>
