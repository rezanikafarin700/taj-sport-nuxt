<template>
	<div>
	<div class="wrapper-small rtl">
			<div class="box-panel">
				<div class="title">افزودن محصول جدید</div>
				<form method="post">
					<label class="add-image">افزودن عکس بازدید محصول را تا سه برابر افزایش میدهد</label>
					<get-multi-image  v-model="product.images"/>
					<br>
					<label for="name">نام محصول</label>
					<input type="text" id="name" name="name" placeholder="مثلا فوتبال دستی آسیا" v-model="product.name"><br>

					<label for="model">مدل</label>
					<input type="text" id="model" name="model" placeholder="مثلا تاشو" v-model="product.model"><br>

					<label for="size">اندازه</label>
					<input type="text" id="size" name="size" placeholder="مثلا 75 x 120" v-model="product.size"><br>

					<label for="height">ارتفاع</label>
					<input type="text" id="height" name="height" placeholder="مثلا سانتیمتر 120" v-model="product.height"><br>

					<label for="weight">وزن</label>
					<input type="text" id="weight" name="weight" placeholder="مثلا 1000 گرم " v-model="product.weight"><br>

					<label for="gate">ابعاد دروازه</label>
					<input type="text" id="gate" name="gate" placeholder="مثلا ۵x۱۴ سانتی‌متر" v-model="product.gate"><br>

					<label for="manikin">ابعاد آدمک</label>
					<input type="text" id="manikin" name="manikin" placeholder="مثلا ۳x۷ سانتی‌متر" v-model="product.manikin"><br>


					<label for="price">قیمت</label>
					<input type="text" id="price" name="price" placeholder="200000" v-model="product.price"><br>

					<label for="discount">تخفیف</label>
					<input type="text" id="discount" name="discount" placeholder="مثلا 10" v-model="product.discount"><br>

					<label for="code">کد محصول</label>
					<input type="text" id="code" name="code" placeholder="مثلا 100" v-model="product.code"><br>

					<label for="material">جنس محصول</label>
					<input type="text" id="material" name="material" placeholder="مثلا MDF" v-model="product.material"><br>

					<label for="description">توضیحات</label>
					<textarea name="description" id="description" placeholder="توضیحات" v-model="product.description"></textarea><br>

					<input type="submit" value="ارسال" @click.prevent="send">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
    import axios from 'axios';
    import GetMultiImage from "@/components/GetMultiImage/index";

    export default {
        name: "Create",

        layout : "PanelLayout",

        components: {
            GetMultiImage
        },

        data() {
            return {
                product: {},
            }
        },

        methods: {
            send() {
                const vm = this;
                const fd = new FormData();
                fd.append('name', vm.product.name)
                fd.append('model', vm.product.model)
                fd.append('size', vm.product.size)
                fd.append('height', vm.product.height)
                fd.append('weight', vm.product.weight)
                fd.append('gate', vm.product.gate)
                fd.append('manikin', vm.product.manikin)
                fd.append('price', vm.product.price)
                fd.append('discount', vm.product.discount)
                fd.append('code', vm.product.code)
                fd.append('material', vm.product.material)
                fd.append('description', vm.product.description)
                for (let i = 0; i < vm.product.images.length; i++) {
                    fd.append('images[' + i + ']', vm.product.images[i]);
                }
                console.log(fd)
                axios({
                    method: 'post',
                    url: process.env.BASE_URL +'products',
                    data: fd,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    vm.errors = res.data.errors;
                    vm.$router.push({name: 'index'});
                }).catch(err => {
                    // window.console.log(err.response.data.errors.name);
                    vm.errors = err.response.data.errors;
                    vm.showSave = false;
                });
                vm.$router.push({name: 'index'});

            }
        }
    }
</script>

<style scoped lang="scss">
	@import "box-white";

	@media (max-width: 425px) and (min-height: 320px){
		.add-image{
			font-size: 12px;
		}
	}
	@media (max-width: 320px) {
		.add-image{
			font-size: 10px;
		}
	}
</style>
