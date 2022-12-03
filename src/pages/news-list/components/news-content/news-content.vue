<template>
  <div class="news-content">
    <div class="news-content__news">
      <a :href="repo.svnUrl" target="_blank" class="news-content__title">
        {{ repo.name }}
      </a>
      <p class="news-content__text" v-html="repo.description"></p>
    </div>

    <div class="news-content__controls">
      <label class="news-content__btn news-content__btn--grey">
        <input
          type="checkbox"
          class="news-content__star-input"
          @click="onStar"
        />
        <span class="news-content__stars-wrapper">
          <icon-star class="news-content__star" />
          <icon-star-filled
            class="news-content__star news-content__star--filled"
          />
        </span>
        Star
      </label>

      <button type="button" class="news-content__btn">
        {{ onFormatStarsCount(repo.stargazersCount) }}
      </button>

      <button type="button" class="news-content__btn news-content__btn--grey">
        <icon-branch class="news-content__branch" />
        Fork
      </button>

      <button type="button" class="news-content__btn">
        {{ repo.forksCount }}
      </button>
    </div>
  </div>
</template>

<script>
import IconStar from "@/assets/svg/icon-star.vue";
import IconBranch from "@/assets/svg/icon-branch.vue";
import IconStarFilled from "@/assets/svg/icon-star-filled.vue";
import { shortenCountNumber } from "@/libs/shorten-count-number";

export default {
  name: "news-content",
  components: { IconStarFilled, IconBranch, IconStar },
  props: ["repo"],
  methods: {
    onFormatStarsCount(count) {
      return shortenCountNumber(count);
    },
    onStar() {
      // TODO реализовать добавление в избранное
      console.log("onStar");
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
