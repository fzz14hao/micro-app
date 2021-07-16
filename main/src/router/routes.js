const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../pages/Index/Index.vue')
  },
  {
    path: '/app1',
    name: 'app1',
    component: () => import('../pages/App1/Index.vue')
  },
  {
    path: '/app2',
    name: 'app2',
    component: () => import('../pages/App2/Index.vue')
  },
];

export default routes;
