<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.myWord{
		font-size: 0.75rem;
		color: $mainTextColor;
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
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		}
		.van-cell__value, .van-cell__value--alone, .van-field__control {
		    color: #FFFFFF !important;
		} */
		.myWordPage{
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $mainBorderColor;
				/* .van-cell__value, .van-cell__value--alone, .van-field__control {
				    color: #FFFFFF !important;
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
			.myCell2{
				border-bottom: 1px solid $mainBorderColor;
			}
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
				.tip{
					margin-bottom: 6px;
					margin-left: $boxPadding2;
					font-size: 0.812rem;
					color:$mainTextColor;
				}
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="myWord">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我要诉讼
			</div>
			<i class="iconfont iconfont-message rightBox icon" @click="toListView"></i>
		</m-header>
		<div class="myWordPage">
			<div class="myCell">
				<div class="flex label">
					诉讼类型
				</div>
				<div class="flex align-right">
					<van-dropdown-menu>
					  <van-dropdown-item v-model="form.type" :options="option1" />
					</van-dropdown-menu>
				</div>
			</div>
			<!-- <div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的申诉标题" />
			</div> -->
			<div class="myCell2">
				<van-cell-group>
				  <van-field
				    v-model="form.remark" @blur="validate('wordContent')"
				    rows="2" required
				    autosize clearable
				    type="textarea"
				    maxlength="200"
				    placeholder="请填写内容(不超过200字)"
				    show-word-limit
				  />
				</van-cell-group>
			</div>
			<div class="sureBtn">
				<div class="tip4model3 paddingWing">为了提高诉讼质量，控告他人要使用{{paramterInfo.complainNeedTicket}}个帮扶券，为他人辩护需使用{{paramterInfo.complainNeedTicket/2}}个帮扶券，且参与诉讼个人算力至少要达到{{paramterInfo.complainNeedMcv}}G</div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="complainBtn">提交</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				form:{
					type:0,
					remark:''
				},
				option1: [
					{ text: '控告TA', value: 0 },
					{ text: '为TA辩诉', value: 1 }
				],
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
				paramterInfo:''
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
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
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`,
					query:{
						targetUserId:_this.$route.query.userId
					}
				});
			},
			getAssistParameter4Web(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistParameter4Web, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.paramterInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			validate(flag){
				let _this = this;
				if(flag == 'wordTitle'){
					if(_this.form.wordTitle==''){
						_this.$toast('申诉标题不能为空');
						return;
					}
				}else if(flag == 'wordContent'){
					if(_this.form.wordContent==''){
						_this.$toast('申诉内容不能为空');
						return;
					}
				}
			},
			complainBtn(){
				let _this = this;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: `请再次确认是否真的要提交诉讼?`
				}).then(() => {
					// on confirm
					let params = {
						targetUserId: _this.$route.query.targetUserId,
						type: _this.form.type,
						remark: _this.form.remark
					}
					if(_this.$utils.hasNull(params)){
						_this.$toast('请填写完整信息');
						return;
					}
					_this.loading = true;
					_this.$ajax.ajax(_this.$api.update4Complain, 'POST', params, function(res) {
						if (res.code == _this.$api.CODE_OK) {
							_this.$toast('控告成功');
							_this.back();
						}else{
							_this.$toast(res.message);
						}
					},function(){
						_this.loading = false;
					})
				}).catch(() => {
				  // on cancel
				})
			},
		}
	}
</script>
