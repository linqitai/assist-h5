<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.raiseRecordPage{
		@include pageHaveHeight4Scroll();
		background-color: $main-box-fh-bg-color !important;
		.flexsBox{
			display: flex;
			box-sizing:border-box !important;
			color:$main-box-fh-text-color;
			border-bottom: 1px solid $bottomLineColor;
			&.row{
				flex-direction: row;
				align-items: center;
			}
			.flexLeft1{
				flex: 0 0 44px;
			}
			.flexThis{
				flex:1;
				text-align: left;
				margin-top: 6px;
				padding-bottom: 6px;
				&.column{
					flex-direction: column;
				}
				.line1{
					overflow: hidden;
					clear: both;
					width: 100%;
					font-size: 13px;
					span{color: $main-adorn-color;}
				}
				.line2{
					overflow: hidden;
					clear: both;
					width: 100%;
					margin-top: 3px;
					font-size: 12px;
					text-align: justify;
					line-height: 1.2em;
				}
				.line3{
					overflow: hidden;
					clear: both;
					width: 100%;
					font-size: 11px;
					span{color: $main-adorn-color;}
					margin-top: 3px;
				}
			}
		}
		.item{
			display:flex;
			padding:$boxPadding2 $boxPadding2;
			border-bottom:1px solid $mainBorderColor;
			align-content: center;
			align-items: center;
			justify-content: center;
			// &:last-child{
			// 	border-bottom: 1px solid transparent;
			// }
			.itemRight{
				flex: 1;
				padding-left: 10px;
				.title{
					width: 100%;
					font-size: 14px;
					color: $mainTextColor2;
				}
				.remark{
					width: 100%;
					font-size: 12px;
					color: $mainTextColor;
					line-height: 1.3em;
				}
				.time{
					font-size: 0.875rem;
					color: $grayDarker;
					// margin-top: 0.5rem;
				}
				.iconfont-right-arrow{
					font-size: 10px !important;
				}
			}
			.itemLeft{
				flex: 0 0 100px;
				/* height: $itemLRHeight;
				line-height: $itemLRHeight; */
				color: $grayLight2;
				.statusText{
					// height: $itemLRHeight;
					// line-height: $itemLRHeight;
					font-size: 0.75rem;
					display: inline-block;
					color: $main-adorn-color;
				}
				.iconfont-right-arrow2{
					display: inline-block;
					font-size: 0.75rem;
					color: $grayDark;
				}
			}
		}
	}
</style>

<template>
	<div class="raiseRecordPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				捐赠记录
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<!-- <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="getAssistRaiseListPage">
		</van-list> -->
		<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
			<div class="item flexsBox row" v-for="item in list1" :key="item.id">
				<div class="flexThis column">
					<div class="line1">
						<div class="left yellow">{{item.nickName}}</div>
						<div class="left margL10">捐赠了 <span>{{item.raiseNum}}</span> 个矿石</div>
					</div>
					<div class="line2">
						{{item.word}}
					</div>
					<div class="line3">{{item.createTime}}</div>
				</div>
			</div>
		</van-list>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js'
	
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				loading: true,
				pageSize:16,
				currentPage1: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				currentPage5: 1,
				currentPage6: 1,
				currentPage7: 1,
				activeName:'onLoad1',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				loading3:false,
				finished3:false,
				loading4:false,
				finished4:false,
				loading5:false,
				finished5:false,
				loading6:false,
				finished6:false,
				loading7:false,
				finished7:false,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list5:[],
				list6:[],
				list7:[],
			}
		},
			filters: {
				filterStatus(val) {
					//0-待审核 1-审核通过 2-审核驳回 3-筹款中 4-筹款结束
					var result = '';
					if (val == 0) {
						result = '待审核';
					}else if (val == 1) {
						result = '审核通过';
					}else if (val == 2) {
						result = '排队中';
					}else if (val == 3) {
						result = '筹款中';
					}else if (val == 4) {
						result = '筹款结束';
					}else if (val == 5) {
						result = '投票中';
					}else if (val == 6) {
						result = '待拜访';
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
			if (_this.$cookies.isKey("tab_raise_list")) {
				_this.activeName = _this.$cookies.get("tab_raise_list");
			}else{
				_this.activeName = "onLoad1";
			}
			_this.onLoad1();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			onLoad1(){
				let _this = this;
				
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					raiseId:_this.$route.query.id,
					type:0
				}
				console.log("params",params);
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseRecordListPage, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list1.push(...list);
						_this.loading1 = false;
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						}
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.finished1 = true;
					_this.loading1 = false;
				})
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>