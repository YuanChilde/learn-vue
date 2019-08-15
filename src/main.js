import Vue from "vue";
//import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {Button} from "ant-design-vue";

//import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;

// 全局注册ant-design-vue
//Vue.use(Antd);
// 按需加载组件
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
