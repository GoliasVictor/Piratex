import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import "./filters";
import axios from "axios";
Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App)
})
d = await 