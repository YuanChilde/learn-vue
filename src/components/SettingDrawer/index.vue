<template>
    <div>
        <a-button type="primary" @click="showDrawer">
            Open
        </a-button>
        <a-drawer
                title="Basic Drawer"
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
        },
    }
</script>

<style scoped>

</style>