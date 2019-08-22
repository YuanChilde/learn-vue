<template>
    <div class="demo">
        <router-link to="/"><a-icon type="home" style="font-size: 16px;margin-top: 10px;color:#000000" /></router-link>
        <a-tabs defaultActiveKey="1" >
            <a-tab-pane tab="router-link" key="1" forceRender>
                <router-link style="font-size: 16px" :to="{path:'/router/link1',query:{id:1}}">query传参（使用name参数效果一样）</router-link><br/><br/>
                <router-link style="font-size: 16px" :to="{name:'link2',params:{name:1}}">params传参（须使用name；刷新页面参数失效）</router-link><br/><br/>
                <router-link style="font-size: 16px" :to="{path:'/router/link3/3'}">url匹配（须使用path）</router-link><br/><br/>
                <h3>query传参: {{$route.query}}</h3>
                <h3>params传参: {{$route.params}}</h3>
                <h3>url匹配传参: {{$route.params}}</h3>
            </a-tab-pane>
            <a-tab-pane tab="props解耦" key="2">

            </a-tab-pane>
            <a-tab-pane tab="跳转方法" key="3">

            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>
.demo {
    margin-left: 10%;
}
</style>
