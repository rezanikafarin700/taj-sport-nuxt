<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="سبک های بازی فوتبال دستی"
      :text="text"
      :url="`assets/images/methods`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Method",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: [
        "span.jpg",
        "germany.jpg",
        "france.jpg",
        "iteli.jpg",
        "american.jpg"
      ],

    }
  }
};
</script>

<style lang="scss" scoped></style>
