<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
        <div class="form__counter">
            <button class="form__btn" :disabled="isDisabled" type="button" aria-label="Убрать один товар" @click.prevent="countMinus(productAmaut)">-</button>
                <input type="text" v-model.number="countBtb">
            <button class="form__btn" type="button" aria-label="Добавить один товар" @click.prevent="coutPlus()">+</button>
        </div>
</template>

<script>
export default {
  props: ['counterBtn', 'onLogin', 'amount'],
  data() {
    return {
      countBtb: 1,
    };
  },
  watch: {
    counterBtn(value) {
      this.countBtb = value;
    },
  },
  methods: {

    login() {
      this.onLogin({
        countBtb: this.countBtb,
      });
    },
    submit() {
      this.$emit('update:counterBtn', this.countBtb);
    },
    coutPlus() {
      // eslint-disable-next-line no-return-assign
      return this.onLogin({
        countBtb: this.countBtb += 1,
      });
    },
    countMinus() {
      // eslint-disable-next-line no-return-assign
      return this.onLogin({
        countBtb: this.countBtb -= 1,
      });
    },
  },
  computed: {
    isDisabled() {
      const count = this.countBtb;
      let resultDisablerd;
      if (count === 1) {
        resultDisablerd = true;
      }
      return resultDisablerd;
    },
  },
};

</script>

<style>

</style>
