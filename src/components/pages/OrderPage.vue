<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<main class="content container">
    <div class="content__top">
        <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
                <router-link class="breadcrumbs__link" :to="{ name: 'main'}">
                    Каталог
                </router-link>
            </li>
            <li class="breadcrumbs__item">
                <router-link class="breadcrumbs__link" :to="{ name: 'basket'}">
                    Корзина
                </router-link>
            </li>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__link">
                    Оформление заказа
                </a>
            </li>
        </ul>

        <h1 class="content__title">
            Корзина
        </h1>
        <span class="content__info">
            {{ conutPrice }} товара
        </span>
    </div>

    <section class="cart">
        <form class="cart__form form" action="#" method="POST" @submit.prevent="order">
            <div class="cart__field">
                <div class="cart__data">
                        <BaseFormText title="ФИО" v-model="formData.name" :error="formError.name"  placeholder="Введите ваше полное имя" />
                        <BaseFormText title="Адрес доставки" v-model="formData.address" :error="formError.address" placeholder="Введите ваш адрес" />
                        <BaseFormText title="Телефон" v-model="formData.phone" :error="formError.phone" placeholder="Введите ваш телефон" />
                        <BaseFormText title="Email" v-model="formData.email" :error="formError.email" placeholder="Введи ваш Email" />
                        <BaseFormTextarial title="Комментарий к заказу" v-model="formData.comment" :error="formError.comments" placeholder="Ваши пожелания" />
                </div>

                <div class="cart__options">
                    <h3 class="cart__title">Доставка</h3>
                    <ul class="cart__options options">
                        <li class="options__item">
                            <label class="options__label">
                                <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked="">
                                <span class="options__value">
                                    Самовывоз <b>бесплатно</b>
                                </span>
                            </label>
                        </li>
                        <li class="options__item">
                            <label class="options__label">
                                <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                                <span class="options__value">
                                    Курьером <b>500 ₽</b>
                                </span>
                            </label>
                        </li>
                    </ul>

                    <h3 class="cart__title">Оплата</h3>
                    <ul class="cart__options options">
                        <li class="options__item">
                            <label class="options__label">
                                <input class="options__radio sr-only" type="radio" name="pay" value="card">
                                <span class="options__value">
                                    Картой при получении
                                </span>
                            </label>
                        </li>
                        <li class="options__item">
                            <label class="options__label">
                                <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                                <span class="options__value">
                                    Наличными при получении
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart__loading__cat" v-show="loadingCat">
                <img src="../../../public/img/loadingCat/346.gif" alt="loadingCat">
            </div>
            <div class="cart__block">
                <ul class="cart__orders">
                    <li class="cart__order" v-for="item in products" :key="item.productId" :item="item">
                        <h3>{{ item.product.product.title }}</h3>
                        <b>{{ (item.amount * item.product.price) | numberFormat }} ₽</b>
                        <span>Кол-во: {{ item.amount }}</span>
                        <span>Aртикул: {{ item.product.product.id }}</span>
                    </li>
                </ul>

                <div class="cart__total">
                    <p>Доставка: <b>700 ₽</b></p>
                    <p>Итого: <b>{{ conutPrice }} товара,</b> товара на сумму <b><span>{{ sumPrice | numberFormat }} ₽</span></b></p>
                    <!-- Итого: <span>{{ sumPrice | numberFormat }} ₽</span> -->
                </div>

                <button class="cart__button button button--primery" type="submit">
                    Оформить заказ
                </button>
            </div>
            <div class="cart__error form__error-block" v-if="formErrorMessage">
                <h4>Заявка не отправлена!</h4>
                <p>
                    {{ formErrorMessage }}
                </p>
            </div>
        </form>
    </section>
</main>
</template>

<script>
import { mapGetters } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
import axios from 'axios';
import { API_URL } from '@/config';
import BaseFormText from '../BaseFormText.vue';
import BaseFormTextarial from '../BaseFormTextarial.vue';

export default {
  filters: {
    numberFormat,
  },
  amount: {
    get() {
      return this.item.amount;
    },
  },
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
      loadingCat: false,
    };
  },
  components: {
    BaseFormText, BaseFormTextarial,
  },
  computed: {
    ...mapGetters(
      { products: 'cartDetailProducts', sumPrice: 'catrTotalPrice', conutPrice: 'counterPrice' },
    ),
  },
  methods: {
    order() {
      this.formError = {};
      this.formErrorMessage = '';
      this.loadingCat = true;
      setTimeout(() => {
        axios.post(`${API_URL}/api/orders`, {
          ...this.formData,
        }, {
          params: {
            userAccessKey: this.$store.state.userAccessKey,
          },
        })
          .then((response) => {
            this.$store.commit('resetCart');
            this.$store.commit('ubdeteOrderInfo', response.data);
            this.$router.push({ name: 'orderInfo', params: { id: response.data.id } });
            this.formData = {};
            this.loadingCat = false;
          })
          .catch((error) => {
            this.formError = error.response.data.error.request || {};
            this.formErrorMessage = error.response.data.error.message;
          });
      }, 2000);
    },
  },
};

</script>
