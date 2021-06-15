import { createApp } from 'vue';
import store from '@/store';
import App from './App.vue';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).use(store).mount('#app');
