import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../components/DashboardData.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

function isAuthenticated() {
  return false;
}

export default router;
