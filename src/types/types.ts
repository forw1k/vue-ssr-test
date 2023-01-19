export type Items = {
  items: Item[];
  loading: boolean;
  query: string;
};

export type Item = { display_name: string; place_id: string; icon?: string };
