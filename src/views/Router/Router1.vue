<template>
    <div>
        <h3>props: true 开启属性值注入功能，组件中须定义同名属性</h3>
        <span>路由参数：{{id}},{{msgId}}</span>
    </div>
</template>

<script>
    export default {
        name: "Router1",
        props: {
            id: {
                type: String,
                default: ""
            },
            msgId:{
                default: ""
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
