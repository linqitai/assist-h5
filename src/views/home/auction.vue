<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.auction{
		@include page4Home4Scroll();
		/* .van-sticky--fixed{
			top: 47px !important;
		} */
		/* [class*=van-hairline]::after {
		    border: 1px solid transparent !important;
		} */
		.auctionPage {
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			min-height: 100%;
			position: absolute;
			width: 100%;
			padding-left: 12px;
			padding-right: 12px;
			box-sizing: border-box;
			.list{
				width: 100%;
				.item{
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					justify-content: center;
					padding: 8px;
					background-color: #2c8c23;
					/* border-top: 1px solid $bottomLineColor;
					border-bottom:1px solid $bottomLineColor; */
					.flexLeft{
						flex: 0 0 50px;
						font-size: $fs-12;
						$heightwidht:42px;
						.name{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 15px;
						}
						.nameChild{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-blue-color;
							color: $main-box-fh-text-color;
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
							.iconfont-arrow-to{
								color:$main-box-fh-text-color;
							}
							.copy{
								font-size: $fs-10;
								margin-left: 3px;
								background-color: #E5E5E5;
								padding: 1px 2px;
								color: #0E1935;
								border-radius: 2px;
							}
						}
					}
					.flexRight{
						flex: 0 0 90px;
						text-align: right;
						font-size: $fs-11;
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
	}
	
</style>
<template>
	<div class="auction">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">竞拍中心</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header>
		<div class="auctionPage">
			<div class="placeholderLine10"></div>
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
				<div class="list">
					<div class="item">
						<div class="flexLeft">
							<div class="name">
								<i class="iconleft iconfont iconfont-pai"></i>
							</div>
						</div>
						<div class="flex">
							<div class="line"><span>{{auction.title}}</span> <span class="mainAdornColor">{{auction.status == 0 ? '未开拍':'竞拍中'}}</span></div>
							<div class="placeholderLine4"></div>
							<div class="line"><span>当前拍主 {{auction.nickName}}</span> <span class="mainAdornColor">出{{auction.auctionEndPrice}}个帮扶券</span></div>
							<div class="placeholderLine4"></div>
							<div class="line white">
								开始时间：{{auction.startTime}}
							</div>
							<div class="placeholderLine4"></div>
							<div class="line white">
								截止时间：{{auction.endTime}}
							</div>
						</div>
						<!-- <div class="flexRight"></div> -->
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div>
					我要加价：
					<van-button round type="info" @click="addTicket(10)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">10个券</van-button>
					<van-button round type="info" @click="addTicket(50)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">50个券</van-button>
					<van-button round type="info" @click="addTicket(100)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">100个券</van-button>
					<van-button round type="info" @click="addTicket(300)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">300个券</van-button>
					<!-- 增加自己填写数额 -->
				</div>
				<div class="placeholderLine4"></div>
				<div>加价记录：</div>
				<div class="placeholderLine4"></div>
				<div class="list">
					<div v-if="total==0">尚未开拍</div>
					<div class="item" v-for="item in list1" :key="item.userId">
						<div class="flexLeft">
							<div class="name">
								<i class="iconleft iconfont iconfont-pai"></i>
							</div>
						</div>
						<div class="flex">
							<div class="line"><span>{{item.nickName}}</span> <span class="mainAdornColor">+{{item.addPrice}}个帮扶券 <i class="iconfont iconfont-arrow-to"></i> {{item.currentAuctionPrice}}券</span></div>
							<div class="placeholderLine10"></div>
							<div class="line white">
								加价时间：{{item.createTime}}
							</div>
						</div>
						<!-- <div class="flexRight"></div> -->
					</div>
				</div>
			</van-pull-refresh>
		</div>
		<van-action-sheet v-model="showTipModel" title="问题小帮手">
			<div class="paddingWing">
				<!-- 帮扶券：详情请查看<span  class="underline">新手指南</span>。 -->
				<!-- <div class="tip4model3">第一批省代理正在招募中，需通过现有代理或客服引荐。</div> -->
				<div class="placeholderLine10"></div>
				<div class="tip4model4">
					第二批服务商竞拍测试中，将会在28号晚上21点开始竞拍<br>
					HPC帮扶链的服务商类似交易所的商人<br>
					要具备以下几个条件<br>
					1、是HPC省市代理或会长或团队算力、有效直推进入排行榜的团队长优先<br>
					2、对HPC平台的帮扶事业绝对热爱<br>
					3、有充裕时间做好服务（若服务时间经常不充裕，愿意把服务商职位让给更加符合条件的团队长）<br>
					4、备有足够量的资金作保障（若缺少资金，通过群里会员众筹的方式来获取服务商的，会被驳回当服务商的资格）<br>
					服务商权限大而尊贵，对控盘起关键作用，请团队长们参与竞拍之前，先考虑好
				</div>
				<div class="placeholderLine40"></div>
			</div>
		</van-action-sheet>
		<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh2.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		name:'agency',
		data() {
			return {
				currentPage1: 1,
				currentPage2: 1,
				pageSize:10,
				activeName:'agency2',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				list1:[],
				list2:[],
				showTipModel:false,
				auction:'',
				loading:false,
				userInfo:'',
				total:0
			}
		},
		components: {
			mHeader,mRefresh
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				////console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
			}else{
				/* localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token'); */
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getCurrentAuction();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			refreshEvent(){
				let _this = this;
				_this.loading = true;
				_this.getCurrentAuction();
			},
			getCurrentAuction(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getCurrentAuction, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.auction = res.data;
						_this.onLoad(_this.auction.id);
					}else{
						_this.$toast(res.message);
					}
				});
			},
			onLoad(id){
				let _this = this;
				var params = {
					pageNo: this.currentPage1,
					pageSize: this.pageSize,
					auctionId:id
				}
				_this.$ajax.ajax(_this.$api.getAssistAuctionBookPageList, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list1 = res.data.list;
						_this.total = res.data.total;
						_this.loading = false;
						/* if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						} */
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			addTicket(num){
				let _this = this;
				if(_this.userInfo.isAgent<=0&&_this.userInfo.level<=0&&_this.userInfo.teamCalculationPower<=74.0&&_this.userInfo.realnameNum<=171){
					Dialog.alert({
						title: "系统提示",
					message: "经系统检测，您没有权限参与竞拍，请查看右上角的竞拍详情"
					}).then(() => {
						// on confirm
					})
				}else{
					Dialog.confirm({
					  title: '系统提示',
					  confirmButtonText:'确认',
					  closeOnClickOverlay:true,
					  message: `您确定要加价${num}个券吗？`
					}).then(() => {
					  // on confirm
					  let params = {
						  auctionId: _this.auction.id,
						  addPrice: num
					  }
					  //console.log("p",params)
					  _this.$ajax.ajax(_this.$api.insertAuctionBook, 'POST', params, function(res) {
					  	if (res.code == _this.$api.CODE_OK) {
					  		_this.$toast("加价成功");
							_this.getCurrentAuction();
					  	}else{
							Dialog.alert({
								title: "系统提示",
								message: res.message
							}).then(() => {
							  // on confirm
							  _this.getCurrentAuction();
							})
					  	}
					  })
					}).catch(() => {
					  // on cancel
					  //console.log('cancel');
					});
				}
			},
		}
	}
</script>


