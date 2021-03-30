<style lang="scss">
	// @import '@/assets/scss/variable.scss';
	@import '~@/assets/scss/index.scss';
	$main-box-color:#ffffff;
	.myPage{
		position: absolute;
		min-height: 100%;
		width: 100%;
		$iconBgWidth: 3.75rem;
		background-color: $main-box-fh-bg-color;
		.refreshBox{
			top: 6rem;
		}
		.tip{
			font-size:12px;
			line-height: 1.2em;
			letter-spacing: 1px;
			color: white;
			background-color: $main-adorn-color;
			text-align: center;
			padding-top: 4px;
			padding-bottom: 4px;
		}
		.cateInfo {
			display: flex;
			width: 100%;
			padding: 10px 0;
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 0.875rem;
		
				.iconBox {
					.iconBackground {
						width: $iconBgWidth;
						height: $iconBgWidth;
						line-height: $iconBgWidth;
						border-radius: $iconBgWidth/3;
						margin: 0 auto;
						color: $main-box-fh-text-color;
						font-size: 1.875rem;
					}
		
					.iconBackground1 {
						background-color: #f39800;
					}
		
					.iconBackground2 {
						background-color: #0049b6;
					}
		
					.iconBackground3 {
						background-color: #00b29b;
					}
		
					.iconBackground4 {
						background-color: #fd5f00;
					}
					
					.iconBackgroundMill {
						background-color: #08abee;
					}
					
					.iconBackgroundWord {
						background-color: #81d741;
					}
					
					.iconBackgroundBook {
						background-color: #00eaff;
					}
					
					.iconBackgroundDeal {
						background-color: #1aa034;
					}
				}
				.text {
					margin-top: 0.375rem;
					color: $main-box-fh-text-color;
				}
			}
		}
		.box {
			display: flex;
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: $boxPadding2;
			box-sizing: border-box !important;
			@include userSelectNone();
		}
		
		$avatorWidth:80px;
		
		.box1 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			.flex {
				&.flex1 {
					flex: 0 0 3.375rem;
					$heightwidht:3.375rem;
					.name{
						width: $heightwidht;
						height: $heightwidht;
						border-radius: $heightwidht;
						background-color: $main-blue-color;
						color: $main-box-fh-text-color;
						text-align: center;
						line-height: $heightwidht;
						font-size: 1.125rem;
					}
				}
				&.flex2 {
					flex: 1;
					padding-left: 0.5rem;
					display: flex;
					flex-direction: column;
					align-content: center;
					
					.line1{
						flex: 1;
						line-height: 1.625rem;
		
						.nick_name {
							font-size: 0.875rem;
							height: 1.25rem;
							line-height: 1.25rem;
						}
		
						.level {
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							height: 1.25rem;
							line-height: 1.25rem;
							font-size: 0.6875rem;
							border-radius: 0 0.625rem 0.625rem 0;
							padding: 0 0.5rem 0 0.25rem;
						}
					}
					.line{
						flex: 1;
						line-height: 1.25rem;
						font-size: 0.6875rem;
					}
				}
			}
		}
		
		.box2 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			text-align: center;
			.flex {
				flex: 1;
				.value{
					
				}
				.text {
					font-size: $fs-1;
					margin-top: 0.375rem;
				}
			}
		}
		
		.box3 {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			text-align: center;
			.flex {
				flex: 1;
				.text {
					font-size: $fs-1;
					margin-top: 0.375rem;
					line-height: 1.2em;
				}
			}
		}
		
		.items {
			/* background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color; */
			.my-cell {
				height: 2.875rem;
				line-height: 2.875rem;
				color: $main-box-fh-text-color;
				font-size: 0.75rem;
				border-bottom: 1px solid $bottomLineColor;
				display: flex;
				padding-left: $boxPadding2;
				padding-right: $boxPadding2;
				.flex1 {
					flex: 1;
					color: $main-box-fh-text-color;
				}
				.flex2 {
					flex: 0 0 2.5rem;
					text-align: right;
					.iconfont-right-arrow2 {
						font-size: 0.75rem;
						color: $grayLight2;
					}
				}
		
			}
		}
	}
</style>
<template>
	<div class="myPage">
	<div v-if="$route.meta.footer==true">
		<m-header>
			<i class="leftBox"></i>
			<div class="text">
				个人中心
			</div>
			<i class="iconfont iconfont-set rightBox icon" @click="toMyInfo"></i>
		</m-header>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<van-notice-bar
			  mode = "closeable"
			  left-icon="volume-o"
			  text="直推完成基础任务2奖励上级1个额度"
			/>
			<div class="box box1">
				<div class="flex flex1">
					<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
					<!-- <div class="name" @click="toMyInfo">{{$JsEncrypt.decrypt(userInfo.realName) | getLastName}}</div> -->
					<div class="name" @click="toMyInfo">{{userInfo.realName | getLastName}}</div>
					<!-- <div class="textCenter margT10">
						<i class="iconfont iconfont-complaint f-18" @click="toComplainView(userInfo.userId)"></i> <i class="f-16"> {{userInfo.beComplaintTimes}}</i>
					</div> -->
				</div>
				<div class="flex flex2">
					<div class="line1">
						<div class="nick_name left">
							{{userInfo.nickName}} <i class="iconfont iconfont-good f-14 margL6 margR2" @click="toBookView('5')"></i><span class="margR2">{{Number(userInfo.aword).toFixed(2)}}</span> 
							 <i class="iconfont iconfont-question" @click="showTip('raise')"/>
						</div>
					</div>
					<div class="line1 margT3">
						<!-- <div class="level left" @click="toMyInfo">{{userInfo.level | getUserType}}+{{getCityName(cityInfo)}}{{userInfo.isAgent | agentType}}</div> -->
						<div class="level left" @click="toMyInfo">{{userInfo.level | getUserType}}{{userInfo.isAgent==5?'+志愿者':userInfo.isAgent==3?'+客服':''}}</div>
					</div>
					<div class="line margT3">
						注册实名时间 {{userInfo.registerTime}}
					</div>
					<!-- <div class="line margT3" style="display: none;">
						a {{userInfo}} b {{b}} c {{c}}
					</div> -->
					<div class="line">
						<div class="left">买入次数 {{userInfo.buyTimes}}</div>
						<div class="mlBox left">买入数量 {{userInfo.buyAmount}}
							<!-- <span class="margL4" v-if="isShowBuyProfit">
								<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="giveBuyProfitLoading" @click="givePTRewardYesterday">买入奖励</van-button>
							</span> -->
						</div>
					</div>
					<div class="line">
						<div class="left">卖出次数 {{userInfo.sellTimes}}</div>
						<div class="mlBox left">卖出数量 {{userInfo.sellAmount}}</div>
					</div>
					<!-- <div class="line" @click="showTip('limitBuyNum')">个人限购数量 {{userInfo.canBuyNum}} <i class="iconfont iconfont-question"/></div> -->
					<div class="line">
						<span @click="toBookView('3')">贡献值 {{userInfo.contributionValue}}</span> <i class="iconfont iconfont-question" @click="showTip('contribution')"/>
						<!-- <span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="giveLevelDealProfitLoading" @click="giveLevelDealProfit">全球分红</van-button>
						</span> -->
					</div>
					<!-- @click="toBookView('5')" -->
					<!-- <div class="line">
						<span @click="toBookView('5')">爱心值 {{Number(userInfo.aword).toFixed(2)}}</span> <i class="iconfont iconfont-question" @click="showTip('raise')"/>	
					</div> -->
					<!-- <div class="placeholderLine"></div> -->
					<div class="line animated bounce faster">
						<span @click="toBookView('6')" class="yellow">可售额度 {{Number(userInfo.email).toFixed(3)}}</span> <i class="iconfont iconfont-question" @click="showTip('circulateValue')"/>	
						<!-- <span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="circulateToMyCPLoading" @click="circulateToMyCPEvent">流通值兑换个人算力</van-button>
						</span> -->
					</div>
					<div class="placeholderLine"></div>
					<div class="line">
						<span>
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="giveLevelDealProfitLoading" @click="giveLevelDealProfit">全球分红</van-button>
						</span>
						<!-- <span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" @click="giveCashProfit">持钻挖矿</van-button>
						</span> -->
						<span class="margL10">
							<van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" @click="handleCopy4BuyTicket(userInfo.mobilePhone,$event)">购买帮扶券</van-button>
							<!-- <van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" @click="buyTicketBtn">购买帮扶券</van-button> -->
						</span>
					</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box2">
				<div class="flex flex1">
					<div class="value animated bounce faster" @click="toBookView('1')">{{userInfo.teamCalculationPower}}</div>
					<div class="text" @click="showTip('teamCalculationPower')">团队算力 <i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<!-- <div>{{userInfo.platformTicket}}</div> -->
					<div class="value animated bounce faster" @click="toBookView('2')">{{userInfo.platformTicket}}</div>
					<div class="text" @click="showTip('platformTicket')">帮扶券 <i class="iconfont iconfont-question"/></div>
				</div>
				<!-- <div class="flex flex3">
					<div class="value" @click="toBookView('3')">{{userInfo.contributionValue}}</div>
					<div class="text" @click="showTip('contribution')">贡献值 <i class="iconfont iconfont-question"/></div>
				</div> -->
				<div class="flex flex2">
					<!-- <div>{{userInfo.thisWeekMineral}}</div> -->
					<div class="value animated bounce faster" @click="toBookView('4')">{{userInfo.thisWeekMineral}}</div>
					<div class="text" @click="showTip('mineral')">矿石 <i class="iconfont iconfont-question"/></div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="box box3">
				<div class="flex flex1">
					<div>{{userInfo.myCalculationPower}}</div>
					<!-- <NumberGrow :value="userInfo.myCalculationPower"></NumberGrow> -->
					<div class="text" @click="showTip('myCalculationPower')">个人算力<br><i class="iconfont iconfont-question"/></div>
				</div>
				<div class="flex flex4">
					<div>{{userInfo.temporaryFreezePlatformTicket}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezePlatformTicket"></NumberGrow> -->
					<div class="text">流通中<br>帮扶券</div>
				</div>
				<!-- <div class="flex flex3">
					<div>{{userInfo.temporaryFreezeContribution}}</div>
					<div class="text">交易中<br>贡献值</div>
				</div> -->
				<div class="flex flex2">
					<div>{{userInfo.temporaryFreezeMineral}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezeMineral"></NumberGrow> -->
					<div class="text">流通中<br>矿石</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="cateInfo">
				<!-- <div class="infoBox">
					<router-link to="/task">
						<div class="iconBox">
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="task2" />
							</div>
						</div>
						<div class="text">任务中心</div>
					</router-link>
				</div> -->
				<div class="infoBox">
					<router-link to="/myMill2">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundMill">
								<van-icon class-prefix="iconfont" name="mill2" />
							</div>
						</div>
						<div class="text">算力矿机</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myMill">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundMill">
								<van-icon class-prefix="iconfont" name="mill2" />
							</div>
						</div>
						<div class="text">常规矿机</div>
					</router-link>
				</div>
				
				<div class="infoBox">
					<router-link to="/myDeal">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundDeal">
								<van-icon class-prefix="iconfont" name="deal" />
							</div>
						</div>
						<div class="text">我的交易</div>
					</router-link>
				</div>
				<div class="infoBox" @click="toMyBook">
					<div class="iconBox">
						<div class="iconBackground iconBackgroundBook">
							<van-icon class-prefix="iconfont" name="book" />
						</div>
					</div>
					<div class="text">我的账本</div>
					<!-- <router-link to="/myBook">
					</router-link> -->
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="cateInfo">
				<!-- <div class="infoBox">
					<router-link to="/myInfo">
						<div class="iconBox">
							<div class="iconBackground iconBackground4">
								<van-icon class-prefix="iconfont" name="realname" />
							</div>
						</div>
						<div class="text">我的实名</div>
					</router-link>
				</div> -->
				<div class="infoBox">
					<router-link to="/task">
						<div class="iconBox">
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="task2" />
							</div>
						</div>
						<div class="text">任务中心</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/mySuperTeam">
						<div class="iconBox">
							<div class="iconBackground iconBackground2">
								<van-icon class-prefix="iconfont" name="team" />
							</div>
						</div>
						<div class="text">我的工会</div>
					</router-link>
				</div>
				<div class="infoBox">
					 <!-- @click="waiting" -->
					<router-link to="/myShare">
						<div class="iconBox" >
							<div class="iconBackground iconBackground1">
								<van-icon class-prefix="iconfont" name="share2"/>
							</div>
						</div>
						<div class="text">战队招募</div>
					</router-link>
				</div>
				<div class="infoBox">
					<router-link to="/myWord">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundWord">
								<van-icon class-prefix="iconfont" name="word" />
							</div>
						</div>
						<div class="text">我要留言</div>
					</router-link>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div class="items">
				<div class="my-cell" @click="waitting()">
					<div class="flex1">
						我的商城(商家专用)
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div>
				<!-- <router-link to="shopOrder4Merchant">
					
				</router-link> -->
			</div>
			<div class="items">
				<router-link to="shopOrder">
					<div class="my-cell">
						<div class="flex1">
							商城购物订单
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<!-- <router-link to="transferMineral4F">
					
				</router-link> -->
				<!-- <div class="my-cell" @click="close">
					<div class="flex1">
						定向转让矿石(服务商)
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div> -->
				<!-- <div class="my-cell" @click="close">
					<div class="flex1">
						定向转让矿石(会长)
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div> -->
				<!-- <router-link to="transferMineral4L" v-if="userInfo.isAgent>=3&&(userInfo.userId=='1502d824670iQ1215VW8'||userInfo.userId=='158Xy2r123W5140Z5n28')">
					<div class="my-cell">
						<div class="flex1">
							定向转让矿石
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="transferCV" v-if="userInfo.isAgent>=3&&(userInfo.userId=='1502d824670iQ1215VW8'||userInfo.userId=='158Xy2r123W5140Z5n28')">
					<div class="my-cell" to="transferCV">
						<div class="flex1">
							定向转让贡献值
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<router-link to="transferTicket">
					<div class="my-cell">
						<div class="flex1">
							定向转让帮扶券
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<!-- <router-link to="transferTicket" v-if="userInfo.isAgent>=3||userInfo.innerRegister>0">
				<router-link to="transferTicket">
					<div class="my-cell">
						<div class="flex1">
							定向转让帮扶券
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<!-- to="transferCV" -->
				<!-- <router-link to="transferCV" v-if="userInfo.isAgent>=3&&(userInfo.userId=='1502d824670iQ1215VW8'||userInfo.userId=='158Xy2r123W5140Z5n28')">
					<div class="my-cell" to="transferCV">
						<div class="flex1">
							定向转让贡献值
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
			</div>
			<div class="items">
				<router-link to="myRaiseList">
					<div class="my-cell">
						<div class="flex1">
							我的帮扶筹申请列表
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items">
				<router-link to="lookInfo">
					<div class="my-cell">
						<div class="flex1">
							查询他人信息
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent==3&&(userInfo.userId=='158Xy2r123W5140Z5n28'||userInfo.userId=='1T5p8SJ04n54o4978Q86')">
				<router-link to="shopProduct4S">
					<div class="my-cell">
						<div class="flex1">
							商城管理(客服专用)
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="updateMaxPrice">
					<div class="my-cell">
						<div class="flex1">
							配置信息
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent==3&&(userInfo.userId=='158Xy2r123W5140Z5n28'||userInfo.userId=='1T5p8SJ04n54o4978Q86'||userInfo.userId=='1502d824670iQ1215VW8'||userInfo.userId=='1580I60773e1XBJ52634')">
				
				<router-link to="dealList">
					<div class="my-cell">
						<div class="flex1">
							会员交易列表
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="initPassword">
					<div class="my-cell">
						<div class="flex1">
							给他人初始化密码
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<router-link to="updateIdCard">
					<div class="my-cell">
						<div class="flex1">
							帮他人修改身份证号
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				<!-- <router-link to="updateAlipay">
					<div class="my-cell">
						<div class="flex1">
							帮他人修改支付宝
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<router-link to="lookupIdCard">
					<div class="my-cell">
						<div class="flex1">
							查看他人身份证号被谁占用
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="(userInfo.isAgent==3&&(userInfo.userId=='158Xy2r123W5140Z5n28'||userInfo.userId=='1T5p8SJ04n54o4978Q86'||userInfo.userId=='1502d824670iQ1215VW8'||userInfo.userId=='1580I60773e1XBJ52634'||userInfo.userId=='B1j580U56l5J78i54090'||userInfo.userId=='15805Rx6hU3hz3g26018'||userInfo.userId=='1E582xV6e3L1jV418416'))" @click="toMyCheck">
				<router-link to="myCheck">
					<div class="my-cell">
						<div class="flex1">
							实名审核
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items" v-if="userInfo.isAgent==3||userInfo.isAgent==5">
				<router-link to="unFreeze">
					<div class="my-cell">
						<div class="flex1">
							查看会员被冻结原因
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<div class="items">
				<!-- <router-link to="myVoteList">
					<div class="my-cell">
						<div class="flex1">
							我的投票申请
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link> -->
				<router-link to="reduceRNTimes">
					<div class="my-cell">
						<div class="flex1">
							销实名次数
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
				
				<router-link to="transferFGC">
					<div class="my-cell">
						<div class="flex1">
							合成钻石值
						</div>
						<div class="flex2">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</router-link>
			</div>
			<!-- <div class="paddingAll">
				<van-button color="#c7c7c7" size="normal" :block="true" @click="cancelAccount" loading-type="spinner">注销账户(暂对尚未实名的用户开放)</van-button>
			</div> -->
			
			<!-- <div class="items">
				<div class="my-cell" @click="cancelAccount">
					<div class="flex1">
						注销账户
					</div>
					<div class="flex2">
						<i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div>
			</div> -->
		</van-pull-refresh>
		<van-dialog v-model="showToBuyTicketModel" title="买券提示" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
				<div class="paddingWing">
						<div class="placeholderLine20"></div>
						<div class="tip4modelNew">帮扶券1CNY/张，另加少许服务费，<b class="red textBold">为了避免充值的时候填写错手机号，系统已经帮您复制了手机号</b>，前去买券页面粘贴即可！</div>
						<div class="placeholderLine20"></div>
					</div>
					<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">租赁</van-button> -->
					<van-button type="info" size="large" @click="buyTicketBtn" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">好的</van-button>
		</van-dialog>
		<!-- <m-fullscreen></m-fullscreen> -->
		<!-- <m-refresh @refreshEvent="refreshEvent"></m-refresh> -->
		<van-dialog v-model="showTipModel" title="系统提示" :showCancelButton="isShowCancelBtn" cancelButtonText="稍后" confirmButtonText="好的" @confirm="confirmBtn">
			<div class="paddingWing f-12 lineHeight tip4model2">
				1.您尚未实名，是否先前去实名？<br>
				2.实名审核通过后，所上传的照片会被系统自动销毁并删除处理。
			</div>
		</van-dialog>
		<van-dialog v-model="showTipModel2" title="系统提示" :showCancelButton="isShowCancelBtn" cancelButtonText="稍后" confirmButtonText="好的" @confirm="confirmBtn">
			<div class="paddingWing f-12 lineHeight tip4model2">
				1.您的实名审核被驳回，是否前去查看驳回原因？<br>
				2.实名审核通过后，所上传的照片会被系统自动销毁并删除处理。
			</div>
		</van-dialog>
	</div>
	<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	<transition name="van-fade">
	  <router-view></router-view>
	</transition>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh2.vue';
	import { Dialog } from 'vant';
	import clip from '@/assets/js/clipboard';
	// import mFullscreen from '@/components/Fullscreen.vue';
	/* import { Skeleton } from 'vant'; */
	import { myMixin } from '@/assets/js/myMixin.js';
	import { mapState } from 'vuex';
	export default {
		mixins:[myMixin],
		data() {
			return {
				showToBuyTicketModel:false,
				isShowCancelBtn:true,
				showTipModel:false,
				showTipModel2:false,
				pageHeight:"",
				userId:"",
				result: "",
				loading: true,
				userInfo: "",
				buyAndSellInfo:{
					buyInNum:0.0,
					buyInTime:0,
					sellOutNum:0.0,
					sellOutTime:0,
				},
				cookiesTime:60 * 60 * 24,
				cityInfo:'',
				dsPassword:'',
				giveLevelDealProfitLoading:false,
				circulateToMyCPLoading:false,
				giveBuyProfitLoading:false,
				isShowBuyProfit:true,
				arr:{}
			}
		},
		components: {
			mHeader,
			mRefresh,
			// mFullscreen
		},
		computed:{
			...mapState(['a','b','c','userInfo'])
		},
		created() {
			let _this = this;
			if(_this.$cookies.get('isRefreshUserInfo')==1){
				_this.getUserInfo();
			}
		},
		methods: {
			getCityName(cityInfo){
				if(cityInfo&&cityInfo.provinceName){
					return cityInfo.provinceName
				}else if(cityInfo&&cityInfo.cityName){
					return cityInfo.cityName
				}
			},
			close(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'好的',
				  message: "为了稳定市场，该通道暂时关闭，若要走定向，可通过挂卖单"
				}).then(() => {
				  // on confirm
				})
			},
			closeTCV(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'好的',
				  message: "为了规范市场，定向转让贡献值通道已经关闭，请大家统一用矿石交易"
				}).then(() => {
				  // on confirm
				})
			},
			toBlcokSearchView(){
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('blockSearch');
			},
			toMyCheck(){
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
				_this.$router.push('myCheck');
			},
			toMyBook(){
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('myBook');
			},
			givePTRewardYesterday(){
				let _this = this;
				/* if(_this.userInfo.buyAmount<100){
					Dialog.alert({
					  title: '系统提示',
					  message: "领取该奖励需昨天收购矿石数达到100颗以上"
					}).then(() => {
					  // on close
					});
					return;
				} */
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: '今日可领取昨日的买入奖励，您是否确认领取？'
				}).then(() => {
				  _this.giveBuyProfitLoading = true;
				  _this.$ajax.ajax(_this.$api.givePTRewardYesterday, 'POST', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
				  		if(res.data == 1){
				  			_this.$toast('领取成功');
				  			_this.$cookies.set("tab_name_book", 'ticket', _this.$api.cookiesTime)
				  			_this.$router.push('myBook');
				  		}
				  	}else{
				  		//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
						return;
				  	}
				  },function(){
				  	_this.giveBuyProfitLoading = false;
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			circulateToMyCPEvent(){
				let _this = this;
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: '流通值已被取消，您是否确认将账户中的流通值10000:1兑换成个人算力，用来做质押挖矿的永久算力加成？'
				}).then(() => {
				  _this.circulateToMyCPLoading = true;
				  _this.$ajax.ajax(_this.$api.circulateToMyCP, 'POST', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
				  		if(res.data == 1){
				  			_this.$toast('转化成功');
							_this.getUserInfo();
				  		}
				  	}else{
				  		//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
						return;
				  	}
				  },function(){
				  	_this.circulateToMyCPLoading = false;
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			buyTicketBtn(){
				let _this = this;
				let url = `http://pay.8gesy.com/payment/fenqu.html?id=574932D6D9E879EF`;
				//window.open(url);
				window.open(url,'_blank');
			},
			/* buyTicketBtn(){
				let _this = this;
				Dialog.confirm({
				  title: '购买提示',
				  confirmButtonText:'确认',
				  message: "扶券1CNY/张，另加少许服务费，【为了避免充值的时候填写错手机号，系统已经帮您复制了手机号】，前去买券页面粘贴即可！"
				}).then(() => {
				  let url = `http://pay.8gesy.com/payment/fenqu.html?id=574932D6D9E879EF`;
				  window.open(url,'_self');
				}).catch(()=>{
				})
			}, */
			giveLevelDealProfit(){
				let _this = this;
				if(_this.userInfo.level<1){
					Dialog.alert({
					  title: '系统提示',
					  message: "领取全球分红首先要青铜及以上级别"
					}).then(() => {
					  // on close
					});
					return;
				}
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: '工会会长的全球分红每天领取矿石数量=(个人拥有算力矿机总算力+个人算力/100)/当前所有会长的个人算力之和*昨日交易量*3%*等级值（等级值：青铜为1，白银为2，以此类推），您是否确认领取？'
				}).then(() => {
				  _this.giveLevelDealProfitLoading = true;
				  _this.$ajax.ajax(_this.$api.giveLevelDealProfit, 'POST', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
				  		if(res.data == 1){
				  			_this.$toast('领取成功');
				  			_this.$cookies.set("tab_name_book", 'mineral', _this.$api.cookiesTime)
				  			_this.$router.push('myBook');
				  		}
				  	}else{
				  		//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
						return;
				  	}
				  },function(){
				  	_this.giveLevelDealProfitLoading = false;
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			toComplainView(userId){
				let _this = this;
				_this.$router.push({path:"lookComplainList",query:{targetUserId:userId}});
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			handleCopy4BuyTicket(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.showToBuyTicketModel=true;
				});
			},
			getServiceDsPassword(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getServiceDsPassword, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.dsPassword = res.data.dsPassword;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistAgentInfo4Province(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistAgentInfo4Province, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.cityInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistAgentInfo4City(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistAgentInfo4City, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.cityInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				////console.log("province",province);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			cancelAccount(){
				let _this = this;
				Dialog.confirm({
				  title: '注销确认',
				  message: '你确定要注销/删除/重新注册这个账号？'
				}).then(() => {
				  // on confirm
				  if(_this.userInfo.teamateNum>0){
					  Dialog.alert({
					    title: '系统提示',
					    confirmButtonText:'好的',
					    message: "您已有直推，暂时无法注销账号"
					  }).then(() => {
					    // on confirm
					  })
					  return;
				  }
				  _this.$ajax.ajax(_this.$api.cancelAccount, 'GET', null, function(res){
				  	if(res.code == _this.$api.CODE_OK){
						Dialog.alert({
						  title: '系统提示',
						  confirmButtonText:'好的',
						  message: "注销成功，可重新注册"
						}).then(() => {
						  // on confirm
						  _this.$router.replace('login');
						})
				  	}else{
				  		Dialog.alert({
				  		  title: '系统提示',
				  		  confirmButtonText:'好的',
				  		  message: res.message
				  		}).then(() => {
				  		  // on confirm
				  		})
				  	}
				  })
				}).catch(() => {
				  // on cancel
				});
			},
			showTip(val){
				//console.log(val);
				let message = '';
				if(val=='mineral'){
					message = '矿石：当前个人所能用来流通的矿石，若出售后需留2个用来复投。获得途径：矿机产出、买入、分红奖励。';
				}else if(val=='platformTicket'){
					message = '帮扶券：可用于交易的时候当手续费。获取途径：购买。';
				}else if(val=='contribution'){
					message = '贡献值：贡献值是平台对会员的奖励，可以用来租赁矿机。获取途径：爱心值释放。';
				}else if(val=='teamCalculationPower'){
					message = '团队算力：个人算力+近代下级的个人算力。它决定着您的用户等级，分别有：青铜、白银、黄金、铂金、钻石五个等级，具体请查看【个人中心--任务中心】。';
				}else if(val=='myCalculationPower'){
					message = '个人算力：由个人所拥有的矿机所决定，其他特殊奖励也有加个人算力。';
				}else if(val=='limitBuyNum'){
					message = '个人限购数量=初始限购数量+(卖出数量-买入数量)，若有特殊需要，个人限购数量可找客服申请提升';
				}else if(val=='raise'){
					message = '爱心值：满10个即可在首页通过签到每日释放贡献值；获取途径：帮扶筹中捐赠';
				}else if(val=='circulateValue'){
					message = '可售额度：可通过复投、推广、买入获得，复投可加10%需通过签到每天释放，推广会员完成2个基础任务加1，推广会员完成进阶任务加1，买入1:1.2增加，卖出1:1扣除。';
				}
				Dialog.alert({
				  title: '温馨提示',
				  confirmButtonText:'好的',
				  message: message
				}).then(() => {
					// on confirm
					//console.log('sure');
				})
			},
			toBookView(val){
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
				//console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}else if(val==5){
					name = 'loveValue';
				}else if(val==6){
					name = 'circulateValue';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push('/myBook');
			},
			toMyInfo(){
				this.$router.push('/myInfo');
			},
			confirmBtn(){
				let _this = this;
				_this.showTipModel = false;
				_this.$router.push('/myInfo');
			},
			getUserInfo() {
				let _this = this;
				//console.log("getUserInfo__IN__MY");
				_this.loading = true;
				let params = {}
				_this.$store.dispatch('getAssistUserInfo', params).then(res=>{
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						if(_this.userInfo.actived==-1){
							_this.showTipModel = true;
						}
						if(_this.userInfo.actived==2){
							_this.showTipModel2 = true;
						}
						_this.$cookies.set('isRefreshUserInfo',0,_this.$api.cookiesTime);
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						if(_this.userInfo.accountStatus==1){
							//退出登录
							_this.logout();
						}
					}else{
						_this.$storage.removeAll();
						_this.$toast(_this.$api.loginAgainTipText);
						_this.$router.replace('login');
					}
				}).catch(res=>{
					console.log('res', res);
					_this.loading = false;
				})
			},
			refreshPage() {
				location.reload();
			},
			refreshEvent() {
				//console.log("refresh")
				let _this = this;
				_this.getUserInfo();
			},
		}
	}
</script>
