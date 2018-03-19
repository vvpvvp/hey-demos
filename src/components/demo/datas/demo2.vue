<template>
  <div v-padding="40">
    <div>值：{{value}}</div>
    <p><Checkbox v-model="value" :datas="options"></Checkbox></p>
    <p><Select v-model="value" multiple :datas="options" placeholder="请选择"></Select></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          key: "a",
          title: "黄金糕"
        },
        {
          key: "b",
          title: "双皮奶"
        },
        {
          key: "c",
          title: "蚵仔煎"
        },
        {
          key: "d",
          title: "龙须面"
        },
        {
          key: "e",
          title: "北京烤鸭"
        }
      ],
      value: []
    };
  }
};
</script>
