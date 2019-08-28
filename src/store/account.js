import db from "../utils/localstorage";
import types from "./mutations-types";

// 第一个参数state，第二个参数为相关功能的必要参数，第三个为rootState，第四个为rootGetters
export default {
    namespaced: true,
    state: {
        token: db.get("USER_TOKEN"),
        expireTime: db.get("EXPIRE_TIME"),
        user: db.get("USER"),
        count: 0
    },
    mutations: {
        // state 模块局部变量
        [types.INCREASE](state, data) {
            state.add = data;
        },
        increment(state, data) {
            state.count = data;
        },
        someMutation(state, data) {

        }
    },
  actions: {
      incrementIfOddOnRootSum({state, commit, rootState}, val) {
          commit("increment",val);
      },
    actionA({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation');
          resolve()
        }, 1000)
      })
    },
    actionB({dispatch, commit}) {
      return dispatch('actionA').then(() => {
        commit('someOtherMutation')
      });
    },
    async actionC({commit}) {
      commit('gotData', await getData())
    },
    async actionD({dispatch, commit}) {
      await dispatch('actionC');
      commit('gotOtherData', await getOtherData())
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    sumWithRootCount(state, getters, rootState) {
      return state.count + rootState.count;
    }
  }
};
