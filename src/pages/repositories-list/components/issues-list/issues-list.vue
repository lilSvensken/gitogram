<template>
  <div class="issues-list">
    <button type="button" class="issues-list__toggler" @click="onClickToggler">
      {{ isOpen ? "Hide issues" : "View issues" }}
      <icon-arrow
        class="issues-list__arrow"
        :class="{ 'issues-list__arrow--show': isOpen }"
      />
    </button>

    <div class="issues-list__issues-list" :class="{ 'mod-show': isOpen }">
      <ul>
        <li
          v-for="(issue, index) in issues"
          :key="index"
          class="issues-list__issues-item"
        >
          <a
            :href="issue.user.htmlUrl"
            target="_blank"
            class="issues-list__issues-name-link"
          >
            {{ issue.user.login }}
          </a>
          <div class="issues-list__issues-text">
            {{ issue.title }}
          </div>
        </li>
      </ul>

      <c-loader v-if="loading" />
      <error-rest v-if="error" />
      <div v-if="isNoData">No issues</div>
    </div>
  </div>
</template>

<script>
import IconArrow from "@/assets/svg/icon-arrow.vue";
import { getIssues } from "@/api/rest/owner";
import CLoader from "@/common/components/loader/loader.vue";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";

export default {
  name: "issues-list",
  components: { ErrorRest, CLoader, IconArrow },
  props: ["repo"],
  data() {
    return {
      isOpen: false,
      issues: undefined,
      loading: false,
      error: false,
    };
  },
  methods: {
    onClickToggler() {
      this.isOpen = !this.isOpen;
      if (!this.issues) {
        this.getIssues();
      }
    },
    async getIssues() {
      this.loading = true;

      const ownerLogin = this.repo.owner.login;
      const repoName = this.repo.name;
      const countIssues = 3;

      getIssues(ownerLogin, repoName)
        .then((response) => {
          this.issues = response?.slice(0, countIssues);
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    isNoData() {
      return this.issues && !this.error && !this.issues.length;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
