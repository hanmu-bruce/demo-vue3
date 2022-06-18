import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('src/components/Login'),
  },
  {
    path: '/randomCode',
    name: 'random',
    component: () => import('src/components/RandomCode'),
  },
  {
    path: '/windi',
    name: 'windi',
    component: () => import('src/windi/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
