import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import router from './router/index.js';
import 'flatpickr/dist/flatpickr.css';
import VueFlatpickr from 'vue-flatpickr-component';

createApp(App).use(router) .component('vue-flatpickr', VueFlatpickr).mount('#app')
