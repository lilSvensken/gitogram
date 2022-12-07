<template>
  <header class="header" :class="{ ['header--black']: isPreviewBlack }">
    <div class="page-content">
      <div class="header__content">
        <router-link to="/" class="header__logo-link">
          <icon-logo class="header__logo" />
        </router-link>

        <div v-if="!isPreviewBlack" class="header__btns-wrapper">
          <button type="button" class="header__btn">
            <icon-home class="header__btn-icon" />
          </button>
          <button type="button" class="header__btn">
            <img
              src="@/assets/mock/img/avatar-11.png"
              alt="auth"
              class="header__img-avatar"
            />
          </button>
          <button type="button" class="header__btn">
            <icon-exit class="header__btn-icon" />
          </button>
        </div>

        <button
          v-if="isPreviewBlack"
          type="button"
          class="header__btn-close"
          @click="onClose"
        >
          <icon-close class="header__close-icon" />
        </button>
      </div>
    </div>

    <stories-list v-if="isShowStoriesList" />
  </header>
</template>

<script>
import IconLogo from "@/assets/svg/icon-logo.vue";
import IconHome from "@/assets/svg/icon-home.vue";
import IconExit from "@/assets/svg/icon-exit.vue";
import StoriesList from "@/common/components/layout-header/components/stories-list/stories-list.vue";
import { routerParams } from "@/router/router-params";
import IconClose from "@/assets/svg/icon-close.vue";

export default {
  name: "layout-header",
  components: { IconClose, StoriesList, IconExit, IconHome, IconLogo },
  methods: {
    onClose() {
      this.$router.go(-1);
    },
  },
  computed: {
    isShowStoriesList() {
      return this.$route.name === routerParams.repositoriesList;
    },
    isPreviewBlack() {
      return this.$route.name === routerParams.stories;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
