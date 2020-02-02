function fmoney(s, n) {
	n = n > 0 && n <= 20 ? n : 1;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(),
		r = s.split(".")[1];
	var t = "";
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return t.split("").reverse().join("");
}

function getLetterLength(str) {
	if (/[a-oq-z]/i.test(str)) {
		return str.match(/[a-oq-z]/ig).length;
	}
	return 0;
}

function allIsChinese(str) {
	var reg = /^[\u4E00-\u9FA5]{1,300}$/;
	return reg.test(str)
}

function clearSpecialStrict(s) {
	// 去掉转义字符  
	s = s.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
	// 去掉特殊字符
	s = s.replace(/[\@\#\$\%\^\&\*\{\}\<\>\.]/g, '');
	return s;
};

function clearSpecialRelax(s) {
	// 去掉转义字符  
	s = s.replace(/[\'\"\\\/]/g, '');
	// 去掉特殊字符  
	s = s.replace(/[\#\$\%\^\&\{\}\(\)\<\>]/g, '');
	return s;
};

function hasNull(params) {
	var keys = Object.keys(params);
	for (var i = 0; i < keys.length; i++) {
		var obj = params[keys[i]];
		// console.log(keys[i],obj,obj == "")
		if (obj == null || obj === "" || obj == undefined) {
			return true;
		}
	}
	return false;
}

function hasVal(params) {
	var keys = Object.keys(params);
	for (var i = 0; i < keys.length; i++) {
		var obj = params[keys[i]];
		if (obj) {
			return true;
		}
	}
	return false;
}

function formClear(params) {
	var keys = Object.keys(params);
	var form = params;
	for (var i = 0; i < keys.length; i++) {
		form[keys[i]] = '';
	}
	return form;
}

function isNUll(value) {
	if (value == "" || value == null) {// || value == undefined
		return true;
	} else {
		return false;
	}
}
//设置cookie
var setCookie = function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
var getCookie = function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
//删除cookie
var delCookie = function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null){
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
};
// 获取完整的时间
function getDateTime(t) {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
    (mm < 10 ? '0' + mm : mm) + ':' + (s < 10 ? '0' + s : s)
}

// 获取年月日
function getDate(t) {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d);
}

// 获取时间戳
function getTime(t) {
  var time = new Date(t)
  return time.getTime()
}
//贡献值类型（注册、推广有效会员、卖出、买入、建议被采纳、发现有效BUG、购物、买矿机、流通权兑换）

// getLetterLength('abc123_321CBA');//6

// 压缩图片
function compress(img, size) {
	let canvas = document.createElement('canvas')
	let ctx = canvas.getContext('2d')
	let initSize = img.src.length
	let width = img.width
	let height = img.height
	canvas.width = width
	canvas.height = height
	// 铺底色
	ctx.fillStyle = '#fff'
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(img, 0, 0, width, height)
	//进行最小压缩
	let ndata = canvas.toDataURL('image/jpeg', size)
	console.log('*******压缩后的图片大小*******')
	console.log(ndata.length / 1024)
	return ndata
}
/* 获取特定字符在字符串中第几次出现的位置
ar str="Hello World!"
document.write(find(str,'o',1));//返回7 */
function find(str,cha,num){
    var x=str.indexOf(cha);
    for(var i=0;i<num;i++){
        x=str.indexOf(cha,x+1);
    }
    return x;
}

//获取省份
function getProvince(str){
	let index = find(str,'省',0);
	let province;
	if(index>0){
		//去获取省名称
		province = str.substr(0,index+1);
	}
	if(index<0){
		index = find(str,'区',0);
		if(index>0){
			//去获取省名称
			province = str.substr(0,index+1);
		}
	}
	if(index<0){
		index = find(str,'市',0);
		if(index>0){
			//去获取省名称
			province = str.substr(0,index+1);
		}
	}
	return province;
}

function getNextAttendanceValue(toDay){
	//计算所加贡献值
	let nextDay = toDay+1;
	let contributionValue = "";
	if(nextDay>=1&&nextDay<=6){
		contributionValue = 0.01;
	}else if(nextDay>=7&&nextDay<=12){
		contributionValue = 0.02;
	}else if(nextDay>=13&&nextDay<=18){
		contributionValue = 0.04;
	}else if(nextDay>=19&&nextDay<=24){
		contributionValue = 0.08;
	}else if(nextDay>=25&&nextDay<=30){
		contributionValue = 0.16;
	}else if(nextDay==31){
		contributionValue = 0.01;
	}
	return contributionValue;
}

function getTodayAttendanceValue(toDay){
	//计算所加贡献值
	let num = toDay;
	let contributionValue = "";
	if(num>=1&&num<=6){
		contributionValue = 0.01;
	}else if(num>=7&&num<=12){
		contributionValue = 0.02;
	}else if(num>=13&&num<=18){
		contributionValue = 0.04;
	}else if(num>=19&&num<=24){
		contributionValue = 0.08;
	}else if(num>=25&&num<=30){
		contributionValue = 0.16;
	}
	return contributionValue;
}

// 获取浏览器窗口的可视区域的高度
function getViewPortHeight() {
	return document.documentElement.clientHeight || document.body.clientHeight;
}

function scollPostion() {//滚动条位置
	var t, l, w, h;
	if (document.documentElement && document.documentElement.scrollTop) {
		t = document.documentElement.scrollTop;
		l = document.documentElement.scrollLeft;
		w = document.documentElement.scrollWidth;
		h = document.documentElement.scrollHeight;
	} else if (document.body) {
		t = document.body.scrollTop;
		l = document.body.scrollLeft;
		w = document.body.scrollWidth;
		h = document.body.scrollHeight;
	}
	return { top: t, left: l, width: w, height: h };
}

function scrollTop(){
	window.scrollTo(0,0);
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function getSC(str){
	let iaz='qwertyuiopasdfghjklzxcvbnm';
	let iazarr = iaz.split('');
	let ic = str;
	let arr = ic.split('');
	for(let i=0;i<ic.length;i++){
		let startIndex = ic.charCodeAt(i);
		let leave = startIndex + iaz.indexOf(arr[i]);
		let endIndex = (leave<=iaz.charCodeAt(19)?leave:leave%iaz.charCodeAt(19));
		arr[i] = iazarr[endIndex%iaz.charCodeAt(10)];
	}
	return arr.join('');
}

function isIphoneOrAndroid(){
	var u = navigator.userAgent;
	console.log("u",u);
	/* alert(u); */
	if (/(iPhone|iPad|iPod|iOS)/i.test(u)) { 
		return 'i';
	}else if (/(Android)/i.test(u)) { 
		return 'a';
	}else if(/(Windows)/i.test(u)){ 
		return 'pc';
	}else{
		return 'o';
	}
}

function isWeixin(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
	return true;
  } else {
	return false;
  }
}

export default {
	fmoney,
	getLetterLength,
	allIsChinese,
	clearSpecialStrict,
	clearSpecialRelax,
	hasVal,
	hasNull,
	isNUll,
	formClear,
	setCookie,
	getCookie,
	delCookie,
	getDateTime,
	getTime,
	getDate,
	compress,
	find,
	getProvince,
	getNextAttendanceValue,
	getTodayAttendanceValue,
	getViewPortHeight,
	scollPostion,
	scrollTop,
	getSC,
	isIphoneOrAndroid,
	isWeixin
}
