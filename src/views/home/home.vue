<style scoped lang="scss">
@import '~@/assets/scss/variable.scss';
$noticeHeight:40px;
.homePage{
	[class*=van-hairline]::after {
	    border: 0px solid transparent !important;
	}
	.popRaiseContent{
		.popTitle{
			width: 100%;
			text-align: center;
			line-height: 3.75rem;
		}
	}
	.noticeDetail{
		padding: 0 $boxPadding2;
		box-sizing: border-box;
		font-size: 14px;
		overflow: hidden;
		.content{
			font-size: 12px;
			margin-top: 7px;
			line-height: 1.2em;
			letter-spacing: 1px;
			text-align: justify;
			color: $grayDark !important;
			.ql-indent-1{
				margin-top: 2px;
			}
		}
		.detailTime{
			overflow: hidden;
			clear: both;
			font-size: 11px;
			color: #a7a7a7 !important;
			margin-bottom: 6px;
		}
		[class*=van-hairline]::after {
		    border: 0px solid transparent !important;
		}
	}
	.HomeContent{
		position: relative;
		.swipe {
			.van-swipe-item {
				img {
					width: 100%;
				}
			}
		}
		.notice {
			width: $lineWidth;
			height: $noticeHeight;
			margin-left: $marginLeft;
			background-color: white;
			border-radius: $borderRadius;
			margin-top: -18px;
			position: relative;
		}
		
		.van-notice-bar {
			border-radius: $borderRadius;
		}
		
		.millInfo {
			display: flex;
			width: $lineWidth;
			margin-top: $marginTop2;
			margin-left: $marginLeft;
			border-radius: $borderRadius;
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: 16px 0;
		
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 14px;
				border-right: 1px solid $mainBorderColor;
		
				&:last-child {
					border-right: 1px solid transparent;
				}
				.amount {
					font-size: 15px;
				}
			}
		}
		
		$iconBgWidth:50px;
		
		.cateInfo {
			display: flex;
			width: $lineWidth;
			margin-top: $marginTop2;
			margin-left: $marginLeft;
			border-radius: $borderRadius;
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: 10px 0;
		
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 14px;
		
				.iconBox {
					.iconBackground {
						width: $iconBgWidth;
						height: $iconBgWidth;
						line-height: $iconBgWidth;
						border-radius: $iconBgWidth/3;
						margin: 0 auto;
						color: $main-box-fh-text-color;
						font-size: 30px;
					}
		
					.iconBackground1 {
						background-color: #00eaff;
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
					
					.iconBackgroundCService{
						background-color: #fbca42;
					}
					
					.iconBackgroundRaise{
						background-color: #f50808;
					}
					
					.iconBackgroundAttendance {
						background-color: #55aa00;
					}
					
					.iconBackgroundRank {
						background-color: #f39800;
					}
					
					.iconBackgroundShare {
						background-color: #42a0ff;
					}
				}
				.text {
					margin-top: 0.375rem;
					color: $main-box-fh-text-color;
				}
			}
		}
		
		$noticeFlagHeight:2rem;
		
		.noticeFlag {
			width: $lineWidth;
			overflow: hidden;
			clear: both;
			.title {
				float: left;
				font-size: 0.875rem;
				color: $grayDarker;
				height: $noticeFlagHeight;
				line-height: $noticeFlagHeight;
			}
		
			.lookMore {
				float: right;
				font-size: 0.75rem;
				color: $grayDarker;
				height: $noticeFlagHeight;
				line-height: $noticeFlagHeight;
				text-decoration: underline;
				margin-right: 12px;
			}
		}
		
		$itemLRHeight:40px;
		$itemInnerLine1Height:20px;
		
		.noticeList {
			.item {
				display: flex;
				padding: 10px $boxPadding2;
				border-top: 1px solid $mainBorderColor;
		
				&:last-child {
					border-bottom: 1px solid transparent;
				}
		
				.itemLeft {
					flex: 1;
		
					.title {
						width: 100%;
						font-size: 14px;
						height: $itemInnerLine1Height;
						line-height: $itemInnerLine1Height;
						color: $mainTextColor2;
					}
		
					.time {
						font-size: 0.875rem;
						color: $grayDarker;
						// margin-top: 0.5rem;
						height: $itemInnerLine1Height;
						line-height: $itemInnerLine1Height;
					}
		
					.iconfont-right-arrow {
						font-size: 10px !important;
					}
				}
		
				.itemRight {
					flex: 0 0 30px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					font-size: 1rem;
					color: $grayLight2;
					text-align: right;
				}
			}
		}
	}
	.attendanceBox{
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		width: 100%;
		box-sizing: border-box;
		word-break: break-word;
		position: relative;
		.close{
			position: absolute;
			right: 10px;
			top: 10px;
			font-size: 20px;
		}
		.title{
			text-align: center;
			font-size: 18px;
		}
		.tomorrowContribution{
			text-align: center;
			color: $main-adorn-color;
			font-size: 13px;
			margin-top: 4px;
			line-height: 1.2em;
		}
		.flexBox{
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			justify-content: space-around;
			text-align: center;
			.flex{
				flex: 1;
				text-align: center;
				$circleWidth:34px;
				.circle{
					margin: 0 auto;
					height: $circleWidth;
					line-height: $circleWidth;
					width: $circleWidth;
					border-radius: $circleWidth;
					font-size: 12px;
					color: $main-box-fh-text-color;
					&.bgcolor1{
						background-color: $main-adorn-color;
					}
					&.bgcolor2{
						background-color: $main-red-color;
					}
				}
				.day{
					margin-top: 4px;
					font-size: 12px;
					color: $main-adorn-color;
				}
			}
		}
	}
}
</style>
<template>
	<div class="homePage">
		<van-popup v-model="showAttendanceModel" :style="{ width: '92%' }" :round="true">
			<div class="attendanceBox">
				<div class="close" @click="closeBtn">
					<van-icon name="close" />
				</div>
				<div class="placeholderLine20"></div>
				<div class="title">{{attendanceTitle}}</div>
				<div class="tomorrowContribution">连续签到30天可额外获得1个贡献值</div>
				<div class="tomorrowContribution">随着矿石价值的增加，签到所得贡献值会不定期做调整</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(1)">0.01</div>
						<div class="day">1天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(2)">0.01</div>
						<div class="day">2天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(3)">0.01</div>
						<div class="day">3天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(4)">0.01</div>
						<div class="day">4天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(5)">0.01</div>
						<div class="day">5天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(6)">0.01</div>
						<div class="day">6天</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(7)">0.02</div>
						<div class="day">7天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(8)">0.02</div>
						<div class="day">8天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(9)">0.02</div>
						<div class="day">9天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(10)">0.02</div>
						<div class="day">10天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(11)">0.02</div>
						<div class="day">11天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(12)">0.02</div>
						<div class="day">12天</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(13)">0.03</div>
						<div class="day">13天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(14)">0.03</div>
						<div class="day">14天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(15)">0.03</div>
						<div class="day">15天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(16)">0.03</div>
						<div class="day">16天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(17)">0.03</div>
						<div class="day">17天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(18)">0.03</div>
						<div class="day">18天</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(19)">0.04</div>
						<div class="day">19天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(20)">0.04</div>
						<div class="day">20天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(21)">0.04</div>
						<div class="day">21天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(22)">0.04</div>
						<div class="day">22天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(23)">0.04</div>
						<div class="day">23天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(24)">0.04</div>
						<div class="day">24天</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(25)">0.05</div>
						<div class="day">25天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(26)">0.05</div>
						<div class="day">26天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(27)">0.05</div>
						<div class="day">27天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(28)">0.05</div>
						<div class="day">28天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(29)">0.05</div>
						<div class="day">29天</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(30)">0.05</div>
						<div class="day">30天</div>
					</div>
				</div>
				<div class="placeholderLine20"></div>
				<div v-if="!todayIsAttendance">
					<van-button type="info" size="normal" @click="sureAttendanceBtn" :loading="isLoading" :disabled="isDisableAttendanceBtn"  loading-type="spinner" loading-text="加载中..." color="linear-gradient(to right, #ffae00, #ff8400)" :block="true"><span class="letterSpacing">签到</span></van-button>
					<div class="placeholderLine20"></div>
				</div>
				<div v-if="todayIsAttendance">
					<div class="textCenter red f-13">今日签到已领取{{getTodayAttendanceValue}}贡献值</div>
					<div class="tomorrowContribution" v-if="dayNum<30">明日签到可领取{{getTomorrowContributionValue}}贡献值</div>
					<!-- <div class="tomorrowContribution" v-if="dayNum==30">恭喜您：今日已成功获取一台体验矿机，明日将重置签到</div> -->
					<div class="tomorrowContribution" v-if="dayNum==30">恭喜您：签到满30天，已成功额外领得1个贡献值奖励，明日将重置签到</div>
					<div class="placeholderLine20"></div>
				</div>
			</div>
		</van-popup>
		<van-popup v-model="showRaiseModel" :style="{ width: '92%' }" :round="true">
			<div class="popRaiseContent">
				<div class="popTitle">
					捐赠给基金池
				</div>
				<van-cell-group>
					<van-field v-model="form4FundPool.raiseNum" :border="true" label="捐赠数量" type="number" placeholder="请填写捐赠帮扶券数量"/>
					
					<!-- <van-field v-model="form4BuyBill.safePassword" type="password" required clearable label="安全密码" right-icon="question-o" placeholder="请填写安全密码"
					  @click-right-icon="alertTip(clickIconTip.safePassword)"
					  @blur="validate4BuyBill('safePassword')"
					  :error-message="errorInfo4BuyBill.safePassword"
					  /> -->
				</van-cell-group>
				<div class="sureAppointBtnBox">
					<!-- <div class="tip4model3">系统提示：卖出匹配是随机的，最新挂买的前{{dealPageInfo.limit}}单会优先被匹配。</div> -->
					<!-- <div class="tip4model3">系统提示：卖单被匹配的方式是随机的，最新挂的单子被匹配的概率会高一些，若被匹配后，有2小时的交易时间，卖家一旦锁定交易后，可继续往后延长2小时的交易时间，买家若因不知情而没查看所匹配的单子，单子被取消后，只扣卖家的0.5~1.0个贡献值--因卖家通知不到位，没及时提醒买家查看订单。（同时，交易过程中若遇到问题，随时都可以点诉讼按钮，并联系客服让客服介入调查或协调）</div>
					<div class="placeholderLine10"></div> -->
				    <van-button @click="submit4Raise" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :loading="loading4Raise" :block="true">确 认</van-button>
				</div>
			</div>
		</van-popup>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent" v-if="$route.meta.footer">
			<div class="HomeContent">
				<div class="swipe">
					<!-- <van-swipe :autoplay="3000" style="height: 190px;" @change="onChange4Swipe">
					  <van-swipe-item v-for="(item, index) in noticeList4Swipe" :key="index">
						<img :src="item.imgUrl" v-lazy="item.imgUrl"/>
					  </van-swipe-item>
					</van-swipe> -->
					<van-swipe :autoplay="3000" style="height: 190px;" :lazy-render="true">
					  <van-swipe-item v-for="(image, index) in images" :key="index">
						<img v-lazy="image" />
					  </van-swipe-item>
					  <!-- <template #indicator>
					      <div class="custom-indicator">
					        {{ currentImage + 1 }}/4
					      </div>
					    </template> -->
					</van-swipe>
				</div>
				<div class="notice">
					<van-notice-bar :text="lastNoticeItem.noticeTitle" left-icon="volume-o" @click="toNoticeDetail(lastNoticeItem)" />
					<!-- <van-notice-bar :text="qqFlock" left-icon="volume-o" @click="toServicePage"/> -->
				</div>
				<div class="millInfo" v-if="!statistics.allMineralNum">
					<div class="placeholderLine10"></div>
					<van-skeleton :row="4"/>
					<div class="placeholderLine10"></div>
				</div>
				<div class="millInfo" v-if="statistics.allMineralNum">
					<div class="infoBox">
						<div class="amount">{{ statistics.allMineralNum || 0 }}</div>
						<div class="margT6">矿石总量</div>
					</div>
					<div class="infoBox">
						<div class="amount">{{ statistics.beDigNum  || 0}}</div>
						<div class="margT6">开采数量</div>
					</div>
					<div class="infoBox">
						<div class="amount">{{ statistics.canCirculateNum  || 0}}</div>
						<div class="margT6">流通数量</div>
					</div>
					<div class="infoBox">
						<div class="amount">{{statistics.beDestroyNum || 0}}</div>
						<div class="margT6">销毁数量</div>
					</div>
				</div>
				<div class="millInfo" v-if="statistics.allMineralNum">
					<div class="infoBox">
						<div class="amount">{{ statistics.awardNum || 0 }}</div>
						<div class="margT6">赠送与分红的数量</div>
					</div>
					<div class="infoBox">
						<div class="amount">{{ statistics.allMineralNum - statistics.beDigNum - statistics.awardNum - statistics.beDestroyNum  || 0}}</div>
						<div class="margT6">最后所剩矿石数量</div>
					</div>
				</div>
				<div class="millInfo">
					<div class="infoBox">
						<div>
							<span class="yellow underline" @click="toBlcokSearchView">区块浏览器·全</span> <i class="iconfont iconfont-question" @click="showTip('blockSearch')"/>
						</div>
					</div>
				</div>
				<div class="millInfo">
					<div class="infoBox">
						<div>
							<!-- @click="toFundPoolRecordView" -->
							<span @click="toFundPoolRecordView" class="yellow underline">少年儿童基金帮扶池</span>
							<span class="yellow"> 现有{{statistics.fundPoolNum}}个</span>帮扶券 <i class="iconfont iconfont-question" @click="showTip('fundPool')"/>
							<!-- <span class="margL10 underline" @click="addFundPoolBtn">我要捐赠</span> -->
						</div>
						<div class="placeholderLine10"></div>
						<div><span class="underline" @click="addFundPoolBtn">我要捐赠</span></div>
					</div>
				</div>
				<div class="cateInfo">
					<div class="infoBox">
						<router-link to="/volunteer">
							<div class="iconBox">
								<div class="iconBackground iconBackgroundRaise">
									<van-icon class-prefix="iconfont" name="love2" />
								</div>
							</div>
							<div class="text">志愿者</div>
						</router-link>
					</div>
					<div class="infoBox" @click="attendanceBtn">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundAttendance">
								<van-icon class-prefix="iconfont" name="free-love" size="35"/>
							</div>
						</div>
						<div class="text">释放爱心</div>
					</div>
					<div class="infoBox" @click="toRanking">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundRank">
								<van-icon class-prefix="iconfont" name="rank" />
							</div>
						</div>
						<div class="text">排行榜</div>
						<!-- <router-link to="/ranking">
						</router-link> -->
					</div>
					<div class="infoBox">
						<router-link to="/voteList">
							<div class="iconBox">
								<div class="iconBackground iconBackground4">
									<van-icon class-prefix="iconfont" name="vote" />
								</div>
							</div>
							<div class="text">投票中心</div>
						</router-link>
					</div>
				</div>
				<div class="cateInfo">
					<div class="infoBox">
						<router-link to="/agency">
							<div class="iconBox">
								<div class="iconBackground iconBackground3">
									<van-icon class-prefix="iconfont" name="crown" />
								</div>
							</div>
							<div class="text">省市代理</div>
						</router-link>
					</div>
					<div class="infoBox">
						<router-link to="/rankingDeal">
							<div class="iconBox">
								<div class="iconBackground iconBackground1">
									<van-icon class-prefix="iconfont" name="merchant" />
								</div>
							</div>
							<div class="text">服务商</div>
						</router-link>
					</div>
					<div class="infoBox" @click="toRanking4Level">
						<div class="iconBox">
							<div class="iconBackground iconBackground2">
								<van-icon class-prefix="iconfont" name="merchant" />
							</div>
						</div>
						<div class="text">工会会长</div>
						<!-- <router-link to="/ranking4Level">
						</router-link> -->
					</div>
					<div class="infoBox">
						<router-link to="/cService">
							<div class="iconBox">
								<div class="iconBackground iconBackgroundCService">
									<van-icon class-prefix="iconfont" name="cservice" />
								</div>
							</div>
							<div class="text">客服</div>
						</router-link>
					</div>
					<!-- <div class="infoBox" @click="waiting">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundRaise">
								<van-icon class-prefix="iconfont" name="love2" />
							</div>
						</div>
						<div class="text">水滴帮扶筹</div>
					</div> -->
				</div>
				<div class="noticeFlag paddingWing margT8">
					<div class="title">历史公告</div>
					<!-- <div class="lookMore">查看更多</div> -->
					<router-link class="lookMore" to="/noticeList">查看更多 </router-link>
				</div>
				<div class="noticeList">
					<div class="item" v-for="item in noticeList" :key="item.id" @click="toNoticeDetail(item)">
						<div class="itemLeft">
							<div class="title">{{item.noticeTitle}}</div>
							<div class="time">{{item.createTime}}</div>
						</div>
						<div class="itemRight">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</div>
			</div>
		</van-pull-refresh>
		<!-- <van-dialog v-model="isShowLastNotice" :title="lastNoticeItem.noticeTitle" v-if="lastNoticeItem.noticeTitle">
			<div class="noticeDetail paddingWing">
				<div class="content margT6" v-html="lastNoticeItem.noticeContent"/>
				<div class="detailTime textCenter margT10">
					{{lastNoticeItem.createTime}}
				</div>
			</div>
		</van-dialog> -->
		<van-action-sheet v-model="isShowLastNotice" :title="lastNoticeItem.noticeTitle" v-if="lastNoticeItem.noticeTitle">
		  <div class="noticeDetail paddingWing">
		  	<div class="content margT6" v-html="lastNoticeItem.noticeContent"/>
		  	<div class="detailTime textCenter margT10">
		  		{{lastNoticeItem.createTime}}
		  	</div>
		  </div>
		</van-action-sheet>
		<transition name="van-fade">
			<keep-alive include="agency">
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import {getImageHost} from '@/assets/js/config'
	// import {convertMoney} from '@/assets/js/utils';
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	// import { image_host } from '@/assets/js/config.js'

	export default {
		name: 'home',
		components: {
			mHeader
		},
		data() {
			return {
				isShowLastNotice:false,
				todayIsAttendance:false,
				isDisableAttendanceBtn:false,
				isLoading:false,
				userId:"",
				userInfo:"",
				getTodayAttendanceValue:0.02,
				getTomorrowContributionValue: 0.02,
				dayNum:0,
				showAttendanceModel:false,
				attendanceTitle:"",
				currentPage:1,
				pageSize:3,
				images: [
					'https://www.assist-china.co.ax/image/banner/banner0055.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0057.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0059.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0060.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0062.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0063.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0064.jpg',
					'https://www.assist-china.co.ax/image/banner/banner001.jpg',
					'https://www.assist-china.co.ax/image/banner/banner002.jpg',
					'https://www.assist-china.co.ax/image/banner/banner0061.jpg'
				],
				mill: {
					zl: "",
					bw: "",
					sy: ""
				},
				noticeList: [],
				noticeList4Swipe:[],
				lastNoticeItem:'',
				statistics: {
					allMineralNum:0,
					beDigNum:0,
					leave: 0
				},
				canCirculateNum:0,
				loading: true,
				qqFlock:'',
				dealPageInfo: '',
				showRaiseModel:false,
				loading4Raise:false,
				form4FundPool:{
					raiseNum:""
				},
				currentImage:0
			}
		},
		mounted() {
			let _this = this;
			
			let userInfo = localStorage.getItem("_USERINFO_");
			/* alert("userInfo:" + userInfo); */
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
				if(_this.userInfo.accountStatus==1){
					//退出登录
					_this.logout();
				}
				_this.refreshAttendanceInfo();
			}else{
				localStorage.removeItem('_USERINFO_');
				//_this.$cookies.remove('token');
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('/login');
				/* return; */
			}
			// //console.log('getImageHost',_this.$api.HOST_IMG)
			/* this.mill = {
				zl: _this.$utils.fmoney(80000000, 0),
				bw: _this.$utils.fmoney(8000000, 0),
				sy: _this.$utils.fmoney(79000000, 0)
			} */
			// alert("statistics:"+_this.$cookies.get("statistics"));
			if (_this.$cookies.get("statistics")) {
				_this.statistics = _this.$cookies.get("statistics");
			}else{
				setTimeout(() => {
				   _this.getHomeMineralStaticInfo();
				}, 500)
			}
			//公告缓存获取
			if(_this.$cookies.get('hasnoticeList')){
				_this.noticeList = JSON.parse(localStorage.getItem("noticeListLocal"));
				if(_this.noticeList){
					_this.lastNoticeItem = _this.noticeList[0];
				}else{
					setTimeout(() => {
					  _this.getNoticeList();
					}, 1000)
				}
			}else{
				setTimeout(() => {
				  _this.getNoticeList();
				}, 1000)
			}
			//轮播图存获取
			/* if(_this.$cookies.isKey('hasNoticeList4Swipe')){
				//console.log('hasNoticeList4Swipe');
				_this.noticeList4Swipe = JSON.parse(localStorage.getItem("noticeList4Swipe"));
				if(_this.noticeList4Swipe){
				}else{
					_this.getNoticeList4Swipe();
				}
			}else{
				_this.getNoticeList4Swipe();
			} */
			/* let qqFlock = _this.$cookies.get('qqFlock');
			if(qqFlock){
				_this.qqFlock = `官方QQ群：${qqFlock}`;
			}else{
				_this.getAssistQQFlock();
			} */
			// _this.getCanCirculateMineralNum();
			/* if(_this.$cookies.get("haveDealPageInfo")){
				_this.dealPageInfo = JSON.parse(localStorage.getItem("dealPageInfo"));
				//console.log("dealPageInfo",_this.dealPageInfo);
			} */
			
		},
		methods: {
			toServicePage(){
				this.$router.push('cService');
			},
			onChange4Swipe(index){
				this.currentImage = index;
			},
			getAssistQQFlock(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistQQFlock, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.qqFlock = `官方QQ群：${res.data.qqFlock}`;
						_this.$cookies.set('qqFlock',res.data.qqFlock,_this.$api.cookiesTime8h);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			toFundPoolRecordView(){
				let _this = this;
				_this.$router.push('fundPoolRecord');
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
			showTip(val){
				//console.log(val);
				let message = '';
				if(val=='fundPool'){
					message = '交易手续费中，有20%~50%的帮扶券进入帮扶基金池。基金池里的基金，主要用来做线下帮扶活动，也可以用来扶持市场领导们设立地面工作室，进行更加专业的推广帮扶链。各个地区的代理都有权限自主发起线下帮扶活动，与设立地面工作室，向平台申请帮扶基金，去帮扶身边更多所需帮助的弱势群体';
				}else if(val=='blockSearch'){
					message = '全体会员的账户中，矿石上的任何变动都会记录在区块浏览器中，该数据接受全体会员浏览与监管';
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
			logout(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.$toast('账户异常且退出登录');
						// localStorage.clear();//若不允许多账号登录，请把这个给去掉
						// //console.log("_this.$cookies.keys()",_this.$cookies.keys());
						// _this.$cookies.remove('_USERINFO_');
						// _this.$cookies.remove('buyAndSellInfo');
						_this.$cookies.remove('userId');
						_this.$cookies.remove('token');
						// //console.log("_this.$cookies.keys()",_this.$cookies.keys());
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.$router.replace('login');
				})
			},
			waiting(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'加油',
				  message: "此功能正在努力建设中"
				}).then(() => {
				  // on confirm
				})
			},
			waiting2(){
				let _this = this;
				/* _this.$toast("此功能正在努力建设中"); */
				Dialog.alert({
				  title: '系统提示',
				  confirmButtonText:'加油',
				  message: "此模块即将开通"
				}).then(() => {
				  // on confirm
				})
			},
			closeBtn(){
				this.showAttendanceModel = false;
			},
			submit4Raise(){
				let _this = this;
				let params = {
				  num: _this.form4FundPool.raiseNum
				}
				if(Number(params.num)<=0){
					_this.$toast('请填写大于0的正整数');
					return;
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(!_this.$reg.positive_integer.test(params.num)){
					_this.$toast(`请填写正整数的帮扶券`);
					return;
				}
				if(Number(_this.userInfo.platformTicket)<Number(params.num)){
					_this.$toast(`您所拥有的帮扶券不够${params.num}个`);
					return;
				}
				_this.loading4Raise = true;
				//console.log("p",params)
				_this.$ajax.ajax(_this.$api.insertFundPoolRecord, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("捐赠成功");
						_this.form4FundPool.raiseNum = "";
						_this.showRaiseModel = false;
						_this.getHomeMineralStaticInfo();
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}
				},function(){
					_this.loading4Raise = false;
				})
			},
			addFundPoolBtn(){
				let _this = this;
				_this.showRaiseModel = true;
			},
			refreshAttendanceInfo(){
				let _this = this;
				if(_this.$utils.isNUll(_this.userInfo.attendanceBook)){
					_this.dayNum = 0;
				}else{
					_this.dayNum = _this.userInfo.attendanceBook.split(',').length;
				}
				_this.attendanceTitle = `已连续签到${_this.dayNum}天`;
				_this.getTomorrowContributionValue = _this.$utils.getNextAttendanceValue(_this.dayNum);
				_this.getTodayAttendanceValue = _this.$utils.getTodayAttendanceValue(_this.dayNum);
				//判断今天是否已经签到
				let nowDate = _this.$utils.getDate(new Date());
				if(nowDate == _this.userInfo.beforeAttendanceDate) {
					_this.todayIsAttendance = true;
					_this.isDisableAttendanceBtn = true;
				}else {
					_this.todayIsAttendance = false;
					_this.isDisableAttendanceBtn = false;
				}
			},
			getAttendanceBgColor(val){
				let _this = this;
				if(val<=_this.dayNum){
					return 'bgcolor2';
				}else{
					return 'bgcolor1';
				}
			},
			getUserInfo() {
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						_this.refreshAttendanceInfo();
						//console.log(_this.userInfo,"userInfo");
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getUserInfoByNewAttendance() {
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						Dialog.alert({
						  title: '系统信息',
						  confirmButtonText:`${_this.userInfo.aword>10?'释放':'好的'}`,
						  message: `爱心值大于10即可按特定比例释放成贡献值。您当前的爱心值为：${Number(_this.userInfo.aword).toFixed(2)}，${_this.userInfo.aword>10?'可释放爱心值!':'暂时无法释放！'}`
						}).then(() => {
							if(_this.userInfo.aword>10){
								_this.sureAttendance();
							}
						})
					}else{
						_this.$toast(res.message);
					}
				})
			},
			toRanking4Level(){
				let _this = this;
				//console.log('_this.$api.tip4Rest',_this.$api.tip4Rest);
				if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('/ranking4Level');
			},
			toRanking(){
				let _this = this;
				//console.log('_this.$api.tip4Rest',_this.$api.tip4Rest);
				if(_this.$utils.getTimeHMS(new Date())>_this.$api.restTimeStart&&_this.$utils.getTimeHMS(new Date())<_this.$api.restTimeEnd){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.tip4Rest
					}).then(() => {
					  // on close
					});
					return;
				}
				_this.$router.push('/ranking');
			},
			attendanceBtn(){
				let _this = this;
				_this.getUserInfoByNewAttendance();
				//this.showAttendanceModel=true;
				//this.getUserInfo();
				//console.log('attendanceBtn');
			},
			sureAttendance(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.assistUserAttendance, 'POST', null, function(res) {
					//_this.isLoading = false;
					//console.log("res.code",res.code);
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("释放成功");
						//_this.getUserInfo();
						_this.$cookies.set("tab_name_book", 'contribution', _this.$api.cookiesTime)
						_this.$router.push('/myBook');
						// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
						// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
					}else{
						//_this.showAttendanceModel=false;
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '提示信息',
						  message: res.message
						}).then(() => {
						  // on confirm
						  
						})
					} 
				})
			},
			sureAttendanceBtn(){
				let _this = this;
				let userInfo = localStorage.getItem("_USERINFO_");
				if(userInfo) {
					let ui = JSON.parse(userInfo);
					//昨天
					let yestoday=new Date().getTime()-24*60*60*1000;
					let yestodayYMD = _this.$utils.getDate(yestoday);
					if(ui.beforeAttendanceDate==''||ui.beforeAttendanceDate==null){
						_this.isLoading = true;
						_this.isDisableAttendanceBtn = true;
						_this.$ajax.ajax(_this.$api.assistUserAttendance, 'POST', null, function(res) {
							_this.isLoading = false;
							if (res.code == _this.$api.CODE_OK) {
								_this.getUserInfo();
								// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
								// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
							}else if(res.code==1003){
								Dialog.alert({
								  title: '提示信息',
								  confirmButtonText:'前去查看',
								  message: res.message
								}).then(() => {
								  // on confirm
								  _this.$cookies.set("tab_name_book", 'contribution', _this.$api.cookiesTime)
								  _this.$router.push('/myBook');
								})
							}else{
								_this.showAttendanceModel=false;
								//_this.$toast(res.message);
								Dialog.alert({
								  title: '提示信息',
								  message: res.message
								}).then(() => {
								  // on confirm
								  
								})
							} 
						})
					}else{
						if(ui.beforeAttendanceDate<yestodayYMD){
							Dialog.alert({
							  title: '提示信息',
							  message: '该账号上次签到时间是' + ui.beforeAttendanceDate + '，已经漏签需重新签到'
							}).then(() => {
							  // on confirm
							  _this.isLoading = true;
							  _this.isDisableAttendanceBtn = true;
							  _this.$ajax.ajax(_this.$api.assistUserAttendance, 'POST', null, function(res) {
							  	_this.isLoading = false;
							  	if (res.code == _this.$api.CODE_OK) {
							  		_this.getUserInfo();
							  		// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
							  		// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
							  	}else if(res.code==1003){
							  		Dialog.alert({
							  		  title: '提示信息',
							  		  confirmButtonText:'前去查看',
							  		  message: res.message
							  		}).then(() => {
							  		  // on confirm
							  		  _this.$cookies.set("tab_name_book", 'contribution', _this.$api.cookiesTime)
							  		  _this.$router.push('/myBook');
							  		})
							  	}else{
							  		_this.$toast(res.message);
							  	}
							  })
							})
						}else{
							Dialog.alert({
							  title: '提示信息',
							  message: '该账号上次签到时间是' + ui.beforeAttendanceDate + '，可续签'
							}).then(() => {
							  // on confirm
							  _this.isLoading = true;
							  _this.isDisableAttendanceBtn = true;
							  _this.$ajax.ajax(_this.$api.assistUserAttendance, 'POST', null, function(res) {
							  	_this.isLoading = false;
							  	if (res.code == _this.$api.CODE_OK) {
							  		_this.getUserInfo();
							  		// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
							  		// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
							  	}else if(res.code==1003){
							  		Dialog.alert({
							  		  title: '提示信息',
							  		  confirmButtonText:'前去查看',
							  		  message: res.message
							  		}).then(() => {
							  		  // on confirm
							  		  //_this.$router.push("mill");
									  _this.$cookies.set("tab_name_book", 'contribution', _this.$api.cookiesTime)
									  _this.$router.push('/myBook');
							  		})
							  	}else{
							  		_this.$toast(res.message);
							  	} 
							  })
							})
						}
					}
				}
			},
			refreshEvent() {
				/* alert("refresh"); */
				let _this = this;
				_this.getHomeMineralStaticInfo();
				// _this.getNoticeList4Swipe();
				setTimeout(() => {
				  _this.getNoticeList();
				}, 1000)
				//轮播图存获取
				/* if(_this.$cookies.isKey('hasNoticeList4Swipe')){
					//console.log('hasNoticeList4Swipe');
					_this.noticeList4Swipe = JSON.parse(localStorage.getItem("noticeList4Swipe"));
					if(_this.noticeList4Swipe){
					}else{
						_this.getNoticeList4Swipe();
					}
				}else{
					_this.getNoticeList4Swipe();
				} */
			},
			toNoticeDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/noticeDetail`,
					query: {
						id: item.id
					}
				});
			},
			getHomeMineralStaticInfo(){
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getHomeMineralStaticInfo, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.statistics = res.data;
						_this.$cookies.set('statistics',_this.statistics,_this.$api.cookiesTime);
						_this.loading = false;
						// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
						// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
					}else{
						//_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			getMineralStatic() {
				let _this = this;
				_this.$ajax.ajax(_this.$api.getMineralStatic, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.statistics = res.data;
						_this.$cookies.set('statistics',_this.statistics,_this.$api.cookiesTime);
						// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
						// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getCanCirculateMineralNum() {
				let _this = this;
				_this.$ajax.ajax(_this.$api.getCanCirculateMineralNum, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.canCirculateNum = res.data;
						// localStorage.setItem("current_plateform_price",res.data.currentPlatefromPrice);
						// _this.statistics.leave = _this.statistics.allMineralNum - _this.statistics.beDigNum
					}else{
						_this.$toast(res.message);
					}
				})
			},
			/* getNoticeList4Swipe() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage,
					pageSize: 6,
					type:1
				}
				_this.$ajax.ajax(_this.$api.getNoticePageList, 'GET', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.noticeList4Swipe = res.data.list;
						localStorage.setItem('noticeList4Swipe',JSON.stringify(_this.noticeList4Swipe));
						_this.$cookies.set('hasNoticeList4Swipe',1,_this.$api.cookiesTime72h);
					}else{
						_this.$toast(res.message);
					}
				})
			}, */
			getNoticeList() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage,
					pageSize: 6,
					type:0
				}
				_this.$ajax.ajax(_this.$api.getNoticePageList, 'GET', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.noticeList = res.data.list;
						_this.lastNoticeItem = _this.noticeList[0];
						//实在显示首页的最新公告弹窗
						_this.isShowLastNotice = true;
						localStorage.removeItem('noticeListLocal');
						localStorage.setItem('noticeListLocal',JSON.stringify(res.data.list));
						_this.$cookies.set('hasnoticeList',1,60*60*2);
						//首页弹窗的缓存
						//_this.$cookies.set('isShowLN',1,60*60);
						//实在显示首页的最新公告弹窗
						_this.isShowLastNotice = true;
					}else{
						//_this.$toast(res.message);
					}
				})
			},
			noticeTap() {
				//console.log('you click me')
			}
		}
	}
</script>
