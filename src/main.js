/* eslint-disable no-unused-vars */
import Vue from 'vue';
import App from './App.vue';
import testOne from './TestOne';
import testTwo from './TestTwo';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

testTwo(testOne);
