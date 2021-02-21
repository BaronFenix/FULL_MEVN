import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue';
import Delete from '../views/DeleteUser.vue';
import Edit from '../views/EditUser.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Addition.vue') // второй способ импорта
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
