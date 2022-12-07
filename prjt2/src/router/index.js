import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IncreView from '../components/IncreView.vue'
import TodoView from '../views/TodoView.vue'
import UserView from '../views/UserView.vue'
import UserInput from '../components/UserInput.vue'
import UserUpdate from '../views/UserUpdate.vue'

const routes = [
  {
    path:'/userinput',
    name: 'userinput',
    component: UserInput
  },
  {
    path:'/userupdate',
    name: 'userupdate',
    component: UserUpdate
  },
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
