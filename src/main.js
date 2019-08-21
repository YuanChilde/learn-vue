import Vue from "vue";
//import Antd from "ant-design-vue";
//import App from "./App.vue";
import AppBasic from "./AppBasic.vue";
import router from "./router";
import store from "./store";

import {Button, Layout, Icon,Drawer,Radio, Menu} from "ant-design-vue";

//import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;

// 全局注册ant-design-vue
//Vue.use(Antd);
// 按需加载组件
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);

new Vue({
  router,
  store,
  //render: h => h(App)
  render: h => h(AppBasic)
}).$mount("#app");
