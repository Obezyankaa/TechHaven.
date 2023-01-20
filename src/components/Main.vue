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
                <ProductListVue :products="productss"  @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"/>
            </div>
            <BasePaginationVue v-model="page" :count="countProducts" :perPage="productsPerPage" :products="products" />

        </main>
    </div>
</template>

<script>
import ProductFilterVue from './ProductFilter.vue';
import ProductListVue from './ProductList.vue';
import products from '../Data/products';
import BasePaginationVue from './BasePagination.vue';

export default {
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterCategoryColor: 0,
      page: 1,
      productsPerPage: 6,
    };
  },
  props: ['products'],
  components: {
    ProductFilterVue,
    ProductListVue,
    BasePaginationVue,
  },
  computed: {
    filtereProducts() {
      let filtereProducts = products;

      if (this.filterPriceFrom > 0) {
        filtereProducts = filtereProducts.filter((el) => el.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filtereProducts = filtereProducts.filter((el) => el.price < this.filterPriceTo);
      }

      if (this.filterCategoryId > 0) {
        filtereProducts = filtereProducts.filter((el) => el.categoriesId === this.filterCategoryId);
      }

      if (this.filterCategoryColor > 0) {
        // eslint-disable-next-line max-len
        filtereProducts = filtereProducts.filter((el) => el.categoriesColor === this.filterCategoryColor);
      }
      return filtereProducts;
    },
    productss() {
      const offser = (this.page - 1) * this.productsPerPage;
      return this.filtereProducts.slice(offser, offser + this.productsPerPage);
    },
    countProducts() {
      return this.filtereProducts.length;
    },
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
