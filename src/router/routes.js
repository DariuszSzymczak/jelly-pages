import LoginAdmin from '../views/LoginAdmin.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'
export default [
  {
    path: '/',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
  {
    path: '/dashboard-admin',
    name: 'DashboardAdmin',
    component: DashboardAdmin
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  }
];