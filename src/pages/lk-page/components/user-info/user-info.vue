<template>
  <div v-if="store.user" class="user">
    <div class="user__title title">My profile</div>

    <div class="user__info-wrapper">
      <img
        :src="store.user.avatarUrl"
        :alt="store.user.login"
        class="user__info-img"
      />
      <div class="user__info">
        <div class="user__info-nickname">{{ store.user.login }}</div>

        <div class="user__info-follow-wrapper">
          <button
            class="user__info-follow-item"
            @click="changeContentActive(ContentName.Following)"
          >
            <span class="user__info-follow-num">
              {{ getShortenCountNumber(store.user.publicRepos) }}
            </span>
            <span class="user__info-follow-caption">reposts</span>
          </button>
          <button
            class="user__info-follow-item"
            @click="changeContentActive(ContentName.Repositories)"
          >
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
import { ContentName } from "@/pages/lk-page/components/enums";

export default {
  name: "user-info",
  emits: ["changeContentActive"],
  data() {
    return {
      ContentName: ContentName,
    };
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    getShortenCountNumber(count) {
      return shortenCountNumber(count);
    },
    changeContentActive(contentName) {
      this.$emit("changeContentActive", contentName);
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
