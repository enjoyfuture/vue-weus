import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

export function createApp () {
  const router = createRouter();
  const store = createStore();
  
  const app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  });
  
  return { app, router, store };
}
