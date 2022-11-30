<template>
  <div class="auth-btn">
    <button
      type="button"
      class="auth-btn__link text text--main"
      @click="onAuth"
    >
      <icon-account class="auth-btn__link-icon" />
      <span class="auth-btn__account-btn-text">Войти</span>
    </button>
  </div>
</template>

<script>
import IconAccount from "@/components/icons/header/IconAccount.vue";

export default {
  name: "AuthBtn",
  emits: ["onOpenModalAuth"],
  components: {
    IconAccount,
  },
  methods: {
    onAuth() {
      this.$emit("onOpenModalAuth");
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
