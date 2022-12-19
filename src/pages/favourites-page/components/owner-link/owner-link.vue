<template>
  <a :href="owner.htmlUrl" target="_blank" class="owner-link">
    <img :src="owner.avatarUrl" :alt="owner.login" class="owner-link__img" />
    <div class="owner-link__name">
      {{ owner.login }}
    </div>
  </a>
</template>
<script>
export default {
  name: "owner-link",
  props: ["owner"],
};
</script>

<style scoped lang="scss" src="./style.scss" />
