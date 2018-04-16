<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      options: [ { key: "a", title: "黄金糕" }, { key: "b", title: "双皮奶" }, { key: "c", title: "蚵仔煎" }, { key: "d", title: "龙须面" }, { key: "e", title: "北京烤鸭" } ],
      options2: [
        {
          key: "a",
          title: "黄金糕",
          children: [{
            key: "a1",
            title: "黄金糕1"
          },{
            key: "a2",
            title: "黄金糕2"
          },{
            key: "a3",
            title: "黄金糕3"
          },{
            key: "a4",
            title: "黄金糕4"
          },{
            key: "a5",
            title: "黄金糕5"
          }]
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
      value1: "a",
      value2: null,
      value3: null,
      step: 0
    };
  }
};
</script>
