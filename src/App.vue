<!-- eslint-disable max-len -->
<template>
  <router-view />
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {

  created() {
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }

    this.loadCart();
  },
  methods: {
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey']),
  },
};
</script>

<style>
</style>
