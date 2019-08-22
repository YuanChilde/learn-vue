import Vue from "vue";
//import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import db from "./utils/localstorage";
import request from "./api";

import {
  Button,
  Col,
  Drawer,
  Icon,
  Layout,
  Menu,
  Radio,
  Row,
  Tabs,
  Divider,
  Input,
} from "ant-design-vue";

//import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;

// 全局注册ant-design-vue
//Vue.use(Antd);
// 按需加载组件
Vue.use(Button);
Vue.use(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(Divider);
Vue.use(Input);

Vue.prototype.$db = db;
Vue.prototype.$post = request.post;
Vue.prototype.$get = request.get;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
