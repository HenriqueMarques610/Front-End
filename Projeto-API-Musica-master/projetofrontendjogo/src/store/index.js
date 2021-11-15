import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos: [],
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    marcaFavorito(state, item) {
      state.favoritos = [item, ...state.favoritos]
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    desmarcaFavorito(state, index) {
      state.favoritos.splice(index, 1)
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    iniciaFavoritos(state, lista) {
      state.favoritos = lista
    }
  },
  actions: {
  },
  modules: {
  }
})
