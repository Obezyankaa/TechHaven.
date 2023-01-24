import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/Data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
  },
  mutations: {
    addProductToCart(state, payload) {
      const item = state.cartProducts.find((el) => el.productId === payload.productId);

      if (item) {
        item.amount += payload.amount;
      } else {
        state.cartProducts.push({
          productId: payload.productId,
          amount: payload.amount,
        });
      }
    },
    updateCartProductAmout(state, { productId, amount }) {
      const item = state.cartProducts.find((el) => el.productId === productId);

      if (item) {
        item.amount = amount;
      }
    },
    deletCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((el) => el.productId !== productId);
    },
  },
  getters: {
    cartDetailroduct(state) {
      return state.cartProducts.map((item) => ({
        ...item,
        product: products.find((el) => el.id === item.productId),
      }));
    },
    catrTotalPrice(state, getters) {
      return getters.cartDetailroduct.reduce((acc, el) => (el.product.price * el.amount) + acc, 0);
    },
    counterPrice(state, getters) {
      return getters.cartDetailroduct.length;
    },
  },

});
