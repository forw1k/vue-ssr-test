import { defineStore } from 'pinia';
import axios from 'axios';
import { Items } from '../types/types';

export const useDataStore = defineStore({
  id: 'items',
  state: (): Items => ({
    items: [],
    query: '',
    loading: false,
  }),
  actions: {
    async fetchData(query: string): Promise<void> {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/?q=${query}&format=json`
        );
        this.items = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
