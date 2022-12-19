<template>
  <main class="repositories-list">
    <div class="page-content page-content--small">
      <ul v-if="store.favouritesList?.length" class="repositories-list__list">
        <li
          v-for="favorite in store.favouritesList"
          :key="favorite.id"
          class="repositories-list__item-wrapper"
        >
          <owner-link :owner="favorite.owner" />
          <repository-item :repo="favorite" />
          <issues-list v-if="favorite.openIssuesCount" :repo="favorite" />
          <c-date :date="favorite.updatedAt" />
        </li>
      </ul>

      <div v-if="isNoData">No data</div>

      <c-loader class="repositories-list__loader" v-if="store.loading" />
      <error-rest v-if="store.error" />

      <div v-if="!store.isLastPage" class="repositories-list__btn-more-wrapper">
        <button @click="fetchMore" class="btn btn--main btn--center-row">
          Показать ещё
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import CLoader from "@/common/components/loader/loader.vue";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";
import OwnerLink from "@/pages/repositories-list/components/owner-link/owner-link.vue";
import RepositoryItem from "@/pages/repositories-list/components/repository-item/repository-item.vue";
import IssuesList from "@/pages/repositories-list/components/issues-list/issues-list.vue";
import CDate from "@/pages/repositories-list/components/c-date/c-date.vue";
import { useFavouritesReposStore } from "@/stores/favourites-repos.store";

// TODO ПОЛУЧАЮ НЕ ТЕ ДАННЫЕ ПЕРЕДЕЛАТЬ
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
    return {};
  },
  setup() {
    const store = useFavouritesReposStore();
    return { store };
  },
  mounted() {
    this.fetchMore();
  },
  methods: {
    fetchMore() {
      this.store.getFavouritesList();
    },
  },
  computed: {
    isNoData() {
      return !this.loading && !this.store.favouritesList?.length;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
