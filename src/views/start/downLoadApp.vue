<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.downLoadAppBox{
		color: $mainTextColor;
		background-color: $main-bg-color;
		height: 100%;
		min-height: 100%;
		display: table;
		width: 100%;
		box-sizing: border-box;
		.father {display: table-cell; vertical-align: middle;width: 100%; height: 600px;}
		.son {
			margin: auto;width: 100px; height: 130px;text-align: center;
			.img{
				width:100px;
				height: 100px;
			}
		}
		.shadeMaster{
			position: fixed;
			top: 0;
			left: 0;
			text-align: center;
			width: 100%;
			height: 100%;
			background-color:rgba(0,0,0,0.5);
			p{
				position: absolute;
				color: white;
				font-size: 28px;
				text-align: center;
				top:50%;
				width: 100%;
				transform: translateY(-50%);
				-webkit-transform: translateY(-50%);
				span{
					color:#5FD6FF;
				}
			}
			.img{
				position: absolute;
				display: block;
				right: 30px;
				top:10px;
			}
		}
	}
</style>

<template>
	<div class="downLoadAppBox">
		<div class="father paddingWing">
			<div class="textCenter">检测到此文件为[安卓系统]安装包</div>
			<div class="placeholderLine20"></div>
			<div class="son">
				<img class='img' src="../../assets/image/appLogo.jpg" alt="pic">
				<div class="placeholderLine10"></div>
				<div class="textCenter">帮扶链</div>
				<div class="placeholderLine10"></div>
			</div>
			<div class="placeholderLine10"></div>
			<div class="textCenter">
				<div class="placeholderLine10"></div>
				<van-button plain type="primary" url="https://www.assist-china.co.ax/apk/app-assist.apk" size="large" :block="true">下载</van-button>
			</div>
			<div class="placeholderLine20"></div>
			<!-- <div class="placeholderLine20"></div>
			<div class="son">
				<img class='img' src="../../assets/image/cqzl.jpg" alt="pic">
				<div class="placeholderLine10"></div>
				<div class="textCenter">传奇之路</div>
				<div class="placeholderLine10"></div>
			</div>
			<div class="placeholderLine10"></div>
			<div class="textCenter">
				<div class="placeholderLine10"></div>
				<van-button plain type="primary" url="https://www.assist-china.co.ax/apk/app-cq.apk" size="large" :block="true">下载</van-button>
			</div> -->
		</div>
		<div class="shadeMaster" v-if="isWeixin">
			<p>请点开右上角按钮选择<br>
				<span>【在浏览器打开】</span>
			</p>
			<img class='img' src="../../assets/image/open_right.png" alt="pic">
		</div>
	</div>
</template>

<script>
	// import {setCookie} from '@/assets/js/utils.js'
	// var evercookie = require('evercookie');
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				isWeixin:false,
			}
		},
		mounted() {
			let _this = this;
			_this.bsTip();
		},
		methods:{
			bsTip(){
				let _this = this;
				_this.isWeixin = _this.$utils.isWeixin();
			}
		}
	}
</script>