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
        <slide-header />

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
      storiesList: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  setup() {
    return { modules: [Navigation, Pagination] };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    setActiveSlide() {
      this.slideActive = this.swiper.activeIndex;
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
<style lang="scss" src="./swiper.scss" />
