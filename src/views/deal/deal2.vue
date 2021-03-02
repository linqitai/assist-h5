<style lang="scss">
	@import '~@/assets/scss/index.scss';
	
	/* [class*=van-hairline]::after {
	    border: 1px solid transparent !important;
	} */
	
	.van-cell__value, .van-cell__value--alone, .van-field__control{
		color: #323232 !important;
	}
	.deal{
		background-color: $main-box-fh-bg-color;
		min-height: 100%;
		/* [class*=van-hairline]::after {
		    border: 1px solid transparent !important;
		} */
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
			font-size: 12px;
		}
		.notice-swipe {
		    height: 40px;
		    line-height: 40px;
		}
		.tip{
			padding-top: 6px;
			padding-bottom: 6px;
			font-size:12px;
			line-height: 1.3em;
			letter-spacing: 1px;
			color: white;
			background-color: $main-adorn-color;
			text-align: center;
		}
		.tipText{
			font-size:13px;
			text-indent: 2em;
			line-height: 1.4em;
			letter-spacing: 1px;
			color: $main-adorn-color;
		}
		.modelTipText{
			font-size: 0.75rem;
			color: $grayDarker;
			line-height: 1.4em;
		}
		.statistics{
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: 0.5625rem 0.75rem;
			// border-top: 1px solid $bottomLineColor;
			border-bottom: 1px solid $bottomLineColor;
			font-size: 0.75rem;
			.line{
				margin-top: 0.25rem;
				overflow: hidden;
			}
		}
		.dealContent{
			// margin-top: $marginTop2;
			.dealList{
				// margin-top: $marginTop2;
				.item{
					background-color: $main-box-fh-bg-color;
					color: $main-box-fh-text-color;
					// background-color: $main-box-color;
					// color: $mainTextColor2;
					padding: $boxPadding2;
					border-bottom: 1px solid $bottomLineColor;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					font-size: 0.75rem;
					.boxLeft{
						flex: 1;
					}
					.boxRight{
						flex: 0 0 160px;
						text-align: right;
						font-size: 0.75rem
					}
				}
			}
		}
		$bottom:118px;
		.buy{
			bottom: $bottom + 60px;
			right: $right*1.2;
			color: $main-box-fh-text-color;
		}
		.sale{
			bottom: $bottom + 60px;
			right: $right;
		}
		.buy,.sale{
			position: fixed;
			background: linear-gradient(to right, #ffae00 , #ff8400);
			color: $main-box-fh-text-color;
			width:$fixed-btn-width2;
			height:$fixed-btn-width2;
			line-height:$fixed-btn-width2;
			border-radius:$fixed-btn-width2;
			text-align: center;
			z-index:2001;
			font-size: 0.875rem;
			user-select:none;
		}
		.fullscreenBox{
			top:130px !important;
		}
		.sureAppointBtnBox{
			padding: $boxPadding2;
		}
		.pickSellContent{
			
			.showMyInfo{
				padding-left: 16px;
				padding-right: 16px;
				font-size: 12px;
				.myPlateForm{
					text-align: center;
				}
			}
			.inLine{
				display: flex;
				flex-direction: row;
				align-content: center;
				align-items: center;
				padding: 12px 16px;
				font-size: 12px;
				position: relative;
				.label{
					flex: 0 0 90px;
				}
				.value{
					flex: 1;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					.valueLeft{
						flex: 0 0 110px;
					}
					.valueRight{
						flex: 1;
					}
				}
			}
		}
		.hangBuyContent{
			
			.showMyInfo{
				padding-left: 16px;
				padding-right: 16px;
				font-size: 12px;
			}
			.inLine{
				display: flex;
				flex-direction: row;
				align-content: center;
				align-items: center;
				padding: 12px 16px;
				font-size: 13px;
				position: relative;
				.label{
					flex: 0 0 90px;
				}
				.value{
					flex: 1;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					.valueLeft{
						flex: 0 0 110px;
					}
					.valueRight{
						flex: 1;
					}
				}
			}
			/* .inLine::after {
				position: absolute;
				box-sizing: border-box;
				content: ' ';
				pointer-events: none;
				right: 0;
				bottom: 0;
				left: 16px;
				border-bottom: 1px solid #ebedf0;
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
			} */
		}
		.kline{
			width: 95%;
			margin-left: 3%;
			min-height: 260px;
		}
	}
</style>
<template>
    <div class="deal">
		<van-notice-bar
		  mode = "closeable"
		  left-icon="volume-o"
		  text="流通中心每日开放的时间为9~20点"
		/>
		<van-button type="info" size="normal" to="kline" color="#ff8400" :block="true"><span class="letterSpacing">查看K线图</span></van-button>
	
		<div v-if="!dealPageInfo.currentBuyNum">
			<div class="placeholderLine10"></div>
			<van-skeleton :row="2"/>
			<div class="placeholderLine10"></div>
		</div>
		
		<div class="statistics animated bounce faster" v-if="dealPageInfo.currentBuyNum">
			<div class="line clearBoth flexCenter f-14">
				<div class="left title">智能统计小助手</div>
			</div>
			<div class="line clearBoth">
				<div class="left">今日流通平均价 {{parseFloat(dealPageInfo.dealedAVGPrice).toFixed(2)}}￥</div>
				<div class="right">今日流通总量 {{parseFloat(dealPageInfo.transactionNum24).toFixed(0)}}</div>
			</div>
		</div>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<van-tabs v-model="tabActiveName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" animated>
				<van-tab title="买单" name="dealArea2">
					<div class="dealContent">
						<div class="dealList animated bounce faster">
							<div class="line1pxbgcolor"></div>
							<div class="item" v-for="item in list2" :key="item.id">
								<div class="boxLeft">
									<div class="">数量 {{item.minNumber}}~{{item.maxNumber}} 个{{$api.coinUnit}}</div>
									<div class="margT10">单价 {{(parseFloat(item.price)/7).toFixed(3)}}$ / {{item.price}}￥</div>
								</div>
								<div class="boxRight">
									<div>合计 {{(totalPrice(item.price,item.maxNumber)/7).toFixed(3)}}$ / {{totalPrice(item.price,item.maxNumber)}}￥</div>
									<div class="margT3"><van-button @click="showPickSellModelBtn(item)" type="primary" size="mini" loading-type="spinner" :loading="dealBtnLoading">卖 出</van-button></div>
								</div>
							</div>
						</div>
						<div class="placeholderLine10"></div>
						<div class="tip4modelTextCenter">流通中心的匹配方式为随机匹配，一次展示20条求购单子</div>
						<div class="placeholderLine10"></div>
						<!-- <div class="placeholderLine10"></div>
						<div class="paddingWing" v-if="totalItems2>0">
							<van-pagination 
							  v-model="currentPage2" 
							  :total-items="totalItems2" 
							  :items-per-page="pageSize"
							  :show-page-size="3" 
							  force-ellipses
							  @change="changeCurrentPage2"
							/>
						</div>
						<div class="placeholderLine10"></div> -->
					</div>
				</van-tab>
			</van-tabs>	
		</van-pull-refresh>
		
		<van-action-sheet v-model="showPickSellModel" title="卖出">
		  <van-cell-group>
			  <div class="pickSellContent">
				  <div class="showMyInfo">
					  <div class="placeholderLine20"></div>
					  <div class="tip4model3">可用 矿石{{userInfo.thisWeekMineral.toFixed(2)}}个  帮扶券{{userInfo.platformTicket.toFixed(2)}}个 额度{{Number(userInfo.email).toFixed(3)}}个</div>
					  <div class="placeholderLine10"></div>
					  <div class="tip4model3">
						交易手续费:<br>
						个人算力小于3G：20%券+10%矿石<br>
						个人算力大于3G：10%券+10%矿石
					  </div>
					  <div class="placeholderLine10"></div>
					  <div class="tip4model3">买单被匹配后，买家需及时付款，若超时付款被卖家申诉而取消交易，买家会被扣10个可售额度。买家付款后，卖家因超时确认被买家申诉后，系统会帮忙确认，且扣卖家5个可售额度。<br></div>
					  <!-- <div>若卖{{form4pickSellBill.sellAmountSliderValue}}个后</div>
					  <div class="placeholderLine10"></div>
				  	  <div class="">所剩 矿石:{{ remainMineral }}个 帮扶券:{{ remainPlateForm }}个</div> -->
				  </div>
				  <div class="inLine">
				  	<span class="label">想卖数量</span>
				  	<span class="value">
				  		<span class="valueLeft">
							<van-stepper v-model="form4pickSellBill.sellAmountSliderValue" input-width="40px" disable-input integer :max="maxBill"/>
						</span>
						<span class="valueRight">
							<van-slider @change="onChange4slider" v-model="form4pickSellBill.sellAmountSliderValue" :min="minBill" :max="maxBill" active-color="#ffae00"/>
						</span>
				  	</span>
				  </div>
			  </div>
			  <!-- <van-field v-model="form4pickSellBill.sellAmountSliderValue" readonly clearable label="数量"/> -->
			  <van-field v-model="form4pickSellBill.price" readonly clearable label="单价(￥)"/>
			  <!-- <van-field readonly clickable label="手续费" :value="serviceCharge" placeholder="请先选择手续费" @click="showPicker4ServiceChargePopup = true"/> -->
			  <div class="placeholderLine10"></div>
			  <!-- <div class="tip4model3 paddingWing">当前算力挖矿的交易手续费统一为每笔{{usePt}}个帮扶券，帮扶券作为手续费是维持平台运营的基础条件，它会根据矿石的价格来动态调整。</div> -->
			  <!-- <van-field readonly clickable label="选择手续费" :value="serviceCharge" placeholder="请先选择手续费" @click="showPicker4ServiceChargePopup = true" right-icon="arrow-down"/> -->
			  <!-- <van-popup v-model="showPicker4ServiceChargePopup" position="bottom">
			    <van-picker
			      show-toolbar
			      :columns="columns4ServiceCharge"
			      @cancel="showPicker4ServiceChargePopup = false"
			      @confirm="onConfirm4ServiceCharge"
			    />
			  </van-popup> -->
			  <van-field v-model="form4pickSellBill.idCard" required clearable label="身份证号" placeholder="请填写自己的身份证号" maxlength="18" @blur="validate4pickSellBill('idCard')" :error-message="errorInfo4pickSellBill.idCard"/>
			  <van-field required v-model="form4pickSellBill.safePassword" type="password" clearable label="安全密码" @blur="validate4pickSellBill('safePassword')" :error-message="errorInfo4pickSellBill.safePassword" placeholder="请填写安全密码"/>
		  </van-cell-group>
		  <div class="sureAppointBtnBox">
			  <!-- <div class="tip4model3">系统提示：。</div> -->
			  <div class="tip4model3">
			  	 <div class="read margT6">
					 <van-radio-group v-model="isRead" @change="isReadChange">
					   <van-radio name="1"><b class="textBold green" @click="openDealRule">发起交易后，代表您愿意遵守该<span class="red">《交易规则》</span></b></van-radio>
					 </van-radio-group>
				 </div>
			  </div>
			  <div class="placeholderLine10"></div>
			  <van-button @click="sureHangPickedSellBillBtn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="sellBtnLoading" loading-type="spinner">确 认</van-button>
		  </div>
		</van-action-sheet>
		<van-dialog v-model="showTipModel3Deal" title="交易规则" :showConfirmButton="false">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="tip4modelNew">
					<b class="textBold">尊敬的原始矿工交易前请认真阅读以下交易规则：</b>
					<br>
					<div class="placeholderLine4"></div>
					【1】同价单子的匹配是<b class="textBold blue">随机</b>的，匹配后卖家务必主动<b class="textBold blue">短信提醒</b>买家，通知后买家若2小时内没付款，卖家可点<b class="textBold blue">申诉反馈问题</b>说明情况；买家付款后，卖家务必在<b class="textBold blue">30分钟</b>内给予<b class="textBold blue">确认</b>，若是没收到款就点<b class="textBold blue">让买家上传付款凭证</b>或直接点<b class="textBold blue">申诉</b>反馈问题，若卖家没及时给与确认也没点申诉说明原因，一旦被买家申诉后会扣5个可售额度。<br>
					<div class="placeholderLine4"></div>
					【2】交易之前请<b class="textBold blue">卖家</b>先检查在平台上所预留的<b class="textBold blue">真实姓名</b>与<b class="textBold blue">【支付宝、微信】</b>里的是否一致、自己的<b class="textBold blue">支付宝和微信号</b>是否可以<b class="textBold blue">被搜索到且可以正常收付款且有设置头像，手机号可以接通</b>，确保能顺利交易与顺畅沟通。<br>
					 <b class="textBold blue">支付宝收款</b>(首选）：若卖家支付宝异常，订单可被终止，请矿工们预先在支付宝的【设置--隐私--常用隐私设置】里开启【向好友公开我的真实姓名】和【通过手机号查找到我】的功能。<br>
					 <b class="textBold blue">微信收款</b>(买家自由选择)：若卖家没开通，订单可被终止，请矿工们预先在微信的【我--支付--支付管理】里开启【允许通过手机号向我转账】的功能，该手机号务必是注册帮扶链的手机号。<br>
					 <b class="textBold blue">银行卡收款</b>(买家自由选择)：单笔交易超过5000￥的时候才会开启，若买家选择银行卡付款，请卖家预先在我的实名中设置。<br>
					 <div class="placeholderLine4"></div>
					 <span class="red">若买卖双方出现以上问题，客服会介入调查后台数据，调查属实后会酌情处理或处罚卖方一定数量的贡献值或矿石。请卖家在交易之前务必检查好自己的账户信息。</span><br>
				</div>
				<div class="placeholderLine10"></div>
				<van-button color="linear-gradient(to right, #0e7de5, #0b6cc7)" @click="showTipModel3Deal=false" size="normal" :block="true" :disabled="isDealDisabled" loading-type="spinner">{{timeRead}}</van-button>
			</div>
		</van-dialog>
		<van-action-sheet v-model="showPickBuyModel" title="买 TA">
			
		  <van-cell-group>
			  <van-field v-model="form3.num" type="number" clearable label="想买数量" placeholder="请填写买入数量"/>
			  <van-field v-model="form3.price" type="number" disabled clearable label="单价" placeholder="请填写单价"/>
			  <van-field v-model="form3.idCard" type="text" required clearable label="身份证号" placeholder="请填写自己的身份证号" maxlength="18"/>
			  <van-field v-model="form3.safePassword" required type="password" clearable label="安全密码" placeholder="请填写安全密码"/>
		  </van-cell-group>
		  <div class="sureAppointBtnBox">
			  <div class="tip4model3RedText">
			  	<b class="textBold">尊敬的原始矿工交易前请认真阅读以下规则：</b>
			  	<br>
					该操作是【买入】操作，匹配的是卖家所挂的卖单，请矿工们了解清楚后再点【确认】，点【确认】后若没去完成订单，买家将会因失信而失去一定数量的贡献值或矿石。<br>
			  	 <div class="read margT6">
					 <van-radio-group v-model="isRead" @change="isReadChange">
					   <van-radio name="1"><b class="textBold green">发起交易后，即代表您已认真阅读并同意以上规则</b></van-radio>
					 </van-radio-group>
				 </div>
			  	<!-- 注：<br>
			  	<b class="textBold">身份证正面照片:</b><br>即带有姓名那一面的照片，需带上小纸条并写上，{{$api.projectEnglishName}}认证专用+当天日期。<i class="underline" @click="showExamplePic">点击查看模板</i> -->
			  </div>
			  <div class="placeholderLine10"></div>
			  <van-button @click="surePickedBuyBillBtn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="sellBtnLoading" loading-type="spinner">确 认</van-button>
		  </div>
		</van-action-sheet>
		
		<div class="buy" v-if="tabActiveName=='dealArea1'||tabActiveName=='dealArea2'||tabActiveName=='dealArea4'" @click="showBuyModelBtn()">挂买</div>
		<div class="sale" v-if="tabActiveName=='dealArea3'" @click="showSellModelBtn()">挂卖</div>
		
		
		<van-action-sheet v-model="showSellModel" title="挂卖">
			<div class="hangBuyContent">
				<!-- <div class="tipText paddingWing">
					价格涨幅规律：每当平台指导价的求购量超过10万{{pen}}，则涨0.1￥。
				</div> -->
				<van-cell-group>
				<van-field v-model="form4pickSellBill.sellAmount" type="number" required clearable label="想卖数量" placeholder="请填写想要卖出的总数量"/>
				<van-field v-model="form4pickSellBill.sellLowestAmount" type="number" required clearable label="最低匹配数量" placeholder="请填写最低匹配数量"/>
				<van-field v-model="form4pickSellBill.price" type="number" required clearable label="单价" placeholder="请填写单价"/>
				<div class="paddingWing tip4model3RedText margT3">当前溢价卖单的单价控制为：{{minPrice}}~{{maxPrice}}元</div>
				<van-field v-model="form4pickSellBill.safePassword" type="password" required clearable label="安全密码" placeholder="请填写安全密码"/>
				</van-cell-group>
				<div class="sureAppointBtnBox">
					<!-- <div class="tip4model3">当前溢价卖家的价格控制为：{{minPrice}}~{{maxPrice}}元</div> -->
					<div class="tip4model3RedText">系统提示：所挂卖单无法主动撤销，请调整好合理的价格后再挂。</div>
					<div class="placeholderLine10"></div>
				    <van-button @click="sureHangSellBillBtn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :loading="loading4Buy" :block="true">确 认</van-button>
				</div>
			</div>
		</van-action-sheet>
		
		<van-action-sheet v-model="showBuyModel" title="挂买">
			<div class="hangBuyContent">
				<!-- <div class="tipText paddingWing">
					价格涨幅规律：每当平台指导价的求购量超过10万{{pen}}，则涨0.1￥。
				</div> -->
				<van-cell-group>
				<div class="placeholderLine10"></div>
				<!-- <div class="paddingWing tip4model2 margT3">个人剩余可买数量:{{userInfo.canBuyNum}}</div> -->
				<!-- <van-field v-model="userInfo.canBuyNum" label="个人剩余可买数量" type="number" disabled right-icon="question-o" @click-right-icon="alertTip(clickIconTip.buyAmount)"/> -->
				<!-- <van-field v-model="form4BuyBill.buyAmount" type="number" required clearable label="想买数量" right-icon="question-o" placeholder="请填写想要买入的总数量"
				  @click-right-icon="alertTip(clickIconTip.buyAmount)"
				  @blur="validate4BuyBill('buyAmount')"
				  :error-message="errorInfo4BuyBill.buyAmount"/>
				<van-field v-model="form4BuyBill.buyLowestAmount" type="number" required clearable label="最低匹配数量" right-icon="question-o" :placeholder="buyLowestAmountText"
				@click-right-icon="alertTip(clickIconTip.buyLowestAmount)"
				@blur="validate4BuyBill('buyLowestAmount')"
				:error-message="errorInfo4BuyBill.buyLowestAmount"/> -->
				<van-field readonly required clickable label="挂买数量" :value="form4BuyBill.buyAmount" placeholder="请选择挂买数量" @click="showBuyAmountPopup = true"/>
				<van-action-sheet
				  v-model="showBuyAmountPopup"
				  :actions="actions"
				  cancel-text="取消"
				  close-on-click-action
				  description="请选择挂买数量"
				  @select="onSelect"
				  @cancel="onCancel"
				/>
				<van-field v-model="form4BuyBill.buyLowestAmount" type="number" readonly required clearable label="最低匹配数量" :placeholder="buyLowestAmountText"
				@blur="validate4BuyBill('buyLowestAmount')" @click="showBuyMinAmountPopup = true"
				:error-message="errorInfo4BuyBill.buyLowestAmount"/>
				<van-action-sheet
				  v-model="showBuyMinAmountPopup"
				  :actions="actionsMin"
				  cancel-text="取消"
				  close-on-click-action
				  description="请选择最低匹配数量"
				  @select="onSelectMin"
				  @cancel="onCancelMin"
				/>
				<van-field v-model="form4BuyBill.price" @blur="validate4BuyBill('price')" readonly type="number" label="买入单价(￥)" placeholder="请填写单价"
				:error-message="errorInfo4BuyBill.price"/>
				<!-- <div class="paddingWing tip4model3 margT3">最新可挂买入单价和当前最高价之间的上下浮动区间约为10%({{buyMinPrice}}~{{buyMaxPrice}}￥)</div> -->
				<!-- <div class="paddingWing tip4model3RedText margT3">当前买单的单价区间为：{{buyMinPrice}}~{{buyMaxPrice}}￥</div> -->
				<!-- <div class="inLine">
					<span class="label">调价格</span>
					<span class="value">
						<span class="valueRight">
							<van-slider v-model="addPriceValue" @change="onChange4sliderPrice" :min="min4Price" :max="max4Price"/>
						</span>
					</span>
				</div> -->
				<van-field v-model="form4BuyBill.safePassword" type="password" required clearable label="安全密码" placeholder="请填写安全密码"
				  @blur="validate4BuyBill('safePassword')"
				  :error-message="errorInfo4BuyBill.safePassword"
				  />
				</van-cell-group>
				<div class="sureAppointBtnBox">
					<div class="tip4modelNew">
						<b class="textBold">买家需知：</b><br>
						1.交易默认收款方式为支付宝，若用微信转账，<b class="yellow textBold">请不要用微信红包转账</b>，只可通过【支付--收付款】中的向手机号转账；若是小额转账，务必使用支付宝或微信完成，银行卡转账只应对大额交易。<br>
						2.平台为保证交易的顺利进行，请买家务必校对卖家的真实姓名，<b class="yellow textBold">若卖家的支付宝未实名</b>或<b class="yellow textBold">真实姓名若与收款账户里的不一致，请买家点申诉反馈问题</b>，情况属实买方会得到贡献值奖励。<br>
						3.买单被匹配后，买家需及时付款，若超时付款被卖家申诉而取消交易，买家会被扣10个可售额度。买家付款后，卖家因超时确认被买家申诉后，系统会帮忙确认，且扣卖家5个可售额度。<br>
						4.若多次违规而有扰乱市场秩序嫌疑的，将会从严处理。
					</div>
					<!-- <div class="tip4model3">系统提示：卖出匹配是随机的，最新挂买的前{{dealPageInfo.limit}}单会优先被匹配。</div> -->
					<!-- <div class="tip4model3">系统提示：平价区的匹配机制为随机匹配，被匹配后有2小时的交易时间，买家锁定交易后，可继续往后延长2小时的交易时间。（同时，交易过程中若遇到问题，随时都可以点申诉反馈问题按钮，若是特殊情况，最好主动联系客服让客服介入调查或协调）</div> -->
					<div class="placeholderLine10"></div>
					<!-- <div class="tip4model3RedText">买单匹配后务必要完成交易，否则很可能会被系统回收一定数量的贡献值或矿石;贡献值若为负数无法进行交易、租赁和启动矿机。</div>
					<div class="placeholderLine10"></div> -->
				    <van-button @click="sureHangBuyBillBtn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :loading="loading4Buy" :block="true">确 认</van-button>
				</div>
			</div>
		</van-action-sheet>
		<van-action-sheet v-model="showTipModel" title="问题小帮手">
			<div class="paddingWing">
				<div class="placeholderLine40"></div>
				<div class="textCenter f-12">
				</div>
				<div class="placeholderLine40"></div>
				<div class="placeholderLine40"></div>
			</div>
		</van-action-sheet>
    </div>
</template>

<script>
// import { ajax } from "@/api/ajax";
import mHeader from '@/components/Header.vue';
import mFullscreen from '@/components/Fullscreen.vue';
import { Skeleton,Toast,Dialog } from 'vant';
import { myMixin } from '@/assets/js/myMixin.js';
export default {
	mixins:[myMixin],
	name:"deal",
	data() {
		return {
			showBuyModel4Newbie:false,
			isRead:0,
			sendSmsHref:"",
			smsContent:"",
			showSendSMSTipModel:false,
			questionText:"",
			showTipModel:false,
			addPriceValue:0.0,
			min4Price:0,
			max4Price:100,
			buyMinPrice:1,
			buyGuidePrice:10,
			buyMaxPrice:13,
			min4Price4NewBie:0,
			max4Price4NewBie:100,
			step4Price:0.01,
			currentMaxPrice:0,
			sellBtnLoading:false,
			tabActiveName:"dealArea2",
			currentPage1:1,
			currentPage2:1,
			currentPage3:1,
			currentPage4:1,
			pageSize:20,
			pageSize3:3,
			newbiePagesize:7,
			pageCount:0,
			totalItems1:0,
			totalItems2:0,
			totalItems3:0,
			totalItems4:0,
			showAppointDealModel:false,//定向交易模型
			showBuyModel:false,//挂买单模型
			showSellModel:false,//挂卖单模型
			showPickSellModel:false,//指定卖出
			//定向交易
			sellAmount:"",
			univalence:"",
			blockAddress:"",
			//挂买单
			form4BuyBill:{
				buyAmount:"",
				buyLowestAmount:3,
				price:"",
				safePassword:"",
			},
			errorInfo4BuyBill:{
				buyAmount:"",
				buyLowestAmount:"",
				price:"",
				safePassword:"",
			},
			serviceCharge:'',
			//挂所选择的卖单
			form4pickSellBill:{
				sellAmount:100,
				sellLowestAmount:1,
				sellAmountSliderValue:1,
				price:17,
				serviceCharge:1,
				safePassword:"",
				idCard:""
			},
			errorInfo4pickSellBill:{
				serviceCharge:"",
				safePassword:"",
				idCard:""
			},
			//定向交易
			form4AppointDeal:{
				sellAmount:'',
				price:'',
				serviceCharge:0,
				safePassword:"",
			},
			errorInfo4AppointDeal:{
				sellAmount:"",
				price:"",
				blockAddress:"",
				safePassword:"",
			},
			form3:{
				id:'',
				num:'',
				price:'',
				safePassword:"",
				idCard:""
			},
			sellAmountPlaceholder:"单笔挂卖数量的区间为3~500",
			minBuyAmount:3,
			minBill:3,
			maxBill:500,
			appintDealValidate:true,
			clickIconTip:{
				sellAmount:"",
				univalence:"",
				blockAddress:"",
				buyAmount:"",
				buyLowestAmount:"",
				price:"",
				platformUnivalence:"",
				serviceCharge:"",
				safePassword:""
			},
			errorInfo:{
				sellAmount:"",
				univalence:"",
				blockAddress:"",
				buyAmount:"",
				buyLowestAmount:"",
				safePassword:"",
			},
			isShowSureBtn:false,
			list1:[],
			loading1:false,
			finished1: false,
			list2:[],
			loading2: true,
			finished2: false,
			list3:[],
			loading3: true,
			finished3: false,
			list4:[],
			loading4: true,
			finished4: false,
			currentBuyNum:1314216,
			userInfo:"",
			userIdBuyBillCount:0,
			userIdSellBillCount:0,
			loading: true,
			canBuyNum:2000,
			columns4ServiceCharge: [],
			columns4BuyAmount: [
				{id:1,text:3},
				{id:2,text:5},
				{id:3,text:10},
				{id:4,text:20},
				{id:5,text:50},
				{id:6,text:100},
				{id:7,text:200}
			],
			showBuyAmountPopup:false,
			showBuyMinAmountPopup:false,
			actions: [{name:10},{name:20},{name:50},{name:100},{name:200},{name:500},{name:1000}],
			actionsMin: [{name:1},{name:3},{name:5},{name:10},{name:20},{name:50},{name:100},{name:200}],
			showPicker4ServiceChargePopup: false,
			platformTicket:0,
			buyAndSellInfo:{},
			dealPageInfo:{
				currentBuyNum:'',
				currentPriceBuyNum:100000,
				todayTransactionNum:100000,
				initCanBuyNu:100000,
				currentPlatformPrice:100000
			},
			transactionVo4BuyerTip:"",
			loading4Buy:false,
			pages:0,
			pagesPlatPrice:0,
			buyLowestAmountText:"最低匹配数量请填写1~500之间",
			tabName:"",
			showPickBuyModel:false,
			timeRead:10,
			isDealDisabled:true,
			showTipModel3Deal:false,
			buyBillInfo:'',
			usePt:'',
			dealBtnLoading:false,
			buyBillNum:0
		}
	},  
	components:{
	    mHeader,mFullscreen
	},
	watch: {
	    addPriceValue(val, oldVal) {
			let _this = this;
			let currentMaxPrice = parseFloat(_this.dealPageInfo.currentMaxPrice);
	        //console.log("addPriceValue = " + val + " , oldValue = " + oldVal);
			if(val == 0){
				/* _this.form4BuyBill.price = currentPlatPrice/2; */
				_this.form4BuyBill.price = parseFloat(currentMaxPrice)-3;
			}else{
				let addValue = (val/100);
				_this.form4BuyBill.price = ((parseFloat(currentMaxPrice)-3) + addValue).toFixed(1);
			}
	    },
		addPriceValue4Newbie(val, oldVal) {
			let _this = this;
			let currentPlatPrice = parseFloat(_this.dealPageInfo.currentPlatformPrice);
		    //console.log("addPriceValue = " + val + " , oldValue = " + oldVal);
			if(val == 0){
				_this.form4BuyBill.price = currentPlatPrice;
			}else{
				let addValue = (val/100);
				_this.form4BuyBill.price = (currentPlatPrice*addValue).toFixed(1);
			}
		}
	},
	computed:{
		/* remainContributionValue () {
			let _this = this;
			let num = _this.userInfo.contributionValue - _this.form4pickSellBill.sellAmountSliderValue;
			return num.toFixed(2);
		}, */
		remainMineral () {
			let _this = this;
			let num = 0
			if(_this.form4pickSellBill.serviceCharge==0){
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue*(1.0+_this.dealPageInfo.dealRatio);
			}else if(_this.form4pickSellBill.serviceCharge==3){
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue*(1.0+_this.dealPageInfo.newbieRatio);
			}else if(_this.form4pickSellBill.serviceCharge==2){
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue;
			}else if(_this.form4pickSellBill.serviceCharge==5){
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue;
			}else{
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue*1.1;
			}
			return num.toFixed(2); 
		},
		remainPlateForm () {
			let _this = this;
			// //console.log('_this.userInfo.platformTicket',_this.platformTicket);
			let num = 0;//_this.userInfo.platformTicket
			let price = _this.form4pickSellBill.price;
			if(_this.form4pickSellBill.serviceCharge==0){
				num = _this.platformTicket;
			}else if(_this.form4pickSellBill.serviceCharge==1||_this.form4pickSellBill.serviceCharge==3){
				num = _this.platformTicket - _this.form4pickSellBill.sellAmountSliderValue*price*0.1;
				/* if(num<0){
					num = _this.platformTicket;
					return num;
				} */
			}else if(_this.form4pickSellBill.serviceCharge==2){
				num = _this.platformTicket - _this.form4pickSellBill.sellAmountSliderValue*price*0.3;
			}
			// //console.log('num',num);
			return num.toFixed(2); 
		}
	},
	created() {
		let _this = this;
		console.log("_this.userInfo",_this.userInfo);
		_this.platformTicket = parseFloat(_this.userInfo.platformTicket);
		_this.canBuyNum = parseFloat(_this.userInfo.canBuyNum || 0);
		console.log("platformTicket",_this.platformTicket);
		console.log("canBuyNum",_this.canBuyNum);
		//_this.pages = parseInt(_this.$cookies.get('pages')) || 0;
		_this.pagesPlatPrice = parseInt(_this.$cookies.get('pagesPlatPrice')) || 0;
		//console.log("_this.$cookies.get('haveDealPageInfo')",_this.$cookies.get('haveDealPageInfo'));
		_this.getDealPageInfo();
		//给人买卖信息，次缓存来自我的页面
		/* if(_this.$cookies.get("buyAndSellInfo")){
			_this.buyAndSellInfo = _this.$cookies.get("buyAndSellInfo");
			_this.canBuyNum = _this.buyAndSellInfo.canBuyNum;
		}else{
			_this.getBuyAndSellInfo();
		} */
		_this.clickIconTip = {
			sellAmount:"请填写单次挂卖数量",
			univalence:_this.$reg.univalenceHint,
			blockAddress:_this.$reg.block_addressHint,
			buyAmount:_this.$reg.positive_integerHint4BuyBill,
			buyLowestAmount:"最低匹配数量请填写1~300之间",
			price:"请填写想要买入的单价",
			platformUnivalence:"请按平台指导价挂单",
			serviceCharge:"请先选择服务费",
			safePassword:_this.$reg.safePasswordHint
		}
		/* if(_this.$cookies.get('isRefreshDealInfo')==1){
			_this.refreshEvent();
			_this.$cookies.remove('isRefreshDealInfo');
			_this.$cookies.set('isRefreshDealInfo',0,_this.$api.cookiesTime);
		} */
		_this.getListAddPrice();
		//_this.bsTip();
		//_this.initializeData();
		//_this.initializeTabActiveName();
	},
	methods:{
		onSelect(item){
			let _this = this;
			_this.form4BuyBill.buyAmount = item.name;
			let minAmount = 3;
			if(item.name>300){
				_this.form4BuyBill.buyLowestAmount = 10;
			}else{
				_this.form4BuyBill.buyLowestAmount = 3;
			}
			_this.showBuyAmountPopup = false;
		},
		onSelectMin(item){
			let _this = this;
			_this.form4BuyBill.buyLowestAmount = item.name;
			_this.showBuyMinAmountPopup = false;
			if(Number(_this.form4BuyBill.buyAmount)<Number(_this.form4BuyBill.buyLowestAmount)){
				// _this.$toast('想买数量和最低匹配数量填写反了');
				Dialog.alert({
				  title: '系统提示',
				  message: `【挂买数量】需大于【最低匹配数量】。`
				}).then(() => {
				  // on close
				});
				return;
			}
		},
		onCancel() {
			let _this = this;
			_this.showBuyAmountPopup = false;
			//Toast('取消');
		},
		onCancelMin() {
			let _this = this;
			_this.showBuyMinAmountPopup = false;
			//Toast('取消');
		},
		openDealRule(){
			let _this = this;
			if(_this.userInfo.buyTimes>0){
				_this.timeRead = 3;
			}else{
				_this.timeRead = 10;
			}
			_this.showTipModel3Deal=true;
			_this.timeReadEvent();
		},
		timeReadEvent(){
			let _this = this;
			let result = setInterval(function(){
				if(_this.timeRead==0){
					_this.isDealDisabled = false;
					_this.timeRead = "已阅读";
					clearInterval(result);
				}else{
					_this.timeRead = _this.timeRead - 1;
				}
			},1000);
		},
		isReadChange(val){
			let _this = this;
			_this.isRead = val;
			//console.log("isRead",_this.isRead);
		},
		onChange4sliderPrice(value){
			//console.log(value);
			let _this = this;
			if(value == 0){
				_this.form4BuyBill.price = parseFloat(_this.dealPageInfo.currentMaxPrice)-3;
			}else{
				let addValue = (value/100);
				_this.form4BuyBill.price = (parseFloat(_this.dealPageInfo.currentMaxPrice)-3 + addValue).toFixed(1);
				//_this.form4BuyBill.price = (parseFloat(_this.currentMaxPrice)-parseFloat(_this.dealPageInfo.currentPlatformPrice) + addValue).toFixed(2);
			}
		},
		/* onChange4sliderPrice4Newbie(value){
			//console.log(value,"value");
			let _this = this;
			let currentPlatformPrice = parseFloat(_this.dealPageInfo.currentPlatformPrice);
			//console.log(currentPlatformPrice,"currentPlatformPrice");
			if(value == 0){
				_this.form4BuyBill.price = currentPlatformPrice;
			}else{
				let addValue = (value/100);
				_this.form4BuyBill.price = (currentPlatformPrice*addValue).toFixed(2);
			}
		}, */
		bsTip(){
			let _this = this;
			let isWeixin = _this.$utils.isWeixin();
			if(isWeixin){
				Dialog.alert({
				  title: '系统提示',
				  message: _this.$api.bsTip
				}).then(() => {
				  // on close
				});
			}
		},
		alertTip(text){
			this.showTipModel = true;
			this.questionText = text;
		},
		onConfirm4ServiceCharge(item) {
			let _this = this;
			if(_this.userInfo.myCalculationPower<1&&item.id==1){
				Dialog.alert({
					title: '系统提示',
					message: '该手续费只能由个人算力大于1G的会员选择'
				}).then(() => {
					// on close message: '个人算力不到1G的矿工暂时只能选择【20%矿石+交易总金额的10%帮扶券】作为手续费'
				});
			}else{
				_this.serviceCharge = item.text;
				_this.form4pickSellBill.serviceCharge = item.id;
				_this.showPicker4ServiceChargePopup = false;
				if(_this.form4pickSellBill.serviceCharge == 1){
					_this.maxBill = Math.floor(_this.maxBill*1.1);
				}else if(_this.form4pickSellBill.serviceCharge == 0){
					_this.maxBill = Math.floor(_this.maxBill*(1.0 + _this.dealPageInfo.dealRatio));
				}else if(_this.form4pickSellBill.serviceCharge == 2){
					_this.maxBill = Math.floor(_this.maxBill);
				}else if(_this.form4pickSellBill.serviceCharge == 3){
					_this.maxBill = Math.floor(_this.maxBill*(1.0+_this.dealPageInfo.newbieRatio));
				}else if(_this.form4pickSellBill.serviceCharge == 5){
					_this.maxBill = Math.floor(_this.maxBill);
				}
			}
			/* _this.serviceCharge = item.text;
			_this.form4pickSellBill.serviceCharge = item.id;
			_this.showPicker4ServiceChargePopup = false;
			if(_this.form4pickSellBill.serviceCharge == 1){
				_this.maxBill = Math.floor(_this.maxBill*1.1);
			}else if(_this.form4pickSellBill.serviceCharge == 0){
				_this.maxBill = Math.floor(_this.maxBill*(1.0 + _this.dealPageInfo.dealRatio));
			}else if(_this.form4pickSellBill.serviceCharge == 3){
				_this.maxBill = Math.floor(_this.maxBill*(1.0+_this.dealPageInfo.newbieRatio));
			} */
		},
		onChange4ServiceCharge(picker, value, index) {
		  Toast(`当前值：${value}, 当前索引：${index}`);
		},
		onChange4slider(value){
			//console.log(value);
		},
		toMyDealPage(){
			let _this = this;
			_this.$router.push('/myDeal4Deal');
		},
		refreshEvent() {
			let _this = this;
			//console.log("refresh:",_this.tabActiveName);
			_this.getDealPageInfo();
			if(_this.tabActiveName == 'dealArea1'){
				//console.log("refresh1");
				_this.currentPage1 = 1;
				// _this.list1 = [];
				_this.finished1 = false;
				_this.getListGeneral();
			}else if(_this.tabActiveName == 'dealArea2'){
				//console.log("refresh2");
				_this.currentPage2 = 1;
				_this.list2 = [];
				_this.finished2 = false;
				//console.log("refreshEvent dealArea2");
				_this.getListAddPrice();
			}else if(_this.tabActiveName == 'dealArea3'){
				//console.log("refresh2");
				_this.currentPage3 = 1;
				_this.list3 = [];
				_this.finished3 = false;
				_this.getSellBillList();
			}else if(_this.tabActiveName == 'dealArea4'){
				//console.log("refresh2");
				_this.currentPage4 = 1;
				_this.list4 = [];
				_this.finished4 = false;
				_this.getNewbieBillList();
			}
		},
		totalPrice(a,b){
			return (a*b).toFixed(2);
		},
		tabChange(name,title){
			let _this = this;
			// _this.tabName = name;
			_this.tabActiveName == name;
			//console.log(name,title);
			this.$cookies.set("tabName4Deal", name, 60 * 60 * 1)
			if(name == 'dealArea2'){
				_this.getListAddPrice();
			}else if(name == 'dealArea1'){
				if(_this.$cookies.get('totalItems1')){
					_this.list1 = JSON.parse(localStorage.getItem("LIST1"));
					_this.totalItems1 = parseInt(_this.$cookies.get('totalItems1'));
					_this.pagesPlatPrice = parseInt(_this.$cookies.get('pagesPlatPrice'));
					//console.log('_this.totalItems1',_this.totalItems1);
				}else{
					_this.getListGeneral();
				}
			}else if(name == 'dealArea3'){
				if(_this.$cookies.get('totalItems3')){
					_this.list3 = JSON.parse(localStorage.getItem("LIST3"));
					_this.totalItems3 = parseInt(_this.$cookies.get('totalItems3'));
					_this.pagesPlatPrice = parseInt(_this.$cookies.get('pagesPlatPrice'));
					//console.log('_this.totalItems1',_this.totalItems1);
				}else{
					_this.getSellBillList();
				}
			}else if(name == 'dealArea4'){
				if(_this.$cookies.get('totalItems4')){
					_this.list4 = JSON.parse(localStorage.getItem("LIST4"));
					_this.totalItems4 = parseInt(_this.$cookies.get('totalItems4'));
					_this.pagesPlatPrice = parseInt(_this.$cookies.get('pagesPlatPrice'));
					//console.log('_this.totalItems1',_this.totalItems1);
				}else{
					_this.getNewbieBillList();
				}
			}
		},
		getBuyBillInfo(){
			let _this = this;
			Toast.loading({
			  message: '加载中...',
			  forbidClick: true,
			  loadingType: 'spinner'
			});
			_this.$ajax.ajax(_this.$api.getBuyBillInfo, 'GET', null, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.buyBillInfo = res.data;
					_this.form4pickSellBill.price = res.data.maxPrice;
				}else{
					_this.$toast(res.message);
				}
			},function(){
				Toast.clear();
			})
		},
		getDealPageInfo(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.getDealPageInfo, 'POST', null, function(res) {
				//console.log('getDealPageInfo', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.dealPageInfo = res.data;
					//console.log('dealPageInfo', _this.dealPageInfo);
					_this.newbiePagesize = _this.dealPageInfo.newbiePagesize;
					//console.log('newbiePagesize', _this.newbiePagesize);
					_this.minPrice = Number((parseFloat(_this.dealPageInfo.maxPrice)).toFixed(2));
					/* _this.buyMinPrice = parseFloat(parseFloat(_this.dealPageInfo.currentMaxPrice).toFixed(1)) - 3;
					_this.buyMaxPrice = parseFloat(parseFloat(_this.dealPageInfo.currentMaxPrice).toFixed(1)); */
					/* _this.buyMinPrice = parseFloat(parseFloat(_this.dealPageInfo.currentMaxPrice).toFixed(1)) - 3;*/
					_this.maxPrice = (parseFloat(_this.dealPageInfo.currentMaxPrice)).toFixed(2);
					_this.buyMinPrice = 0.01;
					_this.buyMaxPrice = (parseFloat(_this.maxPrice)).toFixed(2);
					/* _this.buyMinPrice = (parseFloat(_this.maxPrice) - parseFloat(_this.maxPrice)*0.1).toFixed(1); */
					/* _this.buyMaxPrice = (parseFloat(_this.maxPrice) + parseFloat(_this.maxPrice)*0.1).toFixed(2); */
					_this.buyGuidePrice = parseFloat(parseFloat(_this.dealPageInfo.currentMaxPrice).toFixed(2));
					//_this.buyMaxPrice = parseFloat(parseFloat(_this.dealPageInfo.currentPlatformPrice).toFixed(1)); 
					//_this.form4pickSellBill.price = _this.minPrice;
					//_this.currentMaxPrice = _this.dealPageInfo.maxPrice;
					_this.dealPageInfo.currentBuyNum = _this.dealPageInfo.currentBuyNum.toFixed(2);
					_this.form4pickSellBill.serviceCharge = 5;
					//_this.usePt=_this.dealPageInfo.dealNeedTicket;
					//_this.serviceCharge = _this.usePt;
					_this.serviceCharge = `${_this.usePt}个帮扶券`;
					_this.columns4ServiceCharge = [{id:5,text:_this.serviceCharge}];
					_this.form4BuyBill.price = parseFloat(_this.dealPageInfo.currentMaxPrice);
					//_this.form4BuyBill.price = parseFloat(_this.dealPageInfo.maxPrice);
					/* _this.clickIconTip.buyLowestAmount = `最低匹配数量请填写1~500之间`;
					_this.buyLowestAmountText = `最低匹配数量请填写1~500之间`; */
					//_this.clickIconTip.buyLowestAmount = `最低匹配数量请填写${_this.minBuyAmount}~${_this.dealPageInfo.minBuyBillNum}之间`;
					//_this.buyLowestAmountText = `最低匹配数量请填写${_this.minBuyAmount}~${_this.dealPageInfo.minBuyBillNum}之间`;
					/* _this.$cookies.remove('haveDealPageInfo');
					_this.$cookies.set("haveDealPageInfo",1, 60 * 60 * 2);
					localStorage.setItem("dealPageInfo",JSON.stringify(_this.dealPageInfo)) */
				}else{
					_this.$toast(res.message);
				}
			})
		},
		getSellBillList(){
			let _this = this;
			let params = {
				pageNo: _this.currentPage3,
				pageSize: _this.pageSize3
			}
			//console.log(params,'params')
			_this.loading3 = true;
			_this.$ajax.ajax(_this.$api.getAssistSellBillList, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.list3 = res.data.list;
					_this.totalItems3 = res.data.total;
					_this.pagesPlatPrice = res.data.pages;
					_this.$cookies.set("pagesPlatPrice", _this.pagesPlatPrice, 60 * 30 * 1);
					_this.$cookies.set("totalItems3", _this.totalItems3, 60 * 30 * 1)
					if(_this.list3==[]){
						
					}else{
						localStorage.setItem("LIST3",JSON.stringify(_this.list3));
					}
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.loading3 = false;
				_this.loading = false;
			})
		},
		getListAddPrice(){
			let _this = this;
			let params = {
				pageNo: _this.currentPage2,
				pageSize: _this.pageSize
			}
			_this.loading2 = true;
			const toast = Toast.loading({
			  forbidClick: true,
			  message: '加载中...',
			});
			_this.$ajax.ajax(_this.$api.getAssistBuyBillListAddPricePage, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.list2 = res.data.list;
					_this.totalItems2 = res.data.total;
					_this.pages = res.data.pages;
					/* _this.$cookies.set("pages", _this.pages, 60 * 30 * 1);
					_this.$cookies.set("totalItems2", _this.totalItems2, 60 * 30 * 1);
					localStorage.setItem("LIST2",JSON.stringify(_this.list2)); */
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.loading2 = false;
				_this.loading = false;
				Toast.clear();
			})
		},
		initializeTabActiveName(){
			let _this = this;
			if(_this.$cookies.isKey("tabName4Deal")){
				_this.tabActiveName = _this.$cookies.get("tabName4Deal");
			}
			if(_this.tabActiveName == "dealArea2" || localStorage.getItem("LIST2")){
				if(_this.$cookies.isKey("totalItems2")){
					_this.totalItems2 = parseInt(_this.$cookies.get("totalItems2"));
					_this.list2 = JSON.parse(localStorage.getItem("LIST2"))|| [];
					_this.loading = false;
				}else{
					_this.getListAddPrice();
				}
			}else if(_this.tabActiveName == "dealArea1"){
				if(_this.$cookies.isKey("totalItems1")){
					_this.totalItems1 = parseInt(_this.$cookies.get("totalItems1"));
					if(_this.totalItems1&&localStorage.getItem("LIST1")){
						//从缓存中获取list1,先立刻加载出页面，然后再从接口中获取数据list1，提高用户体验
						_this.list1 = JSON.parse(localStorage.getItem("LIST1"))|| [];
						_this.list2 = JSON.parse(localStorage.getItem("LIST2"))|| [];
						_this.loading = false;
					}else{
						_this.getListGeneral();
					}
				}else{
					_this.getListGeneral();
				}
			}else if(_this.tabActiveName == "dealArea3"){
				if(_this.$cookies.isKey("totalItems3")){
					_this.totalItems3 = parseInt(_this.$cookies.get("totalItems3"));
					if(_this.totalItems3&&localStorage.getItem("LIST3")){
						//从缓存中获取list1,先立刻加载出页面，然后再从接口中获取数据list1，提高用户体验
						_this.list1 = JSON.parse(localStorage.getItem("LIST1"))|| [];
						_this.list2 = JSON.parse(localStorage.getItem("LIST2"))|| [];
						_this.list3 = JSON.parse(localStorage.getItem("LIST3"))|| [];
						_this.loading = false;
					}else{
						_this.getSellBillList();
					}
				}else{
					_this.getSellBillList();
				}
			}else if(_this.tabActiveName == "dealArea4"){
				if(_this.$cookies.isKey("totalItems4")){
					_this.totalItems4 = parseInt(_this.$cookies.get("totalItems4"));
					if(_this.totalItems4&&localStorage.getItem("LIST4")){
						//从缓存中获取list1,先立刻加载出页面，然后再从接口中获取数据list1，提高用户体验
						_this.list1 = JSON.parse(localStorage.getItem("LIST1"))|| [];
						_this.list2 = JSON.parse(localStorage.getItem("LIST2"))|| [];
						_this.list3 = JSON.parse(localStorage.getItem("LIST3"))|| [];
						_this.list4 = JSON.parse(localStorage.getItem("LIST4"))|| [];
						_this.loading = false;
					}else{
						_this.getNewbieBillList();
					}
				}else{
					_this.getNewbieBillList();
				}
			}
		},
		showPickSellModelBtn(item){
			let _this = this;
			
			/* _this.getThisPriceBuyBillNum(item);
			if(_this.buyBillNum<3){
				Dialog.alert({
				  title: '系统提示',
				  message: '当前价格的买单数需超过3单后才可匹配，请选择其他价格的买单试试'
				}).then(() => {
				  // on close
				});
				return;
			} */
			// 如果用户在中途选择了第二种服务费，最大可卖数量要在原来基础上加10%
			//卖出需要贡献值
			// let myContributionValue = _this.userInfo.contributionValue;
			let myMineralNum = _this.userInfo.thisWeekMineral;
			let myMaxCanSellNum = 0;
			let ratio = _this.dealPageInfo.dealRatio;
			if(_this.form4pickSellBill.serviceCharge==0){
				myMaxCanSellNum = myMineralNum/(1.0 + ratio);
			}else if(_this.form4pickSellBill.serviceCharge==1){
				myMaxCanSellNum = myMineralNum/1.1;
			}else if(_this.form4pickSellBill.serviceCharge==2){
				myMaxCanSellNum = myMineralNum;
			}else if(_this.form4pickSellBill.serviceCharge==3){
				myMaxCanSellNum = myMineralNum/(1.0+_this.dealPageInfo.newbieRatio);
			}else if(_this.form4pickSellBill.serviceCharge==5){
				myMaxCanSellNum = myMineralNum;
			}
			if(myMaxCanSellNum>=item.minNumber&&myMaxCanSellNum<=item.maxNumber){
				_this.maxBill = Math.floor(myMaxCanSellNum);
			}
			if(myMaxCanSellNum>=item.maxNumber){
				_this.maxBill = Math.floor(item.maxNumber);
			}
			//console.log("myMaxCanSellNum",myMaxCanSellNum);
			if(myMaxCanSellNum<item.minNumber){
				Dialog.alert({
				  title: '系统提示',
				  message: '您的最大可卖数量不够匹配该买单。'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.showPickSellModel = true;
			_this.form4pickSellBill.price = item.price;
			_this.form4pickSellBill.sellAmountSliderValue = item.minNumber;
			_this.minBill = item.minNumber;
			//console.log('_this.maxBill',_this.maxBill);
		},
		async getThisPriceBuyBillNum(item){
			let _this = this;
			let params = {
				price:item.price
			}
			_this.dealBtnLoading = true;
			await _this.$ajax.ajax(_this.$api.getThisPriceBuyBillNum, 'GET', params, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.buyBillNum=Number(res.data);
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.dealBtnLoading = false;
			})
		},
		ShowBuyTAModelBtn(item){
			let _this = this;
			if(_this.userInfo.contributionValue<0){
				Dialog.alert({
				  title: '系统提示',
				  message: '您的贡献值为负数，无法进行该操作。'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.showPickBuyModel = true;
			_this.form3.num = item.minNumber;
			_this.form3.price = item.price;
			_this.form3.id = item.id;
			//console.log('_this.maxBill',_this.maxBill);
		},
		//匹配服务商的卖单-建立交易单子
		surePickedBuyBillBtn(){
			let _this = this;
			//挂卖之前先判断时间
			/* if(_this.$utils.getTimeHMS(new Date())>'21:00:00'){
				Dialog.alert({
				  title: '系统提示',
				  message: '交易时间是9~21点，请明天再来'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
				Dialog.alert({
				  title: '系统提示',
				  message: '交易时间是9~21点，请到点再来'
				}).then(() => {
				  // on close
				});
				return;
			} */
			//判断是否勾选交易规则
			if(_this.isRead == 0){
				Dialog.alert({
				  title: '系统提示',
				  message: '尊敬的矿工，请先认真阅读交易规则'
				}).then(() => {
				  // on close
				});
				return;
			}
			let params = {
				id:_this.form3.id,
				serviceCharge:1,
				num:_this.form3.num,
				price:_this.form3.price,
				safePassword:_this.$JsEncrypt.encrypt(_this.form3.safePassword),
				idCard:_this.form3.idCard
			}
			//console.log("params",params);
			if(_this.$utils.hasNull(params)){
				_this.$toast('请填写完整信息');
				return;
			}
			/* if(_this.$utils.hasVal(_this.errorInfo4pickSellBill)){
				_this.$toast('请按要求填写信息');
				return;
			} */
			_this.sellBtnLoading = true;
			_this.$ajax.ajax(_this.$api.insertTransaction4PickSellBill, 'POST', params, function(res) {
				
				if (res.code == _this.$api.CODE_OK) { // 200
					
					_this.showSellModel = false;
					_this.transactionVo4BuyerTip = res.data;
					
					//_this.showSendSMSTipModel = true;
					//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
					_this.$cookies.set('isRefreshUserInfo',true,_this.$api.cookiesTime);
					//路由跳转
					//缓存所需要显示的页面
					_this.$cookies.set("tabName4MyDeal", "pay", 60 * 60 * 1)
					//_this.$router.push({path:'myDeal',query:{dealType:2,mobilePhone:_this.transactionVo4BuyerTip.mobilePhone,num:_this.transactionVo4BuyerTip.num}});
					_this.$router.push('myDeal');
					
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
				}
			},function(){
				_this.sellBtnLoading = false;
			})
		},
		//匹配买单
		sureHangPickedSellBillBtn(){
			let _this = this;
			//判断是否勾选交易规则
			if(_this.isRead == 0){
				Dialog.alert({
				  title: '系统提示',
				  message: '尊敬的矿工，请先认真阅读交易规则'
				}).then(() => {
				  // on close
				});
				return;
			}
			//挂卖之前先判断时间
			/* if(_this.$utils.getTimeHMS(new Date())>'20:00:00'){
				Dialog.alert({
				  title: '系统提示',
				  message: '交易时间是9~20点，请明天再来'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
				Dialog.alert({
				  title: '系统提示',
				  message: '交易时间是9~20点，请到点再来'
				}).then(() => {
				  // on close
				});
				return;
			} */
			if(_this.userInfo.manType==1){
				if(_this.userInfo.realnameNum<30||_this.userInfo.teamCalculationPower<30||_this.userInfo.buyAmount<300){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.manType1Tip
					}).then(() => {
					  // on close
					});
					return;
				}
			}
			let type = 1;
			if(_this.tabActiveName == 'dealArea4'){
				type = 2;
			}else{
				type = 1;
			}
			if(_this.userInfo.myCalculationPower<3){
				_this.form4pickSellBill.serviceCharge = 4;
			}else{
				_this.form4pickSellBill.serviceCharge = 1;
			}
			let params = {
				/* sellerId:_this.userInfo.userId, */
				serviceCharge:_this.form4pickSellBill.serviceCharge,
				num:_this.form4pickSellBill.sellAmountSliderValue,
				price:_this.form4pickSellBill.price,
				type:type,
				safePassword:_this.form4pickSellBill.safePassword,
				idCard:_this.form4pickSellBill.idCard
			}
			/* if(params.num<3.0){
				_this.$toast('最低匹配数量为3个');
				return;
			} */
			if(_this.userInfo.actived!=1 || _this.userInfo.buyMachineNum<2){
				Dialog.alert({
				  title: '系统提示',
				  message: `请先去完成"我的--任务中心"里的前2个基础任务`
				}).then(() => {
				  // on close
				});
				return;
			}
			if(!_this.$reg.positive_integer.test(params.num)){
				//卖出数量请填写成整数
				_this.$toast('卖出数量请选择一个正整数');
				return;
			}
			//console.log("params",params);
			if(_this.$utils.hasNull(params)){
				_this.$toast('请填写完整信息');
				return;
			}
			if(_this.$utils.hasVal(_this.errorInfo4pickSellBill)){
				_this.$toast('请按要求填写信息');
				return;
			}
			
			//console.log("_this.remainMineral",_this.remainMineral);
			/* if(_this.remainMineral<2.0){
				Dialog.alert({
				  title: '系统提示',
				  message: "卖出后所剩矿石数不得少于2个，注册所赠送的2个矿石是用来复投矿机的"
				}).then(() => {
				  // on close
				});
				return;
			} */
			/* if(_this.userInfo.thisWeekMineral - params.num){
				_this.$toast('系统提示：您的矿石不够');
				return;
			} */
			//判断该用户的矿石和贡献值够不够
			if(_this.userInfo.thisWeekMineral<params.num){
				_this.$toast('您的矿石不够');
				return;
			}
			/* if(params.num>200){
				//卖出数量请填写成整数
				//_this.$toast('目前阶段财团成员单次售出数量请不要超过5个');
				Dialog.alert({
				  title: '系统提示',
				  message: '目前阶段单次售出数量请不要超过200个'
				}).then(() => {
				  // on close
				});
				return;
			} */
			params.safePassword = _this.$JsEncrypt.encrypt(_this.form4pickSellBill.safePassword);
			_this.sellBtnLoading = true;
			_this.$ajax.ajax(_this.$api.insertTransaction4PickBill, 'POST', params, function(res) {
				
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.showSellModel = false;
					_this.transactionVo4BuyerTip = res.data;
					
					//_this.showSendSMSTipModel = true;
					//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
					_this.$cookies.set('isRefreshUserInfo',true,_this.$api.cookiesTime);
					//路由跳转
					//缓存所需要显示的页面
					_this.$cookies.set("tabName4MyDeal", "get", 60 * 60 * 1)
					_this.$router.push({path:'myDeal',query:{dealType:0,mobilePhone:_this.transactionVo4BuyerTip.mobilePhone,num:_this.transactionVo4BuyerTip.num}});
					
				}else{
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  // on close
					});
					/* if(res.code == 10015){
						Dialog.alert({
						  title: '系统提示',
						  message: '经系统检测，您是拥有内测矿机的会员，平台内测送的小矿是激励用户做团队的，请团队算力大于3G且直推实名超过20名后再进行该操作。温馨提示:个人算力1G可以在溢价区操作。'
						}).then(() => {
						  // on close
						});
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					} */
				}
			},function(){
				_this.sellBtnLoading = false;
			})
		},
		sendShortMessageBtn(){
			_this.sellBtnLoading = false;
			//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
			_this.$cookies.set('isRefreshUserInfo',true,_this.$api.cookiesTime);
			//路由跳转
			//缓存所需要显示的页面
			_this.$cookies.set("tabName4MyDeal", "get", 60 * 60 * 1)
			_this.$router.push('myDeal');
		},
		showSellModelBtn(){
			let _this = this;
			if(_this.userInfo.myCalculationPower<20){
				Dialog.alert({
				  title: '系统提示',
				  message: '挂卖操作需个人算力达到20G，若需卖出，可移步买单区匹配买单即可'
				}).then(() => {
				  // on close
				});
				//_this.$toast('挂卖操作需个人算力达到20G，若需卖出，可移步买单区匹配买单即可');
				return;
			}
			let params = {
				userId:_this.userInfo.userId,
				price:parseFloat(_this.dealPageInfo.currentPlatformPrice)
			}
			_this.$ajax.ajax(_this.$api.getMinAndMaxBuyBillByUserId, 'GET', params, function(res) {
				//console.log('res', res);
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.minBill = res.data.minBill;
					_this.maxBill = res.data.maxBill;
					_this.clickIconTip.sellAmount = `该单价单笔可挂卖量为${_this.minBill}~${_this.maxBill}`;
					_this.sellAmountPlaceholder = `单笔可挂卖量为${_this.minBill}~${_this.maxBill}`;
					_this.errorInfo4BuyBill.sellAmount = _this.clickIconTip.sellAmount;
				}else{
					_this.$toast(res.message);
				}
			})
			_this.$ajax.ajax(_this.$api.getAssistTransactionCountBySellerId, 'GET', null, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.userIdSellBillCount = res.data;
					if(_this.userIdSellBillCount>0){
						Dialog.alert({
						  title: '系统提示',
						  message: '对不起，您当前还有未完成交易，是否前去完成？'
						}).then(() => {
						  // on close
						  _this.$cookies.set("tabName4MyDeal", "get", 60 * 60 * 1)
						  _this.$router.push('myDeal');
						});
					}else{
						_this.showSellModel = true;
					}
				}else{
					_this.$toast(res.message);
				}
			})
		},
		showBuyModelBtn(){
			let _this = this;
			//_this.getBuyBillInfo();
			_this.$utils.formClear(_this.errorInfo4BuyBill);
			if(_this.tabActiveName == 'dealArea1' || _this.tabActiveName == 'dealArea2') {
				_this.showBuyModel = true;
			}else if(_this.tabActiveName == 'dealArea4'){
				if(_this.userInfo.buyAmount>=100){
					Dialog.alert({
					  title: '系统提示',
					  message: '只有买入数量在0~99之间的矿工才能在此区挂单'
					}).then(() => {
					  // on close
					  return;
					});
					return;
				}else{
					let currentMaxPrice = (parseFloat(_this.dealPageInfo.currentMaxPrice)).toFixed(2);
					_this.form4BuyBill.price = currentMaxPrice;
					_this.form4BuyBill.buyAmount = Number(100 - parseInt(_this.userInfo.buyAmount));
					_this.showBuyModel4Newbie = true;
				}
			}
			//_this.judgeMyBuyBill();
		},
		showSellModelBtn4New(){
			let _this = this;
			_this.showSellModel = true;
			/* _this.$utils.formClear(_this.errorInfo4BuyBill);
			if(parseFloat(_this.form4BuyBill.price)>0.07) {
				_this.showBuyModel = true;
			}else{
				window.location.reload();
			} */
		},
		judgeMyBuyBill(){
			let _this = this;
			let params = {
				userId: _this.userInfo.userId,
				price: parseFloat(_this.dealPageInfo.currentPlatformPrice)
			}
			_this.$ajax.ajax(_this.$api.getAssistBuyBillListCountByUserId, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.userIdBuyBillCount = res.data;
					if(_this.userIdBuyBillCount>0){
						Dialog.alert({
						  title: '系统提示',
						  message: '平台指导价每人暂时只能挂一个买单，前去查看您所挂的买单？'
						}).then(() => {
						  // on close
						  _this.$cookies.set("tabName4Book", "buy", 60 * 60 * 1)
						  _this.$router.push('myDeal');
						});
					}else{
						
					}
				}else{
					_this.$toast(res.message);
				}
			})
		},
		sureHangSellBillBtn(){
			let _this = this;
			let currentPlatformPrice = (parseFloat(_this.dealPageInfo.currentPlatformPrice)).toFixed(2);
			let currentMaxPrice = (parseFloat(_this.dealPageInfo.maxPrice)).toFixed(2);
			let minPrice = Number((parseFloat(_this.dealPageInfo.maxPrice)).toFixed(2));
			let maxPrice = (parseFloat(_this.dealPageInfo.currentPlatformPrice)*1.2);
			if(parseFloat(_this.form4pickSellBill.price)<parseFloat(minPrice)){
				_this.$toast(`今日卖单最低价格为${minPrice}￥`);
				return;
			}
			if(parseFloat(_this.form4pickSellBill.price)>parseFloat(maxPrice)){
				_this.$toast(`今日溢价卖单最高价为${maxPrice}￥`);
				return;
			}
			let params = {
				maxNumber:_this.form4pickSellBill.sellAmount,
				minNumber:_this.form4pickSellBill.sellLowestAmount,
				price:_this.form4pickSellBill.price,
				type:parseFloat(_this.form4pickSellBill.price)>parseFloat(currentMaxPrice)?1:0,
				safePassword:_this.form4pickSellBill.safePassword,
				buyOrSell:"sell"
			}
			//console.log("params",params);
			_this.loading4Buy = true;
			params.safePassword = _this.$JsEncrypt.encrypt(_this.form4pickSellBill.safePassword);
			_this.$ajax.ajax(_this.$api.insertBuyBill, 'POST', params, function(res) {
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.showSellModel = false;
					_this.$toast(res.message);
					// _this.getList();
					_this.$cookies.set("tabName4MyDeal", "sell", 60 * 60 * 1)
					_this.$cookies.set("isRefreshDealInfo", 1, 60 * 60 * 1)
					_this.$router.push('myDeal');
				}else if(res.code == 2003){
					Dialog.alert({
					  title: '系统提示',
					  message: res.message
					}).then(() => {
					  _this.$cookies.set("tabName4MyDeal", "sell", 60 * 60 * 1)
					  _this.$router.push('myDeal');
					});
					return;
				}else{
					_this.$toast(res.message);
				}
			},function(res){
				_this.loading4Buy = false;
			})
		},
		sureHangBuyBillBtn(){
			let _this = this;
			/* if(_this.userIdBuyBillCount>0){
				Dialog.alert({
				  title: '系统提示',
				  message: '同一价格每人只能挂一单买单，前去查看您所挂的买单？'
				}).then(() => {
				  // on close
				  _this.$cookies.set("tabName4Book", "buy", 60 * 60 * 1)
				  _this.$router.push('myDeal');
				});
				return;
			} */
			if(_this.userInfo.actived<=0){
				Dialog.alert({
				  title: '系统提示',
				  message: '挂单需先完成实名认证'
				}).then(() => {
				  // on close
				});
				return;
			}
			let currentPlatformPrice = (parseFloat(_this.dealPageInfo.currentPlatformPrice)).toFixed(2);
			let type = 1;
			if(_this.tabActiveName == 'dealArea4'){
				type = 2;
				let maxAmount = Number(100 - parseInt(_this.userInfo.buyAmount));
				if(parseFloat(_this.form4BuyBill.buyAmount)>parseFloat(maxAmount)){
					Dialog.alert({
					  title: '系统提示',
					  message: `您当前最高可挂数量为${parseFloat(maxAmount)}个，请重新填写`
					}).then(() => {
					  // on close
					});
					return;
				}
				if(parseFloat(_this.form4BuyBill.price)>parseFloat(currentPlatformPrice)){
					Dialog.alert({
					  title: '系统提示',
					  message: `新手区最高单价为${parseFloat(_this.dealPageInfo.currentPlatformPrice)}，请重新填写`
					}).then(() => {
					  // on close
					});
					return;
				}
			}
			//let maxPrice = (parseFloat(_this.dealPageInfo.currentPlatformPrice)*1.3 + 3).toFixed(2);
			let params = {
				/*userId:_this.userInfo.userId,
				serviceCharge:_this.form4BuyBill.serviceCharge, */
				maxNumber:_this.form4BuyBill.buyAmount,
				minNumber:_this.form4BuyBill.buyLowestAmount,
				price:_this.form4BuyBill.price,
				type:type,
				safePassword:_this.form4BuyBill.safePassword,
				buyOrSell:"buy"
			}
			
			/* if(Number(_this.dealPageInfo.minBuyBillNum)<Number(params.minNumber)){
				// _this.$toast('想买数量和最低匹配数量填写反了');
				Dialog.alert({
				  title: '系统提示',
				  message: `最低匹配数量暂时不得高于${_this.dealPageInfo.minBuyBillNum}。`
				}).then(() => {
				  // on close
				});
				return;
			} */
			if(_this.$utils.hasNull(params)){
				_this.$toast('请填写完整信息');
				return;
			}
			
			if(parseFloat(params.price)>parseFloat(_this.buyMaxPrice)){
				Dialog.alert({
				  title: '系统提示',
				  message: `当前最高可挂单价为${parseFloat(_this.buyMaxPrice)}，请调整`
				}).then(() => {
				  // on close
				});
				return;
			}
			if(parseFloat(params.price)<parseFloat(_this.buyMinPrice)){
				Dialog.alert({
				  title: '系统提示',
				  message: `当前最低可挂单价为${_this.buyMinPrice}，请调整`
				}).then(() => {
				  // on close
				});
				return;
			}
			if(Number(params.maxNumber)<Number(params.minNumber)){
				// _this.$toast('想买数量和最低匹配数量填写反了');
				Dialog.alert({
				  title: '系统提示',
				  message: `挂买数量需大于最低匹配数量，请调整`
				}).then(() => {
				  // on close
				});
				return;
			}
			//console.log('_this.errorInfo4BuyBill',_this.errorInfo4BuyBill);
			if(_this.$utils.hasVal(_this.errorInfo4BuyBill)){
				_this.$toast('请按要求填写信息');
				return;
			}else{
				//console.log('可请求接口');
				_this.loading4Buy = true;
				params.safePassword = _this.$JsEncrypt.encrypt(_this.form4BuyBill.safePassword);
				_this.$ajax.ajax(_this.$api.insertBuyBill, 'POST', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						if(res.data == 1){
							_this.showBuyModel = false;
							_this.$toast(res.message);
							// _this.getList();
							_this.$cookies.set("tabName4MyDeal", "buy", 60 * 60 * 1)
							//_this.$cookies.set("isRefreshDealInfo", 1, 60 * 60 * 1)
							_this.$router.push('myDeal');
						}
					}else if(res.code == 2003){
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						  _this.$cookies.set("tabName4MyDeal", "buy", 60 * 60 * 1)
						  _this.$router.push('myDeal');
						});
						return;
					}else{
						//_this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(res){
					_this.loading4Buy = false;
				})
			}
		},
		validate4BuyBill(key){
			let _this = this;
			if(key == 'buyAmount') {
				let buyAmount = Number(_this.form4BuyBill[key]);
				if(_this.$reg.positive_integer.test(buyAmount)){
					if(buyAmount>=1&&buyAmount<=_this.canBuyNum){
						_this.errorInfo4BuyBill.buyAmount = '';
					}else{
						_this.errorInfo4BuyBill.buyAmount = `您当前的限购数量为${_this.canBuyNum}`;
					}
				}else{
					_this.errorInfo4BuyBill.buyAmount = `请填写正整数`;
				}
			}else if(key == 'buyLowestAmount') {
				let thisLowestNum = Number(_this.form4BuyBill[key]);
				if(_this.$reg.positive_integer.test(thisLowestNum)){
					/* _this.clickIconTip.buyLowestAmount = `最低匹配数量请填写1~500之间`;
					_this.buyLowestAmountText = `最低匹配数量请填写1~500之间`;
					Number(_this.dealPageInfo.minBuyBillNum) */
					/* if(thisLowestNum>=_this.minBuyAmount)){
						_this.errorInfo4BuyBill.buyLowestAmount = '';
					}else{
						_this.errorInfo4BuyBill.buyLowestAmount = _this.buyLowestAmountText;
					} */
				}else{
					_this.errorInfo4BuyBill.buyAmount = `请填写正整数`;
				}
			}else if(key == 'price') {
				//console.log("price");
				_this.form4BuyBill.price = parseFloat((_this.form4BuyBill.price)).toFixed(2);
				if(_this.tabActiveName == 'dealArea4'){
					_this.form4BuyBill.price = parseFloat((_this.form4BuyBill.price)).toFixed(2);
				}
				let minPrice = parseFloat(_this.buyMinPrice).toFixed(2);
				let currentMaxPrice = parseFloat(_this.buyMaxPrice).toFixed(2);
				if(parseFloat(_this.form4BuyBill.price)<parseFloat(minPrice)){
					_this.errorInfo4BuyBill.price = `目前买单最低价可挂到${minPrice}￥`;
				}else{
					_this.errorInfo4BuyBill.price = '';
					if(parseFloat((_this.form4BuyBill.price))>parseFloat(currentMaxPrice)){
						_this.errorInfo4BuyBill.price = `目前买单最高价可挂到${currentMaxPrice}￥`;
					}else{
						_this.errorInfo4BuyBill.price = '';
					}
				}
			}else if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4BuyBill[key])){
					_this.errorInfo4BuyBill.safePassword = '';
				}else{
					_this.errorInfo4BuyBill.safePassword = _this.clickIconTip.safePassword;
				}
			}
		},
		validate4pickSellBill(key){
			let _this = this;
			if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4pickSellBill[key])){
					_this.errorInfo4pickSellBill.safePassword = '';
				}else{
					_this.errorInfo4pickSellBill.safePassword = _this.clickIconTip.safePassword;
				}
			}else if(key == 'serviceCharge') {
				if(_this.form4pickSellBill[key]==0 || _this.form4pickSellBill[key]==1){
					_this.errorInfo4pickSellBill.serviceCharge = '';
				}else{
					_this.errorInfo4pickSellBill.serviceCharge = _this.clickIconTip.serviceCharge;
				}
			}else if(key == 'idCard'){
				if(_this.$reg.idCard.test(_this.form4pickSellBill[key])){
					_this.errorInfo4pickSellBill.idCard = '';
				}else{
					_this.errorInfo4pickSellBill.idCard = "请正确填写身份证号";
				}
			}
		},
		validate4AppointDeal(key){
			let _this = this;
			if(key == 'sellAmount') {
				if(_this.form4AppointDeal[key]>=1&&_this.form4AppointDeal[key]<=10000){//这里判断单次卖出的数量是否合法,由于
					_this.errorInfo4AppointDeal.sellAmount = '';
				}else{
					_this.errorInfo4AppointDeal.sellAmount = _this.clickIconTip.sellAmount;
				}
			}else if(key == 'price'){
				//console.log('_this.platformUnivalence',_this.platformUnivalence)
				if(parseFloat(_this.form4AppointDeal[key])>=_this.platformUnivalence&&parseFloat(_this.form4AppointDeal.price)<=(_this.platformUnivalence+3)){
					_this.errorInfo4AppointDeal.price = '';
				}else
				{
					_this.errorInfo4AppointDeal.price = '定向交易价格不符合平台规定';
				}
			}else if(key == 'blockAddress'){
				if(_this.$reg.block_address.test(_this.form4AppointDeal[key])){
					_this.errorInfo4AppointDeal.blockAddress = '';
				}else{
					_this.errorInfo4AppointDeal.blockAddress = _this.clickIconTip.blockAddress;
				}
			}else if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4AppointDeal[key])){
					_this.errorInfo4AppointDeal.safePassword = '';
				}else{
					_this.errorInfo4AppointDeal.safePassword = _this.clickIconTip.safePassword;
				}
			}
		},
		validate(key){
			let _this = this;
			if(key == 'sellAmount') {
				if(_this.sellAmount){//这里判断单次卖出的数量是否合法
					_this.errorInfo.sellAmount = '';
				}else{
					_this.errorInfo.sellAmount = _this.clickIconTip.sellAmount;
				}
			}else if(key == 'univalence'){
				if(_this.$reg.univalence.test(_this.univalence)){
					if(parseFloat(_this.univalence)>=_this.platformUnivalence&&parseFloat(_this.univalence)<1000000){
						_this.errorInfo.univalence = '';
					}else
					{
						_this.errorInfo.univalence = '请填写高于平台价且小于1000000的单价';
					}
				}else{
					_this.errorInfo.univalence = _this.clickIconTip.univalence;
				}
			}else if(key == 'blockAddress'){
				if(_this.$reg.block_address.test(_this.blockAddress)){
					_this.errorInfo.blockAddress = '';
				}else{
					_this.errorInfo.blockAddress = _this.clickIconTip.blockAddress;
				}
			}else if(key == 'buyAmount') {
				if(_this.$reg.positive_integer4BuyBill.test(_this.form4BuyBill[key])){
					_this.errorInfo.buyAmount = '';
				}else{
					_this.errorInfo.buyAmount = _this.clickIconTip.buyAmount;
				}
			}else if(key == 'buyLowestAmount') {
				if(_this.$reg.positive_integer4BuyBill.test(_this.form4BuyBill[key])){
					_this.errorInfo.buyLowestAmount = '';
				}else{
					_this.errorInfo.buyLowestAmount = _this.clickIconTip.buyLowestAmount;
				}
			}else if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4BuyBill[key])){
					_this.errorInfo.safePassword = '';
				}else{
					_this.errorInfo.safePassword = _this.clickIconTip.safePassword;
				}
			}
		},
		//定向交易
		openAppointDeal(){
			let _this = this;
			_this.showAppointDealModel = true;
		},
		changeCurrentPage1(val){
			let _this = this;
			//console.log('val',val);
			_this.currentPage1 = val;
			_this.getListGeneral();
		},
		changeCurrentPage2(val){
			let _this = this;
			//console.log('val',val,',pagesize:',_this.newbiePagesize);
			_this.currentPage2 = val;
			if(parseInt(_this.currentPage2)>parseFloat(_this.dealPageInfo.showBuyPageNum)){
				Dialog.alert({
				  title: '系统提示',
				  message: `交易请先匹配前${_this.dealPageInfo.showBuyPageNum}页的单子`
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.getListAddPrice();
		},
		changeCurrentPage3(val){
			let _this = this;
			//console.log('val',val);
			_this.currentPage3 = val;
			if(_this.currentPage3>1){
				Dialog.alert({
				  title: '系统提示',
				  message: "卖单暂时只展示1页"
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.getSellBillList();
		},
		changeCurrentPage4(val){
			let _this = this;
			//console.log('val',val);
			_this.currentPage4 = val;
			if(_this.currentPage4>1){
				Dialog.alert({
				  title: '系统提示',
				  message: "新手区单子暂时只查询1页"
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.getNewbieBillList();
		},
		//刷新
		handleRefresh(){
			// this.$router.go(0)
		},
	}
}
</script>
