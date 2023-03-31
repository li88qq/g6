import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', redirect: '/workflow',},
    {path: '/workflow', component: () => import('@/views/workflow/index.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router