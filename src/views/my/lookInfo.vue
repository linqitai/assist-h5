<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.lookInfo{
		font-size: 0.75rem;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: $main-box-color;
		z-index: 2;
		/* .van-dropdown-menu{
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
		} */
		.lookInfoPage{
			color: $mainTextColor;
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.van-field__label{
				width: 70px !important;
				line-height: 30px;
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
						flex: 0 0 60px;
						$heightwidht:60px;
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
	<div class="lookInfo">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				查询他人信息
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="lookInfoPage">
			<van-cell-group>
				<van-field v-model="mobilePhone" clearable label="手机号" placeholder="请填写对方的手机号" maxlength="11">
					<van-button slot="button" size="small" color="#ffae00" :loading="loading" @click="getUserInfo">查询</van-button>
				</van-field>
				<van-field v-model="nickName" clearable label="昵称" placeholder="请填写对方的昵称" maxlength="12">
					<van-button slot="button" size="small" color="#ffae00" :loading="loading" @click="getUserInfoByNickName">查询</van-button>
				</van-field>
			</van-cell-group>
			<div class="placeholderLine10"></div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				showTipModel:false,
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
				mobilePhone:'',
				nickName:'',
				thisUserInfo:"",
				userFreezeInfo:"",
				userInfo:""
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				/* _this.$cookies.remove('userId'); */
				localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token');
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
			getUserInfoByNickName(){
				let _this = this;
				let params = {
					nickName: _this.nickName
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getUserIdByObj, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						//_this.thisUserInfo = res.data;
						_this.$router.push({path:"my4Other",query:{lookUserId:res.data}});
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			getUserInfo() {
				let _this = this;
				let params = {
					mobilePhone: _this.mobilePhone
				}
				if(!_this.$reg.phone2.test(params.mobilePhone)){
					_this.$toast('手机号格式有误');
					return;
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getUserIdByObj, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						//_this.thisUserInfo = res.data;
						_this.$router.push({path:"my4Other",query:{lookUserId:res.data}});
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
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
			submit(){
				let _this = this;
				let params = {
					unFreezeUserId: _this.thisUserInfo.userId
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.unFreeze, 'POST', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast('解冻成功');
						_this.getUserInfo();
						_this.userFreezeInfo = "";
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
		}
	}
</script>
