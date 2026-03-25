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
import Desktoplotto from "~/components/desktop/detailnew/New.vue";
import Mobilelotto from "~/components/mobile/detailnew/New.vue";
const mainStore = useMainStore();
const resultLayout = computed(() => mainStore.resultLayout);
const { $magic } = useNuxtApp();

onMounted(() => {
  window.addEventListener("resize", $magic);
  window.dispatchEvent(new Event("resize"));
});
</script>
<style lang="scss" scoped>
.homecont {
  max-width: 1080px;
}
</style>
