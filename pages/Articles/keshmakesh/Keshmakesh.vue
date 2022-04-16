<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="بازی کممکش چیست؟"
      :text="text"
      :url="`assets/images/keshmakesh`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Keshmakesh",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: ["image1.jpg"],
    }
  }
};
</script>

<style lang="scss" scoped></style>

