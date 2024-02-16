import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : AppHome
        },
        {
            path : '/projects',
            name : 'projects',
            component : ProjectsList
        },
        {
            path : '/projects/:slug',
            name : 'single-project',
            component : ProjectDetail
        },
        {
            path : '/:pathMatch(.*)*',
            name : 'not-found',
            component : NotFound
        }
    ]
});

export { router };

