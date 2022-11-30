<template>
  <button
    type="button"
    @click="onOpenModalTry"
    class="try-btn btn btn--empty btn--small"
  >
    Попробовать
  </button>
</template>

<script>
export default {
  name: "TryBtn",
  emits: ["onOpenModalTry"],
  methods: {
    onOpenModalTry() {
      this.$emit("onOpenModalTry");
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
