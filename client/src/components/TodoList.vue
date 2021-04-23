<template lang="pug">
.todo-list
  <ul>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'todo-list',
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
