<template>
	<div class="hello-vue">
		<Button @click="show=true">开始第一个demo</Button>
		<Modal v-model="show">
			<div>欢迎开始heyui之旅~</div>
		</Modal>
		<div v-height="40"></div>
		<div>
			<h2>使用datas定义数据来源</h2>
			<p><router-link :to="{name:'datasDemo1'}">demo1: 数据驱动-key单选</router-link></p>
			<p><router-link :to="{name:'datasDemo2'}">demo2: 数据驱动-key多选</router-link></p>
			<p><router-link :to="{name:'datasDemo3'}">demo3: 数据驱动-object单选</router-link></p>
			<p><router-link :to="{name:'datasDemo4'}">demo4: 数据驱动-object多选</router-link></p>
			<h2>使用字典定义数据来源</h2>
			<p>dict的定义请参考 src/js/config/dict-config.js文件</p>
			<p><router-link :to="{name:'dictDemo1'}">demo1: 数据字典驱动-key单选</router-link></p>
			<p><router-link :to="{name:'dictDemo2'}">demo2: 数据字典驱动-key多选</router-link></p>
			<p><router-link :to="{name:'dictDemo3'}">demo3: 数据字典驱动-object单选</router-link></p>
			<p><router-link :to="{name:'dictDemo4'}">demo4: 数据字典驱动-object多选</router-link></p>
			<p><router-link :to="{name:'dictDemo5'}">demo5: 很多组件调用</router-link></p>
		</div>
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
.hello-vue {
  padding: 50px;
}
</style>
