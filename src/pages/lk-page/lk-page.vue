<template>
  <div class="lk">
    <div class="lk__content page-content">
      <user-info class="lk__user-info" />

      <component :is="tabActive"></component>
    </div>
  </div>
</template>

<script>
import RepositoriesList from "@/pages/lk-page/components/repositories-list/user-info.vue";
import UserInfo from "@/pages/lk-page/components/user-info/user-info.vue";

export default {
  name: "lk-page",
  components: { UserInfo, RepositoriesList },
  data() {
    return {
      tabActive: RepositoriesList,
    };
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
