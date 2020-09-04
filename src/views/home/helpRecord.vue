<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.helpRecord{
	@include page4Home();
	.shopList{
		color: $mainTextColor;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
		.list {
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
					padding: 4px 10px;
					.freeGet{color: $main-adorn-color !important;}
					.title{font-size: $fs-title;font-weight: bold;color: $mainTextColor !important;}
					.line{
						overflow: hidden;clear: both;
						&.content{font-size: $fs-content;line-height: 1.3em;color: $mainTextColor !important;}
					}
					
				}
			}
		}
	}	
}
</style>
<template>
  <div class="helpRecord">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			帮扶历史
		</div>
		<i class="iconfont rightBox icon"></i>
	</m-header>
	<div class="shopList">
		<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
			<div class="list">
				<div class="item" v-for="item in list">
					<div class="textBox">
						<div class="line">
							<div class="left title">{{item.title}}</div>
							<!-- <div class="freeGet right">2020/08/01 12:12:12</div> -->
						</div>
						<!-- <div class="line content margT3 justify">平台小店预热优惠活动：订购此产品需交￥299押金，下单成功且经过商家审核后，奖励299张平台券，每人最多拍1件(备注：激活POS机需要刷卡满￥299，激活成功后再找商家审核，审核确实激活后，您所交的￥299押金可退回)</div> -->
						<div class="line content margT3"><div class="left">{{item.time}}</div><div class="right underline"><a :href="item.url" target="_self">查看详情</a></div></div>
					</div>
				</div>
			</div>
		</van-list>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
// import {getCookie} from '@/assets/js/utils.js'
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			list:[
				
				{
					time:'2020/08/29',
					title:'帮扶慰问2位年迈90岁孤寡老人',
					url:'https://www.meipian.cn/34efrhwd?share_depth=1'
				},
				{
					time:'2020/08/24',
					title:'蔡锷大将军的故乡帮扶记录',
					url:'https://www.meipian6.cn/342pxmz6?first_share_to=&first_share_uid=ohbsluHXOyM_J1cmrC9lqMJbiHeI&s_uid=212887301&share_depth=3&share_source=timeline&sharer_id=ojq1tt7nfMQ2p9LmtSAk3zOHvD_0&user_id=ohbsluHXOyM_J1cmrC9lqMJbiHeI'
				},
				{
					time:'2020/08/04',
					title:'关爱老人，真情传递',
					url:'http://note.youdao.com/noteshare?id=536a5ef451ca7e85cfe06cf538cecac3'
				},
				{
					time:'2020/08/01',
					title:'炎炎夏日给抗战老兵送清凉',
					url:'https://www.meipian.cn/32uquw25?share_from=self&first_share_uid=58778585&first_share_to=singlemessage&isappinstalled=1&share_depth=1&from=singlemessage'
				},
				{
					time:'2020/08/01',
					title:'慰问黄双村特困户纪实',
					url:'http://note.youdao.com/noteshare?id=ca92ed00829746b86a7209ee5d6e06d7'
				},
				{
					time:'2020/07/21',
					title:'敬老院爱心帮扶活动',
					url:'http://note.youdao.com/noteshare?id=eb37717a00ecf9f3ae06cada292fc3d5'
				},
				{
					time:'2020/07/13',
					title:'给金带铺小学捐赠图书',
					url:'http://note.youdao.com/noteshare?id=9b200b98fb195083932acba319ef429e'
				},
				{
					time:'2020/07/11',
					title:'给抗洪卫士送物资',
					url:'http://note.youdao.com/noteshare?id=7fbfeb3b5f7618b20cd59a602a7d17d8'
				},
				{
					time:'2020/07/02',
					title:'帮扶悬崖村的孩子',
					url:'https://www.meipian9.cn/310bbp45?first_share_to=singlemessage&first_share_uid=58778585&from=singlemessage&isappinstalled=1&share_depth=1&share_from=self'
				},
				{
					time:'2020/06/29',
					title:'帮扶与慰问残疾人',
					url:'http://note.youdao.com/noteshare?id=2425a80dbab26af088b2b97c03a3e165'
				},
				{
					time:'2020/06/25',
					title:'端午节给环卫工人送温暖',
					url:'https://www.meipian9.cn/30ple7kt?first_share_to=singlemessage&first_share_uid=58778585&from=singlemessage&isappinstalled=1&share_depth=1&share_from=self'
				},
				{
					time:'2020/06/24',
					title:'共青学院募捐活动',
					url:'https://www.meipian8.cn/30ie68gt?first_share_to=timeline&first_share_uid=212941138&share_depth=3&share_user_mpuuid=1ad9d53c3223db007714de36291d66be&sharer_id=ojq1tt7nfMQ2p9LmtSAk3zOHvD_0&user_id=ohbsluHXOyM_J1cmrC9lqMJbiHeI'
				},
				{
					time:'2020/06/12',
					title:'上谢小学捐赠活动',
					url:'https://www.meipian7.cn/2zunbgn1?first_share_to=singlemessage&first_share_uid=58778585&share_depth=2&share_source=singlemessage&sharer_id=ojq1tt7nfMQ2p9LmtSAk3zOHvD_0&user_id=ohbsluHXOyM_J1cmrC9lqMJbiHeI'
				}
			],			
			userId:'',
			loading1: false,
			finished1: false,
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		_this.userId = localStorage.getItem('userId');
	},
	methods:{
		onLoad1() {
			console.log('load1')
			let _this = this;
			// 异步更新数据
			setTimeout(() => {
				// 加载状态结束
				_this.loading1 = false;
				_this.finished1 = true;
			}, 500);
			// let params = {
			// 	pageNo: _this.currentPage,
			// 	pageSize: _this.pageSize,
			// 	userId: localStorage.getItem('userId')
			// }
			// _this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
			// 	console.log('res', res);
			// 	if (res.code == _this.$api.CODE_OK) {
			// 		_this.list1 = res.data.list;
			// 		_this.loading1 = false;
			// 		_this.finished1 = true;
			// 	}
			// })
		},
		getUserInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo + _this.userId, 'GET', null, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.userInfo = res.data;
					_this.isShare3 = _this.userInfo.num==null?false:_this.userInfo.num>=3?true:false;
					console.log('_this.isShare3',_this.isShare3)
					if(_this.userInfo.realName){
						_this.isRealName = true;
					}else{
						_this.isRealName = false;
					}
				}
				if(res.code == _this.$api.CODE_4003){
					// _this.info = res.data.list;
					// _this.showRealNameModel = true;
					_this.isRealName = false;
				}
			})
		},
		initializeHintInfo(){
			let _this = this;
			
		},
		back(){
			this.$router.go(-1);
		},
	}
}
</script>
