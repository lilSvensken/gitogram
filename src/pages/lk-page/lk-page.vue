<template>
  <div class="lk">
    <div class="lk__page-content page-content">
      <user-info
        class="lk__user-info"
        @changeContentActive="changeContentActive"
      />

      <div class="lk__content-wrapper">
        <component :is="contentActive"></component>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoriesList from "@/pages/lk-page/components/repositories-list/user-info.vue";
import FollowingList from "@/pages/lk-page/components/following-list/following-list.vue";
import UserInfo from "@/pages/lk-page/components/user-info/user-info.vue";
import { ContentName } from "@/pages/lk-page/components/enums";

export default {
  name: "lk-page",
  components: { UserInfo, RepositoriesList },
  data() {
    return {
      contentActive: RepositoriesList,
    };
  },
  methods: {
    changeContentActive(contentName) {
      this.$router.push({
        query: { content: contentName },
      });
      switch (contentName) {
        case ContentName.Following:
          this.contentActive = FollowingList;
          return;

        case ContentName.Repositories:
          this.contentActive = RepositoriesList;
          return;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
