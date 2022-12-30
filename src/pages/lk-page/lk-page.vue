<template>
  <div v-if="store.user" class="lk">
    <div class="lk__page-content page-content">
      <div class="lk__user-info">
        <user-info
          :user="store.user"
          @changeContentActive="changeContentActive"
        />
      </div>

      <div class="lk__content-wrapper">
        <repositories-list v-if="isShowRepositoriesList" :user="store.user" />
        <following-list
          v-if="isShowFollowingList"
          :followersCount="store.user?.followers"
        />
      </div>
    </div>
  </div>

  <c-loader class="loader-center-page" v-if="!store.user" />
</template>

<script>
import RepositoriesList from "@/pages/lk-page/components/repositories-list/user-info.vue";
import UserInfo from "@/pages/lk-page/components/user-info/user-info.vue";
import { ContentName } from "@/pages/lk-page/components/enums";
import { useUserStore } from "@/stores/user.store";
import FollowingList from "@/pages/lk-page/components/following-list/following-list.vue";
import CLoader from "@/common/components/loader/loader.vue";

export default {
  name: "lk-page",
  components: { CLoader, FollowingList, UserInfo, RepositoriesList },
  data() {
    return {
      contentName: undefined,
    };
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  mounted() {
    this.setActiveContent();
  },
  methods: {
    setActiveContent() {
      const queryContent = this.$route.query.content;
      if (queryContent) {
        this.contentName = queryContent;
      } else {
        this.changeContentActive(ContentName.Repositories);
      }
    },
    changeContentActive(contentName) {
      this.$router.push({
        query: { content: contentName },
      });
      this.contentName = contentName;
    },
  },
  computed: {
    isShowRepositoriesList() {
      return this.contentName === ContentName.Repositories;
    },
    isShowFollowingList() {
      return this.contentName === ContentName.Following;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
