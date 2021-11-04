export default function () {
  return [
    {
      path: '/',
      name: 'Login',
      component: () => import('./../pages/LoginPage.vue')
    },
    
    {
      path: '/:catchAll(.*)*',
      component: () => import('./../pages/LoginPage.vue')
    }
  ]
}
