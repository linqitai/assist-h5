<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.shopDetail{
	background-color: $main-bg-color;
	min-height: 100% !important;
	.shopList{
		color: $mainTextColor;
		position: absolute;
		top: $header-height;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
		.list {
			width: 100%;
			.item {
				width: 100%;
				border-bottom: 1px solid $bottomLineColor;
				letter-spacing: 1px;
				.imgBox,.detailBox{
					width: 100%;
					img{
						width: 100%;
					}
				}
				.textBox{
					padding: 4px 10px;
					.freeGet{color: $main-adorn-color;}
					.line{
						overflow: hidden;clear: both;
						&.title{font-size: $fs-title;font-weight: bold;}
						&.content{font-size: $fs-content;line-height: 1.2em;}
					}
					.weixinBox{
						display: flex;
						align-items: center;
						.weixin{
							
						}
						.copy{
							font-size: $fs-12;
							margin-left: 4px;
							background-color: $main-adorn-color;
							padding: 0 2px;
							border-radius: 2px;
						}
					}
				}
				.detailBox{
					margin-bottom: 46px;
				}
				.sureBtn{
					position: fixed;
					bottom: 0;
					left: 0;
					right: 0;
					.tip{
						margin: 1.25rem 0;
					}
					.agreement{color: $main-adorn-color;}
				}
			}
		}
	}	
}
</style>
<template>
  <div class="shopDetail">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			商品详情
		</div>
		<i class="iconfont rightBox icon"></i>
	</m-header>
	<div class="shopList">
		<div class="list">
			<div class="item">
				<div class="imgBox">
					<img :src="productInfo.headPic" alt="">
				</div>
				<div class="textBox">
					<div class="line title">
						<div class="left f-14">{{productInfo.name}}</div>
						<div class="freeGet right f-14">{{(productInfo.platPrice/avgPrice).toFixed(2)}} <i class="f-12">矿石</i></div>
					</div>
					<div class="line content margT3 justify">{{productInfo.detail}}</div>
					<!-- <div class="line content"><div class="left">已售 100</div><div class="right">库存 1000</div></div> -->
					<div class="line content weixinBox"><span class="weixin">商家热线 {{productInfo.phone}}</span><span class="copy white" @click="handleCopy(productInfo.phone,$event)">复制</span></div>
				</div>
				<div class="detailBox">
					<img v-for="(item,index) in productInfo.detailPic" :key='index' :src="item" @click="imgEvent">
					<van-image-preview v-model="showPreviewImg" :images="productInfo.detailPic" @change="onChange">
					  <template v-slot:index>第{{ index }}页</template>
					</van-image-preview>
				</div>
				<div class="detailBox">
					<img :src="productInfo.getInCode">
				</div>
				<div v-if="userInfo.isAgent==3">
					<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="refuseBtn(productInfo.id,refuseReason)">驳回</van-button>
					<div class="placeholderLine10"></div>
					<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="up(productInfo.id)">通过</van-button>
					<div class="placeholderLine40"></div>
					<div class="placeholderLine10"></div>
				</div>
				<van-goods-action>
				  <van-goods-action-button
				    type="danger"
				    text="立即购买"
				    @click="buyNowBtn"
				  />
				</van-goods-action>
				<!-- <van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="orderBtn">去订购</van-button> -->
			</div>
		</div>
		<van-action-sheet v-model="showSubmitModel" title="确认信息">
		  <div class="placeholderLine10"></div>
		  <van-field v-model="productInfo.name" type="text" readonly label="商品名称"/>
		  <van-field v-model="productInfo.platPrice" type="number" readonly label="商品单价(￥)" placeholder="请填写单价"/>
		  <!-- <van-field v-model="form.num" type="number" required clearable label="购买数量"/> -->
		  <van-field name="stepper" label="购买数量">
		    <template #input>
		      <van-stepper v-model="form.num" min="1" max="3"/><i class="margL10 yellow">(限购3件)</i>
		    </template>
		  </van-field>
		  <van-field v-model="totalPrice" type="number" readonly label="总价(￥)"/>
		  <van-field v-model="form.userName" type="text" required clearable label="收件人姓名" placeholder="请填写收件人姓名" maxlength="20"/>
		  <van-field v-model="form.mobilePhone" type="text" required clearable label="联系方式" placeholder="请填写收件人电话" maxlength="11"/>
		  <van-field v-model="form.address" required clearable label="收货地址" placeholder="请填写收货地址" maxlength="50"/>
		  <van-field v-model="form.remark" clearable label="留言" placeholder="请填写特殊留言(非必填)" maxlength="200"/>
		  <div class="sureAppointBtnBox">
			  <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="submitBtn">提交</van-button>
		  </div>
		</van-action-sheet>
		<van-dialog v-model="refuseModel" title="驳回理由" confirmButtonText="确认" @confirm="refuseEvent">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<van-field v-model="refuseReason" type="text" required clearable placeholder="请填写驳回理由" maxlength="50"/>
				<div class="placeholderLine10"></div>
				<!-- <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="refuseEvent">提交</van-button> -->
			</div>
		</van-dialog>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
import {Toast,Dialog} from 'vant';
export default {
	data() {
		return {
			productInfo:{},			
			userId:'',
			loading1: false,
			finished1: false,
			form:{
				productId:'',
				userName:'',
				mobilePhone:'',
				address:'',
				num:1,
				totalPrice: 0
			},
			showPreviewImg:false,
			images: [
				'https://img.yzcdn.cn/2.jpg'
			],
			index:0,
			showSubmitModel:false,
			userInfo:'',
			refuseModel:false,
			refuseReason:'',
			id:'',
			avgPrice:0
		}
	},  
	components:{
	    mHeader
	},
	computed:{
		totalPrice(){
			this.form.totalPrice = (this.productInfo.platPrice*this.form.num).toFixed(2);
			return this.form.totalPrice;
		}
	},
	mounted(){
		let _this = this;
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
			_this.form.userName = _this.userInfo.realName;
			_this.form.mobilePhone = _this.userInfo.mobilePhone;
			if(_this.userInfo.accountStatus==1){
				//退出登录
				_this.$storage.removeAll();
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
		}else{
			_this.$storage.removeAll();
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		/* console.log('avgPrice',this.$storage.getCookie('avgPrice'));
		if(!this.$storage.getCookie('avgPrice')){
			_this.back();
		}else{
			_this.avgPrice = _this.$storage.getCookie('avgPrice');
		} */
		_this.getAvgPrice();
		_this.onLoad1();
		_this.$utils.scrollTop();
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
					//_this.onLoad1();
				}else{
					_this.$toast(res.message);
				}
			}, function(res){
				Toast.clear();
			})
		},
		up(id){
			let _this = this;
			let params = {
				id: id
			}
			Dialog.alert({
			  title: '确认提示',
			  message: `是否确认上架该商品？`,
			  closeOnClickOverlay:true,
			}).then(() => {
			  _this.$ajax.ajax(_this.$api.updateProductStatusUpById, 'POST', params, function(res) {
			  	if (res.code == _this.$api.CODE_OK) {
			  		_this.$toast("上架成功");
					_this.back();
			  	}
			  })
			});
		},
		refuseBtn(id,refuseReason){
			let _this = this;
			_this.refuseModel = true;
			_this.id = id;
			_this.refuseReason = refuseReason;
		},
		refuseEvent(){
			let _this = this;
			let params = {
				id: _this.id,
				remark:_this.refuseReason
			}
			_this.$ajax.ajax(_this.$api.updateProductRemarkById4S, 'POST', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.$toast("驳回成功");
					_this.refuseModel = false;
					_this.back();
				}
			},function(){
				_this.refuseModel = false;
			})
		},
		submitBtn(){
			let _this = this;
			let params = _this.form;
			if(_this.$utils.hasNull(params)){
				_this.$toast(`请填写完整信息`);
				return;
			}
			params.remark = _this.form.remark||'空';
			let ta = Toast.loading({
			  message: '加载中...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			_this.$ajax.ajax(_this.$api.insertAssistOrder, 'POST', params, function(res){
				if(res.code == _this.$api.CODE_OK){
					Dialog.alert({
						title: '温馨提示',
						message: '下单成功'
					}).then(() => {
						_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
						_this.$router.replace('/home');
					});
				}else{
					Dialog.alert({
						title: '温馨提示',
						message: res.message
					}).then(() => {
						
					});
				}
			},function(){
				ta.clear();
				//Toast.clear();
			})
		},
		buyNowBtn(){
			let _this = this;
			_this.showSubmitModel = true;
			//this.$router.push('/shopCharge');
		},
		imgEvent(){
			this.showPreviewImg = true;
		},
		onChange(index) {
		  this.index = index;
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制${res.text}成功`);
			});
		},
		onLoad1() {
			let _this = this;
			let params = {
				id: _this.$route.params.id
			}
			let tost = Toast.loading({
			  message: '加载中...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			_this.$ajax.ajax(_this.$api.getAssistProductById, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					let productInfo = res.data;
					let detailPicList = [];
					let detailPicString = productInfo.detailPic.split('|');
					detailPicString.forEach(item=>{
						detailPicList.push(item);
					})
					productInfo.detailPic = detailPicList;
					_this.productInfo = productInfo;
					_this.form.productId = productInfo.id;
					_this.form.merchantId = productInfo.userId;
				}
			},function(){
				tost.clear();
			})
		},
		back(){
			this.$router.go(-1);
		},
	}
}
</script>
