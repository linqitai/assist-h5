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
.myInfo{
	@include pageMy();
	[class*=van-hairline]::after {
	    border: 1px solid transparent !important;
	}
	.updateInfo,.realName{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
		.van-field__control{
			font-size: 12px !important;
		}
	}
	.fixedBottom{
		@include fixedBottom();
	}
	.notRealName{
		color: $mainTextColor;
		position: absolute;
		top:0;
		bottom: 0;
		width: 100%;
		align-content: center;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		.flexRealName{
			
		}
	}
	.items{
		margin-top: $marginTop2;
		background-color:$main-box-color;
		padding-left:$boxPadding2;
		padding-right:$boxPadding2;
		margin-bottom: $footerHeight;
		.my-cell{
			height: 2.875rem;
			line-height: 2.875rem;
			color: $mainTextColor;
			font-size: 0.75rem;
			border-bottom: 1px solid $mainBorderColor;
			display:flex;
			align-content: center;
			align-items: center;
			flex-direction: row;
			justify-content: center;
			.flex1{
				flex:0 0 5rem;
				color: $mainTextColor;
				font-size: 0.875rem;
			}
			.flex2{
				flex:1;
				text-align:right;
				position: relative;
				.iconfont-right-arrow2{
					font-size: 0.75rem;
					height: 1rem;
					line-height: 1rem;
					color: $grayLight2;
				}
				span{
					font-size: 0.875rem;
				}
				.blockAddress{
					/* width:150px;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow:hidden; */
				}
				.copy{
					font-size: $fs-10;
					margin-right: 10px;
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
  <div class="myInfo">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">{{$route.name}}</div>
		<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
	</m-header>
	<div class="notRealName" v-if="userInfo.actived!=1">
		<div class="flexRealName paddingWing lineHeight textCenter">{{getActiveStatus(userInfo.actived)}}</div>
		<div class="flexRealName margT20" v-if="userInfo.actived==-1">
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" to="realName">去实名</van-button>
		</div>
		<div class="flexRealName margT20" v-if="userInfo.actived==2">
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" to="realName">去修改</van-button>
		</div>
	</div>
	<div class="items" v-if="userInfo.actived==1">
		<div class="my-cell" v-if="userInfo.isAgent">
			<div class="flex1">
				代理
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.isAgent | agentType}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				级别
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.level | getUserType}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell" @click="update('nickName')">
			<div class="flex1">
				昵称
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.nickName}}</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="my-cell" @click="update('realName')">
			<div class="flex1">
				真实姓名
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.realName}}</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				手机号
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.mobilePhone}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				微信号
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.wechartNum}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				支付宝号
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.alipayNum}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				区块地址
			</div>
			<div class="flex2">
				<div class="value">
					<div class="f-12 blockAddress right" @click="handleCopy(userInfo.blockAddress,$event)">{{userInfo.blockAddress}}</div>
					<!-- <span class="copy right" >复制</span> -->
				</div>
			</div>
		</div>
		<!-- <div class="my-cell" @click="update('weichat')">
			<div class="flex1">
				身份证号
			</div>
			<div class="flex2">
				<span class="ellipsis">guitar-lqt</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div> -->
		<!-- <div class="my-cell">
			<div class="flex1">
				收货地址
			</div>
			<div class="flex2 address">
				<i class="iconfont iconfont-right-arrow2 right"></i>
				<span class="ellipsis right">浙江省温州市苍南县龙港镇临头存123号浙江省温州市苍南县龙港镇临头存</span>
			</div>
		</div> -->
		<div class="my-cell" @click="updatePassword('loginPassword')">
			<div class="flex1">
				登录密码
			</div>
			<div class="flex2">
				<span class="ellipsis">修改登录密码</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="my-cell" @click="updatePassword('securityPassword')">
			<div class="flex1">
				安全密码
			</div>
			<div class="flex2">
				<span class="ellipsis">修改安全密码</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
	</div>
	<!-- <van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="logout">安 全 退 出</van-button> -->
	<div class="fixedBottom">
		<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="logout">安全退出</van-button>
	</div>
	
	<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
		<div class="paddingWing f-12 lineHeight textJustify tip4model2 textIndent">
			<div>
				1.请仔细填写信息，切记登录密码与安全密码。
			</div>
			<div class="placeholderLine4"></div>
			<div>
				2.若实名有误或忘记密码，每修改一次(一样)至少要花1张帮扶券。
			</div>
		</div>
	</van-dialog>
	
	<!-- 修改资料 -->
	<div class="updateInfo">
		<van-action-sheet v-model="showUpdateModel" :title="titleName">
			<div class="placeholderLine40"></div>
		  <van-cell-group>
		    <van-field v-model="form[flag]" required clearable :label="label" right-icon="question-o" :placeholder="errorHint[flag]"
		      @click-right-icon="$toast(errorHint[flag])"
		      @blur="validate(flag)"
		      :error-message="errorInfo[flag]"/>
		  </van-cell-group>
		  <div class="placeholderLine10"></div>
		  <div class="placeholderLine40"></div>
		  <div class="modelTip">系统提示：修改信息需使用1个帮扶券</div>
		  <div class="sureAppointBtnBox">
			  <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="sureUpdate('update1')">确 认</van-button>
		  </div>
		</van-action-sheet>
	</div>
	<!-- 修改密码 -->
	<van-action-sheet v-model="showUpdatePasswordModel" :title="titleName">
		<div class="placeholderLine40"></div>
		<div class="update2">
		  <van-cell-group>
			<!-- <van-field center clearable label="短信验证码" placeholder="请输入短信验证码">
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field> -->
			<van-field v-model="form[flag]" required clearable :label="label" right-icon="question-o" :placeholder="errorHint[flag]" type="password"
			  @click-right-icon="$toast(errorHint[flag])"
			  @blur="validate(flag)"
			  :error-message="errorInfo[flag]"/>
			<van-field v-model="form['sureNewPassword']" required clearable label="确认新密码" right-icon="question-o" :placeholder="errorHint['sureNewPassword']" maxlength="20" type="password"
			  @click-right-icon="$toast(errorHint['sureNewPassword'])"
			  @blur="validate('sureNewPassword')"
			  :error-message="errorInfo['sureNewPassword']"/>
		  </van-cell-group>
	  </div>
	  <div class="placeholderLine40"></div>
	  <div class="sureAppointBtnBox">
		  <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="sureUpdate('update2')">确 认</van-button>
	  </div>
	</van-action-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
import clip from '@/assets/js/clipboard';
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			showTipModel:false,
			result:"",
			loading:true,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:"",
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
				verificationCode:"",
				bankCard:""
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
				sureNewPassword:"",
				verificationCode:"",
				bankCard:""
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
				sureNewPassword:"",
				verificationCode:"",
				bankCard:""
			},
			updateValidate:true,
			flag:'',
			isRealName:true,
			userId:'',
			projectName:'',
			mobilePhone:'',
		}
	},  
	components:{
	    mHeader
	},
	created(){
		let _this = this;
		_this.projectName = _this.$api.projectName;
		// _this.userInfo = _this.$cookies.get('_USERINFO_');
		// console.log(JSON.parse(localStorage.getItem("_USERINFO_")),'userinfo')
		// _this.userInfo = JSON.parse(localStorage.getItem("_USERINFO_"));
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
			console.log(_this.userInfo,'_this.userInfo')
			_this.userId = _this.userInfo.userId;
			_this.mobilePhone = _this.userInfo.mobilePhone;
		}else{
			_this.$router.replace('login');
			return;
		}
		_this.getUserInfo();
		/* if(_this.$cookies.get('isRefreshUserInfo')==1){
			_this.getUserInfo();
		} */
		_this.initializeHintInfo();
	},
	methods:{
		back(){
			this.$router.replace('my');
		},
		getActiveStatus(val){
			let _this = this;
			if(val==-1){
				return "您尚未实名认证";
			}else if(val==0){
				return "实名信息待审核中,预计48小时内审核完,若需优先审核,请去首页找省市代理，提供注册手机号即可";
			}else if(val==2){
				console.log('_this.userInfo.remark',_this.userInfo.remark);
				return "审核结果：" + _this.userInfo.remark;
			}
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制${res.text}成功`);
			});
		},
		logout(){
			let _this = this;
			
			_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
				if(res.code == _this.$api.CODE_OK){
					_this.$toast(res.message);
					// localStorage.clear();//若不允许多账号登录，请把这个给去掉
					// console.log("_this.$cookies.keys()",_this.$cookies.keys());
					// _this.$cookies.remove('_USERINFO_');
					// _this.$cookies.remove('buyAndSellInfo');
					_this.$cookies.remove('userId');
					_this.$cookies.remove('token');
					// console.log("_this.$cookies.keys()",_this.$cookies.keys());
					_this.$router.replace('login');
				}
			})
		},
		showTip(){
			this.showTipModel = true;
		},
		toRealName(){
			let _this = this;
			_this.showRealNameModel = true;
		},
		getUserInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.userInfo = res.data;
					// _this.$cookies.set("_USERINFO_", _this.userInfo, 60 * 60 * 12);
					localStorage.setItem("_USERINFO_",JSON.stringify(res.data))
					_this.userId = _this.userInfo.userId;
					if(_this.userInfo.actived==1){
						_this.isRealName = true;
					}else{
						_this.isRealName = false;
					}
				}
				if(res.code == _this.$api.CODE_4003){
					// _this.info = res.data.list;
					// _this.showRealNameModel = true;
					_this.isRealName = false;
				}
			})
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
				securityPassword:"请填写新安全密码",
				sureNewPassword:"请确认新密码",
				verificationCode:"请填写验证码",
				bankCard:"请填写银行卡号"
			}
		},
		// 更新信息
		update(flag){
			let _this = this;
			console.log('flag',flag);
			this.showUpdateModel = true;
			_this.flag = flag;
			_this.form = _this.$utils.formClear(_this.form);
			console.log('_this.form',_this.form);
			if(flag == 'nickName'){
				_this.label = '昵称';
				_this.titleName = '修改昵称';
				_this.form.nickName = _this.userInfo.nickName;
			}else if(flag == 'telPhone'){
				_this.label = '手机号';
				_this.titleName = '修改手机号';
			}else if(flag == 'realName'){
				_this.label = '真实姓名';
				_this.titleName = '修改真实姓名';
				_this.form.realName = _this.userInfo.realName;
			}else if(flag == 'alipayNum'){
				_this.label = '支付宝';
				_this.titleName = '修改支付宝';
				_this.form.alipayNum = _this.userInfo.alipayNum;
			}else if(flag == 'wechartNum'){
				_this.label = '微信号';
				_this.titleName = '修改微信号';
				_this.form.wechartNum = _this.userInfo.wechartNum;
			}else if(flag == 'bankCard'){
				_this.label = '银行卡';
				_this.titleName = '修改银行卡号';
			}else if(flag == 'securityPassword'){
				_this.label = '安全密码';
				_this.titleName = '修改安全密码';
			}
		},
		// 更新密码
		updatePassword(flag){
			let _this = this;
			console.log('flag',flag);
			this.showUpdatePasswordModel = true;
			_this.flag = flag;
			_this.form = _this.$utils.formClear(_this.form);
			console.log('_this.form',_this.form);
			if(flag == 'loginPassword'){
				_this.label = '登录密码';
				_this.titleName = '修改登录密码';
			}else if(flag == 'securityPassword'){
				_this.label = '安全密码';
				_this.titleName = '修改安全密码';
			}
		},
		sureUpdate(type){
			let _this = this;
			// console.log('_this.form[_this.flag]',_this.form[_this.flag]);
			if(type=='update1'){
				// console.log('_this.form', _this.form);
				let params = {
					/* id:_this.userInfo.id, */
					/* userId: _this.userInfo.userId, */
				}
				params[_this.flag] = _this.form[_this.flag];
				console.log('params', params);
				// if(_this.$utils.hasVal(_this.errorInfo)){
				// 	_this.$toast('请按要求填写信息');
				// 	return;
				// }
				if(_this.userInfo.platformTicket<=0){
					_this.$toast('系统提示：您的帮扶券不足，修改信息要使用1张帮扶券');
					return;
				}
				_this.$ajax.ajax(_this.$api.updateAssistUsrInfo, 'POST', params, function(res){
					// console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						_this.showUpdateModel=false;
						_this.$toast('系统提示：修改成功');
						_this.getUserInfo();
					}
					if(res.data == 1001){
						_this.$toast('系统提示：您的帮扶券不足，修改信息要使用1张帮扶券');
					}
					if(res.code == 500){
						_this.$toast(res.message);
						_this.showUpdateModel=false;
					}
				})
			}else if(type=='update2'){
				if(_this.form[_this.flag]==_this.form['sureNewPassword']){
					console.log('_this.form', _this.form);
					let phone = localStorage.getItem("mobilePhone");
					if(!phone){
						_this.$toast('系统提示：需重新登录');
						_this.$router.push('login');
						return;
					}
					let params = {
						/* id:_this.userInfo.id,
						userId:_this.userInfo.userId, */
						mobilePhone:phone,
					}
					if(_this.form.loginPassword){
						params.type = 0;
						params.password = _this.form.loginPassword;
					}
					if(_this.form.securityPassword){
						params.type = 1;
						params.password = _this.form.securityPassword;
					}
					if(_this.$utils.hasNull(params)){
						_this.$toast('系统提示：信息有误');
						return;
					}
					_this.$ajax.ajax(_this.$api.updatePassword, 'POST', params, function(res){
						console.log('res',res);
						if(res.code == _this.$api.CODE_OK){
							_this.showUpdatePasswordModel = false;
							_this.$toast('系统提示：修改成功');
						}
					})
				}else{
					_this.$toast(`系统提示：2次密码不一致`);
				}
			}
			// if(_this.$utils.hasVal(_this.errorInfo)||_this.$utils.isNUll(_this.form[_this.flag])){
			// 	_this.$toast(`请填写${_this.label}`);
			// }else{
			// }
		},
		submitRealNameBtn(){
			let _this = this;
			let params = {
				id:_this.userInfo.id,
				userId:_this.userId,
				nickName:_this.form.nickName,
				realName:_this.form.realName,
				alipayNum:_this.form.alipayNum,
				wechartNum:_this.form.wechartNum
			}
			console.log('params',params)
			if(_this.$utils.hasVal(_this.errorInfo)||_this.$utils.hasNull(params)){
				_this.$toast(`系统提示：请按要求填写信息`);
				return;
			}
			let mobilePhone = localStorage.getItem('mobilePhone');
			if(params.alipayNum == params.wechartNum && params.wechartNum == mobilePhone){
				console.log('系统提示：可提交信息');
				_this.$ajax.ajax(_this.$api.updateAssistUsrInfo4RealName, 'POST', params, function(res){
					// console.log('res',res);
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					if(res.code == _this.$api.CODE_OK){
						// _this.info = res.data.list;
						// _this.isRealName = true;
						_this.$toast(res.message);
						_this.showRealNameModel = false;
						_this.getUserInfo();
					}else{
						_this.$toast(res.message);
					}
					if(res.code == _this.$api.CODE_4003){
						// _this.info = res.data.list;
						// _this.showRealNameModel = true;
						_this.isRealName = false;
					}
				})
			}else{
				if(params.alipayNum != mobilePhone){
					//_this.$toast(`系统提示:请填写和支付宝绑定的手机号作为支付宝号。`);
					Dialog.alert({
					  title: '系统提示',
					  message: '请填写和支付宝绑定的手机号作为支付宝号'
					}).then(() => {
					  // on close
					});
				}
				if(params.wechartNum != mobilePhone){
					// _this.$toast(`系统提示:请填写和微信绑定的手机号作为微信号。`);
					Dialog.alert({
					  title: '系统提示',
					  message: '请填写和微信绑定的手机号作为微信号'
					}).then(() => {
					  // on close
					});
				}
				/* _this.$toast(`系统提示：注册手机号、微信号、支付宝号，三者需要一致。`); */
			}
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
					_this.errorInfo.securityPassword = _this.$reg.securityPasswordHint;
				}
			}else if(key == 'bankCard') {
				if(_this.$reg.bankCard.test(_this.form.bankCard)){
					_this.errorInfo.bankCard = '';
				}else{
					_this.errorInfo.bankCard = _this.$reg.bankCardHint;
				}
			}
		},
		refreshEvent(){
			console.log("refresh")
			let _this = this;
			_this.getUserInfo();
		},
	}
}
</script>
