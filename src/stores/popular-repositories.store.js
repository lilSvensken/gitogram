/** получение репозиторев на языку JS за последнюю неделю */
import { defineStore } from "pinia";
import { getRepositoriesList } from "@/api/rest/repositories";
import { MS_PER_WEEK } from "@/utils/consts";
import { getReadmeRepo } from "@/api/rest/repo";

const LANGUAGE = "javascript";

export const usePopularReposStore = defineStore("popular-repositories", {
  state: () => ({
    popularRepos: [],
    totalCount: undefined,
    loading: false,
    error: null,
    currentPage: 1,
  }),
  actions: {
    async fetchMorePopularRepos() {
      if (!this.totalCount || this.popularRepos.length < this.totalCount) {
        this.loading = true;

        const qSearch = getQSearch();
        const page = this.currentPage;
        const offset = getOffsetPage(this.currentPage);

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
    async fetchReadmeRepo(index, owner, repo) {
      if (
        !this.popularRepos[index].readme ||
        this.popularRepos[index].readme.err
      ) {
        return getReadmeRepo(owner, repo)
          .then((dataReadme) => {
            const isError = typeof dataReadme !== "string";
            if (!isError) {
              this.popularRepos[index].readme = {
                data: dataReadme,
                err: null,
              };
            } else {
              this.popularRepos[index].readme = {
                data: null,
                err: dataReadme,
              };
            }
          })
          .catch((err) => {
            this.popularRepos[index].readme = {
              data: null,
              err: err,
            };
          });
      }
    },
  },
});

function getOffsetPage(currentPage) {
  const startOffset = 11;
  const offsetDownload = 5;
  return currentPage === 1 ? startOffset : offsetDownload;
}

function getQSearch() {
  const currentDate = new Date();
  const weekAgoMs = currentDate.getTime() - MS_PER_WEEK;
  const weekAgoDate = new Date(weekAgoMs);
  const dateWeekAgo = weekAgoDate.toLocaleDateString("en-ca");
  return encodeURIComponent(`clanguage:${LANGUAGE} created:>${dateWeekAgo}`);
}
