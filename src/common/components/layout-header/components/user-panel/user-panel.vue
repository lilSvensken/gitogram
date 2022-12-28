<template>
  <div v-if="user" class="user-panel">
    <router-link to="/" class="user-panel__btn">
      <icon-home class="user-panel__btn-icon" />
    </router-link>
    <router-link :to="getLkLink" class="user-panel__btn">
      <img :src="user.avatarUrl" alt="auth" class="user-panel__img-avatar" />
    </router-link>
    <button type="button" class="user-panel__btn" @click="onExit">
      <icon-exit class="user-panel__btn-icon" />
    </button>
  </div>
</template>

<script>
import IconExit from "@/assets/svg/icon-exit.vue";
import IconHome from "@/assets/svg/icon-home.vue";
import { RouterParams } from "@/enums/router-params";

export default {
  name: "user-panel",
  props: ["user"],
  components: {
    IconExit,
    IconHome,
  },
  methods: {
    onExit() {
      localStorage.removeItem("token");
      this.$router.replace({ name: RouterParams.auth });
    },
  },
  computed: {
    getLkLink() {
      return RouterParams.lk;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
