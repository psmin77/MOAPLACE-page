import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/moa/showlist',
    name: 'showlist',
    component: () => import('../views/show/ShowListView.vue')
  },
  {
    path: '/moa/showdetail',
    name: 'showdetail',
    component: () => import('../views/show/ShowDetailView.vue')
  },
  {
    path: '/moa/showreview',
    name: 'showreview',
    component: () => import('../views/show/ShowReviewView.vue')
  },
  {
    path: '/moa/showrefund',
    name: 'showrefund',
    component: () => import('../views/show/ShowRefundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
