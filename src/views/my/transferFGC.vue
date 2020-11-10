<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.transferFGC{
		font-size: 0.75rem;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		min-height: 100%;
		background-color: $main-bg-color;
		color: $main-box-text-color;
		z-index: 2;
		overflow-y:scroll;
		.van-field__error-message {
		    color: #ee0a22 !important;
		}
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $main-box-text-color;
			font-size: 0.75rem !important;
		}
		[class*=van-hairline]::after{
			border: none !important;
		}
		/* .van-field__control{
			color: $mainTextColor;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		} */
		.transferPageL{
			.van-field__label{
				width: 100px !important;
			}
			// .van-cell__value, .van-cell__value--alone, .van-field__control,.van-cell {
			//     color: #FFFFFF !important;
			// }
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
				// .van-cell__value, .van-cell__value--alone, .van-field__control {
				//     color: #FFFFFF !important;
				// }
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
			.myCell2{
				height: 200px;
				border-bottom: 1px solid $main-bg-color;
			}
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
	<div class="transferFGC">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				合成钻石
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPageL">
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3">今日可合成钻石所剩数量:{{assistParameterVo.todayTransferNum}}</div>
			<div class="paddingWing tip4model3">您当前拥有矿石{{userInfo.thisWeekMineral.toFixed(2)}}个,每合成一个钻石值需要花10个矿石和20个流通值</div>
			<div class="paddingWing tip4model3">单次合成数量在1~10之间,当前合成所需个人算力:{{assistParameterVo.transferNeedCp}}</div>
			<van-cell-group>
				<van-field v-model="form4AppointDeal.transferAmount" required clearable label="所用矿石数量" placeholder="请填写所用矿石数量" @blur="validate4AppointDeal('transferAmount')" :error-message="errorInfo4AppointDeal.transferAmount"/>
				<!-- <van-field v-model="form4AppointDeal.mobilePhone" required clearable label="对方手机号" placeholder="请填写对方的手机号" maxlength="11" @blur="validate4AppointDeal('mobilePhone')" :error-message="errorInfo4AppointDeal.mobilePhone"/> -->
				<!-- <van-field v-model="form4AppointDeal.agentPhone" required clearable label="担保代理" placeholder="请填写代理手机号" maxlength="11" @blur="validate4AppointDeal('agentPhone')" :error-message="errorInfo4AppointDeal.agentPhone"> -->
					<!-- <van-button slot="button" size="small" type="primary">自动分配</van-button> -->
				</van-field>
				<van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写自己的安全密码"/>
			</van-cell-group>
			<div class="placeholderLine10"></div>
			<!-- <div class="paddingWing tip4model3" v-html="$api.tipText4Safe"></div> -->
			<div class="placeholderLine10"></div>
			<!-- <div class="paddingWing tip4model3">
				<b class="textBold">定向转让矿石(会长)交易规则：</b><br>
				1.青铜及以上级别的工会会长才有权限给自己的3代伞下会员单向转让矿石（下次减产后可能只对白银及以上级别的工会会长开放该权限）。<br>
				2.转让手续费减半只收交易总金额10%的帮扶券。比如：交易总金额是200CNY，收20CNY价值的帮扶券作为手续费。该手续费，20%会用来做线下的公益事业(爱心帮扶活动)<br>
				3.交易后所剩矿石数不得少于2个，注册所赠送的2个矿石只能用来复投矿机。<br>
			</div> -->
			<!-- <div class="margT10 paddingWing tip4model3" v-html="tipText4AppointDeal"></div> -->
			<div class="placeholderLine40"></div>
			<div class="placeholderLine40"></div>
			<div class="sureBtn">
				<div class="placeholderLine4"></div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提 交</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,Toast } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				showTipModel:false,
				//定向交易
				form4AppointDeal:{
					transferAmount:'',
					safePassword:''
				},
				errorInfo4AppointDeal:{
					transferAmount:'',
					safePassword:''
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
				userId:"",
				loading:false,
				maxPrice:0,
				maxAddPrice:0,
				userInfo:'',
				curerntPlatformPrice:'',
				tipText4AppointDeal:'',
				guidancePrice:'',
				assistParameterVo:''
			}
		},
		components: {
			mHeader
		},
		computed:{
			getGuidancePrice() {
				let _this = this;
				let guidancePrice = _this.form4AppointDeal.transferAmount * _this.curerntPlatformPrice;
				_this.guidancePrice = guidancePrice.toFixed(2);
				return _this.guidancePrice;
			},
			getAssurePrice () {
				let _this = this;
				let assurePrice = Number(_this.form4AppointDeal.transferAmount) * Number(_this.form4AppointDeal.price);
				_this.form4AppointDeal.assurePrice = assurePrice.toFixed(2);
				return _this.form4AppointDeal.assurePrice;
			},
		},
		created() {
			let _this = this;
			//console.log("number:",(Number(7.12) - Number(6.11)).toFixed(2));
			_this.tipText4AppointDeal = _this.$api.tipText4AppointDeal;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
				localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token');
				_this.$cookies.remove('isRefreshDealInfo');
				_this.$cookies.remove('isRefreshUserInfo');
				_this.$cookies.remove('tab_raise_list');
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getAssistParameter4Web();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getAssistParameter4Web(){
				let _this = this;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.getAssistParameter4Web, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.assistParameterVo = res.data;
					}
				},function(){
					Toast.clear();
				})
			},
			validate4AppointDeal(key){
				let _this = this;
				if(key == 'transferAmount') {
					if(_this.form4AppointDeal[key]>=10&&_this.form4AppointDeal[key]<=100){
						_this.form4AppointDeal[key] = parseFloat(_this.form4AppointDeal[key]).toFixed(0);
						_this.errorInfo4AppointDeal.transferAmount = '';
					}else{
						_this.errorInfo4AppointDeal.transferAmount = "单次合成钻石值数量在1~10之间，所需矿石在10~100之间";
					}
				}else if(key == 'mobilePhone') {
					if(_this.$reg.phone2.test(_this.form4AppointDeal.mobilePhone)){
						_this.errorInfo4AppointDeal.mobilePhone = '';
						//_this.getSecurityCode();
					}else{
						_this.errorInfo4AppointDeal.mobilePhone = _this.$reg.phoneHint;
					}
				}else if(key == 'price') {
					_this.form4AppointDeal[key] = parseFloat(_this.form4AppointDeal[key]).toFixed(2);
					let price = parseFloat(_this.form4AppointDeal[key]);
					let maxAddPrice = parseFloat(_this.maxAddPrice).toFixed(2);
					let maxPrice = parseFloat(_this.maxPrice).toFixed(2);
					let curerntPlatformPrice = parseFloat(_this.curerntPlatformPrice);
					//alert(maxAddPrice);
					//console.log("parseFloat(price)："+parseFloat(price)+",parseFloat(maxAddPrice):" + parseFloat(maxAddPrice) + ",parseFloat(maxPrice):" + parseFloat(maxPrice));
					if(parseFloat(price)>=parseFloat(maxAddPrice)&&parseFloat(price)<=parseFloat(maxPrice)){
						_this.errorInfo4AppointDeal.price = '';
					}else{
						_this.errorInfo4AppointDeal.price = `今日定向交易价格暂时控制在${maxAddPrice}~${maxPrice}CNY`;
					}
				}else if(key == 'assurePrice') {
					let totalPrice = parseFloat(_this.form4AppointDeal[key]);
					if(totalPrice>=0.1&&totalPrice<=1000000){
						_this.errorInfo4AppointDeal.assurePrice = '';
					}else{
						_this.errorInfo4AppointDeal.assurePrice = `单次交易金额暂时控制在0.1~1000000`;
					}
				}else if(key == 'blockAddress'){
					if(_this.$reg.block_address.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.blockAddress = '';
					}else{
						_this.errorInfo4AppointDeal.blockAddress = "请正确粘贴对方的区块地址";
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
						_this.errorInfo4AppointDeal.safePassword = _this.$reg.safePasswordHint;
					}
				}else if(key == 'dsPassword') {
					if(_this.$reg.dsPassword.test(_this.form4AppointDeal[key].replace(/ /g,""))){
						_this.errorInfo4AppointDeal.dsPassword = '';
					}else{
						_this.errorInfo4AppointDeal.dsPassword = "请填写正确的动态密码";
					}
				}
			},
			close(){
				Dialog.alert({
				  title: '系统提示',
				  message: '该通道已关闭'
				}).then(() => {
				  // on close
				});
			},
			submit(){
				let _this = this;
				/* if(_this.$utils.getTimeHMS(new Date())>'21:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '定向交易时间是9~21点，请明天再来'
					}).then(() => {
					  // on close
					});
					return;
				} */
				/* if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '定向交易时间是9~21点，请到点再来'
					}).then(() => {
					  // on close
					});
					return;
				} */
				
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `当前所花矿石数量为:${_this.form4AppointDeal.transferAmount}个,可合成${parseFloat(parseFloat(_this.form4AppointDeal.transferAmount)/10).toFixed(2)}个钻石值,请问是否确认合成？`
				}).then(() => {
				  // on confirm
					let params = {
						/* userId: _this.userId, */
						/* mobilePhone: _this.form4AppointDeal.mobilePhone, */
						useMineral: _this.form4AppointDeal.transferAmount,
						safePassword: _this.form4AppointDeal.safePassword.replace(/ /g,""),
						// createTime:_this.$utils.getDateTime(new Date())
					}
					
					if(Number(_this.userInfo.thisWeekMineral)<Number(params.useMineral)){
						_this.$toast('您的矿石不够');
						return;
					}
					if(Number(_this.userInfo.email)<Number(params.useMineral)*2){
						_this.$toast('您的流通值不够');
						return;
					}
					/* if(_this.userInfo.platformTicket<1){
						_this.$toast('您的帮扶券不够');
						return;
					} */
					if(_this.$utils.hasNull(params)){
						_this.$toast('请填写完整信息');
						return;
					}
					if(_this.$utils.hasVal(_this.errorInfo4AppointDeal)){
						_this.$toast('请按要求填写信息');
						return;
					}
					params.safePassword = _this.$JsEncrypt.encrypt(_this.form4AppointDeal.safePassword);
					_this.loading = true;
					_this.$ajax.ajax(_this.$api.monToChildCV, 'POST', params, function(res) {
						if (res.code == _this.$api.CODE_OK) {
							Dialog.alert({
							  title: '系统提示',
							  message: '合成成功'
							}).then(() => {
							  // on close
							  _this.$cookies.set("tab_name_book", 'mineral', _this.$api.cookiesTime)
							  _this.$router.push('/myBook');
							});
						}else{
							// _this.$toast(res.message);
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
