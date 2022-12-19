<template>
  <div class="auth">
    <div class="auth__page-content page-content">
      <div v-if="!isCode" class="auth__content">
        <div class="auth__header">
          <icon-logo class="auth__logo" />
          <div class="auth__subtitle">
            More than just one repository. This is our digital world.
          </div>
          <button type="button" @click="getCode" class="btn auth__btn">
            Authorize with github
            <icon-github class="auth__btn-icon" />
          </button>
        </div>

        <div class="auth__macbook-img-wrapper">
          <img
            src="@/assets/img/macbook.png"
            alt="macbook"
            class="auth__macbook-img"
          />
        </div>
      </div>

      <div class="auth__loader">
        <c-loader v-if="isCode"></c-loader>
      </div>
    </div>
  </div>
</template>

<script>
import IconLogo from "@/assets/svg/icon-logo.vue";
import IconGithub from "@/assets/svg/icon-github.vue";
import { routerParams } from "@/enums/router-params";
import { registration } from "@/api/rest/registration";
import { authGitHub } from "@/api/rest/auth";
import env from "/env.js";
import CLoader from "@/common/components/loader/loader.vue";

export default {
  name: "auth-page",
  components: { CLoader, IconGithub, IconLogo },
  data() {
    return {
      isCode: true,
    };
  },
  created() {
    const code = new URLSearchParams(window.location.search).get("code");
    this.isCode = !!code;
    if (code) {
      registration(env.clientId, code, env.clientSecret)
        .then((response) => {
          const { token } = response;
          localStorage.setItem("token", token);
          this.$router.replace({ name: routerParams.repositoriesList });
        })
        .catch((error) => {
          // todo обработать ошибку
          console.log(error);
        });
    }
  },
  methods: {
    getCode() {
      authGitHub(env.clientId);
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
