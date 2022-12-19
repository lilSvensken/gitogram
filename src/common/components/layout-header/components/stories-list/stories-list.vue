<template>
  <div class="stories stories-list-swiper">
    <div class="swiper-container stories__page-content page-content">
      <swiper
        v-if="store.popularRepos"
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="spaceBetween"
        :navigation="isNavigation"
        class="stories__wrapper"
        @swiper="onSwiper"
        @slideChange="checkByEndSlide"
      >
        <swiper-slide
          v-for="repo in store.popularRepos"
          :key="repo.id"
          class="stories__item-wrapper"
        >
          <router-link :to="getStoryUrl(repo.id)" class="stories__item-button">
            <span class="stories__avatar-img-wrapper">
              <img
                :src="repo.owner.avatarUrl"
                :alt="repo.owner.login"
                class="stories__avatar-img"
              />
            </span>
            <span class="stories__avatar-name">
              {{ repo.owner.login }}
            </span>
          </router-link>
        </swiper-slide>
      </swiper>

      <div v-if="isNoData">No data</div>

      <c-loader v-if="store.loading" />
      <error-rest v-if="error" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import {
  getIsNavigation,
  getSpaceBetween,
} from "@/common/components/layout-header/components/stories-list/computeds";
import { usePopularReposStore } from "@/stores/popular-repositories.store";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";
import { routerParams } from "@/enums/router-params";
import CLoader from "@/common/components/layout-header/components/stories-list/components/c-loader/c-loader.vue";

export default {
  name: "stories-list",
  components: {
    CLoader,
    ErrorRest,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: undefined,
      error: false,
      checkTimeout: undefined,
    };
  },
  setup() {
    const store = usePopularReposStore();
    return {
      store,
      modules: [Navigation, Pagination],
    };
  },
  mounted() {
    this.checkByEndSlide();
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    checkByEndSlide() {
      if (this.swiper.isEnd) {
        this.fetchMore();
      }
    },
    fetchMore() {
      this.store.fetchMorePopularRepos().then(() => {
        // setTimeout, чтобы не было ошибки из-за слишком быстрого запроса на github
        clearTimeout(this.checkTimeout);
        this.checkTimeout = setTimeout(() => {
          this.checkByEndSlide();
        }, 5000);
      });
    },
    getStoryUrl(id) {
      return `/${routerParams.stories}/${id}`;
    },
  },
  computed: {
    isNavigation() {
      return getIsNavigation();
    },
    spaceBetween() {
      return getSpaceBetween();
    },
    isNoData() {
      return !this.store.loading && !this.store.popularRepos.length;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
<style lang="scss" src="./swiper-nav.scss" />
