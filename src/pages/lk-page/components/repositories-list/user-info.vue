<template>
  <div>repositories-list</div>
</template>

<script>
import { useFavouritesReposStore } from "@/stores/favourites-repos.store";

export default {
  name: "repositories-list",
  setup() {
    const store = useFavouritesReposStore();
    return { store };
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
