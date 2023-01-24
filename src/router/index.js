import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPageVue from '@/components/pages/MainPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import NotFaunPageVue from '@/components/pages/NotFaunPage.vue';
import CartPage from '@/components/pages/CartPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPageVue, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'notFaun', component: NotFaunPageVue, path: '*' },
  { name: 'basket', component: CartPage, path: '/basket' },
];

const router = new VueRouter({ routes });

export default router;
