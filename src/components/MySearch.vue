<template>
  <input
    :value="modelValue"
    @input="updateValue"
    type="text"
    class="input"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const updateValue = (e: Event): void => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<style lang="scss">
.input {
  padding: 5px;
  border: 1px solid #cecece;
  transition: 0.3s;
  &:focus {
    border: 1px solid #9e9e9e;
  }
}
</style>
