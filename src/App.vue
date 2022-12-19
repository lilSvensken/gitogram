<template>
  <div class="layout-container">
    <layout-header :isShowStoriesList="isShowStoriesList" />
    <stories-list v-if="isShowStoriesList" />
    <div class="layout-content">
      <router-view />
    </div>
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from "@/common/components/layout-header/layout-header.vue";
import LayoutFooter from "@/common/components/layout-footer/layout-footer.vue";
import StoriesList from "@/common/components/stories-list/stories-list.vue";
import { routerParams } from "@/enums/router-params";

export default {
  name: "CApp",
  components: { LayoutFooter, LayoutHeader, StoriesList },
  computed: {
    isShowStoriesList() {
      return this.$route.name === routerParams.favourites;
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
}

.layout-content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>
