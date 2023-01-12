<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <section>
      <HeaderVue />
      <MainVue>
<ProductList :products="products" />
<ProductItemVue :products="products" :productsItem="productsItem" />
      </MainVue>
      <FooterVue />
    </section>
</template>

<script>
import HeaderVue from './components/Header.vue';
import products from './Data/products';
import productsItem from './Data/productsItem';
import ProductList from './components/ProductList.vue';
import ProductItemVue from './components/ProductItem.vue';
import FooterVue from './components/Footer.vue';
import MainVue from './components/Main.vue';

export default {
  components: {
    ProductList, HeaderVue, FooterVue, ProductItemVue, MainVue,
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
