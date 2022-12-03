<template>
  <main class="repositories-list">
    <div class="page-content">
      <ul v-if="store.popularRepositories" class="news-list__list">
        <li
          v-for="repo in store.popularRepositories"
          :key="repo.id"
          class="news-list__item-wrapper"
        >
          <owner-link :owner="repo.owner" />
          <repository-item :repo="repo" />
          <issues-list v-if="repo.openIssuesCount" :repo="repo" />
          <c-date :date="repo.updatedAt" />
        </li>
      </ul>

      <div v-if="isNoData">No data</div>

      <c-loader v-if="loading" />
      <error-rest v-if="error" />
    </div>
  </main>
</template>

<script>
import OwnerLink from "@/pages/news-list/components/owner-link/owner-link.vue";
import RepositoryItem from "@/pages/news-list/components/repository-item/repository-item.vue";
import CDate from "@/pages/news-list/components/c-date/c-date.vue";
import { usePopularRepositoriesStore } from "@/stores/popular-repositories";
import CLoader from "@/common/components/loader/loader.vue";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";
import IssuesList from "@/pages/news-list/components/issues-list/issues-list.vue";

export default {
  name: "news-list",
  components: {
    IssuesList,
    RepositoryItem,
    ErrorRest,
    CLoader,
    CDate,
    OwnerLink,
  },
  data() {
    return {
      loading: true,
      error: false,
    };
  },
  setup() {
    const store = usePopularRepositoriesStore();
    return { store };
  },
  mounted() {
    this.store
      .getPopularRepositories()
      .then(() => {})
      .catch((err) => {
        this.error = err;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {
    isNoData() {
      return (
        this.store.popularRepositories &&
        !this.error &&
        !this.store.popularRepositories.length
      );
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
