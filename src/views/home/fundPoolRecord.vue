<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.fundPoolRecord{
		@include pageNoHeight4Scroll();
		.myBookTabs {
			color: $mainTextColor;
			.list{
				.item{
					margin-top: 1px;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					padding: $boxPadding2;
					border-bottom:1px solid $mainBorderColor;
					background-color: $main-box-color;
					.flex{
						flex: 1;
						.iconfont-arrow-to{
							font-size: 18px;
							color: #298522;
							display: inline-block;
							margin-left: 4px;
							margin-right: 4px;
						}
						.iconfont-right-arrow2{
							color: #C7C7C7;font-size: 11px;
						}
						.userIdSpan{
							max-width: 100px;
							display: inline-block;
							text-decoration: underline;
						}
					}
					.nickName{
						font-weight: bold;
						font-size: 12px;
						.iconfont-name{
							font-size: 12px;
							color: $main-adorn-color;
						}
						.textColor{
							color: $main-adorn-color;
						}
					}
					.flexRight{
						flex: 0 0 50px;
						text-align: right;
						font-size: $fs-16;
					}
					.flexRight2{
						flex: 0 0 110px;
						text-align: right;
						font-size: $fs-12;
					}
					.flexRight3{
						flex: 0 0 16px;
						text-align: right;
						font-size: $fs-12;
						color: #C7C7C7;
					}
					.operatorBox{
						flex: 0 0 100px;
						text-align: center;
						font-size: $fs-12;
						.van-count-down{
							color: $mainTextColor !important;
						}
						// .countDownTime{
						// 	color: $mainTextColor !important;
						// }
						.cancelBtn,.showDetailBtn{
							text-decoration: underline;
						}
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
	<div class="fundPoolRecord">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				帮扶基金池账本
			</div>
			<i class="rightBox icon" v-if="userInfo.userId != 'en15079AQ107o91Y7217'"></i>
			<i class="iconfont iconfont-transfer-out rightBox icon" v-if="userInfo.userId == 'en15079AQ107o91Y7217'" @click="toTransferView"></i>
		</m-header>
		<div class="myBookTabs">
			<!-- <van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search> -->
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
				<van-tabs v-model="tabActiveName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated>
					<van-tab title="存入" name="in">
						<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
							 <div class="list">
								<div class="item" v-for="item in list1" :key="item.id">
									<div class="flex">
										<div class="line">{{item.createTime}}</div>
										 <!-- @click="toMy4OtherView(item.fromUserId)" -->
										<div class="line margT6">
											<span class="nickName"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.fromNickName}}</i></span>
											<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
										</div>
										<div class="line margT6">
											<!-- >0?'+'+item.num:item.num -->
											<i class="textAdornColor">{{item.remark}}</i><i :class="item.type==0?'green':'red'">{{item.type==0?'存入':'转出'}}</i><i class="textAdornColor">{{item.num}}个</i>
										</div>
										<!-- @click="toMy4OtherView(item.toUserId)" -->
										<!-- <div class="line margT6">
											<span class="nickName"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.toNickName}}</i></span>
										</div> -->
										<!-- <div class="line margT6">手机号 {{item.mobilePhone}} <span class="copy" @click="handleCopy(item.mobilePhone,$event)">复制</span></div> -->
									</div>
									<div class="flexRight2">
										<div>当前基金池</div>
										<div class="margT10">
											<span class="textAdornColor">{{item.currentNum}}</span>个券
										</div>
									</div>
									<!-- <div class="flexRight3">
										<i class="iconfont iconfont-right-arrow2"  @click="toMy4OtherView(item.fromUserId)"></i>
									</div> -->
								</div>
							 </div>
						</van-list>
					</van-tab>
					<van-tab title="转出" name="out">
						<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
							 <div class="list">
								<div class="item" v-for="item in list2" :key="item.id">
									<div class="flex">
										<div class="line">{{item.createTime}}</div>
										 <!-- @click="toMy4OtherView(item.fromUserId)" -->
										<div class="line margT6">
											<span class="nickName"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.fromNickName}}</i></span>
											<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
										</div>
										<div class="line margT6">
											<!-- >0?'+'+item.num:item.num -->
											<i class="textAdornColor">{{item.remark}}</i><i :class="item.type==0?'green':'red'">{{item.type==0?'存入':'转出'}}</i><i class="textAdornColor">{{item.num}}个</i>给											
										</div>
										<!-- @click="toMy4OtherView(item.toUserId)" -->
										<div class="line margT6">
											<span class="nickName"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.toNickName}}</i></span>
										</div>
										<!-- <div class="line margT6">手机号 {{item.mobilePhone}} <span class="copy" @click="handleCopy(item.mobilePhone,$event)">复制</span></div> -->
									</div>
									<div class="flexRight2">
										<div>此刻转出后基金池</div>
										<div class="margT10">存有<span class="textAdornColor">{{item.currentNum}}</span>个券</div>
									</div>
									<!-- <div class="flexRight3">
										<i class="iconfont iconfont-right-arrow2"  @click="toMy4OtherView(item.fromUserId)"></i>
									</div> -->
								</div>
							 </div>
						</van-list>
					</van-tab>
				</van-tabs>
			</van-pull-refresh>
		</div>
		<!-- </van-pull-refresh> -->
		<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh.vue';
	import clip from '@/assets/js/clipboard';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		name: 'dealRecord',
		data() {
			return {
				userId:"",
				isShowSkeleton:true,
				loading: true,
				currentPage1: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				pageSize:16,
				activeName:'mineral',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				loading3:false,
				finished3:false,
				loading4:false,
				finished4:false,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list:[{
					id:0,
					createTime:'2019-12-12 12:12:12',
					type:-1,
					pm:'+',
					contributionValue:'20'
				}],
				mineralList:[{
					id:0,
					createTime:'2019-12-12 12:12:12',
					from:'矿机产出',
					addOrReduce:'+',
					number:'20'
				}],
				userInfo:''
			}
		},
		components: {
			mHeader,mRefresh
		},
		created() {
			this.toScrollTop();
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				/* localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token'); */
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			//console.log("inArray:",_this.utils.inArray('a',['a','b']));
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			toMy4OtherView(userId){
				let _this = this;
				//console.log('userIdInDealRecolod:',userId);
				_this.$router.push({path:"my4Other",query:{lookUserId:userId}});
			},
			toTransferView(userId){
				let _this = this;
				//console.log('userIdInDealRecolod:',userId);
				_this.$router.push('transferFundPoolTicket');
			},
			toBookView(val,userId){
				let _this = this;
				let name = 'mineral';
				if(val==1){
					name = 'ticket';
				}else if(val==2){
					name = 'mineral';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push({path:"lookBook",query:{lookUserId:userId}})
			},
			refreshEvent() {
				// console.log("refresh1")
				let _this = this;
				_this.currentPage1 = 1;
				_this.list1 = [];
				_this.finished1 = false;
				_this.onLoad1();
			},
			tabChange(name, title) {
				let _this = this;
				//this.$cookies.set("tab_name_dealRecord", name, _this.$api.cookiesTime)
			},
			onLoad1(){
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					type:0
				}
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getAssistFundPoolRecord, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						/* list = list.filter((item)=>{
							let b = _this.$utils.inArray(item.fromUserId,_this.manTypeList);
							if(b==false){
								b = _this.$utils.inArray(item.toUserId,_this.manTypeList);
							}
							return b==false;
						}); */
						_this.list1.push(...list);
						_this.loading1 = false;
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						}
					}else{
						_this.loading1 = false;
						_this.finished1 = true;
						_this.list1 = [];
						_this.$toast(res.message);
					}
				})
			},
			onLoad2(){
				let _this = this;
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize,
					type:1
				}
				_this.loading2 = true;
				_this.$ajax.ajax(_this.$api.getAssistFundPoolRecord, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						/* list = list.filter((item)=>{
							let b = _this.$utils.inArray(item.fromUserId,_this.manTypeList);
							if(b==false){
								b = _this.$utils.inArray(item.toUserId,_this.manTypeList);
							}
							return b==false;
						}); */
						_this.list2.push(...list);
						_this.loading1 = false;
						if(res.data.endRow == res.data.total){
							_this.finished2 = true;
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						}
					}else{
						_this.loading2 = false;
						_this.finished2 = true;
						_this.list2 = [];
						_this.$toast(res.message);
					}
				})
			},
		}
	}
</script>