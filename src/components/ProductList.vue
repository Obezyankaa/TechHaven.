<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
<div class="catalog">
<ul class="catalog__list">
    <li class="catalog__item" v-for="(product) in products" :key="product.id">
      <ProductItemVue :product="product"/>
    </li>
</ul>
<!-- <BasePaginationVue v-model="page" :count="count" :perPage="perPage" :products="products" /> -->
</div>
</template>

<script>
import ProductItemVue from './ProductItem.vue';

export default {
  props: ['products'],
  components: {
    ProductItemVue,
  },
};
</script>

<style>
#test {
    display: inline-block;
}

#test .test2 {
    /* background: #000; */
    /* У блока, оборачивающего картинку при наведении будет просвечивать черный фон */
    overflow: hidden;
    /* Ограничиваем видиую область */
}

#test .test2 img {
    opacity: 1;
    transition: opacity 124ms linear, transform 124ms linear;
    /* Плавное изменение прозрачности и увеличения */
    width: 100%;
    height: auto;
    display: block;
    /* Убираем полосу под картинкий */
}

#test:hover .test2 img {
    opacity: 0.9;
    /* Высветляем картинку, но она становится темнее, так как под ней черный фон */
    transform: scale(1.05);
    /* Увеличение картинки */
}

#test+#test .test2 {
    background: #000;
}

</style>
