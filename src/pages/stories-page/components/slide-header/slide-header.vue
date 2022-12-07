<template>
  <div class="slide-header">
    <div class="slide-header__rate-wrapper">
      <div class="slide-header__rate" :style="{ width: '50%' }" />
    </div>

    <router-link to="/" class="slide-header__user-info">
      <img
        src="@/assets/mock/img/avatar-11.png"
        alt="React.reposit"
        class="slide-header__avatar"
      />

      <div class="slide-header__login">React.reposit</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "slide-header",
};
</script>

<style scoped lang="scss" src="./style.scss" />
