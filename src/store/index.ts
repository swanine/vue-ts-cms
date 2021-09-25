import { createStore } from 'vuex'
import loginModule from './login/login'
import systemModule from './main/system/system'
import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'swan',
      age: 25,
      menuState: false
    }
  },
  mutations: {
    changeMenuState(state) {
      state.menuState = !state.menuState
    }
  },
  getters: {},
  actions: {},
  modules: {
    loginModule,
    systemModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalStorage')
}

export default store
