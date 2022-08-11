import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/login/LoginView.vue'
import SameView from '../views/join/OfTheSameView.vue'
import JoinMainView from '../views/join/JoinMainView.vue'
import JoinSuccessView from '@/views/join/JoinSuccessView.vue'
import FindIdView from '@/views/login/FindIdView.vue'
import FindPwdView from '@/views/login/FindPwdView.vue'
import SetNewPasswordView from '@/views/login/SetNewPasswordView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/join/same',
    name: 'same',
    component: SameView
  },
  {
    path: '/join/main',
    name: 'join',
    component: JoinMainView
  },
  {
    path: '/join/success',
    name: 'joinSuccess',
    component: JoinSuccessView
  },
  {
    path: '/login/findId',
    name: 'findId',
    component: FindIdView
  },
  {
    path: '/login/findPwd',
    name: 'findPwd',
    component: FindPwdView
  },
  {
    path: '/login/newpassword',
    name: 'setNewPassword',
    component: SetNewPasswordView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
