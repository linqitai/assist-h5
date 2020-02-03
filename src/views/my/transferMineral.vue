<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.transfer{
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
		[class*=van-hairline]::after{
			border: none !important;
		}
		.van-field__control{
			color: $mainTextColor;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		}
		.transferPage{
			color: $mainTextColor;
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.van-field__label{
				width: 70px !important;
			}
			.van-cell__value, .van-cell__value--alone, .van-field__control,.van-cell {
			    color: #FFFFFF !important;
			}
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
				.van-cell__value, .van-cell__value--alone, .van-field__control {
				    color: #FFFFFF !important;
				}
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
	<div class="transfer">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				定向转让矿石
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPage">
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3">当前拥有<br>矿石:{{userInfo.thisWeekMineral.toFixed(2)}}个  贡献值:{{userInfo.contributionValue.toFixed(2)}}点  帮扶券:{{userInfo.platformTicket.toFixed(2)}}个</div>
			<van-cell-group>
				<van-field v-model="form4AppointDeal.transferAmount" required clearable label="转让数量" placeholder="请填写转让数量" @blur="validate4AppointDeal('transferAmount')" :error-message="errorInfo4AppointDeal.transferAmount"/>
				<van-field v-model="form4AppointDeal.price" required clearable label="转让单价" placeholder="请填写协商好的卖出单价" @blur="validate4AppointDeal('price')" :error-message="errorInfo4AppointDeal.price"/>
				<van-field v-model="form4AppointDeal.blockAddress" required clearable label="区块地址" placeholder="请粘贴对方的区块地址" maxlength="36" @blur="validate4AppointDeal('blockAddress')" :error-message="errorInfo4AppointDeal.blockAddress"/>
				<van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写安全密码"/>
			</van-cell-group>
			<!-- <div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的留言标题" />
			</div> -->
			<div class="sureBtn">
				<div class="paddingWing tip4model3">
					点对点(定向)交易规则：<br>
					1.服务费收20%矿石+1个帮扶券,省市代理除外<br>
					2.交易需先完成【我的--任务中心】里的基础任务<br>
					3.交易后所剩矿石数不得少于2个，注册所赠送的2个矿石是用来复投矿机的
				</div>	
				<div class="placeholderLine4"></div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提 交</van-button>
			</div>
		</div>
		<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="line text margT10">
					点对点(定向)交易规则：<br>
					1.服务费收20%矿石+1个帮扶券,省市代理除外<br>
					2.交易需先完成【我的--任务中心】里的基础任务<br>
					3.交易后所剩矿石数不得少于2个，注册所赠送的2个矿石是用来复投矿机的
				</div>
			</div>
		</van-dialog>
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
					transferAmount:'',
					price:'',
					blockAddress:'',
					safePassword:'',
				},
				errorInfo4AppointDeal:{
					transferAmount:"",
					price:"",
					blockAddress:"",
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
				userId:"",
				loading:false,
				maxPrice:'',
				userInfo:''
			}
		},
		components: {
			mHeader
		},
		created() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getDealPageInfo();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getDealPageInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getDealPageInfo, 'GET', null, function(res) {
					console.log('getDealPageInfo', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.maxPrice = parseFloat(res.data.currentPlatformPrice)*1.3+4;
					}
				})
			},
			validate4AppointDeal(key){
				let _this = this;
				if(key == 'transferAmount') {
					if(_this.form4AppointDeal[key]>=1&&_this.form4AppointDeal[key]<=10000){
						_this.errorInfo4AppointDeal.transferAmount = '';
					}else{
						_this.errorInfo4AppointDeal.transferAmount = "单次转让数量在1~10000之间";
					}
				}else if(key == 'price') {
					if(_this.form4AppointDeal[key]>=0.1&&_this.form4AppointDeal[key]<=_this.maxPrice){
						_this.errorInfo4AppointDeal.price = '';
					}else{
						_this.errorInfo4AppointDeal.price = `定向交易价格暂时控制在0.1~${_this.maxPrice}`;
					}
				}else if(key == 'blockAddress'){
					if(_this.$reg.block_address.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.blockAddress = '';
					}else{
						_this.errorInfo4AppointDeal.blockAddress = "请正确粘贴对方的区块地址";
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
				console.log("submit");
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>'21:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '交易时间是9~21点，请明天再来'
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '交易时间是9~21点，请到点再来'
					}).then(() => {
					  // on close
					});
					return;
				}
				let params = {
					/* userId: _this.userId, */
					num: _this.form4AppointDeal.transferAmount,
					price: _this.form4AppointDeal.price,
					blockAddress: _this.form4AppointDeal.blockAddress,
					safePassword: _this.form4AppointDeal.safePassword,
					// createTime:_this.$utils.getDateTime(new Date())
				}
				console.log('params',params);
				if(_this.userInfo.thisWeekMineral<params.num){
					_this.$toast('您的矿石不够');
					return;
				}
				if(_this.userInfo.contributionValue<params.num){
					_this.$toast('您的贡献值不够');
					return;
				}
				if(_this.userInfo.platformTicket<1){
					_this.$toast('您的帮扶券不够');
					return;
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				console.log('_this.errorInfo4BuyBill',_this.errorInfo4BuyBill);
				if(_this.$utils.hasVal(_this.errorInfo4AppointDeal)){
					_this.$toast('请按要求填写信息');
					return;
				}
				params.safePassword = _this.$JsEncrypt.encrypt(_this.form4AppointDeal.safePassword);
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.insertTransaction4AppointBill, 'POST', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						// _this.$toast('转让成功');
						_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
						/* _this.$cookies.set("tab_name_book","mineral",_this.$api.cookiesTime); */
						_this.$cookies.set("tabName4MyDeal", "get", _this.$api.cookiesTime);
						_this.$router.push({path:'myDeal',query:{mobilePhone:res.data.mobilePhone,num:params.num}});
						_this.$utils.formClear(_this.form4AppointDeal);
					}else{
						// _this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				})
			},
		}
	}
</script>
