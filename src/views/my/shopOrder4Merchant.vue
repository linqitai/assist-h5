<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.shopOrderPage{
		position: absolute;
		top: $header-height;
		width: 100%;
		bottom: 0;
		background-color: $main-bg-color;
		$pivBoxWidth: 80px;
		.copy{
			font-size: $fs-12;
			margin-left: 4px;
			background-color: $main-adorn-color;
			padding: 0 2px;
			border-radius: 2px;
		}
		.valuePic{
			text-align: center;
			position: relative;
			width: $pivBoxWidth;
			height: $pivBoxWidth;
			.iconfont-upload-pic{
				font-size: $pivBoxWidth;
				color: $main-adorn-color;
			}
			.selectPicInput,.selectedImg{
				position: absolute;
				right: 0;
				top: 0;
				width: $pivBoxWidth;
				height: $pivBoxWidth;
			}
		}
		.millContent{
			color: $mainTextColor;
			width: 100%;
			.getMineral{
				margin-top: $marginTop2;
			}
			.list{
				background-color: $main-box-color;
				overflow: hidden;
				height: 100%;
				.item-content{
					border:1px solid $main-green-color;
					padding-bottom: 0.625rem;
					margin-bottom: 0.3125rem;
					.item{
						display: flex;
						padding: $boxPadding2;
						// &::last-child{
						// 	border-bottom:1px solid transparent;
						// }
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
	}
</style>
<template>
  <div class="shopOrderPage">
	  <m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			我的商城
		</div>
		<i class="iconfont iconfont-edit rightBox icon" @click="toPublishProduct"></i>
	  </m-header>
	  <div class="millContent">
		  <van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
			<van-tab title="我的商品" name="active0">
					<div class="list">
						<div class="item-content" v-for="item in list0" :key="item.id">
							<div class="item">
								<div class="flex flex1">
									<img width="60" height="60" :src="item.headPic"/>
								</div>
								<div class="flex flex2">
									<div class="line1"><div class="title">{{item.name}} {{item.platPrice}}<i class="f-10">￥</i></div></div>
									<div class="line2 content margT3">{{item.detail}}</div>
									<!-- <div class="line3 content">每人最多拍1件</div> -->
									<div class="line2 content">状态：{{item.status | productStatus}}</div>
									<div class="line4 decorete" v-if="item.status==2">{{item.remark}}</div>
								</div>
								<div class="flex flex3">
									<!-- <router-link :to="`merchantEnter?type=edit&&id=${item.id}`">编辑</router-link> -->
									<!-- <div class="line1">状态：{{item.status | productStatus}}</div> -->
									<div class="line1" v-if="item.status==1">
										<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="down(item.id)">下架</van-button>
									</div>
									<div class="line1" v-if="item.status==3">
										<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="up(item.id)">上架</van-button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<van-empty v-if="list0==''||list0==[]" description="暂无商品" />
					<van-button @click="loadingMoreBtn(0)" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading0" loading-type="spinner">加载更多</van-button>
			</van-tab>
		    <van-tab title="待发货" name="active1">
					<div class="list">
						<div class="item-content" v-for="item in list1" :key="item.id">
							<div class="item">
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
									<div class="line1 underline blue" @click="cancelOrderBtn(item.id)">取消交易</div>
								</div>
							</div>
							<div class="f-12 paddingWing red2">
								<div>买家姓名:{{item.userName}} 联系方式:{{item.mobilePhone}} <span class="copy white" @click="handleCopy(item.mobilePhone,$event)">复制</span></div>
								<div class="margT3">收件地址:{{item.address}}</div>
								<div class="margT3">快递单(商家发货后请上传快递单):</div>
								<div class="placeholderLine"></div>
								<div class="valuePic">
									<i class="iconfont iconfont-upload-pic" v-if="!item.deliverPic"></i>
									<input accept="image/png,image/jpeg,image/jpg" class="selectPicInput" style="opacity:0" type="file" @change="uploadIMG($event,item.id)">
									<!-- <van-button color="#ffae00" size="normal" :block="true" @click="uploadBtn">确认上传以上截图</van-button> -->
									<img class="selectedImg" v-if="item.deliverPic" :src="item.deliverPic"/>
								</div>
							</div>
						</div>
					</div>
					<van-empty v-if="list1==''||list1==[]" description="暂无商品" />
					<van-button @click="loadingMoreBtn(1)" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading1" loading-type="spinner">加载更多</van-button>
		  	</van-tab>
		    <van-tab title="已发货" name="active2">
		  			<div class="list">
		  				<div class="item-content" v-for="item in list2" :key="item.id">
		  					<div class="item">
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
		  						</div>
		  					</div>
		  					<div class="f-12 paddingWing red2">
		  						<div>买家姓名:{{item.userName}} 联系方式:{{item.mobilePhone}} <span class="copy white" @click="handleCopy(item.mobilePhone,$event)">复制</span></div>
		  						<div class="margT3">收件地址:{{item.address}}</div>
		  						<div class="margT3">快递单:</div>
		  						<div class="placeholderLine"></div>
		  						<div class="valuePic">
		  							<i class="iconfont iconfont-upload-pic" v-if="!item.deliverPic"></i>
		  							<!-- <van-button color="#ffae00" size="normal" :block="true" @click="uploadBtn">确认上传以上截图</van-button> -->
		  							<img class="selectedImg" v-if="item.deliverPic" :src="item.deliverPic"/>
									<input accept="image/png,image/jpeg,image/jpg" class="selectPicInput" style="opacity:0" type="file" @change="uploadIMG($event,item.id)">
		  						</div>
								<div class="margT3">发货时间:{{item.deliverTime}}</div>
		  					</div>
		  				</div>
		  			</div>
					<van-empty v-if="list2==''||list2==[]" description="暂无商品" />
					<van-button @click="loadingMoreBtn(2)" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading2" loading-type="spinner">加载更多</van-button>
		  	</van-tab>
		    <van-tab title="已完成" name="active3">
					<div class="list">
						<div class="item-content" v-for="item in list3" :key="item.id">
							<div class="item">
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
									<!-- <div class="line2">
										<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="toDetail(item.productId)">商品详情</van-button>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					<van-empty v-if="list3==''||list3==[]" description="暂无商品" />
					<van-button @click="loadingMoreBtn(3)" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="loading3" loading-type="spinner">加载更多</van-button>
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
//import ajaxs from '@/api/ajax';
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
import EXIF from 'exif-js';
import { Toast,Dialog } from 'vant';
export default {
	data() {
		return {
			activeName:"active1",
			loading0: false,
			finished0: false,
			currentPage0: 1,
			list0:[],
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
			imgUrl:'',
			id:''
		}
	},
	components:{
	    mHeader
	},
	mounted() {
		let _this = this;
		if(_this.$cookies.isKey("mill_tab_name")){
			_this.activeName = _this.$cookies.get("mill_tab_name");
		}
		_this.refreshEvent();
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
		toPublishProduct(){
			this.$router.push({
			  path: `/merchantEnter`,
			});
		},
		refreshEvent() {
			// console.log("refresh1")
			let _this = this;
			if(_this.activeName == 'active0'){
				_this.currentPage0 = 1;
				_this.list0 = [];
				_this.finished0 = false;
				_this.onLoad0();
			}else if(_this.activeName == 'active1'){
				_this.currentPage1 = 1;
				_this.list1 = [];
				_this.finished1 = false;
				_this.onLoad1();
			}else if(_this.activeName == 'active2'){
				_this.currentPage2 = 1;
				_this.list2 = [];
				_this.finished2 = false;
				_this.onLoad2();
			}else if(_this.activeName == 'active3'){
				_this.currentPage3 = 1;
				_this.list3 = [];
				_this.finished3 = false;
				_this.onLoad3();
			}
		},
		loadingMoreBtn(index){
			let _this = this;
			if(index == 0){
				_this.onLoad0();
			}else if(index == 1){
				_this.onLoad1();
			}else if(index == 2){
				_this.onLoad2();
			}else if(index == 3){
				_this.onLoad3();
			}
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制${res.text}成功`);
			});
		},
		uploadIMG(e,id) {
			let _this = this;
			_this.id = id;
			////console.log('正在解析图片');
			// Toast.clear();
			_this.toast = Toast.loading({
			  duration: 3000, // 持续展示 toast
			  closeOnClickOverlay:true,
			  message: "正在解析图片"
			});
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			////console.log("pic_size(MB)", files[0].size / 1024 / 1024);
			if (files[0].size / 1024 / 1024 > 2) {
			   _this.$toast('上传图片大小不能超过 2MB');
			} else {
			  ////console.log('正在获取图片');
			  _this.toast.message = `正在获取图片`;
			  _this.imgPreview(files[0]);
			}
		},
		//获取图片
		imgPreview(file) {
			let _this = this;
			_this.toast.message = `正在压缩图片`;
			let Orientation = null;
			//判断支不支持FileReader
			if (!file || !window.FileReader) return false;
			if (/^image/.test(file.type)) {
			  //创建一个reader
			  EXIF.getData(file, function() {
			      EXIF.getAllTags(this);   
			      Orientation = EXIF.getTag(this, 'Orientation');  
			  });  
			  let reader = new FileReader();
			  //将图片转成base64格式
			  reader.readAsDataURL(file);
			  //读取成功后的回调
			  reader.onloadend = function(res) {
				let result = this.result;
				let image = new Image();
				image.src = result;//base64
				image.onload = function() {
					//alert("image.onload");
				    var expectWidth = this.naturalWidth;  
				    var expectHeight = this.naturalHeight; 
				    var scale = expectWidth / expectHeight;
				    var canvas = document.createElement("canvas");
				    var ctx = canvas.getContext("2d");
				    canvas.width = expectWidth;
				    canvas.height = expectHeight;
				    //如果方向角不为1，都需要进行旋转 
				    if(Orientation && Orientation != "" && Orientation != 1){  
				        var degree=0;
				        switch(Orientation){
				            case 6://需要顺时针（向左）90度旋转  
				                degree=90;
				                canvas.width = expectHeight;
				                canvas.height = expectWidth;
				                ctx.translate(expectHeight / 2,expectWidth / 2);
				                ctx.rotate(degree * Math.PI / 180);
				                ctx.translate(-expectWidth / 2,-expectHeight / 2);
				                ctx.drawImage(image,0,0,expectWidth,expectHeight);
				                break;
				            case 8://需要逆时针（向右）90度旋转
				                degree=-90;
				                canvas.width = expectHeight;
				                canvas.height = expectWidth;
				                ctx.translate(expectHeight / 2,expectWidth / 2);
				                ctx.rotate(degree * Math.PI / 180);
				                ctx.translate(-expectWidth / 2,-expectHeight / 2);
				                ctx.drawImage(image,0,0,expectWidth,expectHeight);
				                break;
				            case 3://需要180度旋转  
				                degree=-180;
				                ctx.rotate(degree * Math.PI / 180);
				                ctx.drawImage(image,-expectWidth,-expectHeight,expectWidth,expectHeight);
				                break;
				        }         
				    }else{
				        ctx.drawImage(image,0,0,expectWidth,expectHeight);
				    }
				    let dataOri = canvas.toDataURL("image/png");
					let img = new Image();
					img.src = dataOri;//base64
					img.onload = function() {
						let data = _this.$utils.compress(img, 0.4);//调整压缩比例
						// _this.$store.state.orderPageList4Merchant[0].deliverPic = data;
						// console.log('store', _this.$store.state.orderPageList4Merchant)
						//console.log('_this.store.state.orderPageList4Merchant', _this.$store.getters.getAssistOrderPageList4Merchant);
						let params = {
							img: data,
							id: _this.id,
						}
						_this.toast.message = `正在上传图片`;
						_this.$ajax.ajax(_this.$api.updateOrderDiliverPicById, 'POST', params, function(res) {
							if (res.code == _this.$api.CODE_OK) {
								_this.toast.message = `图片上传成功`;
								_this.toast.icon = 'success';
								_this.refreshEvent();
							}
						})
					}
				};
			  }
			}
		},
		down(id){
			let _this = this;
			let params = {
				id: id
			}
			Dialog.alert({
			  title: '确认提示',
			  message: `是否确认下架该商品？`,
			  closeOnClickOverlay:true,
			}).then(() => {
			  _this.$ajax.ajax(_this.$api.updateProductStatusDownById, 'POST', params, function(res) {
			  	if (res.code == _this.$api.CODE_OK) {
			  		_this.$toast("下架成功");
			  		_this.onLoad0();
			  	}
			  })
			});
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
			  		_this.onLoad0();
			  	}
			  })
			});
		},
		cancelOrderBtn(id){
			let _this = this;
			let params = {
				id: id
			}
			Dialog.confirm({
			  title: '确认提示',
			  message: `是否确认要取消该笔交易？`,
			  closeOnClickOverlay:true,
			}).then(() => {
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.updateProductStatusCancelById, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("取消成功");
						_this.refreshEvent();
					}
				},function(){
					Toast.clear();
				})
			}).catch(res=>{
				console.log('cancel');
			});
		},
		onLoad0() {
			let _this = this;
			_this.loading0 = true;
			let params = {
				pageNo: _this.currentPage0,
				pageSize: 8
			}
			_this.$ajax.ajax(_this.$api.getAssistProductPageListByMerchant, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					let list = res.data.list;
					if(list==null||list.length==0){
						_this.$toast("已经到底了");
						return;
					}
					_this.list0.push(...list);
					_this.currentPage0 = _this.currentPage0 + 1;
				}
			},function(){
				_this.loading0 = false;
			})
		},
		onLoad1() {
			let _this = this;
			_this.loading1 = true;
			let params = {
				pageNo: _this.currentPage1,
				pageSize: 8,
				status: 0
			}
			/* _this.$store.dispatch("getAssistOrderPageList4Merchant",params).then(res => {
				_this.list1 = _this.$store.state.orderPageList4Merchant;
				console.log('_this.list1', _this.list1);
				console.log('res', res);
			}) */
			_this.$ajax.ajax(_this.$api.getAssistOrderPageList4Merchant, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					let list = res.data.list;
					if(list==null||list.length==0){
						_this.$toast("已经到底了");
						return;
					}
					_this.list1.push(...list);
					_this.currentPage1 = _this.currentPage1+ 1;
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
			_this.$ajax.ajax(_this.$api.getAssistOrderPageList4Merchant, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					let list = res.data.list;
					if(list==null||list.length==0){
						_this.$toast("已经到底了");
						return;
					}
					_this.list2.push(...list);
					_this.currentPage2 = _this.currentPage2+ 1;
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
			_this.$ajax.ajax(_this.$api.getAssistOrderPageList4Merchant, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					let list = res.data.list;
					if(list==null||list.length==0){
						_this.$toast("已经到底了");
						return;
					}
					_this.list3.push(...list);
					_this.currentPage3 = _this.currentPage3+ 1;
				}
			},function(){
				_this.loading3 = false;
			})
		},
		initializeTabActiveName(){
			let _this = this;
			
		},
		tabChange(name,title){
			let _this = this;
			this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
			_this.activeName = name;
			_this.refreshEvent();
		},
	}
}
</script>
