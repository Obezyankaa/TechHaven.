<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
<div class="content__catalog">
<div class="catalog">
<ul class="catalog__list">
    <li class="catalog__item" v-for="(product, index) in products" :key="index">
        <a class="catalog__pic" href="ProductItem.vue">
            <img :src="product.image" :alt="product.title">
        </a>

        <h3 class="catalog__title">
            <a href="#">
                {{ product.title }}
            </a>
        </h3>

        <span class="catalog__price">
            {{ product.price }} ₽
        </span>

        <!-- <ul class="colors colors--black">
            <li class="colors__item">
                <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA" checked="">
                    <span class="colors__value" style="background-color: #73B6EA;">
                    </span>
                </label>
            </li>
            <li class="colors__item">
                <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
                    <span class="colors__value" style="background-color: #8BE000;">
                    </span>
                </label>
            </li>
            <li class="colors__item">
                <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
                    <span class="colors__value" style="background-color: #222;">
                    </span>
                </label>
            </li>
        </ul> -->
    </li>

</ul>
<ul class="catalog__pagination pagination">
    <li class="pagination__item">
        <a class="pagination__link pagination__link--arrow pagination__link--disabled" aria-label="Предыдущая страница">
            <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
            </svg>
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link pagination__link--current">
            1
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link" href="#">
            2
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link" href="#">
            3
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link" href="#">
            4
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link" href="#">
            ...
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link" href="#">
            10
        </a>
    </li>
    <li class="pagination__item">
        <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница">
            <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
            </svg>
        </a>
    </li>
</ul>
</div>
</div>
</template>

<script>
export default {
  props: ['products'],
};
</script>

<style>
.content__catalog {
    display: grid;
    grid-template-columns: 290px 1fr;
    grid-gap: 20px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
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

.catalog__pagination {
    display: flex;
    margin-top: auto
}
.pagination {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.pagination__item:first-child {
    margin-right: 25px
}

.pagination__item:last-child {
    margin-left: 25px
}

.pagination__link {
    display: block;
    padding: 13px 3px;
    height: 40px;
    min-width: 40px;
    font-size: 16px;
    line-height: 1;
    color: #222;
    text-align: center;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.pagination__link[href]:not(:disabled):focus,
.pagination__link[href]:not(:disabled):hover {
    opacity: .6
}

.pagination__link--current {
    font-weight: 700
}

.pagination__link--arrow {
    border: 1px solid #e2e2e2
}

.pagination__link--disabled {
    opacity: .6;
    cursor: not-allowed
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
