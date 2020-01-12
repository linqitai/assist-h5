<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.vote{
		@include page4Home();
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
		.van-radio__label{
			color: $mainTextColor !important;
			height: 30px;
			line-height: 30px;
		}
		.myVotePage{
			color: $mainTextColor;
			// margin-top: $header-height;
			margin-bottom: $header-height;
			.title{
				height:40px;
				line-height:40px;
				font-size:$fs-title;
				font-weight:bold;
			}
			.time{
				color: $grayLight2;
			}
			.content{
				color:$mainTextColor;
			}
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
			}
			.result{
				height: 24px;
				line-height: 24px;
			}
		}
		.describe{
			text-indent: 2em;
			font-size:$fs-content;
			line-height:1.5em;
			color:#646464;
			letter-spacing: 1px;
			b{font-weight: bold;}
		}
	}
	
</style>
<template>
	<div class="vote">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				投票详情
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header>
		<div class="myVotePage">
			<div class="placeholderLine10"></div>
			<div class="title paddingWing">
				{{voteInfo.voteTitle}}
			</div>
			<div class="time paddingWing">{{voteInfo.createTime|getDateTimeTOHM}} ~ {{voteInfo.deadTime|getDateTimeTOHM}}</div>
			<div class="paddingWing margT10">
				<van-radio-group v-model="form.questionId" v-if="isDead==0" @change="radioChange">
				  <van-radio v-for="(item,index) in voteInfo.questionVoList" :key="item.id" :name="item.id" checked-color="#ffae00">
				  	<!-- <div class="content" v-html="voteInfo.vote1"></div> -->
				  	方案{{index + 1}}：{{item.questionTitle}}
				  </van-radio>
				</van-radio-group>
				<div class="result" v-for="(item,index) in voteInfo.questionVoList" :key="item.id" :name="item.id" v-if="isDead==1">
					方案{{index + 1}}：{{item.questionTitle}}
				</div>
			</div>
			<div class="placeholderLine10"></div>
			<div class="paddingWing">
				<div class="title" v-if="isDead==0">
					目前投票结果：
				</div>
				<div class="title" v-if="isDead==1">
					投票结果：
				</div>
				<div class="result" v-for="(item,index) in voteInfo.questionVoList" :key="item.id">
					方案{{index+1}}：{{item.num}} 票
				</div>
			</div>
			<div class="sureBtn" v-if="isDead==0">
				<!-- <div class="lookMore">查看历史投票</div> -->
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="submit(voteInfo.id)">{{btnText}}</van-button>
			</div>
		</div>
		<!-- <van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
			<div class="paddingWing f-12 lineHeight textJustify tip4model2 textIndent">
				<b>尊敬的{{projectName}}用户们</b>，平台从建立之初始终本着<b>公平、公正、公开、透明</b>的原则，把大家的综合意愿放首位。平台在每一次重要决策上的预调整或预变动，会尽量让大家参加进来<b>共同做决策</b>。同时为了避免部分用户或团队存在垄断拉票的现象，所以平台经仔细考虑后决定，只有<b>青铜级别或者青铜以上</b>的用户才能参与投票，望全体用户理解！
			</div>
		</van-dialog> -->
		<van-action-sheet v-model="showTipModel" title="问题小帮手">
			<div class="paddingWing">
				<div class="placeholderLine40"></div>
				<div class="describe">
					<b>尊敬的{{projectName}}用户们</b>，平台从建立之初始终本着<b>公平、公正、公开、透明</b>的原则，把大家的综合意愿放首位。平台在每一次重要决策上的预调整或预变动，会尽量让大家参加进来<b>共同做决策</b>。同时为了避免部分用户或团队存在垄断拉票的现象，所以平台经仔细考虑后决定，只有<b>青铜级别或者青铜以上</b>的用户才能参与投票，望全体用户理解！
				</div>
				<div class="placeholderLine40"></div>
				<div class="placeholderLine40"></div>
			</div>
		</van-action-sheet>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	// import Schart from 'vue-schart';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				projectName:'',
				radio:0,
				showTipModel:false,
				voteInfo:{
					vote1Num:10,
					vote2Num:20,
					vote1:'方案一、卖出收所卖矿石20%的手续费<br>比如卖出100个，额外收了20个矿石的手续费。',
					vote2:'方案二、卖出收所卖矿石价值3%的平台券手续费<br>比如A以10CNY的单价卖出100个矿石，总结为1000CNY，手续费收30CNY,也就是30张平台券，一张平台券1CNY，平台券从省市代理商那儿购买。'
				},
				form:{
					questionId:'',
				},
				btnText:'提交',
				id:'',
				userInfo:'',
				isDead:0,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			_this.projectName = _this.$api.projectName;
			_this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getVoteInfo();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			radioChange(val){
				console.log('changeVal',val);
			},
			judgeTime4VoteStatus(val){
				let _this = this;
				let now = _this.$utils.getDateTime(new Date());
				console.log(`now:${now},deadTime:${val}`);
				if(now>val){
					return 1;
				}else{
					return 0;
				}
			},
			getVoteInfo(){
				let _this = this;
				_this.id = _this.$route.query.id;
				console.log('_this.id',_this.id);
				_this.$ajax.ajax(_this.$api.getAssistVote + _this.id, 'GET', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.voteInfo = res.data;
						_this.isDead = _this.judgeTime4VoteStatus(_this.voteInfo.deadTime)
					}
				})
			},
			submit(voteId){
				console.log("submit");
				let _this = this;
				let params = {
					voteId:voteId,
					questionId: _this.form.questionId,
					/* userId: _this.userId */
				}
				console.log('params',params);
				if(_this.form.questionId==0){
					_this.$toast(`请先选择投票项后再点击${_this.btnText}`);
					return;
				}
				_this.$ajax.ajax(_this.$api.insertAssistAnswer, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						if(res.data == 1){
							_this.$toast('投票成功');
							_this.getVoteInfo();
						}else if(res.data == 0){
							_this.$toast("每人投一票，您已投过票");
						}else{
							_this.$toast('可能出错了，请联系平台');
						}
					}
				})
			},
		}
	}
</script>
