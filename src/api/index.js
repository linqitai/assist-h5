// export const host = 'http://192.168.100.6:8001';//阿广电脑
// export const host = '/web/assist';//阿广电脑
export const hostImg = 'http://192.168.100.3:8088'; //阿广电脑
// http://192.168.100.3:8001/admin/user/getAdminUserPageList
const hostIPPort = 'http://www.helpchain.online';
const host = '/bflApp/'
const domainName = 'http://www.helpchain.online';
export default {
	tabBgColor:'#298522',
	tabTextColor:'#ffffff',
	tabActiveColor:'#ffae00',
	projectName:'帮扶链',
	projectEnglishName:'',
	coinUnit:'矿石',
	ticketName:'帮扶券',
	tipText:"<b class='textBold'>温馨提示：</b><br>1.单子一旦匹配，请卖方务必【发送短信提醒】，然后耐心等待30分钟，若买方在30分钟内没付款，也没锁定交易，卖方可取消交易。<br>2.单子匹配后，买方若当时在忙没时间付款，可先通过【锁定交易】来延长30分钟交易时间，锁定交易后买方若在匹配后的1小时内没付款，卖方亦可取消交易。<br>（注：买方若是要通过微信所绑定的手机号转账，请卖方预先在微信中的【支付-支付管理】中开通【允许通过手机号向我转账】的功能）",
	tipText4AppointDeal: "<b class='textBold'>定向交易流程：</b><br>1.卖方和买方或省市代理之间预先谈好价格，然后买方把自己的区块地址告诉卖方或代理。<br>2.卖方通过区块地址去匹配买方，同时选择该代理(一名代理)做担保。<br>3.订单匹配成功后，买方先把担保金额支付给代理，代理收到款后告诉卖方金额已如数到账且让卖方确认并释放矿石。<br>4.买方账户矿石到账后，代理再把担保金额转给卖方，当中收取3%担保服务辛苦费。",
	checkTip:"实名信息已经提交成功,预计48小时内审核出结果,若需优先审核,请去首页找省市代理或者客服,提供注册手机号即可",
	welcomeText:"欢迎来到国际帮扶链,让我们携手共同打造公平、公正、公开、透明、去中心化的公益型创业平台。",
	bsTip:'为了提高户提体验，推荐使用:谷歌、百度、UC或QQ浏览器中打开该页面。',
	HOST_IMG: hostImg,
	cookiesTime: 60 * 60 * 24,
	cookiesTime8h: 60 * 60 * 8,
	loginAgainTipText:"需重新登录",
	CODE_OK: 200, //正常请求
	CODE_4003: 4003, //未实名认证
	CODE_ERROR: 500, //未实名认证
	CODE_OFTEN: 500, //请求太频繁提示
	CODE_registered: 501, //已注册
	oneAccount:'该设备已登录过其他账号,切勿多账号操作',
	DATA_102:'您所拥有的矿石不够租赁此矿机',
	DATA_101:'您所拥有的此类矿机已经超过限购数量',
	DATA_100:'此类矿机已经售空',
	DATA_LEVEL:'您尚未达到领取此奖励的等级',
	DATA_ISGET:'您已经领取过奖励',
	DATA_NOTGET:'您尚未达到领取该奖励的条件',
	domainName: domainName,
	hostIPPort: hostIPPort,
	getTestURL: host + '/user/1',
	loginUser: host + 'web/login/loginUser',
	loginOut: host + 'web/login/loginOut',
	register: host + 'assist/register/register',
	innerRegister: host + 'assist/register/innerRegister',
	//用户信息
	getAssistUserInfo: host + 'assist/userInfo/getAssistUserInfo',
	getAssistUserInfo4Path: host + 'assist/userInfo/getAssistUserInfo4Path/',
	updateAssistNickName: host + 'assist/userInfo/updateAssistNickName',
	updateAssistUsrInfo4RealName: host + 'assist/userInfo/updateAssistUsrInfo4RealName',
	getAssistUserInfoPageList: host +'assist/userInfo/getAssistUserInfoPageList',
	updateRealNameNumByUserId: host + 'assist/userInfo/updateRealNameNumByUserId',
	updatePassword: host + "assist/userInfo/updatePassword",
	getAssistUserInfoPicByUserId: host + "assist/userInfo/getAssistUserInfoPicByUserId",
	getAssistUserInfoPageList4Check: host + "assist/userInfo/getAssistUserInfoPageList4Check",
	getAssistUserInfo4CheckDetail: host + "assist/userInfo/getAssistUserInfo4CheckDetail/",
	updateUserInfo4CheckPassOrNot: host + "assist/userInfo/updateUserInfo4CheckPassOrNot",
	assistUserAttendance: host + "assist/userInfo/assistUserAttendance",
	getAssistUserInfoCount4Check: host + "assist/userInfo/getAssistUserInfoCount4Check",
	getAssistWeChartNumByShareCode: host + "assist/userInfo/getAssistWeChartNumByShareCode/",
	getAssistSellerUserInfoByTransactionId: host + "assist/userInfo/getAssistSellerUserInfoByTransactionId",
	getAssistUserInfoByPath: host + "assist/userInfo/getAssistUserInfoByPath/",
	getAssistUserInfoByBD: host + "assist/userInfo/getAssistUserInfoByBD/",
	getAssistUserInfoByObj: host + "assist/userInfo/getAssistUserInfoByObj",
	getAdminUserPageList: host + "assist/user/getAdminUserPageList",
	//公告
	getNoticeList: host + 'assist/notice/getNoticeList',
	getNoticePageList: host + "assist/notice/getNoticePageList",
	getNoticeDetail: host + 'assist/notice/getNoticeDetail',
	getQrCodeUrl: host + 'assist/qrcode/getQrCodeUrl',
	//留言板
	insertAssistMessageBoard: host + 'assist/messageBoard/insertAssistMessageBoard',
	getAssistMessageBoardPageList: host + 'assist/messageBoard/getAssistMessageBoardPageList',
	getAssistMessageBoard: host + 'assist/messageBoard/getAssistMessageBoard/',
	deleteAssistMessageBoard: host + 'assist/messageBoard/deleteAssistMessageBoard/',
	//省市代理
	getAssistProvinceAgentListByPage: host + "assist/provinceAgent/getAssistProvinceAgentListByPage",
	//vote
	getAssistVoteList: host + "assist/assistVote/getAssistVoteList",
	getAssistVote: host + "assist/assistVote/getAssistVote/",
	//answer
	insertAssistAnswer: host + "assist/answer/insertAssistAnswer",
	getAssistAnswerListPage: host + "assist/answer/getAssistAnswerListPage",
	//contributionValue
	getAssistContributionValueListByUserId: host + "assist/contributionValue/getAssistContributionValueListByUserId",
	getAssistContributionValueList: host + "assist/contributionValue/getAssistContributionValueList",
	//machine
	getAssistMiningMachineList: host + "assist/miningMachine/getAssistMiningMachineList",
	getAssistMiningMachineList4MillShop: host + "assist/miningMachine/getAssistMiningMachineList4MillShop",
	getAssistMiningMachineList4MillShopToString: host + "assist/miningMachine/getAssistMiningMachineList4MillShopToString",
	getAssistMachine: host + 'assist/miningMachine/getAssistMiningMachineList',
	//mymachine
	getAssistMyMachine: host + "assist/myMachine/getAssistMyMachine",
	insertAssistMyMachine: host + "assist/myMachine/insertAssistMyMachine",
	runMyMachineById: host + "assist/myMachine/runMyMachineById/",
	getMyMachinesReceipt: host + "assist/myMachine/getMyMachinesReceipt",
	getMyMachinesReceiptByOne: host + "assist/myMachine/getMyMachinesReceiptByOne/",
	//算力账本列表
	getCalculationPowerPageList: host + "assist/calculationPower/getCalculationPowerPageList",
	//矿石账本列表
	getMineralBookList: host + "assist/mineralBook/getMineralBookList",
	getMineralBookListByUserId: host + "assist/mineralBook/getMineralBookListByUserId",
	transferMineral: host + "assist/userInfo/transferMineral",
	getMineralBookList4SellType: host + "assist/mineralBook/getMineralBookList4SellType",
	//平台券账本
	getAssistPlateformTicketAccountBookList: host + "assist/plateformTicketAccountBook/getAssistPlateformTicketAccountBookList",
	transferPlatformTicket: host + "assist/userInfo/transferPlatformTicket",
	//领取任务奖励
	getAssistXXLevelRewardByUserId: host + "assist/reward/getAssistXXLevelRewardByUserId",
	getAssistRewardOneLevelByUserId: host + "assist/reward/getAssistRewardOneLevelByUserId/",
	getAssistRewardTwoLevelByUserId: host + "assist/reward/getAssistRewardTwoLevelByUserId/",
	getAssistRewardThreeLevelByUserId: host + "assist/reward/getAssistRewardThreeLevelByUserId/",
	getAssistRewardFourLevelByUserId: host + "assist/reward/getAssistRewardFourLevelByUserId/",
	getAssistRewardFiveLevelByUserId: host + "assist/reward/getAssistRewardFiveLevelByUserId/",
	getAssistBuyMineralReward: host + "assist/reward/getAssistBuyMineralReward",
	getShareReword: host + "assist/reward/getShareReword",
	//deal
	getAssistBuyBillListGeneralPage: host + "assist/buybill/getAssistBuyBillListGeneralPage",
	getAssistBuyBillListAddPricePage: host + "assist/buybill/getAssistBuyBillListAddPricePage",
	getAssistBuyBillListByBuyerId: host + "assist/buybill/getAssistBuyBillListByBuyerId",
	getAssistBuyBillListCountByUserId: host + "assist/buybill/getAssistBuyBillListCountByUserId",
	insertBuyBill: host + "assist/buybill/insertBuyBill",
	deleteBuyBillById: host + "assist/buybill/deleteBuyBillById",
	getAssistTransactionCountBySellerId: host + "assist/transaction/getAssistTransactionCountBySellerId",
	insertTransaction4PickBill: host + "assist/transaction/insertTransaction4PickBill",
	getAssistTransactionListByUserId: host + "assist/transaction/getAssistTransactionListByUserId",
	getAssistTransactionList4buyer: host + "assist/transaction/getAssistTransactionList4buyer",
	getAssistTransactionList4sellerByUserId: host + "assist/transaction/getAssistTransactionList4sellerByUserId",
	getAssistTransactionList4ComplateByUserId: host + "assist/transaction/getAssistTransactionList4ComplateByUserId",
	getAssistSellerInfoByTransactionId: host + "assist/transaction/getAssistSellerInfoByTransactionId",
	getAssistBuyerInfoByTransactionId: host + "assist/transaction/getAssistBuyerInfoByTransactionId",
	cancelAssistTransactionById: host + "assist/transaction/cancelAssistTransactionById",
	updateTransactionStatusById: host + "assist/transaction/updateTransactionStatusById",
	updateTransactionImgUrlById: host + "assist/transaction/updateTransactionImgUrlById",
	updateTransactionStatus84buyerById: host + "assist/transaction/updateTransactionStatus84buyerById",
	updateTransactionStatus5ById: host + "assist/transaction/updateTransactionStatus5ById",
	getAssistTransactionList4CancelByUserId: host + "assist/transaction/getAssistTransactionList4CancelByUserId",
	insertTransaction4AppointBill: host + "assist/transaction/insertTransaction4AppointBill",
	getAssistAppointDealDetailById: host + "assist/transaction/getAssistAppointDealDetailById",
	getAssistTransactionList4Agent: host + "assist/transaction/getAssistTransactionList4Agent",
	//统计
	getHomeMineralStaticInfo: host + "assist/statistics/getHomeMineralStaticInfo",
	getCurrentBuyNum: host + "assist/statistics/getCurrentBuyNum",
	getBeDigMineralNum: host + "assist/statistics/getBeDigMineralNum",
	getCanCirculateMineralNum: host + "assist/statistics/getCanCirculateMineralNum",
	getMinAndMaxBuyBillByUserId: host + "assist/statistics/getMinAndMaxBuyBillByUserId",
	getBuyInAndSellOutInfoByUserId: host + "assist/statistics/getBuyInAndSellOutInfoByUserId",
	getMineralRanking: host + "assist/statistics/getMineralRanking",
	getContributionValueRanking: host + "assist/statistics/getContributionValueRanking",
	getPlatformTicketRanking: host + "assist/statistics/getPlatformTicketRanking",
	getTeamCalculationPowerRanking: host + "assist/statistics/getTeamCalculationPowerRanking",
	getDealPageInfo: host + 'assist/statistics/getDealPageInfo',
	getRanking: host + "assist/statistics/getRanking",
	getAssistStatisticsBookList4Num: host + "assist/statisticsbook/getAssistStatisticsBookList4Num",
	//冻结
	getAssistUserFreeze: host + "assist/userFreeze/getAssistUserFreeze/",
	getAssistUserFreezeByUserId: host + "assist/userFreeze/getAssistUserFreezeByUserId",
	unFreeze: host + "assist/userFreeze/unFreeze",
	//验证码
	getSecurityCode:host + "assist/securitycode/getSecurityCode",
	verifySecurityCode: host + "assist/securitycode/verifySecurityCode",
	getSecurityCodeByPhone: host + "assist/securitycode/getSecurityCodeByPhone",
	//parameterInfo
	getAssistMaintainInfo: host + "assist/parameter/getAssistMaintainInfo",
	getAssistQQFlock: host + "assist/parameter/getAssistQQFlock"
}
