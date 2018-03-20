<template>
  <div v-padding="40" v-width="600">
    <p>文件目录： src/components/demo/dict/demo3.vue</p>
    <p>值：{{value}}</p>
    <p><Select v-model="value" dict="simple" placeholder="请选择" type="object"></Select></p>
    <p><AutoComplete dict="simple" v-model="value" type="object"></AutoComplete></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    };
  }
};
</script>
