import { computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, g as useSeoMeta, u as useHead, h as useRoute$1, b as useNuxtApp } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { _ as __nuxt_component_0 } from './nuxt-link-CcHW_VpF.mjs';
import { u as useMainStore } from './index-DWubOjH1.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'nuxtseo-shared/utils';
import 'perfect-debounce';
import '@vue/shared';
import 'vue-i18n';
import 'vue-lazyload';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$h = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-banner" }, _attrs))} data-v-3f5aa632><div class="hero-content" data-v-3f5aa632><div data-v-3f5aa632><div class="tagline" data-v-3f5aa632> อัปเดตทุกงวด </div><div class="title" data-v-3f5aa632> เลขเด็ด สถิติหวย พร้อมเช็กผลแบบรวดเร็ว </div><div class="subtitle" data-v-3f5aa632> รวมข่าวหวย เลขมาแรง ดูดวง ทำนายฝัน และไพ่ยิปซี ครบจบในหน้าเดียว </div><div class="button-group" data-v-3f5aa632><button data-v-3f5aa632>เลขเด็ดวันนี้</button><button data-v-3f5aa632>ผลหวยล่าสุด</button><button data-v-3f5aa632>ดูดวงฟรี</button></div></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/HeroBanner.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const HeroBanner = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-3f5aa632"]]), { __name: "DesktopHomeHeroBanner" });
const _sfc_main$g = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "result-card" }, _attrs))} data-v-1999c09a><div class="header" data-v-1999c09a> หวยรัฐบาลไทย </div><div class="number-grid" data-v-1999c09a><div class="number-box" data-v-1999c09a><div class="label" data-v-1999c09a>รางวัลที่ 1</div><div class="number" data-v-1999c09a>123456</div></div><div class="number-box" data-v-1999c09a><div class="label" data-v-1999c09a>เลขท้าย 2 ตัว</div><div class="number" data-v-1999c09a>89</div></div><div class="number-box" data-v-1999c09a><div class="label" data-v-1999c09a>เลขหน้า 3 ตัว</div><div class="number" data-v-1999c09a>123</div></div></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/LottoResultCard.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const LottoResultCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-1999c09a"]]), { __name: "DesktopHomeLottoResultCard" });
const _sfc_main$f = {
  __name: "DesktopHomeLuckyNumberCard",
  __ssrInlineRender: true,
  setup(__props) {
    const numbers = ref([
      {
        number: "29"
      },
      {
        number: "78"
      },
      {
        number: "04"
      },
      {
        number: "55"
      },
      {
        number: "91"
      },
      {
        number: "36"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lucky-card" }, _attrs))} data-v-f7a39c6a><div class="section-title" data-v-f7a39c6a> เลขเด่นประจำวัน </div><div class="number-grid" data-v-f7a39c6a><!--[-->`);
      ssrRenderList(unref(numbers), (item, index2) => {
        _push(`<div class="number-item" data-v-f7a39c6a><div class="circle-number" data-v-f7a39c6a>${ssrInterpolate(item.number)}</div><div class="star-group" data-v-f7a39c6a> ★★★★★ </div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/LuckyNumberCard.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const LuckyNumberCard = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-f7a39c6a"]]);
const _sfc_main$e = {
  __name: "DesktopHomeHoroscopeCard",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const props = __props;
    const cardMap = {
      "ทำนายดวง": {
        icon: "/icon/magic-ball.svg",
        badge: "แม่นยำ",
        description: "เช็กภาพรวมชีวิต การเงิน ความรัก และโชคลาภ",
        action: "เปิดคำทำนาย",
        accent: "#008f6c",
        soft: "rgba(0, 143, 108, 0.14)"
      },
      "ทำนายฝัน": {
        icon: "/icon/dream.png",
        badge: "ตีเลข",
        description: "แปลความฝันเด่น พร้อมแนวทางเลขนำโชค",
        action: "เริ่มทำนาย",
        accent: "#c49100",
        soft: "rgba(255, 213, 74, 0.22)"
      },
      "ไพ่ยิปซี": {
        icon: "/icon/starleft.svg",
        badge: "ไพ่ 3 ใบ",
        description: "เปิดไพ่ดูคำตอบเรื่องที่กำลังลังเล",
        action: "เปิดไพ่",
        accent: "#7c3aed",
        soft: "rgba(124, 58, 237, 0.16)"
      },
      "ดวงรายวัน": {
        icon: "/icon/birthday.png",
        badge: "วันนี้",
        description: "คำแนะนำประจำวันตามจังหวะดวงของคุณ",
        action: "ดูดวงวันนี้",
        accent: "#0f766e",
        soft: "rgba(15, 118, 110, 0.14)"
      }
    };
    const card = computed(() => {
      return cardMap[props.title] || cardMap["ทำนายดวง"];
    });
    const cardStyle = computed(() => ({
      "--accent": card.value.accent,
      "--soft": card.value.soft
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "horo-card",
        style: cardStyle.value
      }, _attrs))} data-v-83ae8b8c><div class="card-head" data-v-83ae8b8c><div class="icon-wrap" data-v-83ae8b8c><img${ssrRenderAttr("src", card.value.icon)}${ssrRenderAttr("alt", __props.title)} data-v-83ae8b8c></div><div class="card-badge" data-v-83ae8b8c>${ssrInterpolate(card.value.badge)}</div></div><div class="horo-title" data-v-83ae8b8c>${ssrInterpolate(__props.title)}</div><div class="horo-desc" data-v-83ae8b8c>${ssrInterpolate(card.value.description)}</div><button type="button" data-v-83ae8b8c>${ssrInterpolate(card.value.action)} <span aria-hidden="true" data-v-83ae8b8c>›</span></button></article>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/HoroscopeCard.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const HoroscopeCard = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-83ae8b8c"]]);
const _imports_0$3 = publicAssetsURL("/HightlightNews.png");
const _sfc_main$d = {
  __name: "DesktopHomeNewsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const newsItems = [
      {
        title: "เลขเด็ดจากความฝัน",
        description: "แปลฝันยอดนิยมพร้อมเลขที่คนนิยมตาม",
        category: "ทำนายฝัน",
        time: "10 ชั่วโมงก่อน",
        image: "/icon/dream.png"
      },
      {
        title: "สถิติหวยย้อนหลังน่าจับตา",
        description: "เช็กเลขซ้ำ เลขท้าย และแนวโน้มล่าสุด",
        category: "สถิติ",
        time: "12 ชั่วโมงก่อน",
        image: "/frame/framlotto.png"
      },
      {
        title: "สายมูห้ามพลาด",
        description: "รวมเลขมงคลและวันดีสำหรับเสริมโชค",
        category: "สายมู",
        time: "1 วันที่แล้ว",
        image: "/icon/magic-ball.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "news-section" }, _attrs))} data-v-c2a148d5><div class="section-head" data-v-c2a148d5><div data-v-c2a148d5><div class="eyebrow" data-v-c2a148d5> อัปเดตล่าสุด </div><h2 class="section-title" data-v-c2a148d5> ข่าวสาร &amp; เลขเด็ด </h2></div><button type="button" class="view-all" data-v-c2a148d5> ทั้งหมด </button></div><article class="featured-news" data-v-c2a148d5><div class="featured-image" data-v-c2a148d5><img${ssrRenderAttr("src", _imports_0$3)} alt="ข่าวเลขเด็ด" data-v-c2a148d5></div><div class="featured-content" data-v-c2a148d5><div class="meta-row" data-v-c2a148d5><span data-v-c2a148d5>ข่าวหวย</span><span data-v-c2a148d5>16 ชั่วโมงก่อน</span></div><h3 data-v-c2a148d5> เลขเด็ดงวดนี้มาแรง รวมสถิติเด่นก่อนออกผล </h3><p data-v-c2a148d5> คัดเลขดังจากหลายแหล่ง พร้อมแนวทางดูสถิติแบบเข้าใจง่าย </p></div></article><div class="news-list" data-v-c2a148d5><!--[-->`);
      ssrRenderList(newsItems, (item) => {
        _push(`<article class="news-item" data-v-c2a148d5><div class="thumb" data-v-c2a148d5><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} data-v-c2a148d5></div><div class="news-copy" data-v-c2a148d5><div class="meta-row compact" data-v-c2a148d5><span data-v-c2a148d5>${ssrInterpolate(item.category)}</span><span data-v-c2a148d5>${ssrInterpolate(item.time)}</span></div><div class="news-title" data-v-c2a148d5>${ssrInterpolate(item.title)}</div><div class="news-desc" data-v-c2a148d5>${ssrInterpolate(item.description)}</div></div></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/NewsSection.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const NewsSection = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-c2a148d5"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "result-table" }, _attrs))} data-v-1560c3d8><div class="section-title" data-v-1560c3d8> สถิติหวยย้อนหลัง </div><table data-v-1560c3d8><thead data-v-1560c3d8><tr data-v-1560c3d8><th data-v-1560c3d8>งวด</th><th data-v-1560c3d8>รางวัลที่ 1</th><th data-v-1560c3d8>เลขท้าย</th></tr></thead><tbody data-v-1560c3d8><!--[-->`);
  ssrRenderList(5, (item) => {
    _push(`<tr data-v-1560c3d8><td data-v-1560c3d8>16/05/69</td><td data-v-1560c3d8>123456</td><td data-v-1560c3d8>89</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/ResultTable.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ResultTable = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-1560c3d8"]]), { __name: "DesktopHomeResultTable" });
const _sfc_main$b = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tarot-section" }, _attrs))} data-v-f6541e8a><div class="section-title" data-v-f6541e8a> ไพ่ยิปซีประจำวัน </div><div class="tarot-grid" data-v-f6541e8a></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/TarotSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TarotSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f6541e8a"]]), { __name: "DesktopHomeTarotSection" });
const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "community-section" }, _attrs))} data-v-4be75e66><div class="community-title" data-v-4be75e66> ชุมชนคนรักหวย </div><div class="community-desc" data-v-4be75e66> พูดคุย แลกเปลี่ยนเลขเด็ดรายวัน </div><button data-v-4be75e66> เข้าร่วมชุมชน </button></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/CommunitySection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CommunitySection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4be75e66"]]), { __name: "DesktopHomeCommunitySection" });
const _sfc_main$9 = {
  __name: "DesktopHomeCheckLotteryCard",
  __ssrInlineRender: true,
  setup(__props) {
    const lotteryNumber = ref("");
    const result = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "check-lottery-card" }, _attrs))} data-v-6228ffa1><div class="section-title" data-v-6228ffa1> ตรวจหวยได้ที่นี่ </div><div class="input-group" data-v-6228ffa1><input${ssrRenderAttr("value", lotteryNumber.value)} type="text" placeholder="กรอกเลขหวย" data-v-6228ffa1><button data-v-6228ffa1> ตรวจหวย </button></div>`);
      if (result.value) {
        _push(`<div class="result-box" data-v-6228ffa1><div class="result-title" data-v-6228ffa1> ผลการตรวจ </div><div class="result-number" data-v-6228ffa1>${ssrInterpolate(lotteryNumber.value)}</div><div class="result-status" data-v-6228ffa1>${ssrInterpolate(result.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/CheckLotteryCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CheckLotteryCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-6228ffa1"]]);
const _sfc_main$8 = {
  __name: "DesktopHomeLuckyNewsCard",
  __ssrInlineRender: true,
  setup(__props) {
    const newsList = ref([
      {
        number: "89",
        title: "เลขเด็ดแม่น้ำหนึ่ง",
        desc: "เลขดังงวดนี้มาแรง"
      },
      {
        number: "24",
        title: "เลขปฏิทินจีน",
        desc: "เลขเด็ดจากสายมู"
      },
      {
        number: "55",
        title: "เลขฝันแม่น",
        desc: "รวมเลขจากความฝัน"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lucky-news-card" }, _attrs))} data-v-2c459520><div class="section-title" data-v-2c459520> เลขเด็ดมาแรง </div><!--[-->`);
      ssrRenderList(unref(newsList), (item, index2) => {
        _push(`<div class="news-item" data-v-2c459520><div class="number-badge" data-v-2c459520>${ssrInterpolate(item.number)}</div><div class="news-content" data-v-2c459520><div class="news-title" data-v-2c459520>${ssrInterpolate(item.title)}</div><div class="news-desc" data-v-2c459520>${ssrInterpolate(item.desc)}</div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/LuckyNewsCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const LuckyNewsCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2c459520"]]);
const _sfc_main$7 = {
  __name: "DesktopHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-760edfe6><section class="page-intro" data-v-760edfe6><div data-v-760edfe6><p class="eyebrow" data-v-760edfe6>Sarahuay Today</p><h1 data-v-760edfe6>ข่าวหวย ผลรางวัล และเลขเด็ดประจำวัน</h1></div><div class="intro-actions" data-v-760edfe6><button type="button" data-v-760edfe6>ตรวจหวย</button><button type="button" class="ghost" data-v-760edfe6>ดูสถิติ</button></div></section><div class="top-section" data-v-760edfe6>`);
      _push(ssrRenderComponent(HeroBanner, null, null, _parent));
      _push(ssrRenderComponent(LottoResultCard, null, null, _parent));
      _push(ssrRenderComponent(CheckLotteryCard, null, null, _parent));
      _push(ssrRenderComponent(LuckyNewsCard, null, null, _parent));
      _push(`</div><div class="container-grid" data-v-760edfe6><div class="left-content" data-v-760edfe6><div class="mini-grid" data-v-760edfe6>`);
      _push(ssrRenderComponent(HoroscopeCard, { title: "ทำนายดวง" }, null, _parent));
      _push(ssrRenderComponent(HoroscopeCard, { title: "ทำนายฝัน" }, null, _parent));
      _push(ssrRenderComponent(HoroscopeCard, { title: "ไพ่ยิปซี" }, null, _parent));
      _push(ssrRenderComponent(HoroscopeCard, { title: "ดวงรายวัน" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(ResultTable, null, null, _parent));
      _push(ssrRenderComponent(LuckyNumberCard, null, null, _parent));
      _push(`</div><div class="right-content" data-v-760edfe6>`);
      _push(ssrRenderComponent(NewsSection, null, null, _parent));
      _push(ssrRenderComponent(TarotSection, null, null, _parent));
      _push(ssrRenderComponent(CommunitySection, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/home/Home.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Desktophome = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-760edfe6"]]);
const _sfc_main$6 = {
  __name: "MobileSlidehome",
  __ssrInlineRender: true,
  props: {
    mainNews: {
      type: Object,
      required: true
    },
    sideNews: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const newsList = computed(() => {
      return props.mainNews ? [props.mainNews, ...props.sideNews] : props.sideNews;
    });
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("th-TH");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7b63b8e6><div class="" data-v-7b63b8e6><div class="imgcard" data-v-7b63b8e6><div class="d-justi header" data-v-7b63b8e6><div class="text-top" data-v-7b63b8e6><h1 data-v-7b63b8e6>ข่าวใหม่วันนี้</h1></div><div class="text-top-date" data-v-7b63b8e6>${ssrInterpolate(unref(today))}</div></div><div class="content-left" data-v-7b63b8e6>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(Pagination)],
        "slides-per-view": 1,
        loop: true,
        autoplay: { delay: 2e4, pauseOnMouseEnter: true },
        pagination: { clickable: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(newsList.value, (item, index2) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="main-news" data-v-7b63b8e6${_scopeId2}><div class="news-image" data-v-7b63b8e6${_scopeId2}><img class="img-new"${ssrRenderAttr("src", item.image || "https://via.placeholder.com/300x200")} data-v-7b63b8e6${_scopeId2}></div><div class="news-info" data-v-7b63b8e6${_scopeId2}><span class="category" data-v-7b63b8e6${_scopeId2}>${ssrInterpolate(item.category)}</span><h2 class="title" data-v-7b63b8e6${_scopeId2}>${ssrInterpolate(item.title)}</h2></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "main-news" }, [
                        createVNode("div", { class: "news-image" }, [
                          createVNode("img", {
                            class: "img-new",
                            src: item.image || "https://via.placeholder.com/300x200"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "news-info" }, [
                          createVNode("span", { class: "category" }, toDisplayString(item.category), 1),
                          createVNode("h2", { class: "title" }, toDisplayString(item.title), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(newsList.value, (item, index2) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "main-news" }, [
                      createVNode("div", { class: "news-image" }, [
                        createVNode("img", {
                          class: "img-new",
                          src: item.image || "https://via.placeholder.com/300x200"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "news-info" }, [
                        createVNode("span", { class: "category" }, toDisplayString(item.category), 1),
                        createVNode("h2", { class: "title" }, toDisplayString(item.title), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="content-right" data-v-7b63b8e6><!--[-->`);
      ssrRenderList(__props.sideNews, (item, index2) => {
        _push(`<div class="side-item" data-v-7b63b8e6><div class="thumb" data-v-7b63b8e6><img class="img"${ssrRenderAttr("src", item.image || "https://via.placeholder.com/150x100")} data-v-7b63b8e6></div><div class="text" data-v-7b63b8e6><div class="side-title" data-v-7b63b8e6>${ssrInterpolate(item.title)}</div><div class="d-justi" data-v-7b63b8e6><span class="time" data-v-7b63b8e6>${ssrInterpolate(item.time)}</span><span class="time-col" data-v-7b63b8e6>${ssrInterpolate(item.category)}</span></div></div></div>`);
      });
      _push(`<!--]--></div><div class="d-center" data-v-7b63b8e6><div class="addtext" data-v-7b63b8e6>ดูเพิ่มเติม</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/Slidehome.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Slidehome = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7b63b8e6"]]);
const _imports_0$2 = publicAssetsURL("/frame/Avatar.png");
const _imports_1$3 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21031_2618)'%3e%3cpath%20d='M8.47461%204.55502L15.5247%2012.4751L8.47461%2020.395'%20stroke='%23008F6C'%20stroke-width='1.5'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21031_2618'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$5 = {
  __name: "MobileResultBox",
  __ssrInlineRender: true,
  setup(__props) {
    const lottoResult = ref({
      date: "17 มกราคม 2569",
      reward1: "952500",
      front3: ["022", "351"],
      back3: ["169", "456"],
      back2: "00"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lotto-check" }, _attrs))} data-v-30cc00b7><div class="lotto-box" data-v-30cc00b7><div class="bg-col" data-v-30cc00b7><h3 data-v-30cc00b7><div class="box-top" data-v-30cc00b7><img${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-30cc00b7> <span class="text-top" data-v-30cc00b7>ผลสลากกินแบ่งรัฐบาล</span></div></h3><div class="lotto-date" data-v-30cc00b7><span data-v-30cc00b7>ผลสลากฯ ${ssrInterpolate(lottoResult.value.date)}</span></div></div><div class="reward-one" data-v-30cc00b7><div class="label" data-v-30cc00b7>รางวัลที่ 1</div><div class="" data-v-30cc00b7>รางวัลละ 6,000,000 บาท</div><div class="number-main" data-v-30cc00b7>${ssrInterpolate(lottoResult.value.reward1)}</div></div><div class="reward-row" data-v-30cc00b7><div class="reward-col" data-v-30cc00b7><div class="label" data-v-30cc00b7>เลขหน้า 3 ตัว</div><div class="" data-v-30cc00b7>2 รางวัลๆ ละ 4,000 บาท</div><div class="d-flex-box" data-v-30cc00b7><!--[-->`);
      ssrRenderList(lottoResult.value.front3, (num, i) => {
        _push(`<div class="number" data-v-30cc00b7>${ssrInterpolate(num)}</div>`);
      });
      _push(`<!--]--></div></div><div class="reward-col" data-v-30cc00b7><div class="label" data-v-30cc00b7>เลขท้าย 3 ตัว</div><div class="" data-v-30cc00b7>2 รางวัลๆ ละ 4,000 บาท</div><div class="d-flex-box" data-v-30cc00b7><!--[-->`);
      ssrRenderList(lottoResult.value.back3, (num, i) => {
        _push(`<div class="number" data-v-30cc00b7>${ssrInterpolate(num)}</div>`);
      });
      _push(`<!--]--></div></div></div><div data-v-30cc00b7><div class="reward-col" data-v-30cc00b7><div class="label" data-v-30cc00b7>เลขท้าย 2 ตัว</div><div class="" data-v-30cc00b7>รางวัลละ 2,000 บาท</div><div class="number big" data-v-30cc00b7>${ssrInterpolate(lottoResult.value.back2)}</div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "lotto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="bt-next" data-v-30cc00b7${_scopeId}>ดูเพิ่มเติม <img${ssrRenderAttr("src", _imports_1$3)} alt="" data-v-30cc00b7${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "bt-next" }, [
                createTextVNode("ดูเพิ่มเติม "),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/ResultBox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ResultBox = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-30cc00b7"]]);
const _imports_0$1 = publicAssetsURL("/frame/Star.png");
const _imports_1$2 = publicAssetsURL("/icon/search.svg");
const _sfc_main$4 = {
  __name: "MobileResultLotto",
  __ssrInlineRender: true,
  setup(__props) {
    const lottoType = [
      { label: "🇹🇭 หวยไทย", value: "thai" },
      { label: "🇱🇦 หวยลาว", value: "lao" }
    ];
    const lottoDate = [
      { label: "16 พฤศจิกายน 2568", value: "2025-11-16" },
      { label: "1 พฤศจิกายน 2568", value: "2025-11-01" }
    ];
    const form = reactive({
      type: "thai",
      date: "2025-11-16",
      number1: "",
      number2: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lotto-check" }, _attrs))} data-v-d408ebc7><div class="lotto-box" data-v-d408ebc7><div class="bg-col" data-v-d408ebc7><div class="text-top" data-v-d408ebc7><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-d408ebc7>ตรวจผลหวย<img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-d408ebc7></div></div><div class="row-select" data-v-d408ebc7><div class="row-input" data-v-d408ebc7><div class="field-top" data-v-d408ebc7><label data-v-d408ebc7>รูปแบบหวย</label><select data-v-d408ebc7><!--[-->`);
      ssrRenderList(lottoType, (item) => {
        _push(`<option${ssrRenderAttr("value", item.value)} data-v-d408ebc7${ssrIncludeBooleanAttr(Array.isArray(form.type) ? ssrLooseContain(form.type, item.value) : ssrLooseEqual(form.type, item.value)) ? " selected" : ""}>${ssrInterpolate(item.label)}</option>`);
      });
      _push(`<!--]--></select></div><div class="field" data-v-d408ebc7><label data-v-d408ebc7>งวดวันที่</label><select data-v-d408ebc7><!--[-->`);
      ssrRenderList(lottoDate, (item) => {
        _push(`<option${ssrRenderAttr("value", item.value)} data-v-d408ebc7${ssrIncludeBooleanAttr(Array.isArray(form.date) ? ssrLooseContain(form.date, item.value) : ssrLooseEqual(form.date, item.value)) ? " selected" : ""}>${ssrInterpolate(item.label)}</option>`);
      });
      _push(`<!--]--></select></div><input type="text"${ssrRenderAttr("value", form.number1)} placeholder="กรอกเลขหวย ใบที่ 1" data-v-d408ebc7><input type="text"${ssrRenderAttr("value", form.number2)} placeholder="กรอกเลขหวย ใบที่ 2" data-v-d408ebc7></div><button class="btn-check" data-v-d408ebc7><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-d408ebc7> ตรวจผลรางวัล</button></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/ResultLotto.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ResultLotto = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d408ebc7"]]);
const _imports_1$1 = publicAssetsURL("/frame/magic-ball.png");
const _imports_2$1 = publicAssetsURL("/frame/daily.png");
const _imports_3 = publicAssetsURL("/frame/dailys.png");
const _imports_4 = publicAssetsURL("/frame/dailysd.png");
const _imports_5 = publicAssetsURL("/frame/tarot.png");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lotto-check" }, _attrs))} data-v-701589b7><div class="lotto-box" data-v-701589b7><div class="text-top" data-v-701589b7><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-701589b7>เช็คดวง<img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-701589b7></div><div class="pd-box" data-v-701589b7><div class="tatort-horo" data-v-701589b7><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-701589b7>ดูดวง</div><div class="box-img" data-v-701589b7><div class="horo-boxd" data-v-701589b7><img class="date-img"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-701589b7>รายวัน</div><div class="horo-boxd" data-v-701589b7><img class="date-img"${ssrRenderAttr("src", _imports_3)} alt="" data-v-701589b7>รายวัน</div><div class="horo-boxd" data-v-701589b7><img class="date-img"${ssrRenderAttr("src", _imports_4)} alt="" data-v-701589b7>รายวัน</div></div><div class="tatort-horo" data-v-701589b7><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-701589b7>ดูไพ่ยิปซี</div><div class="box-img" data-v-701589b7><div class="horo-boxd" data-v-701589b7><img class="date-img"${ssrRenderAttr("src", _imports_2$1)} alt="" data-v-701589b7>รายวัน</div><div class="horo-boxd" data-v-701589b7><img class="date-img"${ssrRenderAttr("src", _imports_3)} alt="" data-v-701589b7>รายวัน</div><div class="horo-boxd" data-v-701589b7><img class="date-img"${ssrRenderAttr("src", _imports_4)} alt="" data-v-701589b7>รายวัน</div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "lotto",
    class: "abox"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="bt-next" data-v-701589b7${_scopeId}>ดูดวงเพิ่มเติม </span>`);
      } else {
        return [
          createVNode("span", { class: "bt-next" }, "ดูดวงเพิ่มเติม ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/ResultHoro.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ResultHoro = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-701589b7"]]), { __name: "MobileResultHoro" });
const _imports_0 = publicAssetsURL("/frame/Starblue.png");
const _imports_1 = publicAssetsURL("/icon/number.png");
const _imports_2 = publicAssetsURL("/icon/starleft.svg");
const gridcall = publicAssetsURL("/icon/call.png");
const griddream = publicAssetsURL("/icon/dream.png");
const gridbirthday = publicAssetsURL("/icon/birthday.png");
const _sfc_main$2 = {
  __name: "MobileResultAi",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMenu = ref(1);
    const menuList = [
      { id: 1, title: "วิเคราะห์เลขที่มี", img: _imports_1 },
      { id: 2, title: "เลขจากเบอร์โทร", img: gridcall },
      { id: 3, title: "เลขจากความฝัน", img: griddream },
      { id: 4, title: "เลขจากวันเกิด", img: gridbirthday }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lotto-check" }, _attrs))} data-v-d8d71077><div class="lotto-box" data-v-d8d71077><div class="text-top" data-v-d8d71077><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d8d71077>วิเคราะห์ด้วย AI<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d8d71077></div><div class="pd-box" data-v-d8d71077><div class="box-img" data-v-d8d71077><!--[-->`);
      ssrRenderList(menuList, (item) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(activeMenu) === item.id }, "item"])}" data-v-d8d71077><div class="icon" data-v-d8d71077><img${ssrRenderAttr("src", item.img)} data-v-d8d71077></div><div class="text" data-v-d8d71077>${ssrInterpolate(item.title)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="row-input" data-v-d8d71077><label data-v-d8d71077><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-d8d71077> วิเคราะห์เลขที่มี</label><input type="text" placeholder="กรอกเลขหวย ใบที่ 1" data-v-d8d71077></div><div class="more" data-v-d8d71077><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-d8d71077> วิเคราะห์ด้วย AI</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/ResultAi.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ResultAi = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d8d71077"]]);
const _sfc_main$1 = {
  __name: "MobileHome",
  __ssrInlineRender: true,
  setup(__props) {
    const mainNews = {
      title: 'โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67 "เลขเด็ดงวดนี้" 16/9/67"เลขเด็ดงวดนี้" 16/9/67โค้งสุดท้ายหวย "เลขเด็ดงวดนี้" 16/9/67 "เลขเด็ดงวดนี้" 16/9/67"เลขเด็ดงวดนี้" 16/9/67',
      category: "ข่าวหวย",
      image: "https://picsum.photos/800/400"
    };
    const sideNews = [
      {
        title: "รวยแล้วเฮงอีก รับกลับ บ้านหลังงามออกไปเฮงอีก รับกลับ บ้านหลังงามออกไป",
        image: "https://picsum.photos/500/400",
        time: "16 ชั่วโมงก่อน",
        category: "ข่าวหวย"
      },
      {
        title: "เลขเด็ดงวดนี้มาแรงเฮงอีก รับกลับ บ้านหลังงามออกไปเฮงอีก รับกลับ บ้านหลังงามออกไป",
        image: "https://picsum.photos/600/400",
        time: "10 ชั่วโมงก่อน",
        category: "ข่าวหวย"
      },
      {
        title: "เลขเด็ดงวดนี้มาแรง",
        image: "https://picsum.photos/700/400",
        time: "10 ชั่วโมงก่อน",
        category: "ข่าวหวย"
      },
      {
        title: "เลขเด็ดงวดนี้มาแรง",
        image: "https://picsum.photos/900/400",
        time: "10 ชั่วโมงก่อน",
        category: "ข่าวหวย"
      }
    ];
    const { $axios } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-d923b55d><div class="home-box" data-v-d923b55d><section class="mobile-hero" data-v-d923b55d><div class="hero-label" data-v-d923b55d>Sarahuay Today</div><h1 data-v-d923b55d>เช็กผลหวย เลขเด็ด และข่าวใหม่</h1><p data-v-d923b55d>รวมข้อมูลประจำวันให้อ่านง่ายบนมือถือ</p></section><div class="section-shell" data-v-d923b55d>`);
      _push(ssrRenderComponent(Slidehome, {
        mainNews,
        sideNews
      }, null, _parent));
      _push(`</div><div class="quick-grid" data-v-d923b55d>`);
      _push(ssrRenderComponent(ResultBox, null, null, _parent));
      _push(ssrRenderComponent(ResultLotto, null, null, _parent));
      _push(`</div><div class="quick-grid" data-v-d923b55d>`);
      _push(ssrRenderComponent(ResultHoro, null, null, _parent));
      _push(ssrRenderComponent(ResultAi, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/home/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Mobilehome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d923b55d"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const resultLayout = computed(() => mainStore.resultLayout);
    const pageSeo = ref({
      home: {
        title: "หน้าแรก Sarahuay",
        description: "เช็กผลหวยล่าสุด พร้อมสถิติย้อนหลัง"
      }
    });
    useSeoMeta({
      title: pageSeo.value.home.title,
      description: pageSeo.value.home.description,
      ogTitle: pageSeo.value.home.title,
      ogDescription: pageSeo.value.home.description,
      twitterTitle: pageSeo.value.home.title,
      twitterDescription: pageSeo.value.home.description
    });
    const seoConfig = {
      schema: {
        newsArticle: {
          publisherName: "Sarahuay Homepage",
          publisherLogo: "https://sarahuay.com/logo.png",
          authorName: "Admin"
        }
      }
    };
    {
      useHead({
        script: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: pageSeo.value.home.title,
              description: pageSeo.value.home.description,
              datePublished: "2026-05-12",
              dateModified: "2026-05-12",
              author: {
                "@type": "Person",
                name: seoConfig.schema.newsArticle.authorName
              },
              publisher: {
                "@type": "Organization",
                name: seoConfig.schema.newsArticle.publisherName,
                logo: {
                  "@type": "ImageObject",
                  url: seoConfig.schema.newsArticle.publisherLogo
                }
              }
            })
          }
        ]
      });
    }
    const route = useRoute$1();
    const canonicalUrl = `https://sarahuay.com${route.path}`;
    {
      useHead({
        link: [
          {
            rel: "canonical",
            href: canonicalUrl
          }
        ]
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "index-page" }, _attrs))} data-v-e7a9257e>`);
      if (resultLayout.value === "mobile") {
        _push(`<div class="layout-wrapper mobile-layout" data-v-e7a9257e>`);
        _push(ssrRenderComponent(Mobilehome, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container layout-wrapper desktop-layout" data-v-e7a9257e>`);
        _push(ssrRenderComponent(Desktophome, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7a9257e"]]);

export { index as default };
//# sourceMappingURL=index-DlEjCZ6j.mjs.map
