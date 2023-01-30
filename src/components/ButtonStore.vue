<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
<div>
    <button class="form__btn" :disabled="isDisabled" type="button" aria-label="Убрать один товар" @click.prevent="countMinus(productAmaut)">-</button>
        <input type="text" v-model.number="productAmautCounter">
    <button class="form__btn" type="button" aria-label="Добавить один товар" @click.prevent="coutPlus(productAmaut)">+</button>
</div>
</template>

<script>

</script>

<style>

</style>
