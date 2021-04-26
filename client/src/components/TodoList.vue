<template lang="pug">
.todo-list
  div
    create-todo(
      @create='$emit("create-todo", $event)'
    )
    todo-item(
      v-for='todo in todosList',
      :key='todo._id',
      :todo='todo',
      @delete='$emit("delete-todo", $event)'
      @update-todo='$emit("update-todo", $event)',
    ) {{ todo.description }}

</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { Todo } from '@/types/Todo';

import CreateTodo from './CreateTodo.vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'todos-list',
  props: { todosList: { type: Array as PropType<Todo[]>, required: true } },
  data() {
    return {};
  },
  components: { TodoItem, CreateTodo },
});
</script>

<style scoped lang="scss">
.todo-list {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  width: 100%;
}

.create-todo { 
    border-radius: 22px;
}

</style>
