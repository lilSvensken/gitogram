<template>
  <div class="slide-header">
    <div class="slide-header__rate-wrapper">
      <div
        class="slide-header__rate"
        :style="{ width: `${getProgressPercent}%` }"
      />
    </div>

    <router-link to="/" class="slide-header__user-info">
      <img
        src="@/assets/mock/img/avatar-11.png"
        alt="React.reposit"
        class="slide-header__avatar"
      />

      <div class="slide-header__login">React.reposit</div>
    </router-link>
  </div>
</template>

<script>
import {
  MAX_PROGRESS_PERCENT,
  MIN_PROGRESS_PERCENT,
} from "@/pages/stories-page/consts";

export default {
  name: "slide-header",
  props: ["progressPercent", "index", "slideActive"],
  computed: {
    getProgressPercent() {
      if (this.index === this.slideActive) {
        return this.progressPercent;
      } else if (this.index < this.slideActive) {
        return MAX_PROGRESS_PERCENT;
      } else {
        return MIN_PROGRESS_PERCENT;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
