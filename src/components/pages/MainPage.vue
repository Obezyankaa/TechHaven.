<!-- eslint-disable max-len -->
<template>
    <div>
        <HeaderVue />
        <MainVue :products="products" />
        <FooterVue />
    </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue';
import products from '@/Data/products';
// import { mapActions, mapMutations } from 'vuex';
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

  // created() {
  //   const userAccessKey = localStorage.getItem('userAccessKey');
  //   if (userAccessKey) {
  //     this.updateUserAccessKey(userAccessKey);
  //   }

  //   this.loadCart();
  // },
  // methods: {
  //   ...mapActions(['loadCart']),
  //   ...mapMutations(['updateUserAccessKey']),
  // },
};

</script>
