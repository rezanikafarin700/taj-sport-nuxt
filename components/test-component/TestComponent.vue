<template>
  <div>
    <button @click="counter++"> counter is = {{ counter }}</button>
    <h3>initialCounter = {{ initialCounter }}</h3>
  </div>
</template>

<script>
  export default {
    name : "TestComponent",
    props : {
      initialCounter : {
        type : Number,
        required : true
      }
    },
    data(){
      return {
        counter : this.initialCounter
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
