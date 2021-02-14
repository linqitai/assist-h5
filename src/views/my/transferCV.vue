<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.transferCV{
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
		.transferPageCV{
			color: $mainTextColor;
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.van-field__label{
				width: 70px !important;
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
	<div class="transferCV">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				定向转让贡献值
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPageCV" v-if="userInfo.contributionValue">
			<div class="placeholderLine10"></div>
			<!-- 贡献值:{{userInfo.contributionValue.toFixed(2)}}点 -->
			<div class="paddingWing tip4model3">当前拥有 贡献值 {{userInfo.contributionValue.toFixed(2)}} 个</div>
			<div class="placeholderLine10"></div>
			<van-cell-group>
				<van-field v-model="form4AppointDeal.transferAmount" required clearable label="转让数量" placeholder="请填写转让数量" @blur="validate4AppointDeal('transferAmount')" :error-message="errorInfo4AppointDeal.transferAmount"/>
				<van-field v-model="form4AppointDeal.mobilePhone" required clearable label="手机号" placeholder="请粘贴对方的手机号" maxlength="11" @blur="validate4AppointDeal('mobilePhone')" :error-message="errorInfo4AppointDeal.mobilePhone"/>
				<!-- <van-field v-model="form4AppointDeal.idCard" required clearable label="身份证号" placeholder="请填写自己的身份证号" maxlength="18" @blur="validate4AppointDeal('idCard')" :error-message="errorInfo4AppointDeal.idCard"/> -->
				<van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写安全密码"/>
			</van-cell-group>
			<!-- <div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的留言标题" />
			</div> -->
			<div class="placeholderLine10"></div>
			<!-- <div class="paddingWing tip4model3">
				<b class="textBold">定向转让贡献值的规则：</b><br>
				1.定向转让贡献值暂时只对服务商和代理开放。<br>
				2.代理转让贡献值的条件：个人算力需要大于等于3G，团队算力大于等于30G，买入矿石数量大于等于100个。<br>
				3.定向转让贡献值暂时不收手续费。<br>
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
	export default {
		data() {
			return {
				showTipModel:false,
				form4AppointDeal:{
					transferAmount:'',
					mobilePhone:"",
					idCard:"",
					safePassword:"",
				},
				errorInfo4AppointDeal:{
					transferAmount:"",
					mobilePhone:"",
					idCard:"",
					safePassword:"",
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
				}
			},
			submit(){
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `请确定是否要给对方转${_this.form4AppointDeal.transferAmount}个贡献值？`
				}).then(() => {
				  // on confirm
				  let params = {
				  	num: _this.form4AppointDeal.transferAmount,
				  	mobilePhone: _this.form4AppointDeal.mobilePhone,
				  	/* idCard: _this.form4AppointDeal.idCard, */
				  	safePassword: _this.form4AppointDeal.safePassword,
				  }
				  if(_this.$utils.hasNull(params)){
				  	_this.$toast('请填写完整信息');
				  	return;
				  }
				  if(_this.$utils.hasVal(_this.errorInfo4AppointDeal)){
				  	_this.$toast('请按要求填写信息');
				  	return;
				  }
				  if(_this.userInfo.isAgent<=0&&_this.userInfo.manType<2){
					  Dialog.alert({
					    title: '系统提示',
					    message: '您暂无转让贡献值的权限'
					  }).then(() => {
					    // on close
					  });
					  return;
				  }
				  params.safePassword = _this.$JsEncrypt.encrypt(_this.form4AppointDeal.safePassword);
				  _this.loading = true;
				  _this.$ajax.ajax(_this.$api.transferCV, 'POST', params, function(res) {
				  	_this.loading = false;
				  	if (res.code == _this.$api.CODE_OK) {
				  		_this.$toast('转让成功');
				  		_this.$utils.formClear(_this.form4AppointDeal);
				  		_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
				  		_this.$cookies.set("tab_name_book","contribution",_this.$api.cookiesTime);
				  		_this.$router.push({
				  			path: `/myBook`
				  		});
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
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
		}
	}
</script>
