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
		//let userInfo = _this.$store.state.userInfo;
		if(userInfo){
			////console.log("userInfo_localStorage");
			_this.userInfo = JSON.parse(userInfo);
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