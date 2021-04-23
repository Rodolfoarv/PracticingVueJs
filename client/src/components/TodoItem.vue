<template lang="pug">
  li.todo-item
    p.todo-item_description {{ todo.description }}

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

}
</style>
