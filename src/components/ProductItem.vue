<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <section >
        <div class="item" v-for="(productItem, index) in productsItem" :key="index">
        <div class="item__pics pics">
            <div class="pics__wrapper">
                <img width="570" height="570" :src="productItem.image"
                    alt="Название товара">
            </div>
            <ul class="pics__list">
                <li class="pics__item">
                    <a href="" class="pics__link pics__link--current">
                        <img width="98" height="98" :src="productItem.image2" srcset="img/phone-square-1@2x.jpg 2x"
                            alt="Название товара">
                    </a>
                </li>
                <li class="pics__item">
                    <a href="" class="pics__link">
                        <img width="98" height="98" :src="productItem.image3" srcset="img/phone-square-2@2x.jpg 2x"
                            alt="Название товара">
                    </a>
                </li>
                <li class="pics__item">
                    <a href="" class="pics__link">
                        <img width="98" height="98" :src="productItem.image4" srcset="img/phone-square-3@2x.jpg 2x"
                            alt="Название товара">
                    </a>
                </li>
                <li class="pics__item">
                    <a class="pics__link" href="#">
                        <img width="98" height="98" :src="productItem.image5" srcset="img/phone-square-4@2x.jpg 2x"
                            alt="Название товара">
                    </a>
                </li>
            </ul>
        </div>

        <div class="item__info">
            <span class="item__code">Артикул: 150030</span>
            <h2 class="item__title">
                {{ productItem.title }}
            </h2>
            <div class="item__form">
                <form class="form" action="#" method="POST">
                    <b class="item__price">
                        {{ productItem.price }} ₽
                    </b>

                    <fieldset class="form__block">
                        <legend class="form__legend">Цвет:</legend>
                        <ul class="colors">
                            <li class="colors__item">
                                <label class="colors__label">
                                    <input class="colors__radio sr-only" type="radio" name="color-item" value="blue">
                                    <span class="colors__value" style="background-color: #73B6EA;">
                                    </span>
                                </label>
                            </li>
                            <li class="colors__item">
                                <label class="colors__label">
                                    <input class="colors__radio sr-only" type="radio" name="color-item" value="yellow">
                                    <span class="colors__value" style="background-color: #FFBE15;">
                                    </span>
                                </label>
                            </li>
                            <li class="colors__item">
                                <label class="colors__label">
                                    <input class="colors__radio sr-only" type="radio" name="color-item" value="gray">
                                    <span class="colors__value" style="background-color: #939393;">
                                    </span></label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset class="form__block">
                        <legend class="form__legend">Размер:</legend>

                        <ul class="sizes sizes--primery">
                            <li class="sizes__item">
                                <label class="sizes__label">
                                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="64">
                                    <span class="sizes__value">
                                        S
                                    </span>
                                </label>
                            </li>
                            <li class="sizes__item">
                                <label class="sizes__label">
                                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128">
                                    <span class="sizes__value">
                                        M
                                    </span>
                                </label>
                            </li>
                            <li class="sizes__item">
                                <label class="sizes__label">
                                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128">
                                    <span class="sizes__value">
                                        L
                                    </span>
                                </label>
                            </li>
                            <li class="sizes__item">
                                <label class="sizes__label">
                                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128">
                                    <span class="sizes__value">
                                        XL
                                    </span>
                                </label>
                            </li>
                            <li class="sizes__item">
                                <label class="sizes__label">
                                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128">
                                    <span class="sizes__value">
                                        XXL
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </fieldset>

                    <div class="item__row">
                        <div class="form__counter">
                            <button type="button" aria-label="Убрать один товар">
                                <svg width="12" height="12" fill="currentColor">
                                    <use xlink:href="#icon-minus"></use>
                                </svg>
                            </button>

                            <input type="text" value="1" name="count">

                            <button type="button" aria-label="Добавить один товар">
                                <svg width="12" height="12" fill="currentColor">
                                    <use xlink:href="#icon-plus"></use>
                                </svg>
                            </button>
                        </div>

                        <button class="button button--primery" type="submit">
                            В корзину
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="item__desc">
            <ul class="tabs">
                <li class="tabs__item">
                    <a class="tabs__link">
                        Описание
                    </a>
                </li>
                <li class="tabs__item">
                    <a class="tabs__link tabs__link--current" href="#">
                        Характеристики
                    </a>
                </li>
                <li class="tabs__item">
                    <a class="tabs__link" href="#">
                        Гарантия
                    </a>
                </li>
                <li class="tabs__item">
                    <a class="tabs__link" href="#">
                        Оплата и доставка
                    </a>
                </li>
            </ul>

            <div class="item__content">
                <h3>{{ productItem.text }}</h3>
                <p>Wi-Fi, Bluetooth 4.0, ANT+</p>

                <h3>{{ productItem.color }}</h3>
                <p>GPS, ГЛОНАСС, BEIDOU Galileo и QZSS</p>

                <h3>Аккумулятор</h3>
                <p>перезаряжаемый USB</p>

                <h3>Время автономной работы</h3>
                <p>до 15 часов</p>

                <h3>Тип аккумулятора</h3>
                <p>литий-ионный</p>

                <h3>Водонепроницаемость</h3>
                <p>IPX7</p>

                <h3>Фирменное приложение</h3>
                <p>ELEMNT от Wahoo Fitness</p>

                <h3>Совместимость</h3>
                <p>iOS 9.0 и последующие, Android 4.3 и старше</p>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
  props: ['productsItem'],
};
</script>

<style>
.item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 55px 30px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.item__code {
    font-size: 14px;
    line-height: 1;
    color: #b9b9b9
}

.item__title {
    margin: 10px 0 22px;
    font-size: 40px;
    line-height: 50px;
    font-weight: 400
}

.item__form {
    padding: 60px 50px;
    background-color: #272727;
    color: #fff
}

.item__price {
    display: block;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 40px;
    line-height: 1
}

.item__sizes {
    color: #898989
}

.item__row {
    display: grid;
    grid-template-columns: 150px 224px;
    grid-gap: 15px
}

.item__desc {
    grid-column: 1/-1
}

.item__content {
    width: 595px;
    padding-top: 50px
}

.item__content h3 {
    margin: 25px 0 5px;
    font-size: 16px;
    line-height: 24px
}

.item__content p {
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 28px;
    color: #222
}

.item__content a {
    border-bottom: 2px dashed #222;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    font-size: 14px;
    line-height: 22px;
    color: #222
}

.item__content a:focus,
.item__content a:hover {
    border-color: transparent
}

.social {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.social__item+.social__item {
    margin-left: 30px
}

.social__link {
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    color: #9eff00
}

.social__link:focus,
.social__link:hover {
    opacity: .5
}

.pics__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px
}

.pics__link {
    border-bottom: 3px solid transparent;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.pics__link:focus,
.pics__link:hover {
    border-color: #272727
}

.pics__link--current {
    border-color: #272727
}

.button {
    margin: 0;
    border: 0;
    font: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    padding: 25px 15px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    vertical-align: middle;
    text-transform: uppercase;
    cursor: pointer
}

.button:disabled {
    opacity: .5;
    cursor: not-allowed
}

.button--primery {
    background-color: #9eff00;
    border: 1px solid #9eff00;
    font-family: "PressStart";
    color: #222;
    font-size: 13px
}

.button--primery:not(:disabled):focus,
.button--primery:not(:disabled):hover {
    background-color: transparent;
    color: #fff
}

.form__block {
    border: 0;
    padding: 0;
    margin: 0 0 35px
}

.form__legend {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 1
}

.form__label {
    position: relative;
    display: block;
    background-color: #fff;
    color: #737373
}

.form__label:not(:last-child) {
    margin-bottom: 25px
}

.form__label--price::after {
    content: '₽';
    position: absolute;
    top: 32px;
    right: 20px;
    font-size: 16px;
    line-height: 1;
    color: #222
}

.form__label--select::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 14px;
    height: 7px;
    background-image: url(../../public/img/svg/icon-arrow-bottom.svg);
    background-repeat: no-repeat;
    background-size: contain
}

.form__value {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 12px;
    line-height: 1;
    color: #737373;
    font-weight: 300
}

.form__input {
    padding: 28px 45px 13px 20px;
    width: 100%;
    height: 65px;
    border-radius: 0;
    background-color: transparent;
    border: 1px solid #cfcfcf;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    color: #222;
    font-size: 16px;
    font-family: inherit;
    line-height: 1
}

.form__input:focus,
.form__input:hover {
    outline: 0;
    border-color: #272727
}

.form__input--area {
    height: 140px;
    resize: none
}

.form__select {
    width: 100%;
    height: 52px;
    border-radius: 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 14px 35px 14px 18px;
    color: #222;
    font-size: 16px;
    font-family: inherit;
    line-height: 1
}

.form__counter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 150px;
    height: 70px;
    background-color: #fff
}

.form__counter button,
.form__counter input {
    height: 70px;
    background-color: transparent;
    border: 0;
    font: inherit
}

.form__counter button {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 40px
}

.form__counter input {
    padding: 23px 5px;
    width: 70px;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #222;
    font-size: 24px;
    line-height: 1;
    text-align: center
}

.form__error {
    position: absolute;
    bottom: -17px;
    left: 20px;
    font-size: 11px;
    line-height: 14px;
    color: #ff4d00
}

.form__error-block {
    padding: 25px 30px;
    border: 3px solid #ff4d00;
    border-radius: 1px
}

.form__error-block h4 {
    margin: 0 0 4px;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    color: #ff4d00
}

.form__error-block p {
    margin: 0;
    font-size: 13px;
    color: #000
}
</style>
