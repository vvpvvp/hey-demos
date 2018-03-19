import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import datasDemo1 from "../components/demo/datas/demo1";
import datasDemo2 from "../components/demo/datas/demo2";
import datasDemo3 from "../components/demo/datas/demo3";
import datasDemo4 from "../components/demo/datas/demo4";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/datas/demo1",
      name: "datasDemo1",
      component: datasDemo1
    },
    {
      path: "/datas/demo2",
      name: "datasDemo2",
      component: datasDemo2
    },
    {
      path: "/datas/demo3",
      name: "datasDemo3",
      component: datasDemo3
    },
    {
      path: "/datas/demo4",
      name: "datasDemo4",
      component: datasDemo4
    },
  ]
});
