<template>
	<div id="app">
		<header><router-link to="/">HEY UI</router-link></header>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  header {
    background: #eee;
    line-height: 50px;
    padding: 0 10px;
    font-size: 20px;
  }
}
</style>
