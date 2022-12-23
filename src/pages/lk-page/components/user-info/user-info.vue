<template>
  <div v-if="store.user" class="user">
    <div class="user__title title">My profile</div>

    <div class="user__info-wrapper">
      <img :src="store.user.avatarUrl" alt="" class="user__info-img" />
      <div class="user__info">
        <div class="user__info-nickname">{{ store.user.login }}</div>

        <div class="user__info-follow-wrapper">
          <button class="user__info-follow-item">
            <span class="user__info-follow-num">
              {{ getShortenCountNumber(111) }}
            </span>
            <span class="user__info-follow-caption">reposts</span>
          </button>
          <button class="user__info-follow-item">
            <span class="user__info-follow-num">
              {{ getShortenCountNumber(store.user.following) }}
            </span>
            <span class="user__info-follow-caption">watchers</span>
          </button>
        </div>

        <div class="user__info-name">{{ store.user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user.store";
import { shortenCountNumber } from "@/libs/shorten-count-number";

export default {
  name: "user-info",
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    getShortenCountNumber(count) {
      return shortenCountNumber(count);
    },
    getFollowersTitle(followers) {
      return followers ? "followers" : "follower";
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
