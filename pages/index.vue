<template>
  <div>
  

    <!-- MOBILE -->
    <div v-if="resultLayout === 'mobile'" class="layout-wrapper">
      <Mobilehome />
    </div>

    <!-- DESKTOP -->
    <div v-else class="container layout-wrapper">
      <Desktophome />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import Desktophome from "~/components/desktop/home/Home.vue";
import Mobilehome from "~/components/mobile/home/Home.vue";

const mainStore = useMainStore();

const resultLayout = computed(() => mainStore.resultLayout);
// const seoStore = useSeoStore();
const pageSeo = ref({
  home: {
    title: "หน้าแรก Sarahuay",
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
