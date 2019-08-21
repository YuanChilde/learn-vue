import db from '../utils/localstorage'
import types from './mutations-types'

// 第一个参数state，第二个参数为相关功能的必要参数，第三个为rootState，第四个为rootGetters
export default {
    namespaced: true,
    state: {
        token: db.get('USER_TOKEN'),
        expireTime: db.get('EXPIRE_TIME'),
        user: db.get('USER'),
    },
    mutations: {
        // state 模块局部变量
        [types.INCREASE](state, data) {
            state.add = data;
        }
    },
    actions: {
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
            console.log(state);
            console.log(rootState);
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        },
        sumWithRootCount (state, getters, rootState) {
            return state.count + rootState.count
        }
    }
}
