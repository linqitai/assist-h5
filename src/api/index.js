// export const host = 'http://192.168.100.6:8001';//阿广电脑
// export const host = '/web/assist';//阿广电脑
export const hostImg = 'http://192.168.100.3:8088'; //阿广电脑
// http://192.168.100.3:8001/admin/user/getAdminUserPageList
const host = '/bflApp/'
// const domainName = 'https://www.helpchain.online';
// const hostIPPort = 'https://www.helpchain.online';
const domainName = 'https://www.assist-china.com.cn';
const hostIPPort = 'https://www.assist-china.com.cn';

export default {
	tabBgColor:'#298522',
	tabTextColor:'#ffffff',
	tabActiveColor:'#ffae00',
	projectName:'帮扶链',
	projectEnglishName:'',
	numUnit:'个',
	coinUnit:'矿石',
	ticketName:'帮扶券',
	tip4ReduceMill:'矿机商城里的矿机是限量的，任何一种矿机被租赁完，全体矿机将会被更新，第二天就会换上新的一批减产后的矿机。',
	tipText4Safe:"<b class='textBold'>担保交易的安全性：</b><br>每笔交易都由省市代理预先来审核双方账号是否正常、实名信息是否正确、区块账本数据是否对得上等，最大限度得维护了投资者的利益，保证了交易的安全性。<br>注:买卖双方交易前先检查自己的手机号是否已经绑定了自己的支付宝和微信号(即通过手机号可以搜索到自己的支付宝和微信号)，若审核出未绑定或者实名信息不一致,一律冻结账号处理。",
	tipText:"<b class='textBold'>温馨提示：</b><br>1.单子一旦匹配，请卖方务必【发送短信提醒】，然后耐心等待120分钟，若买方在120分钟内没付款，也没锁定交易，卖方可取消交易。<br>2.单子匹配后，买方若当时在忙没时间付款，可先通过【锁定交易】来延长120分钟交易时间，锁定交易后买方若在2小时内没付款，卖方亦可取消交易。<br>（注：买方若是要通过微信所绑定的手机号转账，请卖方预先在微信中的【支付-支付管理】中开通【允许通过手机号向我转账】的功能）",
	tipText4AppointDeal: "<b class='textBold'>担保交易流程：</b><br>1.卖方和买方或省市代理之间预先谈好价格，然后买方把自己的区块地址告诉卖方或代理。<br>2.卖方通过区块地址去匹配买方，同时选择该代理(一名代理)做担保。<br>3.订单匹配成功后，需要让担保代理审核。<br>4.审核通过后，买方先把担保总价支付给担保代理。<br>5.担保代理确认如实收到款后，再把担保金额打到卖方账户，并让卖方确认收款且释放矿石。<br>注1:该流程中若遇到问题，代理有权终止并取消交易，若是卖方账号有问题，担保代理亦有权冻结该账号<b class='textBold'>(该交易流程担保代理应收取担保服务辛苦费3%)</b>。<br>注2：若是要通过微信所绑定的手机号转账，请卖方预先在微信中的【支付-支付管理】中开通【允许通过手机号向我转账】的功能。",
	checkTip:"实名信息已经提交成功,预计24小时内审核出结果",
	welcomeText:"欢迎来到帮扶链,让我们携手共同打造公平、公正、公开、透明、去中心化的公益型创业平台。",
	bsTip:'为了提高用户体验，在提交实名与交易的时候，建议用谷歌、UC或QQ浏览器中打开HPC。',
	manType1Tip:'经系统检测，您的账号数据异常(没买入量也没怎么发展团队为何刚开始就有那么高的产量?)。若是第一批对接的团队长，得了中型而没去发展团队的，请直推实名超过30名且团队算力大于30G且买入个数大于300个，才能进行该操作.',
	HOST_IMG: hostImg,
	cookiesTime: 60 * 60 * 72,
	cookiesTime8h: 60 * 60 * 8,
	cookiesTime72h: 60 * 60 * 72,
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
	initPassWord: host + "assist/userInfo/initPassWord",
	getCountTeamNum: host + "assist/userInfo/getCountTeamNum",
	insertAssistUserFreeze: host + "assist/userFreeze/insertAssistUserFreeze",
	reduceRealNameTime: host + "assist/userInfo/reduceRealNameTime",
	getAssistUserInfoList4Check: host + "assist/userInfo/getAssistUserInfoList4Check",
	getBuyMachine2TeamNum: host + "assist/userInfo/getBuyMachine2TeamNum",
	getActivityCompleteInfo: host + "assist/userInfo/getActivityCompleteInfo",
	getAssistUserInfoList4RealName: host + "assist/userInfo/getAssistUserInfoList4RealName",
	get24BuyTimes2Service: host + "assist/userInfo/get24BuyTimes2Service",
	transferCV: host + "assist/userInfo/transferCV",
	cancelAccount: host + "assist/userInfo/cancelAccount",
	getUserIdByObj: host + "assist/userInfo/getUserIdByObj",
	update4Complain: host + "assist/userInfo/update4Complain",
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
	getAssistVoteList: host + "assist/assistVote/getAssistVoteList",
	getAssistVote: host + "assist/assistVote/getAssistVote/",
	//answer
	insertAssistAnswer: host + "assist/answer/insertAssistAnswer",
	getAssistAnswerListPage: host + "assist/answer/getAssistAnswerListPage",
	getAssistAnswer: host + "assist/answer/getAssistAnswer",
	//contributionValue
	getAssistContributionValueListByUserId: host + "assist/contributionValue/getAssistContributionValueListByUserId",
	getAssistContributionValueList: host + "assist/contributionValue/getAssistContributionValueList",
	//machine
	getAssistMiningMachineList: host + "assist/miningMachine/getAssistMiningMachineList",
	getAssistMiningMachineList4MillShop: host + "assist/miningMachine/getAssistMiningMachineList4MillShop",
	getAssistMiningMachineList4MillShopToString: host + "assist/miningMachine/getAssistMiningMachineList4MillShopToString",
	getAssistMachine: host + 'assist/miningMachine/getAssistMiningMachineList',
	getAssistMyMachineList4Tag: host + 'assist/myMachine/getAssistMyMachineList4Tag',
	//mymachine
	getAssistMyMachine: host + "assist/myMachine/getAssistMyMachine",
	insertAssistMyMachine: host + "assist/myMachine/insertAssistMyMachine",
	runMyMachineById: host + "assist/myMachine/runMyMachineById/",
	getMyMachinesReceipt: host + "assist/myMachine/getMyMachinesReceipt",
	getMyMachinesReceiptByOne: host + "assist/myMachine/getMyMachinesReceiptByOne/",
	getAssistMyMachineCount4FlockTask: host + "assist/myMachine/getAssistMyMachineCount4FlockTask",
	getSomeOneMachineInventory: host + "assist/myMachine/getSomeOneMachineInventory",
	getAssistMyMachineNum: host + "assist/myMachine/getAssistMyMachineNum",
	getActivityMachineInventory: host + "assist/myMachine/getActivityMachineInventory",
	getMyActivityMachineNum: host + "assist/myMachine/getMyActivityMachineNum",
	//算力账本列表
	getCalculationPowerPageList: host + "assist/calculationPower/getCalculationPowerPageList",
	//矿石账本列表
	getMineralBookList: host + "assist/mineralBook/getMineralBookList",
	getMineralBookListByUserId: host + "assist/mineralBook/getMineralBookListByUserId",
	transferMineral: host + "assist/userInfo/transferMineral",
	getMineralBookList4SellType: host + "assist/mineralBook/getMineralBookList4SellType",
	getMineralBookList4Type: host + "assist/mineralBook/getMineralBookList4Type",
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
	getActivity1Reward: host + "assist/reward/getActivity1Reward",
	getActivity2Reward: host + "assist/reward/getActivity2Reward",
	getActivity3Reward: host + "assist/reward/getActivity3Reward",
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
	getAssistTransactionList4AgentChecked: host + "assist/transaction/getAssistTransactionList4AgentChecked",
	getAssistTransactionList4AgentComplate: host + "assist/transaction/getAssistTransactionList4AgentComplate",
	getAssistTransactionList4AgentCancel: host + "assist/transaction/getAssistTransactionList4AgentCancel",
	insertTransaction2ServiceBill: host + "assist/transaction/insertTransaction2ServiceBill",
	//上下级转矿石
	insertTransaction4LevelTeamBill: host + "assist/transaction/insertTransaction4LevelTeamBill",
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
	getAssistComplainListPage: host + "assist/complain/getAssistComplainListPage"
}
