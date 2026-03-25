import { useMainStore } from '@/stores/index';
import { useAlertStore } from '@/stores/alert';

export default defineNuxtPlugin((nuxtApp) => {
  const mainStore = useMainStore();
  const alertStore = useAlertStore();

  nuxtApp.provide('mainStore', mainStore)
  nuxtApp.provide('alertStore', alertStore)
})
