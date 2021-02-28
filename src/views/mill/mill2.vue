<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.millPage{
		@include pageNoHeight4Scroll();
		.van-sticky--fixed{
			top: 47px !important;
		}
		.van-sticky{
			border-bottom: 1px solid $bottomLineColor;
		}
		.isShowMineralNum{
			color: $grayDarker;
		}
		[class*=van-hairline]::after {
		    border: 1px solid #c7c7c7 !important;
		}
		.millContent{
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			min-height: 100%;
			position: absolute;
			width: 100%;
			.van-list__finished-text{
				color: inherit !important;
			}
			.tip{
				font-size:12px;
				line-height: 1.2em;
				letter-spacing: 1px;
				color: white;
				background-color: $main-adorn-color;
				padding-top: 8px;
				padding-bottom: 8px;
			}
			.tabTitle{
				display: flex;
				align-items: center;
				align-content: center;
				justify-content: center;
			}
			.millList{
				overflow: hidden;
				height: 100%;
				.item{
					position: relative;
					display: flex;
					padding: $boxPadding2;
					border-bottom:1px solid $bottomLineColor;
					align-items: center;
					align-content: center;
					justify-content: center;
					&::last-child{
						border-bottom:1px solid transparent;
					}
					.tagIcon{
						position: absolute;
						right: 0;
						top: 0;
						height: 20px;
						width: 38px;
						font-size: 20px;
					}
					.tagIconText{
						position: absolute;
						right: 10px;
						top: 4px;
						font-size: 11px;
					}
					.tag0{
						color: $main-blue-color;
					}
					.tag1{
						color: $main-adorn-color;
					}
					.tag2{
						color: $warnColor;
					}
					.flex1{
						flex: 0 0 50px;
						display:flex;
						align-items: center;
						.machingBox{
							height: 90px;
							line-height: 90px;
							width: 70px;
							background-color: $main-blue-color;
							text-align: center;align-items: center;
							position: relative;
							$heightwidht:40px;
							.name{
								width: $heightwidht;
								height: $heightwidht;
								// border-radius: $heightwidht;
								background-color: $main-box-color;
								color: $main-adorn-color;
								text-align: center;
								line-height: $heightwidht;
								font-size: 20px;
								font-weight: bolder;
								margin-left: 15px;
								margin-top: 25px;
							}
						}
					}
					.flex2{
						padding-left: 8px;
						flex: 1;
						.line1{
							.millName{
								font-weight: bold;
								font-size: 1rem;
							}
							.calcullatePower{
								font-size: 0.687rem;
								margin-left: 4px;
							}
							.status{
								font-size: 0.75rem;
								margin-left: 4px;
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
						.line,.line2,.line3,.line4,.line5{
							font-size: 0.75rem;
							margin-top: 3px;
						}

					}
					.flex3{
						flex: 0 0 70px;
						.line{
							font-size: 0.75rem;
							text-align: center;
						}
					}
					.tag {
						font-size: 11px;
						border-radius: 10px 10px 10px 10px;
						padding: 2px 8px;
						&.tag0{
							background-color: $main-blue-color;
						}
						&.tag1{
							background-color: $main-purple-color;
						}
						&.tag2{
							background-color: $warnColor;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="millPage">
		<!-- <m-header>
			<i class="leftBox"></i>
			<div class="text">
				矿机商城
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header> -->
		<div class="millContent">
			
			<!-- <div class="selectBox">
				<div class="selectLeft">
					<van-dropdown-menu>
					  <van-dropdown-item v-model="tag" :options="option1" @change="refresh"/>
					</van-dropdown-menu>
				</div>
			</div> -->
			<div class="tip4model3 paddingWing tip justify" v-if="tag==8">算力矿机的挖矿模式犹如存本金，然后每日领取利息。复投说明：复投算力矿机需要质押所需租金，待签约时长到期后才会退还租金，若提前解约退还租金，需收取10%租金的解约费(一周年之后所复投的算力矿机统一需等运行周期到期后自动解约)。算力挖矿的每日领取收益=(个人算力矿机总算力+个人算力/100)/全网总算力*当日全网挖矿总产量，算力挖矿产量类似于比特币挖矿的产出方式，参与的人越多会越难挖。</div>
			<div class="tip4model3 paddingWing tip justify" v-if="tag==0">复投常规矿机需要先推广或者最近一个月有买入。若没推广也没买入的，可以复投算力矿机，然后通过每天签到获得复投额度。</div>
			<van-pull-refresh v-model="loading" @refresh="refresh">
				<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
					
					<van-tab title="算力矿机" name="mill2">
						<van-list v-model="loadingMillShop" :finished="finishedMillShop" finished-text="没有更多了">
							<div class="millList">
								<div class="item" v-for="item in millShopList" :key="item.id">
									<!-- <div class="flex flex1">
										<div class="machingBox">
											<div class="name">{{item.type | machineType4Pic}}</div>
										</div>
									</div> -->
									<div class="flex flex2">
										<div class="line1">
											<span class="millName">{{item.type | machineTypeType}}</span>
											<span class="calcullatePower">算力 {{item.calculationPower}}GH/s</span>
										</div>
										<div class="line">租金 {{item.price}} 矿石</div>
										<!-- <div class="line">增加流通值 <b class="yellow">{{item.type<10?(parseFloat(item.price)/2).toFixed(2):(parseFloat(item.price)).toFixed(2)}}</b></div> -->
										<div class="line">签约时长 {{item.allRuntime}}小时</div>
										<div class="line">复投上限 <b class="yellow">{{item.limitBuy}}</b>台 <b class="margL10">当前拥有</b> <b class="yellow">{{item.haveMill}}</b>台</div>
									</div>
									<div class="flex flex3">
										<div class="line margT3 animated bounce faster">
											<van-button round type="info" @click="buyMill(item)" :disabled="item.inventory==0" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">复投</van-button>
										</div>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					<van-tab title="常规矿机" name="mill1">
						<van-list v-model="loadingMillShop" :finished="finishedMillShop" finished-text="没有更多了">
							<div class="millList">
								<div class="item" v-for="item in millShopList" :key="item.id">
									<div class="flex flex2">
										<div class="line1">
											<span class="millName">{{item.type | machineTypeType}}</span>
											<span class="calcullatePower">算力 {{item.calculationPower}}GH/s</span>
										</div>
										<div class="line">租金 {{item.price}} 矿石</div>
										<div class="line" v-if="tag==0">总产 {{item.totalOutput}} 矿石</div>
										<div class="line" v-if="tag==0">日产 <b class="yellow">{{(parseFloat(item.totalOutput)/parseFloat(item.allRuntime)*24).toFixed(2)}}</b> 矿石</div>
										<div class="line" v-if="tag==8">签约时长 {{item.allRuntime}}小时</div>
										<div class="line">复投上限 <b class="yellow">{{item.limitBuy}}</b>台 <b class="margL10">当前拥有</b> <b class="yellow">{{item.haveMill}}</b>台</div>
									</div>
									<div class="flex flex3">
										<div class="line margT3 animated bounce faster">
											<van-button round type="info" @click="buyMill(item)" :disabled="item.inventory==0" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">复投</van-button>
										</div>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
				</van-tabs>
			</van-pull-refresh>
		</div>
		<!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
	  <van-button type="primary" @click="testUrl()">获取信息</van-button> -->
	  <!-- <van-dialog v-model="showSelectBox" title="请选择用什么复投" :show-cancel-button="true" :show-confirm-button="true" @confirm="sureBuyMillEvent"> -->
	  <van-dialog v-model="showSelectBox" title="请选择用什么复投" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
	  		<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">当前可用矿石：{{userInfo.thisWeekMineral}}</div>
				<div class="placeholderLine10"></div>
				<div class="f-14">当前可用贡献值：{{userInfo.contributionValue}}</div>
				<div class="placeholderLine10"></div>
				<div class="f-14">复投此矿机要花{{price}}个矿石或者贡献值</div>
				<div class="placeholderLine10"></div>
				<div class="f-14" v-if="tag==0">最近30天累计买入了{{monthBuyNum}}个矿石</div>
				<div class="f-14 margT3" v-if="tag==0">最近30天的新增直推中有{{buy10MineralNumIn30Day}}人完成了进阶任务</div>
				<div class="placeholderLine10"></div>
				<van-radio-group v-model="selectRadioValue" @change="selectRadioChange">
				  <van-radio name="1">矿石</van-radio>
				  <div class="placeholderLine10"></div>
				  <van-radio name="2">贡献值</van-radio>
				</van-radio-group>
				<!-- <van-field v-model="securityCode" center clearable placeholder="请输入右边的图形验证码" @blur="validate('securityCode')" :error-message="errorHint.securityCode">
					<van-button slot="button" size="small" type="primary" @click="getSecurityCode">{{securityCode}}</van-button>
				</van-field> -->
				<div class="placeholderLine20"></div>
				<van-field v-model="safePassword" label="安全密码" required type="password" clearable placeholder="请填写安全密码"/>
				<div class="placeholderLine10"></div>
				<div class="tip4modelNew">安全密码是实名的时候所设置的安全(交易)密码</div>
				<div class="placeholderLine10"></div>
			</div>
			<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">复投</van-button> -->
			<van-button type="info" size="large" @click="sureBuyMillEvent" :loading="buyMillLoading" :disabled="buyMillLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">复投</van-button>
	  </van-dialog>
	  <van-dialog v-model="showReceiptTip" :title="receiptModelTile" :show-confirm-button="isShowConfirmButton">
		<div class="placeholderLine20"></div>
	    <div class="paddingWing textCenter">
			<van-loading type="spinner" color="#1989fa" v-if="isShowReceiptLoading"/>
			<div class="margT10 isShowMineralNum" v-if="isShowMineralNum">{{mineralNumTip}}</div>
		</div>
		<div class="placeholderLine20"></div>
		<div class="placeholderLine20"></div>
	  </van-dialog>
	  <van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
	  	<div class="paddingWing f-12 lineHeight tip4model2">
	  		<div class="textIndent">
	  			{{$api.tip4ReduceMill}}
	  		</div>
			<div class="placeholderLine10"></div>
	  	</div>
	  </van-dialog>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	// import { ajax } from "@/api/ajax";
	import mHeader from '@/components/Header.vue';
	import { Dialog,Toast } from 'vant';
	import { myMixin } from '@/assets/js/myMixin.js';
	import { mapState } from 'vuex';
	export default {
		name:"mill",
		mixins:[myMixin],
		data() {
			return {
				option1: [
					{ text: '常规矿机', value: 0 },
					{ text: '算力矿机', value: 8 },
				],
				tag:8,
				safePassword:'',
				buyMillLoading:false,
				selectRadioValue:'1',
				loading: false,
				showTipModel:false,
				activeName: "mill2",
				loadingMyMill: false,
				finishedMyMill: false,
				finishedMyMillText:'',
				myMillList:[],
				loadingMillShop: false,
				finishedMillShop: false,
				millShopList: [],
				loadingPastMill: false,
				finishedPastMill: false,
				pastMillList:[],
				miningMachine: [],
				errorHint:{
					securityCode:''
				},
				userInfo:'',
				showReceiptTip:false,
				showSelectBox:false,
				isShowReceiptLoading: true,
				mineralNumTip:'',
				isShowMineralNum:false,
				receiptModelTile:"领取结果计算中",
				isShowConfirmButton:false,
				price:'',
				machineId:'',
				myMill:'',
				monthBuyNum:0,
				buy10MineralNumIn30Day:0,
				commonMill:[],
				cpMill:[],
				commonMill4Shop:[],
				cpMill4Shop:[],
			}
		},
		components: {
			mHeader
		},
		computed:{
			...mapState(['commonMill','cpMill','commonMill4Shop','cpMill4Shop'])
		},
		created() {
			let _this = this;
			if (_this.$cookies.isKey("mill_tab_name")) {
				_this.activeName = _this.$cookies.get("mill_tab_name");
				if(_this.activeName == 'mill1'){
					_this.tag = 0;
					_this.refresh();
				}else{
					_this.tag = 8;
					_this.refresh();
				}
			}else{
				_this.tag = 8;
				_this.refresh();
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			tagColor(tag){
				if(tag==0){
					return 'tag0'
				}else if(tag==1){
					return 'tag1'
				}else if(tag==2){
					return 'tag2'
				}else if(tag==3){
					return 'tag2'
				}else if(tag==4){
					return 'tag2'
				}
			},
			getUserInfo() {
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						//console.log(_this.userInfo,"userInfo");
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
					}else{
						_this.$toast(res.message);
					}
				})
			},
			selectRadioChange(value){
				////console.log(value);
			},
			validate(key){
				let _this = this;
				if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			},
			refresh(){
				let _this = this;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				let url = '';
				let params = {}
				if(_this.tag == 0){
					url = _this.$api.getAssistMyMachineByStatus01;
					//_this.$store.dispatch('getAssistMyMachineByStatus01', params)
				}
				if(_this.tag == 8){
					url = _this.$api.getAssistMyNewMachineByStatus01;
				}
				_this.$ajax.ajax(url, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let myMill = res.data;
						_this.myMill = myMill;
						_this.onLoadMillShop();
					}else{
						_this.$toast(res.message);
					}
				},function(){
					Toast.clear();
				})
			},
			/* refresh(){
				let _this = this;
				Toast.loading({
				  message: '加载中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				let url = '';
				if(_this.tag == 0){
					url = _this.$api.getAssistMyMachineByStatus01;
				}
				if(_this.tag == 8){
					url = _this.$api.getAssistMyNewMachineByStatus01;
				}
				_this.$ajax.ajax(url, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let myMill = res.data;
						_this.myMill = myMill;
					}else{
						_this.$toast(res.message);
					}
				},function(){
					Toast.clear();
				})
			}, */
			buyMill(item){
				let _this = this;
				_this.showSelectBox = true;
				_this.price = item.price;
				_this.machineId = item.id;
				if(_this.tag==0){
					_this.getMonthBuyNum();
				}
				// Dialog.confirm({
				//   title: '确认弹窗',
				//   message: `您当前可用矿石${_this.userInfo.thisWeekMineral}个,复投此矿机要花${item.price}矿石,是否确定复投？`
				// }).then(() => {
				//   // on confirm
				//   if(_this.userInfo.thisWeekMineral<item.price){
				// 	  _this.$toast(_this.$api.DATA_102);
				//   }else{
				// 	  _this.sureBuyMillEvent(item.id);
				//   }
				// }).catch(() => {
				//   // on cancel
				// });
			},
			getMonthBuyNum(){
				let _this = this;
				Toast.loading({
				  message: '复投中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.getMonthBuyNumAndBuyMill0Info, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.monthBuyNum = res.data.getMonthBuyNum;
						_this.buy10MineralNumIn30Day = res.data.getBuy10MineralNumIn30Day;
					}else{
						_this.$toast(res.message);
						_this.showSelectBox = false;
					}
				},function(){
					Toast.clear();
				})
			},
			requestBuyMillUrl(){
				let _this = this;
				_this.showSelectBox = false;
				_this.buyMillLoading = true;
				if(_this.selectRadioValue==1){
					if(_this.userInfo.thisWeekMineral<_this.price){
						_this.$toast("您所拥有的矿石不够复投该矿机");
						_this.buyMillLoading = false;return;
					}
				}else if(_this.selectRadioValue==2){
					if(_this.userInfo.contributionValue<_this.price){
						_this.$toast("您所拥有的贡献值不够复投该矿机");
						_this.buyMillLoading = false;return;
					}
				}
				// if(_this.userInfo.manType==1){
				// 	if(_this.userInfo.realnameNum<30||_this.userInfo.teamCalculationPower<30||_this.userInfo.buyAmount<300){
				// 		Dialog.alert({
				// 		  title: '系统提示',
				// 		  message: _this.$api.manType1Tip
				// 		}).then(() => {
				// 		  // on close
				// 		});
				// 		return;
				// 	}
				// }
				let params = {
					/* userId:_this.userInfo.userId, */
					machineId:_this.machineId,
					use:_this.selectRadioValue,
					safePassword:_this.safePassword
				}
				Toast.loading({
				  message: '复投中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				params.safePassword = _this.$JsEncrypt.encrypt(params.safePassword);
				_this.safePassword='';
				_this.$ajax.ajax(_this.$api.insertAssistMyMachine, 'POST', params, function(res) {
					Toast.clear();
					if (res.code == _this.$api.CODE_OK) {
						Dialog.alert({
						  title: '系统提示',
						  message: res.data == 1?'复投成功':'复投失败'
						}).then(() => {
						  // on close
						  if(res.data==1){
							  _this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime8h);
							  if(_this.tag==0){
								  _this.$router.push('myMill');
							  }
							  if(_this.tag==8){
							  	  _this.$router.push('myMill2');
							  }
						  }
						});
					}else {
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  
						});
						return;
					}
				},function(){
					_this.buyMillLoading = false;
					Toast.clear();
				})
			},
			sureBuyMillEvent(){
				let _this = this;
				if(_this.safePassword==''||_this.safePassword==null){
					_this.$toast("安全密码不能为空");
					return;
				}
				_this.requestBuyMillUrl();
				/* _this.buyMillLoading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.userInfo = res.data;
						//console.log(_this.userInfo,"userInfo");
						localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						_this.requestBuyMillUrl();
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.buyMillLoading = false;
				}) */
			},
			dealMillData(shopMill,myMill){
				let type1,type2;
				let tag1,tag2;
				let millShopList = shopMill;
				for(let i=0;i<millShopList.length;i++){
					 millShopList[i].haveMill = 0;
				}
				for(let i=0;i<millShopList.length;i++){
					type1 = millShopList[i].type;
					tag1 = millShopList[i].tag;
					for(let j=0;j<myMill.length;j++){
						if(myMill[j].tag==0||myMill[j].tag==8){
							type2 = myMill[j].type;
							tag2 = myMill[j].tag;
							if(type1==type2&&tag1==tag2){
								millShopList[i].haveMill = millShopList[i].haveMill+1;
							}
						}
					}
				}
				return millShopList;
			},
			getMillShopByTag(setTagText){
				let _this = this;
				let params = {
					tag: _this.tag
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistMiningMachineListByTag, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let millShopList = res.data;
						_this.$store.commit(setTagText,res)
						//console.log("cpMill4Shop",_this.$store.getters.getCpMill4Shop);
						let myMill = _this.myMill;
						_this.millShopList = _this.dealMillData(millShopList,myMill);
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(){
					_this.loading = false;
					_this.loadingMillShop = false;
					_this.finishedMillShop = true;
				})
			},
			onLoadMillShop() {
				let _this = this;
				if(_this.tag==8){
					if(_this.$store.getters.getCpMill4Shop.length>0){
						_this.millShopList = _this.dealMillData(_this.$store.getters.getCpMill4Shop,_this.myMill);
					}else{
						_this.getMillShopByTag('setAssistMiningMachineListByTag')
					}
				}else{
					if(_this.$store.getters.getCommonMill4Shop.length>0){
						_this.millShopList = _this.dealMillData(_this.$store.getters.getCommonMill4Shop,_this.myMill);
					}else{
						_this.getMillShopByTag('setAssistMiningMachineListByTag0')
					}
				}
				_this.loading = false;
			},
			tabChange(name, title) {
				//console.log(name, title);
				let _this = this;
				// _this.tabName = name;
				_this.activeName == name;
				_this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
				//console.log(name,title);
				if(name == 'mill1'){
					_this.tag = 0;
					_this.refresh();
				}else{
					_this.tag = 8;
					_this.refresh();
				}
				//localStorage.setItem('tag',_this.tag);
			}
		}
	}
</script>