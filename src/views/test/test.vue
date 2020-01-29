<style scoped lang="scss">
	@import '~@/assets/scss/index.scss';
	.test{
		@include pageBlackBG();
		.main{
			margin-left: 5%;
		}
	}
</style>
<template>
	<div class="test">
		<div class="main" id="main" style="width: 95%;height: 300px;"></div>
	</div>
</template>

<script>
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
		}
	},  
	components:{
	    mHeader
	},
	created() {
		let _this = this;
		// 基于准备好的dom，初始化echarts实例 写在 mounted（）里面
		this.$nextTick(() => { this.myEcharts() })
	},
	methods:{
		myEcharts(){
			let _this = this;
			let myChart = _this.$echarts.init(document.getElementById("main"));
			
			let rawData = [
				{id:1,time:'01/01',price:0.21,dealNum:2000},
				{id:2,time:'01/02',price:0.28,dealNum:3000},
				{id:3,time:'01/03',price:0.34,dealNum:2070},
				{id:4,time:'01/04',price:0.41,dealNum:1000},
				{id:5,time:'01/05',price:0.49,dealNum:100},
				{id:6,time:'01/06',price:0.54,dealNum:200},
			];
			var times = rawData.map(function (item) {
			    return item.time;
			});
			
			var prices = rawData.map(function (item) {
			    return item.price;
			});
			let option = {
				xAxis: {
					type: 'category',
					data: times
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					data: prices,
					type: 'line',
					smooth: true
				}]
			};
			myChart.setOption(option);
		}
	}
}
</script>
