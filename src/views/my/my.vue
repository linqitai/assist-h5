<style lang="scss">
	// @import '@/assets/scss/variable.scss';
	@import '~@/assets/scss/index.scss';
	.myPage{
		position: relative;
		height: 100%;
		// margin-top: $header-height;
		// margin-bottom: $header-height;
		$iconBgWidth:50px;
		.cateInfo {
			display: flex;
			width: 100%;
			margin-top: $marginTop2;
			// margin-left: $marginLeft;
			// border-radius: $borderRadius;
			background-color: $main-box-color;
			color: $mainBorderColor;
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
						color: white;
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
					color: $mainTextColor;
				}
			}
		}
		.box {
			display: flex;
			background-color: $main-box-color;
			padding: $boxPadding2;
			box-sizing: border-box !important;
			color: $mainTextColor;
			@include userSelectNone();
		}
		
		$avatorWidth:80px;
		
		.box1 {
			// height: $avatorWidth+$boxPadding1;
			margin-top: 2px;
			.flex {
				&.flex1 {
					flex: 0 0 70px;
					$heightwidht:70px;
					.name{
						width: $heightwidht;
						height: $heightwidht;
						border-radius: $heightwidht;
						background-color: $main-blue-color;
						text-align: center;
						line-height: $heightwidht;
						font-size: 22px;
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
							height: 20px;
							line-height: 20px;
							font-size: 11px;
							border-radius: 0 10px 10px 0;
							padding: 0 8px 0 4px;
							margin-left: 4px;
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
			margin-top: $marginTop2;
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
			margin-top: $marginTop1;
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
			margin-top: $marginTop2;
			background-color: $main-box-color;
			padding-left: $boxPadding2;
			padding-right: $boxPadding2;
		
			.my-cell {
				height: 2.875rem;
				line-height: 2.875rem;
				color: $mainTextColor;
				font-size: 0.75rem;
				border-bottom: 1px solid $mainBorderColor;
				display: flex;
		
				.flex1 {
					flex: 1;
					color: $mainTextColor;
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
				我的
			</div>
			<i class="iconfont iconfont-set rightBox icon" @click="toMyInfo"></i>
		</m-header>
		<!-- <div class="margTHeader" v-if="!userInfo">
			<van-skeleton avatar avatar-size="70px" :row="3"/>
			<div class="placeholderLine20"></div>
			<van-skeleton :row="20"/>
		</div> -->
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<div class="box box1">
				<div class="flex flex1">
					<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
					<div class="name" @click="toMyInfo">{{userInfo.realName | getLastName}}</div>
				</div>
				<div class="flex flex2">
					<div class="line1">
						<div class="nick_name left">{{userInfo.nickName}}</div>
						<div class="level left">{{userInfo.level | getUserType}}</div>
					</div>
					<!-- <div class="line">
						ID {{info.userId}}
					</div> -->
					<div class="line margT3">
						注册时间 {{userInfo.registerTime}}
					</div>
					<div class="line">
						<div class="left">买入次数 {{userInfo.buyTimes}}</div>
						<div class="mlBox left">买入数量 {{userInfo.buyAmount}}</div>
					</div>
					<div class="line">
						<div class="left">卖出次数 {{userInfo.sellTimes}}</div>
						<div class="mlBox left">卖出数量 {{userInfo.sellAmount}}</div>
					</div>
					<div class="line">个人限购数量 {{userInfo.canBuyNum}}</div>
					<!-- <div>=2000+(卖出数量-买入数量)=</div> -->
				</div>
			</div>
			<!-- <div class="box">
				<div class="line">
					<div class="f-11">区块地址 {{userInfo.blockAddress}}</div>
				</div>
			</div> -->
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
				<div class="flex flex3">
					<!-- <div>{{userInfo.contributionValue}}</div> -->
					<div class="value" @click="toBookView('3')">{{userInfo.contributionValue}}</div>
					<div class="text" @click="showTip('contribution')">贡献值 <i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex2">
					<!-- <div>{{userInfo.thisWeekMineral}}</div> -->
					<div class="value" @click="toBookView('4')">{{userInfo.thisWeekMineral}}</div>
					<div class="text" @click="showTip('mineral')">矿石 <i class="iconfont iconfont-question"/></div>
				</div>
			</div>
			<div class="box box3">
				<div class="flex flex1">
					<div>{{userInfo.myCalculationPower}}</div>
					<!-- <NumberGrow :value="userInfo.myCalculationPower"></NumberGrow> -->
					<div class="text" @click="showTip('myCalculationPower')">我的算力<br><i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<div>{{userInfo.temporaryFreezePlatformTicket}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezePlatformTicket"></NumberGrow> -->
					<div class="text">交易中<br>帮扶券</div>
				</div>
				<div class="flex flex3">
					<div>{{userInfo.temporaryFreezeContribution}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezeContribution"></NumberGrow> -->
					<div class="text">交易中<br>贡献值</div>
				</div>
				<div class="flex flex2">
					<div>{{userInfo.temporaryFreezeMineral}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezeMineral"></NumberGrow> -->
					<div class="text">交易中<br>矿石</div>
				</div>
			</div>
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
					<router-link to="/mill">
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
						<div class="text">我的交易</div>
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
						<div class="text">我的战队</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myShare">
						<div class="iconBox">
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="share2" />
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
			<div class="items" v-if="userInfo.isAgent!=0">
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
				<router-link to="innerRegister">
					<div class="my-cell">
						<div class="flex1">
							内排注册
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="transferMineral">
					<div class="my-cell">
						<div class="flex1">
							定向转让矿石
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
				<!-- <router-link 
				<!-- <router-link to="/myInfo">
					<div class="my-cell">
						<div class="flex1">
							我的身份
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="myWord">
					<div class="my-cell">
						<div class="flex1">
							我要留言
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="/task">
					<div class="my-cell">
						<div class="flex1">
							任务中心
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="myDeal">
					<div class="my-cell">
						<div class="flex1">
							我的交易
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="mill">
					<div class="my-cell">
						<div class="flex1">
							我的矿机
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="mySuperTeam">
					<div class="my-cell">
						<div class="flex1">
							我的战队
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="myShare">
					<div class="my-cell">
						<div class="flex1">
							我要分享
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="myBook">
					<div class="my-cell">
						<div class="flex1">
							我的账本
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <router-link to="shopOrder">
					<div class="my-cell">
						<div class="flex1">
							购物订单
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<!-- <div class="my-cell" @click="toScrollTop">
					<div class="flex1">
						返回顶部
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div> -->
			</div>
		</van-pull-refresh>
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<!-- <m-fullscreen></m-fullscreen> -->
		<m-refresh @refreshEvent="refreshEvent"></m-refresh>
		
	</div>
	<transition name="van-fade">
	  <router-view></router-view>
	</transition>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	// import { getTestUser,ERR_OK } from "@/api/index";
	// import { ajax } from "@/api/ajax";
	// import $ from 'jquery';
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh.vue';
	import NumberGrow from '@/components/NumberGrow.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	import { Skeleton } from 'vant';
	export default {
		data() {
			return {
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
				cookiesTime:60 * 60 * 24
			}
		},
		components: {
			mHeader,
			mRefresh,
			NumberGrow,
			// mFullscreen
		},
		// beforeRouteEnter(to,from,next) {
		// 	console.log("enter");
		// 	next();
		// },
		watch:{
			$route(now,old){
				let _this = this;
				console.log(_this.$cookies.get('isRefreshUserInfo'),'isRefreshUserInfo')
				if(_this.$cookies.get('isRefreshUserInfo')==1){
					_this.getUserInfo();
					_this.$cookies.set('isRefreshUserInfo',0,_this.$api.cookiesTime);
				}
				// _this.pageHeight = _this.$utils.getViewPortHeight();
				// _this.$utils.scrollTop();
				// console.log("scrollTop");
			},
		},
		destroyed() {
			console.log("destroyed");
			/* console.log("isOpenP",localStorage.getItem("isOpenP"));
			localStorage.setItem("isOpenP",0);
			console.log("isOpenP",localStorage.getItem("isOpenP")); */
		},
		mounted() {
			let _this = this;
			
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			// _this.getUserInfo();
			
			/* if (_this.$cookies.get("buyAndSellInfo")) {
				_this.buyAndSellInfo = _this.$cookies.get("buyAndSellInfo");
			}else{
				_this.getBuyAndSellInfo();
			} */
			// _this.getAddress();
		},
		methods: {
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				console.log("province",province);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			showTip(val){
				console.log(val);
				let message = '';
				if(val=='mineral'){
					message = '矿石：您当前所能用来流通的矿石。获得途径为矿机产出或者买入。卖出的时候要额外收10%或20%的服务费，比如卖100个矿石要花110或120个矿石，所收服务费的矿石全部销毁，不再它用。';
				}else if(val=='platformTicket'){
					message = '帮扶券：可用于卖出的时候当服务费、可用于修改个人信息、可用于参与爱心帮扶的众筹而获得贡献值，后续还会有其他用处...';
				}else if(val=='contribution'){
					message = '贡献值：您有多少点贡献值决定您可卖出的矿石数量，比例为1:1，比如您卖100个矿石要花（100+服务费）个矿石和100点贡献值。';
				}else if(val=='teamCalculationPower'){
					message = '团队算力：您的个人算力+您直推的个人算力，只计算到上下两级。决定您的用户等级是否可以升级，分别有：青铜、白银、黄金、铂金、钻石五个等级，具体请查看--任务中心。';
				}else if(val=='myCalculationPower'){
					message = '我的算力：由您个人所拥有运行中的矿机所决定。';
				}
				Dialog.alert({
				  title: '温馨提示',
				  confirmButtonText:'知道了',
				  message: message
				}).then(() => {
					// on confirm
					console.log('sure');
				})
			},
			toBookView(val){
				let _this = this;
				console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push('/myBook');
			},
			toMyInfo(){
				this.$router.push('/myInfo');
			},
			getUserInfo() {
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						_this.$cookies.set('isRefreshUserInfo',0,_this.$api.cookiesTime);
						console.log(_this.userInfo,"userInfo");
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						_this.loading = false;
						// _this.getBuyAndSellInfo();
						// _this.$cookies.set("_USERINFO_", res.data, _this.$api.cookiesTime);
					}
				})
			},
			refreshEvent() {
				console.log("refresh")
				let _this = this;
				_this.getUserInfo();
			},
		}
	}
</script>
