<template>
  <main class="repositories-list">
    <div class="page-content page-content--small">
      <ul
        v-if="store.popularRepositories.length"
        class="repositories-list__list"
      >
        <li
          v-for="repo in store.popularRepositories"
          :key="repo.id"
          class="repositories-list__item-wrapper"
        >
          <owner-link :owner="repo.owner" />
          <repository-item :repo="repo" />
          <issues-list v-if="repo.openIssuesCount" :repo="repo" />
          <c-date :date="repo.updatedAt" />
        </li>
      </ul>
      <div class="repositories-list__btn-more-wrapper">
        <button @click="fetchMore" class="btn btn--main btn--center-row">
          Показать ещё
        </button>
      </div>

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

// TODO сделать ленивую подгрузку вместо кнопки
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
      currentPage: 1,
      offsetPage: 10,
    };
  },
  setup() {
    const store = usePopularRepositoriesStore();
    return { store };
  },
  mounted() {
    this.fetchMore();
  },
  methods: {
    fetchMore() {
      if (
        !this.store.totalCount ||
        this.store.popularRepositories.length < this.store.totalCount
      ) {
        this.loading = true;
        this.store
          .getPopularRepositories(this.currentPage, this.offsetPage)
          .then(() => {
            this.currentPage++;
          })
          .catch((err) => {
            this.error = err;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
  computed: {
    isNoData() {
      return !this.loading && !this.store.popularRepositories.length;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
