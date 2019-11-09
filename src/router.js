import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoList from './views/TodoList.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});

export default router
