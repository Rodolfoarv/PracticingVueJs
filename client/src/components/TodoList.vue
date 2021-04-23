<template lang="pug">
.todo-list

  todo-item(
    v-for='todo in todos',
    :key='todo._id',
    :todo='todo',
  ) {{ todo.description }}

</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { Todo } from '@/types/Todo';

import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'todo-list',
  props: { todos: { type: Array as PropType<Todo[]>, required: true } },
  data() {
    return {};
  },
  components: { TodoItem },
});
</script>

<style scoped lang="scss">
@import './styles/variables.scss';
.todo-list {
  border-radius: $todo-list-border-radius;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  width: 100%;
}
</style>
