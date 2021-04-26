<template lang="pug">
button.checkbox(@click='$emit("update", !checked)')
  span.checkbox_checkmark(v-if='checked')
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4815 0.740738L6.59258 14.3704L2.14814 9.92592L0.962952 11.1111L6.88888 17.037L16.963 1.62963L15.4815 0.740738Z" fill="#65c5b3"/>
    </svg>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'checkbox',
  props: { checked: { type: Boolean, required: true } },
});
</script>

<style lang="scss" scoped>
.checkbox {
  flex: 0 0 auto;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 0.8px solid #e4e3e5;
  border-radius: 50%;
  cursor: pointer;
  &_checkmark {
    position: relative;
    left: 2px;
    top: 2px;
  }
}
</style>