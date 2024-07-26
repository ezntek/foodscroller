import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingsView from '@/views/SettingsView.vue'
import AboutView from '../views/AboutView.vue'
import PantryView from '@/views/PantryView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsView
        },
        {
            path: '/pantry',
            name: 'pantry',
            component: PantryView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView
        }
    ]
})

export default router
