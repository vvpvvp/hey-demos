<template>
  <div v-padding="40">
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
