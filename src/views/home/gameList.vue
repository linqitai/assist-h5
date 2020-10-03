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
			<!-- <div class="logoBox" @click="gameBtn">
				<img src="../../assets/image/cq.jpg" alt="">
			</div> -->
			<div class="logoBox" @click="gameBtn">
				<img src="https://www.assist-china.co.ax/image/banner/game01.jpg" alt="">
			</div>
			<div class="logoBox" @click="game2Btn">
				<img src="../../assets/image/1024.jpg" alt="">
			</div>
		</div>
		<van-action-sheet v-model="isShow4Game" title="欢迎来到传奇世界">
		  <div class="noticeDetail paddingWing">
			<div class="title">选区入口</div>
			<div class="placeholderLine10"></div>
			<span class="margR20" v-for="item in serverListResult" :key="item.id">
				<van-tag type="warning" @click="toServerGameView(item)">服务{{item.id}}区({{item.busy<0.5?'空闲':item.busy>0.7?'繁忙':'繁忙'}})</van-tag>
			</span>
		  </div>
		  <div class="placeholderLine20"></div>
		  <div class="paddingWing">
			  <van-row type="flex" justify="space-between">
				<van-col span="10">
					<div class="underline blue" @click="showModelBtn">用矿石充值元宝</div>
				</van-col>
				<van-col span="14">
					<div class="underline blue" @click="openChargeModelBtn">通过<b class="textBold">【支付宝/微信】</b>充值元宝</div>
				</van-col>
			  </van-row>
			  <div class="placeholderLine20"></div>
			  <van-row type="flex" justify="space-between">
					<van-col span="10">
						<div class="underline blue" @click="convertBtn">用HPC兑换流通值</div>
					</van-col>
					<van-col span="14">
						<div class="underline blue" @click="waiting">用HPC兑换贡献值</div>
					</van-col>
			  </van-row>
		  </div>
		  
		  <div class="tip4model3RedText paddingWing margT10">充值提醒：通过支付宝/微信充值的时候，若充值月卡和礼品若没到账，请找【客服】提供【账号和角色昵称】来领取，若是其他(元宝)奖励只要填写对应金额即可</div>
		  
		  <div class="placeholderLine20"></div>
		</van-action-sheet>
		<van-dialog v-model="showSelectBox" title="用矿石兑换元宝" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">当前可用矿石：{{userInfo.thisWeekMineral}}</div>
				<div class="placeholderLine20"></div>
				<div>选择区号：</div>
				<div class="placeholderLine10"></div>
				<van-radio-group v-model="selectRadioValue">
				  <div v-for="item in serverList" :key="item.id">
					  <van-radio :name="item.id">服务{{item.id}}区</van-radio>
					  <div class="placeholderLine10"></div>
				  </div>
				</van-radio-group>
				<van-field v-model="num" label="矿石数量" required type="Number" clearable placeholder="请填写所要使用的矿石数量"/>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="tip4model3RedText">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="submit" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">提交</van-button>
		</van-dialog>
		<van-dialog v-model="showConvertBox" title="用HPC兑换流通值" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div>选择区号：</div>
				<div class="placeholderLine10"></div>
				<van-radio-group v-model="selectRadioValue">
				  <div v-for="item in serverList" :key="item.id">
					  <van-radio :name="item.id">服务{{item.id}}区</van-radio>
					  <div class="placeholderLine10"></div>
				  </div>
				</van-radio-group>
				<!-- <van-field v-model="num" label="充值矿石数量" required type="Number" clearable placeholder="请填写所要充值的数量"/>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				-->
				<div class="tip4model3RedText">游戏背包中的HPC需要在第一时间兑换成流通值，您是否确认去兑换？</div> 
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="sureConvert" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">确认</van-button>
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
			convertBtn(){
				let _this = this;
				_this.showConvertBox = true;
			},
			sureConvert(){
				let _this = this;
				let params = {
					account: _this.account,//账号
					id:_this.selectRadioValue,//区号
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.gamePopOutVirculateValue, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==1){
							Dialog.alert({
							  title: '系统提示',
							  message: '兑换成功'
							}).then(() => {
							  // on close
							  _this.showConvertBox = false;
							});
						}
						Toast.clear();
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						  _this.showConvertBox = false;
						});
					}
				})
			},
			openChargeModelBtn(){
				let _this = this;
				//_this.account="1234567";
				let url = `http://www.8gesy.com/payment/group.html?id=00887D6F29EE5293`;
				window.open(url);
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
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
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
				_this.$router.push('/gameTo1024');
			},
			getServerLoadApi(i){
				let _this = this;
				let params = {
					serverId:i,
				}
				_this.$ajax.ajax(_this.$api.getServerLoadApi, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.serverList[i-1].busy = res.data;
						_this.serverListResult = _this.serverList;
						_this.isShow4Game = true;
						Toast.clear();
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				})
			},
			gameBtn(){
				let _this = this;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.isCreateAccount, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==0){
							_this.$router.push('/createAccount');
						}else{
							_this.$ajax.ajax(_this.$api.serverList, 'GET', null, function(res) {
								//console.log('getUserInfo');
								if (res.code == _this.$api.CODE_OK) {
									_this.serverList = res.data;
									for(let i=0;i<_this.serverList.length;i++){
										_this.serverList[i].busy = 0.4;
										_this.getServerLoadApi(i+1);
									}
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
				/* if(_this.userInfo.isAgent>=0||_this.userInfo.innerRegister==6||_this.userInfo.teamCalculationPower>0){
					
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: '该模块正在内测中，现暂时只对团队算力大于3G的矿工开放内测权限，内测完毕后方可对全体矿工开放公测！'
					}).then(() => {
					  // on close
					});
				} */
			},
		}
	}
</script>