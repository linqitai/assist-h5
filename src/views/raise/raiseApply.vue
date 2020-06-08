<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.raiseApply{
		font-size: 0.75rem;
		box-sizing: border-box;
		@include pageHaveHeight4Scroll();
		color: $main-box-fh-text-color;
		background-color: $main-box-fh-bg-color;
		z-index: 100;
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
		.raiseApplyPage{
			margin-bottom: $header-height;
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
	<div class="raiseApply">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text" style="z-index: 100;">
				帮扶筹申请
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="raiseApplyPage">
			<div class="tip4model3 paddingAll myCell">
				申请帮扶筹需要0.41G的个人算力，且少年儿童的求助会优先获得帮助，所提交申请的求助者需要先经过线下家访，让志愿者与代理先去考察后才能公开求助信息。
			</div>
			<div class="myCell">
				<van-field label="标题" required clearable @blur="validate('title')" v-model="form.title" maxlength="30" placeholder="请填写30字内的筹款标题" />
			</div>
			<div class="myCell">
				<van-field label="故事"
				  v-model="form.story" @blur="validate('story')"
				  rows="2" required
				  autosize clearable
				  type="textarea"
				  maxlength="500"
				  placeholder="请填写发起筹款的理由或故事"
				  show-word-limit
				/>
			</div>
			<div class="myCell">
				<van-field label="需要帮扶券" required clearable @blur="validate('needTicket')" v-model="form.needTicket" type="number" placeholder="请填写您所需要的帮扶券" />
			</div>
			<div class="tip4model3 paddingAll myCell">
				{{raiseTip}}
			</div>
			<!-- <div class="label">
				<span class="star">*</span>
				<span class="text">商品展示图(最多传1张)</span>
			</div>
			<div class="uploadPic paddingWing">
				<div class="margT10">
					<van-uploader v-model="form.fileShowList" multiple image-fit='cover' :max-count="1"  :before-read="beforeRead"/>
				</div>
			</div> -->
			<div class="label">
				<span class="star">*</span>
				<span class="text">证明详情图(最多传3张)</span>
			</div>
			<div class="uploadPic paddingWing">
				<div class="margT10">
					<van-uploader v-model="form.fileDetailList" multiple image-fit='cover' :max-count="3"  :before-read="beforeRead"/>
				</div>
				<div class="placeholderLine10"></div>
			</div>
			<!-- <div class="label">
				<span class="star">*</span>
				<span class="text">商家收款码(支付宝+微信)</span>
			</div> -->
			<!-- <div class="uploadPic paddingWing">
				<div class="margT10">
					<van-uploader v-model="form.filePaymentList" multiple image-fit='cover' :max-count="2"  :before-read="beforeRead"/>
				</div>
			</div> -->
			<div class="sureBtn">
				<!-- <div class="tip">点击登录即表示您同意<span class="agreement">《服务协议》</span></div> -->
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" :loading="loading" @click="submit">提交</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				form:{
					title:'',
					story:'',
					needTicket:'',
					fileDetailList:[]
				},
				registerUrl:'',
				option1: [
					{ text: '平台券', value: 0 },
					{ text: '省市代理', value: 1 },
					{ text: '商家入驻', value: 2 },
					{ text: '其他', value: 3 }
				],
				raiseTip:'',
				loading:false
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			_this.raiseTip = _this.$api.raiseTip;
			// _this.handleGenerator();
			this.$nextTick(function () {
			      
			})
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			beforeRead(file) {
				let _this = this;
				console.log("fileSize:",file.size);
				if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
					_this.$toast('请上传 jpg/png 格式图片');
					return false;
				}
				if (file.size/1024>300) {
					Dialog.alert({
					  title: '系统提示',
					  message: '所上传图片大小超过了300KB，请先压缩后再上传(微信转发后再保存，用保存后的照片上传试试)'
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
				if(flag == 'title'){
					if(_this.form.title==''){
						_this.$toast('请填写申请帮扶的标题');
						return;
					}
				}else if(flag == 'story'){
					if(_this.form.story==''){
						_this.$toast('请填写您的自我介绍或故事');
						return;
					}
				}else if(flag == 'needTicket'){
					if(_this.form.needTicket==''){
						_this.$toast('请填写所需要帮扶券');
						return;
					}
				}
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			submit(){
				let _this = this;
				// _this.$toast(`即将开放`);
				
				let pic=[];
				_this.form.fileDetailList.forEach((item,index)=>{
					pic.push(item.content);
				})
				let params = {
					title:_this.form.title,
					needTicket:_this.form.needTicket,
					story:_this.form.story,
					pic:pic.join('|'),
				}
				//console.log('params',params);
				if(_this.$utils.hasNull(params)){
					_this.$toast(`请填写完整信息`);
				}else{
					_this.loading = true;
					_this.$ajax.ajax(_this.$api.insertAssistRaise, 'POST', params, function(res){
						//console.log('res',res);
						if(res.code == _this.$api.CODE_OK){
							//_this.$toast(`提交成功，请等待审核`);
							Dialog.alert({
								title: "系统提示",
								message: "提交成功，请等待审核"
							}).then(() => {
							  // on confirm
							  _this.back();
							})
						}else{
							Dialog.alert({
								title: "系统提示",
								message: res.message
							}).then(() => {
							  // on confirm
							})
						}
					},function(){
						_this.loading = false;
					});
				}
			},
		}
	}
</script>
