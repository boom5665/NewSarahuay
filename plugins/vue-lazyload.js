import { defineNuxtPlugin } from '#app'
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.5,
    // error: '/images/error.png',
    // loading: '/images/loading.gif',
    attempt: 2
  })
})
