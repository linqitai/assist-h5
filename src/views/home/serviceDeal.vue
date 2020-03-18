<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.cService{
	@include page4Home4Scroll();
	.cServiceContent{
		color: $mainTextColor;
		padding: $boxPadding2;
		.title{
			font-size: 14px;
			font-weight: bold;
			color: $main-adorn-color;
		}
		.copy{
			font-size: $fs-12;
			margin-right: 10px;
			background-color: $main-adorn-color;
			padding: 1px 2px;
			color: $main-bg-color;
		}
		.cateInfo {
			width: $lineWidth;
			border-radius: $borderRadius;
			background-color: white;
			color: $mainBorderColor;
			padding: 6px;
			.infoBox {
				flex: 1;
				text-align: center;
				font-size: 14px;
				.ewmBox{
					width:100%;
				}
				.text {
					margin-top: 0.375rem;
					color: $grayDarker;
				}
			}
		}
	}
}
</style>
<template>
	<div class="cService">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">服务商</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="cServiceContent">
			
			<div class="title">服务商：</div>
			<div class="placeholderLine10"></div>
			<div v-for="item in serviceList" :key="item.id+20">
				<div class="textBold">昵称：{{item.nickName}}</div>
				<!-- <div class="textBold margT6">姓名：{{item.realName}}</div> -->
				<div class="textBold margT6">微信号：{{item.wechartNum}}<span class="copy margL10" @click="handleCopy(item.wechartNum,$event)">复制</span></div>
				<div class="placeholderLine10"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	// import { Dialog } from 'vant';
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				serviceList:[],
				qqList:[],
				wxList:[],
				qqFlock:''
			}
		},
		mounted() {
			let _this = this;
			_this.getAdminUserPageList();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			getAdminUserPageList(){
				let _this = this;
				var params = {
					pageNo: 1,
					pageSize: 20,
				}
				_this.$ajax.ajax(_this.$api.getServiceUserList, 'GET', null, function(res) {
					//console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						let serviceList = res.data;
						console.log('serviceList', _this.serviceList);
						_this.serviceList = serviceList.filter((item) => item.isShow == 1);
						// let qqList = [];
						// let wxList = [];
						// _this.serviceList.forEach((item)=>{
						// 	let newItem = {id:item.id,qq:item.qq}
						// 	qqList.push(newItem);
						// 	_this.qqList = qqList;
						// 	let newItem2 = {id:item.id+20,weiChart:item.weiChart}
						// 	wxList.push(newItem2);
						// 	_this.wxList = wxList;
						// })
						// console.log('qqList',qqList);
						// console.log('wxList',wxList);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getAssistQQFlock(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistQQFlock, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.qqFlock = res.data.qqFlock;
						_this.$cookies.set('qqFlock',res.data.qqFlock,_this.$api.cookiesTime);
					}
				})
			},
		}
	}
</script>
