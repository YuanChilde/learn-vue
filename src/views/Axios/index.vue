<template>
  <div style="margin-left: 20px;margin-top: 20px">
    <h3>请求结果</h3>
    <a-textarea :autosize="{ minRows: 3}" v-model="getRes" />
    <a-divider orientation="left">POST请求</a-divider>
    <a-button type="primary" @click="testPostJSON" >POST(JSON)</a-button>
    <a-button type="primary" @click="testPostForm">POST(Form)</a-button>
    <a-divider orientation="left">GET请求</a-divider>
    <a-button type="primary" @click="testGetQueryParams">GET(Query Params)</a-button>
  </div>
</template>

<script>
  import {DEMO_POST_JSON_URL,DEMO_POST_FORM_URL,DEMO_GET_URL} from "../../api/api";

  export default {
  data() {
    return {
      getRes: ""
    };
  },
  methods: {
    testPostJSON() {
      DEMO_POST_JSON_URL({
        type: 1
      })
              .then(r => {
                this.getRes = JSON.stringify(r);
                console.log(r)
              })
              .catch(e => {
                this.getRes = JSON.stringify(e);
                console.log(e);
              });
    },
    testPostForm() {
      DEMO_POST_FORM_URL({
        type: 1
      })
              .then(r => {
                this.getRes = JSON.stringify(r);
                console.log(r)
              })
              .catch(e => {
                this.getRes = JSON.stringify(e);
                console.log(e);
              });
    },
    testGetQueryParams() {
      DEMO_GET_URL({
        type: 1
      },{timeout:15000})
        .then(r => {
          this.getRes = JSON.stringify(r);
          console.log(r)
        })
        .catch(e => {
          this.getRes = JSON.stringify(e);
          console.log(e);
        });
    }
  },
  computed:{

  }
};
</script>

<style scoped>
.ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
