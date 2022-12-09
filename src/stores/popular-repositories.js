/** получение репозиторев на языку JS за последнюю неделю */
import { defineStore } from "pinia";
import { getRepositoriesList } from "@/api/rest/repositories";
import { MS_PER_WEEK } from "@/utils/consts";

const LANGUAGE = "javascript";

export const usePopularRepositoriesStore = defineStore("popular-repositories", {
  state: () => ({
    popularRepositories: [],
    totalCount: null,
    loading: false,
    error: null,
    currentPage: 1,
  }),
  actions: {
    fetchMore() {
      if (
        !this.totalCount ||
        this.popularRepositories.length < this.totalCount
      ) {
        this.loading = true;
        return this.getPopularRepositories(this.currentPage, this.getOffsetPage)
          .then(() => {
            this.store.currentPage++;
          })
          .catch((err) => {
            this.error = err;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    async getPopularRepositories(page, offset) {
      const dateWeekAgo = getDateWeekAgo();
      const qSearch = encodeURIComponent(
        `clanguage:${LANGUAGE} created:>${dateWeekAgo}`
      );

      try {
        const response = await getRepositoriesList(qSearch, page, offset);
        this.popularRepositories.push(...response.items);
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
