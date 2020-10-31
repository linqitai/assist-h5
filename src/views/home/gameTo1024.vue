<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.gameListToPage{
		@include page();
		.logoBox{
			width: 100%;
			height: 200px;
			line-height: 200px;
			text-align: center;
			font-size: 28px;
			font-weight: bolder;
			color: white;
		}
		.color1{
			background-color: $main-green-color;
		}
		.color2{
			background-color: $main-adorn-color;
		}
	}
</style>

<template>
	<div class="gameListToPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				2048选区
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div>
			<div class="logoBox color1" @click="game1Btn">
				新手练习区
			</div>
			<div class="logoBox color2 margT3" @click="game2Btn">
				竞技分红区(不计时模式)
			</div>
			<div class="logoBox color2 margT3" @click="game3Btn">
				竞技分红区(倒计时模式)
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,Toast } from 'vant';
	// import { image_host } from '@/assets/js/config.js'
	
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				showConvertBox:false,
				selectRadioValue:'',
				submitLoading:false,
				safePassword:'',
				isShow4Game:false,
				pageIndex:1,
				pageSize:16,
				voteList: [],
				loading1:false,
				finished1:false,
				userInfo:'',
				serverList:[],
				serverListResult:[],
				account:'',
				num:'',
				showSelectBox:false,
				busy:''
			}
		},
		watch:{
			getBusy(value){
				if(value<0.5){
					//_this.busy = "空闲";
					return "空闲";
				}else if(value>=0.5&&value<0.7){
					//_this.busy = "繁忙"
					return "繁忙";
				}else if(value>=0.7){
					//_this.busy = "爆满"
					return "爆满";
				}
			},
		},
		mounted() {
			let _this = this;
			// _this.getVoteList();
			if(localStorage.getItem('mobilePhone')){
				_this.account = localStorage.getItem('mobilePhone');
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('/login');
				return;
			}
			let userInfo = localStorage.getItem("_USERINFO_");
			/* alert("userInfo:" + userInfo); */
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				localStorage.removeItem('_USERINFO_');
				//_this.$cookies.remove('token');
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('/login');
				/* return; */
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			waiting(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'好的',
				  message: "该通道正在努力建设中"
				}).then(() => {
				  // on confirm
				})
			},
			game1Btn(){
				let _this = this;
				_this.$router.push('/game10241');
			},
			game2Btn(){
				let _this = this;
				/* if(_this.$utils.getTimeHMS(new Date())>'20:00:00'&&_this.$utils.getTimeHMS(new Date())<'23:59:59'){
					Dialog.alert({
					  title: '系统提示',
					  message: '20~24点是系统清算时间，请明日再来'
					}).then(() => {
					  // on close
					});
					return;
				} */
				_this.$router.push('/game1024');
			},
			game3Btn(){
				let _this = this;
				_this.$router.push('/game10242');
			},
		}
	}
</script>