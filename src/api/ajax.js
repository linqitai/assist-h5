// import Vue from 'vue';
// import $ from 'jquery'
// import http from './public'
import qs from 'qs';
import router from '@/router.js';
import VueCookies from 'vue-cookies';
import { Dialog } from 'vant';
// import { getCookie } from '../assets/js/utils.js'
// import axios from 'axios'
// import http from './service'
// import Vue from 'vue';
// import VueCookies from 'vue-cookies';
// Vue.use(VueCookies);
let tip4Login = '登录已过期,请重新登录再试';
let tip4Refresh = '当前网络信号不稳定,请稍后再试';

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
					/* Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Login,
					  confirmButtonText:'重新登录',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  router.replace('/login');
					}).catch(() => {
					  // on cancel
					  window.location.reload();
					}); */
				}
				/* if(status=='error') {//超时,status还有success,error等值的情况
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
				} */
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
					/* Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Login,
					  confirmButtonText:'重新登录',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  router.replace('/login');
					}).catch(() => {
					  // on cancel
					  window.location.reload();
					}); */
				}
				/* if(status=='error') {//超时,status还有success,error等值的情况
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
				} */
				if (typeof doComplete == "function") {
					doComplete(status);
				}
			}
			/* error: function(res) {
				// //console.log("errorInfo", res);
				if(res.status == 500){
					// alert(res.responseJSON.message);
					Dialog.alert({
					  title: '温馨提示',
					  message: res.responseJSON.message
					}).then(() => {
					  // on close
					});
				}
			} */
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
					/* Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Login,
					  confirmButtonText:'重新登录',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  router.replace('/login');
					}).catch(() => {
					  // on cancel
					  window.location.reload();
					}); */
				}
				/* if(status=='error') {//超时,status还有success,error等值的情况
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
				} */
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
					/* Dialog.confirm({
					  title: '温馨提示',
					  message: tip4Login,
					  confirmButtonText:'重新登录',
					  cancelButtonText:'取消'
					}).then(() => {
					  // on confirm
					  router.replace('/login');
					}).catch(() => {
					  // on cancel
					  window.location.reload();
					}); */
				}
				/* if(status=='error') {//超时,status还有success,error等值的情况
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
				} */
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
