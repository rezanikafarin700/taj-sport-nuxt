<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="پذیرش فوتبال دستی به عنوان ورزش "
      :text="text"
      :url="`assets/images/sport`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Sport",
  layout: "Article",
  components: { ContinueArticle },
  data() {
    return {
      text,
      images: ["image1.jpg",'image.jpg'],
    }
  }
};
</script>

<style lang="scss" scoped></style>
