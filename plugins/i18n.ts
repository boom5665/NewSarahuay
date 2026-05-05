import { createI18n } from 'vue-i18n'

import en from '~/locales/en.json'
import th from '~/locales/th.json'
import cn from '~/locales/cn.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'th',
    fallbackLocale: 'en',
    messages: {
      en,
      th,
      cn
    }
  })

  nuxtApp.vueApp.use(i18n)
})