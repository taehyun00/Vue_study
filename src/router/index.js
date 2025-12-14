import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignupView from '@/views/SignupView.vue';
import MainView from '@/views/MainView.vue'
import CreateRoomView from '@/views/CreateRoomView.vue';
import ListRoomView from '@/views/ListRoomView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signup',
    name : 'signup',
    component: SignupView,
  },
  {
    path: '/main',
    name : 'main',
    component: MainView,
  },
  {
    path: '/create',
    name: 'create',
    component : CreateRoomView,
  },
  {
    path: '/list', 
    name: 'list',
    component  : ListRoomView,
  }
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;