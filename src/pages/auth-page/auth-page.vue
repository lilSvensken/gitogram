<template>
  <div class="auth">
    <div class="page-content">
      <div class="auth__content">
        <div class="auth__header">
          <button @click="getUser">GetUser</button>
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
    </div>
  </div>
</template>

<script>
import IconLogo from "@/assets/svg/icon-logo.vue";
import IconGithub from "@/assets/svg/icon-github.vue";
import { routerParams } from "@/enums/router-params";

const clientId = "7122eb36b46496384643";
const clientSecret = "8ec491f725fb9dfe0160e7f14b610f781476144a";
// TODO здесь все в тестах, приберу и вынесу все токены и запросы позже
export default {
  name: "auth-page",
  components: { IconGithub, IconLogo },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      try {
        const response = await fetch(
          "https://webdev-api.loftschool.com/github",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clientId,
              code,
              clientSecret,
            }),
          }
        );

        const { token } = await response.json();

        localStorage.setItem("token", token);
        this.$router.replace({ name: routerParams.repositoriesList });

        console.log(token);
      } catch (error) {
        // todo обраотать ошибку
        console.log(error);
      }
    }
  },
  methods: {
    getCode() {
      const githubAuthApi = "https://github.com/login/oauth/authorize";
      const params = new URLSearchParams();

      params.append("client_id", clientId);
      params.append("scope", "repo:status read:user");

      window.location.href = `${githubAuthApi}?${params}`;
    },
    async getUser() {
      try {
        const response = await fetch("https://api.github.com/user", {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();

        console.log(data);
      } catch (error) {
        // todo обраотать ошибку
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
