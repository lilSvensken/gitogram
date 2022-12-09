<template>
  <div class="stories stories-preview-swiper">
    <swiper
      :modules="modules"
      :slides-per-view="4.5"
      :space-between="12"
      :centered-slides="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="setActiveSlide"
    >
      <swiper-slide
        v-for="(story, index) in storiesList"
        :key="story"
        class="stories__item-wrapper"
        :class="{ ['active']: slideActive === index }"
      >
        <slide-header
          :progressPercent="progressPercent"
          :index="index"
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
      storiesList: [1, 2, 3],
      progressPercent: 0,
      progressInterval: 0,
    };
  },
  setup() {
    return { modules: [Navigation, Pagination] };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      this.startTimerAutoFlipping();
    },
    setActiveSlide() {
      this.slideActive = this.swiper.activeIndex;
      this.startTimerAutoFlipping();
    },
    startTimerAutoFlipping() {
      this.progressPercent = MIN_PROGRESS_PERCENT;
      clearInterval(this.progressInterval);

      this.progressInterval = setInterval(() => {
        this.progressPercent++;
        if (this.progressPercent === MAX_PROGRESS_PERCENT) {
          this.swiper.slideNext();
          if (this.slideActive === this.storiesList.length) {
            clearInterval(this.progressInterval);
          }
        }
      }, SPEED_CHANGE_SLIDE);
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
<style lang="scss" src="./swiper.scss" />
