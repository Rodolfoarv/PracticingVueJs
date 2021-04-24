<template lang="pug">
#app.todo-app
  todo-list(:todosList='todosList',
            @create-todo='createTodo($event)')
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import { getAllTodos, createTodo } from '@/services/api/todoApiBitPanda';
import { Pagination } from '@/types/Pagination';
import { Todo } from '@/types/Todo';

// Components

import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  setup() {
    // utilise todo-bitpanda-server to get data
    const todosList = ref<Todo[]>([]);
    const numberOfPages = ref<Pagination>({} as Pagination);

    const getTodos = async (offset = 0, limit = 5, description?: string) => {
      const response = await getAllTodos({ offset, limit, description });

      todosList.value = response.items;
      numberOfPages.value = response.meta;
      console.log(response);
    };


    return {
      todosList,
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
    },
    async createTodo(description: string){
      try {
        const createTodoTask = await createTodo(description);

        this.todosList.push(createTodoTask);
      }catch (e) {
        this.onError(e);
      }
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
