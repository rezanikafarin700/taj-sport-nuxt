<template>
    <div>
        <!-- <Header /> -->
          <Nuxt />
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
    export default {
        name : "default",
        components : {
            Header,
            Footer,
        }
    }
</script>

<style lang="scss" scoped>

</style>