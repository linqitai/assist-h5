<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.myBook{
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
					background-color: $main-box-color;
					border-top: 1px solid $mainBorderColor;
					.flex{
						flex: 1;
						
					}
					.flexRight{
						flex: 0 0 60px;
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
	<div class="myBook">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我的账本
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
			<div class="selectBox">
				<div class="selectLeft">
					<van-dropdown-menu>
					  <van-dropdown-item v-model="type" :options="option1" @change="refreshEvent"/>
					</van-dropdown-menu>
				</div>
			</div>
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
				<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
					<van-tab title="团队算力" name="calculation">
						<!-- <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
							<div class="list">
								<div class="item" v-for="item in list2" :key="item.id">
									<div class="flex">
										<div class="line">{{item.createTime}}</div>
										<div class="line margT6">{{item.type | calculationType}}后拥有算力 {{item.currentCalculationNum}}</div>
									</div>
									<div class="flexRight">{{item.addOrReduce}} {{item.calculation}}</div>
								</div>
							</div>
						</van-list> -->
						<div class="list">
							<div class="item" v-for="item in list2" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6">{{item.type | calculationType}}后拥有算力 {{item.currentCalculationNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.calculation}}</div>
							</div>
						</div>
						<van-button @click="loadingMore2Btn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading2" loading-type="spinner">加载更多</van-button>
					</van-tab>
					<van-tab title="帮扶券" name="ticket">
						<!-- <van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoad4">
						<div class="list">
							<div class="item" v-for="item in list4" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									
									<div class="line margT6"><i :class="item.type==12?'mainAdornColor':''">{{item.type | platformBookType}}</i><i class="mainAdornColor" v-if="item.type==7">给{{item.toUserName}}</i>后拥有券 {{item.currentTicketNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.platformTicket}}</div>
							</div>
						</div>
						</van-list> -->
						<div class="list">
							<div class="item" v-for="item in list4" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<!-- <div class="line margT6">从<i class="mainAdornColor">{{item.fromUserName}}</i>到<i class="mainAdornColor">{{item.toUserName}}</i></div> -->
									<div class="line margT6"><i :class="item.type==12?'mainAdornColor':''">{{item.type | platformBookType}}</i><i class="mainAdornColor" v-if="item.type==7">给{{item.toUserName}}</i>后拥有券 {{item.currentTicketNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.platformTicket}}</div>
							</div>
						</div>
						<van-button @click="loadingMore4Btn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading4" loading-type="spinner">加载更多</van-button>
					</van-tab>
					<van-tab title="贡献值" name="contribution">
						<!-- <van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
							<div class="list">
								<div class="item" v-for="item in list3" :key="item.id">
									<div class="flex">
										<div class="line">{{item.createTime}}</div>
										<div class="line margT6" :class="item.type==20?'red':item.type==15?'red2':item.type==22?'green':''">{{item.type | contributeType}}后拥有贡献值 {{item.currentContributionValue}}</div>
									</div>
									<div class="flexRight">{{item.addOrReduce}} {{item.contributionValue}}</div>
								</div>
							</div>
						</van-list> -->
						<div class="list">
							<div class="item" v-for="item in list3" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6" :class="item.type==20?'red':item.type==15?'red2':item.type==22?'green':''">{{item.type | contributeType}}后拥有贡献值 {{item.currentContributionValue}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.contributionValue}}</div>
							</div>
						</div>
						<van-button @click="loadingMore3Btn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading3" loading-type="spinner">加载更多</van-button>
					</van-tab>
					<van-tab title="矿石" name="mineral">
						<!-- <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="list">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6" v-if="item.type==2||item.type==3">从<i class="mainAdornColor">{{item.fromUserName}}</i>到<i class="mainAdornColor">{{item.toUserName}}</i></div>
									<div class="line margT6">{{item.type | mineralBookType}}后拥有矿石数 {{item.currentMineralNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.number}}</div>
							</div>
						</div>
						</van-list> -->
						<div class="list">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6" v-if="item.type==2||item.type==3||item.type==16">从<i class="mainAdornColor">{{item.fromUserName}}</i>到<i class="mainAdornColor">{{item.toUserName}}</i></div>
									<div class="line margT6">{{item.type | mineralBookType}}后拥有矿石数 {{item.currentMineralNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.number}}</div>
							</div>
						</div>
						<van-button @click="loadingMore1Btn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading1" loading-type="spinner">加载更多</van-button>
					</van-tab>
					<van-tab title="爱心值" name="loveValue">
						<!-- <van-list v-model="loading5" :finished="finished5" finished-text="没有更多了" @load="onLoad5">
						<div class="list">
							<div class="item" v-for="item in list5" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6"><i :class="item.type==0?'red':item.type==1?'green':item.type==2?'blue':item.type==3?'yellow':''">{{item.type | loveValueBookType}}</i>后拥有爱心值 {{item.currentNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.num}}</div>
							</div>
						</div>
						</van-list> -->
						<div class="list">
							<div class="item" v-for="item in list5" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6"><i :class="item.type==0?'red':item.type==1?'green':item.type==2?'blue':item.type==3?'yellow':''">{{item.type | loveValueBookType}}</i>后拥有爱心值 {{item.currentNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.num}}</div>
							</div>
						</div>
						<van-button @click="loadingMore5Btn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading5" loading-type="spinner">加载更多</van-button>
					</van-tab>
					<van-tab title="流通值" name="circulateValue">
						<div class="list">
							<div class="item" v-for="item in list6" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime}}</div>
									<div class="line margT6"><i :class="item.type==0?'red':item.type==1?'green':item.type==2?'blue':item.type==3?'yellow':''">{{item.type | circulateValueBookType}}</i>后拥有流通值 {{item.currentNum}}</div>
								</div>
								<div class="flexRight">{{item.addOrReduce}} {{item.num}}</div>
							</div>
						</div>
						<van-button @click="loadingMore6Btn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading6" loading-type="spinner">加载更多</van-button>
					</van-tab>
				</van-tabs>
			</van-pull-refresh>
		</div>
		<!-- </van-pull-refresh> getCirculateValueListByUserId-->
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				type:0,
				option1: [
					{ text: '近期记录', value: 0 },
					{ text: '历史记录', value: 1 }
				],
				userId:"",
				isShowSkeleton:true,
				loading: true,
				currentPage1: 0,
				currentPage2: 0,
				currentPage3: 0,
				currentPage4: 0,
				currentPage5: 0,
				currentPage6: 0,
				offset1:0,
				offset2:0,
				offset3:0,
				offset4:0,
				offset5:0,
				offset6:0,
				pageSize:10,
				activeName:'mineral',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				loading3:false,
				finished3:false,
				loading4:false,
				finished4:false,
				loading5:false,
				finished5:false,
				loading6:false,
				finished6:false,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list5:[],
				list6:[],
				loadingMore1:false,
				loadingMore2:false,
				loadingMore3:false,
				loadingMore4:false,
				loadingMore5:false,
				loadingMore6:false,
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
			mHeader
		},
		create() {
			
		},
		mounted() {
			let _this = this;
			_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
			if (_this.$cookies.isKey("tab_name_book")) {
				_this.activeName = _this.$cookies.get("tab_name_book");
			}else{
				_this.activeName = "mineral";
			}
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				////console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
			}else{
				/* _this.$cookies.remove('userId'); */
				localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token');
				_this.$cookies.remove('isRefreshDealInfo');
				_this.$cookies.remove('isRefreshUserInfo');
				_this.$cookies.remove('tab_raise_list');
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.refreshEvent();
		},
		methods: {
			back(){
				// this.$router.replace('my');
				this.$router.go(-1);
			},
			refreshEvent() {
				// console.log("refresh1")
				let _this = this;
				if(_this.activeName == 'mineral'){
					_this.currentPage1 = 0;
					_this.offset1=0;
					_this.list1 = [];
					_this.finished1 = false;
					_this.onLoad1();
				}else if(_this.activeName == 'calculation'){
					_this.currentPage2 = 0;
					_this.offset2=0;
					_this.list2 = [];
					_this.finished2 = false;
					_this.onLoad2();
				}else if(_this.activeName == 'contribution'){
					_this.currentPage3 = 0;
					_this.offset3=0;
					_this.list3 = [];
					_this.finished3 = false;
					_this.onLoad3();
				}else if(_this.activeName == 'ticket'){
					_this.currentPage4 = 0;
					_this.offset4=0;
					_this.list4 = [];
					_this.finished4 = false;
					_this.onLoad4();
				}else if(_this.activeName == 'loveValue'){
					_this.currentPage5 = 0;
					_this.offset5=0;
					_this.list5 = [];
					_this.finished5 = false;
					_this.onLoad5();
				}else if(_this.activeName == 'circulateValue'){
					_this.currentPage6 = 0;
					_this.offset6=0;
					_this.list6 = [];
					_this.finished6 = false;
					_this.onLoad6();
				}
			},
			tabChange(name, title) {
				let _this = this;
				_this.type = 0;
				// console.log('name', name)
				_this.activeName = name;
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime);
				_this.refreshEvent();
			},
			loadingMore1Btn(){
				let _this = this;
				_this.onLoad1();
			},
			loadingMore2Btn(){
				let _this = this;
				_this.onLoad2();
			},
			loadingMore3Btn(){
				let _this = this;
				_this.onLoad3();
			},
			loadingMore4Btn(){
				let _this = this;
				_this.onLoad4();
			},
			loadingMore5Btn(){
				let _this = this;
				_this.onLoad5();
			},
			loadingMore6Btn(){
				let _this = this;
				_this.onLoad6();
			},
			onLoad1(){
				let _this = this;
				/* if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				} */
				let params = {
					userId: _this.userId,
					offset: _this.offset1,
					pagesize: _this.pageSize,
					type: _this.type,
					pageno:_this.currentPage1
				}
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getMineralBookListByUserId, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						if(list==null||list.length==0){
							_this.finished1 = true;
							_this.$toast("已经到底了");
						}
						_this.list1.push(...list);
						let len = list.length-1;
						_this.offset1 = list[len].id;
						_this.currentPage1 = _this.currentPage1 + 1;
						//_this.offset1 = _this.offset1 + _this.pageSize;
					}else{
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading1 = false;
				})
			},
			onLoad2(){
				let _this = this;
				// 异步更新数据
				let params = {
					userId: _this.userId,
					offset: _this.offset2,
					pagesize: _this.pageSize,
					type: _this.type,
					pageno:_this.currentPage2
				}
				_this.loading2 = true;
				_this.$ajax.ajax(_this.$api.getCPowerListByUserId, 'GET', params, function(res) {
					// // console.log('res', res);
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						if(list==null||list.length==0){
							_this.finished2 = true;
							_this.$toast("已经到底了");
							return;
						}
						_this.list2.push(...list);
						let len = list.length-1;
						_this.offset2 = list[len].id;
						_this.currentPage2 = _this.currentPage2 + 1;
						//_this.offset2 = _this.offset2 + _this.pageSize;
						/* if(res.data.endRow == res.data.total){
							_this.finished2 = true;
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						} */
					}else{
						_this.loading2 = false;
						_this.finished2 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
					_this.loading2 = false;
					//_this.finished2 = true;
				})
			},
			onLoad3(){
				let _this = this;
				let params = {
					userId: _this.userId,
					offset: _this.offset3,
					pagesize: _this.pageSize,
					type: _this.type,
					pageno:_this.currentPage3
				}
				_this.loading3 = true;
				_this.$ajax.ajax(_this.$api.getCValueListByUserId, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						if(list==null||list.length==0){
							_this.finished3 = true;
							_this.$toast("已经到底了");
							return;
						}
						_this.list3.push(...list);
						let len = list.length-1;
						_this.offset3 = list[len].id;
						_this.currentPage3 = _this.currentPage3 + 1;
						//_this.offset3 = _this.offset3 + _this.pageSize;
						/* if(res.data.endRow == res.data.total){
							_this.finished3 = true;
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						} */
					}else{
						_this.finished3 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
					_this.loading3 = false;
					//_this.finished3 = true;
				})
			},
			onLoad4(){
				let _this = this;
				let params = {
					userId: _this.userId,
					offset: _this.offset4,
					pagesize: _this.pageSize,
					type: _this.type,
					pageno:_this.currentPage4
				}
				_this.loading4 = true;
				_this.$ajax.ajax(_this.$api.getTicketBookListByUserId, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						if(list==null||list.length==0){
							_this.finished4 = true;
							_this.$toast("已经到底了");
							return;
						}
						_this.list4.push(...list);
						let len = list.length-1;
						_this.offset4 = list[len].id;
						_this.currentPage4 = _this.currentPage4 + 1;
						//_this.offset4 = _this.offset4 + _this.pageSize;
						/* if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						} */
					}else{
						_this.finished4 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
					_this.loading4 = false;
				})
			},
			onLoad5(){
				let _this = this;
				let params = {
					pageNo: _this.currentPage5,
					pageSize: _this.pageSize,
					userId: _this.userId
				}
				_this.loading5 = true;
				_this.$ajax.ajax(_this.$api.getAssistLoveValueList, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list5.push(...list);
						_this.loading5 = false;
						if(res.data.endRow == res.data.total){
							_this.finished5 = true;
						}else{
							_this.currentPage5 = _this.currentPage5 + 1;
						}
					}else{
						_this.loading5 = false;
						_this.finished5 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
					_this.loading5 = false;
				})
			},
			onLoad6(){
				let _this = this;
				let params = {
					userId: _this.userId,
					offset: _this.offset6,
					pagesize: _this.pageSize,
					pageno:_this.currentPage6
				}
				_this.loading6 = true;
				_this.$ajax.ajax(_this.$api.getCirculateValueListByUserId, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						if(list==null||list.length==0){
							_this.finished6 = true;
							_this.$toast("已经到底了");
							return;
						}
						_this.list6.push(...list);
						let len = list.length-1;
						_this.offset6 = list[len].id;
						_this.currentPage6 = _this.currentPage6 + 1;
						//_this.offset3 = _this.offset3 + _this.pageSize;
						/* if(res.data.endRow == res.data.total){
							_this.finished3 = true;
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						} */
					}else{
						_this.finished6 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
					_this.loading6 = false;
					//_this.finished3 = true;
				})
			},
		}
	}
</script>


