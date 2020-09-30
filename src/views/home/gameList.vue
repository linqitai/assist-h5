<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.gameListPage{
		@include page();
		.voteList{
			background-color: $main-box-color;
			// margin-top:$header-height;
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid $mainBorderColor;
				// &:last-child{
				// 	border-bottom: 1px solid transparent;
				// }
				.itemLeft{
					flex: 1;
					.title{
						width: 100%;
						font-size: 12px;
						line-height:$itemInnerLine1Height;
						color: $mainTextColor2;
					}
					.time{
						font-size: 11px;
						color: $grayDark;
						line-height:$itemInnerLine1Height;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 80px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					font-size: 1rem;
					.status{
						font-size: 12px;
						text-align: right;
						color: $main-adorn-color;
						.iconfont{
							color: $grayLight2;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="gameListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				游戏列表
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div>
			<div class="logoBox" @click="gameBtn">
				<img src="../../assets/image/cq.jpg" alt="">
			</div>
			<div class="logoBox" @click="game2Btn">
				<img src="../../assets/image/1024.jpg" alt="">
			</div>
		</div>
		<van-action-sheet v-model="isShow4Game" title="欢迎来到传奇世界">
		  <div class="noticeDetail paddingWing">
			<div class="title">进行选区</div>
			<div class="placeholderLine10"></div>
			<span class="margR20" v-for="item in serverList" :key="item.id">
				<van-tag type="warning" @click="toServerGameView(item)">服务{{item.id}}区{{item.id==1?'(繁忙)':'(推荐)'}}</van-tag>
			</span>
		  </div>
		  <div class="placeholderLine20"></div>
		  
		  <div class="underline blue paddingWing" @click="showModelBtn">用矿石兑换元宝(已开通)</div>
		  <div class="tip4model3RedText paddingWing margT10">兑换比例会随着矿石价格的上涨而提高</div>
		  
		  <div class="placeholderLine20"></div>
		</van-action-sheet>
		<van-dialog v-model="showSelectBox" title="用矿石兑换元宝" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">当前可用矿石：{{userInfo.thisWeekMineral}}</div>
				<div class="placeholderLine20"></div>
				<van-radio-group v-model="selectRadioValue">
				  <div v-for="item in serverList" :key="item.id">
					  <van-radio :name="item.id">服务{{item.id}}区</van-radio>
					  <div class="placeholderLine10"></div>
				  </div>
				</van-radio-group>
				<van-field v-model="num" label="充值矿石数量" required type="Number" clearable placeholder="请填写所要充值的数量"/>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="tip4model3RedText">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">租赁</van-button> -->
			<van-button type="info" size="large" @click="submit" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">提交</van-button>
		</van-dialog>
		<!-- <transition name="van-fade">
		  <router-view></router-view>
		</transition> -->
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
				account:'',
				num:'',
				showSelectBox:false,
			}
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
			showModelBtn(){
				let _this = this;
				_this.showSelectBox = true;
			},
			submit(){
				let _this = this;
				let params = {
					svrid:_this.selectRadioValue,
					username:_this.account,
					num:_this.num,
					safePassword:_this.safePassword
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.$ajax.ajax(_this.$api.chargeGold, 'POST', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==1){
							_this.$toast(res.message);
							_this.showSelectBox = false;
						}
					}else{
						_this.$toast(res.message);
					}
				})
			},
			toServerGameView(item){
				let _this = this;
				//_this.account="1234567";
				let url = `http://www.helpchain.cn.com:8088/app.php?user=${_this.account}&spverify=&srvid=${item.id}&srvaddr=${item.ip}&srvport=${item.port}`;
				window.open(url);
			},
			game2Btn(){
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>'23:00:00'&&_this.$utils.getTimeHMS(new Date())<'23:59:59'){
					Dialog.alert({
					  title: '系统提示',
					  message: '20~24点是系统清算时间，请明日再来'
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('/game1024');
			},
			gameBtn(){
				let _this = this;
				if(_this.userInfo.isAgent>=3||_this.userInfo.innerRegister==6||_this.userInfo.myCalculationPower>10){
					_this.$ajax.ajax(_this.$api.isCreateAccount, 'GET', null, function(res) {
						//console.log('getUserInfo');
						if (res.code == _this.$api.CODE_OK) {
							if(res.data==0){
								_this.$router.push('/createAccount');
							}else{
								_this.isShow4Game = true;
								_this.$ajax.ajax(_this.$api.serverList, 'GET', null, function(res) {
									//console.log('getUserInfo');
									if (res.code == _this.$api.CODE_OK) {
										_this.serverList = res.data;
									}else{
										_this.$toast(res.message);
									}
								})
								//_this.$toast("先进行选区");
								//window.open("https://www.baidu.com");
								//到游戏登录页面
								//_this.$toast("再到游戏登录页面");
							}
						}else{
							_this.$toast(res.message);
						}
					})
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: '该模块正在内测中，现暂时只对个人算力大于10G的矿工开放内测权限，内测完毕后方可对全体矿工开放公测！'
					}).then(() => {
					  // on close
					});
				}
			},
		}
	}
</script>