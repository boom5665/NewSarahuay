
// @ts-nocheck


export const localeCodes =  [
  "en",
  "th"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => import("../locales/en.json" /* webpackChunkName: "locale__Users_jarkkarpongsukprasop_Documents_GitHub_NewSarahuay_locales_en_json" */), cache: true }],
  "th": [{ key: "../locales/th.json", load: () => import("../locales/th.json" /* webpackChunkName: "locale__Users_jarkkarpongsukprasop_Documents_GitHub_NewSarahuay_locales_th_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "files": [
        "/Users/jarkkarpongsukprasop/Documents/GitHub/NewSarahuay/locales/en.json"
      ]
    },
    {
      "code": "th",
      "files": [
        "/Users/jarkkarpongsukprasop/Documents/GitHub/NewSarahuay/locales/th.json"
      ]
    }
  ],
  "defaultLocale": "th",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": true,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": false
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "files": [
      {
        "path": "/Users/jarkkarpongsukprasop/Documents/GitHub/NewSarahuay/locales/en.json"
      }
    ]
  },
  {
    "code": "th",
    "files": [
      {
        "path": "/Users/jarkkarpongsukprasop/Documents/GitHub/NewSarahuay/locales/th.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
