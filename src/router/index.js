/*
 * Vue Router
 * @Author: baixiaoming
 * @Date: 2019-01-12 20:39:15
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-03-02 12:25:12
 */

import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage.vue'
import DetailPage from '@/pages/DetailPage.vue'
import DetailAnalysisPage from '@/pages/detail/DetailAnalysisPage.vue'
import DetailCountPage from '@/pages/detail/DetailCountPage.vue'
import DetailForecastPage from '@/pages/detail/DetailForecastPage.vue'
import DetailPublishPage from '@/pages/detail/DetailPublishPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/detail',
            name: 'DetailPage',
            component: DetailPage,
            redirect: '/detail/count',
            children: [
                { path: 'analysis', name: 'DetailAnalysisPage', component: DetailAnalysisPage },
                { path: 'count', name: 'DetailCountPage', component: DetailCountPage },
                { path: 'forecast', name: 'DetailForecastPage', component: DetailForecastPage },
                { path: 'publish', name: 'DetailPublishPage', component: DetailPublishPage },
            ]
        }
    ]
})
