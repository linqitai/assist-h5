<style lang="scss">
	// @import '@/assets/scss/variable.scss';
	@import '~@/assets/scss/index.scss';
	$main-box-color:#ffffff;
	.myPage{
		position: absolute;
		min-height: 100%;
		width: 100%;
		$iconBgWidth:50px;
		background-color: $main-box-fh-bg-color;
		.refreshBox{
			top: 60px;
		}
		.cateInfo {
			display: flex;
			width: 100%;
			padding: 10px 0;
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 14px;
		
				.iconBox {
					.iconBackground {
						width: $iconBgWidth;
						height: $iconBgWidth;
						line-height: $iconBgWidth;
						border-radius: $iconBgWidth/3;
						margin: 0 auto;
						color: $main-box-fh-text-color;
						font-size: 30px;
					}
		
					.iconBackground1 {
						background-color: #f39800;
					}
		
					.iconBackground2 {
						background-color: #0049b6;
					}
		
					.iconBackground3 {
						background-color: #00b29b;
					}
		
					.iconBackground4 {
						background-color: #fd5f00;
					}
					
					.iconBackgroundMill {
						background-color: #08abee;
					}
					
					.iconBackgroundWord {
						background-color: #81d741;
					}
					
					.iconBackgroundBook {
						background-color: #00eaff;
					}
					
					.iconBackgroundDeal {
						background-color: #1aa034;
					}
				}
				.text {
					margin-top: 0.375rem;
					color: $main-box-fh-text-color;
				}
			}
		}
		.box {
			display: flex;
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: $boxPadding2;
			box-sizing: border-box !important;
			@include userSelectNone();
		}
		
		$avatorWidth:80px;
		
		.box1 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			.flex {
				&.flex1 {
					flex: 0 0 70px;
					$heightwidht:70px;
					.name{
						width: $heightwidht;
						height: $heightwidht;
						border-radius: $heightwidht;
						background-color: $main-blue-color;
						color: $main-box-fh-text-color;
						text-align: center;
						line-height: $heightwidht;
						font-size: 18px;
					}
				}
				&.flex2 {
					flex: 1;
					padding: 0 $boxPadding2;
					display: flex;
					flex-direction: column;
					align-content: center;
					
					.line1{
						flex: 1;
						line-height: 26px;
		
						.nick_name {
							font-size: 14px;
							height: 20px;
							line-height: 20px;
						}
		
						.level {
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							height: 20px;
							line-height: 20px;
							font-size: 11px;
							border-radius: 0 10px 10px 0;
							padding: 0 8px 0 4px;
						}
					}
					.line{
						flex: 1;
						line-height: 20px;
						font-size: 11px;
					}
				}
			}
		}
		
		.box2 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			text-align: center;
			.flex {
				flex: 1;
				.value{
					
				}
				.text {
					font-size: $fs-1;
					margin-top: 6px;
				}
			}
		}
		
		.box3 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			text-align: center;
			.flex {
				flex: 1;
				.text {
					font-size: $fs-1;
					margin-top: 6px;
					line-height: 1.2em;
				}
			}
		}
		
		.items {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			.my-cell {
				height: 2.875rem;
				line-height: 2.875rem;
				color: $main-box-fh-text-color;
				font-size: 0.75rem;
				border-bottom: 1px solid $bottomLineColor;
				display: flex;
				padding-left: $boxPadding2;
				padding-right: $boxPadding2;
				.flex1 {
					flex: 1;
					color: $main-box-fh-text-color;
				}
				.flex2 {
					flex: 0 0 40px;
					text-align: right;
					.iconfont-right-arrow2 {
						font-size: 0.75rem;
						color: $grayLight2;
					}
				}
		
			}
		}
	}
</style>
<template>
	<div class="myPage">
	<div v-if="$route.meta.footer==true">
		<m-header>
			<i class="leftBox"></i>
			<div class="text">
				个人中心
			</div>
			<i class="iconfont iconfont-set rightBox icon" @click="toMyInfo"></i>
		</m-header>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<div class="box box1">
				<div class="flex flex1">
					<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
					<!-- <div class="name" @click="toMyInfo">{{$JsEncrypt.decrypt(userInfo.realName) | getLastName}}</div> -->
					<div class="name" @click="toMyInfo">{{userInfo.realName | getLastName}}</div>
					<div class="textCenter margT10">
						<i class="iconfont iconfont-complaint f-18" @click="toComplainView(userInfo.userId)"></i> <i class="f-16">{{userInfo.beComplaintTimes}}</i>
					</div>
				</div>
				<div class="flex flex2">
					<div class="line1">
						<div class="nick_name left">
							<!-- {{$JsEncrypt.decrypt(userInfo.nickName)}} -->
							{{userInfo.nickName}}
						</div>
					</div>
					<div class="line1 margT3">
						<div class="level left" @click="toMyInfo">{{userInfo.level | getUserType}}+{{getCityName(cityInfo)}}{{userInfo.isAgent | agentType}}</div>
					</div>
					<div class="line margT3">
						注册实名时间 {{userInfo.registerTime}}
					</div>
					<div class="line">
						<div class="left">买入次数 {{userInfo.buyTimes}}</div>
						<div class="mlBox left">买入数量 {{userInfo.buyAmount}}</div>
					</div>
					<div class="line">
						<div class="left">卖出次数 {{userInfo.sellTimes}}</div>
						<div class="mlBox left">卖出数量 {{userInfo.sellAmount}}</div>
					</div>
					<div class="line" @click="showTip('limitBuyNum')">个人限购数量 {{userInfo.canBuyNum}} <i class="iconfont iconfont-question"/></div>
					<div class="line"><span @click="toBookView('3')">贡献值 {{userInfo.contributionValue}}</span> <i class="iconfont iconfont-question" @click="showTip('contribution')"/></div>
					<!-- @click="toBookView('5')" -->
					<div class="line"><span @click="toBookView('5')">爱心值 {{Number(userInfo.aword).toFixed(2)}}</span> <i class="iconfont iconfont-question" @click="showTip('raise')"/></div>
					<div class="line" v-if="userInfo.manType==2">
						服务商动态密码：{{dsPassword}} <span class="copy" @click="handleCopy(dsPassword,$event)">复制</span>
					</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box2">
				<div class="flex flex1">
					<div class="value" @click="toBookView('1')">{{userInfo.teamCalculationPower}}</div>
					<div class="text" @click="showTip('teamCalculationPower')">团队算力 <i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<!-- <div>{{userInfo.platformTicket}}</div> -->
					<div class="value" @click="toBookView('2')">{{userInfo.platformTicket}}</div>
					<div class="text" @click="showTip('platformTicket')">帮扶券 <i class="iconfont iconfont-question"/></div>
				</div>
				<!-- <div class="flex flex3">
					<div class="value" @click="toBookView('3')">{{userInfo.contributionValue}}</div>
					<div class="text" @click="showTip('contribution')">贡献值 <i class="iconfont iconfont-question"/></div>
				</div> -->
				<div class="flex flex2">
					<!-- <div>{{userInfo.thisWeekMineral}}</div> -->
					<div class="value" @click="toBookView('4')">{{userInfo.thisWeekMineral}}</div>
					<div class="text" @click="showTip('mineral')">矿石 <i class="iconfont iconfont-question"/></div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box3">
				<div class="flex flex1">
					<div>{{userInfo.myCalculationPower}}</div>
					<!-- <NumberGrow :value="userInfo.myCalculationPower"></NumberGrow> -->
					<div class="text" @click="showTip('myCalculationPower')">个人算力<br><i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<div>{{userInfo.temporaryFreezePlatformTicket}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezePlatformTicket"></NumberGrow> -->
					<div class="text">交易中<br>帮扶券</div>
				</div>
				<!-- <div class="flex flex3">
					<div>{{userInfo.temporaryFreezeContribution}}</div>
					<div class="text">交易中<br>贡献值</div>
				</div> -->
				<div class="flex flex2">
					<div>{{userInfo.temporaryFreezeMineral}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezeMineral"></NumberGrow> -->
					<div class="text">交易中<br>矿石</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="cateInfo">
				<div class="infoBox">
					<router-link to="/task">
						<div class="iconBox">
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="task2" />
							</div>
						</div>
						<div class="text">任务中心</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myMill">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundMill">
								<van-icon class-prefix="iconfont" name="mill2" />
							</div>
						</div>
						<div class="text">我的矿机</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myDeal">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundDeal">
								<van-icon class-prefix="iconfont" name="deal" />
							</div>
						</div>
						<div class="text">我的单子</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myBook">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundBook">
								<van-icon class-prefix="iconfont" name="book" />
							</div>
						</div>
						<div class="text">我的账本</div>
					</router-link>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="cateInfo">
				<div class="infoBox">
					<router-link to="/myInfo">
						<div class="iconBox">
							<div class="iconBackground iconBackground4">
								<van-icon class-prefix="iconfont" name="realname" />
							</div>
						</div>
						<div class="text">我的实名</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/mySuperTeam">
						<div class="iconBox">
							<div class="iconBackground iconBackground2">
								<van-icon class-prefix="iconfont" name="team" />
							</div>
						</div>
						<div class="text">我的工会</div>
					</router-link>
				</div>
				<div class="infoBox">
					 <!-- @click="waiting" -->
					<router-link to="/myShare">
						<div class="iconBox" >
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="share2"/>
							</div>
						</div>
						<div class="text">我要推广</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myWord">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundWord">
								<van-icon class-prefix="iconfont" name="word" />
							</div>
						</div>
						<div class="text">我要留言</div>
					</router-link>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<!-- <div class="items">
				<router-link to="innerRegister">
					<div class="my-cell">
						<div class="flex1">
							第二轮内排注册(6月6号~7月6号)
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div> -->
			<div class="items">
				<router-link to="transferMineral4F">
					<div class="my-cell">
						<div class="flex1">
							定向转让矿石(服务商)
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="transferMineral4L">
					<div class="my-cell">
						<div class="flex1">
							定向转让矿石(会长)
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="transferTicket">
					<div class="my-cell">
						<div class="flex1">
							定向转让帮扶券
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<!-- to="transferCV" -->
				<!-- <div class="my-cell" @click="closeTCV">
					<div class="flex1">
						定向转让贡献值
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div> -->
			</div>
			<!-- <div class="items">
				<router-link to="transferMineral">
					<div class="my-cell">
						<div class="flex1">
							担保交易矿石
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent==1||userInfo.isAgent==2">
				<router-link to="myDealCheck">
					<div class="my-cell">
						<div class="flex1">
							担保交易审核
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div> -->
			<div class="items">
				<router-link to="lookInfo">
					<div class="my-cell">
						<div class="flex1">
							查询他人信息
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent==3">
				<router-link to="dealList">
					<div class="my-cell">
						<div class="flex1">
							会员交易列表
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="initPassword">
					<div class="my-cell">
						<div class="flex1">
							给他人初始化密码
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="updateIdCard">
					<div class="my-cell">
						<div class="flex1">
							帮他人修改身份证号
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent==3||userInfo.isAgent==4">
				<router-link to="myCheck">
					<div class="my-cell">
						<div class="flex1">
							实名审核
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent>0">
				<router-link to="unFreeze">
					<div class="my-cell">
						<div class="flex1">
							给他人解冻账号
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items">
				<router-link to="reduceRNTimes">
					<div class="my-cell">
						<div class="flex1">
							销实名次数
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<!-- <div class="paddingAll">
				<van-button color="#c7c7c7" size="normal" :block="true" @click="cancelAccount" loading-type="spinner">注销账户(暂对尚未实名的用户开放)</van-button>
			</div> -->
			
			<!-- <div class="items">
				<div class="my-cell" @click="cancelAccount">
					<div class="flex1">
						注销账户
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div>
			</div> -->
		</van-pull-refresh>
		
		<!-- <m-fullscreen></m-fullscreen> -->
		<!-- <m-refresh @refreshEvent="refreshEvent"></m-refresh> -->
		<van-dialog v-model="showTipModel" title="系统提示" :showCancelButton="isShowCancelBtn" cancelButtonText="稍后" confirmButtonText="好的" @confirm="confirmBtn">
			<div class="paddingWing f-12 lineHeight tip4model2">
				1.您尚未实名，是否先前去实名？<br>
				2.实名审核通过后，所上传的照片会被系统自动销毁并删除处理。
			</div>
		</van-dialog>
	</div>
	<transition name="van-fade">
	  <router-view></router-view>
	</transition>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	//import mRefresh from '@/components/Refresh2.vue';
	import { Dialog } from 'vant';
	import clip from '@/assets/js/clipboard';
	// import mFullscreen from '@/components/Fullscreen.vue';
	/* import { Skeleton } from 'vant'; */
	export default {
		data() {
			return {
				isShowCancelBtn:true,
				showTipModel:false,
				pageHeight:"",
				userId:"",
				result: "",
				loading: true,
				userInfo: "",
				buyAndSellInfo:{
					buyInNum:0.0,
					buyInTime:0,
					sellOutNum:0.0,
					sellOutTime:0,
				},
				cookiesTime:60 * 60 * 24,
				cityInfo:'',
				dsPassword:''
			}
		},
		components: {
			mHeader,
			/* mRefresh, */
			// mFullscreen
		},
		// beforeRouteEnter(to,from,next) {
		// 	//console.log("enter");
		// 	next();
		// },
		watch:{
			/* $route(now,old){
				let _this = this;
				//console.log("watch $route change");
				if(_this.$cookies.get('isRefreshUserInfo')==1){
					_this.getUserInfo();
					_this.$cookies.set('isRefreshUserInfo',0,_this.$api.cookiesTime);
				}
			}, */
		},
		created() {
			let _this = this;
			/* let cv = 0;
			let loveValue = 2000;
			for(let i=0;i<180;i++){
				cv=cv+0.1;
				loveValue = loveValue - 0.1*19;
			}
			/* setTimeout(function(){
				console.log("123200000")
			},2000) */
			//console.log("getTime:" + Date.parse(new Date('2020/04/30 09:45:12:123')));
			/* let JsDecrypt = _this.$JsCrypto.myDecode1("s2mpMsUAYbtKa+s2pRx/WFBDnfjM4FQ/");
			console.log("JsDecrypt",JsDecrypt); */
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				////console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				/* localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token'); */
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			if(_this.$cookies.get('isRefreshUserInfo')==1){
				_this.getUserInfo();
			}
			if(_this.userInfo.isAgent==1){
				_this.getAssistAgentInfo4Province();
			}
			if(_this.userInfo.isAgent==2){
				_this.getAssistAgentInfo4City();
			}
			if(_this.userInfo.manType==2){
				_this.getServiceDsPassword();
			}
		},
		methods: {
			getCityName(cityInfo){
				if(cityInfo&&cityInfo.provinceName){
					return cityInfo.provinceName
				}else if(cityInfo&&cityInfo.cityName){
					return cityInfo.cityName
				}
				
			},
			waitingInnerRegister(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'加油',
				  message: "内排注册功能暂时关闭，如需开通，请联系客服"
				}).then(() => {
				  // on confirm
				})
			},
			closeTCV(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'好的',
				  message: "为了规范市场，定向转让贡献值通道已经关闭，请大家统一用矿石交易"
				}).then(() => {
				  // on confirm
				})
			},
			waiting(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'加油',
				  message: "此功能即将开放，请等通知"
				}).then(() => {
				  // on confirm
				})
			},
			toComplainView(userId){
				let _this = this;
				_this.$router.push({path:"lookComplainList",query:{targetUserId:userId}});
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			getServiceDsPassword(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getServiceDsPassword, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.dsPassword = res.data.dsPassword;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistAgentInfo4Province(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistAgentInfo4Province, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.cityInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistAgentInfo4City(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistAgentInfo4City, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.cityInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				////console.log("province",province);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			
			cancelAccount(){
				let _this = this;
				Dialog.confirm({
				  title: '注销确认',
				  message: '你确定要注销/删除/重新注册这个账号？'
				}).then(() => {
				  // on confirm
				  if(_this.userInfo.teamateNum>0){
					  Dialog.alert({
					    title: '系统提示',
					    confirmButtonText:'好的',
					    message: "您已有直推，暂时无法注销账号"
					  }).then(() => {
					    // on confirm
					  })
					  return;
				  }
				  _this.$ajax.ajax(_this.$api.cancelAccount, 'GET', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
						Dialog.alert({
						  title: '系统提示',
						  confirmButtonText:'好的',
						  message: "注销成功，可重新注册"
						}).then(() => {
						  // on confirm
						  _this.$router.replace('login');
						})
				  	}else{
				  		Dialog.alert({
				  		  title: '系统提示',
				  		  confirmButtonText:'好的',
				  		  message: res.message
				  		}).then(() => {
				  		  // on confirm
				  		})
				  	}
				  })
				}).catch(() => {
				  // on cancel
				});
			},
			showTip(val){
				//console.log(val);
				let message = '';
				if(val=='mineral'){
					message = '矿石：当前所能用来流通的矿石。卖出的时候要额外收20%的手续费(服务费)，比如卖100个矿石要使用110个矿石(其中10个销毁)+价值10个矿石价格的帮扶券(其中部分存入基金池，做为线下帮扶时的启动资金，无形中，大家的每笔交易都给自己增加了福报，行善积德，大慈大悲，感谢有您的支持)。获得途径：矿机产出、买入。';
				}else if(val=='platformTicket'){
					message = '帮扶券：可用于交易的时候当手续费(服务费)、可用于解冻、可用于消实名次数、可用于捐赠给平台上生活遇到困难的会员而获得爱心值，或者捐赠给少年儿童基金池来帮助更多的人，后续还会有其他用处......。获取途径：从自己上级或志愿者或省市代理那儿购买。';
				}else if(val=='contribution'){
					message = '贡献值：贡献值是平台对会员的奖励，可以用来租赁矿机。获取途径：爱心值释放、推广、直推复投矿机。';
				}else if(val=='teamCalculationPower'){
					message = '团队算力：个人算力+近代下级的个人算力。它决定着您的用户等级，分别有：青铜、白银、黄金、铂金、钻石五个等级，具体请查看【我的--任务中心】。';
				}else if(val=='myCalculationPower'){
					message = '我的算力：由个人所拥有的矿机所决定。';
				}else if(val=='limitBuyNum'){
					message = '个人限购数量=个人限购额度+(卖出数量-买入数量)，若有特殊需要，个人限购额度可找客服申请提升';
				}else if(val=='raise'){
					message = '爱心值就是您捐赠帮扶券的数量，满10个即可在首页每日释放爱心值';
				}
				Dialog.alert({
				  title: '温馨提示',
				  confirmButtonText:'好的',
				  message: message
				}).then(() => {
					// on confirm
					//console.log('sure');
				})
			},
			toBookView(val){
				let _this = this;
				//console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}else if(val==5){
					name = 'loveValue';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push('/myBook');
			},
			toMyInfo(){
				this.$router.push('/myInfo');
			},
			logout(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.$toast('账户异常且退出登录');
						// localStorage.clear();//若不允许多账号登录，请把这个给去掉
						// //console.log("_this.$cookies.keys()",_this.$cookies.keys());
						// _this.$cookies.remove('_USERINFO_');
						// _this.$cookies.remove('buyAndSellInfo');
						_this.$cookies.remove('userId');
						_this.$cookies.remove('token');
						// //console.log("_this.$cookies.keys()",_this.$cookies.keys());
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.$router.replace('login');
				})
			},
			confirmBtn(){
				let _this = this;
				_this.showTipModel = false;
				_this.$router.push('/myInfo');
			},
			getUserInfo() {
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						if(_this.userInfo.actived!=1){
							_this.showTipModel = true;
							/* Dialog.alert({
								title: "系统提示",
								message: "您尚未实名，请前去实名"
							}).then(() => {
							}) */
						}
						_this.$cookies.set('isRefreshUserInfo',0,_this.$api.cookiesTime);
						//console.log(_this.userInfo,"userInfo");
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						// if(_this.userInfo.manType==2){
						// 	_this.getServiceDsPassword();
						// }
						if(_this.userInfo.accountStatus==1){
							//退出登录
							_this.logout();
						}
					}else{
						_this.$toast(res.message);
						if(res.message=='登录已过期，请重新登录'){
							_this.$router.push('/login');
						}
					}
				},function(){
					_this.loading = false;
				})
			},
			refreshEvent() {
				//console.log("refresh")
				let _this = this;
				_this.getUserInfo();
			},
		}
	}
</script>
