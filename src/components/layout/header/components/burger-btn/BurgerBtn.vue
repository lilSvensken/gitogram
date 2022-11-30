<template>
  <button @click="onChangeStatusSidebar()" class="burger">
    <span
      class="burger__content"
      :class="{ ['burger__content--close']: isOpenSidebar }"
    >
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "BurgerBtn",
  emits: ["onChangeStatusSidebar"],
  props: ["isOpenSidebar"],
  methods: {
    onChangeStatusSidebar() {
      this.$emit("onChangeStatusSidebar");
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
