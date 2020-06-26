<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.initPassword{
		padding: $boxPadding1;
		color: $mainTextColor;
		background-color: $main-bg-color;
		position: absolute;
		top: $headerHeight;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y: scroll;
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
</style>

<template>
	<div class="initPassword">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				给他人初始密码
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<van-cell-group :border="isNo">
			<div class="labelText">手机号</div>
			<van-field v-model="form.mobilePhone" clearable :placeholder="placeholder.mobilePhone" @blur="validate('mobilePhone')" :error-message="errorHint.mobilePhone" maxlength="11"/>
			<div class="labelText">身份证号</div>
			<van-field v-model="form.idCard" clearable :placeholder="placeholder.idCard" @blur="validate('idCard')" :error-message="errorHint.idCard" maxlength="18"/>
			
		</van-cell-group>
		<div class="sureBox">
			<!-- <div class="tip">点击注册即表示您同意<span class="agreement">《服务协议》</span></div> -->
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" @click="initPassWordBtn" :loading="isLoading" loading-type="spinner">初始化</van-button>
			<div class="placeholderLine"></div>
			<div class="placeholderLine"></div>
			<div class="placeholderLine"></div>
			<!-- <van-button color="inherit" size="normal" :block="true" @click="loginBtn">已有账号，去登录</van-button> -->
			<div class="tip4model3">
				Tip：<br>
				初始化密码之前，请客服先通过手机号在微信搜索对方，若搜索得到对方的微信，就代表对方是本人，给于修改，否者就不是本人，不给修改。<br>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				isNo:false,
				form:{
					mobilePhone:'',
					idCard:'',
					password:'',
					password2:'',
					validateCode:'',
					shareCode:''
				},
				placeholder:{
					mobilePhone:'请填写对方的手机号',
					idCard:'请填写对方的身份证号',
				},
				errorHint:{
					phone:'',
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
			
		},
		methods:{
			back() {
				this.$router.replace('my');
			},
			loginBtn(){
				this.$router.push('login');
			},
			initPassWordBtn(){
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确认',
				  message: `请再次确认是否要给对方初始化密码？`
				}).then(() => {
					let params = {
						mobilePhone:_this.form.mobilePhone,
						idCard:_this.form.idCard
					}
					if(_this.$utils.hasNull(params)){
						_this.$toast('系统提示：请填写完整信息');
						return;
					}
					_this.isLoading = true;
					console.log('params', params);
					_this.$ajax.ajax(_this.$api.initPassWord, 'POST', params, function(res) {
						// console.log('res', res);
						if (res.code == _this.$api.CODE_OK) { // 200
							/* localStorage.setItem("mobilePhone",_this.form.phone); */
							_this.$toast('初始化成功');
						}else{
							Dialog.alert({
								title: "系统提示",
								confirmButtonText:'哦哦',
								message: res.message
							}).then(() => {
							  // on confirm
							})
						}
					},function(res){
						// console.log("complate",res);
						_this.isLoading = false;
					})
				})
			},
			validate(key){
				let _this = this;
				if(key == 'mobilePhone') {
					if(_this.$reg.phone2.test(_this.form.mobilePhone)){
						_this.errorHint.mobilePhone = '';
					}else{
						_this.errorHint.mobilePhone = _this.placeholder.mobilePhone;
					}
				}else if(key == 'idCard'){
					if(_this.$reg.idCard.test(_this.form.idCard)){
						_this.errorHint.idCard = '';
					}else{
						_this.errorHint.idCard = _this.placeholder.idCard;
					}
				}
			},
		}
	}
</script>