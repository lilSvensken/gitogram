<template>
  <div class="skeleton">
    <div
      class="skeleton__item skeleton__item--width-full skeleton__item--height-big"
    />
    <div class="skeleton__strokes-wrapper">
      <div class="skeleton__item skeleton__item--width-middle" />
      <div class="skeleton__item skeleton__item--width-big" />
      <div class="skeleton__item skeleton__item--width-small" />
    </div>
    <div class="skeleton__strokes-wrapper">
      <div class="skeleton__item skeleton__item--width-middle" />
      <div class="skeleton__item skeleton__item--width-big" />
      <div class="skeleton__item skeleton__item--width-small" />
    </div>
  </div>
</template>

<script>
export default {
  name: "c-skeleton",
};
</script>

<style scoped lang="scss" src="./style.scss" />
