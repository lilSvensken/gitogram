/** получение репозиторев на языку JS за последнюю неделю */
import { defineStore } from "pinia";
import { getRepositoriesList } from "@/api/rest/repositories";
import { MS_PER_WEEK } from "@/utils/consts";

const LANGUAGE = "javascript";

export const usePopularReposStore = defineStore("popular-repositories", {
  state: () => ({
    popularRepos: [],
    totalCount: null,
    loading: false,
    error: null,
    currentPage: 1,
  }),
  actions: {
    async fetchMorePopularRepos() {
      if (!this.totalCount || this.popularRepos.length < this.totalCount) {
        this.loading = true;

        const qSearch = this.getQSearch();
        const page = this.currentPage;
        const offset = this.getOffsetPage();

        try {
          const response = await getRepositoriesList(qSearch, page, offset);
          this.currentPage++;
          this.popularRepos.push(...response.items);
          this.totalCount = response.totalCount;
        } catch (error) {
          this.error = error;
        } finally {
          this.loading = false;
        }
      }
    },
    getOffsetPage() {
      const startOffset = 11;
      const offsetDownload = 5;
      return this.currentPage === 1 ? startOffset : offsetDownload;
    },
    getQSearch() {
      const dateWeekAgo = getDateWeekAgo();
      return encodeURIComponent(
        `clanguage:${LANGUAGE} created:>${dateWeekAgo}`
      );
    },
  },
});

const getDateWeekAgo = () => {
  const currentDate = new Date();
  const weekAgoMs = currentDate.getTime() - MS_PER_WEEK;
  const weekAgoDate = new Date(weekAgoMs);
  return weekAgoDate.toLocaleDateString("en-ca");
};
