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
	.list4Guide {
		width: 100%;
		padding: 6px 6px;
		box-sizing: border-box;
		.item {
			width: 100%;
			border: 1px solid $bottomLineColor;
			letter-spacing: 1px;
			background-color: $main-box-color;
			margin-bottom: 4px;
			border-radius: 4px;
			overflow: hidden;
			&::last-child{
				margin-bottom: 0px;
			}
			.imgBox{
				width: 100%;
				img{
					width: 100%;
				}
			}
			.textBox{
				padding: 8px 10px;
				.freeGet{color: $main-adorn-color !important;}
				.title{font-size: $fs-title;font-weight: bold;color: $mainTextColor !important;line-height: 1.4em;}
				.line{
					overflow: hidden;clear: both;
					&.content{font-size: $fs-content;line-height: 1.4em;color: $mainTextColor !important;}
				}
				
			}
		}
	}
	.HomeContent{
		position: relative;
		/* @media screen and (min-width: 1201px) {
			.swipe{
				height: auto !important;
			}
			.van-swipe {
				height: auto !important;
			}
			.van-swipe-item{
				height: auto !important;
			}
		} */
		.swipe {
			.img{
				width: 100%;
			}
			.van-swipe{
				height: min-content;
				.van-swipe-item {
					height: min-content;
					img {
						width: 100%;
					}
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
				position: relative;
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
					
					.iconBackgroundHR {
						background-color: #c80000;
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
				.bubble{
					position: absolute;
					left: -120px;
					top: 0px;
					border: 1px solid $main-box-fh-text-color;
					background-color: rgba(0,0,0,0.8);
					width:120px;
					height: 60px;
					border-radius: 8px;
					padding: 4px;
					text-align: left;
					line-height: 1.2em;
				}
				.triangleRight {
					position: absolute;
					left: 10px;
					top: 20px;
				    width: 0;
				    height: 0;
				    border-top: 6px solid transparent;
				    border-left: 10px solid $main-box-fh-text-color;
				    border-bottom: 6px solid transparent;
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
				<div class="tomorrowContribution">每次签到至少加0.003个可售额度(个人算力越高，签到所加额度越多)，同时也会领取一周年之后所上矿机每日所得的可售额度、领取算力矿机的收益和释放爱心值</div>
				<div class="tomorrowContribution">连续签到30天可额外获得0.2G个人算力奖励</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(1)">1</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(2)">2</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(3)">3</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(4)">4</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(5)">5</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(6)">6</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(7)">7</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(8)">8</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(9)">9</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(10)">10</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(11)">11</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(12)">12</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(13)">13</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(14)">14</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(15)">15</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(16)">16</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(17)">17</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(18)">18</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(19)">19</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(20)">20</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(21)">21</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(22)">22</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(23)">23</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(24)">24</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="flexBox">
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(25)">25</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(26)">26</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(27)">27</div>
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(28)">28</div>
						<!-- <div class="day">28天</div> -->
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(29)">29</div>
						<!-- <div class="day">29天</div> -->
					</div>
					<div class="flex">
						<div class="circle" :class="getAttendanceBgColor(30)">30</div>
						<!-- <div class="day">30天</div> -->
					</div>
				</div>
				<div class="placeholderLine"></div>
				<div class="tomorrowContribution">系统提示：日常签到建议在白天完成，若因特殊因素而导致错过签到的，原则上不补签</div>
				<div class="placeholderLine20"></div>
				<div v-if="!todayIsAttendance">
					<van-button type="info" size="normal" @click="sureAttendanceBtn" :loading="isLoading" :disabled="isDisableAttendanceBtn"  loading-type="spinner" loading-text="加载中..." color="linear-gradient(to right, #ffae00, #ff8400)" :block="true"><span class="letterSpacing">签到</span></van-button>
					<div class="placeholderLine20"></div>
				</div>
				<div v-if="todayIsAttendance">
					<!-- <div class="textCenter red f-13">今日签到已领取{{getTodayAttendanceValue}}帮扶券</div>
					<div class="tomorrowContribution" v-if="dayNum<30">明日签到可领取{{getTomorrowContributionValue}}帮扶券</div> -->
					<div class="tomorrowContribution" v-if="dayNum==30">恭喜您：签到满30天，已成功额外获得0.2G个人算力奖励，明日将重置签到</div>
					<div class="placeholderLine20"></div>
				</div>
			</div>
		</van-popup>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent" v-if="$route.meta.footer">
			<div class="HomeContent">
				<van-notice-bar
				  mode = "closeable"
				  left-icon="volume-o"
				  text="有效直推:完成基础任务2后即可成为有效直推(有效会员)"
				/>
				<img class="img" :src="imageUrl" style="width: 100%;" @click="toView(0)"/>
				<!-- <van-image :src="imageUrl" @click="toView(index)"/> -->
				<!-- <div class="swipe">
					<van-swipe :autoplay="3000">
					  <van-swipe-item v-for="(image, index) in images" :key="index">
						<van-image min-width="200" :src="image" @click="toView(index)">
						  <template v-slot:loading>
						    <van-loading type="spinner" size="20" />
						  </template>
						</van-image>
					  </van-swipe-item>
					</van-swipe>
				</div> -->
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
						<div class="amount">{{ statistics.allMineralNum - statistics.beDigNum - statistics.awardNum - statistics.beDestroyNum  || 0}}</div>
						<div class="margT6">所剩数量</div>
					</div>
					<!-- <div class="infoBox">
						<div class="amount">{{statistics.beDestroyNum || 0}}</div>
						<div class="margT6">销毁数量</div>
					</div> -->
					<!-- <div class="infoBox">
						<div class="amount">{{ statistics.canCirculateNum  || 0}}</div>
						<div class="margT6">可流通数量</div>
					</div> -->
					<!-- <div class="infoBox">
						<div class="amount">{{statistics.beDestroyNum || 0}}</div>
						<div class="margT6">销毁数量</div>
					</div> -->
					<!-- <div class="infoBox">
						<div class="amount">{{statistics.totalCp || 0}}</div>
						<div class="margT6">全网算力</div>
					</div> -->
				</div>
				<!-- <div class="millInfo" v-if="statistics.allMineralNum">
					<div class="infoBox">
						<div class="amount">{{ statistics.awardNum || 0 }}</div>
						<div class="margT6">赠送与分红的数量</div>
					</div>
					<div class="infoBox">
						<div class="amount">{{ statistics.allMineralNum - statistics.beDigNum - statistics.awardNum - statistics.beDestroyNum  || 0}}</div>
						<div class="margT6">最后所剩矿石数量</div>
					</div>
				</div> -->
				<div class="cateInfo">
					<div class="infoBox">
						<router-link to="/volunteer">
							<div class="iconBox">
								<div class="iconBackground iconBackgroundAttendance">
									<van-icon class-prefix="iconfont" name="love2" />
								</div>
							</div>
							<div class="text">志愿者</div>
						</router-link>
					</div>
					<div class="infoBox" @click="toRanking">
						<div class="iconBox">
							<div class="iconBackground iconBackground2">
								<van-icon class-prefix="iconfont" name="rank" />
							</div>
						</div>
						<div class="text">排行榜</div>
					</div>
					<div class="infoBox">
						<router-link to="/newGuide">
							<div class="iconBox">
								<div class="iconBackground iconBackgroundRank">
									<van-icon class-prefix="iconfont" name="new-guide" />
								</div>
							</div>
							<div class="text">新手指南</div>
						</router-link>
					</div>
				</div>
				
				<div class="cateInfo">
					<div class="infoBox">
						<router-link to="/noticeList">
							<div class="iconBox">
								<div class="iconBackground iconBackground4">
									<van-icon class-prefix="iconfont" name="notice-record" />
								</div>
							</div>
							<div class="text">历史公告</div>
						</router-link>
					</div>
					
					<div class="infoBox">
						<router-link to="/voteList">
							<div class="iconBox">
								<div class="iconBackground iconBackgroundCService">
									<van-icon class-prefix="iconfont" name="vote" />
								</div>
							</div>
							<div class="text">共识投票</div>
						</router-link>
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
				</div>
				<div class="cateInfo">
					<div class="infoBox" @click="toBlcokSearchView">
						<div class="iconBox">
							<div class="iconBackground iconBackground3">
								<van-icon class-prefix="iconfont" name="share3" />
							</div>
						</div>
						<div class="text">区块浏览器</div>
					</div>
					<div class="infoBox">
						<router-link to="/shop">
							<div class="iconBox">
								<div class="iconBackground iconBackground4">
									<van-icon class-prefix="iconfont" name="shop" />
								</div>
							</div>
							<div class="text">商城</div>
						</router-link>
					</div>
					<div class="infoBox" @click="attendanceBtn">
						<div class="iconBox">
							<div class="iconBackground iconBackgroundAttendance">
								<van-icon class-prefix="iconfont" name="attendance" size="35"/>
							</div>
						</div>
						<div class="text">日常签到</div>
					</div>
				</div>
				<div class="placeholderLine10"></div>
				<div class="list4Guide">
					<div class="item" v-for="item in list">
						<div class="textBox">
							<div class="line">
								<div class="left title">{{item.title}}</div>
							</div>
							<div class="line content margT3"><div class="left">{{item.time}}</div><div class="right underline"><a :href="item.url" target="_blank">查看详情</a></div></div>
						</div>
					</div>
				</div>
			</div>
		</van-pull-refresh>
		<van-action-sheet v-model="isShowLastNotice" :title="lastNoticeItem.noticeTitle" v-if="lastNoticeItem.noticeTitle">
		  <div class="noticeDetail paddingWing">
		  	<div class="content margT6" v-html="lastNoticeItem.noticeContent"/>
		  	<div class="detailTime textCenter margT10">
		  		{{lastNoticeItem.createTime}}
		  	</div>
		  </div>
		</van-action-sheet>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,Toast } from 'vant';
	import { myMixin } from '@/assets/js/myMixin.js';

	export default {
		name: 'home',
		mixins:[myMixin],
		components: {
			mHeader
		},
		data() {
			return {
				isShow4Game:false,
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
				imageUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fddfc161-88de-402d-932e-0f5533bbf87d/f7eac5b8-427f-4504-bed1-eb119d5a0fff.jpg',
				images: [
					'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fddfc161-88de-402d-932e-0f5533bbf87d/f7eac5b8-427f-4504-bed1-eb119d5a0fff.jpg',
					'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fddfc161-88de-402d-932e-0f5533bbf87d/616636c7-84c3-4fbb-a048-1c46a13f5be7.jpg',
					/* this.$api.domainName + '/image/banner/003.jpg',
					this.$api.domainName + '/image/banner/1009.jpg', */
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
				currentImage:0,
				list:[],
				serverList:[],
				isbubble1:false
			}
		},
		created() {
			let _this = this;
			_this.list = _this.$config.helpList;
			if (_this.$cookies.get("statistics")) {
				_this.statistics = _this.$cookies.get("statistics");
			}else{
				_this.getHomeMineralStaticInfo();
			}
			if(localStorage.getItem("lastNoticeItem")){
				_this.lastNoticeItem = JSON.parse(localStorage.getItem("lastNoticeItem"));
				_this.isShowLastNotice = true;
			}else{
				_this.getNoticeList();
			}
		},
		methods: {
			toView(index){
				let _this = this;
				if(index==0||index==1){
					let url = `http://note.youdao.com/noteshare?id=d6d62a3949abe5100a401f5fdb2a5cf4`;
					window.open(url);
				}
			},
			toBlcokSearchView(){
				let _this = this;
				_this.$router.push('blockSearch');
			},
			closeBtn(){
				this.showAttendanceModel = false;
			},
			refreshAttendanceInfo(){
				let _this = this;
				if(_this.$utils.isNUll(_this.userInfo.attendanceBook)){
					_this.dayNum = 0;
				}else{
					_this.dayNum = _this.userInfo.attendanceBook.split(',').length;
				}
				_this.attendanceTitle = `已连续签到${_this.dayNum}天`;
				// _this.getTomorrowContributionValue = _this.$utils.getNextAttendanceValue(_this.dayNum);
				// _this.getTodayAttendanceValue = _this.$utils.getTodayAttendanceValue(_this.dayNum);
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
				_this.userInfo = JSON.parse(localStorage.getItem("_USERINFO_"));
				_this.showAttendanceModel=true;
				_this.refreshAttendanceInfo();
			},
			sureAttendance(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.assistUserAttendance, 'POST', null, function(res) {
					//_this.isLoading = false;
					//console.log("res.code",res.code);
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("签到成功");
						_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
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
								_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
								_this.$router.push('/myBook');
							}else if(res.code==1003||res.code==1000005||res.code==10000002){
								_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
								_this.$router.push('/myBook');
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
									_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
									_this.$router.push('/myBook');
							  	}else if(res.code==1003||res.code==1000005||res.code==10000002){
							  		_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
							  		_this.$router.push('/myBook');
							  	}else{
							  		_this.showAttendanceModel=false;
							  		Dialog.alert({
							  		  title: '提示信息',
							  		  message: res.message
							  		}).then(() => {
							  		  // on confirm
							  		})
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
							  		_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
							  		_this.$router.push('/myBook');
							  	}else if(res.code==1003||res.code==1000005||res.code==10000002){
							  		_this.$cookies.set("tab_name_book", 'circulateValue', _this.$api.cookiesTime)
							  		_this.$router.push('/myBook');
							  	}else{
							  		_this.showAttendanceModel=false;
							  		Dialog.alert({
							  		  title: '提示信息',
							  		  message: res.message
							  		}).then(() => {
							  		  // on confirm
							  		})
							  	} 
							  })
							})
						}
					}
				}
			},
			refreshEvent() {
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getHomeMineralStaticInfo, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.statistics = res.data;
						_this.$cookies.set('statistics',_this.statistics,_this.$api.cookiesTime);
						_this.loading = false;
						if(_this.statistics.isShowNotice){
							_this.getNoticeList();
						}
					}else{
						//_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
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
						_this.$cookies.set('statistics',_this.statistics,_this.$api.cookiesTime8h);
						_this.loading = false;
					}else{
						//_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			getNoticeList() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage,
					pageSize: 1,
					type:0
				}
				_this.$ajax.ajax(_this.$api.getNoticePageList, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.noticeList = res.data.list;
						_this.lastNoticeItem = _this.noticeList[0];
						localStorage.setItem("lastNoticeItem", JSON.stringify(_this.lastNoticeItem));
						//实在显示首页的最新公告弹窗
						_this.isShowLastNotice = true;
					}else{
						//_this.$toast(res.message);
					}
				})
			}
		}
	}
</script>
