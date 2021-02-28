// import Vue from 'vue';
import Vuex from 'vuex';
import ajax from '../api/ajax.js';
import api from '../api/index.js';
import http from '../api/http.js';
//import operateData from '../api/operateData.js';
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
	commonMill:[],
	cpMill:[],
	commonMill4Shop:[],
	cpMill4Shop:[],
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
	},
	getCpMill4Shop(state){
		return state.cpMill4Shop
	},
	getCommonMill4Shop(state){
		return state.commonMill4Shop
	}
};
const mutations = {
    setFullscreen(state,fullscreen){
        state.fullscreen = fullscreen;
    },
	setAssistUserInfo(state,rawData){
	    state.userInfo = rawData.data;
	},
	setAssistMyMachineByStatus01(state,rawData){
	    state.commonMill = rawData.data;
	},
	setAssistMyNewMachineByStatus01(state,rawData){
	    state.cpMill = rawData.data;
	},
	setAssistMiningMachineListByTag0(state,rawData){
	    state.commonMill4Shop = rawData.data;
	},
	setAssistMiningMachineListByTag(state,rawData){
	    state.cpMill4Shop = rawData.data;
	},
	setOrderPageList4Merchant(state,rawData){
	    state.orderPageList4Merchant = rawData.list;
	},
	selectAvgMineralPrice(state,rawData){
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
	async getAssistMyMachineByStatus01(context,params){
		let res = await http.fetchGet(api.getAssistMyMachineByStatus01, params);
		console.log("action__getAssistMyMachineByStatus01",res);
		context.commit('setAssistMyMachineByStatus01', res);
		return res;
	},
	async getAssistMyNewMachineByStatus01(context,params){
		console.log("getAssistMyNewMachineByStatus01",params)
		let res = await http.fetchGet(api.getAssistMyNewMachineByStatus01, params);
		console.log("action__getAssistMyNewMachineByStatus01",res);
		context.commit('setAssistMyNewMachineByStatus01', res);
		return res;
	},
	async getAssistMiningMachineListByTag0(context,params){
		let res = await http.fetchGet(api.getAssistMiningMachineListByTag, params);
		console.log("action__getAssistMiningMachineListByTag0",res);
		context.commit('setAssistMiningMachineListByTag0', res);
		return res;
	},
	async getAssistMiningMachineListByTag(context,params){
		await ajax.ajax(api.getAssistMiningMachineListByTag,'get',params,function(res){
			console.log("getAssistMiningMachineListByTag1",res);
			context.commit('setAssistMiningMachineListByTag', res);
			return res;
		})
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
