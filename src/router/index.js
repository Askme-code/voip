import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/settings', component: Settings },
  { path: '/contacts', component: Contacts },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
