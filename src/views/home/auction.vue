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
			<div class="list">
				<div class="item">
					<div class="flexLeft">
						<div class="name">
							<i class="iconleft iconfont iconfont-pai"></i>
						</div>
					</div>
					<div class="flex">
						<div class="line"><span>第十一个服务商</span> <span class="mainAdornColor">正在竞拍中</span></div>
						<div class="placeholderLine10"></div>
						<div class="line"><span>当前拍主 张三</span> <span class="mainAdornColor">出10000个帮扶券</span></div>
						<div class="placeholderLine10"></div>
						<div class="line white">
							截止时间：2020/10/08 20:20:20
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
			</div>
			<div class="placeholderLine4"></div>
			<div>加价记录：</div>
			<div class="placeholderLine4"></div>
			<div class="list">
				<div class="item">
					<div class="flexLeft">
						<div class="name">
							<i class="iconleft iconfont iconfont-pai"></i>
						</div>
					</div>
					<div class="flex">
						<div class="line"><span>张三</span> <span class="mainAdornColor">+3个帮扶券 <i class="iconfont iconfont-arrow-to"></i> 12000券</span></div>
						<div class="placeholderLine10"></div>
						<div class="line white">
							加价时间：2020/10/08 20:20:20
						</div>
					</div>
					<!-- <div class="flexRight"></div> -->
				</div>
			</div>
		</div>
		<van-action-sheet v-model="showTipModel" title="问题小帮手">
			<div class="paddingWing">
				<!-- 帮扶券：详情请查看<span  class="underline">新手指南</span>。 -->
				<!-- <div class="tip4model3">第一批省代理正在招募中，需通过现有代理或客服引荐。</div> -->
				<div class="placeholderLine10"></div>
				<div class="tip4model4">
					<b class="textBold">省市代理的权限：</b><br>					1.拥有引荐受帮扶对象的权限。<br>					2.拥有给他人解冻账号的权限。<br>					3.拥有申请给他人内排注册的权限。<br>					4.省市代理拥有帮扶券的代理权。<br>
					5.交易服务商会从代理中选择。<br>					帮扶券的用处：可用于交易的时候当手续费(这是平台方唯一的盈利点)、可用于帮助平台上生活遇到困难的会员而获得贡献值等。<br>
					注：代理期限至少半年。每半年会重新竞选一次。优秀负责的代理可续任。
					<div class="placeholderLine10"></div>
					<b class="textBold">如何获得省市代理？</b><br>					方案一.前期福利：2020/3/31 21:00 之前对接团队长，送市代理名额，由现代理引荐，送完为止，先到先得。<br>					方案二.前期福利：2020/3/31 21:00 个人算力在【首页-排行榜】中的用户找现有代理或客服审核即赠送市代理名额。<br>					方案三.实力抵押：抵押10000个帮扶券成为省代理；抵押5000个帮扶券成为市代理。<br>					注：帮扶券1CNY一个，会员从市代理那儿购买，市代理从省代理那儿购买，省代理从客服那儿购买。
				</div>
				<div class="placeholderLine40"></div>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		name:'agency',
		data() {
			return {
				currentPage1: 1,
				currentPage2: 1,
				pageSize:16,
				activeName:'agency2',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				list2:[],
				showTipModel:false,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
		
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制${res.text}成功`);
				});
			},
			toTeamView(id){
				console.log('id',id);
				this.$router.push({
					path:'/agency2',
					query:{
					  id:id,
					}
				});
			},
			addTicket(num){
				Dialog.confirm({
				  title: '确认弹窗',
				  message: `您确定要加价${num}个券吗？`
				}).then(() => {
				  // on confirm
				  
				}).catch(() => {
				  // on cancel
				});
			},
			onLoad1(){
				console.log('load1')
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loading1 = false;
					_this.finished1 = true;
				}, 500);
			},
			onLoad2(){
				console.log('load2')
				let _this = this;
				var params = {
					pageNo: this.currentPage2,
					pageSize: this.pageSize,
					status:2
				}
				_this.loading2 = true;
				_this.finished2 = false;
				_this.$ajax.ajax(_this.$api.getAssistProvinceAgentListByPage, 'GET', params, function(res) {
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
						_this.loading2 = false;
						_this.finished2 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad3(){
				console.log('load3')
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loading3 = false;
					_this.finished3 = true;
				}, 500);
			},
			onLoad4(){
				console.log('load4')
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loading4 = false;
					_this.finished4 = true;
				}, 500);
			},
			tabChange(res) {
				let _this = this;
				console.log('res', res)
				/* if(res == 'agency2'){
					_this.onLoad2();
				} */
			},
			onSearch(res){
				console.log('res', res)
			}
		}
	}
</script>


