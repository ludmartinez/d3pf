import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    async getToken ({ commit }) {
      /* oauth
        .getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .catch(err => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          console.log('Done!')
        }) */
      try {
        // Change loading state true
        commit('loading/SET_LOADING', true, { root: true })
        // Obtain token
        const { data } = await oauth.getToken()
        commit('SET_ACCESS_TOKEN', data.access_token)
      } catch (error) {
        // Reset token
        commit('SET_ACCESS_TOKEN', null)
        console.log('Error OAuth: ', error)
      } finally {
        // Change loading state false
        commit('loading/SET_LOADING', false, { root: true })
      }
    }
  }
}
