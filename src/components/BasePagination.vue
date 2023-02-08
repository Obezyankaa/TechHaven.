<!-- eslint-disable max-len -->
<template>
    <ul class="catalog__pagination pagination">
        <li class="pagination__item" :page="page">
            <!-- pagination__link--disabled -->
            <a href="#" class="pagination__link pagination__link--arrow" :class="{ 'pagination__link--disabled': page === 1}" aria-label="Предыдущая страница" @click.prevent="paginateBack(page)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    style="fill: rgba(0, 0, 0, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);">
                    <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
            </a>
        </li>
        <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a href="#" class="pagination__link" :class="{ 'pagination__link--current': pageNumber === page}" @click.prevent="paginate(pageNumber)">
                {{ pageNumber }}
            </a>
        </li>
        <li class="pagination__item" :pages="pages"  :page="page">
            <a href="#" class="pagination__link pagination__link--arrow" :class="{ 'pagination__link--disabled': page === pages}" aria-label="Следующая страница"  @click.prevent="paginateForward(page)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    style="fill: rgba(0, 0, 0, 1);transform: scaleY(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);">
                    <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',

  },
  props: ['products', 'page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    paginateForward(page) {
      this.$emit('paginate', page + 1);
    },
    paginateBack(page) {
      this.$emit('paginate', page - 1);
    },
  },
};
</script>

<!-- <style>
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
</style> -->
