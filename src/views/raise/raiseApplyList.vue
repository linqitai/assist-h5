<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.applyListPage{
		@include pageHaveHeight4Scroll();
		.wordList{
			background-color: $main-box-color;
			//margin-top:$header-height;
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid $mainBorderColor;
				align-content: center;
				align-items: center;
				justify-content: center;
				// &:last-child{
				// 	border-bottom: 1px solid transparent;
				// }
				.itemLeft{
					flex: 1;
					.title{
						width: 100%;
						font-size: 14px;
						color: $mainTextColor2;
					}
					.remark{
						width: 100%;
						font-size: 12px;
						color: $mainTextColor;
						line-height: 1.3em;
					}
					.time{
						font-size: 0.875rem;
						color: $grayDarker;
						// margin-top: 0.5rem;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 70px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					color: $grayLight2;
					text-align: right;
					.statusText{
						// height: $itemLRHeight;
						// line-height: $itemLRHeight;
						font-size: 0.75rem;
						display: inline-block;
						color: $main-adorn-color;
					}
					.iconfont-right-arrow2{
						display: inline-block;
						font-size: 0.75rem;
						color: $grayDark;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="applyListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				申请列表
			</div>
			<i class="iconfont iconfont-edit rightBox icon" @click="toApplyList"></i>
		</m-header>
		<!-- <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="getAssistRaiseListPage">
		</van-list> -->
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				:title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab title="筹款中" name="onLoad1">
					<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="wordList">
							<div class="item" v-for="item in list1" :key="item.id">
								<!-- @click="toRaise4OtherView(item.id)" -->
								<div class="itemLeft" @click="toRaise4OtherView(item.id)">
									<div class="title">
										<i class="yellow">{{item.nickName}}</i> <span>{{item.status|filterStatus}}</span>
										<i class="iconfont iconfont-right-arrow2 f-11"></i>
									</div>
									<div class="remark margT3">{{item.title}}</div>
									<div class="time margT3">{{item.createTime}}<i class="f-10 right">团队算力{{item.teamCalculationPower}}G</i></div>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="拜访中" name="onLoad2">
					<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
						<div class="wordList">
							<div class="item" v-for="item in list2" :key="item.id">
								<!-- @click="toRaise4OtherView(item.id)" -->
								<div class="itemLeft">
									<div class="title">
										<i class="yellow">{{item.nickName}}</i> <span>{{item.status|filterStatus}}</span>
									</div>
									<div class="remark margT3">{{item.title}}</div>
									<div class="time margT3">{{item.createTime}}<i class="f-10 right">团队算力{{item.teamCalculationPower}}G</i></div>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="已审核" name="onLoad3">
					<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
						<div class="wordList">
							<div class="item" v-for="item in list3" :key="item.id">
								<div class="itemLeft">
									<div class="title">
										<i class="yellow">{{item.nickName}}</i> <span>{{item.status|filterStatus}}</span>
									</div>
									<div class="remark margT3">{{item.title}}</div>
									<div class="time margT3">{{item.createTime}}<i class="f-10 right">团队算力{{item.teamCalculationPower}}G</i></div>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="待审核" name="onLoad4">
					<van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoad4">
						<div class="wordList">
							<div class="item" v-for="item in list4" :key="item.id">
								<div class="itemLeft">
									<div class="title">
										<i class="yellow">{{item.nickName}}</i> <span>{{item.status|filterStatus}}</span>
									</div>
									<div class="remark margT3">{{item.title}}</div>
									<div class="time margT3">{{item.createTime}}<i class="f-10 right">团队算力{{item.teamCalculationPower}}G</i></div>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="筹款完结" name="onLoad5">
					<van-list v-model="loading5" :finished="finished5" finished-text="没有更多了" @load="onLoad5">
						<div class="wordList">
							<div class="item" v-for="item in list5" :key="item.id">
								<div class="itemLeft">
									<div class="title">
										<i class="yellow">{{item.nickName}}</i> <span>{{item.status|filterStatus}}</span>
									</div>
									<div class="remark margT3">{{item.title}}</div>
									<div class="time margT3">{{item.createTime}}<i class="f-10 right">团队算力{{item.teamCalculationPower}}G</i></div>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
			</van-tabs>
		</van-pull-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js'
	
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				loading: true,
				pageSize:16,
				currentPage1: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				currentPage5: 5,
				activeName:'onLoad1',
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
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list5:[],
			}
		},
			filters: {
				filterStatus(val) {
					//0-待审核 1-审核通过 2-审核驳回 3-筹款中 4-筹款结束
					var result = '';
					if (val == 0) {
						result = '待审核';
					}else if (val == 1) {
						result = '审核通过';
					}else if (val == 2) {
						result = '审核驳回';
					}else if (val == 3) {
						result = '筹款中';
					}else if (val == 4) {
						result = '筹款结束';
					}
					return result;
				}
			},
		created() {
			let _this = this;
			_this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			if (_this.$cookies.isKey("tab_raise_list")) {
				_this.activeName = _this.$cookies.get("tab_raise_list");
			}else{
				_this.activeName = "onLoad1";
			}
			//_this.getAssistComplainListPage();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getColor(status) {
				return status == "0" ? "" : status == "1" ? "green_text" : "";
			},
			refreshEvent() {
				let _this = this;
				console.log("refresh1：",_this.activeName)
				if(_this.activeName == 'onLoad1'){
					console.log("refresh1");
					_this.currentPage1 = 1;
					_this.list1 = [];
					_this.finished1 = false;
					//_this.onLoad1();
				}else if(_this.activeName == 'onLoad2'){
					console.log("refresh2");
					_this.currentPage2 = 1;
					_this.list2 = [];
					_this.finished2 = false;
					//_this.onLoad2();
				}else if(_this.activeName == 'onLoad3'){
					_this.currentPage3 = 1;
					_this.list3 = [];
					_this.finished3 = false;
					//_this.onLoad3();
				}else if(_this.activeName == 'onLoad4'){
					_this.currentPage4 = 1;
					_this.list4 = [];
					_this.finished4 = false;
					//_this.onLoad4();
				}else if(_this.activeName == 'onLoad5'){
					_this.currentPage5 = 1;
					_this.list5 = [];
					_this.finished5 = false;
					//_this.onLoad4();
				}
			},
			tabChange(name, title) {
				let _this = this;
				// console.log('name', name)
				// _this.activeName = name;
				_this.$cookies.set("tab_raise_list", name, _this.$api.cookiesTime)
			},
			toApplyList(){
				let _this = this;
				_this.$router.push({
					path: `/raiseApply`,
					/* query:{
						targetUserId:_this.$route.query.targetUserId
					} */
				});
			},
			toRaise4OtherView(id){
				let _this = this;
				_this.$router.push({path:"raise4Other",query:{id:id}})
			},
			onLoad1() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					status:3//0-待审核 1-审核通过 2-排队中 3-筹款中 4-筹款结束
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseListPage, 'GET', params, function(res) {
					//console.log('res', res);
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
						_this.list1 = [];
						_this.loading1 = false;
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad2() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize,
					status:2//0-待审核 1-审核通过 2-排队中 3-筹款中 4-筹款结束
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseListPage, 'GET', params, function(res) {
					//console.log('res', res);
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list2.push(...list);
						_this.loading2 = false;
						if(res.data.endRow == res.data.total){
							_this.finished2 = true;
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						}
					}else{
						_this.list2 = [];
						_this.loading2 = false;
						_this.finished2 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad3() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage3,
					pageSize: _this.pageSize,
					status:1//0-待审核 1-审核通过 2-排队中 3-筹款中 4-筹款结束
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseListPage, 'GET', params, function(res) {
					//console.log('res', res);
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list3.push(...list);
						_this.loading3 = false;
						if(res.data.endRow == res.data.total){
							_this.finished3 = true;
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						}
					}else{
						_this.list3 = [];
						_this.loading3 = false;
						_this.finished3 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad4() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage4,
					pageSize: _this.pageSize,
					status:0
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseListPage, 'GET', params, function(res) {
					//console.log('res', res);
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list4.push(...list);
						_this.loading4 = false;
						if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						}
					}else{
						_this.list4 = [];
						_this.loading4 = false;
						_this.finished4 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad5() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage5,
					pageSize: _this.pageSize,
					status:4
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseListPage, 'GET', params, function(res) {
					//console.log('res', res);
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
						_this.list5 = [];
						_this.loading5 = false;
						_this.finished5 = true;
						_this.$toast(res.message);
					}
				})
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>