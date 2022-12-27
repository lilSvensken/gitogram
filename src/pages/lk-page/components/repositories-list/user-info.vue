<template>
  <div v-if="user" class="repositories-list">
    <div class="title-wrapper">
      <div class="title">Repositories</div>
      <div class="title-value">
        {{ getShortenCountNumber(user.publicRepos) }}
      </div>
    </div>

    <ul v-if="store.userReposList?.length" class="repositories-list__list">
      <li
        v-for="favorite in store.userReposList"
        :key="favorite.id"
        class="repositories-list__item-wrapper"
      >
        <repository-item :repo="favorite" />
      </li>
    </ul>
  </div>

  <div v-if="isNoData">No data</div>

  <c-loader class="loader-list" v-if="store.loading" />
  <error-rest v-if="store.error" />

  <div v-if="isShowMore" class="btn-more-wrapper">
    <button @click="fetchMore" class="btn btn--main btn--center-row">
      Показать ещё
    </button>
  </div>
</template>

<script>
import { shortenCountNumber } from "@/libs/shorten-count-number";
import RepositoryItem from "@/common/components/repository-item/repository-item.vue";
import { useUserReposStore } from "@/stores/user-repos.store";
import CLoader from "@/common/components/loader/loader.vue";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";

export default {
  name: "repositories-list",
  props: ["user"],
  components: { ErrorRest, CLoader, RepositoryItem },
  setup() {
    const store = useUserReposStore();
    return { store };
  },
  mounted() {
    if (!this.store.userReposList.length) {
      this.fetchMore();
    }
  },
  methods: {
    fetchMore() {
      this.store.getUserReposList(this.user.login);
    },
    getShortenCountNumber(count) {
      return shortenCountNumber(count);
    },
  },
  computed: {
    isNoData() {
      return !this.store.loading && !this.store.userReposList?.length;
    },
    isShowMore() {
      return !this.store.isLastPage && !this.store.loading;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
