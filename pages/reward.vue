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
import Desktoplotto from "~/components/desktop/reward/Reward.vue";
import Mobilelotto from "~/components/mobile/reward/Reward.vue";
const mainStore = useMainStore();
const resultLayout = computed(() => mainStore.resultLayout);

</script>
<style lang="scss" scoped>
.homecont {
  max-width: 1080px;
}
</style>
