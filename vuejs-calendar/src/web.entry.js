import Vue from 'vue';
import './style.scss';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }});

import App from './components/App.vue';

import Vuex from 'vuex';
Vue.use(Vuex);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store: {
    state: {
      currentMonth: 12,
      currentYear: 2021
    }
  }
});
