import { computed, unref, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './fi_145802-qpNjAyp0.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "DesktopReward",
  __ssrInlineRender: true,
  setup(__props) {
    const lottoType = ref("thai");
    const selectedDate = ref("");
    const number1 = ref("");
    const number2 = ref("");
    const number3 = ref("");
    const lottoResult = ref({
      date: "17 มกราคม 2569",
      prize1: "000000",
      front3: ["000 |", "000"],
      back3: ["000 |", "000"],
      last2: "00",
      near1: ["000000 |", "000000"],
      prize2: ["000000", "000000", "000000", "000000", "000000"],
      prize3: ["000000", "000000", "000000", "000000", "000000"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-8b83a2f2><div class="home-box" data-v-8b83a2f2><div class="lotto-layout" data-v-8b83a2f2><div data-v-8b83a2f2><div class="lotto-result" data-v-8b83a2f2><div class="result-header" data-v-8b83a2f2><div data-v-8b83a2f2><div class="title" data-v-8b83a2f2>ผลสลากกินแบ่งรัฐบาล</div><div class="date" data-v-8b83a2f2>งวดวันที่ ${ssrInterpolate(lottoResult.value.date)}</div></div><div class="result-header-right" data-v-8b83a2f2><div class="text-box" data-v-8b83a2f2><img class=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-8b83a2f2></div><div class="text-box" data-v-8b83a2f2><img class=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-8b83a2f2></div><div class="text-box" data-v-8b83a2f2><img class=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-8b83a2f2></div></div></div><div class="prize-block" data-v-8b83a2f2><div class="prize-title" data-v-8b83a2f2><div data-v-8b83a2f2>รางวัลที่ 1</div><div class="text-under" data-v-8b83a2f2>รางวัลละ 6,000,000 บาท</div></div><div class="big-number" data-v-8b83a2f2>${ssrInterpolate(lottoResult.value.prize1)}</div></div><div class="prize-row" data-v-8b83a2f2><div class="prize-item" data-v-8b83a2f2><div data-v-8b83a2f2><div data-v-8b83a2f2>เลขหน้า 3 ตัว</div><div class="text-under" data-v-8b83a2f2>2 รางวัลๆ ละ 4,000 บาท</div></div><div class="big-number" data-v-8b83a2f2>${ssrInterpolate(lottoResult.value.front3.join(" "))}</div></div><div class="prize-item" data-v-8b83a2f2><div data-v-8b83a2f2><div data-v-8b83a2f2>เลขท้าย 3 ตัว</div><div class="text-under" data-v-8b83a2f2>2 รางวัลๆ ละ 4,000 บาท</div></div><div class="big-number" data-v-8b83a2f2>${ssrInterpolate(lottoResult.value.back3.join(" "))}</div></div><div class="prize-item" data-v-8b83a2f2><div data-v-8b83a2f2><div data-v-8b83a2f2>เลขท้าย 2 ตัว</div><div class="text-under" data-v-8b83a2f2>1 รางวัลๆ ละ 2,000 บาท</div></div><div class="big-number" data-v-8b83a2f2>${ssrInterpolate(lottoResult.value.last2)}</div></div></div><div class="prize-block" data-v-8b83a2f2><div class="prize-title" data-v-8b83a2f2><div data-v-8b83a2f2> รางวัลข้างเคียงรางวัลที่ 1</div><div class="text-under" data-v-8b83a2f2>2 รางวัลๆ ละ 100,000 บาท</div></div><div class="big-number" data-v-8b83a2f2>${ssrInterpolate(lottoResult.value.near1.join(" "))}</div></div></div><div class="lotto-result" data-v-8b83a2f2><div class="prize-block" data-v-8b83a2f2><div class="prize-title" data-v-8b83a2f2>รางวัลที่ 2 <div class="text-under" data-v-8b83a2f2>5 รางวัลๆ ละ 200,000 บาท</div></div><div class="grid-number" data-v-8b83a2f2><!--[-->`);
      ssrRenderList(lottoResult.value.prize2, (num, index) => {
        _push(`<span data-v-8b83a2f2>${ssrInterpolate(num)}</span>`);
      });
      _push(`<!--]--></div></div><div class="prize-block" data-v-8b83a2f2><div class="prize-title" data-v-8b83a2f2>รางวัลที่ 3 <div class="text-under" data-v-8b83a2f2>10 รางวัลๆ ละ 200,000 บาท</div></div><div class="grid-number" data-v-8b83a2f2><!--[-->`);
      ssrRenderList(lottoResult.value.prize3, (num, index) => {
        _push(`<span data-v-8b83a2f2>${ssrInterpolate(num)}</span>`);
      });
      _push(`<!--]--></div></div></div></div><div class="lotto-check" data-v-8b83a2f2><div class="check-title" data-v-8b83a2f2>ตรวจผลหวย</div><div class="box-text" data-v-8b83a2f2>รูปแบบหวย</div><select data-v-8b83a2f2><option value="thai" data-v-8b83a2f2${ssrIncludeBooleanAttr(Array.isArray(lottoType.value) ? ssrLooseContain(lottoType.value, "thai") : ssrLooseEqual(lottoType.value, "thai")) ? " selected" : ""}>หวยไทย</option></select><div class="box-right" data-v-8b83a2f2><div class="box-text" data-v-8b83a2f2>เลือกงวดประจำวันที่</div><select data-v-8b83a2f2><option value="2025-01-16" data-v-8b83a2f2${ssrIncludeBooleanAttr(Array.isArray(selectedDate.value) ? ssrLooseContain(selectedDate.value, "2025-01-16") : ssrLooseEqual(selectedDate.value, "2025-01-16")) ? " selected" : ""}>16 พฤศจิกายน 2567</option></select><input${ssrRenderAttr("value", number1.value)} placeholder="กรอกเลขของคุณ ใบที่ 1" data-v-8b83a2f2><input${ssrRenderAttr("value", number2.value)} placeholder="กรอกเลขของคุณ ใบที่ 2" data-v-8b83a2f2><input${ssrRenderAttr("value", number3.value)} placeholder="กรอกเลขของคุณ ใบที่ 3" data-v-8b83a2f2></div><button class="check-btn" data-v-8b83a2f2>🔍 ตรวจผลรางวัล</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/reward/Reward.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Desktoplotto = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8b83a2f2"]]);
const _sfc_main$1 = {
  __name: "MobileReward",
  __ssrInlineRender: true,
  setup(__props) {
    const lottoType = ref("thai");
    const selectedDate = ref("");
    const number1 = ref("");
    const number2 = ref("");
    const number3 = ref("");
    const lottoResult = ref({
      date: "17 มกราคม 2569",
      prize1: "000000",
      front3: ["000"],
      back3: ["000"],
      last2: "00",
      near1: ["000", "000"],
      prize2: ["000000", "000000", "000000", "000000", "000000"],
      prize3: [
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000",
        "000000"
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-596b1415><div class="home-box" data-v-596b1415><div class="lotto-layout" data-v-596b1415><div class="lotto-check" data-v-596b1415><div class="check-title" data-v-596b1415>ตรวจผลหวย</div><div class="box-text" data-v-596b1415>รูปแบบหวย</div><select data-v-596b1415><option value="thai" data-v-596b1415${ssrIncludeBooleanAttr(Array.isArray(lottoType.value) ? ssrLooseContain(lottoType.value, "thai") : ssrLooseEqual(lottoType.value, "thai")) ? " selected" : ""}>หวยไทย</option></select><div class="box-right" data-v-596b1415><div class="box-text" data-v-596b1415>เลือกงวดประจำวันที่</div><select data-v-596b1415><option value="2025-01-16" data-v-596b1415${ssrIncludeBooleanAttr(Array.isArray(selectedDate.value) ? ssrLooseContain(selectedDate.value, "2025-01-16") : ssrLooseEqual(selectedDate.value, "2025-01-16")) ? " selected" : ""}>16 พฤศจิกายน 2567</option></select><input${ssrRenderAttr("value", number1.value)} placeholder="กรอกเลขของคุณ ใบที่ 1" data-v-596b1415><input${ssrRenderAttr("value", number2.value)} placeholder="กรอกเลขของคุณ ใบที่ 2" data-v-596b1415><input${ssrRenderAttr("value", number3.value)} placeholder="กรอกเลขของคุณ ใบที่ 3" data-v-596b1415></div><button class="check-btn" data-v-596b1415>🔍 ตรวจผลรางวัล</button></div><div data-v-596b1415><div class="lotto-result" data-v-596b1415><div class="result-header" data-v-596b1415><div data-v-596b1415><div class="title" data-v-596b1415>ผลสลากกินแบ่งรัฐบาล</div><div class="date" data-v-596b1415>งวดวันที่ ${ssrInterpolate(lottoResult.value.date)}</div></div><div class="result-header-right" data-v-596b1415><div class="text-box" data-v-596b1415><img class=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-596b1415></div><div class="text-box" data-v-596b1415><img class=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-596b1415></div><div class="text-box" data-v-596b1415><img class=""${ssrRenderAttr("src", _imports_0)} alt="" data-v-596b1415></div></div></div><div class="prize-block" data-v-596b1415><div class="prize-title" data-v-596b1415><div data-v-596b1415>รางวัลที่ 1</div><div class="text-under" data-v-596b1415>รางวัลละ 6,000,000 บาท</div></div><div class="big-number" data-v-596b1415>${ssrInterpolate(lottoResult.value.prize1)}</div></div><div class="prize-row" data-v-596b1415><div class="prize-item" data-v-596b1415><div data-v-596b1415>เลขหน้า 3 ตัว</div><div class="text-under" data-v-596b1415>2 รางวัลๆ ละ 4,000 บาท</div><div class="big-number" data-v-596b1415>${ssrInterpolate(lottoResult.value.front3.join(" "))}</div></div><div class="prize-item" data-v-596b1415><div data-v-596b1415>เลขท้าย 3 ตัว</div><div class="text-under" data-v-596b1415>2 รางวัลๆ ละ 4,000 บาท</div><div class="big-number" data-v-596b1415>${ssrInterpolate(lottoResult.value.back3.join(" "))}</div></div></div><div class="prize-item" data-v-596b1415><div data-v-596b1415>เลขท้าย 2 ตัว</div><div class="text-under" data-v-596b1415>2 รางวัลๆ ละ 2,000 บาท</div><div class="big-number" data-v-596b1415>${ssrInterpolate(lottoResult.value.last2)}</div></div><div class="prize-block" data-v-596b1415><div class="prize-title" data-v-596b1415> รางวัลข้างเคียงรางวัลที่ 1 <div class="text-under" data-v-596b1415>2 รางวัลๆ ละ 100,000 บาท</div></div><div class="big-number" data-v-596b1415>${ssrInterpolate(lottoResult.value.near1.join(" "))}</div></div></div><div class="lotto-result" data-v-596b1415><div class="prize-block" data-v-596b1415><div class="prize-title" data-v-596b1415>รางวัลที่ 2</div><div class="text-under" data-v-596b1415>5 รางวัลๆ ละ 200,000 บาท</div><div class="grid-number" data-v-596b1415><!--[-->`);
      ssrRenderList(lottoResult.value.prize2, (num, index) => {
        _push(`<span data-v-596b1415>${ssrInterpolate(num)}</span>`);
      });
      _push(`<!--]--></div></div><div class="prize-block" data-v-596b1415><div class="prize-title" data-v-596b1415>รางวัลที่ 3</div><div class="text-under" data-v-596b1415>10 รางวัลๆ ละ 200,000 บาท</div><div class="grid-number" data-v-596b1415><!--[-->`);
      ssrRenderList(lottoResult.value.prize3, (num, index) => {
        _push(`<span data-v-596b1415>${ssrInterpolate(num)}</span>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/reward/Reward.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Mobilelotto = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-596b1415"]]);
const _sfc_main = {
  __name: "reward",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const resultLayout = computed(() => mainStore.resultLayout);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a58943f7>`);
      if (unref(resultLayout) === "mobile") {
        _push(`<div class="layout-wrapper" data-v-a58943f7>`);
        _push(ssrRenderComponent(Mobilelotto, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container layout-wrapper" data-v-a58943f7>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reward.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reward = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a58943f7"]]);

export { reward as default };
//# sourceMappingURL=reward-C6zbq40m.mjs.map
