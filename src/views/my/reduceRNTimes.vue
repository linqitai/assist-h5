<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.reduce{
		font-size: 0.75rem;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: $main-box-color;
		color: $main-box-text-color;
		.reducePage{
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.van-field__label{
				width: 70px !important;
				line-height: 30px;
			}
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
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
			
			.box {
				display: flex;
				background-color: $main-box-color;
				padding: $boxPadding2;
				box-sizing: border-box !important;
				color: $mainTextColor;
				@include userSelectNone();
			}
			
			$avatorWidth:80px;
			
			.box1 {
				// height: $avatorWidth+$boxPadding1;
				margin-top: 2px;
				.flex {
					&.flex1 {
						flex: 0 0 70px;
						$heightwidht:70px;
						.name{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-blue-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 22px;
						}
					}
					&.flex2 {
						flex: 1;
						padding: 0 $boxPadding2;
						display: flex;
						flex-direction: column;
						align-content: center;
			
						.line1{
							flex: 1;
							line-height: 26px;
			
							.nick_name {
								font-size: 14px;
								height: 20px;
								line-height: 20px;
							}
			
							.level {
								background-color: $main-adorn-color;
								height: 20px;
								line-height: 20px;
								font-size: 11px;
								border-radius: 0 10px 10px 0;
								padding: 0 8px 0 4px;
								margin-left: 4px;
							}
						}
						.line{
							flex: 1;
							line-height: 20px;
							font-size: 11px;
						}
					}
				}
			}
			
			.box2 {
				margin-top: $marginTop1;
				text-align: center;
				.flex {
					flex: 1;
					.value{
						
					}
					.text {
						font-size: $fs-1;
						margin-top: 6px;
					}
				}
			}
			
			.box3 {
				margin-top: $marginTop1;
				text-align: center;
				.flex {
					flex: 1;
					.text {
						font-size: $fs-1;
						margin-top: 6px;
						line-height: 1.2em;
					}
				}
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="reduce">
		<div class="reducePage">
			<div class="placeholderLine10"></div>
			<div v-if="thisUserInfo">
				<div class="box box1">
					<div class="flex flex1">
						<div class="name">{{thisUserInfo.realName | getLastName}}</div>
					</div>
					<div class="flex flex2">
						<div class="line1">
							<div class="nick_name left">{{thisUserInfo.nickName}}</div>
							<div class="level left">{{thisUserInfo.level | getUserType}}</div>
						</div>
						<div class="line">
							<div class="left">买入次数 {{thisUserInfo.buyTimes}}</div>
							<div class="mlBox left">买入数量 {{thisUserInfo.buyAmount}}</div>
						</div>
						<div class="line">
							<div class="left">卖出次数 {{thisUserInfo.sellTimes}}</div>
							<div class="mlBox left">卖出数量 {{thisUserInfo.sellAmount}}</div>
						</div>
						<div class="line">个人限购数量 {{thisUserInfo.canBuyNum}}</div>
						<div class="line">
							<div class="left">直推人数 {{thisUserInfo.teamateNum}}</div>
							<div class="mlBox left">实名人数 {{thisUserInfo.realnameNum}}</div>
						</div>
						<!-- <div>=2000+(卖出数量-买入数量)=</div> -->
					</div>
				</div>
				<div class="box box2">
					<div class="flex flex1">
						<div class="value" @click="toBookView('1',thisUserInfo.userId)">{{thisUserInfo.teamCalculationPower}}</div>
						<div class="text">团队算力</div>
					</div>
					<div class="flex flex4">
						<div class="value" @click="toBookView('2',thisUserInfo.userId)">{{thisUserInfo.platformTicket}}</div>
						<div class="text">帮扶券</div>
					</div>
					<div class="flex flex3">
						<div class="value" @click="toBookView('3',thisUserInfo.userId)">{{thisUserInfo.contributionValue}}</div>
						<div class="text">贡献值</div>
					</div>
					<div class="flex flex2">
						<div class="value" @click="toBookView('4',thisUserInfo.userId)">{{thisUserInfo.thisWeekMineral}}</div>
						<div class="text">矿石</div>
					</div>
				</div>
				<div class="box box3">
					<div class="flex flex1">
						<div>{{thisUserInfo.myCalculationPower}}</div>
						<div class="text">TA的算力</div>
					</div>
					<div class="flex flex4">
						<div>{{thisUserInfo.temporaryFreezePlatformTicket}}</div>
						<div class="text">交易中<br>帮扶券</div>
					</div>
					<div class="flex flex3">
						<div>{{thisUserInfo.temporaryFreezeContribution}}</div>
						<div class="text">交易中<br>贡献值</div>
					</div>
					<div class="flex flex2">
						<div>{{thisUserInfo.temporaryFreezeMineral}}</div>
						<div class="text">交易中<br>矿石</div>
					</div>
				</div>
				<div class="paddingWing">
					<div class="placeholderLine10"></div>
					<div class="textCenter">
						该账户状态：{{thisUserInfo.accountStatus | accountStatus}}
					</div>
					<div class="textCenter margT10" v-if="userFreezeInfo">
						被冻结原因：{{userFreezeInfo.reason}}
					</div>
					<div class="textCenter margT10" v-if="userFreezeInfo.accountStatus == 1">
						可否解冻：{{thisUserInfo.canUnfreeze | canUnFreeze}}
					</div>
					<div class="textCenter margT10" v-if="userFreezeInfo">
						解冻所需帮扶券：{{userFreezeInfo.needTicket}}
					</div>
					<div class="textCenter margT10">
						审核结果：{{thisUserInfo.actived | activedStatus}}
					</div>
					<div class="textCenter margT10" v-if="thisUserInfo.remark">
						上次审核被驳回原因：{{thisUserInfo.remark}}
					</div>
					<div class="textCenter margT10" v-if="thisUserInfo.submitActivedNum>2">
						审核被驳回次数：{{thisUserInfo.submitActivedNum}}
					</div>
				</div>
			</div>
			<!-- <div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的留言标题" />
			</div> -->
			<!-- <div class="sureBtn">
				<van-button color="#08abee" :loading="loading" size="large" @click="getUserInfo">查看该区块状态</van-button>
			</div> -->
			<div class="placeholderLine10"></div>
			<div class="sureBtn" v-if="thisUserInfo">
				<!-- <van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large">给下级销一次</van-button>
				<div class="placeholderLine10"></div> -->
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="reduce4me">给自己销一次</van-button>
			</div>
		</div>
		<!-- <van-dialog v-model="showModelBox" title="给自己销一次" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<van-field v-model="form.loginPassword" type="password" label="登录密码" clearable placeholder="请填写登录密码" @blur="validate('loginPassword')" :error-message="errorHint.loginPassword" />
				<div class="placeholderLine20"></div>
			</div>
			<van-button type="info" @click="reduce4meEvent" :loading="loading4submit" :disabled="loading4submit" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">提 交</van-button>
		</van-dialog> -->
		<van-dialog v-model="showTipModel" title="系统提示" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="placeholderLine10"></div>
			<van-field v-model="form.loginPassword" type="password" label="登录密码" clearable placeholder="请验证登录密码" @blur="validate('loginPassword')" :error-message="errorHint.loginPassword" />
			<div class="placeholderLine10"></div>
			<div class="paddingWing f-12 lineHeight tip4model3">
				<div class="line text margT10">
					注：销一次实名次数需要花3个帮扶券
				</div>
			</div>
			<van-button type="info" @click="reduce4meEvent" :loading="loading4submit" :disabled="loading4submit" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">确 认</van-button>
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
				loading4submit:false,
				showTipModel:false,
				//定向交易
				form:{
					mobilePhone:"",
					loginPassword:"",
				},
				errorHint:{
					loginPassword:"",
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
				mobilePhone:"",
				loading:false,
				thisUserInfo:"",
				userFreezeInfo:""
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			_this.mobilePhone = localStorage.getItem('mobilePhone');
			if(_this.$utils.isNUll(_this.mobilePhone)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
			}
			_this.getUserInfo();
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
			toBookView(val,userId){
				let _this = this;
				//console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push({path:"lookBook",query:{lookUserId:userId}})
			},
			validate(key){
				let _this = this;
				if(key == 'loginPassword') {
					if(_this.$reg.password.test(_this.form[key])){
						_this.errorHint.loginPassword = '';
					}else{
						_this.errorHint.loginPassword = _this.$reg.passwordHint;
					}
				}
			},
			getUserInfo() {
				let _this = this;
				let params = {
					mobilePhone: _this.mobilePhone
				}
				if(!_this.$reg.phone.test(params.mobilePhone)){
					_this.$toast('手机号格式有误');
					return;
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoByObj, 'GET', params, function(res) {
					console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.thisUserInfo = res.data;
						_this.loading = false;
						if(_this.thisUserInfo.accountStatus == 1){
							_this.getUserFreezeInfo();
						}
					}
				})
			},
			getUserFreezeInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserFreeze + _this.thisUserInfo.userId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userFreezeInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			reduce4me(){
				console.log("submit");
				let _this = this;
				_this.showTipModel = true;
			},
			reduce4meEvent(){
				let _this = this;
				
				let params = {
					loginPassword: _this.$JsEncrypt.encrypt(_this.form.loginPassword)
				}
				_this.loading4submit = true;
				_this.$ajax.ajax(_this.$api.reduceRealNameTime, 'POST', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast('操作成功');
						_this.getUserInfo();
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(){
					_this.loading4submit = false;
					_this.showTipModel = false;
				})
			}
		}
	}
</script>
