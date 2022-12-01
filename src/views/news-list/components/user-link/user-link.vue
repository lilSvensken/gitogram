<template>
  <a :href="repoUrl" target="_blank" class="user-link">
    <img :src="user.avatar_url" :alt="user.login" class="user-link__img" />
    <div class="user-link__name">
      {{ user.login }}
    </div>
  </a>
</template>

<script>
export default {
  name: "user-link",
  props: ["user", "repoUrl"],
};
</script>

<style scoped lang="scss" src="./style.scss" />
