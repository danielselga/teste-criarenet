import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headers: [
      {
        text: "Nome completo",
        align: "start",
        filterable: false,
        value: "nome",
      },
      { text: "CPF", value: "cpf", align: "center" },
      { text: "Telefone", value: "phone", align: "center" },
      { text: "Email", value: "email", align: "center" },
    ],
    data: {},
    form: {},
  },
  getters: {
    headers: (state) => state.headers,
    data: (state) => state.data,
  },
  mutations: {
    setForm: (state, payload) => {
      state.data = payload;
    },
    setData: (state, payload) => {
      state.data = payload;
    },
  },
  actions: {
    setForm: async (context, payload) => {
      try {
        await fetch("http://localhost:3000/data", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        context.commit('setForm', payload)
      } catch (err) {
        console.log(err);
      }
    },
    setData: async (context) => {
      try {
        const data = await fetch("http://localhost:3000/data");
        const res = await data.json();
        context.commit("setData", res);
        localStorage.setItem('data', JSON.stringify(res))
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
