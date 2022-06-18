import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from 'src/i18n';
import 'src/mock/index.js';
createApp(App)
  .use(i18n)
  .use(ElementPlus, { size: 'small' })
  .use(store)
  .use(router)
  .mount('#app');
