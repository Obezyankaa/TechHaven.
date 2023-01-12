<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <section>
      <HeaderVue />
      <MainVue :products="products" />
      <FooterVue />
    </section>
</template>

<script>
import HeaderVue from './components/Header.vue';
import products from './Data/products';
import productsItem from './Data/productsItem';
// import ProductList from './components/ProductList.vue';
// import ProductItemVue from './components/ProductItem.vue';
import FooterVue from './components/Footer.vue';
import MainVue from './components/Main.vue';

export default {
  components: {
    HeaderVue, FooterVue, MainVue,
  },
  name: 'App',
  data() {
    return {
      products,
      productsItem,
    };
  },
};
</script>

<style>
</style>
