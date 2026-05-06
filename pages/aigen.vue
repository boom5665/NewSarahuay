<template>
  <div>
    <!-- MOBILE -->
    <div v-if="resultLayout === 'mobile'" class="layout-wrapper">
      <Mobileaigentor />
    </div>

    <!-- DESKTOP -->
    <div v-else class="container layout-wrapper">
      <Desktopaigentor />
    </div>
  </div>
</template>

<script setup>
import Desktopaigentor from "~/components/desktop/aigentor/Aigen.vue";
import Mobileaigentor from "~/components/mobile/aigentor/Aigen.vue";
const mainStore = useMainStore();
const resultLayout = computed(() => mainStore.resultLayout);

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
