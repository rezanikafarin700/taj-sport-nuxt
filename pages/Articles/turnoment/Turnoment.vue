<template>
  <div class="wrapper-small">
    <ContinueArticle
      :images="images"
      title="مسابقات جهانی فوتبال دستی "
      :text="text"
      :url="`assets/images/turnoment`"
    />
  </div>
</template>

<script>
import { text } from './variables';
import ContinueArticle from "@/components/continue-article/ContinueArticle";
export default {
  name: "Turnoment",
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
