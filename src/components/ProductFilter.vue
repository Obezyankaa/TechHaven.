<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
            <fieldset class="form__block">
                <legend class="form__legend">Цена</legend>
                <label class="form__label form__label--price">
                    <input class="form__input" type="text" name="min-price" v-model.number="currentPriceFrom">
                    <span class="form__value">От</span>
                </label>
                <label class="form__label form__label--price">
                    <input class="form__input" type="text" name="max-price" v-model.number="currentPriceTo">
                    <span class="form__value">До</span>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Категория</legend>
                <label class="form__label form__label--select">
                    <select class="form__select" type="text" name="category" v-model="currentCategoryId">
                        <option value="0">Все категории</option>
                        <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}</option>
                    </select>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors">
                    <li class="colors__item"  v-for="categoryColor in categoriesColor" :key="categoryColor.id">
                        <label class="colors__label">
                            <input class="colors__radio sr-only" type="radio" :value="categoryColor.id" v-model.number="currentCategoryColor">
                            <span class="colors__value" :style="`background-color: ${categoryColor.value};`" >
                            </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <ul class="check-list">
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="8">
                            <span class="check-list__desc">
                                XS
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="16">
                            <span class="check-list__desc">
                                S
                                <span>(461)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="32">
                            <span class="check-list__desc">
                                M
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="64">
                            <span class="check-list__desc">
                                L
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="128">
                            <span class="check-list__desc">
                                XL
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="264">
                            <span class="check-list__desc">
                                XXL
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <button class="filter__submit button button--primery" type="submit">
                Применить
            </button>
            <button class="filter__reset button button--second" type="button" @click.prevent="reset">
                Сбросить
            </button>
        </form>
    </aside>

</template>

<script>
import categories from '@/Data/categories';
import categoriesColor from '../Data/categoriesColor';

export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentCategoryColor: 0,
    };
  },
  props: ['priceFrom', 'priceTo', 'categoryId', 'categoryColor'],
  computed: {
    categories() {
      return categories;
    },
    categoriesColor() {
      return categoriesColor;
    },
  },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
    categoryColor(value) {
      this.currentCategoryColor = value;
    },
  },
  methods: {
    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:categoryColor', this.currentCategoryColor);
    },
    reset() {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
      this.$emit('update:categoryColor', 0);
    },
  },
};
</script>

<style>
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

/* .container {
    width: 1200px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px
} */

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
.button--second:not(:disbled):hover {
    background-color: #fff;
    color: #222
}

.button-del {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    width: 20px;
    height: 20px
}

.filter {
    background-color: #272727;
    color: #fff
}

.filter__title {
    margin: 0;
    padding: 25px;
    border-bottom: 4px dashed #fff;
    font-family: "PressStart";
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase
}

.filter__form {
    padding: 35px 25px 60px
}

.filter__submit {
    width: 100%;
    margin-bottom: 15px
}

.filter__reset {
    width: 144px
}

.form__block {
    border: 0;
    padding: 0;
    margin: 0 0 35px
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
    height: 13px;
    background-image: url(../../public/img/iconfilter/iconmonstr-arrow-80.svg);
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

.check-list {
    margin: 0;
    padding: 0;
    list-style: none
}

.check-list__item:not(:last-child) {
    margin-bottom: 13px
}

.check-list__label {
    display: block;
    cursor: pointer
}

.check-list__desc {
    position: relative;
    display: block;
    padding-left: 32px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 16px;
    line-height: 1
}

.check-list__desc::after,
.check-list__desc::before {
    content: '';
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.check-list__desc::before {
    left: 0;
    width: 22px;
    height: 22px;
    background-color: #fff
}

.check-list__desc::after {
    opacity: 0;
    left: 4px;
    width: 16px;
    height: 13px;
    background-image: url(../../public/img/iconfilter/iconmonstr-check-mark-15.svg);
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.check-list__desc span {
    color: #737373
}

.check-list__label:focus .check-list__desc::after,
.check-list__label:hover .check-list__desc::after {
    opacity: .3
}

.check-list__check:checked~.check-list__desc::after {
    opacity: 1
}
</style>
