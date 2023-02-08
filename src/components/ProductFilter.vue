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
                            <span class="colors__value" :style="`background-color: ${categoryColor.code}`" >
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
import axios from 'axios';
import { API_URL } from '@/config';

export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentCategoryColor: 0,
      categoriesData: null,
      categoriesDataColor: null,
    };
  },
  props: ['priceFrom', 'priceTo', 'categoryId', 'categoryColor'],
  computed: {
    categories() {
      return this.categoriesData ? this.categoriesData.items : [];
    },
    categoriesColor() {
      return this.categoriesDataColor ? this.categoriesDataColor.items : [];
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
    loadCategories() {
      axios.get(`${API_URL}/api/productCategories`)
        // eslint-disable-next-line no-return-assign
        .then((response) => this.categoriesData = response.data);
    },
    loadCategoriesColor() {
      axios.get(`${API_URL}/api/colors`)
        // eslint-disable-next-line no-return-assign
        .then((response) => this.categoriesDataColor = response.data);
    },
  },
  created() {
    this.loadCategories();
    this.loadCategoriesColor();
  },
};
</script>
