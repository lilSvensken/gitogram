<template>
  <div v-if="user" class="user">
    <div class="user__title title">My profile</div>

    <div class="user__info-wrapper">
      <img :src="user.avatarUrl" :alt="user.login" class="user__info-img" />
      <div class="user__info">
        <div class="user__info-nickname">{{ user.login }}</div>

        <div class="user__info-follow-wrapper">
          <button
            class="user__info-follow-item"
            @click="changeContentActive(ContentName.Repositories)"
          >
            <span class="user__info-follow-num">
              {{ getShortenCountNumber(user.publicRepos) }}
            </span>
            <span class="user__info-follow-caption">reposts</span>
          </button>
          <button
            class="user__info-follow-item"
            @click="changeContentActive(ContentName.Following)"
          >
            <span class="user__info-follow-num">
              {{ getShortenCountNumber(user.followers) }}
            </span>
            <span class="user__info-follow-caption">watchers</span>
          </button>
        </div>

        <div v-if="user.name" class="user__info-name">{{ user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { shortenCountNumber } from "@/libs/shorten-count-number";
import { ContentName } from "@/pages/lk-page/components/enums";

export default {
  name: "user-info",
  props: ["user"],
  emits: ["changeContentActive"],
  data() {
    return {
      ContentName: ContentName,
    };
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
