import { createRouter, createWebHistory } from 'vue-router';
import AdminPage from '../views/AdminPage.vue';
import HomePage from '../views/Home.vue';
import LoginPage from '../views/UserLogin.vue';
import NotFound from '../views/NotFound.vue';
import NewsDetail from '../views/NewsDetail.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/admin', component: AdminPage, name:'admin-page' }, // 管理ページ
  { path: '/news/:id', component: NewsDetail, name: 'news-detail' },
  { path: '/:pathMatch(.*)*', component: NotFound }, // 404 Not Found ページ
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
