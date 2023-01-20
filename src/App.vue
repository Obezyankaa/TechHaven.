<!-- eslint-disable max-len -->
<template>
    <component :is="currentPageComponents" :page-params="currentPageParams"  @gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"/>
</template>

<script>
import MainPageS from './components/pages/MainPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import NotFaunPage from './components/pages/NotFaunPage.vue';

const router = {
  main: 'MainPageS',
  product: 'ProductPage',
};

export default {
  components: {
    MainPageS, ProductPage, NotFaunPage,
  },
  name: 'App',
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponents() {
      return router[this.currentPage] || 'NotFaunPage';
    },
  },
};
</script>

<style>
</style>
