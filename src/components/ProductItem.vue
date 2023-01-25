<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<div>
    <div id="test">
        <router-link class="catalog__pic test2" :to="{name: 'product', params:{id: product.id}}" >
            <img :src="product.image" :alt="product.title">
        </router-link>
    </div>
    <h3 class="catalog__title">
        <a href="#">
            {{ product.title }}
        </a>
    </h3>

    <span class="catalog__price">
        {{ product.price | numberFormat }} ₽
    </span>
            <ul class="colors colors--black">
                <li class="colors__item" v-for="categoryColor in colorArr" :key="categoryColor">
                    <label class="colors__label">
                        <input class="colors__radio sr-only" type="radio" :value="categoryColor">
                        <span class="colors__value" :style="`background-color: ${categoryColor}`">
                        </span>
                    </label>
                </li>
            </ul>
</div>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  props: ['product'],
  computed: {
    colorArr() {
      const colorArr = this.product.colors;
      console.log(colorArr.map((el) => el.code));
      return colorArr.map((el) => el.code);
    },
  },
};
</script>

<style>

</style>
