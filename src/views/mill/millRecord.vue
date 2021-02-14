<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.millRecord{
		@include pageHaveHeight4Scroll();
		.millContent{
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			min-height: 100%;
			position: absolute;
			width: 100%;
			.van-list__finished-text{
				color: inherit !important;
			}
			.tabTitle{
				display: flex;
				align-items: center;
				align-content: center;
				justify-content: center;
			}
			.selectBox{
				display: flex;
				align-items: center;
				align-content: center;
				justify-content: center;
				.selectLeft{
					flex: 1;
				}
				.selectRight{
					flex: 1;
				}
			}
			.millList{
				overflow: hidden;
				height: 100%;
				color: $main-box-fh-text-color;
				.item{
					position: relative;
					display: flex;
					padding: $boxPadding2;
					border-bottom:1px solid $bottomLineColor;
					align-items: center;
					align-content: center;
					justify-content: center;
					&::last-child{
						border-bottom:1px solid transparent;
					}
					.tagIcon{
						position: absolute;
						right: 0;
						top: 0;
						height: 20px;
						width: 38px;
						font-size: 20px;
					}
					.tagIconText{
						position: absolute;
						right: 10px;
						top: 4px;
						font-size: 11px;
					}
					.tag0{
						color: $main-blue-color;
					}
					.tag1{
						color: $main-adorn-color;
					}
					.tag2{
						color: $warnColor;
					}
					.flex1{
						flex: 0 0 50px;
						display:flex;
						align-items: center;
						.machingBox{
							height: 90px;
							line-height: 90px;
							width: 70px;
							background-color: $main-blue-color;
							text-align: center;align-items: center;
							position: relative;
							$heightwidht:40px;
							.name{
								width: $heightwidht;
								height: $heightwidht;
								// border-radius: $heightwidht;
								background-color: $main-box-color;
								color: $main-adorn-color;
								text-align: center;
								line-height: $heightwidht;
								font-size: 20px;
								font-weight: bolder;
								margin-left: 15px;
								margin-top: 25px;
							}
						}
					}
					.flex2{
						padding-left: 8px;
						flex: 1;
						.line1{
							.millName{
								font-weight: bold;
								font-size: 12px;
							}
							.calcullatePower{
								font-size: 0.687rem;
								margin-left: 4px;
							}
							.nickName{
								font-weight: bold;
								font-size: 12px;
								.iconfont-name{
									font-size: 12px;
								}
								.textColor{
									color: $main-adorn-color;
								}
							}
							.status{
								font-size: 0.75rem;
								margin-left: 4px;
							}
							.isGet{
								height: 14px;
								line-height: 14px;
								font-size: 12px;
								border-radius: 0 10px 10px 0;
								padding: 0 6px 0 4px;
								margin-left: 10px;
							}
							.isGetBgColor{
								background-color: $main-adorn-color;
							}
							.notGetBgColor{
								background-color: $warnColor;
							}
						}
						.line,.line2,.line3,.line4,.line5{
							font-size: 0.75rem;
							margin-top: 3px;
						}
		
					}
					.flex3{
						flex: 0 0 20px;
						text-align: right;
						.line{
							font-size: 0.75rem;
							text-align: center;
						}
					}
					.tag {
						font-size: 11px;
						border-radius: 10px 10px 10px 10px;
						padding: 2px 8px;
						&.tag0{
							background-color: $main-blue-color;
						}
						&.tag1{
							background-color: $main-purple-color;
						}
						&.tag2{
							background-color: $warnColor;
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
	<div class="millRecord">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				所售矿机记录表
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="millContent">
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
					  <van-dropdown-item v-model="form.type" :options="option1" @change="refreshEvent"/>
					</van-dropdown-menu>
				</div>
				<div class="selectRight">
					<van-dropdown-menu>
					  <van-dropdown-item v-model="form.day" :options="option2" @change="refreshEvent"/>
					</van-dropdown-menu>
				</div>
			</div>
			
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
				 <!-- @load="onLoad1" -->
				<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
					 <div class="millList">
					 	<div class="item" v-for="item in list1" :key="item.id">
					 		<!-- <div class="flex flex1">
					 			<div class="machingBox">
					 				<div class="name">{{item.type | machineType4Pic}}</div>
					 			</div>
					 		</div> -->
					 		<div class="flex flex2">
					 			<div class="line1">
					 				<span class="millName">{{item.type | machineTypeType}}</span>
									<span class="nickName margL10"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.nickName}}</i></span>
					 			</div>
					 			<div class="line">租金{{item.price}} 算力{{item.calculationPower}}G 租赁时间{{item.getTime}}</div>
					 		</div>
					 		<div class="flex flex3">
								<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
					 			<!-- <div class="line">库存{{item.inventory}}</div>
					 			<div class="line margT3">
					 				<van-button round type="info" @click="buyMill(item)" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">租赁</van-button>
					 			</div> -->
					 		</div>
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
		<!-- <transition name="van-fade">
		  <router-view></router-view>
		</transition> -->
		<!-- </van-pull-refresh> -->
		<!-- <m-refresh @refreshEvent="refreshEvent"></m-refresh> -->
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh.vue';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		name:'millRecord',
		data() {
			return {
				userId:"",
				isShowSkeleton:true,
				loading: true,
				currentPage1: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				pageSize:20,
				activeName:'mill',
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
				list:[],
				form:{
					type:0,
					day:7
				},
				option1: [
					{ text: '体验矿机', value: 0 },
					{ text: '微型矿机', value: 1 },
					{ text: '小型矿机', value: 2 },
					{ text: '中型矿机', value: 3 },
					{ text: '大型矿机', value: 4 },
					{ text: '巨型矿机', value: 5 },
					{ text: '超级矿机', value: 8 },
					{ text: '晋级矿机I', value: 6 },
					{ text: '晋级矿机II', value: 7 }
				],
				option2: [
					{ text: '最近7天', value: 7 },
					{ text: '最近15天', value: 15 }
				],
				mineralList:[],
				tag:0
			}
		},
		components: {
			mHeader,mRefresh
		},
		create() {
			let _this = this;
			_this.toScrollTop();
		},
		mounted() {
			let _this = this;
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
			toMy4OtherView(userId){
				let _this = this;
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
				// //console.log("refresh1")
				let _this = this;
				_this.currentPage1 = 1;
				_this.list1 = [];
				_this.finished1 = false;
				_this.onLoad1();
			},
			tabChange(name, title) {
				let _this = this;
				// _this.activeName = name;
				this.$cookies.set("tab_name_dealRecord", name, _this.$api.cookiesTime)
			},
			onLoad1(){
				let _this = this;
				/* if(_this.$utils.getDateTime(new Date())>'2020/11/01 00:00:01'){
					_this.tag=8;
				}else{
					_this.tag=0;
				} */
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					tag:localStorage.getItem('tag'),
					type:_this.form.type,
					day:_this.form.day
				}
				// //console.log('params',params);
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getAssistMyMachineList4Tag, 'GET', params, function(res) {
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
						_this.list1 = _this.list;
						_this.loading1 = false;
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				})
				// 异步更新数据
				// setTimeout(() => {
				// 	// 加载状态结束
				// 	_this.loading1 = false;
				// 	_this.finished1 = true;
				// }, 500);
			},
		}
	}
</script>