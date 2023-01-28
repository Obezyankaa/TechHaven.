<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
    <div class="form__counter" :currentCategoryAmaut="currentCategoryAmaut">
        <button class="form__btn" :disabled="isDisabled" type="button" aria-label="Убрать один товар"
            @click.prevent="countMinus(currentCategoryAmaut)">-</button>
        <input type="text" v-model.number="currentCategoryAmaut">
        <button class="form__btn" type="button" aria-label="Добавить один товар"
            @click.prevent="coutPlus(currentCategoryAmaut)">+</button>
    </div>

</template>

<script>
export default {
  data() {
    return {
      currentCategoryAmaut: 1,
    //   productAmaut: 1,
    };
  },
  props: ['productCounter'],
  computed: {
    isDisabled() {
      const count = this.currentCategoryAmaut;
      let resultDisablerd;
      if (count === 1) {
        resultDisablerd = true;
      }
      return resultDisablerd;
    },
  },
  methods: {
    submit() {
      this.$emit('update:productCounter', this.currentCategoryAmaut);
    },
    coutPlus() {
      // eslint-disable-next-line no-return-assign
      return this.currentCategoryAmaut += 1;
    },
    countMinus() {
      // eslint-disable-next-line no-return-assign
      return this.currentCategoryAmaut -= 1;
    },
  },

};
</script>
