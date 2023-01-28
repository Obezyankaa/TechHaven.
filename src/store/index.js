import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_URL } from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
  },

  userAccessKey: null,
  cartProductsData: [],
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
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.cartProductsData = items;
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((el) => ({
        productId: el.product.id,
        amount: el.quantity,
      }));
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const product = state.cartProductsData.find((p) => p.product.id === item.productId);
        // console.log(product.product);
        console.log(state.cartProducts);
        return {
          ...item,
          product,
        };
      });
    },
    catrTotalPrice(state, getters) {
      // eslint-disable-next-line max-len
      return getters.cartDetailProducts.reduce((acc, el) => (el.product.price * el.amount) + acc, 0);
    },
    counterPrice(state, getters) {
      return getters.cartDetailProducts.length;
    },
  },
  actions: {
    loadCart(context) {
      axios
        .get(`${API_URL}/api/baskets`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem('userAccessKey', response.data.user.accessKey);
            console.log(response.data.user.accessKey);
            context.commit('updateUserAccessKey', response.data.user.accessKey);
          }

          context.commit('updateCartProductsData', response.data.items);
          context.commit('syncCartProducts');
        });
    },
  },

});
