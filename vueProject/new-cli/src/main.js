import { createApp } from 'vue';
import App from './App.vue';

import store from './store';
import status from './views/status';

createApp(App).use(store).component('status', status).mount('#app');
