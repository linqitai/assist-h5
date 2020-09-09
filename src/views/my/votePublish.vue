<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.votePublish{
		font-size: 0.75rem;
		color: $mainTextColor;
		@include pageNoHeight4Scroll();
		background-color: $main-box-fh-bg-color;;
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
		.votePublishPage{
			background-color: $main-box-fh-bg-color;
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
			.myCell4{
				padding-top: 6px;
				padding-left: 6px;
			}
			.sureBtn{
				
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
	<div class="votePublish">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				发起投票申请
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<div class="votePublishPage">
			<div class="myCell">
				<van-field required clearable @blur="validate('voteTitle')" v-model="form.voteTitle" maxlength="20" placeholder="请填写20字内的投票标题" />
			</div>
			<div class="myCell2">
				<van-cell-group>
				  <van-field
				    v-model="form.remark" @blur="validate('remark')"
				    rows="2" required
				    autosize clearable
				    type="textarea"
				    maxlength="500"
				    placeholder="请填写发起投票的原因及内容(不超过500字)"
				    show-word-limit
				  />
				</van-cell-group>
			</div>
			<div class="tip4model3 tip" v-if="form.questionVoList">
				向左滑动方块可进行删除与编辑投票选项
			</div>
			<div class="myCell3">
				<div v-for="(item,index) in form.questionVoList" :key="item.id">
					<van-swipe-cell>
					  <van-cell :border="false" :title="'选项'+ (index+1) + ':' +item.questionTitle" :value="item.questionContent" />
					  <template #right>
					    <van-button square type="danger" text="删除" @click="deleteQuestion(item)"/>
					    <van-button square type="primary" text="编辑" @click="editQuestionBtn(item)"/>
					  </template>
					</van-swipe-cell>
				</div>
			</div>
			<div class="myCell4" v-if="addOrEditVoteType=='edit'">
				<van-button icon="plus" type="primary" @click="addSelectBtn">添加选项</van-button>
			</div>
			<div class="sureBtn">
				<div class="tip4model1">为了提高所发起投票申请的质量，只有重要节点能发起投票申请。重要节点：白银及以上工会会长、代理、志愿者、服务商、客服。</div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提交</van-button>
			</div>
		</div>
		<van-action-sheet v-model="showAddSelectModel" title="添加选项">
			<div class="hangBuyContent">
				<van-cell-group>
					<van-field v-model="formQuestion.questionTitle" label="标题" type="text" required clearable placeholder="请填写标题"/>
					<van-field v-model="formQuestion.questionContent" label="描述文字" type="text" clearable placeholder="请填写对选项的注释(选填)"/>
				</van-cell-group>
				<div class="sureAppointBtnBox">
				    <van-button size="normal" type="primary" :loading="loading4Submit" :block="true" @click="submitAddSelect">提 交</van-button>
				</div>
			</div>
		</van-action-sheet>
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
					voteTitle:'',
					remark:''
				},
				form4Select:{
					voteTitle:'',
					remark:''
				},
				formQuestion: {
					id:'',
					voteId: '',
					questionTitle: '',
					questionContent: '',
				},
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
				loading4Submit:false,
				showAddSelectModel:false,
				id:'',
				questionId:'',
				addOrEditVoteType:'',
				addOrEditQuestionType: '',
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
			if(_this.$route.query.intoType=='edit'){
				_this.getVoteInfo();
				_this.addOrEditVoteType = 'edit';
			}else{
				_this.addOrEditVoteType = 'add';
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
			addSelectBtn(){
				let _this = this;
				_this.showAddSelectModel = true;
				_this.addOrEditQuestionType = 'add';
			},
			deleteQuestion(item){
				let _this = this;
				_this.$ajax.ajax(_this.$api.deleteAssistQuestionById + item.id, 'POST', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast(res.message);
						_this.getVoteInfo();
					}else{
						_this.$toast(res.message);
					}
				},function(){
					//_this.$toast(res.message);
				})
			},
			editQuestionBtn(item){
				let _this = this;
				_this.showAddSelectModel = true;
				_this.addOrEditQuestionType = 'edit';
				_this.questionId = item.id;
				_this.formQuestion.questionTitle = item.questionTitle;
				_this.formQuestion.questionContent = item.questionContent;;
			},
			submitAddSelect(){
				let _this = this;
				let params = {
					voteId: _this.formQuestion.voteId,
					questionTitle: _this.formQuestion.questionTitle,
					questionContent: _this.formQuestion.questionContent,
				}
				let url = '';
				if (_this.addOrEditQuestionType == 'add') {
				  url = _this.$api.insertAssistQuestion;
				} else if (_this.addOrEditQuestionType == 'edit') {
				  params.id = _this.questionId;
				  url = _this.$api.updateAssistQuestion;
				}
				_this.$ajax.ajax(url, 'POST', params, function(res) {
				  //console.log('res', res);
				  if (res.code == _this.$api.CODE_OK) {
				    _this.$toast(`${_this.addOrEditQuestionType=='add'?'添加':'修改'} 选项成功`);
				    _this.getVoteInfo();
				  }
				},function(){
					_this.showAddSelectModel = false;
				})
			},
			sureQuestionBtn(formName) {
			  console.log('formQuestion', this.formQuestion);
			  
			},
			validate(flag){
				let _this = this;
				if(flag == 'voteTitle'){
					if(_this.form.voteTitle==''){
						_this.$toast('标题不能为空');
						return;
					}
				}else if(flag == 'remark'){
					if(_this.form.remark==''){
						_this.$toast('内容不能为空');
						return;
					}
				}
			},
			getVoteInfo(){
				let _this = this;
				_this.id = _this.$route.query.id;
				_this.formQuestion.voteId = _this.id;
				//console.log('_this.id',_this.id);
				_this.$ajax.ajax(_this.$api.getAssistVote + _this.id, 'GET', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.form = res.data;
						/* _this.isDead = _this.judgeTime4VoteStatus(_this.voteInfo.deadTime);
						_this.getAssistAnswer4Self();
						_this.getAssistAnswerListPage(); */
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
			submit(){
				// console.log("submit");
				let _this = this;
				// console.log("_this.userInfo.platformTicket",_this.userInfo.platformTicket);
				if(_this.userInfo.platformTicket<1){
					Dialog.alert({
						title: "系统提示",
						confirmButtonText:'知道了',
						message: "发起投票需使用1个帮扶券，您的帮扶券不够"
					}).then(() => {
					  // on confirm
					})
					return;
				}
				if(_this.form.title==''){
					_this.$toast('标题不能为空');
					return;
				}
				if(_this.form.content==''){
					_this.$toast('内容不能为空');
					return;
				}
				//为了提高留言质量，提交留言需使用1张帮扶券，您是否确定要留言？
				Dialog.confirm({
				  title: '确认信息',
				  confirmButtonText:'确定',
				  message: '发起投票申请需花1个券，且需要经过平台审核，您是否确定要发起该投票申请？'
				}).then(() => {
					// on confirm
					let params = {
						/* userId: _this.userId, */
						voteTitle: _this.$utils.clearSpecialRelax(_this.form.voteTitle),
						remark: _this.$utils.clearSpecialRelax(_this.form.remark),
					}
					let url = '';
					if (_this.addOrEditVoteType == 'add') {
					  url = _this.$api.insertAssistVote;
					} else if (_this.addOrEditVoteType == 'edit') {
					  url = _this.$api.updateAssistVote;
					  params.id = _this.form.id;
					}
					_this.loading = true;
					_this.$ajax.ajax(url, 'POST', params, function(res) {
						_this.loading = false;
						if (res.code == _this.$api.CODE_OK) {
							_this.$toast('提交成功');
							_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
							/* _this.$router.push({
								path: `/myVoteList`
							}); */
							_this.$router.go(-1);
						}else{
							Dialog.alert({
								title: "系统提示",
								message: res.message
							}).then(() => {
							  // on confirm
							})
						}
					})
				}).catch(() => {
				  // on cancel
				  console.log('cancel');
				});
			},
		}
	}
</script>
