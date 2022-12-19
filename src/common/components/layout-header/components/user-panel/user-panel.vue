<template>
  <div v-if="store.user" class="user-panel">
    <router-link to="" class="user-panel__btn">
      <icon-home class="user-panel__btn-icon" />
    </router-link>
    <a :href="store.user.htmlUrl" target="_blank" class="user-panel__btn">
      <img
        :src="store.user.avatarUrl"
        alt="auth"
        class="user-panel__img-avatar"
      />
    </a>
    <button type="button" class="user-panel__btn" @click="onExit">
      <icon-exit class="user-panel__btn-icon" />
    </button>
  </div>
</template>

<script>
import IconExit from "@/assets/svg/icon-exit.vue";
import IconHome from "@/assets/svg/icon-home.vue";
import { useUserStore } from "@/stores/user.store";
import { routerParams } from "@/enums/router-params";

export default {
  name: "user-panel",
  components: {
    IconExit,
    IconHome,
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  watch: {
    "$route.name"(name) {
      if (!this.store.user) {
        if (name !== routerParams.auth) {
          this.store.getUser();
        }
      }
    },
  },
  methods: {
    onExit() {
      localStorage.removeItem("token");
      this.$router.replace({ name: routerParams.auth });
      this.store.clearUser();
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
