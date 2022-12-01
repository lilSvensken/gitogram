<template>
  <div class="stories">
    <div class="swiper-container stories__page-content page-content">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="spaceBetween"
        :navigation="isNavigation"
        class="stories__wrapper"
      >
        <swiper-slide
          v-for="(user, index) in usersList"
          :key="index"
          class="stories__item-wrapper"
        >
          <button type="button" class="stories__item-button">
            <span class="stories__avatar-img-wrapper">
              <img
                :src="user.img"
                :alt="user.name"
                class="stories__avatar-img"
              />
            </span>
            <span class="stories__avatar-name">
              {{ user.name }}
            </span>
          </button>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { usersList } from "@/assets/mock/usersList";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import {
  getIsNavigation,
  getSpaceBetween,
} from "@/components/layout/header/components/stories/computeds";

export default {
  name: "CStories",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      usersList: usersList,
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  computed: {
    isNavigation() {
      return getIsNavigation();
    },
    spaceBetween() {
      return getSpaceBetween();
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
<style lang="scss" src="./swiper-nav.scss" />
