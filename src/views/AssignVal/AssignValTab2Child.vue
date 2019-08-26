<template>
    <div>
        <p>in child2:</p>
        <p>props: {{ age }} </p>
        <p>$attrs: {{$attrs}}</p>
    </div>
</template>

<script>
    export default {
        props:['age'],
        data(){
            return {

            }
        },
        inheritAttrs: false,
        mounted() {
            this.$emit('test2');
        },

    }
</script>

<style scoped>

</style>
