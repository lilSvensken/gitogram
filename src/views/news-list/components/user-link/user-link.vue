<template>
  <router-link :to="`/${user.link}`" class="user-link">
    <img :src="user.img" :alt="user.name" class="user-link__img" />
    <div class="user-link__name">
      {{ user.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "user-link",
  props: ["user"],
};
</script>

<style scoped lang="scss" src="./style.scss" />
