/** получение репозиторев на языку JS за последнюю неделю */
import { defineStore } from "pinia";
import { getPopularRepertories } from "@/api/rest/popular-repertories";
import { MS_PER_WEEK } from "@/utils/consts";

const LANGUAGE = "javascript";
const PAGE_COUNT = 10;

export const usePopularRepertoriesStore = defineStore("popular-repertories", {
  state: () => ({
    popularRepertories: null,
    totalCount: null,
    error: null,
  }),
  actions: {
    async getPopularRepertories() {
      const dateWeekAgo = getDateWeekAgo();
      const qSearch = encodeURIComponent(
        `clanguage:${LANGUAGE} created:>${dateWeekAgo}`
      );

      try {
        const response = await getPopularRepertories(qSearch, PAGE_COUNT);
        console.log(response);
        this.popularRepertories = response.items;
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
