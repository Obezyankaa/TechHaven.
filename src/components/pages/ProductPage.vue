<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
<div>
 <HeaderVuePage />
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
 <FooterVuePage />
</div>

</template>

<script>
import HeaderVuePage from '@/components/Header.vue';
import FooterVuePage from '@/components/Footer.vue';
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
    HeaderVuePage, FooterVuePage, ButtonStore,
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
    // coutPlus() {
    //   // eslint-disable-next-line no-return-assign
    //   return this.productAmautCounter += 1;
    // },
    // countMinus() {
    //   // eslint-disable-next-line no-return-assign
    //   return this.productAmautCounter -= 1;
    // },
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

<style>
.form__btn {
    cursor: pointer;
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
    margin-bottom: 35px
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
    flex-wrap: wrap
}

.breadcrumbs__item {
    position: relative
}

.breadcrumbs__item:not(:last-child) {
    padding-right: 35px
}

.breadcrumbs__item:not(:last-child)::after {
    content: '—';
    position: absolute;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #b9b9b9
}

.breadcrumbs__link {
    font-size: 14px;
    line-height: 1;
    color: #b9b9b9;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.breadcrumbs__link[href]:focus,
.breadcrumbs__link[href]:hover {
    color: #222
}
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

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0)
}

.button {
    margin: 0;
    border: 0;
    font: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    padding: 25px 15px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    vertical-align: middle;
    text-transform: uppercase;
    cursor: pointer
}

.button:disabled {
    opacity: .5;
    cursor: not-allowed
}

.button--primery {
    background-color: #9eff00;
    border: 1px solid #9eff00;
    font-family: "PressStart";
    color: #222;
    font-size: 13px
}

.button--primery:not(:disabled):focus,
.button--primery:not(:disabled):hover {
    background-color: transparent;
    color: #fff
}

.button--second {
    background-color: transparent;
    border: 1px solid #fff;
    padding: 15px;
    color: #fff;
    font-size: 14px
}

.button--second:not(:disabled):focus,
.button--second:not(:disabled):hover {
    background-color: #fff;
    color: #222
}

.form__block {
    border: 0;
    padding: 0;
    margin: 0 0 35px
}

.flexColor {
    display: flex;
}

.form__legend {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 1
}

.form__label {
    position: relative;
    display: block;
    background-color: #fff;
    color: #737373
}

.form__label:not(:last-child) {
    margin-bottom: 25px
}

.form__label--price::after {
    content: '₽';
    position: absolute;
    top: 32px;
    right: 20px;
    font-size: 16px;
    line-height: 1;
    color: #222
}

.form__label--select::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 14px;
    height: 7px;
    /* background-image: url(../../public/img/svg/icon-arrow-bottom.svg); */
    background-repeat: no-repeat;
    background-size: contain
}

.form__value {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 12px;
    line-height: 1;
    color: #737373;
    font-weight: 300
}

.form__input {
    padding: 28px 45px 13px 20px;
    width: 100%;
    height: 65px;
    border-radius: 0;
    background-color: transparent;
    border: 1px solid #cfcfcf;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    color: #222;
    font-size: 16px;
    font-family: inherit;
    line-height: 1
}

.form__input:focus,
.form__input:hover {
    outline: 0;
    border-color: #272727
}

.form__input--area {
    height: 140px;
    resize: none
}

.form__select {
    width: 100%;
    height: 52px;
    border-radius: 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 14px 35px 14px 18px;
    color: #222;
    font-size: 16px;
    font-family: inherit;
    line-height: 1
}

.form__counter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 150px;
    height: 70px;
    background-color: #fff
}

.form__counter button,
.form__counter input {
    height: 70px;
    background-color: transparent;
    border: 0;
    font: inherit
}

.form__counter button {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 40px
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
    text-align: center
}

.form__error {
    position: absolute;
    bottom: -17px;
    left: 20px;
    font-size: 11px;
    line-height: 14px;
    color: #ff4d00
}

.form__error-block {
    padding: 25px 30px;
    border: 3px solid #ff4d00;
    border-radius: 1px
}

.form__error-block h4 {
    margin: 0 0 4px;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    color: #ff4d00
}

.form__error-block p {
    margin: 0;
    font-size: 13px;
    color: #000
}

.colors {
    margin: 0;
    padding: 0;
    list-style: none;
    --border-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.colors--black {
    --border-color: #222
}

.colors__item {
    margin-right: 10px;
}

.colors__item:not(:last-child) {
    margin-right: 4px
}

.colors__label {
    position: relative;
    cursor: pointer;
    display: block;
    border-radius: 50%;
    padding: 3px
}

.colors__value,
.colors__value::before {
    border-radius: 50%;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.colors__value {
    display: block;
    width: 20px;
    height: 20px
}

.colors__value::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 26px;
    height: 26px;
    border: 1px solid transparent
}

.colors__label:focus .colors__value::before,
.colors__label:hover .colors__value::before,
.colors__radio:checked~.colors__value::before {
    border-color: var(--border-color)
}

.colors__radio:focus~.colors__value::before {
    opacity: .7
}

.pics__wrapper {
    margin-bottom: 20px
}

.pics__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px
}

.pics__link {
    border-bottom: 3px solid transparent;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.pics__link:focus,
.pics__link:hover {
    border-color: #272727
}

.pics__link--current {
    border-color: #272727
}

.tabs {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #e7e7e7
}

.tabs__item:not(:last-child) {
    margin-right: 20px
}

.tabs__link {
    position: relative;
    display: block;
    padding: 15px 25px;
    font-size: 18px;
    color: #222
}

.tabs__link::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 20px;
    background-color: transparent;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.tabs__link:focus::after,
.tabs__link:hover::after {
    bottom: -1px;
    background-color: #272727
}

.tabs__link--current {
    font-weight: 700
}

.tabs__link--current::after {
    bottom: -1px;
    background-color: #272727
}

.sizes {
    margin: 0;
    padding: 0;
    list-style: none;
    --text-color: #B9B9B9;
    --text-current: #222;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.sizes--primery {
    --text-color: #898989;
    --text-current: #8BE000;
    --text-border: rgb(99, 255, 0);
}

.sizes__item:not(:last-child) {
    margin-right: 5px
}

.sizes__label {
    cursor: pointer;
    display: block
}

.sizes__value {
    display: block;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    min-width: 50px;
    font-size: 16px;
    line-height: 1;
    color: var(--text-color);
    text-transform: uppercase
}

.sizes__value:first-child {
    margin: 0 0 0 0;
    background: red;
}

.sizes__label:focus .sizes__value,
.sizes__label:hover .sizes__value {
    font-weight: 500;
    color: var(--text-current);
}

.sizes__radio:checked~.sizes__value {
    font-weight: 500;
    color: var(--text-current);
    border: 1px solid var(--text-border);
}

.sizes__radio:focus~.sizes__value {
    opacity: .7
}

.item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 55px 30px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.item__code {
    font-size: 14px;
    line-height: 1;
    color: #b9b9b9
}

.item__title {
    margin: 10px 0 22px;
    font-size: 40px;
    line-height: 50px;
    font-weight: 400
}

.item__form {
    padding: 60px 50px;
    background-color: #272727;
    color: #fff
}

.item__price {
    display: block;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 40px;
    line-height: 1
}

.item__sizes {
    color: #898989
}

.item__row {
    display: grid;
    grid-template-columns: 150px 224px;
    grid-gap: 15px
}

.item__desc {
    grid-column: 1/-1
}

.item__content {
    width: 595px;
    padding-top: 50px
}

.item__content h3 {
    margin: 25px 0 5px;
    font-size: 16px;
    line-height: 24px
}

.item__content p {
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 28px;
    color: #222
}

.item__content a {
    border-bottom: 2px dashed #222;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    font-size: 14px;
    line-height: 22px;
    color: #222
}

.item__content a:focus,
.item__content a:hover {
    border-color: transparent
}

/*# sourceMappingURL=style.min.css.map */
</style>
