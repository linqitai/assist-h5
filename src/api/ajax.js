// import Vue from 'vue';
// import $ from 'jquery'
// import http from './public'
import qs from 'qs';
import router from '@/router.js';
import VueCookies from 'vue-cookies';
import { Dialog } from 'vant';
// import { getCookie } from '../assets/js/utils.js'
//import axios from 'axios';
// import http from './service'
// import Vue from 'vue';
// import VueCookies from 'vue-cookies';
// Vue.use(VueCookies);
let tip4Login = '登录已过期,请重新登录再试';
let tip4Refresh = '当前网络信号不稳定,请稍后再试';

//axios.defaults.baseURL = '/fgcApp'
/* let token = VueCookies.get('token');
if (token) { 
  axios.defaults.headers.common.token = token
}
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(config => {
  if (config.method == 'post' && config.data != undefined) {
	config.data = qs.stringify(config.data)
  }
  // store.commit('setLoading', true)
  // store.commit('setError', { status: false, message: '' })
  return config
})
axios.interceptors.response.use(config => {
	console.log('config',config)
	console.log('=config.data.code=', config.data.code)
  if (config.data.code != 200) { 
	//store.commit('setError', { status: true, message: config.data.message })
	Dialog.alert({
		title: '温馨提示',
		message: config.data.message
	}).then(() => {
		//...
	});
  }
  return config
}, e => {
  //e.response.data
  console.log('=e=', e)
  // console.log('=e.code=', e.code)
  // console.log('=e.message=', e.message)
  if (e.message.indexOf('登录已过期')>=0) { 
	Dialog.alert({
		title: '温馨提示',
		message: '登录已过期，请重新登录'
	}).then(() => {
		router.push('/login')
	});
  } else {
	Dialog.alert({
		title: '温馨提示',
		message: e.message
	}).then(() => {
		//...
	});
  }
  //createMessage('登录成功 2秒后跳转首页', 'error')
  return Promise.reject(e)
}) */

export default {
	
	getJson(url, doSuccess) {
		$.getJSON(url, function(res) {
			if (typeof doSuccess == "function") {
				doSuccess(res);
			}
		})
	},
	ajax(url, method, params, doSuccess, doComplete) {
		let _this = this;
		let queryAjax = $.ajax({
			url: url,
			type: method,
			timeout: 20000,
			// processData: true,
			// contentType: 'application/json',
			// dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : qs.stringify(params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			complete: function(XMLHttpRequest,status) {
				//console.log('status',status)
				//console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							localStorage.removeItem('_USERINFO_');
							VueCookies.remove('userId');
							VueCookies.remove('token');
							VueCookies.remove('isRefreshDealInfo');
							VueCookies.remove('statistics');
							VueCookies.remove('haveDealPageInfo');
							VueCookies.remove('hasNoticeList4Swipe');
							VueCookies.remove('token');
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
		});
	},
	ajax4NotTime(url, method, params, doSuccess, doComplete) {
		let _this = this;
		let queryAjax = $.ajax({
			url: url,
			type: method,
			/* timeout: 20000, */
			// processData: true,
			// contentType: 'application/json',
			// dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : qs.stringify(params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			complete: function(XMLHttpRequest,status) {
				//console.log('status',status)
				//console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
		});
	},
	ajax4GetCheckDetail(url, method, params, doSuccess, doComplete) {
		let _this = this;
		let queryAjax = $.ajax({
			url: url,
			type: method,
			// processData: true,
			// contentType: 'application/json',
			// dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : qs.stringify(params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			complete: function(XMLHttpRequest,status) {
				//console.log('status',status)
				//console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
		});
	},
	ajax4List(url, method, params, doSuccess) {
		var that = this;
		$.ajax({
			url: url,
			type: method,
			timeout: 20000,
			// processData: true,
			contentType: 'application/json',
			dataType:'json',
			// data : JSON.stringify(params), 
			data: method == 'GET' ? qs.stringify(params) : (params),
			beforeSend: function(XMLHttpRequest) {
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				token ? XMLHttpRequest.setRequestHeader('token', token) : '';
			},
			complete: function(XMLHttpRequest,status) {
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			},
			success: function(res) {
				//console.log(res, "====success====")
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			}
		});
	},
	ajax4FileUpload(url, method, params, doSuccess, doComplete) {
		let _this = this;
		let queryAjax = $.ajax({
			url: url,
			type: method,
			dataType: "json",
			cache: false, //上传文件无需缓存
			processData: false, //用于对data参数进行序列化处理 这里必须false
			contentType: false, //必须
			data: params,
			beforeSend: function(XMLHttpRequest) {
				//XMLHttpRequest.setRequestHeader('Content-Type', 'multipart/form-data');
				// XMLHttpRequest.setRequestHeader("token", localStorage.getItem('token'));
				// that.progressDialog = true;
				let token = VueCookies.get('token');
				// //console.log("cookie token in complete", token);
				if(token){
					 XMLHttpRequest.setRequestHeader('token', token);
				}else{
					// alert("登录状态已过期,请重新登录");
					// router.replace('login');
				}
				// localStorage.getItem('token') ? XMLHttpRequest.setRequestHeader('token', localStorage.getItem('token')) : '';
			},
			success: function(res) {
				if (typeof res == 'string') {
					res = JSON.parse(res);
				}
				if (typeof doSuccess == "function") {
					doSuccess(res);
				}
			},
			complete: function(XMLHttpRequest,status) {
				//console.log('status',status)
				//console.log('complete_XMLHttpRequest',XMLHttpRequest.responseJSON)
				if(XMLHttpRequest.responseJSON&&XMLHttpRequest.responseJSON.code==500) {
					Dialog.alert({
						title: '温馨提示',
						message: XMLHttpRequest.responseJSON.message
					}).then(() => {
						if(XMLHttpRequest.responseJSON.message=='登录已过期，请重新登录'){
							router.replace('/login');
						}
					});
				}
				if(status=='timeout') {//超时,status还有success,error等值的情况
					//queryAjax.abort();
					Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Refresh,
					  confirmButtonText:'刷新',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  window.location.reload();
					}).catch(() => {
					  // on cancel
					});
				}
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
		});
	}
}
