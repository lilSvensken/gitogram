<template>
  <div class="date">
    {{ parsDate(date) }}
  </div>
</template>

<script>
export default {
  name: "c-date",
  props: ["date"],
  methods: {
    parsDate(dateStr) {
      let ms = new Date(dateStr).getTime();
      let date = new Date(ms);
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss" />
