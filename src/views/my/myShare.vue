<style lang="scss">
	@import '~@/assets/scss/index.scss';

	.van-list__finished-text {
		background-color: $main-bg-color;
	}
	.mySharePage {
		/* position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		background-color: $main-bg-color; */
		@include pageMy();
		box-sizing: border-box;
		z-index: 2;
		.header{
			background-color: #ae0010 !important;
			border-bottom: 0.0625rem solid #93000e !important;
		}
		.poster {
			// margin-top: $headerHeight;
			/* padding: $boxPadding2; */
			position: relative;
			box-sizing: border-box;
			.myShareUrl{
				color: $mainTextColor;
				font-size: 12px;
			}
			.posterBG {
				position: relative;
				height: 520px;
				background-color: #ae0010;
				overflow: hidden;
				$widthBox1: 240px;
				$widthBox2: 120px;
				$paddingGlobal:17px;
				.borderGlobal{
					border: 1px solid white;
					position: absolute;
					top: $paddingGlobal;
					bottom: $paddingGlobal;
					left: $paddingGlobal;
					right: $paddingGlobal;
					z-index: 50;
				}
				.box1 {
					width: $widthBox1;
					height: $widthBox1;
					border-radius: $widthBox1;
					background-image: linear-gradient(to right,#0761c3,#62cbc6);
					position: absolute;
					top: -$widthBox1/2;
					left: -$widthBox1/3;
					z-index: 51;
				}

				.box2 {
					width: $widthBox2;
					height: $widthBox2;
					border-radius: $widthBox2;
					background-image: linear-gradient(to right,#479bf6,#0761c3);
					position: absolute;
					top: $widthBox2/1;
					right: -$widthBox2/2;
					z-index: 49;
				}

				$widthBox3:150px;
				$widthBox4:250px;
				.box3 {
					width: $widthBox3;
					height: $widthBox3;
					border-radius: $widthBox3;
					background-image: linear-gradient(to right,#0761c3,#479bf6);
					position: absolute;
					bottom: $widthBox3/1;
					left: -$widthBox3/2;
					z-index: 49;
				}

				.box4 {
					width: $widthBox4;
					height: $widthBox4;
					border-radius: $widthBox4;
					background-image: linear-gradient(to right,#62cbc6,#0761c3);
					position: absolute;
					bottom: -$widthBox4/3;
					right: -$widthBox4/3;
					z-index: 51;
				}

				$logoWidth:200px;

				.logo {
					width: $logoWidth;
					position: absolute;
					top: 28px;
					left: 50%;
					transform: translateX(-50%);
					z-index: 100;
				}

				.box5 {
					position: absolute;
					top: $logoWidth + 40px;
					z-index: 101;
					left: 50%;
					transform: translateX(-50%);
				}

				.box6 {
					position: absolute;
					top: $logoWidth + 86px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: 900;
					font-size: 36px;
					color: white;
				}
				.helpPic{
					width: 100%;
					box-sizing: border-box;
					padding-left: $paddingGlobal;
					padding-right: $paddingGlobal;
					padding-top: $paddingGlobal;
				}
				.titleWord{
					margin-top: 20px;
					text-align: center;
					font-size: 24px;
				}
				/* .registerCode {
					position: absolute;
					text-align: center;
					z-index: 101;
					font-weight: 900;
					font-size: 36px;
					left: 0;
					right: 0;
					color: white;
					left: 50%;
					transform: translateX(-50%);
					top: 50%;
					transform: translateY(-50%);
					border: 1px solid white;
					width: 120px;
				} */
				.registerCode {
					position: absolute;
					bottom: 160px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: 900;
					font-size: 36px;
					color: white;
					left: 50%;
					transform: translateX(-50%);
					/* border: 1px solid white; */
					width: 120px;
				}

				.registerCodeText {
					position: absolute;
					bottom: 138px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: bolder;
					font-size: 14px;
					color: white;
					left: 50%;
					transform: translateX(-50%);
				}
				.registerCodeText2 {
					position: absolute;
					bottom: 100px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: bolder;
					font-size: 14px;
					color: white;
					/* left: 50%;
					transform: translateX(-50%); */
				}
				.registerCodeText3 {
					position: absolute;
					bottom: 70px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: bolder;
					font-size: 14px;
					color: white;
					/* left: 50%;
					transform: translateX(-50%); */
				}
				.registerCodeText4{
					position: absolute;
					bottom: 30px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: bolder;
					font-size: 12px;
					color: white;
				}
			}
		}
	}
</style>
<template>
	<div class="mySharePage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				战队招募
			</div>
			<i class="rightBox icon"></i>
			<!-- <i class="iconfont iconfont-question rightBox icon" @click="showTipModel=true"></i> -->
		</m-header>
		<div class="poster" id="tree-containner">
			<div class="posterBG" id="tree" ref="tree">
				<div class="borderGlobal"></div>
				<!-- <img class="logo" src="https://www.assist-china.co.ax/image/LOGO_tran.png"> -->
				<!-- <div class="box1"></div> -->
				<!-- <div class="box2"></div>
				<div class="box3"></div>
				<div class="box4"></div> -->
				<!-- <div class="box5">
					<img src="../../assets/image/poster/PostText1.png">
				</div> -->
				<!-- <img class="registerCode" src="../../assets/image/code.png"> -->
				<img class="helpPic" :src="images[index]">
				<!-- <div style="width: 100%;">
					<van-swipe :autoplay="3000" :lazy-render="true">
					  <van-swipe-item v-for="(image, index) in images" :key="index">
						<img class="helpPic" v-lazy="image"/>
					  </van-swipe-item>
					</van-swipe>
				</div> -->
				<!-- <div class="titleWord">真情感动世界 帮扶成就你我</div> -->
				<!-- <img class="helpPic" src="https://www.assist-china.co.ax/image/banner/banner0057.jpg"> -->
				<div class="registerCode" id="qrcode" ref="qrcode"></div>
				<div class="registerCodeText">扫码注册</div>
				<div class="registerCodeText2">我为帮扶链代言：{{userInfo.nickName}}</div>
				<div class="registerCodeText3">助学 扶志 助业</div>
				<div class="registerCodeText4" @click="handleCopyShareCode(userInfo.shareCode,$event)">
					我的推荐码：{{userInfo.shareCode}}
					<!-- <van-button type="info" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" @click="handleCopyShareCode(userInfo.shareCode,$event)" :block="false">复制推荐码</van-button> -->
				</div>
			</div>
			<div class="margT10 paddingWing">
				<div class="myShareUrl">
					分享链接: {{registerUrl}}
				</div>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" @click="switchImage" :block="true">切换招募图片</van-button>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" @click="handleCopy(registerUrl,$event)" :block="true">复制分享链接</van-button>
				<div class="placeholderLine10"></div>
				<div class="tip4model3">
					1.将此页面二维码保存发送给您的好友<br>
					2.好友扫一扫二维码通过手机号注册<br>
					3.好友完成基础任务二后您将会得到推广奖励以及等级分红
				</div>
				<div class="placeholderLine10"></div>
				<div class="myShareUrl">
					注册实名及基础操作流程：http://note.youdao.com/noteshare?id=283685c92247f9c7dd17a81bd022e675
				</div>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" @click="handleCopy('http://note.youdao.com/noteshare?id=283685c92247f9c7dd17a81bd022e675',$event)" :block="true">复制流程</van-button>
				<div class="placeholderLine10"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js';
	import html2canvas from "html2canvas";
	import canvg from "canvg";
	import clip from '@/assets/js/clipboard';
	import QRCode from 'qrcodejs2';
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				index:0,
				images: [
					this.$api.domainName + '/image/banner/banner0058.jpg',
					this.$api.domainName + '/image/banner/game01.jpg',
					this.$api.domainName + '/image/banner/game02.jpg',
				],
				showTipModel:false,
				loading1: false,
				finished1: false,
				registerUrl:"",
				userInfo:""
			}
		},
		created() {
			let _this = this;
			// _this.handleGenerator();
			/* _this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			} */
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
			}else{
				localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token');
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$cookies.remove('isRefreshUserInfo');
				_this.$router.replace('login');
				return;
			}
			_this.$nextTick(function () {
			    _this.getQrcode2()
			})
		},
		methods: {
			switchImage(){
				let _this = this;
				_this.index=_this.index+1;
				if(_this.index>_this.images.length-1){
					_this.index=0;
				}
			},
			back() {
				this.$router.go(-1);
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制分享链接成功`);
				});
			},
			handleCopyShareCode(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制推荐码${text}成功`);
				});
			},
			innerRegister(){
				let _this = this;
				_this.$router.push("innerRegister");
				//_this.$router.push({path:"innerRegister",query:{id:_this.userInfo.shareCode}})
			},
			getQrcode2(){
				let _this = this;
				let id = _this.userInfo.shareCode;
				let href = window.location.href;
				console.log('window.location.href:',window.location.href);
				let domainName = href.split('#')[0];
				let registerUrl = ''
				if (process.env.NODE_ENV === "development") {
					registerUrl = domainName + '#/register?id=' + id;
					//registerUrl = _this.$api.domainName + '/#/register?id=' + id;
					//console.log('registerUrl', registerUrl);
				}else {
					if(domainName=='https://www.assist-china.co.ax/'||domainName=='https://www.helpchain.co.ax/'){
						registerUrl = domainName + '#/register?id=' + id;
					}else{
						registerUrl = domainName + '#/register?id=' + id;
						//registerUrl = _this.$api.domainName + '/#/register?id=' + id;
					}
					//registerUrl = href.split('#')[0] + '#/register?id=' + id;
					
					//console.log('registerUrl', registerUrl);
				}
				
				let qrcode = new QRCode('qrcode', {
					width: 120, // 设置宽度，单位像素
					height: 120, // 设置高度，单位像素
					text: registerUrl // 设置二维码内容或跳转地址
				})
				_this.registerUrl = registerUrl;
			},
			getQrcode () {
			  let _this = this;
			  _this.$ajax.ajax(_this.$api.getQrCodeUrl, 'GET', null, function(res) {
				//console.log('res',res);
			  	if (res.code == _this.$api.CODE_OK) {
			  		let qrcode = new QRCode('qrcode', {
						width: 120, // 设置宽度，单位像素
						height: 120, // 设置高度，单位像素
						text: res.data // 设置二维码内容或跳转地址
			  		})
			  	}
			  })
			}
		}
	}
</script>
