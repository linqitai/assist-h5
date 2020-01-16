<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.loginBox{
		padding: $boxPadding1;
		color: $mainTextColor;
		background-color: $main-bg-color;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y: scroll;
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
				&::last-child{
					border-bottom: 1px solid #BABABA !important;
				}
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
		<!-- <div class="welcomeText">欢迎来到帮扶链</div> -->
		<div class="logoBox">
			<img src="../../assets/image/LOGO.png" alt="">
		</div>
		<div class="welcomeText textIndent">{{welcomeText}}</div>
		<div class="formBox">
			<van-cell-group :border="isNo">
				<div class="labelText">账号</div>
				<van-field v-model="form.phone" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
				<div class="labelText">密码</div>
				<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
				<div class="labelText">验证码</div>
				<van-field v-model="form.securityCode" center clearable placeholder="请输入右边的图形验证码">
					<van-button slot="button" size="small" type="primary">{{securityCode}}</van-button>
				</van-field>
			</van-cell-group>
		</div>
		<div class="sureBox">
			<div class="tip">点击登录即表示您同意<span class="agreement" @click="$router.push('agreement')">《服务协议》</span><span class="forget" @click="forget">忘记密码？</span></div>
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" :loading="isLoading" @click="loginBtn" loading-type="spinner">登  录</van-button>
			<div class="placeholderLine10"></div>
			<!-- <van-button color="inherit" size="normal" :block="true">手机号已更换，用秘钥登录</van-button> -->
			<!-- <van-button color="inherit" size="normal" :block="true">手机号已更换，用邮箱登录</van-button> -->
			<div class="tip4model3">
				Tip：您若已经参与了内排注册，登录密码初始化为所注册的手机号。
			</div>
		</div>
	</div>
</template>

<script>
	// import {setCookie} from '@/assets/js/utils.js'
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				welcomeText:"",
				isNo:false,
				securityCode:'love',
				form:{
					phone:'',
					password:'',
					securityCode:''
				},
				placeholder:{
					phone:'请填写11位登录手机号',
					password:'请填写6~16位登录密码',
					securityCode:'请填写6位验证码'
				},
				errorHint:{
					phone:'',
					password:'',
					securityCode:''
				},
				loginValidate:true,
				isLoading:false,
				cookiesTime: 60 * 60 * 24,
				userFreezeInfo:'',
				getInitCode:''
			}
		},
		created() {
			let _this = this;
			_this.form.phone = localStorage.getItem("mobilePhone");
			// console.log(_this.form.phone,'_this.form.phone')
			_this.welcomeText = _this.$api.welcomeText;
			_this.getSecurityCode();
		},
		methods:{
			forget(){
				let _this = this;
				let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != localStorage.getItem("mobilePhone")){
						_this.$toast("请不要操作多账号");
						return;
					}
				}
				_this.$router.push('forgetPassword');
			},
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				//alert(province);
			},
			getSecurityCode(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getSecurityCode, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						// console.log('securityCode4Web',res.data);
						_this.getInitCode = res.data;
						let initCode = _this.$JsEncrypt.decrypt(_this.getInitCode.initCode);
						_this.securityCode = _this.$utils.getSC(initCode);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getUserFreezeInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserFreezeByUserId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userFreezeInfo = res.data;
						Dialog.alert({
						  title: '系统提示',
						  message: '您的账号异常或暂时被冻结，原因：' + _this.userFreezeInfo.reason + '。需找省市代理或客服解除异常或解冻。',
						}).then(() => {
						  // on close
						});
					}else{
						_this.$toast(res.message);
					}
				})
			},
			loginBtn(){
				let _this = this;
				let params = {
					userName: _this.form.phone,
					password: _this.form.password,
					securityCode: _this.form.securityCode.toLowerCase()
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('系统提示:账号或密码不能为空');
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
						// if(_this.$cookies.isKey("userId")){
						// 	if(_this.$cookies.get("userId")!=res.data.assistUserInfoVo.userId){
						// 		_this.$toast("请不要多账号登录");
						// 		return;
						// 	}
						// }
						let userInfo = res.data.assistUserInfoVo4Web;
						/* alert("userInfo1:" + JSON.stringify(userInfo)); */
						/* _this.getBuyAndSellInfo(userInfo.userId); */
						_this.$cookies.set("userId", userInfo.userId, _this.$api.cookiesTime);
						_this.$cookies.set('token',res.data.token, _this.$api.cookiesTime);
						//登录后手机号缓存到本地，每次登录免得继续输入手机号，提高用户体验
						localStorage.setItem('_USERINFO_',JSON.stringify(userInfo));
						/* alert("userInfo2:" + ); */
						localStorage.setItem('mobilePhone',userInfo.mobilePhone);
						if(userInfo.accountStatus == 1){
							_this.getUserFreezeInfo();
						}else{
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
					if(_this.$reg.phone.test(_this.form.phone)){
						_this.errorHint.phone = '';
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password)){
						_this.errorHint.password = '';
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode)){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			}
		}
	}
</script>