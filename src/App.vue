<template>
  <div class="layout-container">
    <layout-header />
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/common/components/layout-header/layout-header.vue";

export default {
  name: "CApp",
  components: { LayoutHeader },
};
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
}

.layout-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
