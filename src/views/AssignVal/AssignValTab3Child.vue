<template>
    <div >
        <p>child2</p>
        <h3 :style="{ color: theme.color }">组件</h3>
    </div>
</template>

<script>
    export default {
        inject: {
            theme: {
                default: () => ({color: 'yellow'})
            },
            theme2: {
                default: () => ({})
            }
        },
        mounted(){
            console.log(this.theme2.color2)
        }
    }
</script>

<style scoped>

</style>
