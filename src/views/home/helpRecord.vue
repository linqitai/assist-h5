<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.helpRecord{
	@include page4Home();
	.content{
		color: $mainTextColor;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
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
	<div class="content">
		<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
			<div class="helpList">
				<div class="item" v-for="item in helpList">
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
			helpList:[],			
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
		_this.helpList = _this.$config.helpList;
		//console.log(_this.list,"_this.list");
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
