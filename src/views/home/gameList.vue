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
			<!-- <div class="logoBox" @click="game2Btn">
				<img src="../../assets/image/2048.jpg" alt="">
			</div> -->
		</div>
		<van-action-sheet v-model="isShow4Game" title="欢迎来到传奇世界">
		  <div class="noticeDetail paddingWing" v-if="serverListResult[sLen-1]">
			<div class="title textBold f-16">选区入口</div>
			<div class="placeholderLine10"></div>
			<span class="margR20" v-for="item in serverListResult" :key="item.id">
				<van-tag type="warning" @click="toServerGameView(item)">服务{{item.id}}区({{item.busy>0.7?'拥挤':item.busy<0.5?'空闲':'繁忙'}})</van-tag>
			</span>
			<div class="tip4modelNew margT10">系统提示：<b class="yellow">该游戏电脑上玩体验更佳。</b>升到80级(一转)后即可打神域BOSS爆出HPC，打出HPC后要立马回到该页面兑换成流通值或者贡献值，否则将会消失，消失后系统不做补发。</div>
		  </div>
		  <div class="placeholderLine4"></div>
		  <div class="paddingWing">
			   <van-divider content-position="left">材料购买</van-divider>
			   <div class="placeholderLine4"></div>
			   <van-row type="flex" justify="space-between">
					<van-col span="12">
						<div class="textCenter"><a class="underline blue" href="http://www.8gesy.com/payment/group.html?id=3D6B69C7FF2787A6" target="_blank">一区</a></div>
					</van-col>
					<van-col span="12">
						<div class="textCenter"><a class="underline blue" href="http://www.8gesy.com/payment/group.html?id=0A111009CE56ABF0" target="_blank">二区</a></div>
					</van-col>
			   </van-row>
			   <div class="placeholderLine4"></div>
			  <van-divider content-position="left">充值</van-divider>
			  <div class="tip4modelNew">充值提醒：游戏中通过支付宝/微信充值的时候，若充值月卡、至尊卡或礼品若没到账，请找【客服】提供【账号和角色昵称】来领取</div>
			  <div class="placeholderLine10"></div>
			  <van-row type="flex" justify="space-between">
				<van-col span="12">
					<div class="underline blue" @click="showModelBtn">用矿石充值元宝</div>
				</van-col>
				<van-col span="12">
					<div class="underline blue" @click="showCCVModelBtn">用贡献值充值元宝</div>
				</van-col>
			  </van-row>
			  <div class="placeholderLine20"></div>
			  <van-row type="flex" justify="space-between">
					<van-col span="24">
						<div class="underline blue" @click="showPTModelBtn">用帮扶券充值元宝</div>
					</van-col>
			  </van-row>
			  <div class="placeholderLine4"></div>
			  <van-divider content-position="left">游戏中爆出的HPC兑换</van-divider>
			  <div class="placeholderLine10"></div>
			  <van-row type="flex" justify="space-between" v-if="parameter.gameContributionRatio">
					<van-col span="12">
						<div class="underline blue" @click="convertConBtn">贡献值</div>
					</van-col>
			  </van-row>
		  </div>
		  <div class="placeholderLine4"></div>
		  
		  
		  <div class="placeholderLine20"></div>
		</van-action-sheet>
		<van-dialog v-model="showCCVSelectBox" title="用贡献值兑换元宝" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">当前可用贡献值：{{userInfo.contributionValue}}</div>
				<div class="placeholderLine20"></div>
				<div>选择区号：</div>
				<div class="placeholderLine10"></div>
				<van-radio-group v-model="selectRadioValue">
				  <div v-for="item in serverList" :key="item.id">
					  <van-radio :name="item.id">服务{{item.id}}区</van-radio>
					  <div class="placeholderLine10"></div>
				  </div>
				</van-radio-group>
				<div class="f-14">当前比例 1:{{parseFloat(parameter.maxPrice)*parseFloat(parameter.gameRatio)}}</div>
				<van-field v-model="num" @blur="getInteger" label="贡献值数量" required type="Number" clearable placeholder="请填写所要使用的贡献值数量"/>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="tip4model3RedText">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="submit4ChargeCV" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">提交</van-button>
		</van-dialog>
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
				<div class="f-14">当前比例 1:{{parseFloat(parameter.maxPrice)*parseFloat(parameter.gameRatio)}}</div>
				<van-field v-model="num" label="矿石数量" @blur="getInteger" required type="Number" clearable placeholder="请填写所要使用的矿石数量"/>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="tip4model3RedText">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="submit" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">提交</van-button>
		</van-dialog>
		<van-dialog v-model="showPTSelectBox" title="用帮扶券兑换元宝" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">当前可用帮扶券：{{userInfo.platformTicket}}</div>
				<div class="placeholderLine20"></div>
				<div>选择区号：</div>
				<div class="placeholderLine10"></div>
				<van-radio-group v-model="selectRadioValue">
				  <div v-for="item in serverList" :key="item.id">
					  <van-radio :name="item.id">服务{{item.id}}区</van-radio>
					  <div class="placeholderLine10"></div>
				  </div>
				</van-radio-group>
				<div class="f-14">当前比例 1:50000</div>
				<van-field v-model="num" label="帮扶券数量" @blur="getInteger" required type="Number" clearable placeholder="请填写所要使用的帮扶券数量"/>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="tip4model3RedText">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="submit4PT" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">提交</van-button>
		</van-dialog>
		<van-dialog v-model="showConvertCirVBox" title="用HPC兑换流通值" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
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
				<div class="tip4model3RedText">游戏中爆出的HPC需要在第一时间兑换，您是否确认兑换？</div> 
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="sureConvertCirculateValue" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">确认</van-button>
		</van-dialog>
		<van-dialog v-model="showConvertConVBox" title="用HPC兑换贡献值" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
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
				<div class="tip4model3RedText">游戏中爆出的HPC需要在第一时间兑换，您是否确认兑换？</div> 
				<div class="placeholderLine10"></div>
			</div>
			<van-button type="info" size="large" @click="sureConvertContributionValue" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">确认</van-button>
		</van-dialog>
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
				showPTSelectBox:false,
				showConvertConVBox:false,
				showConvertCirVBox:false,
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
				showCCVSelectBox:false,
				showSelectBox:false,
				busy:'',
				sLen:'',
				parameter:''
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
			_this.getParameter4Web();
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
			convertCirBtn(){
				let _this = this;
				_this.showConvertCirVBox = true;
			},
			convertConBtn(){
				let _this = this;
				_this.showConvertConVBox = true;
			},
			getParameter4Web(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistParameter4Web, 'POST', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.parameter = res.data;
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
			sureConvertContributionValue(){
				let _this = this;
				_this.submitLoading = true;
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
				_this.$ajax.ajax(_this.$api.gamePopOutContributionValue, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==1){
							Dialog.alert({
							  title: '系统提示',
							  message: '兑换成功'
							}).then(() => {
							  // on close
							  _this.showConvertConVBox = false;
							  //let url = `http://www.helpchain.cn.com:8088/app.php?user=${_this.account}&spverify=&srvid=${item.id}&srvaddr=${item.ip}&srvport=${item.port}`;
							  let item = {
								  account: _this.account,//账号
								  id:_this.selectRadioValue,//区号
								  ip:_this.serverListResult[_this.selectRadioValue-1].ip,
								  port:_this.serverListResult[_this.selectRadioValue-1].port,
							  }
							  //_this.toServerGameView(item);
							});
						}
						_this.submitLoading = false;
						Toast.clear();
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						  _this.showConvertConVBox = false;
						});
					}
				},function(){
					_this.submitLoading = false;
				})
			},
			sureConvertCirculateValue(){
				let _this = this;
				_this.submitLoading = true;
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
							  _this.showConvertCirVBox = false;
							  //let url = `http://www.helpchain.cn.com:8088/app.php?user=${_this.account}&spverify=&srvid=${item.id}&srvaddr=${item.ip}&srvport=${item.port}`;
							  let item = {
								  account: _this.account,//账号
								  id:_this.selectRadioValue,//区号
								  ip:_this.serverListResult[_this.selectRadioValue-1].ip,
								  port:_this.serverListResult[_this.selectRadioValue-1].port,
							  }
							  //_this.toServerGameView(item);
							});
						}
						_this.submitLoading = false;
						Toast.clear();
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						  _this.showConvertCirVBox = false;
						});
					}
				},function(){
					_this.submitLoading = false;
				})
			},
			openChargeModelBtn(){
				let _this = this;
				//_this.account="1234567";
				let url = `http://www.8gesy.com/payment/group.html?id=00887D6F29EE5293`;
				window.open(url);
			},
			showCCVModelBtn(){
				let _this = this;
				_this.showCCVSelectBox = true;
			},
			showModelBtn(){
				let _this = this;
				_this.showSelectBox = true;
			},
			showPTModelBtn(){
				let _this = this;
				_this.showPTSelectBox = true;
			},
			getInteger(){
				let _this = this;
				_this.num = parseInt(_this.num);
			},
			submit4PT(){
				let _this = this;
				let params = {
					svrid:_this.selectRadioValue,
					username:_this.account,
					num:_this.num,
					safePassword:_this.safePassword
				}
				if(params.num<1){
					_this.$toast('充值数量不得小于1');
					return;
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				_this.submitLoading = true;
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.$ajax.ajax(_this.$api.chargeGold4PT, 'POST', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==1){
							_this.$toast(res.message);
							_this.showPTSelectBox = false;
							_this.submitLoading = false;
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
				},function(){
					_this.submitLoading = false;
				})
			},
			submit4ChargeCV(){
				let _this = this;
				let params = {
					svrid:_this.selectRadioValue,
					username:_this.account,
					num:_this.num,
					safePassword:_this.safePassword
				}
				if(params.num<1){
					_this.$toast('充值数量不得小于1');
					return;
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				_this.submitLoading = true;
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.$ajax.ajax(_this.$api.chargeGold4CV, 'POST', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==1){
							_this.$toast(res.message);
							_this.showCCVSelectBox = false;
							_this.submitLoading = false;
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
				},function(){
					_this.submitLoading = false;
				})
			},
			submit(){
				let _this = this;
				let params = {
					svrid:_this.selectRadioValue,
					username:_this.account,
					num:_this.num,
					safePassword:_this.safePassword
				}
				if(params.num<1){
					_this.$toast('充值数量不得小于1');
					return;
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				_this.submitLoading = true;
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.$ajax.ajax(_this.$api.chargeGold, 'POST', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						if(res.data==1){
							_this.$toast(res.message);
							_this.showSelectBox = false;
							_this.submitLoading = false;
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
				},function(){
					_this.submitLoading = false;
				})
			},
			toServerGameView(item){
				let _this = this;
				//_this.account="1234567";
				let url = `http://www.helpchain.cn.com:8088/app.php?user=${_this.account}&spverify=&srvid=${item.id}&srvaddr=${item.ip}&srvport=${item.port}`;
				window.open(url);
				//window.open(url,'_self') 
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
						_this.sLen = _this.serverList.length;
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
				/* Dialog.alert({
				  title: '系统提示',
				  message: '该模块暂时关闭，开放时间另行通知！'
				}).then(() => {
				  // on close
				}); */
				if(_this.userInfo.userId!='en15079AQ107o91Y7217'){
					if(_this.$utils.getDate(new Date())>'2021/02/15 20:00:00'){
						Dialog.alert({
						  title: '系统提示',
						  message: '游戏版块维护中，请战力排行榜前十的会员在【个人中心--我要留言】中申请排行奖励，留言格式：几区，战力排行第几，申请排行奖励。'
						}).then(() => {
						  // on close
						});
						return;
					}
					if(_this.$utils.getTimeHMS(new Date())>'20:00:00'){
						Dialog.alert({
						  title: '系统提示',
						  message: '游戏运营时间是9~20点，请明天再来'
						}).then(() => {
						  // on close
						});
						return;
					}
					if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
						Dialog.alert({
						  title: '系统提示',
						  message: '游戏运营时间是9~20点，请明天再来'
						}).then(() => {
						  // on close
						});
						return;
					}
				}
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
										_this.serverList[i].busy = 0.6;
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