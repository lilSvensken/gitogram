/** получение репозиторев на языку JS за последнюю неделю */
import { defineStore } from "pinia";
import { getRepositoriesList } from "@/api/rest/repositories";
import { MS_PER_WEEK } from "@/utils/consts";

const LANGUAGE = "javascript";
const PAGE_COUNT = 10;

export const usePopularRepositoriesStore = defineStore("popular-repositories", {
  state: () => ({
    popularRepositories: null,
    totalCount: null,
    error: null,
  }),
  actions: {
    async getPopularRepositories() {
      const dateWeekAgo = getDateWeekAgo();
      const qSearch = encodeURIComponent(
        `clanguage:${LANGUAGE} created:>${dateWeekAgo}`
      );

      try {
        const response = await getRepositoriesList(qSearch, PAGE_COUNT);
        this.popularRepositories = response.items;
        this.totalCount = response.totalCount;
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
