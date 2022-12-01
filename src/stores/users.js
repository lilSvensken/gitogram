/** получение репозиторев на языку JS за последнюю неделю */
import { defineStore } from "pinia";
import { getUsers } from "@/api/rest/users";
import { MS_PER_WEEK } from "@/utils/consts";

const LANGUAGE = "javascript";
const PAGE_COUNT = 10;

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: null,
    totalCount: null,
    error: null,
  }),
  actions: {
    async getUsers() {
      const dateWeekAgo = getDateWeekAgo();
      const qSearch = encodeURIComponent(
        `clanguage:${LANGUAGE} created:>${dateWeekAgo}`
      );

      try {
        const response = await getUsers(qSearch, PAGE_COUNT);
        this.users = response.items;
        this.totalCount = response.total_count;
      } catch (error) {
        this.error = error;
      }
    },
  },
});

const getDateWeekAgo = () => {
  const currentDate = new Date();
  const weekAgoMs = currentDate.getTime() - MS_PER_WEEK;
  const weekAgoDate = new Date(weekAgoMs);
  return weekAgoDate.toLocaleDateString("en-ca");
};
