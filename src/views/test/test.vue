<style lang="scss" scoped>
	div {
		padding: 10px;
		margin-top: 10px;
		line-height: 1.3;
		box-sizing: border-box;
	}
</style>

<template>
	<div>
		<div>{{name}}</div>
		<A v-model="name" @inputChange="change"></A>
		<button @click="addArr">addArr</button>
	</div>
</template>

<script>
	import A from '@/components/A.vue'
	export default {
		components: {
			A
		},
		data() {
			return {
				name:'aaa',
				arr:[1,2,3]
			};
		},
		watch:{
			arr(newVal){
				console.log(newVal,'newVal');
			}
		},
		mounted() {
			console.log(Array.prototype);
		},
		methods:{
			addArr(){
				this.arr = '[1,2,3,4]'
				// this.arr.push(4)
				console.log(this.arr,'arr');
			},
			change(val){
				console.log(val);
				this.$nextTick(()=>{
					// 要执行的代码
				})
			}
		}
	};
</script>
