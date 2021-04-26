<template lang="pug">
div.create-todo
  input.create-todo_text(
    type="text",
    placeholder="Take a note",
    v-model="todoDescription",
    @keyup.enter="createTodoTask"
  )
  span.create-todo_icon(@click="createTodoTask")
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="7.57715" y1="15.3625" x2="7.57715" y2="0.434816" stroke="#A3A3A3"/>
      <line x1="0.0771484" y1="7.93481" x2="14.9432" y2="7.93481" stroke="#A3A3A3"/>
    </svg>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'create-todo',
  data() {
    return {
      todoDescription: '',
    };
  },
  methods: {
    createTodoTask() {
      if (this.todoDescription) {
        this.$emit('create', this.todoDescription);
        this.todoDescription = ''; // Reset the value at the box
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.create-todo {
  height: auto;
  box-sizing: border-box;
  display: flex;
  align-items: baseline;
  &_icon {
    display: flex;
    margin: 0 10px 0 auto;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
  }
  &_text {
    margin: 22px auto 16px 30px;
    flex: 1 0 auto;
    height: 20px;
    font-style: normal;
    font-weight: normal;
    outline: none;
    border: none
  }
}
</style>
