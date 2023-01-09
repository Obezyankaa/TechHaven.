<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<template>
<header class="header">
    <div class="header__wrapper container">
        <span class="header__info">Каталог</span>

        <a class="header__logo" href="#">
            <img src="img/svg/logo-tech.svg" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
        </a>

        <a class="header__tel" href="tel:8 800 600 90 09">
            8 800 600 90 09
        </a>

        <a class="header__cart" href="cart.html" aria-label="Корзина с товарами">
            <svg width="30" height="21" fill="currentColor">
                <use xlink:href="#icon-cart"></use>
            </svg>
            <span class="header__count" aria-label="Количество товаров">3</span>
        </a>
    </div>
</header>
</template>

<script></script>

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

.header__cart {
    position: relative;
    height: 27px;
    color: #fff
}

.header__count {
    position: absolute;
    top: -5px;
    right: -3px;
    background-color: #9eff00;
    padding: 3px;
    font-family: "PressStart";
    font-size: 7px;
    line-height: 1;
    color: #222
}
</style>
