<template>
    <div class="gutter-example">
        <a-row :gutter="16">
            <a-col class="gutter-row" :span="6">
                <div class="gutter-box">组件内传值</div>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <router-link to="/router"><div class="gutter-box">Router</div></router-link>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <router-link to="/vuex"><div class="gutter-box">Vuex</div></router-link>
            </a-col>
            <a-col class="gutter-row" :span="6">
                <div class="gutter-box">Vue基础知识</div>
            </a-col>
        </a-row>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped>
    /*row col 样式*/
    .gutter-example{
        background: #f5f5f5;
    }
    .gutter-example >>> .ant-row > div {
        background: transparent;
        border: 0;
    }
    .gutter-box {
        background: rgba(0, 160, 233, 0.7);
        text-align: center;
        border-radius: 0;
        padding: 16px 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
    }
</style>
