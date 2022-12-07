import { createRouter, createWebHistory } from 'vue-router'
import myBoardList from '../views/myBoardList.vue'
import myBoardWrite from '../views/myBoardWrite.vue'
import myBoardRead from '../views/myBoardRead.vue'

const routes = [
  {
    path: '/',
    name: 'myBoardList',
    component: myBoardList
  },
  {
    path: '/myBoardWrite',
    name: 'myBoardWrite',
    component: myBoardWrite
  },
  {
    path: '/myBoardRead',
    name: 'myBoardRead',
    component: myBoardRead
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
