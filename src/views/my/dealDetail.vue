<style lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.modelTip{
	font-size: 0.75rem;
	padding: 0 12px;
	color: $grayDarker;
}
.van-cell__value, .van-cell__value--alone, .van-field__control{
	color: #323232 !important;
}
.dealDetailBox{
	@include pageNoHeight4Scroll();
	.refuseReason{
		font-size: 11px;
		padding:6px;
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
	}
	.realName{
		overflow-y: scroll;
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
		.van-field__control{
			font-size: 12px !important;
		}
		
		/* .idcard{
			.van-cell{
				padding:0 16px !important;
			}
			.van-field__control{
				font-size: 14px !important;
				letter-spacing: 1px;
				padding-left: 10px;
			}
		} */
		.line{
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			.label{
				flex: 0 0 120px;
			}
			.value{
				flex: 1;
				text-align: right;
				position: relative;
				.iconfont-upload-pic{
					font-size: 50px;
					color: $main-adorn-color;
				}
				.selectPicInput{
					position: absolute;
					right: 0;
					top: 0;
					width: 50px;
					height: 50px;
				}
			}
			.selectedImg{
				width: 100%;
			}
		}
	}
	.items2{
		margin-top: $marginTop2;
		padding-left:$boxPadding2;
		padding-right:$boxPadding2;
		.my-cell{
			font-size: 0.75rem;
			display:flex;
			align-content: center;
			align-items: center;
			flex-direction: row;
			justify-content: center;
			.flex1{
				flex:0 0 5rem;
				font-size: 0.875rem;
			}
			.flex2{
				flex:1;
				text-align:right;
				position: relative;
				input{
					font-size: 14px;
					letter-spacing: 1px;
					padding-right: 40px;
				}
			}
			.address{
				span{font-size: 0.687rem;width: 180px !important;display: block;}
				.iconfont{height: 2.875rem;line-height: 2.875rem;}
			}
		}
	}
	.update1{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
	}
	.update2{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
	}
}
</style>
<template>
  <div class="dealDetailBox">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">订单详情</div>
		<i class="rightBox icon"></i>
	</m-header>
	<!-- 实名认证 -->
	<div class="realName" v-if="form.status">
		<!-- <div class="f-12 lineHeight textJustify tip4model">
			<div class="textIndent">
				<b>审核指标：</b>请客服和团队长们一定要审核对方的支付宝账号的真实姓名，只要用户的真实姓名和支付宝中的姓名还有证件照中的姓名对得上，且身份证号也对得上即可通过；否则就驳回。
			</div>
			<div class="textIndent">
				<b>审核嘱咐：</b>帮扶链这个平台不是张三的，也不是李四的，而是大家的，期望各位领导人认真审核，共同维护好平台。
			</div>
			<div class="textIndent">
				<b>审核津贴：</b>审核通过奖励审核人0.1张帮扶券；审核驳回奖励审核人0.2张帮扶券。
			</div>
			<div class="textIndent">
				注：若会员提交批图后的照片，包括小纸条，审核的时候一律冻结账号处理。
			</div> 
		</div> -->
		<div class="green_text paddingWing margT10">-------------卖家信息-------------</div>
		<van-field v-model="form.nickName" clearable label="卖家昵称" disabled="true"/>
		<van-field v-model="form.realName" clearable label="卖家姓名" disabled="true" placeholder="请填写真实姓名"/>
		<van-field v-model="form.mobilePhone" clearable label="卖家手机号" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.mobilePhone,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.wechartNum" clearable label="卖家微信号" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.wechartNum,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.alipayNum" clearable label="卖家支付宝" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.alipayNum,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.buyTimes" clearable label="买入次数" disabled="true"/>
		<van-field v-model="form.buyAmount" clearable label="买入数量" disabled="true"/>
		<van-field v-model="form.sellTimes" clearable label="卖出次数" disabled="true"/>
		<van-field v-model="form.sellAmount" clearable label="卖出数量" disabled="true"/>
		<van-field v-model="form.myCalculationPower" clearable label="个人算力" disabled="true"/>
		<van-field v-model="form.teamCalculationPower" clearable label="团队算力" disabled="true"/>
		<van-field v-model="form.realnameNum" clearable label="实名人数" disabled="true"/>
		<van-field v-model="form.contributionValue" clearable label="贡献值" disabled="true"/>
		<div class="line" v-if="form.imgUrl">
			<img class="selectedImg" :src="form.imgUrl"/>
		</div>
		<div class="green_text margT10 paddingWing">-------------买家信息-------------</div>
		<van-field v-model="form.buyerPhone" clearable label="买家手机号" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.buyerPhone,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.buyerNickName" clearable label="买家昵称" disabled="true"/>
		<div class="green_text margT10 paddingWing">-------------交易信息-------------</div>
		<van-field v-model="form.id" clearable label="订单号" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.id,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.num" clearable label="数量" disabled="true"/>
		<van-field v-model="form.price" clearable label="单价" disabled="true"/>
		<van-field v-model="form.machingTime" clearable label="匹配时间" disabled="true"/>
		<div v-if="form.letSureTime">
			<van-field v-model="form.letSureTime" clearable label="待确认时间" disabled="true"/>
		</div>
		<van-field clearable label="状态" disabled="true">
			<van-button slot="button" size="small"><span class="statusText" :class="getColor(form.status)">{{form.status}}</span></van-button>
		</van-field>
		<div v-if="form.remark">
			<van-field v-model="form.remark" label="诉讼问题信息" rows="3" type="textarea" autosize disabled="true"/>
		</div>
		<div class="placeholderLine10"></div>
		<div class="sureAppointBtnBox">
			<!-- <div class="tip4model3">
				注：会员若提交批图后的照片，包括小纸条，审核的时候一律冻结账号处理。
			</div> -->
			<!-- <div v-if="form.status==5">
				<div class="placeholderLine10"></div>
				<van-checkbox v-model="checked4Buyer" @change="checkedChange">买家诉讼有效给奖励</van-checkbox>
				<div class="placeholderLine10"></div>
				<van-button size="normal" :block="true" @click="cancelBtn">给取消</van-button>1HW5f80P5N66z45835w5
			</div> -->
			<div v-if="form.status==5&&(loginerUserId=='en15079AQ107o91Y7217'||loginerUserId=='1502d824670iQ1215VW8'||loginerUserId=='1580I60773e1XBJ52634'||loginerUserId=='1HW5f80P5N66z45835w5')">
				<div class="placeholderLine10"></div>
				<van-button size="normal" :block="true" @click="cancelBtn">给取消</van-button>
				<div class="placeholderLine20"></div>
				<van-button size="normal" type="warning" :block="true" @click="waitSureBtn">设置成待确认</van-button>
				<div class="placeholderLine20"></div>
				<van-button size="normal" type="info" :block="true" @click="letUploadPicBtn">请卖家上传已短信通知的截图</van-button>
				<div class="placeholderLine20"></div>
				<van-button size="normal" type="success" :block="true" @click="letGoOnDealBtn">请卖家再次短信通知买家继续完成交易</van-button>
				<div class="placeholderLine10"></div>
				<div class="tip4model3">
					注：若卖家确认超时后(过待确认时间尚未确认)，客服可给确认，并扣卖家10个矿石。
				</div>
				<div class="placeholderLine10"></div>
				<van-button size="normal" :block="true" type="primary" @click="sureBtn">给确认</van-button>
			</div>
			<!-- <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="passBtn">通 过</van-button> -->
			<div v-if="form.status==2||form.status==4">
				<div class="placeholderLine10"></div>
				<div class="tip4model3">
					注：若卖家确认超时后(过待确认时间尚未确认)，客服可给确认，并扣卖家10个矿石。
				</div>
				<van-button size="normal" :block="true" type="primary" @click="sureBtn">给确认</van-button>
				<div class="placeholderLine10"></div>
			</div>
			<!-- 
			<van-button size="normal" :block="true" @click="freezzBtn">冻结账号</van-button> -->
		</div>
	</div>
	
	<van-dialog v-model="showCancelReasonModel" title="取消确认" :showConfirmButton="false" :close-on-click-overlay="true">
		<div class="placeholderLine10"></div>
		<div class="refuseReason">
			<van-checkbox v-model="checked4Buyer" @change="checkedChange">买家诉讼有效给买家奖励0.1贡献值</van-checkbox>
			<van-field v-model="safePassword"  required placeholder="安全密码"/>
			<van-button size="normal" :block="true" @click="cancelEvent">确认取消</van-button>
		</div>
		<div class="placeholderLine10"></div>
	</van-dialog>
	<van-dialog v-model="showFreezeReasonModel" title="冻结原因" :showConfirmButton="false" :close-on-click-overlay="true">
		<div class="placeholderLine10"></div>
		<div class="refuseReason">
			<van-field v-model="remark" rows="2" autosize required placeholder="请填写冻结原因,以便系统做统计" @blur="validate('remark')" :error-message="errorInfo.remark"/>
			<van-button size="normal" :block="true" @click="freezeEvent">提 交</van-button>
		</div>
		<div class="placeholderLine10"></div>
	</van-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
import { Dialog } from 'vant';
import { Toast } from 'vant';

export default {
	data() {
		return {
			safePassword:'',
			showCancelReasonModel:false,
			addContributionValue:0.1,
			checked4Buyer:false,
			showFreezeReasonModel:false,
			showRefuseReasonModel:false,
			showTipModel:false,
			result:"",
			loading:true,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:{},
			remark:'',
			form:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				loginPassword:"",
				securityPassword:"",
				sureNewPassword:"",
				securityPassword2:"",
				verificationCode:"",
				bankCard:"",
				idCard:"",
				idCardPic:"",
				gesturePic:"",
				remark:""
			},
			errorHint:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				loginPassword:"",
				securityPassword:"",
				securityPassword2:"",
				sureNewPassword:"",
				verificationCode:"",
				bankCard:"",
				idCard:""
			},
			errorInfo:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				loginPassword:"",
				securityPassword:"",
				securityPassword2:"",
				sureNewPassword:"",
				verificationCode:"",
				bankCard:"",
				idCard:"",
				remark:""
			},
			updateValidate:true,
			flag:'',
			isRealName:true,
			id:'',
			projectName:'',
			mobilePhone:'',
			uploadType:'',
			loginerUserId:'',
			option1: [
				{ text: '您的支付宝账号未实名', value: 0 },
				{ text: '怀疑存在P图，请重新拍照后再上传', value: 1 },
				{ text: '纸条上写的手机号和注册手机号不一致', value: 2 },
				{ text: '图一请上传支付宝个人主页截图', value: 3 },
				{ text: '身份证里的名字与支付宝实名不一致', value: 4 },
				{ text: '为了保护您的证件照片无法被他用，请按模板要求用纸条盖住证件头像', value: 5 },
				{ text: '支付宝无法被搜索到，请先去支付宝--我的--隐私里开启通过手机号找到我', value: 6 },
				{ text: '支付宝里请先上传头像，不然容易给人感觉是小号，给他人印象不好', value: 7 }
			],
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			////console.log("userInfo_localStorage");
			_this.userInfo = JSON.parse(userInfo);
			_this.loginerUserId = _this.userInfo.userId;
			console.log('loginerUserId', _this.loginerUserId);
		}else{
			/* _this.$cookies.remove('userId'); */
			localStorage.removeItem('_USERINFO_');
			_this.$cookies.remove('userId');
			_this.$cookies.remove('token');
			_this.$cookies.remove('isRefreshDealInfo');
			_this.$cookies.remove('isRefreshUserInfo');
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		_this.id = _this.$route.query.id;
		_this.getAssistTransactionExtendById();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		getColor(status) {
			if(status==5){
				return "red";
			}else if(status==2){
				return "yellow";
			}else if(status==8){
				return "green_text";
			}
			//return status == 5 ? "red" : status == 2 ? "green_text" : status == 1 ? "blue" : "";
		},
		getAssistTransactionExtendById(){
			let _this = this;
			let params = {
				id: _this.id
			}
			_this.$ajax.ajax(_this.$api.getAssistTransactionExtendById, 'GET', params, function(res){
				if(res.code == _this.$api.CODE_OK){
					// _this.form.idCardPic = res.data.idCardPic;
					// _this.form.gesturePic = res.data.gesturePic;
					_this.form = res.data;
					//console.log("form",_this.form);
				}
			})
		},
		showTip(){
			this.showTipModel = true;
		},
		initializeHintInfo(){
			let _this = this;
			
			_this.errorHint = {
				nickName:"请填写1~7位昵称",
				// telPhone:"请填写与微信绑定的手机号",
				realName:"请填写2~20位真实姓名",
				alipayNum:"请填写绑定了支付宝的登录手机号",
				wechartNum:"请填写绑定了微信的登录手机号",
				address:"",
				loginPassword:"请填写新登录密码",
				securityPassword:"请填写安全密码",
				securityPassword2:"请确认安全密码",
				sureNewPassword:"请确认新密码",
				verificationCode:"请填写验证码",
				bankCard:"请填写银行卡号",
				idCard:"请填写身份证号",
			}
		},
		checkedChange(value){
			let _this = this;
			console.log("value:"+value);
			if(_this.checked4Buyer){
			  _this.addContributionValue = 0.1;
			}else{
			  _this.addContributionValue = 0.0;
			}
			console.log("_this.addContributionValue:"+_this.addContributionValue);
		},
		waitSureBtn(){
			let _this = this;
			Dialog.confirm({
			  title: '系统提示',
			  confirmButtonText:'继续',
			  closeOnClickOverlay:true,
			  message: '该操作将会把该笔交易设置成待确认，请问是否继续？'
			}).then(() => {
			  
			  let params = {
			  	id:_this.form.id
			  }
			  _this.$ajax.ajax(_this.$api.setDealToWaitSure4S, 'POST', params, function(res){
			  	// //console.log('res',res)
			  	if (res.code == _this.$api.CODE_OK) { // 
					_this.$toast(`设置成功`);
			  		_this.back();
			  	}else{
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
		cancelBtn(){
			let _this = this;
			_this.showCancelReasonModel = true;
		},
		letGoOnDealBtn(){
			let _this = this;
			Dialog.confirm({
			  title: '系统提示',
			  confirmButtonText:'确认',
			  closeOnClickOverlay:true,
			  message: '是否确认设置成继续交易状态？'
			}).then(() => {
			  let params = {
				 status: 0,
				 remark:';【客服】请卖家再次短信通知买家继续完成交易',
			  	 id:_this.form.id
			  }
			  _this.$ajax.ajax(_this.$api.updateDealStatusAndRemark, 'POST', params, function(res){
			  	// //console.log('res',res)
			  	if (res.code == _this.$api.CODE_OK) { // 
					_this.$toast(`操作成功`);
			  		_this.back();
			  	}else{
			  		Dialog.alert({
			  		  title: '系统提示',
			  		  message: res.message
			  		}).then(() => {
			  		});
			  	}
			  })
			}).catch(() => {
				
			});
		},
		letUploadPicBtn(){
			let _this = this;
			Dialog.confirm({
			  title: '系统提示',
			  confirmButtonText:'确认',
			  closeOnClickOverlay:true,
			  message: '是否确认让卖家上传短信通知的截图？'
			}).then(() => {
			  let params = {
			  	id:_this.form.id
			  }
			  //console.log('params',params);
			  
			  _this.$ajax.ajax(_this.$api.letSellerUploadPic, 'POST', params, function(res){
			  	// //console.log('res',res)
			  	if (res.code == _this.$api.CODE_OK) { // 
					_this.$toast(`操作成功`);
			  		_this.back();
			  	}else{
			  		Dialog.alert({
			  		  title: '系统提示',
			  		  message: res.message
			  		}).then(() => {
			  		});
			  	}
			  })
			}).catch(() => {
				
			});
		},
		cancelEvent(){
			let _this = this;
			if(_this.$utils.isNUll(_this.safePassword)){
				Dialog.alert({
				  title: '系统提示',
				  message: '请填写安全密码'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(!_this.checked4Buyer){
			  _this.addContributionValue = 0.00;
			}
			let params = {
				id:_this.form.id,
				buyerId:_this.form.buyerId,
				sellerId:_this.form.sellerId,
				addContributionValue:_this.addContributionValue.toFixed(2),
				safePassowrd:_this.$JsEncrypt.encrypt(_this.safePassword)
			}
			_this.$ajax.ajax(_this.$api.cancelAssistTransaction4S, 'POST', params, function(res){
				// //console.log('res',res)
				if (res.code == _this.$api.CODE_OK) { // 
								_this.$toast(`取消成功`);
					_this.back();
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			})
		},
		sureBtn(){
			let _this = this;
			Dialog.confirm({
			  title: '系统提示',
			  confirmButtonText:'确认',
			  closeOnClickOverlay:true,
			  message: '该操作会将确认此单交易，是否确认？'
			}).then(() => {
			  let params = {
			  	id:_this.form.id,
			    isFreezeSellerChecked:0
			  }
			  //console.log('params',params);
			  
			  _this.$ajax.ajax(_this.$api.sureDeal4SellerById, 'POST', params, function(res){
			  	// //console.log('res',res)
			  	if (res.code == _this.$api.CODE_OK) { // 
					_this.$toast(`确认成功`);
			  		_this.back();
			  	}else{
			  		Dialog.alert({
			  		  title: '系统提示',
			  		  message: res.message
			  		}).then(() => {
			  		});
			  	}
			  })
			}).catch(() => {
				
			});
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制成功`);
			});
		},
		freezzBtn(){
			//console.log("submitRefuse");
			let _this = this;
			_this.showFreezeReasonModel = true;
		},
		freezeEvent(){
			let _this = this;
			
			let params = {
				userId: _this.form.userId,
				reason: _this.remark,
				needTicket: 10,
				canUnfreeze: 1
			}
			//console.log('params',params)
			if(_this.$utils.hasNull(params)){
				_this.$toast(`请提交完整信息`);
				return;
			}
			//console.log('系统提示：可提交信息');
			_this.$ajax.ajax(_this.$api.insertAssistUserFreeze, 'POST', params, function(res){
				// //console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					// _this.info = res.data.list;
					// _this.isRealName = true;
					_this.$toast(res.message);
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					_this.$router.go(-1);
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			})
		},
		refuseBtn(){
			//console.log("submitRefuse");
			let _this = this;
			_this.showRefuseReasonModel = true;
		},
		submit(type){
			let _this = this;
			let params = {
				id:_this.form.id,
				userId:_this.form.userId,
				/* loginerUserId:_this.loginerUserId, */
				realName:_this.form.realName,
				idCard:_this.form.idCard,
			}
			if(type=='pass'){
				params.actived = 1;
			}else if(type=='refuse'){
				params.actived = 2;
				params.remark = _this.remark;
			}
			console.log('params',params)
			if(_this.$utils.hasVal(_this.errorInfo)||_this.$utils.hasNull(params)){
				_this.$toast(`系统提示：请提交完整信息`);
				return;
			}
			//console.log('系统提示：可提交信息');
			_this.$ajax.ajax(_this.$api.updateUserInfo4CheckPassOrNot, 'POST', params, function(res){
				// //console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					// _this.info = res.data.list;
					// _this.isRealName = true;
					_this.$toast(res.message);
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					_this.$router.go(-1);
				}else{
					_this.$toast(res.message);
				}
			})
		},
		validate(key){
			let _this = this;
			if(key == 'nickName') {
				if((_this.form.nickName.length)<=7&&(_this.form.nickName.length)>0){
					_this.errorInfo.nickName = '';
				}else{
					_this.errorInfo.nickName = _this.errorHint.nickName;
				}
			}else if(key == 'telPhone'){
				if(_this.$reg.phone.test(_this.form.telPhone)){
					_this.errorInfo.telPhone = ''
				}else{
					_this.errorInfo.telPhone = _this.errorHint.telPhone;
				}
			}else if(key == 'realName'){
				if((_this.form.realName.length)<=20&&(_this.form.realName.length)>1){
					_this.errorInfo.realName = '';
				}else{
					_this.errorInfo.realName = _this.errorHint.realName;
				}
			}else if(key == 'alipayNum') {
				if(_this.form.alipayNum==_this.mobilePhone){
					_this.errorInfo.alipayNum = '';
				}else{
					_this.errorInfo.alipayNum = _this.errorHint.alipayNum;
				}
				/* if(_this.form.alipayNum.indexOf('@')==-1){
					if(_this.$reg.phone.test(_this.form.alipayNum)){
						_this.errorInfo.alipayNum = '';
					}else{
						_this.errorInfo.alipayNum = _this.$reg.alipayHint;
					}
				} */
			}else if(key == 'wechartNum') {
				if(_this.form.wechartNum==_this.mobilePhone){
					_this.errorInfo.wechartNum = '';
				}else{
					_this.errorInfo.wechartNum = _this.errorHint.wechartNum;
				}
			}else if(key == 'loginPassword') {
				if(_this.$reg.password.test(_this.form.loginPassword)){
					_this.errorInfo.loginPassword = '';
				}else{
					_this.errorInfo.loginPassword = _this.$reg.passwordHint;
				}
			}else if(key == 'securityPassword') {
				if(_this.$reg.safePassword.test(_this.form.securityPassword)){
					_this.errorInfo.securityPassword = '';
				}else{
					_this.errorInfo.securityPassword = _this.$reg.safePasswordHint;
				}
			}else if(key == 'securityPassword2') {
				if(_this.form.securityPassword2==_this.form.securityPassword){
					_this.errorInfo.securityPassword2 = '';
				}else{
					_this.errorInfo.securityPassword2 = "2次密码不一样"
				}
			}else if(key == 'bankCard') {
				if(_this.$reg.bankCard.test(_this.form.bankCard)){
					_this.errorInfo.bankCard = '';
				}else{
					_this.errorInfo.bankCard = _this.$reg.bankCardHint;
				}
			}else if(key == 'idCard'){
				if(_this.$reg.idCard.test(_this.form.idCard)){
					_this.errorInfo.idCard = '';
				}else{
					_this.errorInfo.idCard = _this.$reg.idCardHint;
				}
			}else if(key == 'remark'){
				if(_this.form.remark.length>1&&_this.form.remark.length<100){
					_this.errorInfo.remark = '';
				}else{
					_this.errorInfo.remark = "理由长度超出1~100个字的限制";
				}
			}
		},
	}
}
</script>
