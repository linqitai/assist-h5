<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.mySuperTeamPage {
		@include pageMy();
		.van-tab{
			font-size: 0.75rem;
		}
		.myTeamContent {
			// margin-top: $header-height;
			min-height: 100%;
			background-color: $main-bg-color;
			color: $mainTextColor;
			.top1 {
				display: flex;
				align-content: center;
				align-items: center;
				justify-content: center;
				padding: $boxPadding2 2px;
				background-color: $main-box-fh-bg-color;
				color: $main-box-fh-text-color;
				.flex1 {
					flex: 0 0 84px;
					text-align: center;
					$heightwidht:60px;
					.name{
						margin-left: $boxPadding2;
						width: $heightwidht;
						height: $heightwidht;
						border-radius: $heightwidht;
						background-color: $main-blue-color;
						color: $main-box-fh-text-color;
						text-align: center;
						line-height: $heightwidht;
						font-size: 22px;
					}
				}
				.flex2 {
					flex: 1;
					text-align: left;

					.line {
						line-height: 20px;
					}
				}
			}
			.list {
				.item {
					display: flex;
					padding: $boxPadding2;
					background-color: $main-box-color;
					align-content: center;
					align-items: center;
					justify-content: center;
					border-bottom:1px solid $mainBorderColor;
					&::last-child {
						border-bottom: 1px solid transparent;
					}
					.flex1 {
						flex: 0 0 50px;
						display: flex;
						align-items: center;
						$heightwidht:50px;
						.name{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 18px;
						}
					}
					.flex2 {
						padding-left: 6px;
						flex: 1;
						.iconfont{
							color:$main-green-color;
						}
						.line1 {
							.millName {
								font-size: 0.875rem;
							}
							.status {
								font-size: 0.75rem;
								margin-left: 0.625rem;
							}
							.isGet {
								height: 14px;
								line-height: 14px;
								font-size: 12px;
								border-radius: 0 10px 10px 0;
								padding: 0 6px 0 4px;
								margin-left: 10px;
							}
							.isGetBgColor {
								background-color: $main-adorn-color;
							}
							.notGetBgColor {
								background-color: $warnColor;
							}
						}
						.line2,
						.line3,
						.line4,
						.line5 {
							font-size: 0.75rem;
							margin-top: 3px;
						}
					}
					.flex3 {
						flex: 0 0 80px;
						text-align: right;
						.line2,
						.line3,
						.line4,
						.line5 {
							font-size: 0.75rem;
							margin-top: 3px;
						}
					}
					.flex4 {
						flex: 0 0 10px;
						font-size: 0.625rem;
						color: #c7c7c7;
						text-align: right;
					}
				}
			}
		}
		.van-field__label{
			width: 66px !important;
		}
		.van-cell{
			line-height: 32px !important;
		}
		.textAdornColor {
			color: $main-adorn-color !important;
		}
	}
</style>
<template>
	<div class="mySuperTeamPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我的工会
			</div>
			<i class="rightBox icon"></i>
			<!-- <i class="iconfont iconfont-share rightBox icon" @click="toView('myShare')"></i> -->
		</m-header>
		<div class="myTeamContent">
			<div class="top1" v-if="parentUserInfo">
				<div class="flex flex1">
					<div class="name">{{(parentUserInfo.realName) | getLastName}}</div>
					<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
				</div>
				<div class="flex flex2">
					<!-- <div class="line">上级昵称：{{(parentUserInfo.nickName)}}</div> -->
					<!-- <div class="line">上级电话：{{(parentUserInfo.mobilePhone)}} <span class="copy" @click="handleCopy((parentUserInfo.mobilePhone),$event)">复制</span></div> -->
					<div class="line">上级微信：{{(parentUserInfo.wechartNum)}} <span class="copy" @click="handleCopy((parentUserInfo.wechartNum),$event)">复制</span></div>
					<div class="line">我的二代总人数：{{teamNum}}</div>
					<!-- <div class="line">因风控部门提供消息说三代奖励会有政策风险，团队上矿机三代贡献值收益分红的功能已终止研发，该奖励将会换成以全球分红的形式发放。</div> -->
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<div>
				<van-field v-model="mobilePhone" clearable label="手机号" placeholder="请填写直推的手机号" maxlength="11">
					<van-button slot="button" size="small" color="#ffae00" :loading="loading" @click="getUserInfo">查询</van-button>
				</van-field>
			</div>
			
			<div class="line1pxbgcolor"></div>
			<div>
				<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
					<van-tab :title="myShareText" name="myShare">
						<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1" :offset='100'>
							<div class="list">
								<div class="item" v-for="item in list1" :key="item.id">
									<div class="flex flex1">
										<div class="name">{{$JsCrypto.myDecode1(item.realName) | getLastName}}</div>
									</div>
									<div class="flex flex2">
										<div class="line1"><i class="iconfont iconfont-name"></i> {{$JsCrypto.myDecode1(item.nickName)}} {{item.level | getUserType}}</div>
										<div class="line2" v-if="item.wechartNum"><i class="iconfont iconfont-weichat"></i> {{$JsCrypto.myDecode1(item.wechartNum)}} <span class="copy" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
										<div class="line3"><i class="iconfont iconfont-mill"></i> {{item.myCalculationPower}}算力 战友数{{item.teamateNum}}个</div>
										<div class="line3"><i class="iconfont iconfont-clock"></i> 注册/实名时间 {{item.registerTime}}</div>
										<!-- <div class="line3"><i class="iconfont iconfont-clock"></i> 上次登录时间 {{item.lastLoginTime||'未知'}}</div> -->
									</div> 
									<!-- <div class="flex flex3">
										<div class="line2">{{item.level | getUserType}}</div>
										<div class="line3">战友数{{item.teamateNum}}个</div>
									</div> -->
									<div class="flex flex4" v-if="item.teamateNum>0" @click="toTeamView(item.userId,item.realnameNum)">
										<i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					<van-tab :title="activedText" name="actived">
						<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
							<div class="list">
								<div class="item" v-for="item in list2" :key="item.id">
									<div class="flex flex1">
										<div class="name">{{$JsCrypto.myDecode1(item.realName) | getLastName}}</div>
									</div>
									<div class="flex flex2">
										<div class="line1"><i class="iconfont iconfont-name"></i> {{$JsCrypto.myDecode1(item.nickName)}} {{item.level | getUserType}}</div>
										<div class="line2"><i class="iconfont iconfont-weichat" v-if="item.wechartNum"></i> {{$JsCrypto.myDecode1(item.wechartNum)}} <span class="copy" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
										<div class="line3"><i class="iconfont iconfont-mill"></i> {{item.myCalculationPower}}算力 战友数{{item.teamateNum}}个</div>
										<div class="line3"><i class="iconfont iconfont-clock"></i> 注册/实名时间 {{item.registerTime}}</div>
										<!-- <div class="line3"><i class="iconfont iconfont-clock"></i> 上次登录时间 {{item.lastLoginTime||'未知'}}</div> -->
									</div>
									<!-- <div class="flex flex3">
										<div class="line2">{{item.level | getUserType}}</div>
										<div class="line3">战友数{{item.teamateNum}}个</div>
									</div> -->
									<div class="flex flex4" v-if="item.teamateNum>0"  @click="toTeamView(item.userId,item.realnameNum)">
										<i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					<van-tab :title="validText" name="validNum">
						<van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoad4">
							<div class="list">
								<div class="item" v-for="item in list4" :key="item.id">
									<div class="flex flex1">
										<div class="name">{{$JsCrypto.myDecode1(item.realName) | getLastName}}</div>
									</div>
									<div class="flex flex2">
										<div class="line1"><i class="iconfont iconfont-name"></i> {{$JsCrypto.myDecode1(item.nickName)}} {{item.level | getUserType}}</div>
										<div class="line2"><i class="iconfont iconfont-weichat" v-if="item.wechartNum"></i> {{$JsCrypto.myDecode1(item.wechartNum)}} <span class="copy" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
										<div class="line3"><i class="iconfont iconfont-mill"></i> {{item.myCalculationPower}}算力 战友数{{item.teamateNum}}个</div>
										<div class="line3"><i class="iconfont iconfont-clock"></i> 注册时间 {{item.registerTime}}</div>
										<!-- <div class="line3"><i class="iconfont iconfont-clock"></i> 上次登录时间 {{item.lastLoginTime||'未知'}}</div> -->
									</div>
									<!-- <div class="flex flex3">
										<div class="line2">{{item.level | getUserType}}</div>
										<div class="line3">战友数{{item.teamateNum}}个</div>
									</div> -->
									<div class="flex flex4" v-if="item.validNum>0"  @click="toTeamView(item.userId,item.validNum)">
										<i class="iconfont iconfont-right-arrow2"></i>
									</div>
								</div>
							</div>
						</van-list>
					</van-tab>
					<van-tab :title="unactivedText" name="unactived">
						<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
							<div class="list">
								<div class="item" v-for="item in list3" :key="item.id">
									<div class="flex flex1">
										<div class="name">{{$JsCrypto.myDecode1(item.realName) | getLastName}}</div>
									</div>
									<div class="flex flex2">
										<div class="line1"><i class="iconfont iconfont-name"></i> {{$JsCrypto.myDecode1(item.nickName)}} {{item.level | getUserType}}</div>
										<div class="line2" v-if="item.wechartNum"><i class="iconfont iconfont-weichat"></i> {{$JsCrypto.myDecode1(item.wechartNum)}} <span class="copy" @click="handleCopy($JsCrypto.myDecode1(item.wechartNum),$event)">复制</span></div>
										<div class="line3"><i class="iconfont iconfont-mill"></i> {{item.myCalculationPower}}算力 战友数{{item.teamateNum}}个</div>
										<div class="line3"><i class="iconfont iconfont-clock"></i> 注册/实名时间 {{item.registerTime}}</div>
										<!-- <div class="line3"><i class="iconfont iconfont-clock"></i> 上次登录时间 {{item.lastLoginTime||'未知'}}</div> -->
									</div> 
									<!-- <div class="flex flex3">
										<div class="line2">{{item.level | getUserType}}</div>
										<div class="line3">战友数{{item.teamateNum}}个</div>
									</div> -->
								</div>
							</div>
						</van-list>
					</van-tab>
				</van-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	export default {
		data() {
			return {
				totalNum:0,
				currentPage: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				pageSize: 20,
				activeName: 'myShare',
				loading1: false,
				finished1: false,
				loading2: false,
				finished2: false,
				loading3: false,
				finished3: false,
				loading4: false,
				finished4: false,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				userInfo:{},
				parentUserInfo:'',
				myShareText:'我的直推',
				validNumText:'有效人数',
				activedText:'已实名',
				unactivedText:'待实名',
				validText:'有效数',
				realnameNum:0,
				teamNum:0,
				mobilePhone:'',
				loading:false
			}
		},
		components: {
			mHeader
		},
		created() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				localStorage.removeItem('_USERINFO_');
				_this.$cookies.remove('userId');
				_this.$cookies.remove('token');
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$cookies.remove('isRefreshUserInfo');
				_this.$router.replace('login');
				return;
			}
			_this.realnameNum = _this.userInfo.realnameNum;
			_this.activedText = '已实名' + ' ' + _this.realnameNum;
			//_this.getParentUserInfo();
			_this.getParentUserInfo();
			/* if(_this.$cookies.get("parent_info")){
				_this.parentUserInfo = JSON.parse(localStorage.getItem('parentUserInfo'));
			}else{
				_this.getParentUserInfo();
			} */
			_this.getCountTeamNum();
		},
		methods: {
			back() {
				this.$router.replace('my');
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			toTeamView(parentId,realnameNum){
				this.$router.push({
					path:'/mySuperTeam2',
					query:{
					  parentId:parentId,
					  realnameNum:realnameNum
					}
				});
			},
			toView(){
				this.$router.push('/myshare');
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			getUserInfo() {
				let _this = this;
				_this.activeName = 'myShare';
				let params = {
					pageNo: _this.currentPage,
					pageSize: _this.pageSize,
					parentId: _this.userInfo.userId,
					mobilePhone: _this.mobilePhone
				}
				if(!_this.$reg.phone2.test(params.mobilePhone)){
					_this.$toast('手机号格式有误');
					return;
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.list1 = res.data.list;
						//_this.thisUserInfo = res.data;
						//_this.$router.push({path:"my4Other",query:{lookUserId:res.data}});
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading = false;
				})
			},
			getCountTeamNum(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getCountTeamNum, 'GET', null, function(res){
					// console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						_this.teamNum = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getParentUserInfo(){
				let _this = this;
				let parentId = _this.userInfo.parentId==null?_this.userInfo.userId:_this.userInfo.parentId;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo4Path + parentId, 'GET', null, function(res){
					// console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						_this.parentUserInfo = res.data;
						/* localStorage.setItem('parentUserInfo',JSON.stringify(_this.parentUserInfo));
						_this.$cookies.set("parent_info",1,_this.$api.cookiesTime24h); */
						// console.log('_this.parentUserInfo',_this.parentUserInfo);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			onLoad1() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage,
					pageSize: _this.pageSize,
					parentId: _this.userInfo.userId
				}
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						// console.log('_this.list1',_this.list1);
						// console.log('res.data.list',res.data.list)
						let list = res.data.list;
						_this.list1.push(...list);
						_this.totalNum = res.data.total;
						_this.myShareText = '我的直推' + ' ' + res.data.total;//团队注册人数
						//_this.unactivedText = '待实名' + ' ' + (res.data.total - _this.userInfo.realnameNum);
						_this.loading1 = false;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
							// console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage = _this.currentPage + 1;
						}
						// console.log('_this.list1',_this.list1);
					}else{
						_this.loading1 = false;
						_this.finished1 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad2() {
				let _this = this;
				// 异步更新数据
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize,
					parentId: _this.userInfo.userId,
					actived:1
				}
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list2.push(...list);
						_this.loading2 = false;
						_this.realnameNum = res.data.total;
						_this.activedText = '已实名 ' + _this.realnameNum;
						//_this.unactivedText = '待实名 ' + (_this.totalNum - _this.realnameNum);
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished2 = true;
							// console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						}
						// console.log('_this.list2',_this.list2);

						//如果realnameNum不符，则修改用户信息中的realnameNum,还是报账号异常比较好
						if(_this.userInfo.realnameNum!=res.data.total){
							_this.updateRealNameNumByUserId();
						}
					}else{
						_this.loading2 = false;
						_this.finished2 = true;
						_this.$toast(res.message);
					}
				})
			},
			updateRealNameNumByUserId(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.updateRealNameNumByUserId, 'GET', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			onLoad3() {
				let _this = this;
				// 异步更新数据
				let params = {
					pageNo: _this.currentPage3,
					pageSize: _this.pageSize,
					parentId: _this.userInfo.userId,
					actived:-1
				}
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list3.push(...list);
						_this.loading3 = false;
						_this.unactivedText = '待实名 ' + res.data.total;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished3 = true;
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						}
						// console.log('_this.list3',_this.list3);
					}else{
						_this.loading3 = false;
						_this.finished3 = true;
						_this.$toast(res.message);
					}
				})
			},
			onLoad4() {
				let _this = this;
				// 异步更新数据
				let params = {
					pageNo: _this.currentPage4,
					pageSize: _this.pageSize,
					parentId: _this.userInfo.userId
				}
				_this.$ajax.ajax(_this.$api.getValidUserPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list4.push(...list);
						_this.loading4 = false;
						_this.validText = '有效数 ' + res.data.total;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						}
						// console.log('_this.list4',_this.list4);
					}else{
						_this.loading4 = false;
						_this.finished4 = true;
						_this.$toast(res.message);
					}
				})
			},
			initializeTabActiveName() {
				let _this = this;
				// if (_this.$cookies.isKey("tab_name")) {
				// 	_this.activeName = _this.$cookies.get("tab_name");
				// }
			},
			tabChange(name, title) {
				// this.$cookies.set("tab_name", name, 60 * 60 * 1)
			},
		}
	}
</script>
