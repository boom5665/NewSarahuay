<template>
  <div class="layout-page">
    <ClientOnly>
      <!-- MOBILE -->
      <div v-if="resultLayout === 'mobile'" class="layout-wrapper">
        <MobileHeader />

        <div class="layout-content">
          <slot />
        </div>

        <MobileFooter />
      </div>

      <!-- DESKTOP -->
      <div v-else class="container layout-wrapper">
        <DesktopHeader />

        <div class="layout-content">
          <slot />
        </div>

        <DesktopFooter />
      </div>

      <Loader v-if="loadCounter > 0" />
      <ModalAlert v-if="alertStore.alertShow" />
    </ClientOnly>
  </div>
</template>

<script setup>
import DesktopHeader from "~/components/desktop/header/Header.vue";
import MobileHeader from "~/components/mobile/header/Header.vue";
import DesktopFooter from "~/components/desktop/footer/Footer.vue";
import MobileFooter from "~/components/mobile/footer/Footer.vue";
const mainStore = useMainStore();
const alertStore = useAlertStore();

const loadCounter = computed(() => mainStore.loadCounter);
const resultLayout = computed(() => mainStore.resultLayout);

const { $magic } = useNuxtApp();

onMounted(() => {
  window.addEventListener("resize", $magic);
  window.dispatchEvent(new Event("resize"));

  mainStore.loaderAction(true);
  mainStore.loaderAction(false);
});
</script>

<style scoped>
.layout-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.layout-content {
  flex: 1;
}
</style>
