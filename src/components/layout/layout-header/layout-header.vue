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

    <stories-list v-if="isShowStories" />
  </header>
</template>

<script>
import IconLogo from "@/components/icons/IconLogo.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconExit from "@/components/icons/IconExit.vue";
import StoriesList from "@/components/layout/layout-header/components/stories-list/stories-list.vue";

export default {
  name: "layout-header",
  components: { StoriesList, IconExit, IconHome, IconLogo },
  data() {
    return {
      // fixme тут, вероятно, юзера из API запроса получим, и заберем img
      avatarImg: "img/avatar-11.png",
    };
  },
  computed: {
    isShowStories() {
      return this.$route.name === "news-list";
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
