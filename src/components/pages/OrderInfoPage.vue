<!-- eslint-disable max-len -->
<template>
<main class="content container">
    <div class="content__top">
        <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__link" href="index.html">
                    Каталог
                </a>
            </li>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__link" href="cart.html">
                    Корзина
                </a>
            </li>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__link">
                    Оформление заказа
                </a>
            </li>
        </ul>

        <h1 class="content__title">
            Заказ оформлен <span>№ 23621</span>
        </h1>
    </div>

    <section class="cart">
        <div class="cart__loading" v-if="loading">
        <!-- <h2>Ваши товары загружаются . . . </h2> -->
        <form class="cart__form form" action="#" method="POST">
            <div class="cart__field">
                <p class="cart__message">
                    Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
                    Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
                </p>

                <ul class="dictionary">
                    <li class="dictionary__item">
                        <span class="dictionary__key">
                            Получатель
                        </span>
                        <span class="dictionary__value">
                            {{order.name}}
                        </span>
                    </li>
                    <li class="dictionary__item">
                        <span class="dictionary__key">
                            Адрес доставки
                        </span>
                        <span class="dictionary__value">
                            {{ order.address }}
                        </span>
                    </li>
                    <li class="dictionary__item">
                        <span class="dictionary__key">
                            Телефон
                        </span>
                        <span class="dictionary__value">
                            {{order.phone}}
                        </span>
                    </li>
                    <li class="dictionary__item">
                        <span class="dictionary__key">
                            Email
                        </span>
                        <span class="dictionary__value">
                            {{ order.email }}
                        </span>
                    </li>
                    <li class="dictionary__item">
                        <span class="dictionary__key">
                            Способ оплаты
                        </span>
                        <span class="dictionary__value">
                            картой при получении
                        </span>
                    </li>
                </ul>
            </div>

            <div class="cart__block">
                <ul class="cart__orders">
                    <li class="cart__order" v-for="item in order.basket.items" :key="item.id">
                        <h3>{{ item.product.title }}</h3>
                        <b>{{ item.quantity * item.product.price | numberFormat }} ₽</b>
                        <span>Артикул: {{ item.product.id }}</span>
                        <span>Кол-во: {{ item.quantity }}</span>
                    </li>
                </ul>

                <div class="cart__total">
                    <p>Доставка: <b>500 ₽</b></p>
                    <p>Итого: <b>{{ order.basket.items.length }}</b> товара на сумму <b>{{ order.totalPrice | numberFormat }} ₽</b></p>
                </div>
            </div>
        </form>
       </div>
    </section>
</main>

</template>

<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  filters: {
    numberFormat,
  },
  data() {
    return {
      loading: false,
    };
  },

  computed: {
    order() {
      return this.$store.state.orderInfo;
    },
  },

  methods: {
    LoadingOrder() {
      setTimeout(() => {
        console.log(this.loading);
        this.loading = true;
      }, 1500);
    },
  },

  created() {
    this.LoadingOrder();
    if (this.$store.state.orderInfo && this.$store.state.orderInfo.id === this.$route.params.id) {
      return;
    }
    this.$store.dispatch('loadOrderInfo', this.$route.params.id);
  },
};
</script>
