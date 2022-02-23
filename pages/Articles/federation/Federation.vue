<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="فدراسیون جهانی فوتبال دستی"
      :text="text"
      :url="`assets/images/federation`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Federation",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: ["image.avif"],
    }
  }
};
</script>

<style lang="scss" scoped></style>
