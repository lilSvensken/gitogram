<template>
  <main class="news-list">
    <div class="page-content">
      <ul class="news-list__list">
        <li
          v-for="(newsItem, index) in newsList"
          :key="index"
          class="news-list__item-wrapper"
        >
          <user-link :user="newsItem.user" />
          <news-content :news="newsItem" />
          <c-toggle :issuesList="newsItem.issuesList" />
          <c-date :date="newsItem.date" />
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
};
</script>

<style scoped lang="scss" src="./style.scss" />
