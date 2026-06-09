
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


export const Article: typeof import("../components/Article.vue")['default']
export const Button: typeof import("../components/Button.vue")['default']
export const CheckboxValue: typeof import("../components/CheckboxValue.vue")['default']
export const InputValue: typeof import("../components/InputValue.vue")['default']
export const Loader: typeof import("../components/Loader.vue")['default']
export const LoginModal: typeof import("../components/LoginModal.vue")['default']
export const Menu: typeof import("../components/Menu.vue")['default']
export const Menubar: typeof import("../components/Menubar.vue")['default']
export const ModalAlert: typeof import("../components/ModalAlert.vue")['default']
export const Result: typeof import("../components/Result.vue")['default']
export const DesktopImageCard: typeof import("../components/desktop/ImageCard.vue")['default']
export const DesktopMenuai: typeof import("../components/desktop/Menuai.vue")['default']
export const DesktopMenuburger: typeof import("../components/desktop/Menuburger.vue")['default']
export const DesktopMenuevent: typeof import("../components/desktop/Menuevent.vue")['default']
export const DesktopMenuhistoryai: typeof import("../components/desktop/Menuhistoryai.vue")['default']
export const DesktopMenunotify: typeof import("../components/desktop/Menunotify.vue")['default']
export const DesktopMenunpake: typeof import("../components/desktop/Menunpake.vue")['default']
export const DesktopMenuprofile: typeof import("../components/desktop/Menuprofile.vue")['default']
export const DesktopMenusecurity: typeof import("../components/desktop/Menusecurity.vue")['default']
export const DesktopResultAi: typeof import("../components/desktop/ResultAi.vue")['default']
export const DesktopResultBox: typeof import("../components/desktop/ResultBox.vue")['default']
export const DesktopResultHoro: typeof import("../components/desktop/ResultHoro.vue")['default']
export const DesktopResultLotto: typeof import("../components/desktop/ResultLotto.vue")['default']
export const DesktopSlidehome: typeof import("../components/desktop/Slidehome.vue")['default']
export const DesktopTarot: typeof import("../components/desktop/Tarot.vue")['default']
export const DesktopAigentorAigen: typeof import("../components/desktop/aigentor/Aigen.vue")['default']
export const DesktopDetailnewNew: typeof import("../components/desktop/detailnew/New.vue")['default']
export const DesktopFooter: typeof import("../components/desktop/footer/Footer.vue")['default']
export const DesktopHeader: typeof import("../components/desktop/header/Header.vue")['default']
export const DesktopHomeCheckLotteryCard: typeof import("../components/desktop/home/CheckLotteryCard.vue")['default']
export const DesktopHomeCommunitySection: typeof import("../components/desktop/home/CommunitySection.vue")['default']
export const DesktopHomeHeroBanner: typeof import("../components/desktop/home/HeroBanner.vue")['default']
export const DesktopHome: typeof import("../components/desktop/home/Home.vue")['default']
export const DesktopHomeHoroscopeCard: typeof import("../components/desktop/home/HoroscopeCard.vue")['default']
export const DesktopHomeLottoResultCard: typeof import("../components/desktop/home/LottoResultCard.vue")['default']
export const DesktopHomeLuckyNewsCard: typeof import("../components/desktop/home/LuckyNewsCard.vue")['default']
export const DesktopHomeLuckyNumberCard: typeof import("../components/desktop/home/LuckyNumberCard.vue")['default']
export const DesktopHomeNewsSection: typeof import("../components/desktop/home/NewsSection.vue")['default']
export const DesktopHomeResultTable: typeof import("../components/desktop/home/ResultTable.vue")['default']
export const DesktopHomeTarotSection: typeof import("../components/desktop/home/TarotSection.vue")['default']
export const DesktopLotto: typeof import("../components/desktop/lotto/Lotto.vue")['default']
export const DesktopProfile: typeof import("../components/desktop/profile/Profile.vue")['default']
export const DesktopReward: typeof import("../components/desktop/reward/Reward.vue")['default']
export const DesktopSupers: typeof import("../components/desktop/supers/Supers.vue")['default']
export const MobileImageCard: typeof import("../components/mobile/ImageCard.vue")['default']
export const MobileResultAi: typeof import("../components/mobile/ResultAi.vue")['default']
export const MobileResultBox: typeof import("../components/mobile/ResultBox.vue")['default']
export const MobileResultHoro: typeof import("../components/mobile/ResultHoro.vue")['default']
export const MobileResultLotto: typeof import("../components/mobile/ResultLotto.vue")['default']
export const MobileSlidehome: typeof import("../components/mobile/Slidehome.vue")['default']
export const MobileTarot: typeof import("../components/mobile/Tarot.vue")['default']
export const MobileAigentorAigen: typeof import("../components/mobile/aigentor/Aigen.vue")['default']
export const MobileDetailnewNew: typeof import("../components/mobile/detailnew/New.vue")['default']
export const MobileFooter: typeof import("../components/mobile/footer/Footer.vue")['default']
export const MobileHeader: typeof import("../components/mobile/header/Header.vue")['default']
export const MobileHome: typeof import("../components/mobile/home/Home.vue")['default']
export const MobileLotto: typeof import("../components/mobile/lotto/Lotto.vue")['default']
export const MobileProfile: typeof import("../components/mobile/profile/Profile.vue")['default']
export const MobileReward: typeof import("../components/mobile/reward/Reward.vue")['default']
export const MobileSupers: typeof import("../components/mobile/supers/Supers.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyArticle: LazyComponent<typeof import("../components/Article.vue")['default']>
export const LazyButton: LazyComponent<typeof import("../components/Button.vue")['default']>
export const LazyCheckboxValue: LazyComponent<typeof import("../components/CheckboxValue.vue")['default']>
export const LazyInputValue: LazyComponent<typeof import("../components/InputValue.vue")['default']>
export const LazyLoader: LazyComponent<typeof import("../components/Loader.vue")['default']>
export const LazyLoginModal: LazyComponent<typeof import("../components/LoginModal.vue")['default']>
export const LazyMenu: LazyComponent<typeof import("../components/Menu.vue")['default']>
export const LazyMenubar: LazyComponent<typeof import("../components/Menubar.vue")['default']>
export const LazyModalAlert: LazyComponent<typeof import("../components/ModalAlert.vue")['default']>
export const LazyResult: LazyComponent<typeof import("../components/Result.vue")['default']>
export const LazyDesktopImageCard: LazyComponent<typeof import("../components/desktop/ImageCard.vue")['default']>
export const LazyDesktopMenuai: LazyComponent<typeof import("../components/desktop/Menuai.vue")['default']>
export const LazyDesktopMenuburger: LazyComponent<typeof import("../components/desktop/Menuburger.vue")['default']>
export const LazyDesktopMenuevent: LazyComponent<typeof import("../components/desktop/Menuevent.vue")['default']>
export const LazyDesktopMenuhistoryai: LazyComponent<typeof import("../components/desktop/Menuhistoryai.vue")['default']>
export const LazyDesktopMenunotify: LazyComponent<typeof import("../components/desktop/Menunotify.vue")['default']>
export const LazyDesktopMenunpake: LazyComponent<typeof import("../components/desktop/Menunpake.vue")['default']>
export const LazyDesktopMenuprofile: LazyComponent<typeof import("../components/desktop/Menuprofile.vue")['default']>
export const LazyDesktopMenusecurity: LazyComponent<typeof import("../components/desktop/Menusecurity.vue")['default']>
export const LazyDesktopResultAi: LazyComponent<typeof import("../components/desktop/ResultAi.vue")['default']>
export const LazyDesktopResultBox: LazyComponent<typeof import("../components/desktop/ResultBox.vue")['default']>
export const LazyDesktopResultHoro: LazyComponent<typeof import("../components/desktop/ResultHoro.vue")['default']>
export const LazyDesktopResultLotto: LazyComponent<typeof import("../components/desktop/ResultLotto.vue")['default']>
export const LazyDesktopSlidehome: LazyComponent<typeof import("../components/desktop/Slidehome.vue")['default']>
export const LazyDesktopTarot: LazyComponent<typeof import("../components/desktop/Tarot.vue")['default']>
export const LazyDesktopAigentorAigen: LazyComponent<typeof import("../components/desktop/aigentor/Aigen.vue")['default']>
export const LazyDesktopDetailnewNew: LazyComponent<typeof import("../components/desktop/detailnew/New.vue")['default']>
export const LazyDesktopFooter: LazyComponent<typeof import("../components/desktop/footer/Footer.vue")['default']>
export const LazyDesktopHeader: LazyComponent<typeof import("../components/desktop/header/Header.vue")['default']>
export const LazyDesktopHomeCheckLotteryCard: LazyComponent<typeof import("../components/desktop/home/CheckLotteryCard.vue")['default']>
export const LazyDesktopHomeCommunitySection: LazyComponent<typeof import("../components/desktop/home/CommunitySection.vue")['default']>
export const LazyDesktopHomeHeroBanner: LazyComponent<typeof import("../components/desktop/home/HeroBanner.vue")['default']>
export const LazyDesktopHome: LazyComponent<typeof import("../components/desktop/home/Home.vue")['default']>
export const LazyDesktopHomeHoroscopeCard: LazyComponent<typeof import("../components/desktop/home/HoroscopeCard.vue")['default']>
export const LazyDesktopHomeLottoResultCard: LazyComponent<typeof import("../components/desktop/home/LottoResultCard.vue")['default']>
export const LazyDesktopHomeLuckyNewsCard: LazyComponent<typeof import("../components/desktop/home/LuckyNewsCard.vue")['default']>
export const LazyDesktopHomeLuckyNumberCard: LazyComponent<typeof import("../components/desktop/home/LuckyNumberCard.vue")['default']>
export const LazyDesktopHomeNewsSection: LazyComponent<typeof import("../components/desktop/home/NewsSection.vue")['default']>
export const LazyDesktopHomeResultTable: LazyComponent<typeof import("../components/desktop/home/ResultTable.vue")['default']>
export const LazyDesktopHomeTarotSection: LazyComponent<typeof import("../components/desktop/home/TarotSection.vue")['default']>
export const LazyDesktopLotto: LazyComponent<typeof import("../components/desktop/lotto/Lotto.vue")['default']>
export const LazyDesktopProfile: LazyComponent<typeof import("../components/desktop/profile/Profile.vue")['default']>
export const LazyDesktopReward: LazyComponent<typeof import("../components/desktop/reward/Reward.vue")['default']>
export const LazyDesktopSupers: LazyComponent<typeof import("../components/desktop/supers/Supers.vue")['default']>
export const LazyMobileImageCard: LazyComponent<typeof import("../components/mobile/ImageCard.vue")['default']>
export const LazyMobileResultAi: LazyComponent<typeof import("../components/mobile/ResultAi.vue")['default']>
export const LazyMobileResultBox: LazyComponent<typeof import("../components/mobile/ResultBox.vue")['default']>
export const LazyMobileResultHoro: LazyComponent<typeof import("../components/mobile/ResultHoro.vue")['default']>
export const LazyMobileResultLotto: LazyComponent<typeof import("../components/mobile/ResultLotto.vue")['default']>
export const LazyMobileSlidehome: LazyComponent<typeof import("../components/mobile/Slidehome.vue")['default']>
export const LazyMobileTarot: LazyComponent<typeof import("../components/mobile/Tarot.vue")['default']>
export const LazyMobileAigentorAigen: LazyComponent<typeof import("../components/mobile/aigentor/Aigen.vue")['default']>
export const LazyMobileDetailnewNew: LazyComponent<typeof import("../components/mobile/detailnew/New.vue")['default']>
export const LazyMobileFooter: LazyComponent<typeof import("../components/mobile/footer/Footer.vue")['default']>
export const LazyMobileHeader: LazyComponent<typeof import("../components/mobile/header/Header.vue")['default']>
export const LazyMobileHome: LazyComponent<typeof import("../components/mobile/home/Home.vue")['default']>
export const LazyMobileLotto: LazyComponent<typeof import("../components/mobile/lotto/Lotto.vue")['default']>
export const LazyMobileProfile: LazyComponent<typeof import("../components/mobile/profile/Profile.vue")['default']>
export const LazyMobileReward: LazyComponent<typeof import("../components/mobile/reward/Reward.vue")['default']>
export const LazyMobileSupers: LazyComponent<typeof import("../components/mobile/supers/Supers.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
