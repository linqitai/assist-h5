<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	.rotaryTable {
		width: 100%;
		height: 100%;
		position: relative;
		margin: auto;
		border: 1px solid white;
		box-sizing: border-box;

		/* .award {
			width: 90px;
			height: 96px;
			line-height: 96px;
			text-align: center;
			float: left;
			position: absolute;
			overflow: hidden;
			background-color: aquamarine;

			&.active {
				background-color: darkgoldenrod;
			}

			&.award0 {
				top: 21px;
				left: 21px;
			}

			&.award1 {
				top: 21px;
				left: 125px;
			}

			&.award2 {
				top: 21px;
				right: 22px;
			}

			&.award3 {
				top: 126px;
				right: 22px;
			}

			&.award4 {
				bottom: 22.5px;
				right: 22px;
			}

			&.award5 {
				bottom: 22.5px;
				right: 125.5px;
			}

			&.award6 {
				bottom: 22.5px;
				left: 21px;
			}

			&.award7 {
				top: 126px;
				left: 21px;
			}
		}

		.startBtn {
			position: absolute;
			top: 125px;
			left: 124px;
			width: 90px;
			height: 96px;
			line-height: 90px;
			text-align: center;
			background-color: coral;
		} */
		.box{
			display: felx;
			background-color: red;
			border: 1px solid white;
			text-align: center;
			justify-content: center;
			color: white;
			font-size: 0.75rem;
			&.active {
				background-color: $main-adorn-color;
			}
			&.bgc {
				font-size: 0.875rem;
				background-color: $main-adorn-color;
			}
		}
	}
</style>

<template>
	<div class="rotaryTable">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				{{$route.name}}
			</div>
			<i class="iconfont rightBox icon"></i>
		</m-header>
		<div style="width: 100%; height: 47px;"></div>
		<div class="tip4model3 paddingAll">
			是否有抽奖权限：{{userInfo.isGetShareTask==1?'有':'无'}} <van-button size="mini" color="linear-gradient(to right, #ffae00, #ff8400)"  @click="useMineralGetRaffleTime">用矿石兑换抽奖权限</van-button>
		</div> 
		<!-- <div class="award" v-for="(award,index) in awards" :key="index"
			:class="['award'+index,{'active': index==current}]">
			{{award.name}}
		</div> -->
		<!-- <div class="startBtn" @click="start">开始</div> -->
		<van-row>
		  <van-col span="8" class="box" :class="{active:1==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">1个额度</van-col>
		  <van-col span="8" class="box" :class="{active:2==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">1台微型矿机</van-col>
		  <van-col span="8" class="box" :class="{active:3==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">2个矿石</van-col>
		</van-row>
		<van-row>
		  <van-col span="8" class="box" :class="{active:8==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">一台中型矿机</van-col>
		  <van-col span="8" class="box bgc" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}" @click="start">开始</van-col>
		  <van-col span="8" class="box" :class="{active:4==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">10个额度</van-col>
		</van-row>
		<van-row>
		  <van-col span="8" class="box" :class="{active:7==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">2个额度</van-col>
		  <van-col span="8" class="box" :class="{active:6==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">一台小型矿机</van-col>
		  <van-col span="8" class="box" :class="{active:5==current}" :style="{height:screenWidth/3+'px',lineHeight:screenWidth/3+'px'}">10个矿石</van-col>
		</van-row>
		<div class="tip4model3 paddingAll">注：今日起，邀请一名会员完成实名后即可获得抽奖权限(抽奖权限只能使用一次，使用完后再邀请一名会员完成实名即可重新获得抽奖权限)</div> 
		<van-dialog v-model="showSelectBox" title="兑换抽奖权限" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">兑换抽奖权限需花10个矿石</div>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="placeholderLine10"></div>
				<div class="tip4modelNew">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">复投</van-button> -->
			<van-button type="info" size="large" @click="submit" :loading="submitLoading" :disabled="submitLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">确认</van-button>
		</van-dialog>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,Toast } from 'vant';
	import { myMixin } from '@/assets/js/myMixin.js';
	import { mapState } from 'vuex';
	
	export default {
		name: 'raffle',
		mixins:[myMixin],
		components: {
			mHeader
		},
		data() {
			return {
				showSelectBox: false,
				submitLoading: false,
				safePassword:'',
				current: 0,
				awards: [{
						id: 1,
						name: '1个额度'
					},
					{
						id: 2,
						name: '1台微型矿机'
					},
					{
						id: 3,
						name: '2个矿石'
					},
					{
						id: 4,
						name: '10个额度'
					},
					{
						id: 5,
						name: '10个矿石'
					},
					{
						id: 6,
						name: '一台小型矿机'
					},
					{
						id: 7,
						name: '2个额度'
					},
					{
						id: 8,
						name: '一台中型矿机'
					}
				],
				speed: 200,
				diff: 15,
				award: {
					id: 1
				},
				time: 0,
				screenWidth: 360
			};
		},
		computed:{
			...mapState(['userInfo'])
		},
		mounted() {
			this.screenWidth = window.screen.width
			this.getUserInfo()
		},
		methods: {
			back(){
				console.log('back');
				this.$router.go(-1);
			},
			start() {
				// 开始抽奖
				this.drawAward();
			},
			useMineralGetRaffleTime(){
				let _this = this;
				_this.showSelectBox = true;
			},
			submit(){
				let _this = this;
				Toast.loading();
				let params = {
					safePassword:_this.safePassword
				}
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.safePassword='';
				_this.$ajax.ajax(_this.$api.useMineralGetRaffleTime, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.showSelectBox = false;
						_this.getUserInfo()
						Dialog.alert({
						  title: '提示信息',
						  message: '兑换成功'
						}).then(() => {
						  // on confirm
						})
					}else{
						Dialog.alert({
						  title: '提示信息',
						  message: res.message
						}).then(() => {
						  // on confirm
						})
					}
				},function(res){
					Toast.clear()
					_this.showSelectBox = false;
				})
			},
			drawAward() {
				// 请求接口, 这里我就模拟请求后的数据(请求时间为2s)
				let _this = this;
				Toast.loading();
				_this.$ajax.ajax(_this.$api.getRaffleReword, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.award = {
							id: res.data
						};
						_this.time = Date.now();
						_this.speed = 200;
						_this.diff = 15;
						_this.move();
					}else{
						Dialog.alert({
						  title: '提示信息',
						  message: res.message
						}).then(() => {
						  // on confirm
						})
					}
				},function(res){
					Toast.clear()
				})
			},
			move() {
				let _this = this
				window.timeout = setTimeout(() => {
					_this.current++;
					if (_this.current > 8) {
						_this.current = 1;
					}
					if (_this.award.id && (Date.now() - _this.time) / 1000 > 2) {
						_this.speed += _this.diff;
						if ((Date.now() - _this.time) / 1000 > 4 && _this.award.id == _this.awards[_this.current-1].id) {
							clearTimeout(window.timeout);
							console.log('恭喜你，抽中了' + _this.awards[_this.award.id-1].name);
							Dialog.alert({
							  title: '提示信息',
							  message: `恭喜你，抽中了${_this.awards[_this.award.id-1].name}`
							}).then(() => {
							  // on confirm
							})
							return;
						}
					} else {
						_this.speed -= _this.diff;
					}
					// this.$forceUpdate()
					_this.move();
				}, _this.speed);
			}
		}
	}
</script>
