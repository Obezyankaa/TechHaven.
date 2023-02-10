import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPageVue from '@/components/pages/MainPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import NotFaunPageVue from '@/components/pages/NotFaunPage.vue';
import CartPage from '@/components/pages/CartPage.vue';
import OrderPage from '@/components/pages/OrderPage.vue';
import OrderInfoPage from '@/components/pages/OrderInfoPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPageVue, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'notFaun', component: NotFaunPageVue, path: '*' },
  { name: 'basket', component: CartPage, path: '/basket' },
  { name: 'order', component: OrderPage, path: '/order' },
  { name: 'orderInfo', component: OrderInfoPage, path: '/order/:id' },
];

const router = new VueRouter({ routes });

export default router;
