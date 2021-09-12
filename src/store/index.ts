import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'swanine'
    }
  }
})

export default store
