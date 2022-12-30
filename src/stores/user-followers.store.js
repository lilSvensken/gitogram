import { defineStore } from "pinia";
import { getUserFollowersList } from "@/api/rest/user";

const OFFSET = 10;

export const useUserFollowersStore = defineStore("user-followers", {
  state: () => ({
    userFollowersList: [],
    isLastPage: false,
    loading: false,
    error: null,
    currentPage: 1,
  }),
  actions: {
    async getUserFollowersList() {
      if (!this.isLastPage) {
        this.loading = true;
        const page = this.currentPage;

        try {
          const response = await getUserFollowersList(page, OFFSET);

          if (response) {
            this.currentPage++;
            this.userFollowersList.push(...response);
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
