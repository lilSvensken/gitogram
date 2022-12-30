<template>
  <div class="skeleton skeleton--small">
    <div class="skeleton__strokes-wrapper">
      <div class="skeleton__item skeleton__item--width-middle" />
      <div class="skeleton__item skeleton__item--width-big" />
      <div class="skeleton__item skeleton__item--width-small" />
    </div>
  </div>
</template>

<script>
export default {
  name: "loader-skeleton",
};
</script>

<style scoped lang="scss" src="@/common/styles/skeleton.scss" />
