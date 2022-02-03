<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="تاریخچه فوتبال دستی"
      :text="text"
      :url="`assets/images/history`"
    />
  </div>
</template>
<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "History",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: ["11.jpg", "image2.jpg","image3.jpg"],
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
