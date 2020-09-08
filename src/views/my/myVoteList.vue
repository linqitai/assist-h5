<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.myVoteListPage{
		@include pageNoHeight4Scroll();
		.voteList{
			background-color: $main-box-color;
			// margin-top:$header-height;
			.itemDiv{
				border-bottom: 1px solid #e6e6e6;
			}
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid $mainBorderColor;
				// &:last-child{
				// 	border-bottom: 1px solid transparent;
				// }
				.itemLeft{
					flex: 1;
					.title{
						width: 100%;
						font-size: 12px;
						line-height:$itemLRHeight;
						color: $mainTextColor2;
					}
					.time{
						font-size: 11px;
						color: $grayDark;
						// margin-top: 0.5rem;
						line-height:$itemInnerLine1Height;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 80px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					font-size: 1rem;
					.status{
						font-size: 12px;
						text-align: right;
						color: $main-adorn-color;
						.iconfont{
							color: $grayLight2;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="myVoteListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我发起的投票申请
			</div>
			<i class="iconfont iconfont-edit rightBox icon" @click="toListPublishView"></i>
		</m-header>
		<div class="tip4model3 tip">
			向左滑动方块可进行删除与编辑自己所发布的投票申请
		</div>
		<van-list
		  v-model="loading1"
		  :finished="finished1"
		  finished-text="没有更多了"
		  @load="onLoad1"
		>
			<div class="voteList">
				<div class="itemDiv" v-for="item in voteList" :key="item.id" @click="toVoteDetail(item)">
					<!-- <div class="itemLeft">
						<div class="title">{{item.voteTitle}}</div>
					</div>
					<div class="itemRight">
						<div class="status">{{judgeVoteStatus(item.isPublish)}} <i class="iconfont iconfont-right-arrow2"></i></div>
					</div> -->
					<van-swipe-cell>
					  <!-- <template #left>
					    <van-button square type="primary" text="选择" />
					  </template> -->
					  <van-cell :border="false" :title="item.voteTitle" :value="judgeVoteStatus(item.isPublish)" />
					  <template #right>
					    <van-button square type="danger" text="删除" @click="deleteVote(item)"/>
					    <van-button square type="primary" @click="editMyVote(item)" text="编辑" />
					  </template>
					</van-swipe-cell>
				</div>
				
			</div>
		</van-list>
		<!-- <transition name="van-fade">
		  <router-view></router-view>
		</transition> -->
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
				pageIndex:1,
				pageSize:16,
				voteList: [],
				loading1:false,
				finished1:false
			}
		},
		mounted() {
			let _this = this;
			// _this.getVoteList();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			judgeVoteStatus(val){
				let _this = this;
				if(val==0){
					return '审核中';
				}else{
					return '进行中';
				}
			},
			toListPublishView(){
				let _this = this;
				_this.$router.push({
					path: `/votePublish`,
					query: {
						intoType:'add'
					}
				});
			},
			deleteVote(item){
				let _this = this;
				_this.$ajax.ajax(_this.$api.deleteAssistVoteById + item.id, 'POST', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast(res.message);
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.$toast(res.message);
				})
			},
			editMyVote(item){
				console.log("editMyVote");
				let _this = this;
				_this.$router.push({
					path: `/votePublish`,
					query: {
						id: item.id,
						intoType:'edit'
					}
				});
			},
			onLoad1(){
				let _this = this;
				var params = {
					pageNo: _this.pageIndex,
					pageSize: _this.pageSize,
					isConVote: 1
				}
				_this.$ajax.ajax(_this.$api.getAssistVoteList4Me, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.loading1 = false;
						let list = res.data.list;
						// _this.total = res.data.size;
						_this.voteList.push(...list);
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.pageIndex = _this.pageIndex + 1;
						}
					}else{
						_this.loading1 = false;
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				},function(){
					_this.loading1 = false;
				})
				// 异步更新数据
				// setTimeout(() => {
				// 	// 加载状态结束
				// 	_this.loading1 = false;
				// 	_this.finished1 = true;
				// }, 500);
			},
			toVoteDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/voteDetail`,
					query: {
						id: item.id
					}
				});
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>