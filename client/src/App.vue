<template lang="pug">
#app
  .todo-app
    todo-list(:todosList='todosList',
              @create-todo='createTodo($event)',
              @delete-todo='deleteTodoTask($event)',
              @update-todo='updateTodoTask($event)',
              )
    .pager
        span.error(v-if='error') Cannot load pages
        pager(:pages='pages', @change='switchPage($event)')
  
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import { getAllTodos, createTodo, deleteTodo, updateTodo } from '@/services/api/todoApiBitPanda';
import { Pagination } from '@/types/Pagination';
import { Todo } from '@/types/Todo';

// Components

import TodoList from './components/TodoList.vue';
import Pager from './components/utils/Pager.vue';

export default defineComponent({
  name: 'App',
  setup() {
    // utilise todo-bitpanda-server to get data
    const todosList = ref<Todo[]>([]);
    const pages = ref<Pagination>({} as Pagination);

    const getTodos = async (offset = 0, limit = 5, description?: string) => {
      const response = await getAllTodos({ offset, limit, description });

      todosList.value = response.items;
      pages.value = response.meta;
      console.log(response);
    };


    return {
      todosList,
      getTodos,
      pages
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
    },
    async deleteTodoTask(todo: Todo){
      try{
        await deleteTodo(todo);
        this.todosList = this.todosList.filter((t) => t._id !== todo._id);
      } catch (e){
        this.onError(e);
      }
    },
    async updateTodoTask(todo: Todo){
      try {
        await updateTodo(todo);
      }catch(e){
        this.onError(e)
      }
    },
    switchPage(pagination: Pagination){
      this.getTodos(pagination.offset, pagination.limit).catch((e) => this.onError(e));
    }
  },
  components: { TodoList, Pager },
});
</script>

<style lang="scss">
$todos-width: 589px;

#app {
  min-height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 100px 25px 50px;
}

.todo-app {
  max-width: $todos-width;
  min-width: calc(min(#{$todos-width}, 100%));
  margin: 0 auto;
  text-align: center;
}

.search {
  margin-bottom: 1rem;
}

.pager {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .error {
    margin-left: 1px;
    color: red;
  }
}
</style>