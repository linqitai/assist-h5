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
.checkDetailBox{
	@include pageWhiteBGHaveHeight();
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
  <div class="checkDetailBox">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">实名审核</div>
		<i class="rightBox icon"></i>
	</m-header>
	<!-- 实名认证 -->
	<div class="realName">
		<div class="f-12 lineHeight textJustify tip4model3RedText paddingWing margT10">
			<b class="textBold">总结审核技巧</b><br>			1.先复制对方支付宝账号去支付宝首页-转账里验证是否搜索得到对方且是同一人，再查看对方支付宝头像是否已经设置<br>			2.再复制对方的注册手机号去添加TA的微信好友，要能搜索到才行，再查看对方微信头像是否已经设置<br>			3.务必检查对方支付宝头像和微信头像是否已经设置，没设置就驳回，有刷小号嫌疑<br>			4.再查看纸条里的信息是否对得上，如果明显是P图出来的纸条，就驳回<br>			5.再看纸条上手机号是否一致<br>			6.再看身份证号是否一致<br>			7.再看看对方年龄是否在18~70周岁之内（超过这个范围的，需要特殊申请）<br>			以上7点若有一条未达到要求，就审核驳回，若发现严重P图或多次P图的直接冻结账号<br>			支付宝关联了多个邮箱账号且没指定哪个是常用的，酌情处理。<br>
		</div>
		<van-field v-model="form.nickName" required clearable label="昵称" disabled="true" :placeholder="errorHint.nickName" maxlength="20" @blur="validate('nickName')" :error-message="errorInfo.nickName"/>
		<van-field v-model="form.realName" required clearable label="真实姓名" disabled="true" placeholder="请填写真实姓名" maxlength="20"
		  @blur="validate('realName')" :error-message="errorInfo.realName"/>
		<van-field v-model="form.mobilePhone" required clearable label="手机号" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.mobilePhone,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.wechartNum" required clearable label="微信号" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.wechartNum,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.alipayNum" required clearable label="支付宝" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.alipayNum,$event)">复制</van-button>
		</van-field>
		<div class="line" v-if="form.gesturePic">
			<img class="selectedImg" :src="form.gesturePic"/>
		</div>
		<!-- <van-field v-model="form.bankCard" required clearable label="银行卡号" right-icon="question-o" :placeholder="errorHint.bankCard"
		@click-right-icon="$toast(errorHint.bankCard)"
		@blur="validate('bankCard')"
		:error-message="errorInfo.bankCard"/> -->
		<!-- <van-field v-model="form.mobilePhone" required clearable label="手机号" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.mobilePhone,$event)">复制</van-button>
		</van-field> -->
		<van-field v-model="form.realName" required clearable label="真实姓名" disabled="true" placeholder="请填写真实姓名" maxlength="20"
		  @blur="validate('realName')" :error-message="errorInfo.realName"/>
		<div class="line" v-if="form.idCardPic">
			<img class="selectedImg" :src="form.idCardPic"/>
		</div>
		<div class="idcard">
			<van-field v-model="form.idCard" required clearable label="身份证号" disabled="true" :placeholder="errorHint.idCard" @blur="validate('idCard')" :error-message="errorInfo.idCard"/>
		</div>
		<van-field v-model="form.mobilePhone" required clearable label="手机号" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.mobilePhone,$event)">复制</van-button>
		</van-field>
		<div class="" v-if="form.remark">
			<van-field v-model="form.remark" label="上次驳回原因" rows="3" type="textarea" autosize required disabled="true"/>
		</div>
		<div class="placeholderLine10"></div>
		<div class="sureAppointBtnBox">
			<div class="tip4model3">
				注：会员若提交批图后的照片，包括小纸条，审核的时候一律冻结账号处理。
			</div>
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="submitPassLoading" @click="passBtn">通 过</van-button>
			<div class="placeholderLine10"></div>
			<van-button size="normal" :block="true" @click="refuseBtn">驳 回</van-button>
			<div class="placeholderLine10"></div>
			<van-button size="normal" :block="true" @click="freezzBtn">冻结账号</van-button>
		</div>
	</div>
	<van-action-sheet v-model="showRefuseReasonModel" title="驳回原因">
		<div class="refuseReason">
			<!-- @blur="validate('remark')" -->
			<van-field v-model="remark" rows="1" autosize type="textarea" required placeholder="请填写驳回原因,以便系统做统计" :error-message="errorInfo.remark"/>
			<div class="placeholderLine10"></div>
			<!-- <div>{{refuseReason}}</div> -->
			<van-checkbox-group v-model="refuseReason" @change="checkboxChange" :max="3">
			  <van-checkbox shape="square" v-for="(item, index) in list" :name="item" ref="checkboxes">{{item}}</van-checkbox>
			</van-checkbox-group>
			<!-- <van-checkbox-group v-model="refuseReason" @change="checkboxChange" :max="3">
			  <van-cell-group>
			    <van-cell
			      v-for="(item, index) in list"
			      clickable
			      :key="item"
			      :title="`${item}`"
			      @click="toggle(index)"
			    >
			      <template #right-icon>
			        <van-checkbox shape="square" :name="item" ref="checkboxes" />
			      </template>
			    </van-cell>
			  </van-cell-group>
			</van-checkbox-group> -->
			<div class="placeholderLine10"></div>
			
			<van-button size="normal" :block="true" :loading="submitRefuseLoading" @click="submit('refuse')">提 交</van-button>
		</div>
		<div class="placeholderLine10"></div>
	</van-action-sheet>
	<van-dialog v-model="showFreezeReasonModel" title="冻结原因" :showConfirmButton="false" :close-on-click-overlay="true">
		<div class="placeholderLine10"></div>
		<div class="refuseReason">
			<van-field v-model="remark" rows="2" autosize required placeholder="请填写冻结原因,以便系统做统计" @blur="validate('remark')" :error-message="errorInfo.remark"/>
			<van-button size="normal" :block="true" @click="freezeEvent">提 交</van-button>
		</div>
		<div class="placeholderLine10"></div>
	</van-dialog>
	<m-refresh @refreshEvent="refreshEvent"></m-refresh>
  </div>
</template>

<script>
import mRefresh from '@/components/Refresh.vue';
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
import { Dialog } from 'vant';
import { Toast } from 'vant';

export default {
	data() {
		return {
			list:[
				'所传照片模糊不清，请重新拍照且经过裁剪后再次上传更可观更清晰的图片',
				'微信里请先设置头像，不然容易给会员感觉是小号，而留下不好印象',
				'注册手机号无法搜索到微信，请在微信中的[我--设置--账号与安全]里检查是否绑定了该手机号，且在[设置--隐私--添加我的方式]里打开用手机号搜索到我的功能',
				'支付宝里请先设置头像，不然容易给会员感觉是小号，而留下不好印象',
				'支付宝无法被搜索到，请在支付宝的[我的--设置--隐私]里开启通过手机号找到我',
				'您的支付宝账号未实名，请先去实名',
				'所填写的身份证号和证件照中不一致',
				'身份证里的名字与支付宝实名不一致',
				'您的照片有P图嫌疑，请换个角度重新拍摄更清晰的照片再上传',
				'您的纸条有P图嫌疑，请换一个稍微带有褶皱的纸条重新提交',
				'小纸条不合格，请按照模板要求来',
				'纸条请不要遮住身份证号，这样无法核对，需重新拍照',
				'纸条上写的手机号和注册手机号不一致',
				'为了保护您的证件照片无法被他用，请按模板要求用纸条盖住证件头像',
				'年龄超出70周岁，若要加入帮扶链，需加客服额外申请',
				'您的认证资料还存在多处问题，请仔细阅读实名规则后再提交资料'],
			submitPassLoading:false,
			submitRefuseLoading:false,
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
			refuseReason:[],
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
			userId:'',
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
			duplicationNum:0
		}
	},  
	components:{
	    mHeader,mRefresh
	},
	mounted(){
		let _this = this;
		_this.loginerUserId = _this.$cookies.get('userId');
		if(_this.$utils.isNUll(_this.loginerUserId)){
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		_this.userId = _this.$route.query.userId;
		
		//console.log('userId', _this.userId);
		_this.getAssistUserInfoPicByUserId();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		refreshEvent() {
			console.log("refresh")
			let _this = this;
			_this.getAssistUserInfoPicByUserId();
		},
		checkboxChange(value){
			this.remark = value.join('；');
		},
		toggle(index) {
		  this.$refs.checkboxes[index].toggle();
		},
		checkAssistUserInfoByUserId(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.checkAssistUserInfoByUserId + _this.userId, 'GET', null, function(res){
				if(res.code == _this.$api.CODE_OK){
					// _this.form.idCardPic = res.data.idCardPic;
					// _this.form.gesturePic = res.data.gesturePic;
					_this.duplicationNum = res.data;
					if(Number(res.data)>1){
						Dialog.alert({
						  title: '系统提示',
						  confirmButtonText:'好的',
						  message: `系统中已经有${Number(res.data)-1}个【${_this.form.realName}】，请审核员仔细审核其支付宝和身份证号，若发现有刷号嫌疑的，请及时上报反馈`
						}).then(() => {
						  // on close
						});
					}
					//console.log("form",_this.form);
				}
			})
		},
		getAssistUserInfoPicByUserId(){
			let _this = this;
			const toast = Toast.loading({
			  forbidClick: true,
			  message: '加载中...',
			});
			_this.$ajax.ajax4GetCheckDetail(_this.$api.getAssistUserInfo4CheckDetail + _this.userId, 'GET', null, function(res){
				if(res.code == _this.$api.CODE_OK){
					// _this.form.idCardPic = res.data.idCardPic;
					// _this.form.gesturePic = res.data.gesturePic;
					_this.form = res.data;
					//_this.checkAssistUserInfoByUserId();
					//console.log("form",_this.form);
				}
			},function(){
				Toast.clear();
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
		passBtn(){
			let _this = this;
			Dialog.confirm({
			  title: '系统提示',
			  confirmButtonText:'确认',
			  closeOnClickOverlay:true,
			  message: '该操作会将该用户审核通过，是否确认？'
			}).then(() => {
			  // on confirm
			  //console.log('sure');
			  _this.submit("pass");
			}).catch(() => {
			  // on cancel
			  //console.log('cancel');
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
					_this.$toast(res.message);
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
				/* realName:_this.form.realName,
				idCard:_this.form.idCard, */
			}
			if(type=='pass'){
				params.actived = 1;
				_this.submitPassLoading = true;
			}else if(type=='refuse'){
				params.actived = 2;
				params.remark = _this.remark;
				_this.submitRefuseLoading = true;
			}
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
			},function(){
				_this.submitRefuseLoading = false;
				_this.submitPassLoading = false;
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
