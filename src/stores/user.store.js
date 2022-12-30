import { defineStore } from "pinia";
import { getUser } from "@/api/rest/user";
import { Errors } from "@/enums/errors";

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
        const isError = data.response?.status > Errors.unauthorized;

        if (data && !isError) {
          this.user = data;
        } else {
          throw new Error();
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
});
