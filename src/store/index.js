/* eslint-disable consistent-return */
/* eslint-disable no-promise-executor-return */
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
    resetCart(state) {
      state.cartProducts = [];
      state.cartProductsData = [];
    },
    updateCartProductAmout(state, { productId, amount }) {
      const item = state.cartProducts.find((el) => el.productId === productId);

      if (item) {
        item.amount = amount;
      }
    },
    deleteCartProduct(state, productId) {
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
        // console.log(state.cartProducts);
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
      return axios.get(`${API_URL}/api/baskets`, {
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
    addProductToCart(context, { productId, amount }) {
      return (new Promise((resolve) => setTimeout(resolve, 1500)))
        .then(() => axios.post(`${API_URL}/api/baskets/products`, {
          productId,
          quantity: amount,
        }, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
          .then((response) => {
            context.commit('updateCartProductsData', response.data.items);
            context.commit('syncCartProducts');
          }));
    },

    updateCartProductAmout(context, { productId, amount }) {
      context.commit('updateCartProductAmout', { productId, amount });

      if (amount < 1) {
        return;
      }
      return axios.put(`${API_URL}/api/baskets/products`, {
        productId,
        quantity: amount,
      }, {
        params: {
          userAccessKey: context.state.userAccessKey,
        },
      })
        .then((response) => {
          context.commit('updateCartProductsData', response.data.items);
        })
        .catch(() => {
          context.commit('syncCartProducts');
        });
    },

    deleteProductCart(context, { productId }) {
      // context.commit('deleteCartProduct');

      return axios.delete(`${API_URL}/api/baskets/products`, {
        data: {
          productId,
        },
        params: {
          userAccessKey: context.state.userAccessKey,
        },
      })
        .then((response) => {
          context.commit('updateCartProductsData', response.data.items);
        })
        .catch(() => {
          context.commit('syncCartProducts');
        });
    },
  },

});
