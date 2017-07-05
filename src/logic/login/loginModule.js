import Vue from 'vue'
import Vuex from 'vuex'
import { loginGetter } from './getters.js'
import { actions } from './actions.js'
import { mutations } from './mutations.js'
// Vue.use(Vuex)
// const state = {
//     loginway: 'login',
//     data: ''
// }

// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions
// })


export const list = {
    state: {
        loginway: 'login',
        data: ''
    },
    actions: actions,
    getters: loginGetter,
    mutations: mutations
}