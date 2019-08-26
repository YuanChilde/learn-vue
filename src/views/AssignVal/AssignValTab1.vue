<template>
    <div>
        <ul>
            <li v-for="user in users">{{user.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AssignValTab1",
        props:{
            users: {
                type: Array,
                required: true
            }
        },
        created(){
            this.$emit('hello','123');
        }
    }
</script>

<style scoped>

</style>
