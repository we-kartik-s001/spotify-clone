import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';

const pinia = createPinia()
const router = createRouter();
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
