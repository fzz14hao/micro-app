const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../pages/Index/Index.vue')
  },
  {
    path: '/index',
    name: '首页',
    component: () => import('../pages/Index/Index.vue')
  },
];

export default routes;
