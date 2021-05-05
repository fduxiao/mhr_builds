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
    },
    {
        path: '/armors',
        name: 'Armors',
        component: () => import('../views/Armors.vue')
    },
    {
        path: '/materials',
        name: 'Materials',
        component: () => import('../views/Materials.vue')
    },
    {
        path: '/monsters',
        name: 'Monsters',
        component: () => import('../views/Monsters.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/Skills.vue')
    },
    {
        path: '/weapons',
        name: 'Weapons',
        component: () => import('../views/Weapons.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
