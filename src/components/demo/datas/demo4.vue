<template>
  <div v-padding="40" v-width="600">
    <p>文件目录： src/components/demo/datas/demo4.vue</p>
    <p>值：{{value}}</p>
    <p><Select v-model="value" multiple :datas="options" placeholder="请选择" type="object"></Select></p>
    <p><AutoComplete :datas="options" multiple v-model="value" type="object"></AutoComplete></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [ { key: "a", title: "黄金糕" }, { key: "b", title: "双皮奶" }, { key: "c", title: "蚵仔煎" }, { key: "d", title: "龙须面" }, { key: "e", title: "北京烤鸭" } ],
      value: []
    };
  }
};
</script>
