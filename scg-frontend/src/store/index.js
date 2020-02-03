import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BC: {},
    XYZ: {},
    DISTANCE: {}
  },
  mutations: {
    PUSH_BC(state, data) {
      state.BC = data;
    },
    PUSH_XYZ(state, data) {
      state.XYZ = data;
    },
    PUSH_DISTANCE(state, data) {
      state.DISTANCE = data;
    }
  },
  actions: {
    async findBC({ commit }) {
      const localValue = localStorage.getItem("bc");
      if (localValue) {
        commit("PUSH_BC", JSON.parse(localValue));
      } else {
        const { data } = await axios.get("http://localhost:3000/bc");
        localStorage.setItem("bc", JSON.stringify(data));
        commit("PUSH_BC", data);
      }
      return true;
    },
    async findXYZ({ commit }) {
      const localValue = localStorage.getItem("xyz");
      if (localValue) {
        commit("PUSH_XYZ", JSON.parse(localValue));
      } else {
        const { data } = await axios.get("http://localhost:3000/xyz");
        localStorage.setItem("xyz", JSON.stringify(data));
        commit("PUSH_XYZ", data);
      }
      return true;
    },
    async findDistance({ commit }) {
      const localValue = localStorage.getItem("distance");
      if (localValue) {
        commit("PUSH_DISTANCE", JSON.parse(localValue));
      } else {
        const { data } = await axios.get("http://localhost:3000/route");
        localStorage.setItem("distance", JSON.stringify(data));
        commit("PUSH_DISTANCE", data);
      }
      return true;
    }
  }
});
