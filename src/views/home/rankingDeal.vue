<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.ranking4F{
		@include page();
		/* .van-sticky--fixed{
			top: 47px !important;
		} */
		[class*=van-hairline]::after {
		    border: 1px solid transparent !important;
		}
		.van-search{
			background-color: $main-bg-color !important;
			.van-search__action{
				color: $mainTextColor !important;
			}
			.van-cell__value, .van-cell__value--alone, .van-field__control {
			    color: $mainTextColor2 !important;
			}
		}
		.fixedBottom{
			@include fixedBottom();
		}
		.rankingTabs {
			color: $mainTextColor;
			.list{
				.item{
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					justify-content: center;
					padding: $boxPadding2;
					background-color: $main-box-color;
					border-top: 1px solid $main-bg-color;
					.flexLeft{
						flex: 0 0 36px;
						font-size: $fs-12;
						$heightwidht:30px;
						.name{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 18px;
						}
						.nameChild{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-blue-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 18px;
						}
						.iconleft{
							font-size: 22px;
						}
					}
					.flex{
						flex: 1;
						.line{
							.iconfont{
								color:$main-green-color;
							}
							.copy{
								font-size: $fs-10;
								margin-left: 3px;
								/* background-color: #E5E5E5; */
								padding: 1px 2px;
								/* color: $main-green-color; */
								border-radius: 2px;
							}
							/* .iconfont-weichat{
								color: $main-green-color;
							} */
						}
					}
					.flexRight{
						flex: 0 0 90px;
						text-align: right;
						font-size: $fs-12;
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
		.questionHelper{
			background-color: $main-adorn-color;
			color: $mainTextColor;
			text-align: center;
			line-height: 40px;
		}
		.paddingWing{
			.van-cell{
				padding:1px 0;
				line-height: 1.3em;
			}
			.van-cell__title{
				font-weight: bolder;
			}
			.van-panel__content{
				line-height: 1.3em;
				color: $grayDark;
			}
		}
		.flexBox4Dialog{
			display: flex;
			.flexLeft{
				flex: 1;
			}
			.flexRight{
				flex: 1;
			}
		}
	}
	
</style>
<template>
	<div class="ranking4F">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">服务商排行榜</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="rankingTabs">
			<!-- <van-search
			  v-model="mobilePhone"
			  placeholder="请输入手机号"
			  show-action
			  shape="round"
			  maxlength="11"
			  @search="searchEvent"
			>
			  <div slot="action" @click="searchEvent">搜 索</div>
			</van-search> -->
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
				<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				 
					<!-- <van-tab title="团队算力" name="ranking0">
						<van-list v-model="loading0" :finished="finished0" finished-text="没有更多了" @load="onLoad0">
							<div class="list" v-for="(item,index) in list0" :key='item.id'>
								<div class="item">
									<div class="flexLeft" @click="toMy4OtherView(item.userId)">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab> -->
					
					<van-tab title="矿石" name="ranking1">
						<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
							<div class="list" v-for="(item,index) in list1" :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					
					<!-- <van-tab title="买入次数" name="ranking2">
						<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
							<div class="list" v-for="(item,index) in list2" :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					
					<van-tab title="卖出次数" name="ranking3">
						<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
							<div class="list" v-for="(item,index) in list3" :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toBookView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toBookView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					<van-tab title="买入数量" name="ranking4">
						<van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoad4">
							<div class="list" v-for="(item,index) in list4" :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					
					<van-tab title="卖出数量" name="ranking5">
						<van-list v-model="loading5" :finished="finished5" finished-text="没有更多了" @load="onLoad5">
							<div class="list" v-for="(item,index) in list5" v-index :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line"  @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight"  @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					
					<van-tab title="个人算力" name="ranking7">
						<van-list v-model="loading7" :finished="finished7" finished-text="没有更多了" @load="onLoad7">
							<div class="list" v-for="(item,index) in list7" :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					
					<van-tab title="被告次数" name="ranking6">
						<van-list v-model="loading6" :finished="finished6" finished-text="没有更多了" @load="onLoad6">
							<div class="list" v-for="(item,index) in list6" v-index :key='item.id'>
								<div class="item">
									<div class="flexLeft">
										<div class="name">{{index+1}}</div>
									</div>
									<div class="flex">
										<div class="line" @click="toMy4OtherView(item.userId)"><i class="iconfont iconfont-name green_text"></i> <span>{{$JsCrypto.myDecode1(item.nickName)}}</span></div>
										<div class="line margT6"><i class="iconfont iconfont-weichat green_text"></i> {{$JsCrypto.myDecode1(item.wechartNum)}}<span class="copy margL10" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
									</div>
									<div class="flexRight" @click="toMy4OtherView(item.userId)">
										{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab> -->
				</van-tabs>
			</van-pull-refresh>
		</div>
		<!-- <div class="fixedBottom paddingWing">
			<van-button type="info" size="normal" to="auction" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">竞拍服务商入口</van-button>
			<div class="placeholderLine10"></div>
		</div> -->
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	import { Dialog } from 'vant'
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				loading:false,
				currentPage0: 1,
				list0:[],
				loading0:false,
				finished0:false,
				currentPage1: 1,
				list1:[],
				loading1:false,
				finished1:false,
				currentPage2: 1,
				list2:[],
				loading2:false,
				finished2:false,
				currentPage3: 1,
				list3:[],
				loading3:false,
				finished3:false,
				currentPage4: 1,
				list4:[],
				loading4:false,
				finished4:false,
				currentPage5: 1,
				list5:[],
				loading5:false,
				finished5:false,
				currentPage6: 1,
				list6:[],
				loading6:false,
				finished6:false,
				currentPage7: 1,
				list7:[],
				loading7:false,
				finished7:false,
				pageSize:30,
				activeName:'ranking1',
				showTipModel:false,
				showTipModel4LookWeCharNum:false,
				shareCode:"",
				weChartNum:"",
				mobilePhone:""
			}
		},
		components: {
			mHeader
		},
		create() {
			this.toScrollTop();
		},
		mounted() {
			let _this = this;
			if (_this.$cookies.isKey("ranking_tab_name")) {
				_this.activeName = _this.$cookies.get("ranking_tab_name");
			}else{
				_this.activeName = "ranking1";
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			toMy4OtherView(userId){
				let _this = this;
				//console.log('userIdInDealRecolod:',userId);
				_this.$router.push({path:"my4Other",query:{lookUserId:userId}});
			},
			toBookView(val,userId){
				let _this = this;
				//console.log('toBookView');
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
				if(_this.activeName == 'ranking0'){
					console.log("refresh0");
					_this.currentPage0 = 1;
					_this.list0 = [];
					_this.finished0 = false;
					_this.onLoad0();
				}else if(_this.activeName == 'ranking1'){
					console.log("refresh1");
					_this.currentPage1 = 1;
					_this.list1 = [];
					_this.finished1 = false;
					_this.onLoad1();
				}else if(_this.activeName == 'ranking2'){
					console.log("refresh2");
					_this.currentPage2 = 1;
					_this.list2 = [];
					_this.finished2 = false;
					_this.onLoad2();
				}else if(_this.activeName == 'ranking3'){
					_this.currentPage3 = 1;
					_this.list3 = [];
					_this.finished3 = false;
					_this.onLoad3();
				}else if(_this.activeName == 'ranking4'){
					_this.currentPage4 = 1;
					_this.list4 = [];
					_this.finished4 = false;
					_this.onLoad4();
				}else if(_this.activeName == 'ranking5'){
					_this.currentPage5 = 1;
					_this.list5 = [];
					_this.finished5 = false;
					_this.onLoad5();
				}else if(_this.activeName == 'ranking6'){
					_this.currentPage6 = 1;
					_this.list6 = [];
					_this.finished6 = false;
					_this.onLoad6();
				}else if(_this.activeName == 'ranking7'){
					_this.currentPage7 = 1;
					_this.list7 = [];
					_this.finished7 = false;
					_this.onLoad7();
				}
			},
			/* lookWeChartNumBtn(shareCode){
				let _this = this;
				_this.showTipModel4LookWeCharNum = true;
				_this.shareCode = shareCode;
			}, */
			/* getAssistWeChartNumByShareCode(){
				let _this = this;
				return new Promise((resolve, reject) => {
					_this.$ajax.ajax(_this.$api.getAssistWeChartNumByShareCode + _this.shareCode, 'GET', null, function(res) {
						if (res.code == _this.$api.CODE_OK) {
							console.log("res.data",res.data)
							resolve(res.data);
						}else{
							reject(false)
						}
					})
				})
			}, */
			handleCopy(text, event) {
				let _this = this;
				//如果提供了事件对象，则这是一个非IE浏览器 
				if ( event && event.stopPropagation ) {
				    //因此它支持W3C的stopPropagation()方法 
				    event.stopPropagation(); 
				}else{
				    //否则，我们需要使用IE的方式来取消事件冒泡 
				    window.event.cancelBubble = true; 
				}
				//阻止默认浏览器动作(W3C) 
				if ( event && event.preventDefault ) {
					event.preventDefault(); 
				}
				//IE中阻止函数器默认动作的方式 
				else {
					window.event.returnValue = false;
					return false; 
				}
				        
				clip(text,event,function(res){
					_this.$toast(`复制${res.text}成功`);
				});
			},
			tabChange(res) {
				let _this = this;
				//console.log('res', res);
				_this.activeName = res;
				_this.$cookies.set("ranking_tab_name", _this.activeName, _this.$api.cookiesTime)
			},
			searchEvent(){
				let _this = this;
				if(_this.activeName == 'ranking0'){
					_this.currentPage0 = 1;
					_this.list0 = [];
					_this.finished0 = false;
					_this.onLoad0();
				}else if(_this.activeName == 'ranking1'){
					_this.currentPage1 = 1;
					_this.list1 = [];
					_this.finished1 = false;
					_this.onLoad1();
				}else if(_this.activeName == 'ranking2'){
					_this.currentPage2 = 1;
					_this.list2 = [];
					_this.finished2 = false;
					_this.onLoad2();
				}else if(_this.activeName == 'ranking3'){
					_this.currentPage3 = 1;
					_this.list3 = [];
					_this.finished3 = false;
					_this.onLoad3();
				}else if(_this.activeName == 'ranking4'){
					_this.currentPage4 = 1;
					_this.list4 = [];
					_this.finished4 = false;
					_this.onLoad4();
				}else if(_this.activeName == 'ranking5'){
					_this.currentPage5 = 1;
					_this.list5 = [];
					_this.finished5 = false;
					_this.onLoad5();
				}else if(_this.activeName == 'ranking6'){
					_this.currentPage6 = 1;
					_this.list6 = [];
					_this.finished6 = false;
					_this.onLoad6();
				}else if(_this.activeName == 'ranking7'){
					_this.currentPage7 = 1;
					_this.list7 = [];
					_this.finished7 = false;
					_this.onLoad7();
				}
			},
			onLoad0(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: _this.currentPage0,
					pageSize: _this.pageSize,
					type:'team_calculation_power'
				}
				_this.loading0 = true;
				_this.finished0 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list1.push(...list); */
						_this.list0 = res.data.list;
						_this.loading0 = false;
						_this.finished0 = true;
					}else{
						_this.loading0 = false;
						_this.finished0 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad1(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					type:'this_week_mineral'
				}
				_this.loading1 = true;
				_this.finished1 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list1.push(...list); */
						_this.list1 = res.data.list;
						_this.loading1 = false;
						_this.finished1 = true;
					}else{
						_this.loading1 = false;
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad2(){
				let _this = this;
				var params = {
					pageNo: this.currentPage2,
					pageSize: this.pageSize,
					type:'buy_times'
				}
				_this.loading2 = true;
				_this.finished2 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list2.push(...list); */
						_this.list2 = res.data.list;
						_this.loading2 = false;
						_this.finished2 = true;
					}else{
						_this.loading2 = false;
						_this.finished2 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad3(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage3,
					pageSize: this.pageSize,
					type:'sell_times'
				}
				_this.loading3 = true;
				_this.finished3 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list3.push(...list); */
						_this.list3 = res.data.list;
						_this.loading3 = false;
						_this.finished3 = true;
					}else{
						_this.loading3 = false;
						_this.finished3 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad4(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage4,
					pageSize: this.pageSize,
					type:'buy_amount'
				}
				_this.loading4 = true;
				_this.finished4 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list4.push(...list); */
						_this.list4 = res.data.list;
						_this.loading4 = false;
						_this.finished4 = true;
					}else{
						_this.loading4 = false;
						_this.finished4 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad5(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage5,
					pageSize: this.pageSize,
					type:'sell_amount'
				}
				_this.loading5 = true;
				_this.finished5 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list5.push(...list); */
						_this.list5 = res.data.list;
						_this.loading5 = false;
						_this.finished5 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						} */
					}else{
						_this.loading5 = false;
						_this.finished5 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad6(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage6,
					pageSize: this.pageSize,
					type:'be_complaint_times'
				}
				_this.loading6 = true;
				_this.finished6 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list5.push(...list); */
						_this.list6 = res.data.list;
						_this.loading6 = false;
						_this.finished6 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						} */
					}else{
						_this.loading6 = false;
						_this.finished6 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			onLoad7(){
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage7,
					pageSize: this.pageSize,
					type:'my_calculation_power'
				}
				_this.loading7 = true;
				_this.finished7 = false;
				_this.$ajax.ajax(_this.$api.getServiceRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list5.push(...list); */
						_this.list7 = res.data.list;
						_this.loading7 = false;
						_this.finished7 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						} */
					}else{
						_this.loading7 = false;
						_this.finished7 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			}
		}
	}
</script>


