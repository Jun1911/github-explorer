import { ISearchResultItem } from "@/types/search-api";
import axios from "axios";
import { defineStore } from "pinia";

export const useGithubSearchStore = defineStore("searchStore", {
  state: () => {
    return {
      searchItems: [] as ISearchResultItem[],
    };
  },
  actions: {
    async querySearchData(searchQuery: string) {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(
            searchQuery
          )}`
        );
        this.searchItems = response.data.items;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
