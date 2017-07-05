import Vue from 'vue'
import Vuex from 'vuex'

import { list } from './login/loginModule.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    getters: {
        test: function() {
            return 'test';
        }
    },
    modules: {
        list: list

    },
})

export default store