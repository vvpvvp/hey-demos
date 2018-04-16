<template>
  <div v-padding="40">
    <p>文件目录： src/components/demo/datas/demo5.vue</p>
    <div v-width="200">
      <Menu :datas="options2"></Menu>
    </div>
    <hr>
    <div v-width="300">
      <TreePicker v-model="value3" :option="{datas: options2}"></TreePicker>
    </div>
    <hr>
    <div v-width="300">
      <Tree :option="{datas: options2}"></Tree>
    </div>
    <hr>
    <div v-width="300">
      <Tree multiple :option="{datas: options2}"></Tree>
    </div>
    <hr>
    
    <div>
      <p>
        <ButtonGroup size="s">
          <Button icon="h-icon-plus" @click="step>=4||step++"></Button>
          <Button icon="h-icon-minus" @click="step<=0||step--"></Button>
        </ButtonGroup>
      </p>
      <div v-width="500">
        <Steps :datas="options" :step="step"></Steps>
      </div>
    </div>
  </div>
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
