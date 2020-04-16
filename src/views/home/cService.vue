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
					width:70%;
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
			<div class="text">客服服务</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="cServiceContent">
			<div class="cateInfo" v-if="isShowChekers">
				<div class="infoBox">
					<img class="ewmBox" src="../../assets/image/chekers.png">
					<div class="text">扫码进督察组微信群</div>
				</div>
			</div>
			<div>
				<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="addInCheck">申请加入HPC督察组</van-button>
			</div>
			<div class="placeholderLine10"></div>
			<div class="tip4model3 textBold">有问题请先联系自己的团队长，然后团队长再联系客服，尽量减少客服的压力，感恩您的配合</div>
			<div class="placeholderLine10"></div>
			<!-- <div class="title">工会QQ群(没群的会员请进)：</div>
			<div class="placeholderLine10"></div>
			<div>
				<b class="textBold">{{qqFlock}}</b><span class="copy margL10" @click="handleCopy(qqFlock,$event)">复制</span>
			</div>
			<div class="placeholderLine10"></div> -->
			<div class="title">工会微信群(没群的会员请进)：</div>
			<div class="placeholderLine10"></div>
			<div class="cateInfo">
				<div class="infoBox">
					<!-- <img class="ewmBox" src="https://www.helpchain.online/image/wechat.png" alt=""> -->
					<img class="ewmBox" src="../../assets/image/wechat.png">
					<div class="text">扫码进微信群</div>
				</div>
			</div>
			<div class="placeholderLine10"></div>
			
			<div class="title">微信客服：</div>
			<div class="placeholderLine10"></div>
			<div v-for="item in serviceList" :key="item.id+20" v-if="item.weiChart!='--'">
				<b class="textBold">{{item.remark}}：{{item.weiChart}}</b><span class="copy margL10" @click="handleCopy(item.weiChart,$event)">复制</span>
				<div class="placeholderLine10"></div>
			</div>
			<!-- <div class="title">QQ客服：</div>
			<div class="placeholderLine10"></div>
			<div v-for="item in serviceList" :key="item.id" v-if="item.qq!='--'">
				<b class="textBold">{{item.remark}}：{{item.qq}}</b><span class="copy margL10" @click="handleCopy(item.qq,$event)">复制</span>
				<div class="placeholderLine10"></div>
			</div> -->
			<!-- <div class="placeholderLine4"></div>
			<van-row gutter="10">
			  <van-col span="12">
				  <div class="cateInfo">
				  	<div class="infoBox">
				  		<img class="ewmBox" src="../../assets/image/zjwx.png" alt="">
				  		<div class="text">帮扶1号</div>
				  	</div>
				  </div>
			  </van-col>
			  <van-col span="12">
				  <div class="cateInfo">
				  	<div class="infoBox">
				  		<img class="ewmBox" src="../../assets/image/zjwx.png" alt="">
				  		<div class="text">帮扶1号</div>
				  	</div>
				  </div>
			  </van-col>
			</van-row> -->
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	import { Dialog } from 'vant';
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				serviceList:[],
				qqList:[],
				wxList:[],
				qqFlock:'',
				userInfo:'',
				isShowChekers:false
			}
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				////console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
				/* localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token'); */
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getAdminUserPageList();
			/* let qqFlock = _this.$cookies.get('qqFlock');
			if(qqFlock){
				_this.qqFlock = qqFlock;
			}else{
				_this.getAssistQQFlock();
			} */
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
			addInCheck(){
				let _this = this;
				Dialog.confirm({
				  title: '申请需知',
				  message: '加入督查组需要个人算力大于等于1G。督察规则：若发现有会员账号异常，比如数据异常，矿石来源有出路，平台哪里有问题等，都可以上报给客服，审核有效后即可得到20个帮扶券+一台体验矿机(2个贡献值)的奖励。'
				}).then(() => {
				  // on confirm
				  if(_this.userInfo.myCalculationPower>1){
					  _this.isShowChekers = true;
				  }else{
					  Dialog.alert({
					    title: '系统提示',
					    message: '请在个人算力达到1G后再加入督察组'
					  }).then(() => {
					    // on close
					  });
				  }
				}).catch(() => {
				  // on cancel
				});
			},
			getAdminUserPageList(){
				let _this = this;
				var params = {
					pageNo: 1,
					pageSize: 20,
				}
				_this.$ajax.ajax(_this.$api.getAdminUserPageList, 'GET', params, function(res) {
					console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.serviceList = res.data.list;
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
					}else{
						_this.$toast(res.message);
					}
				})
			},
		}
	}
</script>
