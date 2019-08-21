<template>
    <div class="demo">
        <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="Tab 1" key="1">
                <vuex-tab1></vuex-tab1>
            </a-tab-pane>
            <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import VuexTab1 from './VuexTab1';

    export default {
        name: "index",
        components: {
            VuexTab1
        },
        methods: {
            callback(key) {
                console.log(key)
            },
        },
    }
</script>

<style scoped>
 .demo{
     margin-left: 30%;
 }
</style>
