<template>
  <div class="main">
    <div class="set-text rtl">
      <div class="wrapper-small">
          <div class="space"></div>
          <div class="center article-title">نکات مهم هنگام خرید فوتبال دستی</div>
          <div class="space"></div>
          <div>
            <p v-for="(note, index) in notesPage1" :key="index">
              <span class="bold"> {{ note.title }}</span>
              {{ note.description }}
            </p>
          </div>
          <div>
            <p v-for="(note, index) in notesPage2" :key="index">
              <span class="bold"> {{ note.title }}</span>
              {{ note.description }}
            </p>
          </div>
        </div>
        <div class="space"></div>
      </div>
    </div>
</template>

<script>
import { notesPage1, notesPage2, para } from '../variables';
export default {
  name: "a",

  data(){
    return{
      notesPage1,
      notesPage2,
      para
    }
  }
};
</script>

<style lang="scss" scoped>
.main{
  background : #F5F5F5;
}
.set-text{
  text-align: justify;
}
.article-title{
  font-weight: bold;
  font-size: 20px;
}
.white{
  background : #fff;
}
</style>
