import { _ as _export_sfc, b as useNuxtApp, i as __nuxt_component_0$1, f as defineStore } from './server.mjs';
import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const useAlertStore = defineStore("alert", {
  state: () => ({
    alertShow: false,
    alertStatus: "",
    alertTitle: "",
    alertDesc: ""
  }),
  actions: {
    setAlertShow(val) {
      this.alertShow = val;
    },
    setAlertStatus(val) {
      this.alertStatus = val;
    },
    setAlertTitle(val) {
      this.alertTitle = val;
    },
    setAlertDesc(val) {
      this.alertDesc = val;
    }
  }
});
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    useAlertStore();
    computed(() => mainStore.loadCounter);
    computed(() => mainStore.resultLayout);
    const { $magic } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-page" }, _attrs))} data-v-a8fbadb7>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8fbadb7"]]);

export { _default as default };
//# sourceMappingURL=default-Bmtrzw7l.mjs.map
