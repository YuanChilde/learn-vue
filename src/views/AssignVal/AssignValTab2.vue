<template>
    <div>
        <p>in child1:</p>
        props:{{name}} 或者 {{$props['name']}}}}
        <br>
        <p style="color: red">除了props定义外的变量（$attrs）传递到下一级(含:变量)</p>
        <p>attrs: {{$attrs['gender']}} 在$attrs里面只会有props没有注册的属性</p>
        <p>$attrs: {{$attrs}}</p>
        <p>$listeners: {{$listeners}}</p>
        <assign-val-tab2-child v-bind="$attrs" v-on="$listeners" @test2="onTest2"></assign-val-tab2-child>
    </div>
</template>

<script>
    import AssignValTab2Child from './AssignValTab2Child';
    export default {
        props:['name'],
        data(){
            return {

            }
        },
        // 取消属性显示在组件标签上
        inheritAttrs: false,
        created() {

        },
        components:{
            AssignValTab2Child
        },
        methods:{
            onTest2(){
                console.log('child1 test1 running...');
            }
        }

    }
</script>

<style scoped>

</style>
