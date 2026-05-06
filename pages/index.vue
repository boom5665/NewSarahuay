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
import Desktophome from "~/components/desktop/home/Home.vue";
import Mobilehome from "~/components/mobile/home/Home.vue";
const mainStore = useMainStore();
const resultLayout = computed(() => mainStore.resultLayout);



</script>
<style lang="scss" scoped>
.homecont {
  max-width: 1080px;
}
</style>
