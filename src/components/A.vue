<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.a {
  
}
</style>
<template>
  <div class="a">
	<input type="text" :value="itext" @input="input($event)">
  </div>
</template>

<script>
export default {
	model:{
		prop:'itext',
		event:'inputChange'
	},
	props: {
		itext:String,
		default(){
			return ''
		}
	},
    data() {
		return {
			
		}
	},
	created() {
		
	},
	methods:{
		input(e){
			this.$emit('inputChange',e.target.value)
		}
	}
}
</script>
