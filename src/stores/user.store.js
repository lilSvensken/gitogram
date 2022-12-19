import { defineStore } from "pinia";
import { getUser } from "@/api/rest/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: undefined,
    loading: false,
    error: null,
  }),
  actions: {
    async getUser() {
      try {
        const data = await getUser();
        if (data) {
          this.user = data;
        } else {
          throw new Error();
        }
      } catch (error) {
        this.error = error;
      }
    },
    clearUser() {
      this.user = null;
    },
  },
});
