<template>
  <div class="item">
    <div v-if="item.icon" class="item__img">
      <img :src="item.icon" class="item__icon" alt="logo" />
    </div>
    <div class="item__id">{{ item.place_id }}</div>
    <div>{{ item.display_name }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  &__id {
    margin-right: 10px;
  }
  &__img {
    margin-right: 10px;
  }
}
</style>
