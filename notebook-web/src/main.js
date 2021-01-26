import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView,axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    config => {
      if (window.sessionStorage.getItem('token')) {
        config.headers.Authorization = window.sessionStorage.getItem('token');
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    });
