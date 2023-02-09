<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
    <div>
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
  <LoadingVue v-if="productLoading" />
    <form v-show="!productLoading" class="cart__form form">
        <div class="cart__field" >
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

            <router-link v-if="conutPrice" tag="button" :to="{name: 'order'}" class="cart__button button button--primery" type="submit">
                Оформить заказ
            </router-link>
        </div>
    </form>
</section>
</div>
</div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapGetters } from 'vuex';
import CartItem from '../CartItem.vue';
import LoadingVue from './LoadingPage.vue';

export default {
  data() {
    return {
      productLoading: true,
    };
  },
  filters: {
    numberFormat,
  },
  components: {
    CartItem, LoadingVue,
  },
  computed: {
    ...mapGetters(
      { products: 'cartDetailProducts', sumPrice: 'catrTotalPrice', conutPrice: 'counterPrice' },
    ),
  },
  methods: {
    LoadingBasket() {
      setTimeout(() => {
        this.productLoading = false;
      }, 500);
    },
  },
  created() {
    this.LoadingBasket();
  },
};

</script>
