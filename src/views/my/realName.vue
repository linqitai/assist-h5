<style lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
.realNameBox{
	@include pageBlackBGHaveHeight();
	.van-field__error-message{
		color: #ee0a24 !important;
	}
	[class*=van-hairline]::after {
	    border: 1px solid transparent !important;
	}
	.modelTip{
		font-size: 0.75rem;
		padding: 0 12px;
		color: $grayDarker;
	}
	.van-cell{
		font-size: 12px !important;
	}
	.van-cell__value, .van-cell__value--alone, .van-field__control{
		color: $mainTextColor !important;
	}
	.realName{
		overflow-y: scroll;
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: $mainTextColor !important;
		}
		.van-field__control{
			font-size: 12px !important;
		}
		.van-cell{
			font-size: 12px !important;
		}
		.line{
			position: relative;
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			padding: 12px;
			.selectPicInput2{
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				left: 0;
				z-index: 1;
			}
			.label{
				flex: 0 0 120px;
				margin-left: 4px;
			}
			.label::before {
				position: absolute;
				left: 8px;
				color: #ee0a24;
				font-size: 14px;
				content: '*';
			}
			.text{
				flex: 1;
				text-align: center;
				color: red;
				font-size: 12px;
				text-decoration: underline;
			}
			.value{
				flex: 0 0 90px;
				text-align: right;
				position: relative;
				.iconfont-upload-pic{
					font-size: 80px;
					color: $main-adorn-color;
				}
				.selectPicInput{
					position: absolute;
					right: 0;
					top: 0;
					width: 80px;
					height: 80px;
					z-index: 1;
				}
			}
			.selectedImg{
				width: 100%;
			}
		}
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
			color: $mainTextColor !important;
		}
	}
	.update2{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: $mainTextColor !important;
		}
	}
}
</style>
<template>
  <div class="realNameBox">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">实名认证</div>
		<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
	</m-header>
	<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
		<div class="paddingWing f-12 lineHeight textJustify tip4model2 textIndent">
			<div>
				1.请仔细填写真实姓名，切记登录密码与安全密码。
			</div>
			<div class="placeholderLine4"></div>
			<div>
				2.若实名信息有误，每修改一次要花帮扶券。
			</div>
		</div>
	</van-dialog>
	<!-- 实名认证 -->
	<div class="realName">
		<div class="tip4model4Green">
			<b class="textBold">温馨提示：</b>
			<div class="textJustify">
				尊敬的原始矿工实名前请认真阅读以下规则：<br>
				【1】实名认证年龄范围为18~70周岁，若超过70周岁，需找首页的客服额外申请。<br>
				【2】实名信息是用户之间交换矿石时的重要凭据，提交实名后需待客服审核，每个账号只有3次实名的机会，务必认真填写。<br>
				【3】平台为保证交易的顺利进行，<b class="red">【真实姓名要和支付宝、微信中的实名信息一致，且支付宝和微信都要设置照片头像】</b>，交易的时候若遇到实名信息不一致的问题欢迎向平台反馈，情况属实买方会得到贡献值奖励。<br>
				【4】请矿工们预先在支付宝的【设置--隐私--常用隐私设置】里开启【向好友公开我的真实姓名】和【通过手机号查找到我】的功能。否则交易的时候买家若无法查找到您的支付宝而无法完成交易的，客服介入调查属实后会取消交易且处理卖方账号。<br>
				<!-- 【5】请矿工们预先在微信的【我--设置--账号与安全】中绑定手机号，该手机号务必是注册帮扶链的手机号。否则交易的时候买家若无法通过手机号向你转账的，客服介入调查属实后会取消交易。<br> -->
				<span class="red">【5】微信号默认为注册手机号，您的微信若没绑定该手机号，请先在微信的【我--设置--账号与安全】中绑定，且在[设置--隐私--添加我的方式]里打开用手机号搜索到我的功能；若没绑定或搜索不到，实名审核不会通过。</span><br>
				【6】矿工点对点交易，所有资金不经过平台，无私募、无认筹、无充值提现端口。<br>
			</div>
			 <b class="textBold">提交实名认证后即代表您已认真阅读以上规则，并同意加入矿工联盟</b>
		</div>
		<van-field v-model="mobilePhone" disabled clearable label="手机号"/>
		<div class="tip4modelRedText paddingWing textJustify margT10">
			填写昵称请注意：请不要复制微信里的表情文字，需手写文字、字母或数字，以免导致实名无法提交<br>
		</div>
		<van-field v-model="form.nickName" required clearable label="昵称" :placeholder="errorHint.nickName" maxlength="20" @blur="validate('nickName')" :error-message="errorInfo.nickName"/>
		<!-- <van-field v-model="form.telPhone" required clearable label="手机号" right-icon="question-o" :placeholder="errorHint.telPhone" maxlength="11"
		@click-right-icon="$toast(errorHint.telPhone)"
		@blur="validate('telPhone')"
		:error-message="errorInfo.telPhone"/> -->
		<van-field v-model="form.wechartNum" :required="form.actived==2?true:false" :disabled="form.actived==2?false:true" clearable label="微信号" maxlength="20" :placeholder="errorHint.wechartNum" @blur="validate('wechartNum')" :error-message="errorInfo.wechartNum"/>
		<van-field v-model="form.alipayNum" required clearable label="支付宝" maxlength="24" :placeholder="errorHint.alipayNum" @blur="validate('alipayNum')" :error-message="errorInfo.alipayNum"/>
		<!-- <van-field v-model="form.bankCard" required clearable label="银行卡号" right-icon="question-o" :placeholder="errorHint.bankCard"
		@click-right-icon="$toast(errorHint.bankCard)"
		@blur="validate('bankCard')"
		:error-message="errorInfo.bankCard"/> -->
		<van-field v-model="form.idCard" required clearable label="身份证号" maxlength="18" type="password" :placeholder="errorHint.idCard" @blur="validate('idCard')" :error-message="errorInfo.idCard"/>
		<van-field v-model="form.idCardSure" required clearable label="确认身份证号" maxlength="18" type="password" :placeholder="errorHint.idCardSure" @blur="validate('idCardSure')" :error-message="errorInfo.idCardSure"/>
		<van-field v-model="form.realName" required clearable label="真实姓名" placeholder="请填写真实姓名" maxlength="15" @blur="validate('realName')" :error-message="errorInfo.realName"/>
		  <!-- <div class="line">
		  	<span class="label">支付宝个人主页</span>
			<span class="text"></span>
		  	<span class="value">
		  		<i class="iconfont iconfont-upload-pic"></i>
		  		<input accept="image/*" class="selectPicInput" style="opacity:0" type="file" @change="uploadIMG2($event)"/>
		  	</span>
		  </div>
		  <div class="line" v-if="!pic2">
			<input accept="image/*" class="selectPicInput2" style="opacity:0" type="file" @change="uploadIMG2($event)"/>
		  	<img style="width: 100%;" src="https://www.assist-china.co.ax/image/alipay.jpg">
		  </div>
		  <div class="line" v-if="pic2">
			<input accept="image/*" class="selectPicInput2" style="opacity:0" type="file" @change="uploadIMG2($event)"/>
		  	<img class="selectedImg" :src="pic2"/>
		  </div> -->
		<!-- <div class="line tip4modelRedText">
			注意：<br>
			1.实名审核通过后2张照片会被系统自动删除，上传证件照片的时候，请按照模板要求用纸条盖住证件头像。<br>
			2.实名认证年龄范围为18~70周岁，若不在该范围内，需找首页的客服额外申请。
		</div> -->
		<div class="tip4modelRedText paddingWing textJustify margT10">
			注意事项强调：<br>
			1.实名认证年龄范围为18~70周岁，若超过70周岁，需找首页的客服额外申请。<br>
			2.为了保证照片能够顺利上传，请在拍照后，先对照片进行裁剪，保证清晰可见，方便审核员快速审核。<br>
			3.实名审核通过后照片会被系统自动删除，拍摄证件照片的时候，请按照模板要求用纸条盖住证件头像。<br>
			4.所实名的矿工请在微信的【支付-支付管理】中开通'允许通过手机号向我转账'的功能，该手机号务必是注册帮扶链的手机号。<br>
			5.小纸条上需写上"帮扶链实名认证专用+手机号+当天日期"，<b class="green textBold">照片上任何内容严禁P图，审核时，P图的账号会被驳回或冻结处理。</b>
		</div>
		<!-- <form enctype="multipart/form-data">
			
		</form> -->
		<!-- <form method="POST" enctype="multipart/form-data">
		   <fieldset>
		     <legend>单一文件上传实例：</legend>
		       文件：<input type="file" name="file" id="file1" @change="uploadIMG($event)"/><br/>
		      <input type="button" value="上传" @click="uploadIMG4File2"/><br/>
		    </fieldset>
		</form> -->
		<!-- <van-uploader multiple result-type="file" :after-read="afterRead" /> -->
		<div class="line">
			<span class="label">身份证正面照片</span>
			<span class="text" @click="showExamplePic">点我查看详细模板</span>
			<span class="value">
				<i class="iconfont iconfont-upload-pic"></i>
				<input accept="image/*;capture=camera" class="selectPicInput" style="opacity:0" type="file" @change="uploadIMG($event)"/>
			</span>
		</div>
		<div class="line" v-if="!form.idCardPic">
			<input accept="image/*;capture=camera" class="selectPicInput2" style="opacity:0" type="file" @change="uploadIMG($event)"/>
			<img style="width: 100%;" :src="$api.domainName + '/image/idt.jpg'">
		</div>
		<div class="line">
			<input accept="image/*;capture=camera" class="selectPicInput2" style="opacity:0" type="file" @change="uploadIMG($event)"/>
			<img class="selectedImg" :src="form.idCardPic"/>
		</div>
		<van-field v-model="form.securityPassword" required clearable label="设置安全密码" type="password" :placeholder="errorHint.securityPassword" maxlength="20" @blur="validate('securityPassword')" :error-message="errorInfo.securityPassword"/>
		<van-field v-model="form.securityPassword2" required clearable label="确认安全密码"  type="password" :placeholder="errorHint.securityPassword2" maxlength="20" @blur="validate('securityPassword2')" :error-message="errorInfo.securityPassword2"/>
		<div class="line tip4modelRedText">
			安全密码就是交易时所用到的密码
		</div> 
		<div class="placeholderLine40"></div>
		<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="submitRealNameLoding" @click="submitRealNameBtn">提 交</van-button>
		<div class="sureAppointBtnBox">
			<div class="tip4model3RedText textJustify">
				<b class="textBold">若遇到在微信中照片上传不了的解决办法：</b><br>
				1、换浏览器操作，QQ、UC浏览器优先。<br>
				<div class="placeholderLine4"></div>
				<b class="textBold">若遇到证件照片却上传不了的解决办法：</b><br>
				1、把拍照下来的证件照片重新截图一下用截图过来的照片上传。<br>
				<div class="placeholderLine4"></div>
				<b class="textBold">若遇到提交实名一直转圈圈或提示区块拥堵的解决办法：</b><br>
				1、检查网络信号是否良好。<br>
				2、把证件照片裁剪得尽可能小一点。<br>
				3、更换浏览器，QQ、UC浏览器优先。<br>
				4、可能个人手机的系统版本不是最新的，请借用家人的其他手机提交实名试试。<br>
				5、检查昵称中是否有表情符号，若有请删除表情符号。<br>
			</div>
		</div>
	</div>
	<van-dialog
	  v-model="showIdCardPicExmple"
	  title="照片模板"
	  :showConfirmButton="true"
	  confirmButtonText="OK"
	>
		<div class="placeholderLine10"></div>
		<img style="width: 100%;" :src="$api.domainName + '/image/ids.jpg'">
	</van-dialog>
	<!-- <van-dialog
	  v-model="showIdCardPicExmple2"
	  title="照片模板"
	  :showConfirmButton="true"
	  confirmButtonText="OK"
	> 
		<div class="placeholderLine10"></div>
		<img style="width: 100%;" src="https://www.assist-china.co.ax/image/alipay.jpg">
	</van-dialog> -->
	<!-- <div class="shadeMaster" v-if="isWeixin">
		<p class="f-20">实名前请先点开右上角按钮选择<br>
			<span class="f-20">【在浏览器中打开并登录】</span>
		</p>
		<img class='img' src="../../assets/image/open_right.jpg" alt="pic">
	</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
/* import EXIF from 'exif-js'; */
import { Dialog } from 'vant';
import { Toast } from 'vant';
import { ImagePreview } from 'vant';

export default {
	data() {
		return {
			multiple:true,
			showTipModel:false,
			result:"",
			loading:true,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:{},
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
				idCardSure:"",
				idCardPic:"",
			},
			pic2:'',
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
				idCard:"",
				idCardSure:"",
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
				idCardSure:"",
			},
			updateValidate:true,
			flag:'',
			isRealName:true,
			userId:'',
			projectName:'',
			mobilePhone:'',
			uploadType:'',
			showIdCardPicExmple:false,
			showIdCardPicExmple2:false,
			submitRealNameLoding:false,
			dataOri:'',
			isShowPic2:false,
			isWeixin:''
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		_this.projectName = _this.$api.projectName;
		_this.$cookies.set('isRefreshUserInfo',1,_this.$cookies.cookiesTime);
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
			_this.mobilePhone = _this.userInfo.mobilePhone;
			_this.form.wechartNum = _this.userInfo.mobilePhone;
			/* _this.mobilePhone = _this.$JsEncrypt.decrypt(_this.userInfo.mobilePhone); */
			/* _this.form.wechartNum = _this.userInfo.mobilePhone;
			_this.form.alipayNum = _this.userInfo.mobilePhone; */
			//console.log(_this.mobilePhone,_this.form.wechartNum,_this.form.alipayNum);
			if(_this.userInfo.actived==2){
				_this.form = _this.userInfo;
				_this.getAssistUserInfoPicByUserId();
			}
		}else{
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		_this.initializeHintInfo();
		//_this.bsTip();
	},
	methods:{
		back(){
			this.$router.replace('my');
		},
		bsTip(){
			let _this = this;
			_this.isWeixin = _this.$utils.isWeixin();
		},
		/* bsTip(){
			let _this = this;
			let isWeixin = _this.$utils.isWeixin();
			if(isWeixin){
				Dialog.alert({
				  title: '系统提示',
				  message: _this.$api.bsTip
				}).then(() => {
				  // on close
				});
			}
		}, */
		getAssistUserInfoPicByUserId(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.getAssistUserInfoPicByUserId, 'GET', null, function(res){
				if(res.code == _this.$api.CODE_OK){
					_this.form.idCardPic = res.data.idCardPic;
					_this.pic2 = res.data.gesturePic;
					_this.form = res.data;
					//console.log("form",_this.form);
				}
			})
		},
		uploadIMG4File2(e){
			let _this = this;
			var formdata = new FormData();
			formdata.append("file", document.getElementById("file1").files[0]);
			formdata.append('submit', false);
			_this.$ajax.ajax4FileUpload(_this.$api.fileUpload1, 'POST', formdata, function(res){
				if (res.code == _this.$api.CODE_OK) { //
					console.log(res.data);
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					});
				}
			},function(){
				
			})
		},
		uploadIMG(e) {
			let _this = this;
			console.log("into uploadImg");
			_this.toast = Toast.loading({
			  duration: 3000, // 持续展示 toast
			  closeOnClickOverlay:true,
			  message: "正在解析图片"
			});
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			//console.log("pic_size(MB)", files[0].size / 1024 / 1024);
			if (files[0].size / 1024 / 1024 > 2) {
			   // _this.$toast('上传图片大小不能超过 3MB');
			   Dialog.alert({
			     title: '系统提示',
			     message: '上传图片大小不能超过 2MB，请先在相册里的照片编辑中进行裁剪处理'
			   }).then(() => {
			     // on close
			   });
			} else {
			  //console.log('正在获取图片');
			  _this.toast.message = `正在获取图片`;
			  _this.imgPreview(files[0]);
			}
		},
		//获取图片
		imgPreview(file) {
			let _this = this;
			_this.toast.message = `正在压缩图片`;
			let Orientation = null;
			//判断支不支持FileReader
			if (!file || !window.FileReader) return false;
			if (/^image/.test(file.type)) {
				/* EXIF.getData(file, function() {
					EXIF.getAllTags(this);   
					Orientation = EXIF.getTag(this, 'Orientation');  
				}); */
			  //创建一个reader  
			  let reader = new FileReader();
			  //将图片转成base64格式
			  reader.readAsDataURL(file);
			  //读取成功后的回调
			  reader.onloadend = function(res) {
				let result = this.result;
				let image = new Image();
				image.src = result;//base64
				image.onload = function() {
					//alert("image.onload");
				    let expectWidth = this.naturalWidth;  
				    let expectHeight = this.naturalHeight; 
				    let scale = expectWidth / expectHeight;
				    let canvas = document.createElement("canvas");
				    let ctx = canvas.getContext("2d");
				    canvas.width = expectWidth;
				    canvas.height = expectHeight;
					//如果方向角不为1，都需要进行旋转
					ctx.drawImage(image,0,0,expectWidth,expectHeight);
				    let dataOri = canvas.toDataURL("image/png");
					let img = new Image();
					img.src = dataOri;//base64
					// //console.log("dataOri",dataOri);
					//console.log('********未压缩前的图片大小(KB)********');
					//console.log(dataOri.length / 1024);
					img.onload = function() {
						let data = _this.$utils.compress(img, 0.2);//调整压缩比例
						_this.form.idCardPic = data;
					}
				}
			  }
			}
		},
		uploadIMG2(e) {
			let _this = this;
			// Toast.clear();
			_this.isShowPic2 = true;
			_this.toast = Toast.loading({
			  duration: 3000, // 持续展示 toast
			  closeOnClickOverlay:true,
			  message: "正在解析图片"
			});
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			//console.log("pic_size(MB)", files[0].size / 1024 / 1024);
			if (files[0].size / 1024 / 1024 > 2) {
			   // _this.$toast('上传图片大小不能超过 8MB');
			   Dialog.alert({
			     title: '系统提示',
			     message: '上传图片大小不能超过 2MB，请先在相册里的照片编辑中进行裁剪处理'
			   }).then(() => {
			     // on close
			   });
			} else {
			  //console.log('正在获取图片');
			  _this.toast.message = `正在获取图片`;
			  _this.imgPreview2(files[0]);
			}
		},
		imgPreview2(file) {
			let _this = this;
			_this.toast.message = `正在压缩图片`;
			let Orientation = null;
			//判断支不支持FileReader
			if (!file || !window.FileReader) return false;
			if (/^image/.test(file.type)) {
			  //创建一个reader
			  /* EXIF.getData(file, function() {
			      EXIF.getAllTags(this);   
			      Orientation = EXIF.getTag(this, 'Orientation');  
			  });  */
			  let reader = new FileReader();
			  //将图片转成base64格式
			  reader.readAsDataURL(file);
			  //读取成功后的回调
			  reader.onloadend = function(res) {
				let result = this.result;
				let image = new Image();
				image.src = result;//base64
				image.onload = function() {
					//alert("image.onload");
				    let expectWidth = this.naturalWidth;  
				    let expectHeight = this.naturalHeight; 
				    let scale = expectWidth / expectHeight;
				    let canvas = document.createElement("canvas");
				    let ctx = canvas.getContext("2d");
				    canvas.width = expectWidth;
				    canvas.height = expectHeight;
				    //如果方向角不为1，都需要进行旋转 
				    /* if(Orientation && Orientation != "" && Orientation != 1){  
				        let degree=0;
				        switch(Orientation){
				            case 6://需要顺时针（向左）90度旋转  
				                degree=90;
				                canvas.width = expectHeight;
				                canvas.height = expectWidth;
				                ctx.translate(expectHeight / 2,expectWidth / 2);
				                ctx.rotate(degree * Math.PI / 180);
				                ctx.translate(-expectWidth / 2,-expectHeight / 2);
				                ctx.drawImage(image,0,0,expectWidth,expectHeight);
				                break;
				            case 8://需要逆时针（向右）90度旋转
				                degree=-90;
				                canvas.width = expectHeight;
				                canvas.height = expectWidth;
				                ctx.translate(expectHeight / 2,expectWidth / 2);
				                ctx.rotate(degree * Math.PI / 180);
				                ctx.translate(-expectWidth / 2,-expectHeight / 2);
				                ctx.drawImage(image,0,0,expectWidth,expectHeight);
				                break;
				            case 3://需要180度旋转  
				                degree=-180;
				                ctx.rotate(degree * Math.PI / 180);
				                ctx.drawImage(image,-expectWidth,-expectHeight,expectWidth,expectHeight);
				                break;
				        }         
				    }else{
				        ctx.drawImage(image,0,0,expectWidth,expectHeight);
				    } */
					ctx.drawImage(image,0,0,expectWidth,expectHeight);
				    let dataOri = canvas.toDataURL("image/png");
					let img = new Image();
					img.src = dataOri;//base64
					// //console.log("dataOri",dataOri);
					//console.log('********未压缩前的图片大小(KB)********');
					//console.log(dataOri.length / 1024);
					img.onload = function() {
						let data = _this.$utils.compress(img, 0.2);//调整压缩比例
						_this.pic2 = data;
					}
				}
			  }
			}
		},
		showExamplePic(){
			this.showIdCardPicExmple = true;
		},
		showExamplePic2(){
			this.showIdCardPicExmple2 = true;
		},
		showTip(){
			this.showTipModel = true;
		},
		initializeHintInfo(){
			let _this = this;
			_this.errorHint = {
				nickName:"请填写1~7位昵称",
				// telPhone:"请填写与微信绑定的手机号",
				realName:"请正确填写真实姓名",
				alipayNum:"请填写自己的支付宝账号",
				wechartNum:"请填写绑定了登录手机号的微信号",
				address:"",
				loginPassword:"请填写新登录密码",
				securityPassword:"请填写安全密码",
				securityPassword2:"请确认安全密码",
				sureNewPassword:"请确认新密码",
				verificationCode:"请填写验证码",
				bankCard:"请填写银行卡号",
				idCard:"请填写身份证号",
				idCardSure:"请再次填写身份证号",
			}
		},
		submitRealNameBtn(){
			let _this = this;
			//let SRNTimes = localStorage.getItem('SRNTimes');
			/* if(SRNTimes) {
				let tip = '';
				if(SRNTimes==2){
					tip = '您只剩下最后1次实名机会，请认真核实资料，按模板上传照片';
				}
				if(SRNTimes>=4){
					tip = '实名次数已用完';
				} 
			}*/
			let params = {
				id:_this.userInfo.id,
				nickName:_this.form.nickName,
				realName:_this.form.realName,
				alipayNum:_this.form.alipayNum,
				wechartNum:_this.form.wechartNum,
				idCard:_this.form.idCard,
				idCardPic:_this.form.idCardPic,
				/* gesturePic:_this.pic2, */
				securityPassword:_this.form.securityPassword,
			}
			// //console.log('params',params)
			if(_this.$utils.hasNull(params)){
				_this.$toast('系统提示：请填写完整信息');
				return;
			}
			if(_this.$utils.hasVal(_this.errorInfo)){
				_this.$toast(`系统提示：请按要求填写信息`);
				return;
			}
			if(_this.form.securityPassword!=_this.form.securityPassword2){
				_this.$toast(`系统提示：2次密码不一样`);
				return;
			}
			params.securityPassword = _this.$JsEncrypt.encrypt(_this.form.securityPassword);
			_this.submitRealNameLoding = true;
			_this.$ajax.ajax4NotTime(_this.$api.updateAssistUsrInfo4RealName, 'POST', params, function(res){
				//console.log('res.code',res.code);
				//标记该设备已经提交过实名认证
				/* if(SRNTimes){
					localStorage.setItem('SRNTimes',(parseInt(SRNTimes)+1));
				}else{
					localStorage.setItem('SRNTimes',1);
				} */
				
				_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
				if(res.code == _this.$api.CODE_OK){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.checkTip
					}).then(() => {
					  // on close
					  _this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					  _this.$router.replace("my");
					});
				}else{
					//'请按照提交按钮上方的提示操作'
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.submitRealNameLoding = false;
			})
			/* if(params.alipayNum == params.wechartNum && params.wechartNum == _this.mobilePhone){
			}else{
				if(params.alipayNum != _this.mobilePhone){
					Dialog.alert({
					  title: '系统提示',
					  message: '请填写和支付宝绑定的手机号作为支付宝号且与登录手机号保持一致'
					}).then(() => {
					});
				}
				if(params.wechartNum != _this.mobilePhone){
					Dialog.alert({
					  title: '系统提示',
					  message: '请填写和微信绑定的手机号作为微信号且与登录手机号保持一致'
					}).then(() => {
					});
				}
			} */
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
				if(_this.$reg.phone2.test(_this.form.telPhone)){
					_this.errorInfo.telPhone = '';
				}else{
					_this.errorInfo.telPhone = _this.errorHint.telPhone;
				}
			}else if(key == 'realName'){
				/* if(_this.$reg.phone2.test(_this.form.realName)){
					_this.errorInfo.realName = _this.errorHint.realName;
				}else{
					_this.errorInfo.realName = '';
				} */
				if((_this.form.realName.length)>1&&(_this.form.realName.length)<=15){
					_this.errorInfo.realName = '';
				}else{
					_this.errorInfo.realName = _this.errorHint.realName;
				}
			}else if(key == 'alipayNum') {
				if(_this.$reg.alipay.test(_this.form.alipayNum)){
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
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'已经绑定',
				  showCancelButton:true,
				  cancelButtonText:'先去微信绑定',
				  message: "请确认所注册的【手机号】是否已经绑定了该【微信号】? 若未绑定，实名审核可能会被驳回！"
				}).then(() => {
				  // on confirm
				  
				})
				if(_this.$reg.weichat.test(_this.form.wechartNum)){
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
					_this.errorInfo.securityPassword2 = "2次密码不一致";
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
			}else if(key == 'idCardSure'){
				if(_this.form.idCard == _this.form.idCardSure){
					_this.errorInfo.idCardSure = '';
				}else{
					_this.errorInfo.idCardSure = "2次证件号不一致";
				}
			}
		},
	}
}
</script>
