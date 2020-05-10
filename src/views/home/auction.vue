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
							<div class="line"><span>{{auction.title}}</span> <span class="mainAdornColor">{{auction.status == 0 ? '未开拍':auction.status == 1?'竞拍中':'已截止'}}</span></div>
							<div class="placeholderLine4"></div>
							<div class="line"><span>当前拍主 {{auction.nickName}}</span> <span class="mainAdornColor">出{{auction.auctionEndPrice}}个矿石</span></div>
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
					<van-button round type="info" @click="addTicket(1)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">1个</van-button>
					<van-button round type="info" @click="addTicket(3)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">3个</van-button>
					<van-button round type="info" @click="addTicket(5)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">5个</van-button>
					<van-button round type="info" @click="addTicket(10)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">10个</van-button>
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
							<div class="line"><span>{{item.nickName}}</span> <span class="mainAdornColor"><!-- +{{item.addPrice}}个矿石<i class="iconfont iconfont-arrow-to"></i> -->出 {{item.currentAuctionPrice}}矿石</span></div>
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
					<b class="textBold">本次服务商竞拍规则：</b><br>
					5月9号晚21:00~22:00进行竞拍1名服务商，竞拍结束后第2天将从加价记录中的团队长名单中投票产生1名团队长作为服务商<br>
					投票参与人员：个人算力大于13G的会员。<br>
					投票规则：每人最多投1票。<br>
					投票选举成功后，该服务商获得1台中型+服务商职位。<br>
					其他竞拍日程<br>
					5月10号晚21:00~22:00进行竞拍2名服务商<br>
					需团队算力大于100G<br>
					5月11号晚21:00~22:00进行竞拍2名服务商<br>
					需团队算力大于100G<br>
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
				if(_this.userInfo.teamCalculationPower<100){
					Dialog.alert({
						title: "系统提示",
						message: "经系统检测，您没有权限参与竞拍，请查看右上角的此次竞拍规则"
					}).then(() => {
						// on confirm
					})
				}else{
					Dialog.confirm({
					  title: '系统提示',
					  confirmButtonText:'确认',
					  closeOnClickOverlay:true,
					  message: `您确定要加价${num}个矿石吗？`
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


