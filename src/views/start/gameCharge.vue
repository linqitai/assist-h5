<style lang="scss" scoped="">
	@import '~@/assets/scss/index.scss';
	.gameCharge{
		color: $mainTextColor;
		width: 100%;
		box-sizing: border-box;
		.formHeader{
			padding: $boxPadding1;
			line-height: 1.4em;
			// background-color: $main-box-fh-bg-color;
			color: $mainTextColor;
			.logoBox{
				position: relative;
				img{
					width: 100%;
				}
			}
		}
	}
</style>

<template>
	<div class="gameCharge">
		<div class="formHeader">
			<div class="red2 f-14">若充值月卡和礼品若没到账，请找【客服】提供【账号和角色昵称】来领取,若是其他(元宝)奖励只要填写对应金额即可</div>
		</div>
		<div class="line2pxbgcolor"></div>
		<div class="formBox">
			<iframe :src="url" width="100%" height="800" frameborder="0" scrolling="auto" id="iframename" name="iframename"></iframe>
		</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				url:"",
				images: [
					this.$api.domainName + '/image/banner/banner0058.jpg'
				],
				getSCLoading:false,
				interval:180,
				time:180,
				welcomeText:'创建账号',
				isNo:false,
				securityCode:'love',
				form:{
					phone:'',
					password:'',
					password2:'',
					securityCode:'',
				},
				placeholder:{
					phone:'请填写绑定了微信的手机号',
					phone2:'请填写与上面一致的注册手机号',
					password:'请填写6~16位登录密码',
					password2:'请填写与上面一致的登录密码',
					validateCode:'请输入短信验证码',
					securityCode:'请输入右边的图形验证码',
					shareCode:'请填写推荐码'
				},
				errorHint:{
					phone:'',
					phone2:'',
					password:'',
					password2:'',
					validateCode:'',
					shareCode:'',
					securityCode:''
				},
				registerValidate:true,
				isLoading:false,
				showTipModel:false,
				isShortMessageDisabled:false,
				isWeixin:false,
				helpList:[],
				mobilePhone:"",
				id:""
			}
		},
		/* watch:{
			'time'(now,old){
				let _this = this;
				console.log(now,old);
			},
		}, */
		created() {
			let _this = this;
			_this.id = _this.$route.query.id;
			if(_this.id == 1){
				_this.url = 'http://www.8gesy.com/payment/fenqu.html?id=B7B3C61579860171869B454FC311597F';
			}else if(_this.id == 2){
				_this.url = 'http://www.8gesy.com/payment/fenqu.html?id=3FE5A5A1DD88F877BF7DE38667435CC2';
			}else{
				_this.url = 'http://www.8gesy.com/payment/group.html?id=00887D6F29EE5293';
			}
		},
		//倒计时方法
		countDown4Time(){
			let lastGetShortMessageCode = _this.$cookies.get('lastGetShortMessageCode');
			if(!_this.$utils.isNUll(lastGetShortMessageCode)){
				let lastTime = parseInt(_this.$utils.getTime(lastGetShortMessageCode)/1000);
				let nowTime = parseInt(_this.$utils.getTime(new Date())/1000);
				let thisStartTime = nowTime - lastTime;
				if(thisStartTime>0){
					_this.time = (_this.interval - thisStartTime);
					_this.isShortMessageDisabled = true;
					_this.setTimeInterval();
				}else{
					_this.isShortMessageDisabled = false;
				}
			}
		},
		methods:{
			loginBtn(){
				this.$router.push('login');
			},
			bsTip(){
				let _this = this;
				//_this.isWeixin = _this.$utils.isWeixin();
			},
			shortMessageBtn(){
				let _this = this;
				if(_this.$utils.isNUll(_this.form.phone)){
					_this.$toast('请先填写注册手机号');
				}else{
					_this.showTipModel = true;
					_this.getSecurityCode();
				}
			},
			getSecurityCode(){
				let _this = this;
				let params = {
					mobilePhone:_this.form.phone
				}
				console.log('params',params);
				if(_this.$utils.hasNull(params)){
					Dialog.alert({
					  title: '系统提示',
					  message: '请先填写注册手机号'
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.getSCLoading = true;
				_this.$ajax.ajax(_this.$api.getSecurityCode, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						// console.log('securityCode4Web',res.data);
						_this.getInitCode = res.data;
						let initCode = _this.$JsEncrypt.decrypt(_this.getInitCode.initCode);
						_this.securityCode = _this.$utils.getSC(initCode);
					}else{
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
			setTimeInterval(){
				let _this = this;
				let tv = setInterval(function(){
					_this.time = _this.time - 1;
					if(_this.time<=0){
						clearInterval(tv);
						_this.isShortMessageDisabled = false;
					}
				},1000)
			},
			verifySecurityCodeBtn(){
				let _this = this;
				let params = {
					securityCode: _this.form.securityCode
				}
				if(params.securityCode.length!=4){
					_this.$toast('请正确填写图形验证码');
					return;
				}
				//console.log('params',params);
				_this.$ajax.ajax(_this.$api.verifySecurityCode, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						console.log("OK");
						_this.isShortMessageDisabled = true;
						//要缓存上次请求的时间，然后设置time的值，避免刷新后可以立马请求
						_this.time = 180;
						_this.setTimeInterval();
						let now = _this.$utils.getDateTime(new Date());
						_this.$cookies.set('lastGetShortMessageCode',now,60*3);
						//console.log('lastGetShortMessageCode',_this.$cookies.get('lastGetShortMessageCode'));
						//这里请求短信验证码
					}else{
						_this.$toast(res.message);
					}
				},function(res){
					_this.showTipModel = false;
				})
			},
			registerBtn(){
				let _this = this;
				//console.log('form',this.form);
				/* let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						// _this.$toast("一机一号，切勿违规操作");
						Dialog.alert({
						  title: '系统提示',
						  message: _this.$api.oneAccount,
						}).then(() => {
						  // on close
						});
						return;
					}
				} */
				let params = {
					userId: _this.userInfo.userId,
					account:_this.form.phone.replace(/ /g,""),
					password:_this.form.phone.replace(/ /g,""),
					/* confirmPassword:_this.form.password2.replace(/ /g,""), */
					/* securityCode: _this.form.securityCode.toLowerCase().replace(/ /g,"") */
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				/* if(params.password != params.confirmPassword){
					_this.$toast('2次密码不一致');
					return;
				} */
				/* delete params.confirmPassword;
				params.password = _this.$JsEncrypt.encrypt(_this.form.password); */
				// console.log('params',params);
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.createGameAccount, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.$toast('创建账号成功');
						_this.$router.push('/home');
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.isLoading = false;
				})
			},
			validate(key){
				let _this = this;
				//TSBK1taWQTpNjOkisQDHio8Vdiv94nvYRCE2JgEKbck=
				//Wu8v/5SEYcEBR/YGGLYAwGR4HkBmXB5P+Tf4W7CzXeA=
				if(key == 'phone') {
					//console.log('_this.form.phone',_this.form.phone)
					if(_this.$reg.phone2.test(_this.form.phone)){
						_this.errorHint.phone = '';
						// _this.getSecurityCode();
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
					}
				}else if(key == 'phone2') {
					//console.log('_this.form.phone',_this.form.phone)
					if(_this.form.phone==_this.form.phone2){
						_this.errorHint.phone2 = '';
						// _this.getSecurityCode();
					}else{
						_this.errorHint.phone2 = _this.placeholder.phone2;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password.replace(/ /g,""))){
						_this.errorHint.password = '';
						/* if(_this.form.password.replace(/ /g,"").length>16){
							_this.errorHint.password = _this.$reg.passwordHint;
						} */
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
					}
				}else if(key == 'password2'){
					if(_this.form.password2 == _this.form.password.replace(/ /g,"")){
						_this.errorHint.password2 = '';
					}else{
						_this.errorHint.password2 = _this.placeholder.password2;
					}
				}else if(key == 'validateCode'){
					if(_this.$reg.validateCode.test(_this.form.validateCode.replace(/ /g,""))){
						_this.errorHint.validateCode = '';
					}else{
						_this.errorHint.validateCode = _this.$reg.validateCodeHint;
					}
				}else if(key == 'shareCode') {
					if(_this.$reg.shareCode.test(_this.form.shareCode)){
						_this.errorHint.shareCode = '';
					}else{
						_this.errorHint.shareCode = _this.$reg.shareCodeHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			},
		}
	}
</script>