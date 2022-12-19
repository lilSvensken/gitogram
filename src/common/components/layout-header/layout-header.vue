<template>
  <header
    class="header"
    :class="{
      ['header--black']: isPreviewBlack,
      ['header--with-stories']: isShowStoriesList,
    }"
  >
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
  </header>
</template>

<script>
import IconLogo from "@/assets/svg/icon-logo.vue";
import { routerParams } from "@/enums/router-params";
import IconClose from "@/assets/svg/icon-close.vue";
import UserPanel from "@/common/components/layout-header/components/user-panel/user-panel.vue";

export default {
  name: "layout-header",
  props: ["isShowStoriesList"],
  components: {
    UserPanel,
    IconClose,

    IconLogo,
  },
  methods: {
    onClose() {
      this.$router.go(-1);
    },
  },
  computed: {
    isPreviewBlack() {
      return this.$route.name === routerParams.stories;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
