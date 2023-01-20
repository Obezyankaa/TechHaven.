<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<div>
    <div id="test">
        <a class="catalog__pic test2" href="#" @click.prevent="gotoPage('product', { id:product })">
            <img :src="product.image" :alt="product.title">
        </a>
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
                <li class="colors__item">
                    <label class="colors__label">
                        <input class="colors__radio sr-only" type="radio" value="#F0F0F0">
                        <span class="colors__value" style="background-color: #F0F0F0;">
                        </span>
                    </label>
                </li>
                <li class="colors__item">
                    <label class="colors__label">
                        <input class="colors__radio sr-only" type="radio" value="#8BE000">
                        <span class="colors__value" style="background-color: #8BE000;">
                        </span>
                    </label>
                </li>
                <li class="colors__item">
                    <label class="colors__label">
                        <input class="colors__radio sr-only" type="radio" value="#73B6EA">
                        <span class="colors__value" style="background-color: #73B6EA;">
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
  data() {
    return {
      color: '#F0F0F0',
    };
  },
  methods: {
    gotoPage,
  },
  props: ['product'],
};
</script>

<style>

</style>
