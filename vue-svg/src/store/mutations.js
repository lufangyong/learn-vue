import * as types from './mutation-types'

const mutations = {
  [types.SET_USER_INFO](state, payload) {
    state.userInfo = payload;
  },
  [types.UPDATE_USER_INFO](state, payload) {
    // state.userInfo = Object.assign(state, payload)
    state.userInfo = {...state, ...payload}
  },
};

export default mutations
