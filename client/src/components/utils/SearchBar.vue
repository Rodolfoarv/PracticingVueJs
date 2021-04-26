 <template lang="pug">
.search-bar
  span.search-bar_icon
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8289 13.0043L9.84772 9.023C10.6189 8.07043 11.0832 6.86 11.0832 5.54168C11.0832 2.48618 8.59705 0 5.54159 0C2.48612 0 0 2.48615 0 5.54165C0 8.59715 2.48615 11.0833 5.54162 11.0833C6.85992 11.0833 8.07034 10.619 9.0229 9.84783L13.0041 13.8291C13.1179 13.9428 13.2672 14 13.4165 14C13.5659 14 13.7152 13.9428 13.8289 13.8291C14.057 13.601 14.057 13.2323 13.8289 13.0043ZM5.54162 9.91665C3.12897 9.91665 1.16666 7.95432 1.16666 5.54165C1.16666 3.12897 3.12897 1.16665 5.54162 1.16665C7.95426 1.16665 9.91657 3.12897 9.91657 5.54165C9.91657 7.95432 7.95424 9.91665 5.54162 9.91665Z" fill="#676767"/>
    </svg>
  input.search-bar_input(
    type="text",
    placeholder='Search',
    @input='$emit("input", $event.target.value)'
  )
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'search-bar',
  props: { value: { type: String, required: true } },
});
</script>

<style lang="scss" scoped>
$height: auto;
.search-bar {
  width: 100%;
  background: #dbdbde;
  border-radius: 20px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &_icon {
    position: relative;
    top: 1px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  &_input {
    margin-left: 6px;
    flex: 1 0 auto;
    height: 35px;
    font-weight: 500;
    border-radius: 20px;
    outline: none;
    border: none;
    background-color: transparent;
    outline: none;
  }
}
</style>