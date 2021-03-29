<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
$fixed-btn-width2: 60px;
.fullscreenBox{
	position: fixed;
	left: $right;
	background-color: $main-adorn-color;
	width:$fixed-btn-width2;
	height:$fixed-btn-width2;
	line-height:$fixed-btn-width2;
	border-radius:$fixed-btn-width2;
	text-align: center;
	z-index:10002;
	color: white;
	font-size: 12px;
	box-shadow:0px 0px 10px $main-adorn-color;
}
</style>
<template>
	<div class="fullscreenBox animated bounce faster" :style="{top:top+'px !important'}" @click="toView">
	  抽奖
	</div>
</template>

<script>
// import { Button } from 'vant';
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
export default {
	props: {
		msg: String,
		top: Number
	},
    data() {
		return {
			fullscreen:false
		}
	},
	created() {
		let _this = this;
	},
	methods:{
		toView(){
			let _this = this;
			this.$router.push('raffle')
		}
	}
}
</script>
