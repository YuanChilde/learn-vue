<template>
    <div>
        <a-button type="primary" @click="getParent()">Parent</a-button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Vue.js'
            }
        },
        methods: {
            sayHello () {
                window.alert('Hello');
            },
            getParent(){
                this.$parent.$parent.$parent.$parent.$parent.callByChild();
            }
        }
    }
</script>

<style scoped>

</style>
