<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.raise{
		// padding: $boxPadding1;
		@include pageNoHeight4Scroll();
		color: $main-box-fh-text-color !important;
		background-color: $main-box-fh-bg-color !important;
		.van-list__finished-text{
			color:$main-box-fh-text-color;
		}
		.van-field__label{
			width: 66px !important;
		}
		.helpBox{
			position:relative;
			display: flex;
			padding: 0 $boxPadding2;
			box-sizing: border-box;
			align-items: center;
			background: linear-gradient(left top, #ffae00 , #ffae00) !important;
			height: 30px;
			line-height: 30px;
			.leftBox{
				flex: 0 0 24px;
				color: red;
				font-size: 1.2rem;
			}
			.centerBox{
			  flex: 1;
			  text-align: center;
			  font-size: 0.75rem;
			}
			.rightBox{
				flex: 0 0 24px;
				text-align: right;
				&.text{
					color: $main-adorn-color;
					font-size: 0.75rem;
				}
				&.icon{
					color: linear-gradient(left right, #ffae00 , #ffae00);
					font-size: 11px;
				}
			}
		}
		.iconTextBox{
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			.leftIcon{
				flex: 0 0 20px;
				font-size: 20px;
				color: red;
				color: linear-gradient(left right, #ffae00 , #e10000) !important;
			}
			.iconText{
				flex: 1;
				font-size: 16px;
				margin-left: 6px;
			}
			.rightBox{
				flex: 0 0 100px;
				float: right;
			}
		}
		.raiseHeader{
			padding:$boxPadding2 $boxPadding2;
		}
		$avatorHeight: 20px;
		.whoAreYou{
			display: flex;
			padding:$boxPadding2 $boxPadding2;
			flex-direction: row;
			align-content: center;
			align-items: center;
			justify-content: center;
			.avator{
				flex: 0 0 $avatorHeight;
			}
			.textInfo{
				flex: 1;
				font-size: 0.812rem;
				height: 1em;
				display: table-cell;
				.text1{font-weight: bold;}
				.text2{color: #e7e7e7;margin-left: 5px;}
			}
			.rightBox{
				flex: 0 0 80px;
				height: $avatorHeight;
				text-align: right;
			}
		}
		.content1{
			padding: 0 $boxPadding2;
			.title{
				font-size: 1.125rem;
				line-height: 1.375em;
			}
			.box{
				display: flex;
				background-color: inherit;
				padding:$boxPadding2 0;
				box-sizing:border-box !important;
			}
			.box2{
				margin-top: $marginTop2;
				text-align: center;
				.flexC{
					flex:1;
					.digit{
						font-size: 16px;
						color: $main-adorn-color;
					}
					.text{
						font-size: $fs-1;
						margin-top: 3px;
					}
				}
			}
		}
		.flex{
			display: flex;
			background-color: inherit;
			padding:$boxPadding2 0;
			box-sizing:border-box !important;
			flex-direction: row;
			align-content: center;
			align-items: center;
			justify-content: center;
			// color:$mainTextColor;
			.flexMedial{
				flex: 1;
			}
			.flexLeft{
				flex: 0 0 24px;
				.ticket{
					font-size: 1.5rem;
					color: $main-adorn-color;
				}
			}
			.flexCenter{
				flex: 1;
				font-size: 0.75rem;
				line-height: 1.3em;
				padding: 0 0.375rem;
			}
			.flexRight{
				flex: 0 0 1.25rem;
				.iconfont-i{
					color: $main-adorn-color;
				}
			}
		}
		.story,.materialProve{
			padding-left: $boxPadding2;
			padding-right: $boxPadding2;
			.title{
				font-size: 0.875rem;
				font-weight: bold;
			}
			.textRight{
				text-align: right;
				color: $main-adorn-color;
			}
			.content{
				font-size: 12px;
				letter-spacing: 1px;
				line-height: 1.2em;
			}
			.imageList{
				flex-wrap: wrap;
				flex-direction: row;
				align-content: left;
				align-items: center;
				justify-content: left;
				img{
					flex: 0 0 70px;
					width: 70px;
					height: 70px;
					padding: 3px;
					&::last-child{
						padding-right: 0;
					}
					&::first-child{
						padding-left: 0;
					}
				}
			}
		}
		.materialProve{
			.flexProveLeft{
				flex: 0 0 30px;
				.iconfont-pass{
					color: #DE0000;
					font-size: 28px;
				}
			}
			.proveText1{
				font-size: 11px;
				line-height: 1.2em;
				padding-left: 4px;
				justify-content:space-between;
			}
			.proveContent{
				color:$mainTextColor;
				padding: $boxPadding2;
				background-color: $main-box-color;
				.flex{
					padding-top: 0px !important;
				}
				.contentBox{
					.title2{
						font-size: 11px;
						padding-top: $boxPadding2;
					}
					.contentText1{
						margin-top: 8px;
						font-size: 11px;
						line-height: 1.2em;
						letter-spacing: 1px;
					}
				}
				.knowMore{
					font-size: 0.75rem;
					color: $main-adorn-color;
					margin-top: 10px;
				}
			}
			.proverList{
				margin-top: 12px;
				.proveLabel{
					font-size: 14px !important;
					span{
						color: $main-adorn-color;
					}
				}
				.iDo{
					flex: 0 0 70px;
					font-size: 12px !important;
					text-align: right;
					text-decoration: underline;
					color: $main-adorn-color;
				}
				.flexProveMore{
					flex: 0 0 50px;
					text-align: right;
					.iconfont-right-arrow{
						font-size: 30px;
					}
				}
			}
		}
		.records{
			padding: $boxPadding2;
			padding-top: 3px;
			.title{
				font-size: 0.937rem;
			}
			.flexsBox{
				display: flex;
				// background-color: $main-box-color;
				box-sizing:border-box !important;
				color:$main-box-fh-text-color;
				/* margin-top: 12px; */
				border-bottom: 1px solid $bottomLineColor;
				&.row{
					flex-direction: row;
					align-items: center;
				}
				.flexLeft1{
					flex: 0 0 44px;
				}
				.flexThis{
					flex:1;
					text-align: left;
					/* padding-left: 8px; */
					margin-top: 6px;
					padding-bottom: 6px;
					&.column{
						flex-direction: column;
					}
					.line1{
						overflow: hidden;
						clear: both;
						width: 100%;
						font-size: 13px;
						span{color: $main-adorn-color;}
					}
					.line2{
						overflow: hidden;
						clear: both;
						width: 100%;
						margin-top: 3px;
						font-size: 12px;
						text-align: justify;
						line-height: 1.2em;
					}
					.line3{
						overflow: hidden;
						clear: both;
						width: 100%;
						font-size: 11px;
						span{color: $main-adorn-color;}
						margin-top: 3px;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="raise">
		<m-header>
			<!-- <i class="leftBox iconfont iconfont-left-arrow" @click="back"></i> -->
			<i class="leftBox iconfont"></i>
			<div class="text">
				帮扶筹
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<!-- <div class="helpBox">
			<i class="iconfont iconfont-love leftBox"></i>
			<span class="centerBox">紧急求助！1岁宝宝急需移植骨髓，等钱救命！</span>
			<i class="iconfont iconfont-right-arrow2 rightBox icon"></i>
		</div> -->
		
		<div>
			<div class="raiseHeader borderBottom">
				<div class="iconTextBox">
					<i class="iconfont iconfont-love2 leftIcon"></i>
					<div class="iconText">爱心·水滴·帮扶筹</div>
					<div class="rightBox unSelect">
						<!-- to="raiseApplyList" -->
						<van-button type="primary" size="small" :block="true" to="raiseApplyList">申请帮扶筹</van-button>
					</div>
				</div>
			</div>
			<!-- <div v-if="!list1">
				<div class="placeholderLine10"></div>
				<van-skeleton :row="16"/>
				<div class="placeholderLine10"></div>
			</div> -->
			<div class="textCenter margT20" v-if="!list1">
				暂无申请记录
			</div>
			<div v-if="list1">
				<div class="whoAreYou">
					<!-- <div class="avator">
						<van-image round width="20" height="20" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div> -->
					<div class="textInfo">
						<span class="text1 unSelect">{{list1.realName}}</span>
						<span class="text2 unSelect">发起筹款</span>
						<span class="text2 unSelect">{{list1.createTime}}</span>
					</div>
					<!-- <div class="rightBox unSelect"><van-tag plain type="success">个人求助</van-tag></div> -->
				</div>
				<div class="content1">
					<div class="title">{{list1.title}}</div>
					<div class="box box2">
						<van-skeleton :row="2" :loading="loading">
						<div class="flexC flex1">
							<div class="digit">{{list1.needTicket}}</div>
							<div class="text">需要帮扶券</div>
						</div>
						<div class="flexC flex2">
							<div class="digit">{{list1.getedTicket}}</div>
							<div class="text">已筹到帮扶券</div>
						</div>
						<div class="flexC flex3">
							<div class="digit">{{list1.beHelpTimes}}</div>
							<div class="text">被帮扶次数</div>
						</div>
						</van-skeleton>
					</div>
					<div class="flex borderBottom">
						<div class="flexLeft">
							<i class="iconfont iconfont-ticket ticket"></i>
						</div>
						<div class="flexCenter f-10 letterSpacing">求助者所筹到的是帮扶券，这帮扶券是直接筹到求助者账户里不经过平台，然后让平台向求助者购买帮扶券，从而使求助者得到求助费用。同时，帮扶者们也可以加求助者好友直接性得给予帮扶、关心或提供其他帮助。</div>
						<div class="flexRight"><i class="iconfont iconfont-i" @click="messageAlert"></i></div>
					</div>
				</div>
				<div class="story borderBottom">
					<div class="flex">
						<div class="title flexMedial">求助者的故事</div>
						<!-- <div class="flexCenter textRight">
							<i class="iconfont iconfont-tanhao"></i>
							<span class="margL1 unSelect">质疑</span>
						</div> -->
					</div>
					<div class="content unSelect justify">
						{{list1.story}}
					</div>
					<div class="imageList flex" v-if="list1">
						<img v-for="(item,index) in images" :src="item" :key="index" @click="imagePreviewEvent(index)"/>
						<!-- <img class="" src="" @click="imagePreviewEvent(1)"/>
						<img class="" src="../../assets/image/wechat.png" @click="imagePreviewEvent(2)"/> -->
						<!-- <img class="" src="../../assets/image/wechat.png" @click="imagePreviewEvent(3)"/> -->
					</div>
					<van-image-preview
					  v-model="showImagePreview"
					  :images="images"
					  :startPosition="imageIndex"
					  @change="onChangeImageIndex"
					>
					  <template v-slot:index><span class="bg_black padding4Text">第{{ imageIndex+1 }}页</span></template>
					</van-image-preview>
				</div>
				<!-- <div class="placeholderLine placeholderLineBGC"></div> -->
				<div class="materialProve borderBottom">
					<div class="flex">
						<div class="title flexMedial">材料证明</div>
						<!-- <div class="flexCenter textRight">
							<i class="iconfont iconfont-safety"></i>
							<span class="margL1 unSelect">安心保障</span>
						</div> -->
					</div>
					<div class="proveContent">
						<div class="flex borderBottom">
							<div class="flexProveLeft">
								<i class="iconfont iconfont-pass"></i>
							</div>
							<div class="flexMedial proveText1">
								求助者身份及基本求助信息已通过平台初步审核，帮扶者也可加求助者好友，表示关心、慰问以及进一步了解求助者，以确保整个过程属实。
							</div>
						</div>
						<div class="contentBox">
							<div class="title2">求助者承诺：</div>
							<div class="contentText1 justify">
								求助者已承诺所提交的文字与图片资料完全真实，无任何虚构事实及隐瞒真相的情况，如有不实，求助者愿承担全部法律责任。
							</div>
							<div class="title2">求助者昵称：{{list1.nickName}}</div>
							<div class="title2">求助者姓名：{{list1.realName}}</div>
							<div class="title2">求助者团队算力：{{list1.teamCalculationPower}}</div>
							<div class="title2">求助者手机号：{{list1.mobilePhone}} <span @click="handleCopy(list1.mobilePhone,$event)">复制</span></div>
							<div class="title2">求助者微信：{{list1.wechartNum}} <span @click="handleCopy(list1.wechartNum,$event)">复制</span></div>
							<div class="title2">求助者支付宝：{{list1.alipayNum}} <span @click="handleCopy(list1.alipayNum,$event)">复制</span></div>
							<div class="contentText1 justify">
								该求助信息不属于慈善公开募捐，真实性由求助者个人负责，帮扶筹提示您加求助者微信了解详情后再进行帮扶。
							</div>
						</div>
						<!-- <div class="knowMore">
							了解更多求助人信息
						</div> -->
						
					</div>
					<!-- <div class="proverList">
						<div class="flex">
							<div class="flexMedial proveLabel">已有<span>38</span>人证明情况属实</div>
							<div class="iDo">我也来证明</div>
						</div>
						<div class="flex">
							<div class="flexMedial">
								<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
							</div>
							<div class="flexMedial">
								<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
							</div>
							<div class="flexMedial">
								<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
							</div>
							<div class="flexMedial">
								<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
							</div>
							<div class="flexProveMore">
								<i class="iconfont-right-arrow iconfont"></i>
							</div>
						</div>
					</div> -->
					<div class="placeholderLine10"></div>
				</div>
				<div class="materialProve borderBottom">
					<div class="flex">
						<div class="title flexMedial">我要捐赠</div>
					</div>
					<div>
						<van-field label="爱心问候"
						  v-model="word"
						  rows="2"
						  autosize clearable
						  type="textarea"
						  maxlength="100"
						  placeholder="顺便给求助者捎一句问候/慰问,送人玫瑰,手留余香,感恩有你"
						  show-word-limit
						/>
					</div>
					<div class="placeholderLine10"></div>
					<div>
						<van-button round type="info" @click="addTicket(1)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">1个券</van-button>
						<van-button round type="info" @click="addTicket(10)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">10个券</van-button>
						<van-button round type="info" @click="addTicket(50)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">50个券</van-button>
						<van-button round type="info" @click="addTicket(100)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">100个券</van-button>
						<van-button round type="info" @click="addTicket(300)" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)">300个券</van-button>
						<!-- 增加自己填写数额 -->
						<div class="placeholderLine10"></div>
						<van-field v-model="number" center clearable placeholder="自定义捐赠帮扶券数量">
							<van-button slot="button" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="getNumberLoading" @click="addTicket(number)">确认</van-button>
						</van-field>
					</div>
					<div class="placeholderLine10"></div>
				</div>
				<!-- <div class="placeholderLine placeholderLineBGC"></div> -->
				<!-- <van-list
				  v-model="loading2"
				  :finished="finished2"
				  finished-text="没有更多了"
				  @load="getAssistRaiseRecordListPage"
				>
					<div class="records">
						<div class="title">爱心帮扶记录</div>
						<div class="item flexsBox row" v-for="item in list2" :key="item.id">
							<div class="flexThis column">
								<div class="line1">
									<div class="left yellow">{{item.nickName}}</div>
									<div class="left margL10">捐赠了 <span>{{item.raiseNum}}</span> 个帮扶券</div>
								</div>
								<div class="line2">
									{{item.word}}
								</div>
								<div class="line3">{{item.createTime}}</div>
							</div>
						</div>
					</div>
				</van-list> -->
				<van-tabs v-model="tabActiveName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
				 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated>
					<van-tab title="爱心帮扶记录" name="raiseRecord1">
						<div class="records" v-if="list2">
							<div class="item flexsBox row" v-for="item in list2" :key="item.id">
								<div class="flexThis column">
									<div class="line1">
										<div class="left yellow">{{item.nickName}}</div>
										<div class="left margL10">捐赠了 <span>{{item.raiseNum}}</span> 个帮扶券</div>
									</div>
									<div class="line2">
										{{item.word}}
									</div>
									<div class="line3">{{item.createTime}}</div>
								</div>
							</div>
							<div v-if="totalItems>0">
								<van-pagination 
								  v-model="currentPage2" 
								  :total-items="totalItems" 
								  :items-per-page="pageSize2"
								  :show-page-size="3" 
								  force-ellipses
								  @change="getAssistRaiseRecordListPage"
								/>
							</div>
						</div>
					</van-tab>
					<van-tab title="爱心帮扶排行榜" name="raiseRecord2">
						<div class="records" v-if="list3">
							<div class="item flexsBox row" v-for="item in list3" :key="item.id">
								<div class="flexThis column">
									<div class="line1">
										<div class="left yellow">{{item.nickName}}</div>
										<div class="left margL10">捐赠了 <span>{{item.total}}</span> 个帮扶券</div>
									</div>
									<div class="line2">
										{{item.word}}
									</div>
									<!-- <div class="line3">{{item.createTime}}</div> -->
								</div>
							</div>
							<div v-if="totalItems3>0">
								<van-pagination 
								  v-model="currentPage3" 
								  :total-items="totalItems3" 
								  :items-per-page="pageSize3"
								  :show-page-size="3" 
								  force-ellipses
								  @change="getAssistRaiseRecordListPage3"
								/>
							</div>
						</div>
					</van-tab>
				</van-tabs>	
				<!-- <div class="records" v-if="list2">
					<div class="title">爱心帮扶记录</div>
					<div class="item flexsBox row" v-for="item in list2" :key="item.id">
						<div class="flexThis column">
							<div class="line1">
								<div class="left yellow">{{item.nickName}}</div>
								<div class="left margL10">捐赠了 <span>{{item.raiseNum}}</span> 个帮扶券</div>
							</div>
							<div class="line2">
								{{item.word}}
							</div>
							<div class="line3">{{item.createTime}}</div>
						</div>
					</div>
					<div v-if="totalItems>0">
						<van-pagination 
						  v-model="currentPage2" 
						  :total-items="totalItems" 
						  :items-per-page="pageSize2"
						  :show-page-size="3" 
						  force-ellipses
						  @change="getAssistRaiseRecordListPage"
						/>
					</div>
				</div> -->
			</div>
		</div>
		<transition name="van-fade">
		  <router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog,ImagePreview } from 'vant';
	import clip from '@/assets/js/clipboard';
	export default {
		data() {
			return {
				closeable:true,
				loading:false,
				pageSize:1,
				currentPage1: 1,
				loading1:false,
				finished1:false,
				list1:[],
				currentPage2: 1,
				pageSize2:6,
				loading2:false,
				finished2:false,
				list2:[],
				currentPage3: 1,
				pageSize3:6,
				loading3:false,
				finished3:false,
				list3:[],
				totalItems:0,
				totalItems3:0,
				showImagePreview: false,
				imageIndex: 0,
				images: [],
				loadingRecordsList:false,
				finishedRecordsList:false,
				num:0,
				word:'',
				tabActiveName:"raiseRecord1",
				userInfo:"",
				number:"",
				getNumberLoading: false
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
				_this.$router.replace('login');
				return;
			}
			_this.getAssistRaiseListPage();
		},
		mounted() {
			let _this = this;
			
		},
		methods:{
			back(){
				let _this = this;
				_this.$router.push("/raise")
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			waiting(){
				this.$toast(`即将开放`);
			},
			tabChange(name,title){
				let _this = this;
				//console.log(name,title);
				this.$cookies.set("tabName4Record", name, 60 * 60 * 1)
				if(name == 'raiseRecord1'){
					_this.getAssistRaiseRecordListPage();
					/* if(_this.$cookies.get('totalItems2')){
						_this.list2 = JSON.parse(localStorage.getItem("LIST2"));
						_this.totalItems2 = parseInt(_this.$cookies.get('totalItems2'));
					}else{
						_this.getListAddPrice();
					} */
				}else if(name == 'raiseRecord2'){
					_this.getAssistRaiseRecordListPage3();
					/* if(_this.$cookies.get('totalItems1')){
						_this.list3 = JSON.parse(localStorage.getItem("LIST1"));
						_this.totalItems3 = parseInt(_this.$cookies.get('totalItems1'));
					}else{
						_this.getListGeneral();
					} */
				}
			},
			addTicket(num){
				let _this = this;
				_this.num = num;
				/* if(_this.word){
					
				}else{
					_this.$toast(`请`);
				} */
				Dialog.confirm({
				  title: '系统提示',
				  confirmButtonText:'确认',
				  closeOnClickOverlay:true,
				  message: `您是否要捐赠${num}个给求助者？`
				}).then(() => {
				  // on confirm
				  //_this.$toast(`即将开放`);
				  _this.addTicketRequest();
				})
				
			},
			addTicketRequest(){
				let _this = this;
				let params = {
				  raiseId: _this.list1.id,
				  raiseNum: _this.num,
				  word: _this.word
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(!_this.$reg.positive_integer.test(_this.num)){
					_this.$toast(`请填写正整数的帮扶券`);
					return;
				}
				if(_this.userInfo.platformTicket<_this.num){
					_this.$toast(`您所拥有的帮扶券不够${_this.num}个`);
					return;
				}
				_this.getNumberLoading = true;
				//console.log("p",params)
				_this.$ajax.ajax(_this.$api.insertAssistRaiseRecord, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast("捐赠成功");
						_this.word = '';
						_this.number = '';
						_this.getAssistRaiseListPage();
						//_this.getAssistRaiseRecordListPage();
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  //_this.getCurrentAuction();
						})
					}
				},function(){
					_this.getNumberLoading = false;
				})
			},
			getAssistRaiseRecordListPage(){
				let _this = this;
				
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize2,
					raiseId:_this.list1.id
				}
				_this.loading2 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseRecordListPage, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list2 = res.data.list;
						_this.totalItems = res.data.total;
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.finished2 = true;
					_this.loading2 = false;
				})
			},
			getAssistRaiseRecordListPage3(){
				let _this = this;
				let params = {
					pageNo: _this.currentPage3,
					pageSize: _this.pageSize3,
					raiseId:_this.list1.id
				}
				_this.loading3 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseRecordRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list3 = res.data.list;
						_this.totalItems3 = res.data.total;
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.finished3 = true;
					_this.loading3 = false;
				})
			},
			getAssistRaiseListPage(){
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					isShow:1
				}
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getAssistRaiseListPage, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list1 = res.data.list[0];
						if(_this.list1){
							_this.images=[
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '001.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '002.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '003.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '004.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '005.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '006.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '007.jpg',
								'https://www.helpchain.online/image/raise/' + _this.list1.id + '008.jpg'
							];
							//_this.images = _this.list1.pic.split('|');
							_this.getAssistRaiseRecordListPage();
						}else{
							_this.list1 = '';
						}
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.loading1 = false;
				})
			},
			onLoadRecordsList() {
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loadingRecordsList = false;
					_this.finishedRecordsList = true;
				}, 500);
			},
			imagePreviewEvent(index){
				this.showImagePreview = true;
				console.log("index",index);
				this.imageIndex = index;
			},
			onChangeImageIndex(index) {
			  this.imageIndex = index;
			},
			messageAlert(){
				let _this = this;
				Dialog.alert({
				  title: '系统提示',
				  message: _this.$api.raiseTip
				}).then(() => {
				  // on close
				});
			}
		}
	}
</script>