import { createApp } from 'vue';
import store from '@/store';
import { Quasar } from 'quasar';
import App from './App.vue';
import quasarUserOptions from './quasar-user-options.js';

createApp(App).use(Quasar, quasarUserOptions).use(store).mount('#app');
