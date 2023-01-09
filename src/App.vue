<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <section>
      <HeaderVue />
      <main class="content container">
        <ProductList :products="products" />
        <ProductItemVue :productsItem="productsItem" />
      </main>
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

export default {
  components: {
    ProductList, HeaderVue, FooterVue, ProductItemVue,
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
.content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding-top: 35px;
  padding-bottom: 100px
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px
}
</style>
