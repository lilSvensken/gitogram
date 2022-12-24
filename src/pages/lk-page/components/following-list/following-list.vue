<template>
  <div class="following">
    <div class="title-wrapper">
      <div class="title">Following</div>
      <div class="title-value">{{ testData.length }}</div>
    </div>

    <ul class="following__list">
      <li v-for="item in testData" :key="item" class="following__item">
        <div class="following__item-info">
          <img
            :src="store.user.avatarUrl"
            :alt="store.user.login"
            class="following__item-img"
          />

          <div class="following__item-name-wrapper">
            <div class="following__item-login">{{ store.user.login }}</div>
            <div class="following__item-name">{{ store.user.name }}</div>
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
import { useUserStore } from "@/stores/user.store";

export default {
  name: "following-list",
  data() {
    return {
      testData: [1, 2, 3],
    };
  },
  // TODO !! заменить на запрос подписчиков юзера
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    // TODO запрос подписаться
    onFollowing() {
      console.log("onFollowing");
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
