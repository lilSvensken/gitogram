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
import LayoutFooter from "@/components/layout/layout-footer/layout-footer.vue";
import LayoutHeader from "@/components/layout/layout-header/layout-header.vue";

export default {
  name: "CApp",
  components: { LayoutHeader, LayoutFooter },
};
</script>

<style scoped lang="scss">
.layout-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
}

.layout-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1 1 100%;
  position: relative;
}
</style>
