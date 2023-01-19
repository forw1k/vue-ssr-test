<template>
  <div class="content">
    <my-search
      v-model="query"
      @input="fetchData(query)"
      type="text"
      class="search"
    />
    <div v-if="loading">loading...</div>
    <div v-else class="list">
      <my-item
        v-for="item in items"
        :key="item.place_id"
        :item="item"
        class="list__item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDataStore } from './store/store';
import MyItem from '@/components/MyItem.vue';
import MySearch from '@/components/MySearch.vue';
const { query, items, loading } = storeToRefs(useDataStore());
const { fetchData } = useDataStore();
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
input {
  border: none;
  outline: none;
}
.search {
  margin-bottom: 30px;
  width: 300px;
}
.list {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}
</style>
