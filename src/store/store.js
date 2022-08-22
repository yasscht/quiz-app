import { data } from "../../data.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  current: 0,
  data,
  score: 0,
  timerCount: 30,
};
const getters = {
  getData: (state) => state.data,
  getCurrent: (state) => state.current,
  getScore: (state) => state.score,
  getTimerCount: (state) => state.timerCount,
};
const mutations = {
  increment(state) {
    state.current <= 5 ? state.current++ : null;
  },
  incrementScore(state) {
    state.score++;
  },
  resetCurrent(state) {
    state.current = 0;
    state.score = 0;
  },
  resetCounter(state) {
    state.timerCount = 30;
  },
  decrementCounter(state) {
    state.timerCount--;
  },
};
const actions = {
  increment: ({ commit }) => commit("increment"),
  incrementScore: ({ commit }) => commit("incrementScore"),
  resetCurrent: ({ commit }) => commit("resetCurrent"),
  resetCounter: ({ commit }) => commit("resetCounter"),
  decrementCounter: ({ commit }) => commit("decrementCounter"),
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
