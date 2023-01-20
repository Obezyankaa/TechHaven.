<!-- eslint-disable max-len -->
<template>
    <component :is="currentPageComponents" :page-params="currentPageParams" />
</template>

<script>
import MainPageS from './components/pages/MainPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import NotFaunPage from './components/pages/NotFaunPage.vue';
import eventBus from './eventBus';

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
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
};
</script>

<style>
</style>
