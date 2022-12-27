import { defineStore } from "pinia";
import { getUserReposList } from "@/api/rest/user";

const OFFSET = 10;

export const useUserReposStore = defineStore("user-repos", {
  state: () => ({
    userReposList: [],
    isLastPage: false,
    loading: false,
    error: null,
    currentPage: 1,
  }),
  actions: {
    async getUserReposList(owner) {
      if (!this.isLastPage) {
        this.loading = true;
        const page = this.currentPage;

        try {
          const response = await getUserReposList(owner, page, OFFSET);

          if (response) {
            this.currentPage++;
            this.userReposList.push(...response);
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
