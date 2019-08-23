<template>
    <div class="demo">
        <router-link to="/"><a-icon type="home"  style="font-size: 16px;margin-top: 10px;color:#000000" /></router-link>
        <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="props|$attrs|$listeners" key="1">
                <assign-val-tab1></assign-val-tab1>
            </a-tab-pane>
            <a-tab-pane tab="..." key="2">
            </a-tab-pane>
            <a-tab-pane tab="..." key="3">
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';

    this.$root.component("AssignValTab1",{
        props:['id'],
        template:`
                    <div>{id}</div>
                 `
    });
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.demo {
    margin-left: 30%;
}
</style>
