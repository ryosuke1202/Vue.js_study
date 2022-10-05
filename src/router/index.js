import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../components/Todo.vue'
import Edit from '../components/Edit.vue'


const routes = [
  {
    path: '/',
    name: 'todoList',
    component: Todo
  },
  {
    path: '/:id',
    name: 'todoEdit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router