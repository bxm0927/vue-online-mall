/*
 * Vue Router
 * @Author: baixiaoming
 * @Date: 2019-01-12 20:39:15
 * @Last Modified by: baixiaoming
 * @Last Modified time: 2019-01-16 23:09:10
 */

import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        }
    ]
})
