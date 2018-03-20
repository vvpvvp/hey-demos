<template>
  <div v-padding="40" v-width="550">
    <p>文件目录： src/components/demo/dict/demo5.vue</p>
    <h3>代码的调用非常的简洁，同时字典的管理也集中化。</h3>
    <p>Radio：{{value1}} | {{value1 | dictMapping('simple')}}</p>
    <p><Radio v-model="value1" dict="simple" placeholder="请选择"></Radio></p>
    <hr>
    <p>Checkbox：{{value2}} | {{value2 | dictMapping('simple')}}</p>
    <p><Checkbox v-model="value2" dict="simple" placeholder="请选择"></Checkbox></p>
    <hr>
    <p>Select：{{value3}} | {{value3 | dictMapping('simple')}}</p>
    <p><Select v-model="value3" dict="simple" placeholder="请选择"></Select></p>
    <hr>
    <p>Select Multiple：{{value4}} | {{value4 | dictMapping('simple')}}</p>
    <p><Select v-model="value4" multiple dict="simple" placeholder="请选择"></Select></p>
    <hr>
    <p>AutoComplete：{{value5}} | {{value5 | dictMapping('simple')}}</p>
    <p><AutoComplete v-model="value5" dict="simple" placeholder="请选择"></AutoComplete></p>
    <hr>
    <p>AutoComplete Multiple：{{value6}} | {{value6 | dictMapping('simple')}}</p>
    <p><AutoComplete v-model="value6" multiple dict="simple" placeholder="请选择"></AutoComplete></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
    };
  }
};
</script>
