<template>
	<div class="hello">
		<Button @click="show=true">开始第一个demo</Button>
		<Modal v-model="show">
			<div>欢迎开始heyui之旅~</div>
		</Modal>
	</div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
			show: false,
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
