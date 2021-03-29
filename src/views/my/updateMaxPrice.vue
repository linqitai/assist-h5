<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.updateMaxPrice{
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
	<div class="updateMaxPrice">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				{{$route.name}}
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPageCV">
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3">
				{{statistics.currentBuyNum}} {{statistics.buyNum4Last3Day}} {{statistics.currentPriceBuyNum}} {{statistics.currentPriceBillNum}}
			</div>
			<div class="placeholderLine10"></div>
			<van-cell-group>
				<van-field v-model="form.maxPrice" type="number" required clearable label="单价" placeholder="请填写转让数量"/>
				<van-field v-model="form.safePassword" type="password" required clearable label="安全密码" placeholder="请填写安全密码"/>
			</van-cell-group>
			<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提 交</van-button>
			<div class="placeholderLine10"></div>
			
			<div class="paddingWing tip4model3">
				当前签到释放额度比例 {{statistics.releaseRatio}}
			</div>
			<div class="placeholderLine10"></div>
			<van-cell-group>
				<van-field v-model="form2.releaseRatio" type="number" required clearable label="签到释放额度比例" placeholder="请填写签到释放额度比例"/>
				<van-field v-model="form2.safePassword" type="password" required clearable label="安全密码" placeholder="请填写安全密码"/>
			</van-cell-group>
			<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit4updateParameter4ReleaseRatio">提 交</van-button>
			<div class="placeholderLine10"></div>
			<van-cell-group>
				<van-field v-model="form3.mobilePhone" type="number" required clearable label="手机号" placeholder="请填写对方手机号"/>
				<van-field v-model="form3.limit" type="number" required clearable label="补额度" placeholder="请填写补多少额度"/>
				<van-field v-model="form3.safePassword" type="password" required clearable label="安全密码" placeholder="请填写安全密码"/>
			</van-cell-group>
			<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit4AddLimit">提 交</van-button>
			<div class="placeholderLine10"></div>
			<!-- <div class="paddingWing tip4model3">
				<b class="textBold">定向转让贡献值的规则：</b><br>
				1.定向转让贡献值暂时只对服务商和代理开放。<br>
				2.代理转让贡献值的条件：个人算力需要大于等于3G，团队算力大于等于30G，买入矿石数量大于等于100个。<br>
				3.定向转让贡献值暂时不收手续费。<br>
			</div> -->
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
	import { Dialog,Toast } from 'vant';
	export default {
		data() {
			return {
				showTipModel:false,
				form:{
					maxPrice:'',
					safePassword:''
				},
				form2:{
					releaseRatio:'',
					safePassword:''
				},
				form3:{
					mobilePhone:'',
					limit:'',
					safePassword:''
				},
				userInfo:"",
				loading:false,
				statistics:''
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			_this.getSetMaxPriceStatistics();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getSetMaxPriceStatistics(){
				let _this = this;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.getSetMaxPriceStatistics, 'GET', null, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						_this.statistics = res.data;
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
					Toast.clear();
				})
			},
			submit4AddLimit(){
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `请问是否确定要给对方补额度？`
				}).then(() => {
				  // on confirm
				  let params = {
					mobilePhone: _this.form3.mobilePhone,
				  	limit: _this.form3.limit,
				  	safePassword: _this.form3.safePassword,
				  }
				  if(_this.$utils.hasNull(params)){
				  	_this.$toast('请填写完整信息');
				  	return;
				  }
				  params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				  _this.loading = true;
				  _this.$ajax.ajax(_this.$api.addLimit, 'POST', params, function(res) {
				  	_this.loading = false;
				  	if (res.code == _this.$api.CODE_OK) {
				  		_this.$toast('操作成功');
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
			submit4updateParameter4ReleaseRatio(){
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `请问是否确定要修改单价？`
				}).then(() => {
				  // on confirm
				  let params = {
				  	releaseRatio: _this.form2.releaseRatio,
				  	safePassword: _this.form2.safePassword,
				  }
				  if(_this.$utils.hasNull(params)){
				  	_this.$toast('请填写完整信息');
				  	return;
				  }
				  params.safePassword = _this.$JsEncrypt.encrypt(_this.form2.safePassword);
				  _this.loading = true;
				  _this.$ajax.ajax(_this.$api.updateParameter4ReleaseRatio, 'POST', params, function(res) {
				  	_this.loading = false;
				  	if (res.code == _this.$api.CODE_OK) {
				  		_this.$toast('修改成功');
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
			submit(){
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `请问是否确定要修改单价？`
				}).then(() => {
				  // on confirm
				  let params = {
				  	maxPrice: _this.form.maxPrice,
				  	safePassword: _this.form.safePassword,
				  }
				  if(_this.$utils.hasNull(params)){
				  	_this.$toast('请填写完整信息');
				  	return;
				  }
				  params.safePassword = _this.$JsEncrypt.encrypt(_this.form.safePassword);
				  _this.loading = true;
				  _this.$ajax.ajax(_this.$api.updateParameter, 'POST', params, function(res) {
				  	_this.loading = false;
				  	if (res.code == _this.$api.CODE_OK) {
				  		_this.$toast('修改成功');
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
