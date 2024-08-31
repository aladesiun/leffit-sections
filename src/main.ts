import { createApp } from 'vue'
import './index.css';
import './assets/css/style.css';
import App from './App.vue';
import PrimeVue from "primevue/config";
import Drawer from 'primevue/drawer';
import Aura from '@primevue/themes/aura';

createApp(App).component('Drawer', Drawer).use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
}).mount('#app');