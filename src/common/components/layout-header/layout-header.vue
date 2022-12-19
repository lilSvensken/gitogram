<template>
  <headeR class="header" :class="{ ['header--black']: isPreviewBlack }">
    <div class="page-content">
      <div class="header__content">
        <router-link to="/" class="header__logo-link">
          <icon-logo class="header__logo" />
        </router-link>

        <user-panel v-if="!isPreviewBlack" />

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

    <stories-list v-if="isShowRepositoriesList" />
  </headeR>
</template>

<script>
import IconLogo from "@/assets/svg/icon-logo.vue";
import StoriesList from "@/common/components/layout-header/components/stories-list/stories-list.vue";
import { routerParams } from "@/enums/router-params";
import IconClose from "@/assets/svg/icon-close.vue";
import UserPanel from "@/common/components/layout-header/components/user-panel/user-panel.vue";

export default {
  name: "layout-header",
  components: {
    UserPanel,
    IconClose,
    StoriesList,
    IconLogo,
  },
  methods: {
    onClose() {
      this.$router.go(-1);
    },
  },
  computed: {
    isShowRepositoriesList() {
      return this.$route.name === routerParams.repositoriesList;
    },
    isPreviewBlack() {
      return this.$route.name === routerParams.stories;
    },
    isAuthPage() {
      return this.$route.name === routerParams.auth;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
