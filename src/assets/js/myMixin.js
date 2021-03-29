import { Dialog } from 'vant';
export const myMixin = {
	data(){
		return{
			userInfo:'',
			userId:''
		}
	},
	created(){
		let _this = this;
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
			//console.log("_this.userInfo___created",_this.userInfo);
			_this.userId = _this.userInfo.userId;
			if(_this.userInfo.accountStatus==1){
				//退出登录
				_this.logout();
			}
		}else{
			_this.$storage.removeAll();
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
	},
	methods:{
		back(to){
			if(to === 'my') {
				this.$router.replace(to);
			}else{
				this.$router.go(to);
			}
		},
		waitting(){
			Dialog.alert({
			  title: '系统提示',
			  message: '该模块正在维护中......'
			}).then(() => {
			  // on close
			});
		},
		getUserInfo() {
			let _this = this;
			const toast = Toast.loading({
			  forbidClick: true,
			  message: '加载中...',
			});
			let params = {}
			_this.$store.dispatch('getAssistUserInfo', params).then(res=>{
				if (res.code == _this.$api.CODE_OK) {
					_this.userInfo = res.data;
					localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
					if(_this.userInfo.accountStatus==1){
						//退出登录
						_this.logout();
					}
				}else{
					_this.$storage.removeAll();
					_this.$toast(_this.$api.loginAgainTipText);
					_this.$router.replace('login');
				}
			}).catch(res=>{
				toast.clear();
			})
		},
		logout(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
				if(res.code == _this.$api.CODE_OK){
					localStorage.removeItem('_USERINFO_');
					_this.$cookies.remove('userId');
					_this.$cookies.remove('token');
					_this.$cookies.remove('isRefreshDealInfo');
					_this.$cookies.remove('isRefreshUserInfo');
					_this.$cookies.remove('tab_raise_list');
					_this.$cookies.remove('statistics');
					_this.$cookies.remove('haveDealPageInfo');
					_this.$cookies.remove('hasNoticeList4Swipe');
					// console.log("_this.$cookies.keys()",_this.$cookies.keys());
				}else{
					_this.$toast(res.message);
				}
			},function(){
				_this.$router.replace('login');
			})
		},
	}
}