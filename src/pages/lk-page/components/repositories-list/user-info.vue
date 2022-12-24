<template>
  <div class="repositories-list">
    <div class="title-wrapper">
      <div class="title">Repositories</div>
      <div class="title-value">
        {{ getShortenCountNumber(store.favouritesList.length) }}
      </div>
    </div>

    <ul v-if="store.favouritesList?.length" class="repositories-list__list">
      <li
        v-for="favorite in store.favouritesList"
        :key="favorite.id"
        class="repositories-list__item-wrapper"
      >
        <repository-item :repo="favorite" />
      </li>
    </ul>
  </div>
</template>

<script>
import { useFavouritesReposStore } from "@/stores/favourites-repos.store";
import { shortenCountNumber } from "@/libs/shorten-count-number";
import RepositoryItem from "@/common/components/repository-item/repository-item.vue";

// TODO тут все таки список репозиориев пользователя
export default {
  name: "repositories-list",
  components: { RepositoryItem },
  setup() {
    const store = useFavouritesReposStore();
    return { store };
  },
  methods: {
    getShortenCountNumber(count) {
      return shortenCountNumber(count);
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
