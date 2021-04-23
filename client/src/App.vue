<template lang="pug">
#app.todo-app
  todo-list(:todos='todos')
  <ul>
    <li>{{getTodos.items}}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import { fetchTodos } from '@/services/api/todoApiBitPanda';
import { Pagination } from '@/types/Pagination';
import { Todo } from '@/types/Todo';

// Components

import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  setup() {
    // utilise todo-bitpanda-server to get data
    const todos = ref<Todo[]>([]);
    const pages = ref<Pagination>({} as Pagination);

    const getTodos = async (offset = 0, limit = 5, description?: string) => {
      const response = await fetchTodos({ offset, limit, description });

      todos.value = response.items;
      pages.value = response.meta;
      console.log(response);
    };


    return {
      todos,
      getTodos
    };
  },
  mounted() {
    this.getTodos().catch((e) => this.onError(e));
  },
  data() {
    return {
      limit: 5,
      error: false
    }
  },
  methods: {
    onError(e: Error){
      console.log(e);
    }
  },
  components: { TodoList },
});
</script>

<style lang="scss">
.todo-app {
  text-align: center;
}
</style>
