<template>
  <div class="stories stories-list-swiper">
    <div class="swiper-container stories__page-content page-content">
      <swiper
        v-if="store.popularRepositories"
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="spaceBetween"
        :navigation="isNavigation"
        class="stories__wrapper"
        @swiper="onSwiper"
        @slideChange="checkByEndSlide"
      >
        <swiper-slide
          v-for="repo in store.popularRepositories"
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

      <div v-if="store.loading" class="stories__loading">loading...</div>
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
import { usePopularRepositoriesStore } from "@/stores/popular-repositories";
import ErrorRest from "@/common/components/error-rest/error-rest.vue";
import { routerParams } from "@/router/router-params";

export default {
  name: "stories-list",
  components: {
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
    const store = usePopularRepositoriesStore();
    return {
      store,
      modules: [Navigation, Pagination],
    };
  },
  mounted() {
    this.fetchMore();
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
      this.store.fetchMore().then(() => {
        console.log(111);
        // setTimeout, чтобы не было ошибки из-за слишком быстрого запроса на github
        clearTimeout(this.checkTimeout);
        this.checkTimeout = setTimeout(() => {
          this.checkByEndSlide();
        }, 1000);
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
      return !this.store.loading && !this.store.popularRepositories.length;
    },
    getOffsetPage() {
      const startOffset = 10;
      const offsetDownload = 5;
      return this.store.currentPage === 1 ? startOffset : offsetDownload;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
<style lang="scss" src="./swiper-nav.scss" />
