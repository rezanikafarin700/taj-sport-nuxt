<template>
	<div>
		<div class="parent">
			<div class="parent__image" :style="{backgroundImage : `url(${url}${product.id}/${product.image}`}">
				<div class="parent__image--ratio"></div>
			</div>
			<div class="parent__text">
				<div class="parent__title">{{ product.title }}</div>
				<div class="parent__intro">  : {{ product.description }}</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "index",

        props: {
            product : Object,

			url : {
				type : String,
				default : process.env.IMAGE_URL + 'articles/'
			}
        }
    }
</script>

<style scoped lang="scss">
	@import "CartIntro";
</style>
