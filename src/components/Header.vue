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

      <cartIndicator />
    </div>
</header>
</template>

<script>
import cartIndicator from '@/components/cartIndicator.vue';

export default {
  components: {
    cartIndicator,
  },
};
</script>

<style>
.header {
    background-color: #272727
}

.header__wrapper {
    display: grid;
    grid-template-columns: 380px 1fr 300px 40px;
    grid-column-gap: 40px;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 23px;
    padding-bottom: 23px
}

.header__info {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .02em;
    color: #fff;
    text-transform: uppercase
}

.header__logo {
    display: block;
    width: 190px;
    height: 33px;
    margin: 0 auto
}

.header__tel {
    margin-left: auto;
    font-size: 14px;
    font-weight: 500;
    color: #fff
}

</style>
