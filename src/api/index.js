// export const host = 'http://192.168.100.6:8001';//阿广电脑
// export const host = '/web/assist';//阿广电脑
export const hostImg = 'http://192.168.100.3:8088'; //阿广电脑
// http://192.168.100.3:8001/admin/user/getAdminUserPageList
const hostIPPort = 'http://192.168.100.6:8086';
const host = '/bflApp/'
const domainName = 'www.assist-china.com';
export default {
	projectName:'帮扶链',
	projectEnglishName:'矿石',
	ticketName:'平台券',
	welcomeText:"欢迎来到ASST帮扶链,让我们携手共同打造公平、公正、公开、透明、去中心化的好平台。",
	HOST_IMG: hostImg,
	cookiesTime: 60 * 60 * 24,
	cookiesTime8h: 60 * 60 * 8,
	loginAgainTipText:"需重新登录",
	CODE_OK: 200, //正常请求
	CODE_4003: 4003, //未实名认证
	CODE_ERROR: 500, //未实名认证
	CODE_OFTEN: 500, //请求太频繁提示
	CODE_registered: 501, //已注册
	DATA_102:'系统提示:您所拥有的矿石不够租赁此矿机',
	DATA_101:'系统提示:您所拥有的此类矿机已经超过限购数量',
	DATA_100:'系统提示:此类矿机已经售空',
	DATA_LEVEL:'系统提示:您尚未达到领取此奖励的等级',
	DATA_ISGET:'系统提示:您已经领取过奖励',
	DATA_NOTGET:'系统提示:您尚未达到领取该奖励的条件',
	domainName: domainName,
	hostIPPort: hostIPPort,
	getTestURL: host + '/user/1',
	loginUser: host + 'web/login/loginUser',
	loginOut: host + 'web/login/loginOut',
	register: host + 'assist/register/register',
	innerRegister: host + 'assist/register/innerRegister',
	changeLoginPassword: host + 'assist/register/changePassword',
	//用户信息
	getAssistUserInfo: host + 'assist/userInfo/getAssistUserInfo',
	getAssistUserInfo4Path: host + 'assist/userInfo/getAssistUserInfo4Path/',
	insertAssistUserInfo: host + 'assist/userInfo/insertAssistUserInfo',
	updateAssistUsrInfo: host + 'assist/userInfo/updateAssistUsrInfo',
	updateAssistUsrInfo4RealName: host + 'assist/userInfo/updateAssistUsrInfo4RealName',
	getAssistUserInfoPageList: host +'assist/userInfo/getAssistUserInfoPageList',
	updateThisWeekMineralByUserId: host + 'assist/userInfo/updateThisWeekMineralByUserId',
	updateRealNameNumByUserId: host + 'assist/userInfo/updateRealNameNumByUserId/',
	updatePassword: host + "assist/userInfo/updatePassword",
	getAssistUserInfoPicByUserId: host + "assist/userInfo/getAssistUserInfoPicByUserId",
	getAssistUserInfoPageList4Check: host + "assist/userInfo/getAssistUserInfoPageList4Check",
	getAssistUserInfo4CheckDetail: host + "assist/userInfo/getAssistUserInfo4CheckDetail/",
	updateUserInfo4CheckPassOrNot: host + "assist/userInfo/updateUserInfo4CheckPassOrNot",
	assistUserAttendance: host + "assist/userInfo/assistUserAttendance",
	getAssistUserInfoCount4Check: host + "assist/userInfo/getAssistUserInfoCount4Check",
	getAssistWeChartNumByShareCode: host + "assist/userInfo/getAssistWeChartNumByShareCode/",
	getAssistSellerUserInfoByTransactionId: host + "assist/userInfo/getAssistSellerUserInfoByTransactionId",
	//公告
	getNoticeList: host + 'assist/notice/getNoticeList',
	getNoticePageList: host + "assist/notice/getNoticePageList",
	getNoticeDetail: host + 'assist/notice/getNoticeDetail',
	getDealPageInfo: host + 'assist/statistics/getDealPageInfo',
	getQrCodeUrl: host + 'assist/qrcode/getQrCodeUrl',
	getAssistMachine: host + 'assist/miningMachine/getAssistMiningMachineList',
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
	//contributionValue
	getAssistContributionValueListByUserId: host + "assist/contributionValue/getAssistContributionValueListByUserId",
	getAssistContributionValueList: host + "assist/contributionValue/getAssistContributionValueList",
	//machine
	getAssistMiningMachineList: host + "assist/miningMachine/getAssistMiningMachineList",
	getAssistMiningMachineList4MillShop: host + "assist/miningMachine/getAssistMiningMachineList4MillShop",
	//mymachine
	getAssistMyMachine: host + "assist/myMachine/getAssistMyMachine",
	insertAssistMyMachine: host + "assist/myMachine/insertAssistMyMachine",
	updateAssistMyMachine: host + "assist/myMachine/updateAssistMyMachine",
	runMyMachineById: host + "assist/myMachine/runMyMachineById/",
	getMyMachinesReceipt: host + "assist/myMachine/getMyMachinesReceipt",
	//算力账本列表
	getCalculationPowerPageList: host + "assist/calculationPower/getCalculationPowerPageList",
	//矿石账本列表
	getMineralBookList: host + "assist/mineralBook/getMineralBookList",
	getMineralBookListByUserId: host + "assist/mineralBook/getMineralBookListByUserId",
	transferMineral: host + "assist/userInfo/transferMineral",
	//平台券账本
	getAssistPlateformTicketAccountBookList: host + "assist/plateformTicketAccountBook/getAssistPlateformTicketAccountBookList",
	transferPlatformTicket: host + "assist/userInfo/transferPlatformTicket",
	//领取升级任务奖励
	getAssistXXLevelRewardByUserId: host + "assist/reward/getAssistXXLevelRewardByUserId",
	getAssistRewardOneLevelByUserId: host + "assist/reward/getAssistRewardOneLevelByUserId/",
	getAssistRewardTwoLevelByUserId: host + "assist/reward/getAssistRewardTwoLevelByUserId/",
	getAssistRewardThreeLevelByUserId: host + "assist/reward/getAssistRewardThreeLevelByUserId/",
	getAssistRewardFourLevelByUserId: host + "assist/reward/getAssistRewardFourLevelByUserId/",
	getAssistRewardFiveLevelByUserId: host + "assist/reward/getAssistRewardFiveLevelByUserId/",
	//deal
	getAssistBuyBillListGeneralPage: host + "assist/buybill/getAssistBuyBillListGeneralPage",
	getAssistBuyBillListAddPricePage: host + "assist/buybill/getAssistBuyBillListAddPricePage",
	getAssistBuyBillListPage: host + "assist/buybill/getAssistBuyBillListPage",
	getAssistBuyBillListByBuyerId: host + "assist/buybill/getAssistBuyBillListByBuyerId",
	getAssistBuyBillListCountByUserId: host + "assist/buybill/getAssistBuyBillListCountByUserId",
	insertBuyBill: host + "assist/buybill/insertBuyBill",
	deleteBuyBillById: host + "assist/buybill/deleteBuyBillById",
	getAssistTransactionCountBySellerId: host + "assist/transaction/getAssistTransactionCountBySellerId/",
	insertTransaction4type0: host + "assist/transaction/insertTransaction4type0",
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
	//统计
	getHomeMineralStaticInfo: host + "assist/statistics/getHomeMineralStaticInfo",
	getCurrentBuyNum: host + "assist/statistics/getCurrentBuyNum",
	getBeDigMineralNum: host + "assist/statistics/getBeDigMineralNum",
	getCanCirculateMineralNum: host + "assist/statistics/getCanCirculateMineralNum",
	getMinAndMaxBuyBillByUserId: host + "assist/statistics/getMinAndMaxBuyBillByUserId",
	getBuyAndSellInfoByUserId: host + "assist/statistics/getBuyAndSellInfoByUserId",
	getBuyInAndSellOutInfoByUserId: host + "assist/statistics/getBuyInAndSellOutInfoByUserId",
	getMineralRanking: host + "assist/statistics/getMineralRanking",
	getContributionValueRanking: host + "assist/statistics/getContributionValueRanking",
	getPlatformTicketRanking: host + "assist/statistics/getPlatformTicketRanking",
	getTeamCalculationPowerRanking: host + "assist/statistics/getTeamCalculationPowerRanking",
}
