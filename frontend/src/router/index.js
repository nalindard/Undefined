import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import('@vws/AboutView.vue'),
        // },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('@vws/SettingsView.vue'),
        },
        {
            path: '/trending',
            name: 'trending',
            component: () => import('@vws/TrendingView.vue'),
        },
        {
            path: '/channel',
            name: 'channel',
            component: () => import('@vws/ChannelView.vue'),
        },
        // {
        //     path: '/player',
        //     name: 'player',
        //     component: () => import('@vws/PlayerView.vue'),
        // },
        {
            path: '/user',
            name: 'user',
            component: () => import('@vws/UserProfileView.vue'),
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('@vws/AccountView.vue'),
        },
        {
            path: '/zenzone',
            name: 'zenzone',
            component: () => import('@vws/ZenZoneView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'ooops',
            component: () => import('@vws/ErrorView.vue'),
        },
    ],
    scrollBehavior: function (_to, _from, savedPosition)
    {
        return savedPosition ? savedPosition : window.scrollTo(0, 0)
    },
})

export default router
