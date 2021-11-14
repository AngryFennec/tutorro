import Vue from 'vue'
import Vuex from 'vuex'
import teachers from '~/mocks/teachers'

Vue.use(Vuex)

const loadTeachersList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(teachers)
    }, 1000)
  })
}

const createStore = () => {
  return new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {
      async loadTeachersList() {
        try {
          const teachers = await loadTeachersList()
          console.log(teachers)
        } catch (error) {
          console.error(error)
        }
      }
    },
    modules: {}
  })
}

export default createStore

