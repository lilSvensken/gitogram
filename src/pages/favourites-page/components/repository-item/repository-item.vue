<template>
  <div class="repository">
    <div class="repository__news">
      <a :href="repo.svnUrl" target="_blank" class="repository__title">
        {{ repo.name }}
      </a>
      <p class="repository__text" v-html="repo.description"></p>
    </div>

    <div class="repository__controls">
      <label class="repository__control repository__control--grey">
        <input
          type="checkbox"
          class="repository__star-input"
          :checked="isStarred"
          @click="onStar"
        />
        <span class="repository__stars-wrapper">
          <icon-star class="repository__star" />
          <icon-star-filled class="repository__star repository__star--filled" />
        </span>
        Star
      </label>

      <div class="repository__control-info">
        {{ onFormatStarsCount(repo.stargazersCount) }}
      </div>

      <a
        v-if="repo.forksCount"
        :href="getLinkMembers"
        target="_blank"
        class="repository__control repository__control--grey"
      >
        <icon-branch class="repository__branch" />
        Fork
      </a>
      <div
        v-else
        class="repository__control-info repository__control-info--grey"
      >
        <icon-branch class="repository__branch" />
        Fork
      </div>

      <div class="repository__control-info">
        {{ onFormatStarsCount(repo.forksCount) }}
      </div>
    </div>
  </div>
</template>

<script>
import IconStar from "@/assets/svg/icon-star.vue";
import IconBranch from "@/assets/svg/icon-branch.vue";
import IconStarFilled from "@/assets/svg/icon-star-filled.vue";
import { shortenCountNumber } from "@/libs/shorten-count-number";
import { starred, unStarred } from "@/api/rest/favourites";

export default {
  name: "repository-item",
  components: { IconStarFilled, IconBranch, IconStar },
  props: ["repo"],
  data() {
    return {
      isStarred: false,
    };
  },
  methods: {
    onFormatStarsCount(count) {
      return shortenCountNumber(count);
    },
    onStar() {
      if (this.isStarred) {
        unStarred(this.repo.owner.login, this.repo.name).then(() => {
          this.isStarred = false;
        });
      } else {
        starred(this.repo.owner.login, this.repo.name).then(() => {
          this.isStarred = true;
        });
      }
    },
  },
  computed: {
    // TODO можно реализовать внутренюю страницу с members, а не от github
    getLinkMembers() {
      const owner = this.repo.owner.login;
      const repo = this.repo.name;
      return `https://github.com/${owner}/${repo}/network/members`;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
