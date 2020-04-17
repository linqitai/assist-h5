<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.dealRecord{
		@include pageHaveHeight4Scroll();
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
						flex: 0 0 100px;
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
	<div class="dealRecord">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				区块浏览器
			</div>
			<i class="rightBox icon"></i>
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
				<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
					 <div class="list">
						<div class="item" v-for="item in list1" :key="item.id">
							<div class="flex">
								<div class="line">{{item.createTime | getDateTime}}</div>
								<div class="line margT6" @click="toMy4OtherView(item.fromUserId)">
									<span class="nickName"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.sellerNickName}}</i></span>
									<i class="iconfont iconfont-right-arrow2"></i>
								</div>
								<div class="line margT6">
									{{item.type | mineralBookType}} <i class="textAdornColor">{{item.number}}</i>个 给
								</div>
								<div class="line margT6"  @click="toMy4OtherView(item.toUserId)">
									<span class="nickName"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.buyerNickName}}</i></span>
									<i class="iconfont iconfont-right-arrow2"></i>
								</div>
								<!-- <div class="line margT6">手机号 {{item.mobilePhone}} <span class="copy" @click="handleCopy(item.mobilePhone,$event)">复制</span></div> -->
							</div>
							<div class="flexRight2">所剩<span class="textAdornColor">{{item.currentMineralNum}}</span>个</div>
							<!-- <div class="flexRight3">
								<i class="iconfont iconfont-right-arrow2"  @click="toMy4OtherView(item.fromUserId)"></i>
							</div> -->
						</div>
					 </div>
				</van-list>
				<!-- <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
					 <div class="list">
						<div class="item" v-for="item in list1" :key="item.id">
							<div class="flex">
								<div class="line">{{item.createTime | getDateTime}}</div>
								<div class="line margT6">
									<span class="ellipsis userIdSpan" @click="toBookView(2,item.fromUserId)">{{item.fromUserId}}</span>
									<i class="iconfont iconfont-arrow-to"></i>
									<span class="ellipsis userIdSpan" @click="toBookView(2,item.toUserId)">{{item.toUserId}}</span>
								</div>
							</div>
							<div class="flexRight">{{item.number}}</div>
						</div>
					 </div>
				</van-list> -->
				<!-- <van-tabs v-model="activeName" background="#1a2843" color="#ffae00" title-active-color="#ffae00"
				 title-inactive-color="#ffffff" :border="false" @change="tabChange" animated sticky>
					<van-tab title="矿石" name="mineral">
						<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="list">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime | getDateTime}}</div>
									<div class="line margT6">
										<span class="ellipsis userIdSpan" @click="toBookView(2,item.fromUserId)">{{item.fromUserId}}</span>
										<i class="iconfont iconfont-arrow-to"></i>
										<span class="ellipsis userIdSpan" @click="toBookView(2,item.toUserId)">{{item.toUserId}}</span>
									</div>
								</div>
								<div class="flexRight">{{item.number}}</div>
							</div>
						</div>
						</van-list>
					</van-tab>
				</van-tabs> -->
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
				manTypeList:['l1582p59551N0O6058L4','15483b1u5523T21d1u77','Z15L873r23p6082t1665','15M8n39064y6G10y4067','1Iu5783Zs1564L891731','158L2o9e5A79D504N753','Z1583E14d6E7A5j71o29']
			}
		},
		components: {
			mHeader,mRefresh
		},
		create() {
			this.toScrollTop();
			//console.log("inArray:",_this.utils.inArray('a',['a','b']));
		},
		mounted() {
			let _this = this;
			// _this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
			if (_this.$cookies.isKey("tab_name_dealRecord")) {
				_this.activeName = _this.$cookies.get("tab_name_dealRecord");
			}else{
				_this.activeName = "mineral";
			}
			//console.log("inArray:",_this.$utils.inArray('c',['a','b']));
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
				if(_this.activeName == 'mineral'){
					console.log("refresh1");
					_this.currentPage1 = 1;
					_this.list1 = [];
					_this.finished1 = false;
					_this.onLoad1();
				}
			},
			tabChange(name, title) {
				let _this = this;
				this.$cookies.set("tab_name_dealRecord", name, _this.$api.cookiesTime)
			},
			onLoad1(){
				//console.log('load1 getMineralBookList4SellType')
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					type:3
				}
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getMineralBookList4Type, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						list = list.filter((item)=>{
							let b = _this.$utils.inArray(item.fromUserId,_this.manTypeList);
							if(b==false){
								b = _this.$utils.inArray(item.toUserId,_this.manTypeList);
							}
							return b==false;
						});
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
						_this.$toast(res.message);
					}
				})
			},
		}
	}
</script>


