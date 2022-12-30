<template>
  <div
    class="layout-container"
    :class="{
      ['layout-container--overflow-height']: isOverflowFullHeight,
      ['layout-container--no-header']: !isShowHeader,
    }"
  >
    <layout-header v-if="isShowHeader" :isShowStoriesList="isShowStoriesList" />
    <stories-list v-if="isShowStoriesList" />
    <div class="layout-content">
      <router-view />
    </div>
    <layout-footer v-if="isShowFooter" />
  </div>
</template>

<script>
import LayoutHeader from "@/common/components/layout-header/layout-header.vue";
import LayoutFooter from "@/common/components/layout-footer/layout-footer.vue";
import StoriesList from "@/common/components/stories-list/stories-list.vue";
import { RouterParams } from "@/enums/router-params";

export default {
  name: "CApp",
  components: { LayoutFooter, LayoutHeader, StoriesList },
  computed: {
    isShowHeader() {
      return this.$route.name !== RouterParams.auth;
    },
    isShowStoriesList() {
      return this.$route.name === RouterParams.favourites;
    },
    isShowFooter() {
      return this.$route.name !== RouterParams.stories;
    },
    isOverflowFullHeight() {
      return this.$route.name === RouterParams.stories;
    },
  },
};
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;

  &--overflow-height {
    height: 100%;
  }

  &--no-header {
    grid-template-rows: 1fr auto;
  }
}

.layout-content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
