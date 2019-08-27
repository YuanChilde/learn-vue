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
            <a-tab-pane tab="$parent/$children与ref" key="4">
                <a-button type="primary" @click="getChild()">Child</a-button>
                <assign-val-tab4 ref="t4"></assign-val-tab4>
            </a-tab-pane>
            <a-tab-pane tab="插槽" key="5">
                <assign-val-tab5 >
                   <!-- 父访问子属性值-->
                    <template v-slot:header="slotProps">
                        <h1>Here might be a page title {{slotProps.user.name}}</h1>
                    </template>

                    <p>A paragraph for the main content.</p>
                    <p>And another one.</p>

                    <template v-slot:footer>
                        <p>Here's some contact info</p>
                    </template>
                </assign-val-tab5>
            </a-tab-pane>
            <a-tab-pane tab="v-model" key="6">
                {{haorooms}}
                <assign-val-tab6 v-model="haorooms"></assign-val-tab6>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AssignValTab1 from './AssignValTab1';
    import AssignValTab2 from './AssignValTab2';
    import AssignValTab3 from './AssignValTab3';
    import AssignValTab4 from './AssignValTab4';
    import AssignValTab5 from './AssignValTab5';
    import AssignValTab6 from './AssignValTab6';

    export default {
        name:"AssignVal",
        data(){
            return {
                users:{

                },
                color2: 'yellow',
                haorooms: "haorooms"
            }
        },
        components:{
            AssignValTab1, AssignValTab2, AssignValTab3, AssignValTab4, AssignValTab5, AssignValTab6
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
        mounted(){

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
            },
            getChild() {
                const A = this.$refs.t4;
                console.log(A.title);
                A.sayHello();

                // $children不保证顺序
                /*console.log(this.$children);
                const B = this.$children[0];
                console.log('22',B.title);*/
            },
            callByChild(){
                console.log('my is father');
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
    margin-left: 15%;
}
.ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
}
</style>
