<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
<div>
  <section>
    <div v-if="productLoading">Загрузка товаров...</div>
    <div v-else-if="!productData">Ошибка загрузки товарa...</div>
    <div class="content container" v-else>
        <div class="content__top">
            <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                    <router-link class="breadcrumbs__link" :to="{name: 'main'}">
                        Каталог
                    </router-link>
                </li>
                <li class="breadcrumbs__item">
                    <router-link class="breadcrumbs__link" :to="{name: 'main'}">
                        {{ category.title }}
                    </router-link>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link">
                        {{ product.title }}
                    </a>
                </li>
            </ul>
        </div>

        <section class="item">
            <div class="item__pics pics">
                <div class="pics__wrapper">
                    <img width="570" height="570" :src="product.image.file.url" :alt="product.image.file.name">
                </div>
                <ul class="pics__list">
                    <li class="pics__item">
                        <a href="" class="pics__link pics__link--current">
                            <img width="98" height="98" :src="product.image.file.url" :alt="product.image.file.name" >
                        </a>
                    </li>
                    <li class="pics__item">
                        <a href="" class="pics__link">
                            <img width="98" height="98" :src="product.image.file.url" :alt="product.image.file.name" >
                        </a>
                    </li>
                    <li class="pics__item">
                        <a href="" class="pics__link">
                            <img width="98" height="98" :src="product.image.file.url" :alt="product.image.file.name" >
                        </a>
                    </li>
                    <li class="pics__item">
                        <a class="pics__link" href="#">
                            <img width="98" height="98" :src="product.image.file.url" :alt="product.image.file.name" >
                        </a>
                    </li>
                </ul>
            </div>

            <div class="item__info">
                <span class="item__code">Артикул: {{ product.slug }}</span>
                <h2 class="item__title">
                    {{ product.title }}
                </h2>
                <div class="item__form">
                    <form class="form" action="#" method="POST" @submit.prevent="addToCart">
                        <b class="item__price">
                            {{ product.price | numberFormat }} ₽
                        </b>
                        <fieldset class="form__block flexColor">
                            <legend class="form__legend">Цвет:</legend>
                            <ul class="colors" v-for="(color) in colorItem" :key="color.id">
                                <li class="colors__item">
                                    <label class="colors__label">
                                        <input class="colors__radio sr-only" type="radio" name="color-item" :value="color.id">
                                        <span class="colors__value" :style="`background-color: ${color}`" >
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset class="form__block">
                            <legend class="form__legend">{{ product.sizeText }}:</legend>

                            <ul class="sizes sizes--primery">
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="32">
                                        <span class="sizes__value">
                                            S
                                        </span>
                                    </label>
                                </li>
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="64">
                                        <span class="sizes__value">
                                            M
                                        </span>
                                    </label>
                                </li>
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128">
                                        <span class="sizes__value">
                                            L
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </fieldset>°
                        <div class="item__row">
                            <ButtonStore :onLogin="onLogin" :counter-btn.sync="productAmautCounter" />
                            <button class="button button--primery" type="submit" :disabled="productAddSending">
                                В корзину
                            </button>
                        </div>
                        <div v-show="productAdded">
                            товар добавлен в корзину
                        </div>
                        <div v-show="productAddSending">
                            Добавляем товар в корзину...
                        </div>
                    </form>
                </div>
            </div>

            <div class="item__desc">
                <ul class="tabs">
                    <li class="tabs__item">
                        <a class="tabs__link" href="#">
                            Описание
                        </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link tabs__link--current" href="#">
                            Характеристики
                        </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#">
                            Гарантия
                        </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#">
                            Оплата и доставка
                        </a>
                    </li>
                </ul>

                <div class="item__content">
                    <h3>Беспроводная связь</h3>
                    <p>Wi-Fi, Bluetooth 4.0, ANT+</p>

                    <h3>Поддерживаемые спутники</h3>
                    <p>GPS, ГЛОНАСС, BEIDOU Galileo и QZSS</p>

                    <h3>Аккумулятор</h3>
                    <p>перезаряжаемый USB</p>

                    <h3>Время автономной работы</h3>
                    <p>до 15 часов</p>

                    <h3>Тип аккумулятора</h3>
                    <p>литий-ионный</p>

                    <h3>Водонепроницаемость</h3>
                    <p>IPX7</p>

                    <h3>Фирменное приложение</h3>
                    <p>ELEMNT от Wahoo Fitness</p>

                    <h3>Совместимость</h3>
                    <p>iOS 9.0 и последующие, Android 4.3 и старше</p>
                </div>
            </div>
        </section>
    </div>
  </section>
</div>

</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import axios from 'axios';
import { API_URL } from '@/config';
import { mapActions } from 'vuex';
import ButtonStore from '../ButtonStore.vue';

export default {
  data() {
    return {
      productAmautCounter: 1,
      productData: null,
      productLoading: false,
      productError: false,

      productAdded: false,
      productAddSending: false,
    };
  },
  filters: {
    numberFormat,
  },
  components: {
    ButtonStore,
  },
  computed: {
    product() {
      return this.productData;
    },
    colorItem() {
      const colorArr = this.productData.colors;
      return colorArr.map((el) => el.code);
    },
    category() {
      return this.productData.category;
    },
  },
  methods: {
    ...mapActions(['addProductToCart']),
    gotoPage,
    addToCart() {
      this.productAdded = false;
      this.productAddSending = true;
      this.addProductToCart({ productId: this.product.id, amount: this.productAmautCounter })
        .then(() => {
          this.productAdded = true;
          this.productAddSending = false;
        });
    },

    onLogin(data) {
      this.productAmautCounter = data;
      console.log('data-->', this.productAmautCounter = data.countBtb);
    },
    loadProduct() {
      this.productLoading = true;
      this.productError = false;
      axios.get(`${API_URL}/api/products/${this.$route.params.id}`)
        // eslint-disable-next-line no-return-assign
        .then((response) => this.productData = response.data)
        // eslint-disable-next-line no-return-assign
        .catch(() => this.productError = true)
        // eslint-disable-next-line no-return-assign
        .then(() => this.productLoading = false);
    },

  },
  // eslint-disable-next-line max-len
  // в данном случае мы заменили хук created на динамическую запись в методе watch: он будет реагирать при нажатии на карточку, а так же менять карточки по ссылке
  watch: {
    // eslint-disable-next-line func-names
    '$route.params.id': {
      handler() {
        this.loadProduct();
      },
      immediate: true,
    },
  },

};
</script>
