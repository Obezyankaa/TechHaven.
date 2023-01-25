<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <main class="content container">
            <div class="content__top content__top--catalog">
                <h1 class="content__title">
                    Каталог
                </h1>
                <span class="content__info">
                    {{ products.length }}
                </span>
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
    };
  },
  props: ['products'],
  components: {
    ProductFilterVue,
    ProductListVue,
    BasePaginationVue,
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
          .then((response) => this.productsData = response.data);
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

<style>
.container {
    width: 1200px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px
}
.content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-top: 35px;
    padding-bottom: 100px
}

.content__catalog {
    display: grid;
    grid-template-columns: 290px 1fr;
    grid-gap: 20px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.content__top {
    margin-bottom: 35px
}

.content__top--catalog {
    margin-left: 310px;
    text-align: center
}

.content__breadcrumbs {
    margin-bottom: 10px
}

.content__title {
    margin: 10px 0;
    font-family: "PressStart";
    font-size: 25px;
    line-height: 35px;
    text-transform: uppercase
}

.content__title span {
    font-family: "Roboto", "Arial", sans-serif;
    font-weight: 500;
    font-size: 18px;
    vertical-align: top;
    color: #000
}

.content__info {
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
    color: #9d9d9d
}

.content__catalog {
    display: grid;
    grid-template-columns: 290px 1fr;
    grid-gap: 20px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}
</style>
