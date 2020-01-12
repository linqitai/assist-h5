<style scoped lang="scss">
	@import '~@/assets/scss/variable.scss';
	.millContent{
		
	}
	
</style>
<template>
  <div class="thisPage">
	
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { ajax } from "@/api/ajax";
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			activeName:"myMill"
		}
	},  
	components:{
	    mHeader
	},
	created() {
		let _this = this;
		_this.initializeTabActiveName();
	},
	methods:{
		initializeTabActiveName(){
			let _this = this;
			if(_this.$cookies.isKey("mill_tab_name")){
				_this.activeName = _this.$cookies.get("mill_tab_name");
			}
		},
		tabChange(name,title){
			console.log(name,title);
			this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
		}
	}
}
</script>
