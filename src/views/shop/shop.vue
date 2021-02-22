<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.shop{
	background-color: $main-bg-color;
	min-height: 100% !important;
	.shopList{
		color: $mainTextColor;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
		margin-top: $headerHeight;
		.list {
			width: 100%;
			padding: 1% 1%;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content:space-between;
			.item {
				margin-top: 3px;
				flex: 0 0 100%;
				border-bottom: 1px solid $bottomLineColor;
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
  <div class="shop">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			帮扶商城
		</div>
		<i class="iconfont rightBox icon"></i>
	</m-header>
	<div class="shopList">
		<van-pull-refresh v-model="loading1" @refresh="refreshEvent">
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
						 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab title="热门" name="active1">
					<van-list finished-text="暂无商品">
						<div class="list">
							<div class="item" v-for="item in list1" :key='item.id'>
								<router-link :to="`shopDetail/${item.id}`">
									<van-card
									  :price="((Number(item.platPrice))/avgPrice).toFixed(2)"
									  :origin-price="((Number(item.platPrice)+10)/avgPrice).toFixed(2)"
									  :desc="item.detail"
									  :title="item.name"
									  :thumb="item.headPic"
									  currency="矿石"
									  lazy-load
									/>
								</router-link>
							</div>
							<!-- <div class="item" v-for="item in list1" :key='item.id'>
								<router-link :to="`shopDetail/${item.id}`">
								<div class="imgBox">
									<img :src="item.headPic">
								</div>
								<div class="textBox">
									<div class="line">
										<div class="left title">{{item.name}}</div>
										<div class="freeGet right margT3">{{(item.platPrice/avgPrice).toFixed(2)}} <i class="f-12">矿石</i></div>
									</div>
									<div class="line content margT3 justify">{{item.detail}}</div>
									<div class="line content">
										<div class="left">已售 100</div>
										<div class="right">库存 1000</div>
									</div>
								</div>
								</router-link>
							</div> -->
						</div>
						<van-empty v-if="list1==''||list1==[]" description="暂无商品" />
						<van-button @click="loadingMore1Btn" v-if="list1.length>0"
						color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal"
						:block="true" :loading="loading1" loading-type="spinner">加载更多</van-button>
					</van-list>
				</van-tab>
			</van-tabs>
		</van-pull-refresh>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
// import {getCookie} from '@/assets/js/utils.js'
import mHeader from '@/components/Header.vue';
import { Toast } from 'vant';
export default {
	name:'shop',
	data() {
		return {
			activeName:'active1',
			currentPage1: 1,
			pageSize: 4,
			list1: [],
			loading1: false,
			finished1: false,
			nextPage1: 1,
			avgPrice: ''
		}
	},  
	components:{
	    mHeader
	},
	created(){
		let _this = this;
		// if(this.$storage.getCookie('avgPrice')){
		// 	_this.avgPrice = this.$storage.getCookie('avgPrice');
		// }else{
		// 	_this.getAvgPrice();
		// }
		_this.getAvgPrice();
	},
	methods:{
		getAvgPrice(){
			let _this = this;
			Toast.loading({
			  message: '加载中...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			/* _this.$store.dispatch("selectAvgMineralPrice",null).then(res => {
				console.log("res",res);
			}) */
			_this.$ajax.ajax(_this.$api.selectAvgMineralPrice, 'GET', null, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.avgPrice = res.data;
					//_this.$storage.setCookie('avgPrice',_this.avgPrice)
					// console.log('_this.avgPrice',_this.$storage.getCookie('avgPrice'));
					_this.onLoad1();
				}else{
					_this.$toast(res.message);
				}
			}, function(res){
				Toast.clear();
			})
		},
		refreshEvent() {
			// console.log("refresh1")
			let _this = this;
			if(_this.activeName == 'active1'){
				_this.currentPage1 = 1;
				_this.list1 = [];
				_this.finished1 = false;
				_this.getAvgPrice();
			}
		},
		loadingMore1Btn(){
			let _this = this;
			_this.onLoad1();
		},
		onLoad1() {
			let _this = this;
			let params = {
				pageNo: _this.currentPage1,
				pageSize: _this.pageSize,
				status:1
			}
			_this.loading1 = true;
			_this.$ajax.ajax(_this.$api.getAssistProductPageList, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.loading1 = false;
					let list = res.data.list;
					if(list==null||list.length==0){
						_this.finished1 = true;
						_this.$toast("已经到底了");
						return;
					}
					_this.list1.push(...list);
					_this.currentPage1 = _this.currentPage1 + 1;
					_this.nextPage1 = res.data.nextPage;
					_this.loading1 = false;
					// let len = list.length-1;
					// _this.currentPage1 = _this.currentPage1 + 1;
					// if(res.data.endRow == res.data.total){
					// 	_this.finished1 = true;
					// }else{
					// 	_this.currentPage1 = _this.currentPage1 + 1;
					// }
				}else{
					_this.loading1 = false;
					_this.finished1 = true;
					_this.$toast(res.message);
				}
			}, function(res){
				_this.loading1 = false;
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
