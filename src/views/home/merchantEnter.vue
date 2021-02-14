<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.merchantEnter{
		color: $main-box-fh-text-color;
		box-sizing: border-box;
		position: absolute;
		top: $header-height;
		width: 100%;
		height: 100%;
		background-color: $main-box-fh-bg-color;
		font-size: 0.75rem;
		z-index: 3;
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $main-box-fh-text-color;
			font-size: 0.75rem !important;
		}
		.van-field__word-limit{
			color: $main-box-fh-text-color !important;
		}
		[class*=van-hairline]::after{
			border: none !important;
		}
		.van-field__control{
			color: $main-box-fh-text-color;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		}
		.van-cell{
			color:$main-box-fh-text-color !important;
		}
		.van-field__label{
			width: 70px !important;
			font-size: 0.75rem !important;
			color: $main-box-fh-text-color;
		}
		input,textarea{
			font-size: $fs-content !important;
		}
		.merchantEnterPage{
			margin-bottom: $header-height;
			background-color: $main-box-fh-bg-color;
			.myCell{
				border-bottom: 1px solid $bottomLineColor;
				.van-cell__value, .van-cell__value--alone, .van-field__control{
					color: #ffffff !important;
				}
			}
			.label{
				height: 12px;
				position: relative;
				margin-top: 16px;
				padding-left: 8px;
				clear: both;
				.star{
					color: #ee0a24;
					font-size: 14px;
					position: absolute;
					top: 2px;
				}
				.text{
					color: $main-box-fh-text-color;
					font-size: $fs-content;
					position: absolute;
					left:16px;
				}
			}
			.uploadPic{
				clear: both;
			}
			.sureBtn{
				.tip{
					margin: 1.25rem 0;
				}
				.agreement{color: $main-adorn-color;}
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
		.lineHeight{
			line-height: 50px;
		}
		.padding-right{
			padding-right: $boxPadding2;
		}
	}
	
</style>
<template>
	<div class="merchantEnter">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				上架申请
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<div class="merchantEnterPage">
			<van-form @submit="onSubmit">
				<div class="tip4model3 paddingAll myCell">
					线上购物需用矿石来交易，每笔购物消费平台收20%矿石手续费，商家上架商品需有30G个人算力。<br>
				</div>
				<div class="myCell">
					<van-field label="商品名称" required clearable @blur="validate('name')"
					v-model="form.name" maxlength="20" placeholder="请输入20字内的商品名称" :error-message="errorInfo.name"/>
				</div>
				<div class="myCell">
					<van-field label="商品简介"
					  v-model="form.detail" @blur="validate('detail')"
					  :error-message="errorInfo.detail"
					  rows="2" required
					  autosize clearable
					  type="textarea"
					  maxlength="100"
					  placeholder="请输入商品简介(不超过100字)"
					  show-word-limit
					/>
				</div>
				<div class="myCell">
					<van-field label="商品定价(￥)" required clearable @blur="validate('platPrice')"
					v-model="form.platPrice" maxlength="10" placeholder="请填写商品的定价(建议算上快递费)" :error-message="errorInfo.platPrice"/>
				</div>
				<div class="myCell">
					<van-field label="成本价(￥)" required clearable @blur="validate('minPrice')"
					v-model="form.minPrice" maxlength="10" placeholder="请填写商品的成本价" :error-message="errorInfo.minPrice"/>
				</div>
				<div class="myCell">
					<van-field label="商品库存" required clearable @blur="validate('inventory')"
					v-model="form.inventory" maxlength="10" placeholder="请填写商品的库存" :error-message="errorInfo.inventory"/>
				</div>
				<div class="myCell">
					<van-field label="联系方式" required clearable
					@blur="validate('phone')" v-model="form.phone"
					maxlength="11" placeholder="请填写商家的联系方式"
					:error-message="errorInfo.phone"
					/>
				</div>
				<div class="label">
					<span class="star">*</span>
					<span class="text">商品展示图(最多传1张)</span>
				</div>
				<div class="uploadPic paddingWing">
					<div class="margT10">
						<van-uploader v-model="form.headPic" multiple image-fit='cover' :max-count="1"  :before-read="beforeRead"/>
					</div>
				</div>
				<div class="label">
					<span class="star">*</span>
					<span class="text">商品详情图(最多传3张)</span>
				</div>
				<div class="uploadPic paddingWing">
					<div class="margT10">
						<van-uploader v-model="form.detailPic" multiple image-fit='cover' :max-count="3"  :before-read="beforeRead"/>
					</div>
					<div class="placeholderLine10"></div>
				</div>
				<!-- <div class="label">
					<span class="star">*</span>
					<span class="text">商家收款码(微信)</span>
				</div>
				<div class="uploadPic paddingWing">
					<div class="margT10">
						<van-uploader v-model="form.getInCode" multiple image-fit='cover' :max-count="1"  :before-read="beforeRead"/>
					</div>
				</div> -->
				<div class="sureBtn">
					<!-- <div class="tip">点击登录即表示您同意<span class="agreement">《服务协议》</span></div> -->
					<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" :loading="submitLoading">提交</van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,Toast } from 'vant';
	import axios from 'axios';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				form:{
					name:'',
					phone: '',
					detail:'',
					platPrice:'',
					minPrice:'',
					inventory:'',
					headPic:[],
					detailPic:[],
					/* getInCode:[], */
				},
				errorInfo:{
					name:'',
					phone: '',
					detail:'',
					platPrice:'',
					minPrice:'',
					inventory:'',
				},
				registerUrl:'',
				option1: [
					{ text: '平台券', value: 0 },
					{ text: '省市代理', value: 1 },
					{ text: '商家入驻', value: 2 },
					{ text: '其他', value: 3 }
				],
				submitLoading:false,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			// _this.handleGenerator();
			//this.$nextTick(function () {})
			if(_this.$route.query.type=='edit'){
				_this.getAssistProductById();
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getAssistProductById() {
				let _this = this;
				let params = {
					id: _this.$route.query.id
				}
				Toast.loading({
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
						_this.form = productInfo;
						_this.form.productId = productInfo.id;
						_this.form.merchantId = productInfo.userId;
					}
				},function(){
					Toast.clear();
				})
			},
			beforeRead(file) {
				let _this = this;
				if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
					_this.$toast('请上传 jpg/png 格式图片');
					return false;
				}
				if (file.size/1024>1024) {
					Dialog.alert({
					  title: '系统提示',
					  message: '所上传图片大小超过了1M，请先压缩后再上传(微信转发后再保存，用保存后的照片上传试试)'
					}).then(() => {
					  // on close
					});
					return false;
				}
				return true;
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			validate(flag){
				let _this = this;
				if(flag == 'name'){
					if(_this.$utils.isNUll(_this.form.name)){
						_this.errorInfo.name = '请填写商品名称';
						return;
					}else{
						_this.errorInfo.name = '';
					}
				}else if(flag == 'detail'){
					if(_this.$utils.isNUll(_this.form.detail)){
						_this.errorInfo.detail = '请填写商品简介';
						return;
					}else{
						_this.errorInfo.detail = '';
					}
				}else if(flag == 'platPrice'){
					if(_this.$utils.isNUll(_this.form.platPrice)){
						_this.errorInfo.platPrice = '请填写商品定价';
						return;
					}else{
						if(!_this.$reg.number.test(_this.form.platPrice)){
							_this.errorInfo.platPrice = '请正确填写商品定价';
							return;
						}
						_this.errorInfo.platPrice = '';
					}
					// if(!_this.$reg.univalence.test(_this.form.platPrice)){
					// 	_this.$toast('请填正确写商品定价');
					// 	return;
					// }
				}else if(flag == 'minPrice'){
					if(_this.$utils.isNUll(_this.form.minPrice)){
						_this.errorInfo.minPrice = '请填写商品成本价';
						return;
					}else{
						if(!_this.$reg.number.test(_this.form.minPrice)){
							_this.errorInfo.minPrice = '请正确填写商品成本价';
							return;
						}
						_this.errorInfo.minPrice = '';
					}
					// if(!_this.$reg.univalence.test(_this.form.minPrice)){
					// 	_this.$toast('请正确填写商品成本价');
					// 	return;
					// }
				}else if(flag == 'inventory'){
					if(_this.$utils.isNUll(_this.form.inventory)){
						_this.errorInfo.inventory = '请填写商品库存';
						return;
					}
					if(!_this.$reg.positive_integer.test(_this.form.inventory)){
						_this.errorInfo.inventory = '请正确填写商品库存';
						return;
					}
					_this.errorInfo.inventory = '';
				}else if(flag == 'phone'){
					if(_this.$utils.isNUll(_this.form.phone)){
						_this.errorInfo.phone = '请填写联系方式';
						return;
					}
					if(!_this.$reg.phone2.test(_this.form.phone)){
						_this.errorInfo.phone = '请正确填写联系方式';
						return;
					}
					_this.errorInfo.phone = '';
				}
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			onSubmit(){
				let _this = this;
				if(_this.form.headPic.length==0){
					_this.$toast('请上传商品展示图');
					return;
				}
				if(_this.form.detailPic.length==0){
					_this.$toast('请上传商品详情图');
					return;
				}
				/* if(_this.form.getInCode.length==0){
					_this.$toast('请上传商家收款码');
					return;
				} */
				let headPic=[];
				for(let i=0;i<_this.form.headPic.length;i++){
					headPic.push(_this.form.headPic[i].content);
				}
				// _this.form.headPic.forEach((item,index)=>{
				// 	headPic.push(item.content);
				// })
				
				let detailPic=[];
				for(let i=0;i<_this.form.detailPic.length;i++){
					detailPic.push(_this.form.detailPic[i].content);
				}
				// _this.form.detailPic.forEach((item,index)=>{
				// 	detailPic.push(item.content);
				// })
				
				/* let getInCodePic=[];
				for(let i=0;i<_this.form.getInCode.length;i++){
					getInCodePic.push(_this.form.getInCode[i].content);
				} */
				let params = _this.form;
				params.headPic = headPic.join('|');
				params.detailPic = detailPic.join('|');
				//params.getInCode = getInCodePic.join('|');
				if(_this.$utils.hasNull(params)){
					_this.$toast(`请填写完整信息`);
					return;
				}
				if(_this.$utils.hasVal(_this.errorInfo)){
					_this.$toast('请按要求填写信息');
					return;
				}
				_this.submitLoading = true;
				_this.$ajax.ajax(_this.$api.insertAssistProduct, 'POST', params, function(res){
					if(res.code == _this.$api.CODE_OK){
						Dialog.alert({
							title: '温馨提示',
							message: '提交成功，请联系客服并提醒客服审核'
						}).then(() => {
							_this.$router.replace('/my')
						});
					}else{
						Dialog.alert({
							title: '温馨提示',
							message: res.message
						}).then(() => {
							//_this.form = _this.$utils.formClear(_this.form);
							/* _this.form.headPic = '';
							_this.form.detailPic = '';
							_this.form.getInCode = ''; */
							_this.$router.replace('/my')
						});
					}
				},function(){
					_this.submitLoading = false;
				})
			},
		}
	}
</script>
