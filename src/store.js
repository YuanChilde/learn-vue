import Vue from "vue";
import Vuex from "vuex";
import account from "./store/account";

Vue.use(Vuex);

const state = {
  count: 0,
  sum: 0
};

const mutations = {
  mutationsAddCount(state, data = 0) {
    state.count += data;
  },
  mutationsReduceCount() {
    state.count -= 1;
  }
};

const actions = {
  actionsAddCount(context, data = 0) {
    return context.commit("mutationsAddCount", data);
  },
  actionsReduceCount({ commit }) {
    return commit("mutationsReduceCount");
  }
};

const getters = {
  getterCount(state) {
    return state.count;
  },
  // 回调函数第二个参数固定为getters
  getterSecondParam(state, getters) {
    return getters.getterCount;
  },
  // 传参数值方式
  getterSum: state => val => {
    return state.sum + val;
  }
};

export default new Vuex.Store({
  // 状态变更且不是由 mutation 函数引起的，将会抛出错误
  strict: process.env.NODE_ENV !== "prod",
  modules: {
    account
  },
  state,
  mutations,
  actions,
  getters
});
