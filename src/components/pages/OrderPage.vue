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
        <form class="cart__form form" action="#" method="POST">
            <div class="cart__field">
                <div class="cart__data">
                    <label class="form__label">
                        <BaseFormText title="ФИО" v-model="formData.name" :error="formError.name"  placeholder="Введите ваше полное имя" />
                    </label>

                    <label class="form__label">
                        <input class="form__input" type="text" v-model="formData.address" name="address" placeholder="Введите ваш адрес">
                        <span class="form__value">Адрес доставки</span>
                        <span class="form__error" v-if="formError.address">{{ formEformError.address }}</span>
                    </label>

                    <label class="form__label">
                        <input class="form__input" type="tel" v-model="formData.phoen" name="phone" placeholder="Введите ваш телефон">
                        <span class="form__value">Телефон</span>
                        <span class="form__error" v-if="formError.phone">{{ formError.phone }}</span>
                    </label>

                    <label class="form__label">
                        <input class="form__input" type="email" v-model="formData.email" name="email" placeholder="Введи ваш Email">
                        <span class="form__value">Email</span>
                        <span class="form__error" v-if="formError.email">{{ formError.email }}</span>
                    </label>

                    <BaseFormTextarial title="Комментарий к заказу" v-model="formData.comments" :error="formError.comments" placeholder="Ваши пожелания" />

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
            <div class="cart__error form__error-block">
                <h4>Заявка не отправлена!</h4>
                <p>
                    Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.
                </p>
            </div>
        </form>
    </section>
</main>
</template>

<script>
import { mapGetters } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
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
};

</script>
