<template>
    <div>
        <h3>直接获取根状态值：{{$store.state.count}}</h3>
        <h3>通过本地方法获取状态值：{{count}}</h3>
        <h3>通过辅助函数 State获取状态值：{{stateCount}}</h3>
        <h3>通过辅助函数 Getter获取Count值：{{getterCount}}</h3>

        <a-button type="primary" @click="handleAddClick(10)">增加(mutations)</a-button>
        <a-button type="primary" @click="handleReduceClick">减少(mutations)</a-button>

        <a-button type="primary" @click="handleActionsAdd(10)">增加(actions)</a-button>
        <a-button type="primary" @click="handleActionsReduce">减少(actions)</a-button>

        <a-button type="danger" @click="directAddClick(10)">严格模式报异常</a-button>
        <a-divider />
        <h3>通过辅助函数 Getter获取Sum值：{{getterSum(10)}}</h3>
        <h3>通过辅助函数 Getter获取第二个Getter：{{getterSecondParam}}</h3>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

    export default {

        methods: {
            ...mapMutations({
                handleAddClick: 'mutationsAddCount',
                handleReduceClick: 'mutationsReduceCount'
            }),
            ...mapActions({
                handleActionsAdd: 'actionsAddCount',
                handleActionsReduce: 'actionsReduceCount'
            }),
            // mutations监听
            handleAddClick(n){
              this.$store.commit('mutationsAddCount',n);
            },
            handleReduceClick(){
              this.$store.commit('mutationsReduceCount');
            },
            // actions监听
            handleActionsAdd(n){
              this.$store.dispatch('actionsAddCount',n)
            },
            handleActionsReduce(){
              this.$store.dispatch('actionsReduceCount')
            },
            directAddClick(val) {
                // 严格模式下虽然异常，但值还是可以修改
                this.$store.state.count += val;
            }
        },
        computed: {
            count(){
                return this.$store.getters.getterCount
            },
            ...mapState({
                stateCount:'count'
            }),
            ...mapGetters([
                'getterCount',
                'getterSum',
                'getterSecondParam'
            ])
        }
    }
</script>

<style scoped>
    .demo {

    }

    .ant-btn {
        margin-right: 8px;
        margin-bottom: 12px;
    }
</style>
