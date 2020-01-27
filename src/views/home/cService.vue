<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.cService{
	@include page4Home4Scroll();
	.cServiceContent{
		color: $mainTextColor;
		padding: $boxPadding2;
		.copy{
			font-size: $fs-12;
			margin-right: 10px;
			background-color: #E5E5E5;
			padding: 1px 2px;
			color: $main-bg-color;
		}
		.cateInfo {
			width: $lineWidth;
			border-radius: $borderRadius;
			background-color: white;
			color: $mainBorderColor;
			padding: 6px;
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 14px;
				.ewmBox{
					width:100%;
				}
				.text {
					margin-top: 0.375rem;
					color: $grayDarker;
				}
			}
		}
	}
}
</style>
<template>
	<div class="cService">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">客服服务</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="cServiceContent">
			<div>QQ客服：</div>
			<div class="placeholderLine8"></div>
			<div>
				<b class="textBold">514917919</b><span class="copy margL10" @click="handleCopy('514917919',$event)">复制</span>
			</div>
			<div class="placeholderLine8"></div>
			<div>
				<b class="textBold">514917919</b><span class="copy margL10" @click="handleCopy('514917919',$event)">复制</span>
			</div>
			<div class="placeholderLine20"></div>
			<div>微信客服：</div>
			<div class="placeholderLine4"></div>
			<van-row gutter="10">
			  <van-col span="12">
				  <div class="cateInfo">
				  	<div class="infoBox">
				  		<img class="ewmBox" src="../../assets/image/zjwx.png" alt="">
				  		<div class="text">帮扶1号</div>
				  	</div>
				  </div>
			  </van-col>
			  <van-col span="12">
				  <div class="cateInfo">
				  	<div class="infoBox">
				  		<img class="ewmBox" src="../../assets/image/zjwx.png" alt="">
				  		<div class="text">帮扶1号</div>
				  	</div>
				  </div>
			  </van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	// import { Dialog } from 'vant';
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				
			}
		},
		mounted() {
			let _this = this;
			
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
		}
	}
</script>
