<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="قوانین بازی فوتبال دستی"
      :text="text"
      :url="`assets/images/rules`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Rules",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    }
  }
};
</script>

<style lang="scss" scoped></style>
