<style lang="scss">
	// @import '@/assets/scss/variable.scss';
	@import '~@/assets/scss/index.scss';
	$main-box-color:#ffffff;
	.myPage{
		position: absolute;
		min-height: 100%;
		width: 100%;
		// margin-bottom: $header-height;
		$iconBgWidth:50px;
		background-color: $main-box-fh-bg-color;
		color: $main-box-fh-text-color;
		.pageContent{
			margin-top: $header-height;
		}
		.cateInfo {
			display: flex;
			width: 100%;
			// margin-left: $marginLeft;
			// border-radius: $borderRadius;
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
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				TA的信息
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div v-if="!userInfo.userId">
			<div class="placeholderLine10"></div>
			<van-skeleton :row="20"/>
			<div class="placeholderLine10"></div>
		</div>
		<div class="pageContent" v-if="userInfo.userId">
			<div class="box box1">
				<div class="flex flex1">
					<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
					<div class="name">{{userInfo.realName | getLastName}}</div>
					<!-- <span>点赞</span> -->
					<!-- <div class="textCenter margT10 f-18">
						<i class="iconfont iconfont-good"></i>
					</div> -->
					<div class="textCenter margT10">
						<i class="iconfont iconfont-complaint f-18" @click="toComplainView(userInfo.userId)"></i> <i class="f-16">{{userInfo.beComplaintTimes}}</i>
					</div>
				</div>
				<div class="flex flex2">
					<div class="line1">
						<span class="nick_name">{{userInfo.nickName}} </span>
						<!-- <span class="level margL6" v-if="userInfo.manType == 2">服务商</span> -->
					</div>
					<div class="line1">
						<!-- {{getCityName(cityInfo)}} -->
						<!-- <div class="level left">{{userInfo.level | getUserType}}{{userInfo.isAgent==1?'+省代理':userInfo.isAgent==2?'+市代理':''}}</div> -->
						<!-- <div class="level left">{{userInfo.level | getUserType}}</div> -->
					</div>
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
					<div class="line" @click="showTip('limitBuyNum')">个人限购数量 {{userInfo.canBuyNum}} <i class="iconfont iconfont-question"/></div>
					<div class="line">
						<div class="left">直推人数 {{userInfo.teamateNum}}</div>
						<div class="mlBox left">实名人数 {{userInfo.realnameNum}}</div>
					</div>
					<div class="line"><span @click="toBookView('3',userInfo.userId)">贡献值 {{userInfo.contributionValue}}</span> <i class="iconfont iconfont-question" @click="showTip('contribution')"/></div>
					
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box2">
				<div class="flex flex1">
					<div class="value" @click="toBookView('1',userInfo.userId)">{{userInfo.teamCalculationPower}}</div>
					<div class="text" @click="showTip('teamCalculationPower')">团队算力 <i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<!-- <div>{{userInfo.platformTicket}}</div> -->
					<div class="value" @click="toBookView('2',userInfo.userId)">{{userInfo.platformTicket}}</div>
					<div class="text" @click="showTip('platformTicket')">帮扶券 <i class="iconfont iconfont-question"/></div>
				</div>
				<!-- <div class="flex flex3">
					<div class="value" @click="toBookView('3')">{{userInfo.contributionValue}}</div>
					<div class="text" @click="showTip('contribution')">贡献值 <i class="iconfont iconfont-question"/></div>
				</div> -->
				<div class="flex flex2">
					<!-- <div>{{userInfo.thisWeekMineral}}</div> -->
					<div class="value" @click="toBookView('4',userInfo.userId)">{{userInfo.thisWeekMineral}}</div>
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
			<div class="paddingWing f-11">
				<div class="placeholderLine10"></div>
				<div class="textCenter">
					该账户状态：{{userInfo.accountStatus | accountStatus}}
				</div>
				<div class="textCenter margT6 em13" v-if="userFreezeInfo">
					被冻结原因：{{userFreezeInfo.reason}}
				</div>
				<div class="textCenter margT6" v-if="userInfo.accountStatus == 1">
					可否解冻：{{userInfo.canUnfreeze | canUnFreeze}}
				</div>
				<div class="textCenter margT6">
					审核结果：{{userInfo.actived | activedStatus}}
				</div>
				<div class="textCenter margT6 em13" v-if="userInfo.actived==2">
					上次审核被驳回原因：{{userInfo.remark}}<br>
				</div>
				<div class="textCenter margT6" v-if="cheker">
					审核者：{{cheker}}
				</div>
			</div>
		</div>
		<!-- <transition name="van-fade">
		  <router-view></router-view>
		</transition> -->
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
				dsPassword:'',
				userFreezeInfo:'',
				cheker:''
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
		mounted() {
			let _this = this;
			//console.log('userId:',_this.$route.query.lookUserId)
			_this.getUserInfo4Other();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
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
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			toComplainView(userId){
				let _this = this;
				////console.log('userIdInDealRecolod:',userId);
				_this.$router.push({path:"lookComplainList",query:{targetUserId:userId}});
			},
			complainBtn(){
				let _this = this;
				// _this.showBuyDetailModel = false;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: '为了提高告发他人的质量，控告他人的时候原告的个人算力需达到0.4G，且需花0.2个帮扶券，请确认是否真的要控告TA？'
				}).then(() => {
				  // on confirm
				  //这里调用让对方上传截图接口
				  let params = {
					/* userId:  _this.userId, */
					targetUserId:_this.$route.query.targetUserId
				  }
				  //console.log('params',params)
				  _this.$ajax.ajax(_this.$api.update4Complain, 'POST', params, function(res) {
				  	// //console.log('res', res);
				  	if (res.code == _this.$api.CODE_OK) {
				  		_this.$toast('控告成功');
						_this.getUserInfo4Other();
				  	}else{
						_this.$toast(res.message);
					}
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
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
			showTip(val){
				//console.log(val);
				let message = '';
				if(val=='mineral'){
					message = '矿石：当前所能用来流通的矿石。卖出的时候要额外收20%的手续费(服务费)，比如卖100个矿石要使用120个矿石，所收的手续费(服务费)全部销毁，不再它用。获得途径：矿机产出、买入。';
				}else if(val=='platformTicket'){
					message = '帮扶券：可用于交易的时候当手续费(服务费)、用于捐赠给平台上生活遇到困难的会员(此功能即将推出)，后续还会有其他用处......。获取途径：从省市代理那儿购买。';
				}else if(val=='contribution'){
					message = '贡献值：贡献值是平台对会员的奖励，可以用来租赁矿机。获取途径：签到、推广、自己复投矿机、直推复投矿机、捐赠帮扶券。';
				}else if(val=='teamCalculationPower'){
					message = '团队算力：个人算力+近代下级的个人算力。它决定着您的用户等级，分别有：青铜、白银、黄金、铂金、钻石五个等级，具体请查看【我的--任务中心】。';
				}else if(val=='myCalculationPower'){
					message = '我的算力：由个人所拥有的矿机所决定。';
				}else if(val=='limitBuyNum'){
					message = '个人限购数量=2000+(卖出数量-买入数量)';
				}
				Dialog.alert({
				  title: '温馨提示',
				  confirmButtonText:'知道了',
				  message: message
				}).then(() => {
					// on confirm
					//console.log('sure');
				})
			},
			toBookView(val,userId){
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
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push({path:"lookBook",query:{lookUserId:userId}})
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
			getUserInfo4Other() {
				let _this = this;
				//onsole.log('userId:',_this.$route.query.lookUserId)
				let params = {
					userId: _this.$route.query.lookUserId
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoByObj, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						_this.loading = false;
						/* if(_this.userInfo.isAgent==1){
							_this.getAssistAgentInfo4Province();
						}
						if(_this.userInfo.isAgent==2){
							_this.getAssistAgentInfo4City();
						} */
						if(_this.userInfo.accountStatus == 1){
							_this.getUserFreezeInfo();
						}
						if(_this.userInfo.actived == 2){
							_this.getNickNameByUserId();
						}
					}else{
						if(res.code == 4003) {
							_this.$toast('当前用户尚未注册');
						}else{
							_this.$toast(res.message);
						}
						
					}
				})
			},
			getUserFreezeInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserFreeze + _this.userInfo.userId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userFreezeInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getNickNameByUserId(){
				let _this = this;
				let params = {
					lookUserId: _this.userInfo.checkerId
				}
				console.log("params",params);
				_this.$ajax.ajax(_this.$api.getNickNameByUserId, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.cheker = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getUserInfo() {
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						if(_this.userInfo.isAgent==1){
							_this.getAssistAgentInfo4Province();
						}
						if(_this.userInfo.isAgent==2){
							_this.getAssistAgentInfo4City();
						}
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			/* refreshEvent() {
				let _this = this;
				_this.getUserInfo();
			}, */
		}
	}
</script>
