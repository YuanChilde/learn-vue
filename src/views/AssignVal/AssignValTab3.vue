<template>
    <div >
        <p>child1</p>
        <h3 :style="{ color: theme.color }"> 组件</h3>
        <br/>
        <assign-val-tab3-child></assign-val-tab3-child>
    </div>
</template>

<script>
    import AssignValTab3Child from './AssignValTab3Child';
    export default {
        name: "AssignValTab3",
        inject: {
            theme: {
                //函数式组件取值不一样
                default: () => ({})
            }
        },
        components:{
            AssignValTab3Child
        }
    }
</script>

<style scoped>

</style>
