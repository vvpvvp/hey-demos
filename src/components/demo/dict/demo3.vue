<template>
  <div v-padding="40">
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
