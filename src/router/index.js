import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import datasDemo1 from "../components/demo/datas/demo1";
import datasDemo2 from "../components/demo/datas/demo2";
import datasDemo3 from "../components/demo/datas/demo3";
import datasDemo4 from "../components/demo/datas/demo4";
import dictDemo1 from "../components/demo/dict/demo1";
import dictDemo2 from "../components/demo/dict/demo2";
import dictDemo3 from "../components/demo/dict/demo3";
import dictDemo4 from "../components/demo/dict/demo4";
import dictDemo5 from "../components/demo/dict/demo5";

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
    {
      path: "/dict/demo1",
      name: "dictDemo1",
      component: dictDemo1
    },
    {
      path: "/dict/demo2",
      name: "dictDemo2",
      component: dictDemo2
    },
    {
      path: "/dict/demo3",
      name: "dictDemo3",
      component: dictDemo3
    },
    {
      path: "/dict/demo4",
      name: "dictDemo4",
      component: dictDemo4
    },
    {
      path: "/dict/demo5",
      name: "dictDemo5",
      component: dictDemo5
    },
  ]
});
