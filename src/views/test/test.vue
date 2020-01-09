<style scoped lang="scss">
	@import '~@/assets/scss/variable.scss';
	.millContent{
		color: $mainTextColor;
		margin-top: $header-height + $marginTop2;
		// [class*=van-hairline]::after{
		// 	border: 0 solid transparent;
		// }
		.getMineral{
			margin-top: $marginTop2;
		}
		.millList{
			background-color: $main-box-color;
			margin-top: $marginTop2;
			.item{
				display: flex;
				padding: $boxPadding2;
				border-bottom:1px solid $main-color;
				&::last-child{
					border-bottom:1px solid transparent;
				}
				.flex1{
					flex: 0 0 50px;
					display:flex;
					align-items: center;
				}
				.flex2{
					padding-left: 0.75rem;
					flex: 1;
					.line1{
						.millName{
							font-size: 0.875rem;
						}
						.status{
							font-size: 0.75rem;
							margin-left: 0.625rem;
						}
						.isGet{
							height: 14px;
							line-height: 14px;
							font-size: 12px;
							border-radius: 0 10px 10px 0;
							padding: 0 6px 0 4px;
							margin-left: 10px;
						}
						.isGetBgColor{
							background-color: $main-adorn-color;
						}
						.notGetBgColor{
							background-color: $warnColor;
						}
					}
					.line2,.line3,.line4,.line5{
						font-size: 0.75rem;
						margin-top: 3px;
					}
					
				}
				.flex3{
					flex: 0 0 80px;
					.line1{
						font-size: 0.75rem;
						text-align: center;
					}
					.line2{
						font-size: 0.75rem;
						padding-top: 0.5rem
					}
				}
			}
		}
	}
	
</style>
<template>
  <div class="thisPage">
	  <m-header>
	  	<div class="text">
	  		测试
	  	</div>
	  	<i class="iconfont iconfont-question right-icon"></i>
	  </m-header>
	  <div class="millContent">
		  <!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
		  <van-button type="primary" @click="testUrl()">获取信息</van-button> -->
	  </div>
	  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { ajax } from "@/api/ajax";
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			activeName:"myMill"
		}
	},  
	components:{
	    mHeader
	},
	created() {
		let _this = this;
		_this.initializeTabActiveName();
	},
	methods:{
		initializeTabActiveName(){
			let _this = this;
			if(_this.$cookies.isKey("mill_tab_name")){
				_this.activeName = _this.$cookies.get("mill_tab_name");
			}
		},
		tabChange(name,title){
			console.log(name,title);
			this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
		}
	}
}
</script>
