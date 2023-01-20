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

.catalog__list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 270px);
    grid-gap: 65px 30px;
    margin: 0 0 70px
}

.catalog__pic {
    display: block;
    width: 270px;
    height: 350px;
    margin-bottom: 20px
}

.catalog__pic img {
    width: 270px;
    height: 350px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 4px;
}

.catalog__title {
    margin: 0 0 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #222
}

.catalog__title a {
    color: #222;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    text-decoration: none;
}

.catalog__title a:focus,
.catalog__title a:hover {
    opacity: .6
}

.catalog__price {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
}

.catalog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-item-align: stretch;
    align-self: stretch
}
</style>
