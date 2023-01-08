<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <section >
      <ProductList :products="products" />
    </section>
</template>

<script>
import products from './Data/products';
import ProductList from './components/ProductList.vue';

export default {
  components: { ProductList },
  name: 'App',
  data() {
    return {
      products,
    };
  },

};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
