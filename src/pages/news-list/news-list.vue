<template>
  <main class="news-list">
    <div class="page-content">
      <ul class="news-list__list">
        <li
          v-for="repo in store.popularRepertories"
          :key="repo.id"
          class="news-list__item-wrapper"
        >
          <owner-link :owner="repo.owner" />
          <news-content :repo="repo" />
          <!--          <c-toggle :issuesList="newsItem.issuesList" />-->
          <!--          <c-date :date="newsItem.date" />-->
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { newsListData } from "@/assets/mock/news-list-data";
import OwnerLink from "@/pages/news-list/components/owner-link/owner-link.vue";
import NewsContent from "@/pages/news-list/components/news-content/news-content.vue";
import CToggle from "@/pages/news-list/components/c-toggle/c-toggle.vue";
import CDate from "@/pages/news-list/components/c-date/c-date.vue";
import { usePopularRepertoriesStore } from "@/stores/popular-repertories";

export default {
  name: "news-list",
  components: { CDate, CToggle, NewsContent, OwnerLink },
  data() {
    return {
      // fixme данные с API-запроса
      newsList: newsListData,
      togglerOpenIndex: [],
    };
  },
  setup() {
    const store = usePopularRepertoriesStore();
    return { store };
  },
  mounted() {
    this.store.getPopularRepertories();
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
