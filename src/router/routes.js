import LoginAdmin from '../views/LoginAdmin.vue'

export default [
  {
    path: '/',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  }
];