import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {
      photo: null,
      name: "",
      last_name: "",
      gender: null,
      identifications: [{
        type: null,
        value: "",
      }],
      blood: null,
      contact_info: {
        phones: [{
          type: "mdi-cellphone",
          prefix: "506",
          number: "",
        }, ],
        email: "",
      },
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = {
        ...user
      }
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    addIdentification(state) {
      state.user.identifications.push({})
    },
    quitIdentification(state) {
      state.user.identifications.pop()
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    addPhone(state) {
      state.user.contact_info.phones.push({
        type: "mdi-cellphone",
        prefix: "506"
      })
    },
    quitPhone(state) {
      state.user.contact_info.phones.pop()
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {},
  modules: {}
})
