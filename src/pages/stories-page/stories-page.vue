<template>
  <div class="stories stories-preview-swiper">
    <swiper
      :modules="modules"
      :slides-per-view="4.5"
      :space-between="12"
      :centered-slides="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="slideChange"
    >
      <swiper-slide
        v-for="(repo, index) in store.popularRepos"
        :key="repo.id"
        class="stories__item-wrapper"
        :class="{ ['active']: slideActive === index }"
      >
        <slide-header
          :progressPercent="progressPercent"
          :index="index"
          :owner="repo.owner"
          :slideActive="slideActive"
        />

        <div class="stories__info">
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
          stories__info<br />stories__info<br />stories__info<br />stories__info<br />
        </div>

        <div class="stories__btn-follow-wrapper">
          <button type="button" class="stories__btn-follow btn">Follow</button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import SlideHeader from "@/pages/stories-page/components/slide-header/slide-header.vue";
import {
  MAX_PROGRESS_PERCENT,
  MIN_PROGRESS_PERCENT,
  SPEED_CHANGE_SLIDE,
} from "@/pages/stories-page/consts";
import { usePopularReposStore } from "@/stores/popular-repositories";
import { routerQuery } from "@/router/router-params";

export default {
  name: "stories-page",
  components: {
    SlideHeader,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: undefined,
      slideActive: 0,
      progressPercent: 0,
      progressInterval: 0,
    };
  },
  setup() {
    const store = usePopularReposStore();
    return {
      store,
      modules: [Navigation, Pagination],
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      if (!this.store.popularRepos.length) {
        this.fetchMore(true);
      } else {
        this.slideTo();
        this.startTimerAutoFlipping();
      }
    },
    slideChange() {
      this.slideActive = this.swiper.activeIndex;
      this.startTimerAutoFlipping();
      if (this.slideActive === this.store.popularRepos.length - 2) {
        this.fetchMore();
      }
    },
    slideTo() {
      const itemId = +this.$route.params[routerQuery.id];
      const activeIndex = this.store.popularRepos.findIndex(
        (item) => item.id === itemId
      );
      this.swiper.slideTo(activeIndex);
    },
    startTimerAutoFlipping() {
      this.progressPercent = MIN_PROGRESS_PERCENT;
      clearInterval(this.progressInterval);

      this.progressInterval = setInterval(() => {
        if (!this.swiper.destroyed) {
          this.progressPercent++;
          if (this.progressPercent === MAX_PROGRESS_PERCENT) {
            this.swiper.slideNext();
          }
        } else {
          clearInterval(this.progressInterval);
        }
      }, SPEED_CHANGE_SLIDE);
    },
    fetchMore(isInitProject) {
      this.store.fetchMorePopularRepos().then(() => {
        if (isInitProject && this.store.popularRepos.length) {
          this.slideTo();
          this.startTimerAutoFlipping();
        }
        // достижение конечного элемента в списке на сервере
        if (
          this.store.totalCount &&
          this.store.popularRepos.length === this.store.totalCount
        ) {
          clearInterval(this.progressInterval);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
<style lang="scss" src="./swiper.scss" />
