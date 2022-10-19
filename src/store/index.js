import { api } from '@/service/service';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      code: "",
      streat: "",
      number: "",
      district: "",
      city: "",
      state: ""
    }
  },
  getters: {
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USER(state, payload) {
      state.user = payload;
    },

  },
  actions: {
    getUser(context, payload) {
      api.get(`/user/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN",true);
      });
    }
  },
  modules: {
  }
})
