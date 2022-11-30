<template>
  <div class="layout-container">
    <c-header />
    <div class="layout-content">
      <router-view />
    </div>
    <c-footer />
  </div>
</template>

<script>
import CFooter from "@/components/layout/footer/CFooter.vue";
import CHeader from "@/components/layout/header/CHeader.vue";
export default {
  name: "CApp",
  components: { CHeader, CFooter },
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
