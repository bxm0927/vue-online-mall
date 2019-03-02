/*
 * Vuex
 * @Author: baixiaoming
 * @Date: 2019-01-12 20:39:26
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-03-02 16:07:35
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        totalPrice: 0, // 总价
        inventory: 999 // 库存
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
