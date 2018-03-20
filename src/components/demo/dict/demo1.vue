<template>
  <div v-padding="40" v-width="600">
    <p>文件目录： src/components/demo/dict/demo1.vue</p>
    <p>值：{{value}}</p>
    <p><Radio v-model="value" dict="simple"></Radio></p>
    <p><Select v-model="value" dict="simple" placeholder="请选择"></Select></p>
    <p><Tabs v-model="value" dict="simple"></Tabs></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "a"
    };
  }
};
</script>
