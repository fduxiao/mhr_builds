import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/lang',
        name: 'Lang',
        component: () => import('../views/lang.vue')
    },
    {
        path: '/quickbuild',
        name: 'QuickBuild',
        component: () => import('../views/QuickBuild.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
