import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('skeleton', {
    // state กลาง (optional)
    create() {
      return {
        loading: true
      }
    }
  })
})