<template>
  <div>
    <div class="parent">
      <div class="parent__image">
        <img :src="require(`@/assets/${url}`)" alt="کارگاه ساخت فوتبال دستی" />
      </div>
    </div>
    <div class="parent__content">
      <div class="parent__title">معرفی کارگاه</div>
      <div class="parent__text">
        <p>
          گر شما همیشه می خواهید یک میز فوتسبال داشته باشید اما فضای زیادی برای
          وقت گذاشتن ندارید ، یک میز فولاد تاشو یک گزینه عالی است. هنگامی که از
          آنها استفاده نمی کنید ، ذخیره آنها آسان است و حتی می توانید مدلهایی با
          اندازه استاندارد پیدا کنید. به علاوه ، در واقع تنوع زیادی وجود دارد.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FactoryIntro",
  props:{
    url:{
      type : String,
      required : true
    }
  }
};
</script>

<style lang="scss" scoped>
.parent{
  width: 100%;
  height: 100%;

  &__image{
    width: 100%;
    height: 50%;

    img{
      width : 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__content{
    padding: 2rem;
    background-color: #f8f8f8;
  }

  &__title{
    font-weight: bold;
    font-size: 1.2rem;
  }
  &__text{
    font-size: 14px;
  }

}
</style>
