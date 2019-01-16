/*
 * Vuex
 * @Author: baixiaoming
 * @Date: 2019-01-12 20:39:26
 * @Last Modified by: baixiaoming
 * @Last Modified time: 2019-01-16 23:09:00
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        totalPrice: 0 // 总价
    },
    getters: {
        //
    },
    mutations: {
        increment(state, price) {
            state.totalPrice += price
        },
        decrement(state, price) {
            state.totalPrice -= price
        }
    },
    actions: {
        //
    }
})
