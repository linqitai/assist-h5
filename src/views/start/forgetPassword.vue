<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.forgetPassword{	
		color: $mainTextColor;
		@include pageHaveHeight4Scroll();
		width: 100%;
		box-sizing: border-box;
		padding: $boxPadding1;
		.welcomeText{
			font-size: 1.5rem;
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
		.van-cell::after{
			border: none;
		}
		.labelText{
			margin-top: 20px;
		}
		.sureBox{
			margin-top: 1.25rem;
			.tip{
				margin: 1.25rem 0;
				font-size: 0.812rem
			}
			.agreement{color: $main-adorn-color;}
		}
	}
	.van-cell__value,.van-cell__value--alone,.van-field__control{
		color: $mainTextColor !important;
	}
	.van-field__error-message{
		color: $main-adorn-color !important;
	}
</style>

<template>
	<div class="forgetPassword">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				忘记密码
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<van-cell-group :border="isNo">
			<div class="labelText">手机号</div>
			<van-field v-model="form.phone" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
			<div class="labelText">登录密码</div>
			<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
			<div class="labelText">确认密码</div>
			<van-field v-model="form.password2" type="password" clearable :placeholder="placeholder.password2" @blur="validate('password2')" :error-message="errorHint.password2"/>
			<div class="labelText">短信验证码</div>
			<van-field v-model="form.validateCode" clearable :placeholder="placeholder.validateCode" @blur="validate('validateCode')" :error-message="errorHint.validateCode">
				<van-button slot="button" size="small" color="#ffae00">发送验证码</van-button>
			</van-field>
		</van-cell-group>
		<div class="sureBox">
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" @click="registerBtn" :loading="isLoading" loading-type="spinner">提 交</van-button>
			<div class="placeholderLine10"></div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	export default {
		data() {
			return {
				isNo:false,
				form:{
					phone:'',
					password:'',
					password2:'',
					validateCode:'',
				},
				placeholder:{
					phone:'请填写11位登录手机号',
					password:'请填写6~16位登录密码',
					password2:'请填写与上面一致的登录密码',
					validateCode:'请输入短信验证码',
				},
				errorHint:{
					phone:'',
					password:'',
					password2:'',
					validateCode:'',
				},
				registerValidate:true,
				isLoading:false,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			// _this.initializeerrorHint();
			// _this.initializeTabActiveName();
			/* let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				console.log('userInfo',_this.userInfo);
				_this.form.shareCode = _this.userInfo.shareCode;
				console.log('_this.form.shareCode',_this.form.shareCode);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			} */
			_this.form.phone = localStorage.getItem("mobilePhone");
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			loginBtn(){
				this.$router.push('login');
			},
			registerBtn(){
				console.log('form',this.form);
				let _this = this;
				let params = {
					telephone:_this.form.phone,
					password:_this.form.password,
					confirmPassword:_this.form.password2,
					shareCode:_this.form.shareCode
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(params.password != params.confirmPassword){
					_this.$toast('2次密码不一致');
					return;
				}
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.register, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						localStorage.setItem("mobilePhone",_this.form.phone);
						_this.$toast('注册成功');
						_this.$router.push('/login');
					}else{
						_this.$toast(res.message);
					}
					_this.isLoading = false;
				})
			},
			validate(key){
				let _this = this;
				if(key == 'phone') {
					console.log('_this.form.phone',_this.form.phone)
					if(_this.$reg.phone.test(_this.form.phone)){
						_this.errorHint.phone = '';
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
						_this.registerValidate = false;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password)){
						_this.errorHint.password = '';
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
						_this.registerValidate = false;
					}
				}else if(key == 'password2'){
					if(_this.form.password2 == _this.form.password){
						_this.errorHint.password2 = '';
					}else{
						_this.errorHint.password2 = _this.placeholder.password2;
						_this.registerValidate = false;
					}
				}else if(key == 'validateCode'){
					if(_this.$reg.validateCode.test(_this.form.validateCode)){
						_this.errorHint.validateCode = '';
					}else{
						_this.errorHint.validateCode = _this.$reg.validateCodeHint;
						_this.registerValidate = false;
					}
				}
			},
		}
	}
</script>