<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<footer class="footer">
    <div class="footer__wrapper container">
        <ul class="footer__links">
            <li>
                <a class="footer__link" href="#">
                    Каталог
                </a>
            </li>
            <li>
                <a class="footer__link" href="tel:88006009009">
                    8 800 600 90 09
                </a>
            </li>
            <li>
                <a class="footer__link" href="mailto:hi@technozavrrr.com">
                    hi@technozavrrr.com
                </a>
            </li>
            <li>
                <a class="footer__link" href="#">
                    Распродажа
                </a>
            </li>
            <li>
                <a class="footer__link footer__link--medium" href="#">
                    Заказать звонок
                </a>
            </li>
        </ul>

        <ul class="footer__social social">
            <li class="social__item">
                <a class="social__link" href="#" aria-label="Вконтакте">
                    <svg width="20" height="11" fill="currentColor">
                        <use xlink:href="#icon-vk"></use>
                    </svg>
                </a>
            </li>
            <li class="social__item">
                <a class="social__link" href="#" aria-label="Инстаграм">
                    <svg width="17" height="17" fill="currentColor">
                        <use xlink:href="#icon-insta"></use>
                    </svg>
                </a>
            </li>
            <li class="social__item">
                <a class="social__link" href="#" aria-label="Facebook">
                    <svg width="17" height="17" fill="currentColor">
                        <use xlink:href="#icon-facebook"></use>
                    </svg>
                </a>
            </li>
            <li class="social__item">
                <a class="social__link" href="#" aria-label="Twitter">
                    <svg width="17" height="14" fill="currentColor">
                        <use xlink:href="#icon-twitter"></use>
                    </svg>
                </a>
            </li>
            <li class="social__item">
                <a class="social__link" href="#" aria-label="Telegram">
                    <svg width="19" height="17" fill="currentColor">
                        <use xlink:href="#icon-telegram"></use>
                    </svg>
                </a>
            </li>
        </ul>

        <p class="footer__desc">
            Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются в&nbsp;соответствии

с&nbsp;законодательством&nbsp;РФ,
            в&nbsp;том числе об&nbsp;авторском праве и&nbsp;смежных правах.
        </p>

        <ul class="footer__data">
            <li>
                <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
                    Политика конфиденциальности
                </a>
            </li>
            <li>
                <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
                    Публичная оферта
                </a>
            </li>
        </ul>

        <span class="footer__copyright">
            © 2020 Технозавррр
        </span>
    </div>
</footer>
</template>

<script></script>

<style>
.container {
    width: 1200px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px
}
.footer {
    background-color: #272727
}

.footer__wrapper {
    display: grid;
    grid-template-columns: 550px 423px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 60px
}

.footer__link {
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    border-bottom: 2px dashed transparent;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.footer__link:focus,
.footer__link:hover {
    border-color: #9eff00
}

.footer__link--medium {
    font-weight: 500
}

.footer__links {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px 30px
}

.footer__desc {
    margin: 30px 0 37px;
    font-size: 14px;
    line-height: 24px;
    color: #9d9d9d
}

.footer__social {
    margin-left: auto;
    -ms-flex-item-align: start;
    align-self: flex-start
}

.footer__copyright {
    grid-row: 3/4;
    align-self: flex-end;
    font-family: "PressStart";
    font-size: 12px;
    color: #fff;
    text-transform: uppercase
}

.footer__data {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    grid-column: 2/3;
    grid-row: 3/4
}
</style>
