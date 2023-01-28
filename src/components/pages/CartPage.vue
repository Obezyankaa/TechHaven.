<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
    <div>
        <headerCarPage />
    <div class="content container">
    <div class="content__top">
        <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
                <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
                    Каталог
                </router-link>
            </li>
            <li class="breadcrumbs__item">
                <a class="breadcrumbs__link">
                    Корзина
                </a>
            </li>
        </ul>

        <h1 class="content__title">
            Корзина
        </h1>
        <span class="content__info">
            <span>
            {{ conutPrice }}
            </span>
            товара
        </span>
    </div>

<section class="cart">
    <form class="cart__form form">
        <div class="cart__field">
            <ul class="cart__list">
                <CartItem v-for="item in products" :key="item.productId" :item="item" />
            </ul>
        </div>

        <div class="cart__block">
            <p class="cart__desc">
                Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
            </p>
            <p class="cart__price">
                Итого: <span>{{ sumPrice | numberFormat }} ₽</span>
            </p>

            <button class="cart__button button button--primery" type="submit">
                Оформить заказ
            </button>
        </div>
    </form>
</section>
</div>
    <footerCarPage />

</div>
</template>

<script>
import headerCarPage from '@/components/Header.vue';
import footerCarPage from '@/components/Footer.vue';
import numberFormat from '@/helpers/numberFormat';
import { mapGetters } from 'vuex';
import CartItem from '../CartItem.vue';

export default {
  filters: {
    numberFormat,
  },
  components: {
    headerCarPage, footerCarPage, CartItem,
  },
  computed: {
    ...mapGetters(
      { products: 'cartDetailProducts', sumPrice: 'catrTotalPrice', conutPrice: 'counterPrice' },
    ),
    // products() {
    //   return this.$store.getters.cartDetailroduct;
    // },
  },
};

</script>

<style>
html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

*,
::after,
::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit
}

img {
    max-width: 100%;
    height: auto;
    -o-object-fit: contain;
    object-fit: contain
}

a {
    text-decoration: none
}

.content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-top: 35px;
    padding-bottom: 100px;
}

.container {
    width: 1200px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
}

.content__top {
    margin-bottom: 35px;
}

.breadcrumbs {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.breadcrumbs__item {
    position: relative;
}
.breadcrumbs__item:not(:last-child) {
    padding-right: 35px;
}
.breadcrumbs__link {
    font-size: 14px;
    line-height: 1;
    color: #b9b9b9;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}
.content__title {
    margin: 10px 0;
    font-family: "PressStart";
    font-size: 25px;
    line-height: 35px;
    text-transform: uppercase;
}
.content__info {
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
    color: #9d9d9d;
}
.cart__form {
    display: grid;
    grid-template-columns: 1fr 370px;
    grid-template-rows: auto 1fr;
    grid-gap: 20px 50px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.cart__field {
    grid-row: 1/3;
}
.cart__list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.cart__item:not(:last-child) {
    margin-bottom: 60px;
}
.product {
    display: grid;
    grid-template-columns: 120px 280px 140px auto 20px;
    grid-template-rows: repeat(3, -webkit-min-content);
    grid-template-rows: repeat(3, min-content);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    grid-gap: 10px 20px;
}
.product__pic {
    align-self: flex-start;
    grid-column: 1/2;
    grid-row: 1/4;
}
.product__title {
    margin: 0;
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: 16px;
    line-height: 22px;
}
.product__info {
    grid-row: 2/3;
    font-size: 14px;
    line-height: 1;
    color: #737373;
}
.product__info,
.product__title {
    margin: 0;
    grid-column: 2/3;
}
.product__info span {
    color: #222;
}
.product__code {
    grid-column: 2/3;
    grid-row: 3/4;
    font-size: 12px;
    color: #b9b9b9;
}
.product__counter {
    border: 1px solid #cfcfcf;
    width: 120px;
    height: 50px;
}
.form__counter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 150px;
    height: 70px;
    background-color: #fff;
}
.product__counter button {
    height: 50px;
    width: 30px;
}
.form__counter button {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 40px;
}
.product__counter input {
    padding: 10px 5px;
    height: 50px;
    width: 60px;
}
.form__counter input {
    padding: 23px 5px;
    width: 70px;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #222;
    font-size: 24px;
    line-height: 1;
    text-align: center;
}
.product__counter button {
    height: 50px;
    width: 30px;
}
.product__del {
    grid-column: 5/6;
    grid-row: 1/2;
}
.button-del {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    width: 20px;
    height: 20px;
}
.cart__block {
    background-color: #272727;
    padding: 35px 30px;
    color: #fff;
}
.cart__desc,
.cart__price {
    margin: 0 0 15px;
    font-size: 16px;
    line-height: 22px;
}
.cart__price {
    font-size: 30px;
    line-height: 48px;
}
.cart__price span {
    font-weight: 500;
    font-size: 34px;
    line-height: 48px;
}
.cart__button {
    margin-top: 20px;
    width: 100%;
}
.button--primery {
    background-color: #9eff00;
    border: 1px solid #9eff00;
    font-family: "PressStart";
    color: #222;
    font-size: 13px;
}
</style>
