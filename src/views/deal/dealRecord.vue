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
						.userIdSpan{
							max-width: 100px;
							display: inline-block;
							text-decoration: underline;
						}
					}
					.flexRight{
						flex: 0 0 50px;
						text-align: right;
						font-size: $fs-16;
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
				交易记录
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
				}]
			}
		},
		components: {
			mHeader,mRefresh
		},
		create() {
			this.toScrollTop();
		},
		mounted() {
			let _this = this;
			// _this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
			if (_this.$cookies.isKey("tab_name_dealRecord")) {
				_this.activeName = _this.$cookies.get("tab_name_dealRecord");
			}else{
				_this.activeName = "mineral";
			}
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
			toBookView(val,userId){
				let _this = this;
				console.log('toBookView');
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
				console.log('load1 getMineralBookList4SellType')
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize
				}
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getMineralBookList4SellType, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
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


