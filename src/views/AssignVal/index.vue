<template>
    <div class="demo">
        <router-link to="/"><a-icon type="home"  style="font-size: 16px;margin-top: 10px;color:#000000" /></router-link>
        <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="单级传值" key="1">
                <assign-val-tab1 :users="users" @hello="hello"></assign-val-tab1>
            </a-tab-pane>
            <a-tab-pane tab="（多级）props|$attrs|$listeners" key="2">
                <assign-val-tab2 name="rick" :age="18" gender="male" @test2="onTest2"></assign-val-tab2>
            </a-tab-pane>
            <a-tab-pane tab="（多级单向-父向子）provide/inject" key="3">
                <a-button type="primary" @click="changeColor()">改变color</a-button>
                <assign-val-tab3></assign-val-tab3>

            </a-tab-pane>
            <a-tab-pane tab="$parent/$children与 ref" key="4">
            </a-tab-pane>
            <a-tab-pane tab="插槽" key="5">
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import AssignValTab1 from './AssignValTab1';
    import AssignValTab2 from './AssignValTab2';
    import AssignValTab3 from './AssignValTab3';
    import Vue from 'vue';

    export default {
        data(){
            return {
                users:{

                },
                color2: 'yellow'
            }
        },
        components:{
            AssignValTab1, AssignValTab2, AssignValTab3
        },
        created(){
          this.users = [
              {
                  name:"11111"
              },
              {
                  name:"2222"
              }
          ];
        },
        methods:{
            onTest2(){
                console.log('parent test1 running...');
            },
            hello(val){
                console.log('event,'+val);
            },
            changeColor(color) {
                if (color) {
                    this.theme.color = color;
                } else {
                    this.theme.color = this.theme.color === "blue" ? "red" : "blue";
                }
            }
        },
        provide() {
            this.theme = Vue.observable({
                color: "blue"
            });
            return {
                theme: this.theme,
                theme2: this
            };
        },
    }
</script>

<style scoped>
.demo {
    margin-left: 30%;
}
</style>
