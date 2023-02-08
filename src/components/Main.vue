<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="main">
        <LoadingVue v-if="productLoading" />
        <main class="content container">
            <div class="content__top content__top--catalog">
                <h1 class="content__title">
                    Каталог
                </h1>
                <span class="content__info">
                    {{ products.length }}
                </span>
            </div>
          <div v-if="productErrorData">
          <h2>Ошибка соединения, плиз перезагрузите страницу ^_^</h2>
          <button @click.prevent="loadProducts">попробовать еще раз</button>
          </div>
            <div class="content__catalog">
                <ProductFilterVue :category-color.sync="filterCategoryColor" :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId"/>
                <ProductListVue :products="productss"/>
            </div>
            <BasePaginationVue v-model="page" :count="countProducts" :perPage="productsPerPage" :products="products" />
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '@/config';
import ProductFilterVue from './ProductFilter.vue';
import ProductListVue from './ProductList.vue';
import BasePaginationVue from './BasePagination.vue';
import LoadingVue from './pages/LoadingPage.vue';

export default {
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: Number(0),
      filterCategoryColor: Number(0),
      page: 1,
      productsPerPage: 6,
      productsData: null,
      productLoading: false,
      productErrorData: false,
    };
  },
  props: ['products'],
  components: {
    ProductFilterVue,
    ProductListVue,
    BasePaginationVue,
    LoadingVue,
  },
  computed: {
    productss() {
      return this.productsData ? this.productsData.items.map((product) => ({
        ...product,
        image: product.image.file.url,
      })) : [];
      // const offser = (this.page - 1) * this.productsPerPage;
      // return this.filtereProducts.slice(offser, offser + this.productsPerPage);
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    loadProducts() {
      this.productLoading = true;
      this.productErrorData = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(`${API_URL}/api/products`, {
          params: {
            page: this.page,
            limit: this.productsPerPage,
            categoryId: this.filterCategoryId,
            minPrice: this.filterPriceFrom,
            maxPrice: this.filterPriceTo,
            colorId: this.filterCategoryColor,
          },
        })
          // eslint-disable-next-line no-return-assign, no-shadow
          .then((response) => this.productsData = response.data)
          // eslint-disable-next-line no-return-assign
          .catch(() => this.productErrorData = true)
          // eslint-disable-next-line no-return-assign
          .then(() => this.productLoading = false);
      }, 0);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterCategoryColor() {
      this.loadProducts();
    },

  },
  created() {
    this.loadProducts();
  },
};
</script>
