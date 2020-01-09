<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
.wrapper{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	background: $main-bg-color;
	box-sizing: border-box;
	.wrapperIn{
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
		.header{
			flex: 0 0 $headerHeight;
			color: $mainTextColor;
			background: $main-box-color;
			display: flex;
			flex-direction: row;
			align-items: center;
			align-content: center;
			justify-content: center;
			border-bottom: 0.0625rem solid $bottomLineColor;
			// position: absolute;
			// top: 0;
			width: 100%;
			z-index: 1;
			.leftBox{
				flex: 0 0 70px;
				font-size: 0.75rem;
				padding-left: $boxPadding2;
				height: $headerHeight;
				line-height: $headerHeight;
			}
			.centerBox{
				flex: 1;
				text-align: center;
				font-size: 16px;
				line-height: $headerHeight;
				height: $headerHeight;
			}
			.rightBox{
				flex: 0 0 70px;
				text-align: right;
				padding-right: $boxPadding2;
				height: $headerHeight;
				line-height: $headerHeight;
				.text{
					font-size: 0.75rem;
				}
				.icon{
					font-size: 20px;
				}
			}
		}
		.body {
			// margin-top: $headerHeight;
			position: relative;
			height: 100%;
			flex: 1;
			overflow-y: scroll;
		}
		.footer {
		  // position: fixed;
		  // bottom: 0;
		  // left: 0;
		  flex: 0 0 $footerHeight;
		  background: $main-bg-color;
		  width: 100%;
		  // height: $footerHeight;
		  border-top: 1px solid $bottomLineColor;
		}
	}
}
</style>
<template>
	<div class="wrapper">
		<div class="wrapperIn">
			<div class="header">
				<div class="leftBox" @click="back">
					<i class="iconfont iconfont-left-arrow" v-if="$route.meta.back"></i>
				</div>
				<div class="centerBox">
					{{$route.name}}
				</div>
				<div class="rightBox">
					<i class="iconfont iconfont-question icon" v-if="$route.meta.question" @click="showTip('deal')"></i>
				</div>
			</div>
			<div class="body">
			  <!-- <keep-alive> -->
				<!-- <router-view></router-view> -->
			  <!-- </keep-alive> -->
				<transition name="van-fade">
					<router-view></router-view>
				</transition>
			</div>
			<div class="footer" v-if="$route.meta.footer">
				<m-tabbar></m-tabbar>
			</div>
			<van-dialog v-model="showTipModel4Wrapper" title="提示小帮手" confirmButtonText="已晓得">
				<div class="paddingWing f-12 lineHeight textJustify tip4model2">
					<div>
						1.交易前，需先去完成'我的--任务中心'里的基础任务。
					</div>
					<div class="placeholderLine4"></div>
					<div>
						2.等级为青铜以上的用户（包含青铜）才有权限在溢价市场卖出。
					</div>
					<div class="placeholderLine4"></div>
					<div>
						3.交易后所剩矿石数不得少于2个，至少要保留注册所赠送的2个矿石，用来复投矿机。
					</div>
				</div>
			</van-dialog>
		</div>
	</div>
</template>

<script>
import mTabbar from '@/components/Tabbar.vue';
export default {
	props: {
		msg: String
	},
	data() {
		return {
			showTipModel4Wrapper:false,
			fullscreen:false,
			phoneType:"",
			is2883:"",
		}
	},
	watch:{
		$route(now,old){
			let _this = this;
			_this.$utils.scrollTop();
			console.log("scrollTop");
		},
	},
	components:{
	    mTabbar
	},
	beforeCreate() {
		console.log("beforeCreate");
		//这里得加一个手势识别
	},
	created() {
		let _this = this;
		/* var u = navigator.userAgent; 
		_this.is2883 = u.indexOf('2883')>0;
		if (/(iPhone|iPad|iPod|iOS)/i.test(u)) { 
			_this.phoneType = 'i';
		 }
		 if (/(Android)/i.test(u)) { 
			_this.phoneType = 'a';
		 } 
		 if (_this.is2883) { 
			_this.phoneType = 'pt';
		 } */
		// _this.handleFullScreen();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		showTip(type){
			this.showTipModel4Wrapper = true;
			if(type=="deal"){
				
			}
		},
		touchStart:function(ev) {
			let _this = this;
			ev = ev || event;
			// ev.preventDefault();
			console.log(ev.targetTouches);
			// console.log(ev.changedTouches);
			// if(ev.touches.length == 1) {    //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
			// 	this.startX = ev.touches[0].clientX; // 记录开始位置
			// }
			// if(_this.fullscreen==false){
			// 	console.log('_this.fullscreen',_this.fullscreen)
			// 	_this.handleFullScreen();
			// }
		},
	}
}
</script>
