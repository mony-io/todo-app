import { createRouter, createWebHistory } from 'vue-router';
import Todo from '../views/Todo/Todo.vue';
import ErrorBoundary from '../views/ErrorBoundary.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Todo,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About/About.vue'),
    },
    {
        path: '/error',
        name: 'error',
        component: ErrorBoundary,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: ErrorBoundary,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
