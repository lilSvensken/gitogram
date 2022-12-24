import { defineStore } from "pinia";
import { getFavouritesRepos } from "@/api/rest/favourites";

const OFFSET = 5;

export const useFavouritesReposStore = defineStore("favourites-repos", {
  state: () => ({
    favouritesList: [],
    isLastPage: false,
    loading: false,
    error: null,
    currentPage: 1,
  }),
  actions: {
    async getFavouritesList(isFullList) {
      if (!this.isLastPage) {
        this.loading = true;
        const page = this.currentPage;

        try {
          let response;
          if (isFullList) {
            response = await getFavouritesRepos();
          } else {
            response = await getFavouritesRepos(page, OFFSET);
          }

          if (response) {
            this.currentPage++;
            this.favouritesList.push(...response);
            if (response.length < OFFSET) {
              this.isLastPage = true;
            }
          } else {
            throw new Error();
          }
        } catch (error) {
          this.error = error;
        } finally {
          this.loading = false;
        }
      }
    },
  },
});
