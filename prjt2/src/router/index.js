import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IncreView from '../components/IncreView.vue'
import TodoView from '../views/TodoView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/IncreView',
    name: 'IncreView',
    component: IncreView
  },
  {
    path: '/TodoView',
    name: 'TodoView',
    component: TodoView
  },
  {
    path: '/UserView',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
