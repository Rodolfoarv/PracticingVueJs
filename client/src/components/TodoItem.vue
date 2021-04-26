<template lang="pug">
  li.todo-item(:class='markAsDone')
    checkbox.todo-item_checkbox(
      :checked='todo.done',
      @update='updateTodo(todo)'
    )
 
    p.todo-item_description {{ todo.description }}
    span.todo-item_created-at - {{ createdTime }} minutes

    span.todo-item_deleteTodo(@click='$emit("delete", todo)')
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.715217" y1="1.01405" x2="11.2707" y2="11.5695" stroke="#A7A6A5"/>
        <line x1="0.646447" y1="11.5695" x2="11.2019" y2="1.01405" stroke="#A7A6A5"/>
      </svg>

</template>

<script lang="ts">
import { defineComponent,PropType } from '@vue/composition-api';
import moment from 'moment';

import { Todo } from '@/types/Todo';

import Checkbox  from './utils/Checkbox.vue';

export default defineComponent({
  name: 'todo-item',
  props: { todo: {type: Object as PropType<Todo>, required: true}},
  computed: {
    markAsDone(): Record<string, boolean> {
      return {
        'todo-item-markCompleted': this.todo.done,
      };
    },
    createdTime(): number {
      const startTime = moment(Date.now());
      const createdAt = moment(this.todo.createdAt);
      const timeElapsed = startTime.diff(createdAt, 'minute');

      return timeElapsed;


    },
  },
  data() {
    return {};
  },
  components: {
    Checkbox,
  },
  methods: {
    updateTodo(todo: Todo){
      todo.done = !todo.done;
      this.$emit('update-todo', todo);
    }
  },
},
);

</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  justify-content: flex-start;
  min-height: 5rem;
  align-items: center;
  text-align: center;
  border-top: 0.9px solid #bbbbbbf8;
  &_description {
    text-align: left;
    padding: 10px ;
    word-break: break-all;

  }
  &_deleteTodo {
    margin: 0 10px 0 auto;
    padding: 5px 10px;
    cursor: pointer;
    z-index: -1;
  }

  &:hover &_deleteTodo {
    z-index: 0;
  }

  &_checkbox {
    margin: 5px 0.5rem 5px 10px;
  }

  &-markCompleted &_description {
    text-decoration-line: line-through;
    color: #ccc7c7;
  }

  &_created-at {
    font-weight: 300;
    font-size: 0.75rem;
    color: #a6a3a2;
    white-space: nowrap;
    display: flex;


  }


}
</style>
