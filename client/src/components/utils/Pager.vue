<template lang="pug">
.pager
  button.pager_nav-previous.pager_nav(
    :disabled='!pages.hasPrevPage',
    @click='switchPage(-1)'
  )
    pagerArrow(direction='previousPage')
  button.pager_nav-next.pager_nav(
    :disabled='!pages.hasNextPage',
    @click='switchPage(1)'
  )
    pagerArrow(direction='nextPage')
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { Pagination } from '@/types/Pagination';

import PagerArrow from './PagerArrow.vue';

export default defineComponent({
  name: 'pager',
  props: { pages: { type: Object as PropType<Pagination>, required: true } },
  methods: {
    switchPage(dir: number) {
      const pages = { ...this.pages };
      
      pages.offset += pages.limit * dir;
      this.$emit('change', pages);
    },
  },
  components: { PagerArrow },
});
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.pager {
  width: 68px;
  height: 34px;
  margin: 16px 0 0 auto;
  background: #ffffff;
  border-radius: $todo-list-border-radius;
  display: flex;
  align-items: center;
  overflow: hidden;
  &_nav {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    &:disabled {
      cursor: default;
    }
    &-prev {
      border-right: 1px solid #a8a8a8;
    }
    &-next{
        border: none;
        border-radius: 2px;
        background-color: white;
    }
    &-previous{
        border: none;
        border-radius: 2px;
        background-color: white;
    }
  }
}
</style>