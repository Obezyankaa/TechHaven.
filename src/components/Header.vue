<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<template>
<header class="header">
    <div class="header__wrapper container">
        <router-link class="header__info" :to="{ name: 'main' }">
            Каталог
        </router-link>
        <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
                <img src="img/svg/logo-tech.svg" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
        </router-link>
        <a class="header__tel" href="tel:8 800 600 90 09">
            8 800 600 90 09
        </a>

        <CatLoading v-if="loadingToggle" />
        <div v-show="!loadingToggle">
            <cartIndicator />
        </div>
    </div>
</header>
</template>

<script>
import cartIndicator from '@/components/cartIndicator.vue';
import CatLoading from './pages/CatLoading.vue';

export default {
  data() {
    return {
      loadingToggle: true,
    };
  },
  components: {
    cartIndicator, CatLoading,
  },
  methods: {
    LoadingBasketHeader() {
      setTimeout(() => {
        this.loadingToggle = false;
      }, 1500);
    },
  },
  created() {
    this.LoadingBasketHeader();
  },
};
</script>
