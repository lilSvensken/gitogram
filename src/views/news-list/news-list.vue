<template>
  <main class="news-list">
    <div class="page-content">
      <ul class="news-list__list">
        <li
          v-for="item in store.users"
          :key="item.id"
          class="news-list__item-wrapper"
        >
          <user-link :user="item.owner" :repoUrl="item.svn_url" />
          <news-content :user="item" />
          <!--          <c-toggle :issuesList="newsItem.issuesList" />-->
          <!--          <c-date :date="newsItem.date" />-->
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { newsListData } from "@/assets/mock/news-list-data";
import UserLink from "@/views/news-list/components/user-link/user-link.vue";
import NewsContent from "@/views/news-list/components/news-content/news-content.vue";
import CToggle from "@/views/news-list/components/c-toggle/c-toggle.vue";
import CDate from "@/views/news-list/components/c-date/c-date.vue";
import { useUsersStore } from "@/stores/users";

export default {
  name: "news-list",
  components: { CDate, CToggle, NewsContent, UserLink },
  data() {
    return {
      // fixme данные с API-запроса
      newsList: newsListData,
      togglerOpenIndex: [],
    };
  },
  setup() {
    const store = useUsersStore();
    return { store };
  },
  mounted() {
    this.store.getUsers();
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
