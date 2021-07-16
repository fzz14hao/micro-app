import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem'

import Vconsole from 'vconsole'
const vConsole = new Vconsole()

import {httpGet,httpPost} from "@/libs/api.request";

Vue.prototype.$httpGet = httpGet;
Vue.prototype.$httpPost = httpPost;


Vue.config.productionTip = false


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: '//localhost:9091',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  },
  {
    name: 'app2',
    entry: '//localhost:9092',
    container: '#yourContainer',
    activeRule: '/yourActiveRule2',
  },
]);

start();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
