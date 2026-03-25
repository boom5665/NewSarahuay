<template>
  <div>
    <!-- MOBILE -->
    <div v-if="resultLayout === 'mobile'" class="layout-wrapper">
      <Mobilesupers />
    </div>

    <!-- DESKTOP -->
    <div v-else class="container layout-wrapper">
      <Desktopsupers />
    </div>
  </div>
</template>

<script setup>
import Desktopsupers from "~/components/desktop/supers/Supers.vue";
import Mobilesupers from "~/components/mobile/supers/Supers.vue";
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
.home-content {
  display: flex;
  justify-content: center;
}
</style>
