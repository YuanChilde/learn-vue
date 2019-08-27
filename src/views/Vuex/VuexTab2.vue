<template>
    <div>
        <!--可以省略this-->
        <h3>直接获取状态值：{{ $store.state.count }}</h3>

        <a-button type="primary" @click="handleAddClick(10)">action</a-button>
    </div>
</template>

<script>
    // import { createNamespacedHelpers } from 'vuex'
    // const { mapState, mapActions } = createNamespacedHelpers('account')
    export default {
        methods: {
            handleAddClick(n) {
                this.$store.dispatch('account/incrementIfOddOnRootSum', n);
            },
        }
    };
</script>

<style scoped></style>
