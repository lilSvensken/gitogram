<template>
  <div class="news-content">
    <div class="news-content__news">
      <div class="news-content__title">{{ news.articleName }}</div>
      <p class="news-content__text" v-html="news.articleText"></p>
    </div>

    <div class="news-content__controls">
      <button type="button" class="news-content__btn news-content__btn--grey">
        <icon-star class="news-content__btn-icon" />
        Star
      </button>

      <button type="button" class="news-content__btn">
        {{ news.followersNum }}
      </button>

      <button type="button" class="news-content__btn news-content__btn--grey">
        <icon-branch class="news-content__btn-icon" />
        Fork
      </button>

      <button type="button" class="news-content__btn">
        {{ news.branchNum }}
      </button>
    </div>
  </div>
</template>

<script>
import IconStar from "@/components/icons/IconStar.vue";
import IconBranch from "@/components/icons/IconBranch.vue";
export default {
  name: "news-content",
  components: { IconBranch, IconStar },
  props: ["news"],
  methods: {
    onRoundUp(num) {
      return num;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
