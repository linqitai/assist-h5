<style lang="scss">
	@import '~@/assets/scss/index.scss';

	.noticeDetail {
		@include page4Home();
		color: $mainTextColor;
		padding: 0 $boxPadding2;
		box-sizing: border-box;
		.title{
			font-size: $fs-title;;
			text-align: center;
			line-height: 2em;
			font-weight:bold;
		}
		.line{
			overflow: hidden;
			clear: both;
			font-size: $fs-decorate;
		}
		.content{
			font-size: $fs-content;
			margin-top: 7px;
			line-height: 1.3em;
		}
	}
</style>
<template>
	<div>
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				公告详情
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="noticeDetail">
			<div class="title">
				{{obj.noticeTitle}}
			</div>
			<div class="content" v-if="obj.noticeContent" v-html="obj.noticeContent"/>
			<div class="line textRight margT10">
				{{obj.createTime}}
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js'

	export default {
		// name: 'home',
		components: {
			mHeader
		},
		data() {
			return {
				id: "",
				obj: {},
				message:''
			}
		},
		mounted() {
			let _this = this;
			_this.id = _this.$route.query.id;
			console.log('_this.id', _this.id);
			_this.getNoticeDetail();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getNoticeDetail() {
				let _this = this;
				_this.$ajax.ajax(_this.$api.getNoticeDetail, 'GET', {
					"id": _this.id
				}, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.obj = res.data;
						console.log("-------" + _this.obj.noticeContent);
					}
				})
			}
		}
	}
</script>

<style>
</style>
