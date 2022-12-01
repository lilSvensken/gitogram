<template>
  <header class="header">
    <div class="page-content">
      <div class="header__content">
        <a href="/" class="header__logo-link">
          <icon-logo class="header__logo" />
        </a>

        <div class="header__btns-wrapper">
          <button type="button" class="header__btn">
            <icon-home class="header__btn-icon" />
          </button>
          <button type="button" class="header__btn">
            <img
              src="@/assets/img/mock/avatar-11.png"
              alt="auth"
              class="header__img-avatar"
            />
          </button>
          <button type="button" class="header__btn">
            <icon-exit class="header__btn-icon" />
          </button>
        </div>
      </div>
    </div>

    <c-stories v-if="isShowStories" />
  </header>
</template>

<script>
import IconLogo from "@/components/icons/IconLogo.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconExit from "@/components/icons/IconExit.vue";
import CStories from "@/components/layout/header/components/stories/CStories.vue";

export default {
  name: "CHeader",
  components: { CStories, IconExit, IconHome, IconLogo },
  data() {
    return {
      // fixme тут, вероятно, юзера из API запроса получим, и заберем img
      avatarImg: "img/avatar-11.png",
    };
  },
  computed: {
    isShowStories() {
      return this.$route.name === "MainPage";
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
