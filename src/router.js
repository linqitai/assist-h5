import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/start/register'
import Login from './views/start/login'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/register',
			name: '注册',
			component: Register
		},
		{
			path: '/login',
			name: '登录',
			component: Login
		},
		{
			path: '/forgetPassword',
			name: '忘记密码',
			component: () => import('./views/start/forgetPassword.vue')
		},
		{
			path: '/agreement',
			name: '服务协议',
			component: () => import('./views/other/agreement')
		},
		{
			path: '/404',
			name: '404',
			component: () => import('./views/other/404')
		},
		{
			path: '/error',
			name: 'error',
			component: () => import('./views/other/error')
		},
		{
			path: '/maintain',
			name: 'maintain',
			component: () => import('./views/other/maintain')
		},
		{
			path: '/',
			redirect: "/home"
		},
		{
			path: '/',
			component: () => import('./components/Wrapper'),
			children: [{
					path: '/home',
					name: '首页',
					component: () => import('./views/home/home'),
					meta:{footer:true,back:false,question:false},
					children:[
						
					]
				},
				{
					path: '/shop',
					name: '小店',
					component: () => import('./views/shop/shop'),
					meta:{footer:true}
				},
				{
					path: '/deal',
					name: '市场',
					component: () => import('./views/deal/deal'),
					meta:{footer:true,question:true,showRecordIcon:true},
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
					component: () => import('./views/my/my'),
					meta:{footer:true,back:false},
					children:[
						{
							path: '/innerRegister',
							name: '内排注册',
							component: () => import('./views/start/innerRegister.vue'),
							meta:{footer:false},
						},
						{
							path: '/task',
							name: '任务中心',
							component: () => import('./views/my/task'),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam',
							name: '我的战队',
							component: () => import('./views/my/mySuperTeam'),
							meta:{footer:false},
						},
						{
							path: '/myShare',
							name: '我要分享',
							component: () => import('./views/my/myShare'),
							meta:{footer:false},
						},
						{
							path: '/myBook',
							name: '我的账本',
							component: () => import('./views/my/myBook'),
							meta:{footer:false},
						},
						{
							path: '/myInfo',
							name: '我的身份',
							component: () => import('./views/my/myInfo'),
							meta:{footer:false},
						},
						{
							path: '/realName',
							name: '实名认证',
							component: () => import('./views/my/realName'),
							meta:{footer:false},
						},
						{
							path: '/myWord',
							name: '我要留言',
							component: () => import('./views/my/myWord'),
							meta:{footer:false},
						},
						{
							path: '/myWordList',
							name: '留言列表',
							component: () => import('./views/my/myWordList')
						},
						{
							path: '/myWordDetail',
							name: '留言详情',
							component: () => import('./views/my/myWordDetail')
						},
						{
							path: '/transferTicket',
							name: '定向转让帮扶券',
							component: () => import('./views/my/transferTicket'),
							meta:{footer:false},
						},
						{
							path: '/transferMineral',
							name: '定向转让矿石',
							component: () => import('./views/my/transferMineral'),
							meta:{footer:false},
						},
					]
				}
			]
		},
		{
			path: '/',
			component: () => import('./components/WrapperChild'),
			children: [
				{
					path: '/mill',
					name: '矿机',
					component: () => import('./views/mill/mill'),
					meta:{footer:false},
				},
				{
					path: '/myDeal',
					name: '我的交易',
					component: () => import('./views/my/myDeal'),
					meta:{footer:false},
				},
				{
					path: '/merchantProcess',
					name: '商家入驻',
					component: () => import('./views/home/merchantProcess'),
					meta:{footer:false,back:true,child1:1},
					children:[
						{
							path: '/merchantEnter',
							name: '填写资料',
							component: () => import('./views/home/merchantEnter'),
							meta:{footer:false,back:true,child1:0},
						},
						{
							path: '/charge',
							name: '缴费中心',
							component: () => import('./views/charge/charge'),
							meta:{footer:false,back:true,child1:0},
						},
					]
				},
				{
					path: '/ranking',
					name: '排行榜',
					component: () => import('./views/home/ranking'),
					meta:{footer:false},
				},
				{
					path: '/agency',
					name: '省市代理',
					component: () => import('./views/home/agency'),
					meta:{footer:false},
				},
				{
					path: '/voteList',
					name: '投票中心',
					component: () => import('./views/home/voteList'),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/voteDetail',
					name: '投票详情',
					component: () => import('./views/home/voteDetail'),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/noticeList',
					name: '公告列表',
					component: () => import('./views/home/noticeList'),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/noticeDetail',
					name: '公告详情 ',
					component: () => import('./views/home/noticeDetail'),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/myCheck',
					name: '实名审核',
					component: () => import('./views/my/myCheck')
				},
				{
					path: '/myCheckDetail',
					name: '实名详情',
					component: () => import('./views/my/myCheckDetail')
				},
				{
					path: '/shopCharge',
					name: '订购商品',
					component: () => import('./views/shop/shopCharge')
				},
				{
					path: '/shopDetail',
					name: '详情',
					component: () => import('./views/shop/shopDetail')
				},
				{
					path: '/shopOrder',
					name: '购物订单',
					component: () => import('./views/my/shopOrder')
				},
				
				{
					path: '/raise',
					name: 'raise',
					component: () => import('./views/raise/raise.vue')
				},
			]
		},
		{
			path: '/lookBook',
			name: '对方账本',
			component: () => import('./views/deal/lookBook'),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/dealRecord',
			name: '交易流水',
			component: () => import('./views/deal/dealRecord'),
			meta:{footer:false},
		},
	]
})
