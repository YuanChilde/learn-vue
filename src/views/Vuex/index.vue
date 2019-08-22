<template>
  <div class="demo">
    <router-link to="/"><a-icon type="home"  style="font-size: 16px;margin-top: 10px;color:#000000" /></router-link>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="单模块" key="1">
        <vuex-tab1></vuex-tab1>
      </a-tab-pane>
      <a-tab-pane tab="多模块" key="2" forceRender>
        <vuex-tab2></vuex-tab2>
      </a-tab-pane>
      <a-tab-pane tab="Promise方式" key="3">
        <vuex-tab3></vuex-tab3>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import VuexTab1 from "./VuexTab1";
import VuexTab2 from "./VuexTab2";
import VuexTab3 from "./VuexTab3";

export default {
  name: "index",
  components: {
    VuexTab1,
    VuexTab2,
    VuexTab3
  },
  methods: {
    callback(key) {
      // console.log(key)
    }
  }
};
</script>

<style scoped>
.demo {
  margin-left: 30%;
}
</style>
