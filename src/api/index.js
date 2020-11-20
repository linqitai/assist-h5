export const hostImg = 'http://192.168.100.3:8088';
const host = '/bflApp/'
const domainName = 'https://www.assist-china.co.ax';
const hostIPPort = 'http://localhost:8086';

export default {
	tabBgColor:'#298522',
	tabTextColor:'#ffffff',
	tabActiveColor:'#ffae00',
	projectName:'帮扶链',
	projectEnglishName:'',
	numUnit:'个',
	coinUnit:'矿石',
	ticketName:'帮扶券',
	restTimeStart:'21:00:00',
	restTimeStart21:'21:00:00',
	restTimeEnd:'23:59:59',
	tip4Rest:'该区块日常更新中，请明日再来查看......',
	tip4Sure:'由于卖家超时没确认，请再次联系对方，若联系无果，请点申诉，让客服帮您确认！',
	tip4Complain:'买家付款后，卖家若在2小时内卖家没给确认，且联系无果，2小时后买家可点申诉，并让平台来帮忙确认。',
	tip4ReduceMill:'请广大会员们在租赁矿机后，在24~168小时内领取一次收益，否则矿机会被临时暂停，需要重新启动后再过24小时来领取收益，感谢您的配合。',
	tipText4Safe:"<b class='textBold'>担保交易的安全性：</b><br>每笔交易都由省市代理预先来审核双方账号是否正常、实名信息是否正确、区块账本数据是否对得上等，最大限度得维护了投资者的利益，保证了交易的安全性。<br>注:买卖双方交易前先检查自己的手机号是否已经绑定了自己的支付宝和微信号(即通过手机号可以搜索到自己的支付宝和微信号)，若审核出未绑定或者实名信息不一致,一律冻结账号处理。",
	tipText:"<b class='textBold'>温馨提示：</b><br>1.单子一旦匹配，请卖方务必【发送短信提醒】，然后耐心等待120分钟，若买方在120分钟内没付款，也没锁定交易，卖方可通过申诉反馈问题来申请取消交易。<br>2.单子匹配后，买方若当时在忙没时间付款，可先通过【锁定交易】来延长120分钟交易时间，锁定交易后买方若在2小时内没付款，卖方亦可通过[申诉反馈问题]来申请取消交易。<br>（注：买方若是要通过微信所绑定的手机号转账，请卖方预先在微信中的【支付-支付管理】中开通【允许通过手机号向我转账】的功能）",
	tipText4AppointDeal: "<b class='textBold'>担保交易流程：</b><br>1.卖方和买方或省市代理之间预先谈好价格，然后买方把自己的区块地址告诉卖方或代理。<br>2.卖方通过区块地址去匹配买方，同时选择该代理(一名代理)做担保。<br>3.订单匹配成功后，需要让担保代理审核。<br>4.审核通过后，买方先把担保总价支付给担保代理。<br>5.担保代理确认如实收到款后，再把担保金额打到卖方账户，并让卖方确认收款且释放矿石。<br>注1:该流程中若遇到问题，代理有权终止并取消交易，若是卖方账号有问题，担保代理亦有权冻结该账号<b class='textBold'>(该交易流程担保代理应收取担保服务辛苦费3%)</b>。<br>注2：若是要通过微信所绑定的手机号转账，请卖方预先在微信中的【支付-支付管理】中开通【允许通过手机号向我转账】的功能。",
	checkTip:"实名信息已经提交成功,预计36小时内审核出结果",
	welcomeText:"真情感动世界 帮扶成就你我",
	/* welcomeText:"欢迎来到帮扶链,让我们携手共同打造公平、公正、公开、透明、去中心化的公益型创业平台。", */
	bsTip:'您若是在微信中打开帮扶链，在[提交实名]与[交易矿石]的时候，建议优先使用UC等主流浏览器打开帮扶链并进行操作。',
	manType1Tip:'经系统检测，您的账号数据异常(没买入量也没怎么发展团队为何刚开始就有那么高的产量?)。若是第一批对接的团队长，得了中型而没去发展团队的，请直推实名超过30名且团队算力大于30G且买入个数大于300个，才能进行该操作。',
	raiseTip:'为了保证赠与人的每一个帮扶券都能全额给付求助者，HPC帮扶链平台不收取任何手续费。求助者筹到多少兑现多少，不让任何一份爱心流失。帮扶券：成本价0.7CNY，求助者筹到多少，平台就以0.7CNY的价格向求助者购买多少。',
	HOST_IMG: hostImg,
	cookiesTime: 60 * 60 * 72,
	cookiesTime8h: 60 * 60 * 8,
	cookiesTime24h: 60 * 60 * 24,
	cookiesTime72h: 60 * 60 * 72,
	loginAgainTipText:"登录已经过期,请退出后重新登录",
	CODE_OK: 200, //正常请求
	CODE_4003: 4003, //未实名认证
	CODE_ERROR: 500, //未实名认证
	CODE_OFTEN: 500, //请求太频繁提示
	CODE_registered: 501, //已注册
	oneAccount:'该设备已登录过其他账号,请勿多账号操作',
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
	//circulate
	circulateToMyCP: host + "assist/circulatevalue/circulateToMyCP",
	//group
	getGroupPic: host + "assist/admin/group/getGroupPic",
	//game
	givePT1SIURewardYesterday: host + "assist/reward/givePT1SIURewardYesterday",
	getGameUseTicket: host + "assist/plateformTicketAccountBook/getGameUseTicket",
	createGameAccount: host + "assist/register/createGameAccount",
	isCreateAccount: host + "assist/userInfo/isCreateAccount",
	serverList: host + "server/serverList",
	chargeGold: host + "charge/chargeGold",
	chargeGold4CV: host + "charge/chargeGold4CV",
	gamePopOutVirculateValue: host + "assist/circulatevalue/gamePopOutVirculateValue",
	gamePopOutContributionValue: host + "assist/contributionValue/gamePopOutContributionValue",
	getServerLoadApi: host + "serverLoad/getServerLoadApi",
	chargeGold4PT: host + "charge/chargeGold4PT",
	//gameRank
	insertGameRankRecord: host + "assist/gamerank/insertGameRankRecord",
	getAssistGameRankList: host + "assist/gamerank/getAssistGameRankList",
	addTicketRecord42048Start: host + "assist/plateformTicketAccountBook/addTicketRecord42048Start",
	//upload
	fileUpload1: host + 'assist/userInfo/fileUpload',
	//用户信息
	rectifyMyCP: host + "assist/userInfo/rectifyMyCP",
	resetRealName: host + "assist/userInfo/resetRealName",
	cancelAccountByIsAgent: host + "assist/userInfo/cancelAccountByIsAgent",
	updateUserAlipay: host + "assist/userInfo/updateUserAlipay",
	getIsAgentRanking: host + "assist/statistics/getIsAgentRanking",
	getLevelRanking: host + "assist/statistics/getLevelRanking",
	getAssistUserInfoByIdCard4Service:host + "assist/userInfo/getAssistUserInfoByIdCard4Service",
	getAssistUserInfoByPhone4Service: host + "assist/userInfo/getAssistUserInfoByPhone4Service",
	getNickNameByUserId: host + 'assist/userInfo/getNickNameByUserId',
	getAssistAgentInfo4Province: host + 'assist/userInfo/getAssistAgentInfo4Province',
	getAssistAgentInfo4City: host + 'assist/userInfo/getAssistAgentInfo4City',
	getAssistUserInfo: host + 'assist/userInfo/getAssistUserInfo',
	getAssistUserInfo4Path: host + 'assist/userInfo/getAssistUserInfo4Path/',
	updateAssistNickName: host + 'assist/userInfo/updateAssistNickName',
	updateAssistUsrInfo: host + 'assist/userInfo/updateAssistUsrInfo',
	updateAssistUsrInfo4RealName: host + 'assist/userInfo/updateAssistUsrInfo4RealName',
	getAssistUserInfoPageList: host +'assist/userInfo/getAssistUserInfoPageList',
	updateRealNameNumByUserId: host + 'assist/userInfo/updateRealNameNumByUserId',
	updatePassword: host + "assist/userInfo/updatePassword",
	getValidUserPageList:host + "assist/userInfo/getValidUserPageList",
	getAssistUserInfoPicByUserId: host + "assist/userInfo/getAssistUserInfoPicByUserId",
	getAssistUserInfoPageList4Check: host + "assist/userInfo/getAssistUserInfoPageList4Check",
	getAssistUserInfo4CheckDetail: host + "assist/userInfo/getAssistUserInfo4CheckDetail/",
	checkAssistUserInfoByUserId: host + "assist/userInfo/checkAssistUserInfoByUserId/",
	updateUserInfo4CheckPassOrNot: host + "assist/userInfo/updateUserInfo4CheckPassOrNot",
	assistUserAttendance4Love: host + "assist/userInfo/assistUserAttendance4Love",
	assistUserAttendance: host + "assist/userInfo/assistUserAttendance",
	getAssistUserInfoCount4Check: host + "assist/userInfo/getAssistUserInfoCount4Check",
	getAssistWeChartNumByShareCode: host + "assist/userInfo/getAssistWeChartNumByShareCode/",
	getAssistSellerUserInfoByTransactionId: host + "assist/userInfo/getAssistSellerUserInfoByTransactionId",
	getAssistUserInfoByPath: host + "assist/userInfo/getAssistUserInfoByPath/",
	getAssistUserInfoByBD: host + "assist/userInfo/getAssistUserInfoByBD/",
	getAssistUserInfoByObj: host + "assist/userInfo/getAssistUserInfoByObj",
	getAdminUserPageList: host + "assist/user/getAdminUserPageList",
	initPassWord: host + "assist/userInfo/initPassWord",
	getCountTeamNum: host + "assist/userInfo/getCountTeamNum",
	insertAssistUserFreeze: host + "assist/userFreeze/insertAssistUserFreeze",
	reduceRealNameTime: host + "assist/userInfo/reduceRealNameTime",
	getAssistUserInfoList4Check: host + "assist/userInfo/getAssistUserInfoList4Check",
	getBuyMachine2TeamNum: host + "assist/userInfo/getBuyMachine2TeamNum",
	getActivityCompleteInfo: host + "assist/userInfo/getActivityCompleteInfo",
	getAssistUserInfoList4RealName: host + "assist/userInfo/getAssistUserInfoList4RealName",
	get24BuyTimes2Service: host + "assist/userInfo/get24BuyTimes2Service",
	transferMineral: host + "assist/userInfo/transferMineral",
	transferCV: host + "assist/userInfo/transferCV",
	cancelAccount: host + "assist/userInfo/cancelAccount",
	getUserIdByObj: host + "assist/userInfo/getUserIdByObj",
	update4Complain: host + "assist/userInfo/update4Complain",
	updateUserIdCard: host + "assist/userInfo/updateUserIdCard",
	initEmail: host + "assist/userInfo/initEmail",
	//服务商
	getServiceUserList: host + "assist/user/getServiceUserList",
	getServiceDsPassword: host + "assist/user/getServiceDsPassword",
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
	getCityAgentListMoreInfo: host + "assist/cityAgent/getCityAgentListMoreInfo",
	//vote
	insertAssistVote: host + "assist/assistVote/insertAssistVote",
	updateAssistVote: host + "assist/assistVote/updateAssistVote",
	getAssistVoteList: host + "assist/assistVote/getAssistVoteList",
	getAssistVoteList4Me: host + "assist/assistVote/getAssistVoteList4Me",
	getAssistVote: host + "assist/assistVote/getAssistVote/",
	deleteAssistVoteById: host + "assist/assistVote/deleteAssistVoteById/",
	//question
	insertAssistQuestion: host + "assist/question/insertAssistQuestion",
	updateAssistQuestion: host + "assist/question/updateAssistQuestion",
	deleteAssistQuestionById: host + "assist/question/deleteAssistQuestionById/",
	//answer
	insertAssistAnswer: host + "assist/answer/insertAssistAnswer",
	insertAssistAnswer4Raise: host + "assist/answer/insertAssistAnswer4Raise",
	getAssistAnswerListPage: host + "assist/answer/getAssistAnswerListPage",
	getAssistAnswer: host + "assist/answer/getAssistAnswer",
	//contributionValue
	getAssistContributionValueListByUserId: host + "assist/contributionValue/getAssistContributionValueListByUserId",
	getAssistContributionValueList: host + "assist/contributionValue/getAssistContributionValueList",
	//machine
	getAssistMiningMachineList: host + "assist/miningMachine/getAssistMiningMachineList",
	getAssistMiningMachineList4MillShop: host + "assist/miningMachine/getAssistMiningMachineList4MillShop",
	getAssistMiningMachineListByTag: host + "assist/miningMachine/getAssistMiningMachineListByTag",
	getAssistMiningMachineList4MillShopToString: host + "assist/miningMachine/getAssistMiningMachineList4MillShopToString",
	getAssistMachine: host + 'assist/miningMachine/getAssistMiningMachineList',
	getAssistMyMachineList4Tag: host + 'assist/myMachine/getAssistMyMachineList4Tag',
	//mymachine
	relieveAppointMachine: host + "assist/myMachine/relieveAppointMachine",
	getHoldCPReceipt: host + "assist/myMachine/getHoldCPReceipt",
	getAssistMyMachineByStatus: host + 'assist/myMachine/getAssistMyMachineByStatus',
	getAssistMyMachineByUserIdAndStatusAndTag8: host + 'assist/myMachine/getAssistMyMachineByUserIdAndStatusAndTag8',
	getAssistMyMachineByStatus01: host + 'assist/myMachine/getAssistMyMachineByStatus01',
	getAssistMyNewMachineByStatus01: host + 'assist/myMachine/getAssistMyNewMachineByStatus01',
	getAssistMyMachine: host + "assist/myMachine/getAssistMyMachine",
	insertAssistMyMachine: host + "assist/myMachine/insertAssistMyMachine",
	runMyMachineById: host + "assist/myMachine/runMyMachineById/",
	getMyMachinesReceipt: host + "assist/myMachine/getMyMachinesReceipt",
	getMyPastMachinesReceipt: host + "assist/myMachine/getMyPastMachinesReceipt",
	getMyMachinesReceiptByOne: host + "assist/myMachine/getMyMachinesReceiptByOne/",
	getAssistMyMachineCount4FlockTask: host + "assist/myMachine/getAssistMyMachineCount4FlockTask",
	getSomeOneMachineInventory: host + "assist/myMachine/getSomeOneMachineInventory",
	getAssistMyMachineNum: host + "assist/myMachine/getAssistMyMachineNum",
	getActivityMachineInventory: host + "assist/myMachine/getActivityMachineInventory",
	getMyActivityMachineNum: host + "assist/myMachine/getMyActivityMachineNum",
	let48HMachinesStop: host + "assist/myMachine/let48HMachinesStop",
	getAssistOtherMachine: host + "assist/myMachine/getAssistOtherMachine",
	//账本
	monToChildCV: host + "assist/mineralBook/monToChildCV",
	getTicketBookListByUserId: host + "assist/plateformTicketAccountBook/getTicketBookListByUserId",
	getPTicketBookListByUserId: host + "assist/plateformTicketAccountBook/getPTicketBookListByUserId",
	getCPowerListByUserId: host + "assist/calculationPower/getCPowerListByUserId",
	getCalculationPowerPageList: host + "assist/calculationPower/getCalculationPowerPageList",
	getCValueListByUserId: host + "assist/contributionValue/getCValueListByUserId",
	//矿石账本列表
	getMineralBookList: host + "assist/mineralBook/getMineralBookList",
	getMineralBookListByUserId: host + "assist/mineralBook/getMineralBookListByUserId",
	getMineralBookListByUserId2: host + "assist/mineralBook/getMineralBookListByUserId2",
	getMineralBookList4SellType: host + "assist/mineralBook/getMineralBookList4SellType",
	getMineralBookList4Type: host + "assist/mineralBook/getMineralBookList4Type",
	//平台券账本
	getAssistPlateformTicketAccountBookList: host + "assist/plateformTicketAccountBook/getAssistPlateformTicketAccountBookList",
	transferPlatformTicket: host + "assist/userInfo/transferPlatformTicket",
	//流通值账本
	getCirculateValueListByUserId: host + "assist/circulatevalue/getCirculateValueListByUserId",
	//领取任务奖励
	getAssistXXLevelRewardByUserId: host + "assist/reward/getAssistXXLevelRewardByUserId",
	getAssistRewardOneLevelByUserId: host + "assist/reward/getAssistRewardOneLevelByUserId/",
	getAssistRewardTwoLevelByUserId: host + "assist/reward/getAssistRewardTwoLevelByUserId/",
	getAssistRewardThreeLevelByUserId: host + "assist/reward/getAssistRewardThreeLevelByUserId/",
	getAssistRewardFourLevelByUserId: host + "assist/reward/getAssistRewardFourLevelByUserId/",
	getAssistRewardFiveLevelByUserId: host + "assist/reward/getAssistRewardFiveLevelByUserId/",
	getAssistBuyMineralReward: host + "assist/reward/getAssistBuyMineralReward",
	getShareReword: host + "assist/reward/getShareReword",
	getActivity1Reward: host + "assist/reward/getActivity1Reward",
	getActivity2Reward: host + "assist/reward/getActivity2Reward",
	getActivity3Reward: host + "assist/reward/getActivity3Reward",
	giveLevelDealProfit: host + "assist/reward/giveLevelDealProfit",
	givePTRewardYesterday: host + "assist/reward/givePTRewardYesterday",
	//deal
	setDealToWaitSure4S: host + "assist/transaction/setDealToWaitSure4S",
	getAssistTransactionByCoinRT: host + "assist/transaction/getAssistTransactionByCoinRT",
	sureDeal4SellerById: host + "assist/transaction/sureDeal4SellerById",
	cancelAssistTransaction4S: host + "assist/transaction/cancelAssistTransaction4S",
	getAssistTransactionExtendById: host + "assist/transaction/getAssistTransactionExtendById",
	getAssistTransactionListByPage: host + "assist/transaction/getAssistTransactionListByPage",
	insertTransaction4PickSellBill: host + "assist/transaction/insertTransaction4PickSellBill",
	getAssistSellBillList: host + "assist/buybill/getAssistSellBillList",
	getBuyBillInfo: host + "assist/statistics/getBuyBillInfo",
	getAssistBuyBillListNewbiePage: host + "assist/buybill/getAssistBuyBillListNewbiePage",
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
	getAssistTransactionList4AgentChecked: host + "assist/transaction/getAssistTransactionList4AgentChecked",
	getAssistTransactionList4AgentComplate: host + "assist/transaction/getAssistTransactionList4AgentComplate",
	getAssistTransactionList4AgentCancel: host + "assist/transaction/getAssistTransactionList4AgentCancel",
	insertTransaction2ServiceBill: host + "assist/transaction/insertTransaction2ServiceBill",
	//上下级转矿石
	insertTransaction4LevelTeamBill: host + "assist/transaction/insertTransaction4LevelTeamBill",
	//统计
	excuteProfit: host + "assist/statistics/excuteProfit",
	getNDayProfitNum: host + "assist/statistics/getNDayProfitNum",
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
	getServiceRanking: host + "assist/statistics/getServiceRanking",
	getAssistStatisticsBookList4Num: host + "assist/statisticsbook/getAssistStatisticsBookList4Num",
	//冻结
	getAssistUserFreeze: host + "assist/userFreeze/getAssistUserFreeze/",
	getAssistUserFreezeByUserId: host + "assist/userFreeze/getAssistUserFreezeByUserId",
	unFreeze: host + "assist/userFreeze/unFreeze",
	freezeAndCancelDeal: host + "assist/userFreeze/freezeAndCancelDeal",
	//验证码
	getSecurityCode:host + "assist/securitycode/getSecurityCode",
	verifySecurityCode: host + "assist/securitycode/verifySecurityCode",
	getSecurityCodeByPhone: host + "assist/securitycode/getSecurityCodeByPhone",
	//parameterInfo
	getAssistMaintainInfo: host + "assist/parameter/getAssistMaintainInfo",
	getAssistQQFlock: host + "assist/parameter/getAssistQQFlock",
	getAssistParameter4Web: host + "assist/parameter/getAssistParameter4Web",
	//auction
	getCurrentAuction: host + "assist/auction/getCurrentAuction",
	insertAuctionBook: host + "assist/auction/insertAuctionBook",
	getAssistAuctionBookPageList: host + "assist/auction/getAssistAuctionBookPageList",
	//complain
	insertAssistComplain: host + "assist/complain/insertAssistComplain",
	getAssistComplainListPage: host + "assist/complain/getAssistComplainListPage",
	//raise
	getAssistRaiseListPage: host + "assist/raise/getAssistRaiseListPage",
	insertAssistRaise: host + "assist/raise/insertAssistRaise",
	getRaiseMineralNum: host + "assist/raise/getRaiseMineralNum",
	//raiseRecord
	getAssistRaiseListPage4Finish: host + "assist/raise/getAssistRaiseListPage4Finish",
	insertAssistRaiseRecord: host + "assist/raise/insertAssistRaiseRecord",
	getAssistRaiseRecordListPage: host + "assist/raise/getAssistRaiseRecordListPage",
	getAssistRaiseRecordRanking: host + "assist/raise/getAssistRaiseRecordRanking",
	getRaiseRanking: host + "assist/statistics/getRaiseRanking",
	getAssistRaise: host + "assist/raise/getAssistRaise",
	//fundPoolRecord
	getAssistFundPoolRecord: host + "assist/fundpoolrecord/getAssistFundPoolRecord",
	insertFundPoolRecord: host + "assist/fundpoolrecord/insertFundPoolRecord",
	outFundPoolRecord: host + "assist/fundpoolrecord/outFundPoolRecord",
	//loveValue
	getAssistLoveValueList: host + "assist/loveValue/getAssistLoveValueList",
}
