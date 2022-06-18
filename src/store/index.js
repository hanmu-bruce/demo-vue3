import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
const dataState = createPersistedState({
  paths: ['language'],
  storage: {
    getItem: (key) => sessionStorage.getItem(key),
    setItem: (key, value) =>
      sessionStorage.setItem(key, value, { expires: 3, secure: true }),
    removeItem: (key) => sessionStorage.removeItem(key),
  },
});
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [dataState],
});
