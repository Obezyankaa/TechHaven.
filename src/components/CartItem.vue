<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
    <li class="cart__item product">
        <div class="product__pic">
            <img :src="item.product.product.image.file.url" width="120" height="120" :alt="item.product.title">
        </div>
        <h3 class="product__title">
            {{ item.product.product.title }}
        </h3>
        <h5>
            {{ item.sizeText }}
        </h5>
        <span class="product__code">
            артикул: {{ item.product.product.id }}
        </span>
        <!-- <ButtonStore  :amount="amount" /> -->
        <div class="product__counter form__counter">
            <button type="button" aria-label="Убрать один товар" :disabled="isDisabled" @click.prevent="minusCount()">-</button>
            <input type="text" v-model.number="amount">
            <button type="button" aria-label="Добавить один товар" @click.prevent="plusCount()">+</button>
        </div>

        <b class="product__price">
            {{ (item.amount * item.product.price) | numberFormat }} ₽
        </b>

        <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteProduct(item.productId)">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                    fill-rule="nonzero" />
            </svg>
        </button>
    </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapActions } from 'vuex';

export default {
  filters: {
    numberFormat,
  },
  props: ['item'],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.dispatch('updateCartProductAmout', { productId: this.item.productId, amount: value });
      },
    },
    isDisabled() {
      const count = this.amount;
      let resultDisablerd;
      if (count === 1) {
        resultDisablerd = true;
      }
      return resultDisablerd;
    },
  },
  methods: {
    ...mapActions(['deleteProductCart']),
    deleteProduct() {
      this.deleteProductCart({ productId: this.item.productId });
    },
    plusCount() {
      // eslint-disable-next-line no-multi-assign
      const a = this.amount += 1;
      return a;
    },
    minusCount() {
      // eslint-disable-next-line no-multi-assign
      const a = this.amount -= 1;
      return a;
    },
  },
};
</script>

<style>
button {
    cursor: pointer;
}

</style>
