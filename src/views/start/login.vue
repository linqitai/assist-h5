<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.loginBox{
		color: $mainTextColor;
		background-color: $main-bg-color;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		.logoBox{
			img{
				width: 100%;
			}
		}
		.formHeader{
			padding: 6px $boxPadding1;
			text-align: center;
			color: $mainTextColor;
			.logoBox{
				img{
					width: 100%;
				}
			}
		}
		.formBox{
			.labelText{
				margin-top: 20px;
			}
			.van-cell-group,.van-cell{
				background-color: inherit !important;
			}
			.van-cell{
				color: $mainTextColor !important;
				padding: 10px 0 !important;
				border-bottom: 1px solid $main-adorn-color !important;
				/* &::last-child{
					border-bottom: 1px solid #BABABA !important;
				} */
			}
			.van-cell__value,.van-cell__value--alone,.van-field__control{
				color: $mainTextColor !important;
			}
			.van-cell:not(:last-child)::after{
				left: 0 !important;
			}
			.van-button__text{
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 2px;
			}
		}
		.sureBox{
			margin-top: 1.25rem;
			font-size: 0.75rem;
			.tip{
				margin: 1.25rem 0;
			}
			.agreement{color: $main-adorn-color;}
			.forget{
				float: right;
			}
		}
	}
	/* .shadeMaster{
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
	} */
	.van-cell__value,.van-cell__value--alone,.van-field__control{
		color: $mainTextColor !important;
	}
	.van-field__error-message{
		color: $main-adorn-color !important;
	}
	.van-cell::after {
	    position: absolute;
	    box-sizing: border-box;
	    content: ' ';
	    pointer-events: none;
	    right: 0;
	    bottom: 0;
	    left: 0px !important;
	    border-bottom: 1px solid #ebedf0 !important;
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
</style>

<template>
	<div class="loginBox">
		<div class="logoBox">
			<van-swipe :autoplay="2000" style="height: 190px;" :lazy-render="true">
			  <van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" />
			  </van-swipe-item>
			</van-swipe>
			<!-- <img src="https://www.assist-china.co.ax/image/banner/banner0058.jpg" alt=""> -->
			<!-- <img src="../../assets/image/banner0058.jpg" alt=""> -->
		</div>
		<div class="formHeader">
			<div class="welcomeText green_text">{{welcomeText}}</div>
		</div>
		<!-- <div class="wing">
			<div class="placeholderLine10"></div>
			<div class="placeholderLine10"></div>
			<div class="green_text">欢迎来到HPC帮扶链</div>
		</div> -->
		<div class="formBox paddingWing">
			<van-cell-group :border="isNo">
				<div class="labelText">账号</div>
				<van-field v-model="form.phone" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
				<div class="labelText">密码</div>
				<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
				<div class="labelText">验证码</div>
				<!-- @blur="validate('securityCode')" -->
				<van-field v-model="form.securityCode" center clearable placeholder="请输入右边的图形验证码" :error-message="errorHint.securityCode">
					<van-button slot="button" size="small" type="primary" :loading="getSCLoading" @click="getSecurityCode">{{securityCode}}</van-button>
				</van-field>
			</van-cell-group>
		</div>
		<div class="sureBox paddingWing">
			
			<div class="tip">点击登录即表示您同意<span class="agreement" @click="$router.push('agreement')">《用户协议》</span><span class="forget" @click="forget">忘记密码？</span></div>
			<div class="read">
				 <van-checkbox v-model="isRemember" @change="isRememberChange" icon-size="18px" shape="square" checked-color="#07c160">记住密码</van-checkbox>
			</div>
			<div class="placeholderLine6"></div>
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" :loading="isLoading" @click="loginBtn" loading-type="spinner">登  录</van-button>
			<div class="placeholderLine10"></div>
			<van-button type="primary" size="normal" :block="true" @click="toAppView" loading-type="spinner">下载APP</van-button>
			
			<div class="placeholderLine10"></div>
			<van-button color="linear-gradient(to right, #e7e7e7, #c5c5c5)" size="normal" :block="true" @click="registerBtn" loading-type="spinner">注册</van-button>
			<div class="placeholderLine10"></div>
			<!-- <div class="tip4model3">
				Tip：您若已经参与了内排注册，登录密码初始化为所注册的手机号。
			</div> -->
			<div class="placeholderLine10"></div>
		</div>
		<div class="helpList">
			<div class="item" v-for="item in helpList">
				<div class="textBox">
					<div class="line">
						<div class="left title">{{item.title}}</div>
						<!-- <div class="freeGet right">2020/08/01 12:12:12</div> -->
					</div>
					<!-- <div class="line content margT3 justify">平台小店预热优惠活动：订购此产品需交￥299押金，下单成功且经过商家审核后，奖励299张平台券，每人最多拍1件(备注：激活POS机需要刷卡满￥299，激活成功后再找商家审核，审核确实激活后，您所交的￥299押金可退回)</div> -->
					<div class="line content margT3"><div class="left">{{item.time}}</div><div class="right underline"><a :href="item.url" target="_self">查看详情</a></div></div>
				</div>
			</div>
		</div>
		<!-- <div class="shadeMaster" v-if="isWeixin">
			<p>请点开右上角按钮选择<br>
				<span>【在浏览器打开并收藏】</span>
			</p>
			<img class='img' src="../../assets/image/open_right.png" alt="pic">
		</div> -->
	</div>
</template>

<script>
	// import {setCookie} from '@/assets/js/utils.js'
	// var evercookie = require('evercookie');
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				isRemember:false,
				images: [
					this.$api.domainName + '/image/banner/banner0058.jpg'
				],
				welcomeText:"",
				isNo:false,
				securityCode:'刷新',
				form:{
					phone:'',
					password:'',
					securityCode:''
				},
				placeholder:{
					phone:'请填写登录手机号',
					password:'请填写6~16位登录密码',
					securityCode:'请填写4位验证码'
				},
				errorHint:{
					phone:'',
					password:'',
					securityCode:''
				},
				loginValidate:true,
				isLoading:false,
				getSCLoading:false,
				cookiesTime: 60 * 60 * 24,
				userFreezeInfo:'',
				getInitCode:'',
				userInfo:'',
				isWeixin:false,
				helpList:[]
			}
		},
		mounted() {
			let _this = this;
			/* localStorage.removeItem('_USERINFO_');
			_this.$cookies.remove("statistics"); */
			_this.form.phone = localStorage.getItem("mobilePhone") || '';
			// console.log(_this.form.phone,'_this.form.phone')
			_this.welcomeText = _this.$api.welcomeText;
			_this.helpList = _this.$config.helpList;
			//是否记住密码
			if(localStorage.getItem('password')){
				_this.form.password = localStorage.getItem('password');
				_this.isRemember = true;
			}
			//_this.$cookies.remove('_USERINFO_')
			
			if(_this.$cookies.get('token')){
				_this.$router.replace("home");
			}
			//_this.bsTip();
			//_this.getAssistMaintainInfo();
		},
		methods:{
			getECBTN(){
				//everCookie.get("id", function(value) { alert("EverCookie value is " + value) });
			},
			setECBtn(){
				//everCookie.set("_TEST_","test_ec");
			},
			bsTip(){
				let _this = this;
				_this.isWeixin = _this.$utils.isWeixin();
			},
			registerBtn(){
				let _this = this;
				_this.$router.push('/register');
			},
			judgeMoreAccount(){
				let _this = this;
				let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						//_this.$toast(_this.$api.oneAccount);
						Dialog.alert({
						  title: '系统提示',
						  message: _this.$api.oneAccount
						}).then(() => {
						  // on close
						});
						return;
					}
				}
			},
			toAppView(){
				let _this = this;
				
				_this.$router.replace('/downLoadApp');
			},
			forget(){
				let _this = this;
				
				//请不要操作多账号
				_this.judgeMoreAccount();
				
				_this.$router.replace('/forgetPassword');
			},
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				//alert(province);
			},
			getMyPastMachinesReceipt(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getMyPastMachinesReceipt, 'POST', null, function(res) {
					//console.log("res.code",res.code);
				})
			},
			let48HMachinesStop(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.let48HMachinesStop, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						if(res.data == 1){
							//_this.$toast(res.message);
							Dialog.alert({
							  title: '系统提示',
							  message: '您有矿机超过168小时未领取，【该矿机】的开启时间和截止时间都自动延后了[当前时间-上次领取时间或开机时间]，但总产不变，现在上次领取时间已经被系统自动设置成[当前时间]，矿机需要重新启动，再过24~168小时再领取就又会有收益。'
							}).then(() => {
							  // on close
							  //_this.getMyPastMachinesReceipt();
							});
						}else{
							/* _this.getMyPastMachinesReceipt(); */
						}
					}
				})
			},
			getAssistMaintainInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistMaintainInfo, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						// console.log('securityCode4Web',res.data);
						let maintainEndTime = _this.$utils.getTime(res.data.maintainEndTime);
						let nowTime = _this.$utils.getTime(new Date());
						if(maintainEndTime>nowTime){
							localStorage.setItem('maintainInfo',JSON.stringify(res.data));
							_this.$router.push("/maintain");
						}else{
							_this.getSecurityCode();
						}
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getSecurityCode(){
				let _this = this;
				let params = {
					mobilePhone:_this.form.phone
				}
				if(_this.$utils.hasNull(params)){
					Dialog.alert({
					  title: '系统提示',
					  message: '请先填写手机号'
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.getSCLoading = true;
				_this.$ajax.ajax(_this.$api.getSecurityCode, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						// console.log('securityCode4Web',res.data);
						_this.getInitCode = res.data;
						let initCode = _this.$JsEncrypt.decrypt(_this.getInitCode.initCode);
						_this.securityCode = _this.$utils.getSC(initCode);
						//_this.initEmail();
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(res){
					_this.getSCLoading = false;
				})
			},
			getUserFreezeInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserFreezeByUserId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userFreezeInfo = res.data;
						if(_this.userFreezeInfo==null){
							Dialog.alert({
							  title: '系统提示',
							  message: '您的账号被系统检测存在刷号现象，已被冻结。',
							}).then(() => {
							  // on close
							});
						}else{
							//'您的账号异常或暂时被冻结，原因：' + _this.userFreezeInfo.reason + '。need_ticket',
							Dialog.alert({
							  title: '系统提示',
							  message: `您的账号异常或被冻结，原因：${_this.userFreezeInfo.reason}。`
							}).then(() => {
							  // on close
							});
						}
					}else{
						_this.$toast(res.message);
					}
				})
			},
			logout(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.$toast(res.message);
						localStorage.removeItem('_USERINFO_');
						// localStorage.clear();//若不允许多账号登录，请把这个给去掉
						// console.log("_this.$cookies.keys()",_this.$cookies.keys());
						// _this.$cookies.remove('_USERINFO_');
						// _this.$cookies.remove('buyAndSellInfo');
						_this.$cookies.remove('userId');
						_this.$cookies.remove('token');
						// console.log("_this.$cookies.keys()",_this.$cookies.keys());
					}
				},function(){
					//_this.$router.replace('login');
				})
			},
			isRememberChange(val){
				let _this = this;
				_this.isRemember = val;
			},
			loginBtn(){
				let _this = this;
				let params = {
					userName: _this.form.phone.replace(/ /g,""),
					password: _this.form.password.replace(/ /g,""),
					securityCode: _this.form.securityCode.toLowerCase().replace(/ /g,"")
				}
				//请不要操作多账号
				//_this.judgeMoreAccount();
				let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						Dialog.alert({
						  title: '系统提示',
						  message: _this.$api.oneAccount
						}).then(() => {
						  // on close
						});
						return;
					}
				}
				
				if(_this.$utils.hasNull(params)){
					_this.$toast('系统提示:请填写完整信息');
					return;
				}
				if(_this.$utils.hasVal(_this.errorHint)){
					_this.$toast('系统提示:请按要求填写信息');
					return;
				}
				params.password = _this.$JsEncrypt.encrypt(_this.form.password);
				// console.log('params',params);
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.loginUser, 'GET', params, function(res) {
					// console.log('res', res);
					_this.isLoading = false;
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userInfo = res.data.assistUserInfoVo4Web;
						_this.$cookies.remove('userId');
						_this.$cookies.set("userId", _this.userInfo.userId,60*60*72);
						_this.$cookies.remove('token');
						_this.$cookies.set('token',res.data.token,60*60*72);
						_this.$cookies.remove('hasNoticeList4Swipe');
						//登录后手机号缓存到本地，每次登录免得继续输入手机号，提高用户体验
						localStorage.setItem('_USERINFO_',JSON.stringify(_this.userInfo));
						localStorage.setItem('mobilePhone',_this.userInfo.mobilePhone);
						if(_this.isRemember){
							localStorage.setItem('password',_this.form.password.replace(/ /g,""));
						}else{
							localStorage.removeItem('password');
						}
						if(_this.userInfo.accountStatus == 1){
							_this.getUserFreezeInfo();
						}else{
							//_this.$router.replace("/home");
							_this.let48HMachinesStop();
							_this.$router.replace("/home");
						}
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						  _this.getSecurityCode();
						});
					}
				},function(res){
					// console.log("complate",res);
					_this.isLoading = false;
				})
			},
			validate(key){
				let _this = this;
				if(key == 'phone') {
					if(_this.$reg.phone2.test(_this.form.phone)){
						_this.errorHint.phone = '';
						//_this.getSecurityCode();
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password.replace(/ /g,""))){
						_this.errorHint.password = '';
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			}
		}
	}
</script>