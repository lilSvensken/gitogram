<template>
  <nav class="nav-list">
    <template v-for="linkItem in linksArr" :key="linkItem.name">
      <router-link
        v-if="!isExternalLink(linkItem.href)"
        :to="linkItem.href"
        class="nav-list__link text text--main"
      >
        {{ linkItem.name }}
      </router-link>
      <a v-else :href="linkItem.href" class="nav-list__link text text--main">
        {{ linkItem.name }}
      </a>
    </template>
  </nav>
</template>

<script>
import { HEADER_NAV_LINKS } from "@/utils/consts";
import { CheckIsExternalLink } from "@/utils/check-is-external-link";

export default {
  name: "NavList",
  data() {
    return {
      linksArr: HEADER_NAV_LINKS,
    };
  },
  methods: {
    isExternalLink(href) {
      return CheckIsExternalLink(href);
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
