<template>
  <div v-padding="40" v-width="600">
    <p>文件目录： src/components/dict/demo4.vue</p>
    <p>值：{{value}}</p>
    <p><Select v-model="value" multiple dict="simple" placeholder="请选择" type="object"></Select></p>
    <p><AutoComplete dict="simple" multiple v-model="value" type="object"></AutoComplete></p>
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
