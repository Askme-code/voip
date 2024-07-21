import ContactsView from '../views/ContactsView.vue';
import HomeView from '../views/HomeView.vue';
import SettingsView from '../views/SettingsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contacts', component: ContactsView },
  { path: '/settings', component: SettingsView },
];
