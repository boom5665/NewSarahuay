<template>
  <div>
    <!-- MOBILE -->
    <div v-if="resultLayout === 'mobile'" class="layout-wrapper">
      <Mobilelotto />
    </div>

    <!-- DESKTOP -->
    <div v-else class="container layout-wrapper">
      <Desktoplotto />
    </div>
  </div>
</template>

<script setup>
import Desktoplotto from "~/components/desktop/lotto/Lotto.vue";
import Mobilelotto from "~/components/mobile/lotto/Lotto.vue";
const mainStore = useMainStore();
const resultLayout = computed(() => mainStore.resultLayout);
const pageSeo = ref({
  home: {
    title: "หน้าหวย ล็อตโตรี ",
    description: "เช็กผลหวยล่าสุด พร้อมสถิติย้อนหลัง",
  },
});

useSeoMeta({
  title: pageSeo.value.home.title,

  description: pageSeo.value.home.description,

  ogTitle: pageSeo.value.home.title,

  ogDescription: pageSeo.value.home.description,

  twitterTitle: pageSeo.value.home.title,

  twitterDescription: pageSeo.value.home.description,
});
</script>
<style lang="scss" scoped>
.homecont {
  max-width: 1080px;
}
</style>
