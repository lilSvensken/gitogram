<template>
  <div class="lang">
    <button @click="onChangeStatusLang()" class="lang__btn">ENG</button>
    <div class="lang__list" :class="{ ['lang__list--open']: isOpenLang }">
      <a href="#" class="lang__item text text--main text--center">ENG</a>
      <a href="#" class="lang__item text text--main text--center">RU</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LangSelect",
  emits: ["onChangeStatusLang"],
  props: ["isOpenLang"],
  methods: {
    onChangeStatusLang() {
      this.$emit("onChangeStatusLang");
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
