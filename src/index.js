// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/index.js";
import HeyUI from "heyui";
import initDict from './js/config/dict-config';

initDict(HeyUI);
Vue.use(HeyUI);

Vue.config.productionTip = false;
require("heyui/themes/index.css");

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
