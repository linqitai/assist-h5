import VueCookies from 'vue-cookies';

export default {
	getToken(){
		let token = VueCookies.get('token');
		return token;
	},
	remove(name){
		VueCookies.remove(name);
	},
	getCookie(name){
		let data = VueCookies.get(name);
		return data;
	},
	setCookie(name,val){
		VueCookies.set(name,val,60*60);
	},
	removeAll(){
		localStorage.removeItem('_USERINFO_');
		VueCookies.remove('userId');
		VueCookies.remove('token');
		VueCookies.remove('isRefreshDealInfo');
		VueCookies.remove('isRefreshUserInfo');
	}
}