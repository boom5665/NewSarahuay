import { computed, ref, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CcHW_VpF.mjs';
import { _ as _sfc_main$3 } from './ImageCard-B_h1vW5r.mjs';
import { _ as _export_sfc, g as useSeoMeta } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'perfect-debounce';
import '@vue/shared';
import 'vue-i18n';
import 'vue-lazyload';

const _sfc_main$2 = {
  __name: "DesktopLotto",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMenu = ref("all");
    const selectedDate = ref("");
    const menuList = [
      { id: 1, name: "ข่าวทั้งหมด", value: "all" },
      { id: 2, name: "ข่าวล่าสุด", value: "latest" },
      { id: 3, name: "เลขเด็ด", value: "lucky" },
      { id: 4, name: "ข่าวหวย", value: "lotto" }
    ];
    const imgcardData = ref([
      {
        id: 1,
        category: "lotto",
        date: "2024-09-21",
        imgSrc: "https://picsum.photos/350/180?random=1",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
        taxt: "ข่าวหวย"
      },
      {
        id: 2,
        category: "lucky",
        date: "2024-09-20",
        imgSrc: "https://picsum.photos/350/180?random=9",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        taxt: "ข่าวหวย"
      },
      {
        id: 3,
        category: "latest",
        date: "2024-09-21",
        imgSrc: "https://picsum.photos/350/180?random=2",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
        taxt: "ดูดวง"
      },
      {
        id: 4,
        category: "lucky",
        date: "2024-09-20",
        imgSrc: "https://picsum.photos/350/180?random=3",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        taxt: "ข่าวหวย"
      }
    ]);
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1200);
    const filteredData = computed(() => {
      let data = imgcardData.value;
      if (activeMenu.value !== "all") {
        data = data.filter((item) => item.category === activeMenu.value);
      }
      if (selectedDate.value) {
        data = data.filter((item) => item.date === selectedDate.value);
      }
      return data;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-1c1b3220><div class="home-box" data-v-1c1b3220><div class="text-toplotto" data-v-1c1b3220>ข่าวหวยทั้งหมด</div><div class="top-bar" data-v-1c1b3220><div class="menu-tab" data-v-1c1b3220><!--[-->`);
      ssrRenderList(menuList, (menu) => {
        _push(`<div class="${ssrRenderClass(["tab-item", activeMenu.value === menu.value ? "active" : ""])}" data-v-1c1b3220>${ssrInterpolate(menu.name)}</div>`);
      });
      _push(`<!--]--></div><div class="date-filter" data-v-1c1b3220><input type="date"${ssrRenderAttr("value", selectedDate.value)} data-v-1c1b3220></div></div><div class="home-item" data-v-1c1b3220><!--[-->`);
      ssrRenderList(filteredData.value, (imgcard) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: imgcard.id,
          to: `/detailsnew/${imgcard.id}`,
          class: "news-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                obj: imgcard,
                loading: loading.value
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$3, {
                  obj: imgcard,
                  loading: loading.value
                }, null, 8, ["obj", "loading"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/lotto/Lotto.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Desktoplotto = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1c1b3220"]]);
const _sfc_main$1 = {
  __name: "MobileLotto",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMenu = ref("all");
    const selectedDate = ref("");
    const menuList = [
      { id: 1, name: "ข่าวทั้งหมด", value: "all" },
      { id: 2, name: "ข่าวล่าสุด", value: "latest" },
      { id: 3, name: "เลขเด็ด", value: "lucky" },
      { id: 4, name: "ข่าวหวย", value: "lotto" }
    ];
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1200);
    const imgcardData = ref([
      {
        id: 1,
        category: "lotto",
        date: "2024-09-21",
        imgSrc: "https://picsum.photos/350/180?random=1",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
        taxt: "ข่าวหวย"
      },
      {
        id: 2,
        category: "lucky",
        date: "2024-09-20",
        imgSrc: "https://picsum.photos/350/180?random=9",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        taxt: "ข่าวหวย"
      },
      {
        id: 3,
        category: "latest",
        date: "2024-09-21",
        imgSrc: "https://picsum.photos/350/180?random=2",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ",
        taxt: "ดูดวง"
      },
      {
        id: 4,
        category: "lucky",
        date: "2024-09-20",
        imgSrc: "https://picsum.photos/350/180?random=3",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        taxt: "ข่าวหวย"
      }
    ]);
    const filteredData = computed(() => {
      let data = imgcardData.value;
      if (activeMenu.value !== "all") {
        data = data.filter((item) => item.category === activeMenu.value);
      }
      if (selectedDate.value) {
        data = data.filter((item) => item.date === selectedDate.value);
      }
      return data;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-6deb4f95><div class="home-box" data-v-6deb4f95><div class="text-toplotto" data-v-6deb4f95><span data-v-6deb4f95>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`หน้าแรก`);
          } else {
            return [
              createTextVNode("หน้าแรก")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span> / <span data-v-6deb4f95>ข่าวหวยทั้งหมด</span></div><div class="top-bar" data-v-6deb4f95><div class="menu-wrapper" data-v-6deb4f95><div class="menu-tab" data-v-6deb4f95><!--[-->`);
      ssrRenderList(menuList, (menu) => {
        _push(`<div class="${ssrRenderClass(["tab-item", activeMenu.value === menu.value ? "active" : ""])}" data-v-6deb4f95>${ssrInterpolate(menu.name)}</div>`);
      });
      _push(`<!--]--></div></div><div class="date-btn" data-v-6deb4f95>📅</div><input type="date"${ssrRenderAttr("value", selectedDate.value)} class="date-input" data-v-6deb4f95></div><div class="home-item" data-v-6deb4f95><!--[-->`);
      ssrRenderList(filteredData.value, (imgcard) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: imgcard.id,
          to: `/detailsnew/${imgcard.id}`,
          class: "news-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                obj: imgcard,
                loading: loading.value
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$3, {
                  obj: imgcard,
                  loading: loading.value
                }, null, 8, ["obj", "loading"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/lotto/Lotto.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Mobilelotto = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6deb4f95"]]);
const _sfc_main = {
  __name: "lotto",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const resultLayout = computed(() => mainStore.resultLayout);
    const pageSeo = ref({
      home: {
        title: "หน้าหวย ล็อตโตรี ",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8666887a>`);
      if (unref(resultLayout) === "mobile") {
        _push(`<div class="layout-wrapper" data-v-8666887a>`);
        _push(ssrRenderComponent(Mobilelotto, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container layout-wrapper" data-v-8666887a>`);
        _push(ssrRenderComponent(Desktoplotto, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lotto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lotto = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8666887a"]]);

export { lotto as default };
//# sourceMappingURL=lotto-CID2v_hd.mjs.map
