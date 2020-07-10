<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.transferT{
		font-size: 0.75rem;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: $main-box-color;
		z-index: 2;
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $mainTextColor;
			font-size: 0.75rem !important;
		}
		/* [class*=van-hairline]::after{
			border: none !important;
		} */
		/* .van-field__control{
			color: $mainTextColor;
		} */
		/* .van-cell,.van-cell-group{
			background-color: inherit !important;
		} */
		.transferPageT{
			color: $mainTextColor;
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.van-field__label{
				width: 100px !important;
			}
			/* .van-cell,.van-cell__value, .van-cell__value--alone, .van-field__control,.van-cell {
			    color: $mainTextColor !important;
			} */
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
				/* .van-cell__value, .van-cell__value--alone, .van-field__control {
				    color: $mainTextColor !important;
				} */
				.flex{
					flex: 1;
					padding-left: 16px;
				}
				.align-right{
					text-align: right;
					align-self: right;
					align-items: right;
					justify-content: right;
				}
			}
			/* .myCell2{
				height: 200px;
				border-bottom: 1px solid $main-bg-color;
			} */
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="transferT">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				帮他人修改支付宝
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPageT">
			<!-- <div class="placeholderLine10"></div> -->
			<!-- 贡献值:{{userInfo.contributionValue.toFixed(2)}}点 -->
			<!-- <div class="paddingWing tip4model3">当前拥有 帮扶券 {{userInfo.platformTicket.toFixed(2)}} 个</div>
			<div class="placeholderLine10"></div> -->
			<div class="paddingWing" v-if="thisUserInfo">
				<div class="placeholderLine10"></div>
				<!-- <van-field v-model="thisUserInfo.realName" label="姓名" />
				<van-field v-model="thisUserInfo.idCard" label="旧的身份证号" /> -->
				<div class="margT10">
					姓名 {{$JsCrypto.myDecode1(thisUserInfo.realName)}}
				</div>
				<!-- <div class="margT10">
					旧的身份证号 {{$JsCrypto.myDecode1(thisUserInfo.idCard)}}
				</div> -->
				<div class="placeholderLine10"></div>
			</div>
			<van-cell-group>
				<!-- <div v-if="thisUserInfo">
					<van-field v-model="thisUserInfo.realName" label="对方姓名" />
					<van-field v-model="thisUserInfo.idCard" label="对方身份证号" />
				</div> -->
				<!-- <van-field v-model="form4AppointDeal.transferAmount" required clearable label="转让数量" placeholder="请填写转让数量" @blur="validate4AppointDeal('transferAmount')" :error-message="errorInfo4AppointDeal.transferAmount"/> -->
				<van-field v-model="form4AppointDeal.mobilePhone" required clearable label="对方手机号" placeholder="请填写他人的手机号" maxlength="11" @blur="validate4AppointDeal('mobilePhone')" :error-message="errorInfo4AppointDeal.mobilePhone"/>
				<van-field v-model="form4AppointDeal.idCard" required clearable label="对方身份证号" placeholder="请填写他人的正确身份证号" maxlength="18" @blur="validate4AppointDeal('idCard')" :error-message="errorInfo4AppointDeal.idCard"/>
				<van-field v-model="form4AppointDeal.alipayNum" required clearable label="新的支付宝" placeholder="请填写他人新的支付宝号" maxlength="30" @blur="validate4AppointDeal('alipay')" :error-message="errorInfo4AppointDeal.alipayNum"/>
				<!-- <van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写安全密码"/> -->
			</van-cell-group>
			<!-- <div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的留言标题" />
			</div> -->
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3">
				<b class="textBold">修改支付宝的规则：</b><br>
				1.首先要让对方提供手持证件照。<br>
				2.让提供注册手机号和新的支付宝号、和身份证号，并核实新的支付宝号实名一致后即可修改，修改一次扣2个矿石的最高溢价手续费。<br>
			</div>
			<!-- <div class="paddingWing tip4model3" v-if="thisUserInfo">
				测试加解密：昵称解密后 {{$JsCrypto.myDecode1(thisUserInfo.nickName)}}
			</div> -->
			<div class="sureBtn">
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提 交</van-button>
			</div>
		</div>
		<!-- <van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="line text margT10 textCenter">
					省市代理拥有定向转让帮扶券的权限
				</div>
			</div>
		</van-dialog> -->
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				showTipModel:false,
				//定向交易
				form4AppointDeal:{
					mobilePhone:"",
					idCard:"",
					alipayNum:""
				},
				errorInfo4AppointDeal:{
					mobilePhone:"",
					idCard:"",
					alipayNum:""
				},
				option1: [
					{ text: '问题反馈', value: 0 },
					{ text: '意见建议', value: 1 },
					{ text: '我要告状', value: 2 },
					{ text: '其他类型', value: 3 }
				],
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userInfo:"",
				loading:false,
				thisUserInfo:''
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				//console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			validate4AppointDeal(key){
				let _this = this;
				if(key == 'transferAmount') {
					if(_this.form4AppointDeal[key]>=1&&_this.form4AppointDeal[key]<=100000){//这里判断单次卖出的数量是否合法,由于
						_this.errorInfo4AppointDeal.transferAmount = '';
					}else{
						_this.errorInfo4AppointDeal.transferAmount = "单次转让数量在1~100000之间";
					}
				}else if(key == 'mobilePhone'){
					if(_this.$reg.phone2.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.mobilePhone = '';
						_this.getUserInfo();
					}else{
						_this.errorInfo4AppointDeal.mobilePhone = "请正确粘贴对方的手机号";
					}
				}else if(key == 'idCard'){
					if(_this.$reg.idCard.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.idCard = '';
					}else{
						_this.errorInfo4AppointDeal.idCard = "请正确填写身份证号";
					}
				}else if(key == 'safePassword') {
					if(_this.$reg.safePassword.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.safePassword = '';
					}else{
						_this.errorInfo4AppointDeal.safePassword = "安全密码不超过20位，由'字母或数字或._'组成";
					}
				}else if(key == 'alipayNum') {
				if(_this.$reg.alipay.test(_this.form.alipayNum)){
					_this.errorInfo.alipayNum = '';
				}else{
					_this.errorInfo.alipayNum = _this.errorHint.alipayNum;
				}
			}
			},
			getUserInfo() {
				let _this = this;
				let params = {
					mobilePhone: _this.form4AppointDeal.mobilePhone
				}
				if(!_this.$reg.phone.test(params.mobilePhone)){
					_this.$toast('手机号格式有误');
					return;
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoByPhone4Service, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.thisUserInfo = res.data;
						//_this.$router.push({path:"my4Other",query:{lookUserId:res.data}});
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			submit(){
				//console.log("submit");
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `是否确定要给对方修改支付宝号？`
				}).then(() => {
				  // on confirm
				  //console.log('sure',_this.imagesList);
				  _this.showBuyDetailModel = false;
				  //这里调用确认付款接口
				  let params = {
				  	mobilePhone: _this.form4AppointDeal.mobilePhone,
				  	idCard: _this.form4AppointDeal.idCard,
					alipayNum: _this.form4AppointDeal.alipayNum,
				  }
				  //console.log('params',params);
				  if(_this.$utils.hasNull(params)){
				  	_this.$toast('请填写完整信息');
				  	return;
				  }
				  //console.log('_this.errorInfo4BuyBill',_this.errorInfo4BuyBill);
				  if(_this.$utils.hasVal(_this.errorInfo4AppointDeal)){
				  	_this.$toast('请按要求填写信息');
				  	return;
				  }
				  //params.safePassword = _this.$JsEncrypt.encrypt(_this.form4AppointDeal.safePassword);
				  _this.loading = true;
				  _this.$ajax.ajax(_this.$api.updateUserAlipay, 'POST', params, function(res) {
				  	_this.loading = false;
				  	if (res.code == _this.$api.CODE_OK) {
				  		_this.$toast('修改成功');
				  		_this.$utils.formClear(_this.form4AppointDeal);
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
					  _this.loading = false;
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
		}
	}
</script>
