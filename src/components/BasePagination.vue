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
