// import Vue from 'vue';
import Vuex from 'vuex';
import ajax from '../api/ajax.js';
import api from '../api/index.js';
import http from '../api/http.js';
import operateData from '../api/operateData.js';
//import axios from 'axios';
// import * as actions from './actions';
// import * as mutations from './mutations';
// import * as getters from './getters';
Vue.use(Vuex);
// const asyncAndCommit = async(url, mutationName,
//   commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
//   const { data } = await axios(url, config)
//   if (extraData) {
//     commit(mutationName, { data, extraData })
//   } else {
//     commit(mutationName, data)
//   }
//   return data
// }

const state={//要设置的全局访问的state对象
    fullscreen: false,
	userInfo:{},
	orderPageList4Merchant:[],
	avgPrice:'',
	a:"1",
	b:"2",
	c:"3"
};
const getters = {//实时监听state值的变化(最新状态)
    getFullscreen(state) {//承载变化的showFooter的值
       return state.fullscreen
    },
	getAssistOrderPageList4Merchant(state) {//承载变化的showFooter的值
	   return state.orderPageList4Merchant
	},
	getAssistUserInfo(state){
		return state.userInfo
	}
};
const mutations = {
    setFullscreen(state,fullscreen){//同上，这里面的参数除了state之外还传了需要增加的值fullscreen
        state.fullscreen = fullscreen;
    },
	setAssistUserInfo(state,rawData){//同上，这里面的参数除了state之外还传了需要增加的值fullscreen
	    state.userInfo = rawData.data;
	},
	setOrderPageList4Merchant(state,rawData){//同上，这里面的参数除了state之外还传了需要增加的值fullscreen
		console.log("rawData",rawData);
	    state.orderPageList4Merchant = rawData.list;
	},
	selectAvgMineralPrice(state,rawData){//同上，这里面的参数除了state之外还传了需要增加的值fullscreen
	    state.avgPrice = rawData.data;
	},
};
const actions = {
    setFullscreen(context,fullscreen){//同上注释，fullscreen为要变化的形参
        context.commit('setFullscreen',fullscreen)
    },
	async getAssistUserInfo(context,params){
		let res = await http.fetchGet(api.getAssistUserInfo, params);
		//console.log("action",res);
		context.commit('setAssistUserInfo', res);
		return res;
	},
	insertBuyBill(context,data){
		http.fetchPost(api.insertBuyBill, data).then(res=>{
			console.log("action",res);
		})
		//return 
	},
	async getAssistOrderPageList4Merchant(context,params) {
		let data = {}
		await ajax.ajax(api.getAssistOrderPageList4Merchant,'get',params,function(res){
			//state.orderPageList4Merchant = res.data.list;
			context.commit('setOrderPageList4Merchant', res.data);
			data = res.data;
		})
		return data;
	},
	async selectAvgMineralPrice(context,params){
		let data = {}
		/* await axios(api.selectAvgMineralPrice,{method:'get',params:params}).then(res => {
			console.log("res",res);
			context.commit('selectAvgMineralPrice', res.data)
			data = res.data
		}) */
		return data
	},
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
