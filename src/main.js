//import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios'
import router from './router';
import store from './store/index'//引入store
// import jquery from 'jquery'
import api from '@/api/index';
import 'babel-polyfill'
// import './registerServiceWorker';
import '@/assets/scss/reset.scss';
import '@/assets/scss/iconfont.scss';
import { Form,Button,Tabbar,TabbarItem,Slider,Swipe,SwipeItem,Lazyload,SwipeCell,NoticeBar,NavBar,
Icon,Sticky,Toast,Image as VanImage,Skeleton,Loading,CellGroup,Cell,Tab,Tabs,Pagination,ActionSheet,
Field,PullRefresh,Divider,List,Dialog,Tag,ImagePreview,CountDown,Uploader,Search,DropdownMenu, DropdownItem,
Panel,RadioGroup,Radio,Step,Steps,Stepper,Popup,Picker,Row,Col,Grid,GridItem,Circle,Checkbox,CheckboxGroup,Notify,
GoodsAction, GoodsActionIcon, GoodsActionButton, Empty } from 'vant';
import 'vant/lib/index.css';
Vue.use(Form).use(Button).use(Tabbar).use(TabbarItem).use(Slider).use(Swipe).use(SwipeItem).use(SwipeCell).use(NoticeBar)
.use(NavBar).use(Icon).use(Sticky).use(Toast).use(VanImage).use(Skeleton).use(Loading).use(CellGroup).use(Cell).use(Tab)
.use(Tabs).use(Pagination).use(ActionSheet).use(Field).use(PullRefresh).use(Divider).use(List).use(Dialog).use(Tag)
.use(ImagePreview).use(CountDown).use(Checkbox).use(CheckboxGroup).use(Uploader).use(Search).use(DropdownMenu).use(DropdownItem).use(Panel)
.use(RadioGroup).use(Radio).use(Step).use(Steps).use(Stepper).use(Popup).use(Picker).use(Row).use(Col).use(Grid).use(GridItem).use(Circle).use(Notify)
.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Empty);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.config.productionTip = false;
Vue.prototype.$toast = Toast;
Vue.prototype.$api = api;
import config from '@/assets/js/config';
Vue.prototype.$config = config;
import reg from '@/assets/js/reg';
Vue.prototype.$reg = reg;
import utils from '@/assets/js/utils';
Vue.prototype.$utils = utils;
import getAjaxs from '@/api/ajax';
Vue.prototype.$ajax = getAjaxs;
import JsEncrypt from '@/assets/js/JsEncrypt';
Vue.prototype.$JsEncrypt = JsEncrypt;
import crypto from '@/assets/js/JsCrypto'
Vue.prototype.$JsCrypto = crypto;
import storage from '@/assets/js/storage.js'
Vue.prototype.$storage = storage;

import * as filters from '@/assets/js/filters';
// Vue.prototype.filters = filters;
import VueCookies from 'vue-cookies';
Vue.prototype.$cookies = VueCookies;

/* import echarts from 'echarts';
Vue.prototype.$echarts = echarts; */

import fastclick from 'fastclick';
fastclick.attach(document.body);

// 全局注册过滤器
Object.keys(filters).forEach((key) => {
	// console.log(filters[key]);
	Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
