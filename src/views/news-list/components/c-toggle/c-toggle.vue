<template>
  <div class="news-toggle">
    <button type="button" class="news-toggle__toggler" @click="onClickToggler">
      {{ isOpen ? "Hide issues" : "View issues" }}
      <icon-arrow
        class="news-toggle__arrow"
        :class="{ 'news-toggle__arrow--show': isOpen }"
      />
    </button>

    <ul class="news-toggle__issues-list" :class="{ 'mod-show': isOpen }">
      <li
        v-for="(issue, index) in issuesList"
        :key="index"
        class="news-toggle__issues-item"
      >
        <router-link
          :to="issue.user.link"
          class="news-toggle__issues-name-link"
        >
          {{ issue.user.name }}
        </router-link>
        <div class="news-toggle__issues-text">
          {{ issue.issues }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import IconArrow from "@/components/icons/icon-arrow.vue";
export default {
  name: "c-toggle",
  components: { IconArrow },
  props: ["issuesList"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onClickToggler() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
