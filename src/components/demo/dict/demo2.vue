<template>
  <div v-padding="40" v-width="600">
    <p>文件目录： src/components/demo/dict/demo2.vue</p>
    <div>值：{{value}}</div>
    <p><Checkbox v-model="value" dict="simple"></Checkbox></p>
    <p><Select v-model="value" multiple dict="simple" placeholder="请选择"></Select></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: []
    };
  }
};
</script>
