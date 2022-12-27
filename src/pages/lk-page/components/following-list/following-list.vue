<template>
  <div class="following">
    <div class="title-wrapper">
      <div class="title">Following</div>
      <div class="title-value">{{ followersCount }}</div>
    </div>

    <ul v-if="store.userFollowersList" class="following__list">
      <li
        v-for="item in store.userFollowersList"
        :key="item"
        class="following__item"
      >
        <div class="following__item-info">
          <img
            :src="item.avatarUrl"
            :alt="item.login"
            class="following__item-img"
          />

          <div class="following__item-name-wrapper">
            <div class="following__item-login">{{ item.login }}</div>
            <div class="following__item-name">{{ item.name }}</div>
          </div>
        </div>

        <button
          type="button"
          class="btn following__item-btn"
          @click="onFollowing"
        >
          following
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { shortenCountNumber } from "@/libs/shorten-count-number";
import { useUserFollowersStore } from "@/stores/user-followers.store";

export default {
  name: "following-list",
  props: ["followersCount"],
  setup() {
    const store = useUserFollowersStore();
    return { store };
  },
  mounted() {
    this.fetchMore();
  },
  methods: {
    fetchMore() {
      this.store.getUserFollowersList();
    },
    getShortenCountNumber(count) {
      return shortenCountNumber(count);
    },
    onFollowing() {
      console.log("onFollowing");
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
