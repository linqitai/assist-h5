<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.b {
  
}
</style>
<template>
  <div class="b">
  	b
  </div>
</template>

<script>
import event from '@/assets/js/event.js';
export default {
	props: {
		
	},
    data() {
		return {
			
		}
	},
	mounted() {
		event.$off('printa') // 阻止printa事件被触发多次
		event.$on('printa',this.print) // 绑定
	},
	methods:{
		print(val){
			console.log('val',val);
		}
	},
	beforeDestroy() {
		console.log('beforeDestroy print');
		event.$off('printa',this.print) // 记得要及时解绑，否则可能会造成内存泄漏
	}
}
</script>
