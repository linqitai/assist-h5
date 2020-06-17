<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	/* .van-list__finished-text{
		background-color: $main-bg-color;
	} */
	.dealListPage{
		// @include pageWhiteBGHaveHeight();
		@include pageNoHeight4Scroll();
		.van-search{
			background-color: $main-bg-color !important;
			.van-search__action{
				color: $mainTextColor !important;
			}
		}
		.checkList{
			/* background-color: $main-box-color; */
			// margin-top:$header-height;
			.van-list__finished-text{
				background-color: #FFFFFF !important;
			}
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid #c7c7c7;
				align-content: center;
				align-items: center;
				justify-content: center;
				color: $mainTextColor;
				// &:last-child{
				// 	border-bottom: 1px solid transparent;
				// }
				.itemLeft{
					flex: 1;
					.title{
						width: 100%;
						font-size: 14px;
						height:$itemInnerLine1Height;
						line-height:$itemInnerLine1Height;
					}
					.time{
						font-size: 0.875rem;
						// margin-top: 0.5rem;
						height:$itemInnerLine1Height;
						line-height:$itemInnerLine1Height;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 30px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					text-align: right;
					.statusText{
						// height: $itemLRHeight;
						// line-height: $itemLRHeight;
						font-size: 0.75rem;
						display: inline-block;
					}
					.iconfont-right-arrow2{
						display: inline-block;
						font-size: 0.75rem;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="dealListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				会员交易列表
			</div>
			<i class="iconfont iconfont-question rightBox icon"></i>
		</m-header>
		<van-search
		  v-model="searchValue"
		  placeholder="请填写订单编号"
		  show-action
		  shape="round"
		  @search="searchEvent"
		>
		  <div slot="action" @click="searchEvent">搜索</div>
		</van-search>
		<div class="paddingWing">
			<van-radio-group v-model="status" icon-size='16px' direction="horizontal" @change="statusChange">
				<van-radio name="">全部</van-radio>
			  <van-radio name="5">待客服调查</van-radio>
			  <van-radio name="2">待确认</van-radio>
			</van-radio-group>
		</div>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="getcheckList">
				<div class="checkList">
					<div class="item" v-for="item in list1" :key="item.id" @click="toCheckDetail(item)">
						<div class="itemLeft">
							<div class="time">订单编号 {{item.id}}</div>
							<div class="title">{{item.price}}CNY {{item.num}}个 <span class="statusText" :class="getColor(item.status)">{{item.status | dealStatusType}}</span></div>
							<div class="time">匹配时间 {{item.machingTime}}</div>
							<div class="time" v-if="item.letSureTime">确认截止时间 {{item.letSureTime}}</div>
						</div>
						<div class="itemRight">
							<i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</div>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh.vue';
	// import { image_host } from '@/assets/js/config.js'
	
	export default {
		components: {
			mHeader,mRefresh
		},
		data() {
			return {
				showTipModel:false,
				searchValue:"",
				status:'',
				list1: [],
				loading:false,
				loading1:false,
				finished1:false,
				currentPage1:1,
				pageSize:16,
				checkCount:0,
			}
		},
		filters: {
			filterActived(val) {
				var result = '';
				if (val == 0) {
					result = '待审核';
				} else if (val == 1) {
					result = '已通过';
				}
				return result;
			}
		},
		created() {
			let _this = this;
			_this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.status=_this.$cookies.get("status")||'';
			//_this.getCount4Check();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			refreshEvent() {
				console.log("refresh")
				let _this = this;
				_this.currentPage1 = 1;
				_this.getcheckList();
			},
			getColor(status) {
				if(status==5){
					return "red";
				}else if(status==2){
					return "yellow";
				}else if(status==8){
					return "green_text";
				}
				//return status == 5 ? "red" : status == 2 ? "green_text" : status == 1 ? "blue" : "";
			},
			toCheckDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/dealDetail`,
					query: {
						id: item.id
					}
				});
			},
			searchEvent(){
				let _this = this;
				_this.currentPage1 = 1;
				_this.getcheckList4Search();
			},
			statusChange(value){
				let _this = this;
				_this.status = value;
				_this.$cookies.set("status",_this.status);
				_this.currentPage1 = 1;
				_this.getcheckList4Search();
			},
			getCount4Check(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoCount4Check, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.checkCount = res.data;
					}
				})
			},
			getcheckList4Search() {
				let _this = this;
				let params = {
					pageNo:_this.currentPage1,
					pageSize:_this.pageSize,
					id: _this.searchValue,
					status: _this.status||_this.$cookies.get("status")
				}
				/* if((!_this.$utils.isNUll(params.mobilePhone))&&_this.$reg.phone.test(params.mobilePhone)){
					
				}else{
					_this.$toast("请输入正确的手机号格式");
					_this.loading = false;
					return;
				} */
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistTransactionListByPage, 'GET', params, function(res) {
					/* console.log('res', res); */
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list1 = list;
						_this.loading1 = false;
						_this.finished1 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						} */
					}else{
						_this.list1 = [];
						_this.loading1 = false;
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				})
			},
			getcheckList() {
				let _this = this;
				let params = {
					pageNo:_this.currentPage1,
					pageSize:_this.pageSize,
					id: _this.searchValue,
					status: _this.status||_this.$cookies.get("status")
				}
				/* if((!_this.$utils.isNUll(params.mobilePhone))&&_this.$reg.phone.test(params.mobilePhone)){
					
				}else{
					_this.$toast("请输入正确的手机号格式");
					_this.loading = false;
					return;
				} */
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistTransactionListByPage, 'GET', params, function(res) {
					/* console.log('res', res); */
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list1.push(...list);
						_this.loading1 = false;
						//_this.finished1 = true;
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						}
					}else{
						_this.list1 = [];
						_this.loading1 = false;
						_this.finished1 = true;
					}
				})
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>