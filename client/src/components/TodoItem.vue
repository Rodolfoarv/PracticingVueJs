<template lang="pug">
  li.todo-item
    p.todo-item_description {{ todo.description }}

    span.todo-item_deleteTodo(@click='$emit("delete", todo)')
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.715217" y1="1.01405" x2="11.2707" y2="11.5695" stroke="#A3A3A3"/>
        <line x1="0.646447" y1="11.5695" x2="11.2019" y2="1.01405" stroke="#A3A3A3"/>
      </svg>

</template>

<script lang="ts">
import { defineComponent,PropType } from '@vue/composition-api';

import { Todo } from '@/types/Todo';

export default defineComponent({
  name: 'todo-item',
  props: { todo: {type: Object as PropType<Todo>, required: true}},
  data() {
    return {};
  },
});

</script>

<style lang="scss" scoped>
@import './styles/mixins.scss';
.todo-item {
  display: flex;
  justify-content: flex-start;
  min-height: 5rem;
  align-items: center;
  text-align: center;
  border-top: 1px solid #bbbbbbf8;
  &_description {
    text-align: left;
    padding: 10px ;
    word-break: break-all;

  }
  &_deleteTodo {
    @include action-button;
    z-index: -1;
  }

  &:hover &_deleteTodo {
    z-index: 0;
  }

}
</style>
