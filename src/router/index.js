
import routes from './routes'
import {Router} from 'vue-router'
import LoginPage from './../pages/LoginPage.vue'


export default new Router({
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: LoginPage,
      }
    ]
  })


