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

        <user-panel v-if="!isPreviewBlack" :user="store.user" />

        <router-link
          v-if="isPreviewBlack"
          to="/"
          type="button"
          class="header__btn-close"
        >
          <icon-close class="header__close-icon" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogo from "@/assets/svg/icon-logo.vue";
import { RouterParams } from "@/enums/router-params";
import IconClose from "@/assets/svg/icon-close.vue";
import UserPanel from "@/common/components/layout-header/components/user-panel/user-panel.vue";
import { useUserStore } from "@/stores/user.store";

export default {
  name: "layout-header",
  props: ["isShowStoriesList"],
  components: {
    UserPanel,
    IconClose,
    IconLogo,
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  mounted() {
    this.store.getUser();
  },
  computed: {
    isPreviewBlack() {
      return this.$route.name === RouterParams.stories;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
