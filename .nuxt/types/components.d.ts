
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  Article: typeof import("../../components/Article.vue")['default']
  Button: typeof import("../../components/Button.vue")['default']
  CheckboxValue: typeof import("../../components/CheckboxValue.vue")['default']
  InputValue: typeof import("../../components/InputValue.vue")['default']
  Loader: typeof import("../../components/Loader.vue")['default']
  LoginModal: typeof import("../../components/LoginModal.vue")['default']
  Menu: typeof import("../../components/Menu.vue")['default']
  Menubar: typeof import("../../components/Menubar.vue")['default']
  ModalAlert: typeof import("../../components/ModalAlert.vue")['default']
  Result: typeof import("../../components/Result.vue")['default']
  DesktopImageCard: typeof import("../../components/desktop/ImageCard.vue")['default']
  DesktopMenuai: typeof import("../../components/desktop/Menuai.vue")['default']
  DesktopMenuburger: typeof import("../../components/desktop/Menuburger.vue")['default']
  DesktopMenuevent: typeof import("../../components/desktop/Menuevent.vue")['default']
  DesktopMenuhistoryai: typeof import("../../components/desktop/Menuhistoryai.vue")['default']
  DesktopMenunotify: typeof import("../../components/desktop/Menunotify.vue")['default']
  DesktopMenunpake: typeof import("../../components/desktop/Menunpake.vue")['default']
  DesktopMenuprofile: typeof import("../../components/desktop/Menuprofile.vue")['default']
  DesktopMenusecurity: typeof import("../../components/desktop/Menusecurity.vue")['default']
  DesktopResultAi: typeof import("../../components/desktop/ResultAi.vue")['default']
  DesktopResultBox: typeof import("../../components/desktop/ResultBox.vue")['default']
  DesktopResultHoro: typeof import("../../components/desktop/ResultHoro.vue")['default']
  DesktopResultLotto: typeof import("../../components/desktop/ResultLotto.vue")['default']
  DesktopSlidehome: typeof import("../../components/desktop/Slidehome.vue")['default']
  DesktopTarot: typeof import("../../components/desktop/Tarot.vue")['default']
  DesktopAigentorAigen: typeof import("../../components/desktop/aigentor/Aigen.vue")['default']
  DesktopDetailnewNew: typeof import("../../components/desktop/detailnew/New.vue")['default']
  DesktopFooter: typeof import("../../components/desktop/footer/Footer.vue")['default']
  DesktopHeader: typeof import("../../components/desktop/header/Header.vue")['default']
  DesktopHomeCheckLotteryCard: typeof import("../../components/desktop/home/CheckLotteryCard.vue")['default']
  DesktopHomeCommunitySection: typeof import("../../components/desktop/home/CommunitySection.vue")['default']
  DesktopHomeHeroBanner: typeof import("../../components/desktop/home/HeroBanner.vue")['default']
  "DesktopHomeHome copy": typeof import("../../components/desktop/home/Home copy.vue")['default']
  DesktopHome: typeof import("../../components/desktop/home/Home.vue")['default']
  DesktopHomeHoroscopeCard: typeof import("../../components/desktop/home/HoroscopeCard.vue")['default']
  DesktopHomeLottoResultCard: typeof import("../../components/desktop/home/LottoResultCard.vue")['default']
  DesktopHomeLuckyNewsCard: typeof import("../../components/desktop/home/LuckyNewsCard.vue")['default']
  DesktopHomeLuckyNumberCard: typeof import("../../components/desktop/home/LuckyNumberCard.vue")['default']
  DesktopHomeNewsSection: typeof import("../../components/desktop/home/NewsSection.vue")['default']
  DesktopHomeResultTable: typeof import("../../components/desktop/home/ResultTable.vue")['default']
  DesktopHomeTarotSection: typeof import("../../components/desktop/home/TarotSection.vue")['default']
  DesktopLotto: typeof import("../../components/desktop/lotto/Lotto.vue")['default']
  DesktopProfile: typeof import("../../components/desktop/profile/Profile.vue")['default']
  DesktopReward: typeof import("../../components/desktop/reward/Reward.vue")['default']
  DesktopSupers: typeof import("../../components/desktop/supers/Supers.vue")['default']
  MobileImageCard: typeof import("../../components/mobile/ImageCard.vue")['default']
  MobileResultAi: typeof import("../../components/mobile/ResultAi.vue")['default']
  MobileResultBox: typeof import("../../components/mobile/ResultBox.vue")['default']
  MobileResultHoro: typeof import("../../components/mobile/ResultHoro.vue")['default']
  MobileResultLotto: typeof import("../../components/mobile/ResultLotto.vue")['default']
  MobileSlidehome: typeof import("../../components/mobile/Slidehome.vue")['default']
  MobileTarot: typeof import("../../components/mobile/Tarot.vue")['default']
  MobileAigentorAigen: typeof import("../../components/mobile/aigentor/Aigen.vue")['default']
  MobileDetailnewNew: typeof import("../../components/mobile/detailnew/New.vue")['default']
  MobileFooter: typeof import("../../components/mobile/footer/Footer.vue")['default']
  MobileHeader: typeof import("../../components/mobile/header/Header.vue")['default']
  MobileHome: typeof import("../../components/mobile/home/Home.vue")['default']
  MobileLotto: typeof import("../../components/mobile/lotto/Lotto.vue")['default']
  MobileProfile: typeof import("../../components/mobile/profile/Profile.vue")['default']
  MobileReward: typeof import("../../components/mobile/reward/Reward.vue")['default']
  MobileSupers: typeof import("../../components/mobile/supers/Supers.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyArticle: LazyComponent<typeof import("../../components/Article.vue")['default']>
  LazyButton: LazyComponent<typeof import("../../components/Button.vue")['default']>
  LazyCheckboxValue: LazyComponent<typeof import("../../components/CheckboxValue.vue")['default']>
  LazyInputValue: LazyComponent<typeof import("../../components/InputValue.vue")['default']>
  LazyLoader: LazyComponent<typeof import("../../components/Loader.vue")['default']>
  LazyLoginModal: LazyComponent<typeof import("../../components/LoginModal.vue")['default']>
  LazyMenu: LazyComponent<typeof import("../../components/Menu.vue")['default']>
  LazyMenubar: LazyComponent<typeof import("../../components/Menubar.vue")['default']>
  LazyModalAlert: LazyComponent<typeof import("../../components/ModalAlert.vue")['default']>
  LazyResult: LazyComponent<typeof import("../../components/Result.vue")['default']>
  LazyDesktopImageCard: LazyComponent<typeof import("../../components/desktop/ImageCard.vue")['default']>
  LazyDesktopMenuai: LazyComponent<typeof import("../../components/desktop/Menuai.vue")['default']>
  LazyDesktopMenuburger: LazyComponent<typeof import("../../components/desktop/Menuburger.vue")['default']>
  LazyDesktopMenuevent: LazyComponent<typeof import("../../components/desktop/Menuevent.vue")['default']>
  LazyDesktopMenuhistoryai: LazyComponent<typeof import("../../components/desktop/Menuhistoryai.vue")['default']>
  LazyDesktopMenunotify: LazyComponent<typeof import("../../components/desktop/Menunotify.vue")['default']>
  LazyDesktopMenunpake: LazyComponent<typeof import("../../components/desktop/Menunpake.vue")['default']>
  LazyDesktopMenuprofile: LazyComponent<typeof import("../../components/desktop/Menuprofile.vue")['default']>
  LazyDesktopMenusecurity: LazyComponent<typeof import("../../components/desktop/Menusecurity.vue")['default']>
  LazyDesktopResultAi: LazyComponent<typeof import("../../components/desktop/ResultAi.vue")['default']>
  LazyDesktopResultBox: LazyComponent<typeof import("../../components/desktop/ResultBox.vue")['default']>
  LazyDesktopResultHoro: LazyComponent<typeof import("../../components/desktop/ResultHoro.vue")['default']>
  LazyDesktopResultLotto: LazyComponent<typeof import("../../components/desktop/ResultLotto.vue")['default']>
  LazyDesktopSlidehome: LazyComponent<typeof import("../../components/desktop/Slidehome.vue")['default']>
  LazyDesktopTarot: LazyComponent<typeof import("../../components/desktop/Tarot.vue")['default']>
  LazyDesktopAigentorAigen: LazyComponent<typeof import("../../components/desktop/aigentor/Aigen.vue")['default']>
  LazyDesktopDetailnewNew: LazyComponent<typeof import("../../components/desktop/detailnew/New.vue")['default']>
  LazyDesktopFooter: LazyComponent<typeof import("../../components/desktop/footer/Footer.vue")['default']>
  LazyDesktopHeader: LazyComponent<typeof import("../../components/desktop/header/Header.vue")['default']>
  LazyDesktopHomeCheckLotteryCard: LazyComponent<typeof import("../../components/desktop/home/CheckLotteryCard.vue")['default']>
  LazyDesktopHomeCommunitySection: LazyComponent<typeof import("../../components/desktop/home/CommunitySection.vue")['default']>
  LazyDesktopHomeHeroBanner: LazyComponent<typeof import("../../components/desktop/home/HeroBanner.vue")['default']>
  "LazyDesktopHomeHome copy": LazyComponent<typeof import("../../components/desktop/home/Home copy.vue")['default']>
  LazyDesktopHome: LazyComponent<typeof import("../../components/desktop/home/Home.vue")['default']>
  LazyDesktopHomeHoroscopeCard: LazyComponent<typeof import("../../components/desktop/home/HoroscopeCard.vue")['default']>
  LazyDesktopHomeLottoResultCard: LazyComponent<typeof import("../../components/desktop/home/LottoResultCard.vue")['default']>
  LazyDesktopHomeLuckyNewsCard: LazyComponent<typeof import("../../components/desktop/home/LuckyNewsCard.vue")['default']>
  LazyDesktopHomeLuckyNumberCard: LazyComponent<typeof import("../../components/desktop/home/LuckyNumberCard.vue")['default']>
  LazyDesktopHomeNewsSection: LazyComponent<typeof import("../../components/desktop/home/NewsSection.vue")['default']>
  LazyDesktopHomeResultTable: LazyComponent<typeof import("../../components/desktop/home/ResultTable.vue")['default']>
  LazyDesktopHomeTarotSection: LazyComponent<typeof import("../../components/desktop/home/TarotSection.vue")['default']>
  LazyDesktopLotto: LazyComponent<typeof import("../../components/desktop/lotto/Lotto.vue")['default']>
  LazyDesktopProfile: LazyComponent<typeof import("../../components/desktop/profile/Profile.vue")['default']>
  LazyDesktopReward: LazyComponent<typeof import("../../components/desktop/reward/Reward.vue")['default']>
  LazyDesktopSupers: LazyComponent<typeof import("../../components/desktop/supers/Supers.vue")['default']>
  LazyMobileImageCard: LazyComponent<typeof import("../../components/mobile/ImageCard.vue")['default']>
  LazyMobileResultAi: LazyComponent<typeof import("../../components/mobile/ResultAi.vue")['default']>
  LazyMobileResultBox: LazyComponent<typeof import("../../components/mobile/ResultBox.vue")['default']>
  LazyMobileResultHoro: LazyComponent<typeof import("../../components/mobile/ResultHoro.vue")['default']>
  LazyMobileResultLotto: LazyComponent<typeof import("../../components/mobile/ResultLotto.vue")['default']>
  LazyMobileSlidehome: LazyComponent<typeof import("../../components/mobile/Slidehome.vue")['default']>
  LazyMobileTarot: LazyComponent<typeof import("../../components/mobile/Tarot.vue")['default']>
  LazyMobileAigentorAigen: LazyComponent<typeof import("../../components/mobile/aigentor/Aigen.vue")['default']>
  LazyMobileDetailnewNew: LazyComponent<typeof import("../../components/mobile/detailnew/New.vue")['default']>
  LazyMobileFooter: LazyComponent<typeof import("../../components/mobile/footer/Footer.vue")['default']>
  LazyMobileHeader: LazyComponent<typeof import("../../components/mobile/header/Header.vue")['default']>
  LazyMobileHome: LazyComponent<typeof import("../../components/mobile/home/Home.vue")['default']>
  LazyMobileLotto: LazyComponent<typeof import("../../components/mobile/lotto/Lotto.vue")['default']>
  LazyMobileProfile: LazyComponent<typeof import("../../components/mobile/profile/Profile.vue")['default']>
  LazyMobileReward: LazyComponent<typeof import("../../components/mobile/reward/Reward.vue")['default']>
  LazyMobileSupers: LazyComponent<typeof import("../../components/mobile/supers/Supers.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
