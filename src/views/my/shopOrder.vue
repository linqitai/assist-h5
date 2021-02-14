<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.shopOrderPage{
		position: absolute;
		top: $header-height;
		width: 100%;
		bottom: 0;
		background-color: $main-bg-color;
		.millContent{
			color: $mainTextColor;
			width: 100%;
			.getMineral{
				margin-top: $marginTop2;
			}
			.list{
				background-color: $main-box-color;
				margin-top: $marginTop2;
				overflow: hidden;
				height: 100%;
				.item{
					display: flex;
					padding: $boxPadding2;
					border-bottom:1px solid $main-bg-color;
					&::last-child{
						border-bottom:1px solid transparent;
					}
					.title{
						font-size: $fs-title;
						font-weight: bold;
					}
					.content{
						font-size: $fs-content;
					}
					.decorete{
						font-size: $fs-decorate;
					}
					.freeGet{
						color: $main-adorn-color;
						font-weight: bold;
					}
					.flex1{
						flex: 0 0 60px;
						display:flex;
						align-items: center;
					}
					.flex2{
						padding-left: 0.75rem;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.line1,.line2,.line3,.line4,.line5{
							flex: 1;
						}
						.line2,.line3.line4{
							height: 16px;
							line-height: 16px;
						}
					}
					.flex3{
						flex: 0 0 80px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.line1,.line2,.line3,.line4,.line5{
							flex: 1;
							text-align: right;
						}
						.line1{
							font-size:$fs-title;
						}
						.line2{
							font-size: 11px !important;
						}
					}
				}
			}
		}
	}
</style>
<template>
  <div class="shopOrderPage">
	  <m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			购物订单
		</div>
		<i class="iconfont rightBox icon"></i>
	  </m-header>
	  <div class="millContent">
		  <van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
		    <van-tab title="待发货" name="active1">
				<van-list
				  v-model="loading1"
				  :finished="finished1"
				  finished-text="没有更多了"
				  @load="onLoad1"
				>
					<div class="list">
						<div class="item" v-for="item in list1" :key="item.id">
							<div class="flex flex1">
								<img width="60" height="60" :src="item.headPic"/>
							</div>
							<div class="flex flex2">
								<div class="line1"><div class="title">{{item.name}} {{item.platPrice}}<i class="f-10">￥</i> ×{{item.num}}</div></div>
								<div class="line2 content margT3">{{item.detail}}</div>
								<!-- <div class="line3 content">每人最多拍1件</div> -->
								<div class="line4 decorete">{{item.createTime}}</div>
							</div>
							<div class="flex flex3">
								<div class="line1">总价</div>
								<div class="line1"><i class="freeGet">{{item.totalPrice}}￥</i></div>
								<div class="line2">
									<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="toDetail(item.productId)">商品详情</van-button>
								</div>
							</div>
						</div>
					</div>
				</van-list>
		  	</van-tab>
		    <van-tab title="待收货" name="active2">
				<van-list
				  v-model="loading2"
				  :finished="finished2"
				  finished-text="没有更多了"
				  @load="onLoad2"
				  offset="100"
				>
		  			<div class="list">
		  				<div class="item" v-for="item in list2" :key="item.id">
		  					<div class="flex flex1">
		  						<img width="60" height="60" :src="item.headPic"/>
		  					</div>
		  					<div class="flex flex2">
		  						<div class="line1"><div class="title">{{item.name}} {{item.platPrice}}<i class="f-10">￥</i> ×{{item.num}}</div></div>
		  						<div class="line2 content margT3">{{item.detail}}</div>
		  						<!-- <div class="line3 content">每人最多拍1件</div> -->
		  						<div class="line4 decorete">{{item.createTime}}</div>
		  					</div>
		  					<div class="flex flex3">
		  						<div class="line1">总价</div>
		  						<div class="line1"><i class="freeGet">{{item.totalPrice}}￥</i></div>
		  						<div class="line2">
		  							<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="sureGetGoods(item.id)">确认收货</van-button>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
				</van-list>
		  	</van-tab>
		    <van-tab title="已完成" name="active3">
				<van-list
				  :offset="100"
				  v-model="loading3"
				  :finished="finished3"
				  finished-text="没有更多了"
				  @load="onLoad3"
				>
					<div class="list">
						<div class="item" v-for="item in list3" :key="item.id">
							<div class="flex flex1">
								<img width="60" height="60" :src="item.headPic"/>
							</div>
							<div class="flex flex2">
								<div class="line1"><div class="title">{{item.name}} {{item.platPrice}}<i class="f-10">￥</i> ×{{item.num}}</div></div>
								<div class="line2 content margT3">{{item.detail}}</div>
								<!-- <div class="line3 content">每人最多拍1件</div> -->
								<div class="line4 decorete">{{item.createTime}}</div>
							</div>
							<div class="flex flex3">
								<div class="line1">总价</div>
								<div class="line1"><i class="freeGet">{{item.totalPrice}}￥</i></div>
								<div class="line2">
									<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="toDetail(item.productId)">商品详情</van-button>
								</div>
							</div>
						</div>
					</div>
				</van-list>
		  	</van-tab>
		  </van-tabs>
	  </div>
	  <!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
	  <van-button type="primary" @click="testUrl()">获取信息</van-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ajaxs from '@/api/ajax';
import mHeader from '@/components/Header.vue';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			activeName:"active1",
			loading1: false,
			finished1: false,
			currentPage1: 1,
			list1:[],
			loading2: false,
			finished2: false,
			currentPage2:1,
			list2:[],
			loading3: false,
			finished3: false,
			currentPage3: 1,
			list3:[],
			miningMachine: [{
				miningMachineType:'小型矿机',
				price:100,
				totalOutput:12,
				allRuntime:720,
				turnOnTime:'2019-12-12 12:12:12',
				afterReceipt:'2019-12-13 12:12:12',
			}]
		}
	},
	components:{
	    mHeader
	},
	mounted() {
		let _this = this;
		_this.userId = _this.$cookies.get('userId');
		if(_this.$utils.isNUll(_this.userId)){
			_this.$toast("超过24小时没打开页面啦，需重新登录");
			_this.$router.replace('login');
		}
		_this.initializeTabActiveName();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		toDetail(id){
			this.$router.push({
			  path: `/shopDetail/${id}`,
			});
		},
		sureGetGoods(id){
			let _this = this;
			Dialog.confirm({
			  title: '提示信息',
			  confirmButtonText:'确定',
			  message: '是否确定已经收到货物并检验货物的品质符合预期？'
			}).then(() => {
			  // on confirm
			  //这里调用确认付款接口
			  let params = {
			  	id:id
			  }
			  _this.$ajax.ajax(_this.$api.updateOrderStatusById, 'POST', params, function(res) {
			  	if (res.code == _this.$api.CODE_OK) {
			  		_this.$toast('确认成功');
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					//_this.$router.replace('/my');
					_this.onLoad2();
			  	}
			  })
			});
		},
		onLoad1() {
			let _this = this;
			_this.loading1 = true;
			let params = {
				pageNo: _this.currentPage1,
				pageSize: 8,
				status: 0
			}
			_this.$ajax.ajax(_this.$api.getAssistOrderPageList, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.list1 = res.data.list;
					if(res.data.endRow == res.data.total){
						_this.finished1 = true;
					}else{
						_this.currentPage1 = _this.currentPage1 + 1;
					}
				}
			},function(){
				_this.loading1 = false;
			})
		},
		onLoad2() {
			let _this = this;
			_this.loading2 = true;
			let params = {
				pageNo: _this.currentPage2,
				pageSize: 8,
				status: 1
			}
			_this.$ajax.ajax(_this.$api.getAssistOrderPageList, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.list2 = res.data.list;
					if(res.data.endRow == res.data.total){
						_this.finished2 = true;
					}else{
						_this.currentPage2 = _this.currentPage2 + 1;
					}
				}
			},function(){
				_this.loading2 = false;
			})
		},
		onLoad3() {
			let _this = this;
			_this.loading3 = true;
			let params = {
				pageNo: _this.currentPage3,
				pageSize: 8,
				status: 2
			}
			_this.$ajax.ajax(_this.$api.getAssistOrderPageList, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.list3 = res.data.list;
					if(res.data.endRow == res.data.total){
						_this.finished3 = true;
					}else{
						_this.currentPage3 = _this.currentPage3 + 1;
					}
				}
			},function(){
				_this.loading3 = false;
			})
		},
		initializeTabActiveName(){
			let _this = this;
			if(_this.$cookies.isKey("mill_tab_name")){
				_this.activeName = _this.$cookies.get("mill_tab_name");
			}
		},
		tabChange(name,title){
			console.log(name,title);
			this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
		},
	}
}
</script>
