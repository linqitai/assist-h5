// import Vue from 'vue'
import Router from 'vue-router'
// import Register from './views/start/register'
// import Login from './views/start/login'
// import ForgetPassword from './views/start/forgetPassword'

Vue.use(Router)
/**
 * 重写路由的push方法
 */
/* const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
} */
export default new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/gameCharge',
			name: '游戏充值',
			component: resolve => require(['./views/start/gameCharge'],resolve)
		},
		{
			path: '/createAccount',
			name: '创建账号',
			component: resolve => require(['./views/start/createAccount'],resolve)
		},
		{
			path: '/register',
			name: '注册',
			component: resolve => require(['./views/start/register'],resolve)
		},
		{
			path: '/login',
			name: '登录',
			component: resolve => require(['./views/start/login'],resolve)
		},
		{
			path: '/agreement',
			name: '服务协议',
			component: resolve => require(['./views/other/agreement'],resolve)
		},
		{
			path: '/initPassword',
			name: '初始化密码',
			component: resolve => require(['./views/start/initPassword'],resolve)
		},
		{
			path: '/tip',
			name: '提示',
			component: resolve => require(['./views/other/tip'],resolve)
		},
		{
			path: '/404',
			name: '404',
			component: resolve => require(['./views/other/404'],resolve)
		},
		{
			path: '/error',
			name: 'error',
			component: resolve => require(['./views/other/error'],resolve)
		},
		{
			path: '/maintain',
			name: 'maintain',
			component: resolve => require(['./views/other/maintain'],resolve)
		},
		{
			path: '/test',
			name: 'test',
			component: resolve => require(['./views/test/test'],resolve)
		},
		{
			path: '/',
			redirect: "/home"
		},
		{
			path: '/wrapper',
			component: resolve => require(['./components/Wrapper'],resolve),
			children: [{
					path: '/home',
					name: '首页',
					component: resolve => require(['./views/home/home'],resolve),
					meta:{footer:true,back:false,question:false,keepAlive:true},
					children:[
						{
							path: '/rankingDeal',
							name: '服务商排行榜',
							component: resolve => require(['./views/home/rankingDeal'],resolve),
							meta:{footer:false,keepAlive:true},
						},
						{
							path: '/fundPoolRecord',
							name: '帮扶基金池账本',
							component: resolve => require(['./views/home/fundPoolRecord'],resolve),
							meta:{footer:false,keepAlive:true},
						},
						{
							path: '/transferFundPoolTicket',
							name: '帮扶基金池转出操作',
							component: resolve => require(['./views/home/transferFundPoolTicket'],resolve),
							meta:{footer:false,keepAlive:true},
						},
						{
							path: '/gameList',
							name: '游戏列表',
							component: resolve => require(['./views/home/gameList'],resolve),
							meta:{footer:false,keepAlive:true},
						},
						{
							path: '/gameTo1024',
							name: '2048选区',
							component: resolve => require(['./views/home/gameTo1024'],resolve),
							meta:{footer:false,keepAlive:true},
						},
						{
							path: '/game10241',
							name: '2048新手练习区',
							component: resolve => require(['./views/home/game10241'],resolve),
							meta:{footer:false,keepAlive:true},
						},
						{
							path: '/game1024',
							name: '2048竞技区',
							component: resolve => require(['./views/home/game1024'],resolve),
							meta:{footer:false,keepAlive:true},
						}
					]
				},
				{
					path: '/shop',
					name: '小店',
					component: resolve => require(['./views/shop/shop'],resolve),
					meta:{footer:true}
				},
				{
					path: '/raise',
					name: '帮扶筹',
					component: resolve => require(['./views/raise/raise'],resolve),
					meta:{footer:true,keepAlive:true},
					/* children:[
						{
							path: '/raiseApply',
							name: '帮扶筹申请',
							component: resolve => require(['./views/raise/raiseApply'],resolve)
						},
					] */
				},
				{
					path: '/raise4Other',
					name: 'raise4Other',
					component: resolve => require(['./views/raise/raise4Other'],resolve),
					meta:{footer:true,keepAlive:true},
				},
				{
					path: '/mill',
					name: '矿机商城',
					component: resolve => require(['./views/mill/mill'],resolve),
					meta:{footer:true,question:true,questionName:'mill',showMillRecordIcon:true},
				},
				{
					path: '/deal',
					name: '流通中心',
					component: resolve => require(['./views/deal/deal'],resolve),
					meta:{footer:true,question:true,questionName:'deal',showRecordIcon:true},
					// children:[
					// 	{
					// 		path: '/myDeal4Deal',
					// 		name: '我的交易',
					// 		component: () => import('./views/my/myDeal'),
					// 		meta:{footer:false},
					// 	},
					// ]
				},
				{
					path: '/my',
					name: '我的',
					component: resolve => require(['./views/my/my'],resolve),
					meta:{footer:true,back:false},
					children:[
						{
							path: '/myVoteList',
							name: '我发起的投票申请',
							component: resolve => require(['./views/my/myVoteList'],resolve),
							meta:{footer:false},
						},
						{
							path: '/votePublish',
							name: '发布投票',
							component: resolve => require(['./views/my/votePublish'],resolve),
							meta:{footer:false,back:true,question:false},
						},
						{
							path: '/innerRegister',
							name: '内排注册',
							component: resolve => require(['./views/start/innerRegister'],resolve),
							meta:{footer:false},
						},
						{
							path: '/task',
							name: '任务中心',
							component: resolve => require(['./views/my/task'],resolve),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam',
							name: '我的工会',
							component: resolve => require(['./views/my/mySuperTeam'],resolve),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam2',
							name: '我的下级工会',
							component: resolve => require(['./views/my/mySuperTeam2'],resolve),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam3',
							name: '我的下下级工会',
							component: resolve => require(['./views/my/mySuperTeam3'],resolve),
							meta:{footer:false},
						},
						{
							path: '/myShare',
							name: '我要分享',
							component: resolve => require(['./views/my/myShare'],resolve),
							meta:{footer:false},
						},
						{
							path: '/myComplain',
							name: '我要诉讼',
							component: resolve => require(['./views/my/myComplain'],resolve),
							meta:{footer:false},
						},
						{
							path: '/lookComplainList',
							name: '互动列表',
							component: resolve => require(['./views/my/lookComplainList'],resolve),
						},
						{
							path: '/myWord',
							name: '我要留言',
							component: resolve => require(['./views/my/myWord'],resolve),
							meta:{footer:false},
						},
						{
							path: '/myWordList',
							name: '留言列表',
							component: resolve => require(['./views/my/myWordList'],resolve),
						},
						{
							path: '/myWordDetail',
							name: '留言详情',
							component: resolve => require(['./views/my/myWordDetail'],resolve),
						},
						{
							path: '/transferTicket',
							name: '定向转让帮扶券',
							component: resolve => require(['./views/my/transferTicket'],resolve),
							meta:{footer:false},
						},
						{
							path: '/transferCV',
							name: '定向转让贡献值',
							component: resolve => require(['./views/my/transferCV'],resolve),
							meta:{footer:false},
						},
						{
							path: '/transferMineral',
							name: '担保交易矿石',
							component: resolve => require(['./views/my/transferMineral'],resolve),
							meta:{footer:false},
						},
						{
							path: '/transferMineral4F',
							name: '转让矿石(服务商)',
							component: resolve => require(['./views/my/transferMineral4F'],resolve),
							meta:{footer:false},
						},
						{
							path: '/transferMineral4L',
							name: '转让矿石(会长)',
							component: resolve => require(['./views/my/transferMineral4L'],resolve),
							meta:{footer:false},
						},
						{
							path: '/lookupIdCard',
							name: '查看他人身份证号被谁占用',
							component: resolve => require(['./views/my/lookupIdCard'],resolve),
							meta:{footer:false},
						},
						{
							path: '/updateIdCard',
							name: '帮他人修改身份证号',
							component: resolve => require(['./views/my/updateIdCard'],resolve),
							meta:{footer:false},
						},
						{
							path: '/updateAlipay',
							name: '帮他人修改支付宝',
							component: resolve => require(['./views/my/updateAlipay'],resolve),
							meta:{footer:false},
						},
						{
							path: '/unFreeze',
							name: '解冻账号',
							component: resolve => require(['./views/my/unFreeze'],resolve),
							meta:{footer:false},
						},
						{
							path: '/lookInfo',
							name: '调查他人信息',
							component: resolve => require(['./views/my/lookInfo'],resolve),
							meta:{footer:false},
						},
						{
							path: '/reduceRNTimes',
							name: '销实名次数',
							component: resolve => require(['./views/my/reduceRNTimes'],resolve),
							meta:{footer:false,back:true},
						},
						{
							path: '/dealList',
							name: '会员交易列表',
							component: resolve => require(['./views/my/dealList'],resolve),
						},
						{
							path: '/dealDetail',
							name: '订单详情',
							component: resolve => require(['./views/my/dealDetail'],resolve),
						},
					]
				}
			]
		},
		{
			path: '/',
			component: resolve => require(['./components/WrapperChild'],resolve),
			children: [
				{
					path: '/cService',
					name: '客服',
					component: resolve => require(['./views/home/cService'],resolve),
					meta:{footer:false},
				},
				{
					path: '/serviceDeal',
					name: '服务商',
					component: resolve => require(['./views/home/serviceDeal'],resolve),
					meta:{footer:false},
				},
				{
					path: '/auction',
					name: '竞拍',
					component: resolve => require(['./views/home/auction'],resolve),
					meta:{footer:false},
				},
				{
					path: '/forgetPassword',
					name: '忘记密码',
					component: resolve => require(['./views/start/forgetPassword'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myBook',
					name: '我的账本',
					component: resolve => require(['./views/my/myBook'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myDeal',
					name: '我的交易',
					component: resolve => require(['./views/my/myDeal'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myDealCheck',
					name: '担保交易审核',
					component: resolve => require(['./views/my/myDealCheck'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myMill',
					name: '我的矿机',
					component: resolve => require(['./views/my/myMill'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myMill4Other',
					name: 'TA的矿机',
					component: resolve => require(['./views/my/myMill4Other'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myMillDetail',
					name: '矿机详情',
					component: resolve => require(['./views/my/myMillDetail'],resolve),
					meta:{footer:false},
				},
				{
					path: '/merchantProcess',
					name: '商家入驻',
					component: resolve => require(['./views/home/merchantProcess'],resolve),
					meta:{footer:false,back:true,child1:1},
					children:[
						{
							path: '/merchantEnter',
							name: '填写资料',
							component: resolve => require(['./views/home/merchantEnter'],resolve),
							meta:{footer:false,back:true,child1:0},
						},
						{
							path: '/charge',
							name: '缴费中心',
							component: resolve => require(['./views/charge/charge'],resolve),
							meta:{footer:false,back:true,child1:0},
						},
					]
				},
				{
					path: '/myInfo',
					name: '我的实名',
					component: resolve => require(['./views/my/myInfo'],resolve),
					meta:{footer:false},
				},
				{
					path: '/realName',
					name: '实名认证',
					component: resolve => require(['./views/my/realName'],resolve),
					meta:{footer:false},
				},
				{
					path: '/ranking',
					name: '排行榜',
					component: resolve => require(['./views/home/ranking'],resolve),
					meta:{footer:false},
				},
				{
					path: '/volunteer',
					name: '志愿者',
					component: resolve => require(['./views/home/volunteer'],resolve),
					meta:{footer:false},
				},
				{
					path: '/ranking4Level',
					name: '会长排行榜',
					component: resolve => require(['./views/home/ranking4Level'],resolve),
					meta:{footer:false},
				},
				{
					path: '/agency',
					name: '省代理',
					component: resolve => require(['./views/home/agency'],resolve),
					meta:{footer:false},
				},
				{
					path: '/agency2',
					name: '市代理',
					component: resolve => require(['./views/home/agency2'],resolve),
					meta:{footer:false},
				},
				{
					path: '/voteList',
					name: '投票中心',
					component: resolve => require(['./views/home/voteList'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/voteDetail',
					name: '投票详情',
					component: resolve => require(['./views/home/voteDetail'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/helpRecord',
					name: '帮扶历史',
					component: resolve => require(['./views/home/helpRecord'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/newGuide',
					name: '新手指南',
					component: resolve => require(['./views/home/newGuide'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/noticeList',
					name: '公告列表',
					component: resolve => require(['./views/home/noticeList'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/noticeDetail',
					name: '公告详情 ',
					component: resolve => require(['./views/home/noticeDetail'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/myCheck',
					name: '实名审核',
					component: resolve => require(['./views/my/myCheck'],resolve)
				},
				{
					path: '/myCheckDetail',
					name: '实名详情',
					component: resolve => require(['./views/my/myCheckDetail'],resolve)
				},
				{
					path: '/shopCharge',
					name: '订购商品',
					component: resolve => require(['./views/shop/shopCharge'],resolve)
				},
				{
					path: '/shopDetail',
					name: '详情',
					component: resolve => require(['./views/shop/shopDetail'],resolve)
				},
				{
					path: '/shopOrder',
					name: '购物订单',
					component: resolve => require(['./views/my/shopOrder'],resolve)
				},
			]
		},
		{
			path: '/raiseApplyList',
			name: '申请列表',
			component: resolve => require(['./views/raise/raiseApplyList'],resolve)
		},
		{
			path: '/raiseApply',
			name: '帮扶筹申请',
			component: resolve => require(['./views/raise/raiseApply'],resolve)
		},
		{
			path: '/kline',
			name: 'K线图',
			component: resolve => require(['./views/deal/kline'],resolve),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/lookBook',
			name: '对方账本',
			component: resolve => require(['./views/deal/lookBook'],resolve),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/blockSearch',
			name: '区块浏览器',
			component: resolve => require(['./views/home/blockSearch'],resolve),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/millRecord',
			name: '购买矿机记录表',
			component: resolve => require(['./views/mill/millRecord'],resolve),
			meta:{footer:false,keepAlive:true}
		},
		{
			path: '/my4Other',
			name: 'TA的信息',
			component: resolve => require(['./views/my/my4Other'],resolve),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/dealRecord',
			name: '交易记录',
			component: resolve => require(['./views/deal/dealRecord'],resolve),
			meta:{footer:false,keepAlive:true},
		},
	]
})
