<template>
  <div class="layout-container">
    <layout-header />
    <div class="layout-content">
      <router-view />
    </div>
    <layout-footer />
  </div>
</template>

<script>
import LayoutFooter from "@/common/components/layout-footer/layout-footer.vue";
import LayoutHeader from "@/common/components/layout-header/layout-header.vue";

export default {
  name: "CApp",
  components: { LayoutHeader, LayoutFooter },
};
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
}

.layout-content {
  width: 100%;
  overflow: hidden;
}
</style>
