<!-- eslint-disable max-len -->
<template>
    <div>
        <HeaderVue />
        <MainVue :products="products"  @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"/>
        <FooterVue />
    </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue';
import products from '@/Data/products';
import MainVue from '../Main.vue';
import FooterVue from '../Footer.vue';

export default {
  data() {
    return {
      products,
    };
  },
  components: {
    HeaderVue, MainVue, FooterVue,
  },
};

</script>
