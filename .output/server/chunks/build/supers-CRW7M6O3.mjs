import { computed, unref, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './fi_145802-qpNjAyp0.mjs';
import { _ as _sfc_main$6 } from './ImageCard-B_h1vW5r.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useMainStore } from './index-DWubOjH1.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'perfect-debounce';
import '@vue/shared';
import 'vue-i18n';
import 'vue-lazyload';

const _sfc_main$5 = {
  __name: "DesktopTarot",
  __ssrInlineRender: true,
  setup(__props) {
    const tarotType = ref("daily");
    const tarotMenu = [
      { key: "daily", label: "รายวัน" },
      { key: "monthly", label: "รายเดือน" },
      { key: "work", label: "การงาน" },
      { key: "money", label: "การเงิน" },
      { key: "love", label: "ความรัก" },
      { key: "luck", label: "โชคลาภ" },
      { key: "health", label: "สุขภาพ" },
      { key: "study", label: "การเรียน" }
    ];
    const tarotContent = {
      daily: {
        title: "ดูดวงไพ่ยิปซี รายวัน",
        sub: 'เลือกไพ่ 1 ใบ เพื่อเปิดคำทำนาย "ทำนองของดวง"'
      },
      monthly: {
        title: "ดูดวงไพ่ยิปซี รายเดือน",
        sub: "ดูแนวโน้มชีวิตของคุณในเดือนนี้"
      },
      work: {
        title: "ดูดวงการงาน",
        sub: "ไพ่จะบอกทิศทางเรื่องงานของคุณ"
      },
      money: {
        title: "ดูดวงการเงิน",
        sub: "แนวโน้มรายรับรายจ่าย"
      },
      love: {
        title: "ดูดวงความรัก",
        sub: "สถานะความสัมพันธ์ของคุณ"
      },
      luck: {
        title: "ดูดวงโชคลาภ",
        sub: "โอกาสและดวงเสี่ยงโชค"
      },
      health: {
        title: "ดูดวงสุขภาพ",
        sub: "แนวโน้มสุขภาพช่วงนี้"
      },
      study: {
        title: "ดูดวงการเรียน",
        sub: "แนวโน้มด้านการศึกษา"
      }
    };
    const currentContent = computed(() => tarotContent[tarotType.value]);
    const showResult = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-555fc978>`);
      if (!showResult.value) {
        _push(`<div class="tarot-page" data-v-555fc978><div class="tarot-title" data-v-555fc978> ดูดวงไพ่ยิปซี <div class="sub" data-v-555fc978>เลือกสำรับที่ต้องการดู</div></div><div class="tarot-typepc" data-v-555fc978><!--[-->`);
        ssrRenderList(tarotMenu, (item) => {
          _push(`<div class="${ssrRenderClass([{ active: tarotType.value === item.key }, "type-card"])}" data-v-555fc978><img${ssrRenderAttr("src", _imports_0)} data-v-555fc978><span data-v-555fc978>${ssrInterpolate(item.label)}</span></div>`);
        });
        _push(`<!--]--></div><div class="tarot-result" data-v-555fc978><div class="result-title" data-v-555fc978>${ssrInterpolate(currentContent.value.title)}</div><div class="result-sub" data-v-555fc978>${ssrInterpolate(currentContent.value.sub)}</div><div class="card-preview" data-v-555fc978><div class="card-slot" data-v-555fc978></div></div><div class="draw-action" data-v-555fc978><button class="btn" data-v-555fc978>สับไพ่</button><button class="btn" data-v-555fc978>จั่วไพ่</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showResult.value) {
        _push(`<div class="result-page" data-v-555fc978><div class="result-box" data-v-555fc978><div class="back-btn" data-v-555fc978>← ย้อนกลับ</div><div class="result-header" data-v-555fc978> ชื่อ-สกุล : สมชาย มีทรัพย์ <br data-v-555fc978> เกิดวันที่ 20 พฤศจิกายน 2533 เวลา 09:00 </div><div class="result-content" data-v-555fc978><h3 data-v-555fc978>คำทำนายดวง</h3><p data-v-555fc978> ไพ่ที่คุณได้คือ ไพ่ฤาษี เป็นไพ่แห่งสติปัญญา ช่วงนี้เหมาะกับการวางแผนชีวิตและใช้เหตุผล </p><h3 data-v-555fc978>คำแนะนำการดำเนินชีวิต</h3><p data-v-555fc978>ช่วงนี้ควรใช้ความรอบคอบและอย่าตัดสินใจเร็วเกินไป</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/Tarot.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Tarot$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-555fc978"]]);
const _sfc_main$4 = {
  __name: "DesktopSupers",
  __ssrInlineRender: true,
  setup(__props) {
    const imgcardData = ref([
      {
        id: 1,
        imgSrc: "https://picsum.photos/350/180?random=1",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรงราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแ",
        date: "21 ก.ย. 67",
        taxt: "ข่าวหวย"
      },
      {
        id: 2,
        imgSrc: "https://picsum.photos/350/180?random=2",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรง",
        date: "21 ก.ย. 67",
        taxt: "ดูดวง"
      },
      {
        id: 3,
        imgSrc: "https://picsum.photos/350/180?random=3",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        date: "21 ก.ย. 67",
        taxt: "ข่าวหวย"
      },
      {
        id: 4,
        imgSrc: "https://picsum.photos/350/180?random=4",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        date: "21 ก.ย. 67",
        taxt: "ไพ่ยิปซี"
      }
    ]);
    const tab = ref("fortune");
    const fortuneType = ref("daily");
    const showResult = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-3ad6dc6c><div class="home-box" data-v-3ad6dc6c><div class="tab-menu" data-v-3ad6dc6c><div class="${ssrRenderClass([{ active: tab.value === "fortune" }, "tab"])}" data-v-3ad6dc6c><img${ssrRenderAttr("src", _imports_0)} data-v-3ad6dc6c> ดูดวง </div><div class="${ssrRenderClass([{ active: tab.value === "tarot" }, "tab"])}" data-v-3ad6dc6c><img${ssrRenderAttr("src", _imports_0)} data-v-3ad6dc6c> ไพ่ยิปซี </div></div>`);
      if (tab.value === "fortune" && !showResult.value) {
        _push(`<div data-v-3ad6dc6c><div class="fortune-box" data-v-3ad6dc6c><div class="section-title" data-v-3ad6dc6c> ทำนายดวงของคุณช่วงนี้ <div class="sub-title" data-v-3ad6dc6c>เลือกหมวดที่ต้องการดู</div></div><div class="fortune-type" data-v-3ad6dc6c><div class="${ssrRenderClass([{ active: fortuneType.value === "daily" }, "type-card"])}" data-v-3ad6dc6c><img${ssrRenderAttr("src", _imports_0)} data-v-3ad6dc6c> รายวัน </div><div class="${ssrRenderClass([{ active: fortuneType.value === "weekly" }, "type-card"])}" data-v-3ad6dc6c><img${ssrRenderAttr("src", _imports_0)} data-v-3ad6dc6c> รายสัปดาห์ </div><div class="${ssrRenderClass([{ active: fortuneType.value === "monthly" }, "type-card"])}" data-v-3ad6dc6c><img${ssrRenderAttr("src", _imports_0)} data-v-3ad6dc6c> รายเดือน </div></div><div class="form-grid" data-v-3ad6dc6c>`);
        if (fortuneType.value === "daily") {
          _push(`<!--[--><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>ชื่อ</label><input type="text" placeholder="สมชาย" data-v-3ad6dc6c></div><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>สกุล</label><input type="text" placeholder="มิตร" data-v-3ad6dc6c></div><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>วันเดือนปีเกิด</label><input type="date" data-v-3ad6dc6c></div><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>เวลาที่เกิด</label><div class="time-row" data-v-3ad6dc6c><input type="number" placeholder="12" data-v-3ad6dc6c><span data-v-3ad6dc6c>:</span><input type="number" placeholder="00" data-v-3ad6dc6c></div></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (fortuneType.value === "weekly") {
          _push(`<!--[--><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>ชื่อ</label><input type="text" placeholder="สมชาย" data-v-3ad6dc6c></div><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>วันเดือนปีเกิด</label><input type="date" data-v-3ad6dc6c></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (fortuneType.value === "monthly") {
          _push(`<!--[--><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>ชื่อ</label><input type="text" placeholder="สมชาย" data-v-3ad6dc6c></div><div class="input-group" data-v-3ad6dc6c><label data-v-3ad6dc6c>เดือนที่ต้องการดู</label><input type="month" data-v-3ad6dc6c></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="note" data-v-3ad6dc6c> *เวลาที่เกิด หากไม่ทราบให้เลือกเวลาประมาณใกล้เคียงที่สุด </div><button class="submit-btn" data-v-3ad6dc6c>ทำนาย</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (tab.value === "fortune" && showResult.value) {
        _push(`<div class="result-page" data-v-3ad6dc6c><div class="result-box" data-v-3ad6dc6c><div class="back-btn" data-v-3ad6dc6c>← ย้อนกลับ</div><div class="result-header" data-v-3ad6dc6c> ชื่อ-สกุล : สมชาย มีทรัพย์ <br data-v-3ad6dc6c> เกิดวันที่ 20 พฤศจิกายน 2533 เวลา 09:00 </div><div class="result-content" data-v-3ad6dc6c><h3 data-v-3ad6dc6c>คำทำนายดวง</h3><p data-v-3ad6dc6c> ไพ่ที่คุณได้คือ ไพ่ฤาษี เป็นไพ่แห่งสติปัญญา ช่วงนี้เหมาะกับการวางแผนชีวิตและใช้เหตุผล </p><h3 data-v-3ad6dc6c>คำแนะนำการดำเนินชีวิต</h3><p data-v-3ad6dc6c>ช่วงนี้ควรใช้ความรอบคอบและอย่าตัดสินใจเร็วเกินไป</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (tab.value === "tarot") {
        _push(`<div data-v-3ad6dc6c>`);
        _push(ssrRenderComponent(Tarot$1, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="news-section" data-v-3ad6dc6c><div class="news-header" data-v-3ad6dc6c><div data-v-3ad6dc6c>ข่าวหวยใหม่วันนี้</div><div class="view-all" data-v-3ad6dc6c>ดูทั้งหมด</div></div><div class="home-item" data-v-3ad6dc6c><!--[-->`);
      ssrRenderList(imgcardData.value, (imgcard) => {
        _push(ssrRenderComponent(_sfc_main$6, {
          key: imgcard.id,
          icon: "flags/pingpong6.svg",
          obj: imgcard
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/supers/Supers.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Desktopsupers = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3ad6dc6c"]]);
const _sfc_main$3 = {
  __name: "MobileImageCard",
  __ssrInlineRender: true,
  props: {
    obj: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "imgcard" }, _attrs))} data-v-4bca1274><div class="imgcard-card" data-v-4bca1274><div class="imgcard-inner-card" data-v-4bca1274><div class="imgcard-inner-card-img" data-v-4bca1274><img${ssrRenderAttr("src", __props.obj.imgSrc)} data-v-4bca1274></div><div class="imgcard-inner-card-title" data-v-4bca1274><div class="group-text" data-v-4bca1274><span class="sub-title" data-v-4bca1274>${ssrInterpolate(__props.obj.subtitle)}</span></div></div></div><div class="date" data-v-4bca1274>${ssrInterpolate(__props.obj.date)} <span class="taxt" data-v-4bca1274>${ssrInterpolate(__props.obj.taxt)}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/ImageCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ImageCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4bca1274"]]);
const _sfc_main$2 = {
  __name: "MobileTarot",
  __ssrInlineRender: true,
  setup(__props) {
    const tarotType = ref("daily");
    const tarotMenu = [
      { key: "daily", label: "รายวัน" },
      { key: "monthly", label: "รายเดือน" },
      { key: "work", label: "การงาน" },
      { key: "money", label: "การเงิน" },
      { key: "love", label: "ความรัก" },
      { key: "luck", label: "โชคลาภ" },
      { key: "health", label: "สุขภาพ" },
      { key: "study", label: "การเรียน" }
    ];
    const tarotContent = {
      daily: {
        title: "ดูดวงไพ่ยิปซี รายวัน",
        sub: 'เลือกไพ่ 1 ใบ เพื่อเปิดคำทำนาย "ทำนองของดวง"'
      },
      monthly: {
        title: "ดูดวงไพ่ยิปซี รายเดือน",
        sub: "ดูแนวโน้มชีวิตของคุณในเดือนนี้"
      },
      work: {
        title: "ดูดวงการงาน",
        sub: "ไพ่จะบอกทิศทางเรื่องงานของคุณ"
      },
      money: {
        title: "ดูดวงการเงิน",
        sub: "แนวโน้มรายรับรายจ่าย"
      },
      love: {
        title: "ดูดวงความรัก",
        sub: "สถานะความสัมพันธ์ของคุณ"
      },
      luck: {
        title: "ดูดวงโชคลาภ",
        sub: "โอกาสและดวงเสี่ยงโชค"
      },
      health: {
        title: "ดูดวงสุขภาพ",
        sub: "แนวโน้มสุขภาพช่วงนี้"
      },
      study: {
        title: "ดูดวงการเรียน",
        sub: "แนวโน้มด้านการศึกษา"
      }
    };
    const currentContent = computed(() => tarotContent[tarotType.value]);
    const showResult = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7c867744>`);
      if (!showResult.value) {
        _push(`<div class="tarot-page" data-v-7c867744><div class="tarot-title" data-v-7c867744> ดูดวงไพ่ยิปซี <div class="sub" data-v-7c867744>เลือกสำรับที่ต้องการดู</div></div><div class="tarot-typemb" data-v-7c867744><!--[-->`);
        ssrRenderList(tarotMenu, (item) => {
          _push(`<div class="${ssrRenderClass([{ active: tarotType.value === item.key }, "type-card"])}" data-v-7c867744><img${ssrRenderAttr("src", _imports_0)} data-v-7c867744><span data-v-7c867744>${ssrInterpolate(item.label)}</span></div>`);
        });
        _push(`<!--]--></div><div class="tarot-result" data-v-7c867744><div class="result-title" data-v-7c867744>${ssrInterpolate(currentContent.value.title)}</div><div class="result-sub" data-v-7c867744>${ssrInterpolate(currentContent.value.sub)}</div><div class="card-preview" data-v-7c867744><div class="card-slot" data-v-7c867744></div></div><div class="draw-action" data-v-7c867744><button class="btn" data-v-7c867744>สับไพ่</button><button class="btn" data-v-7c867744>จั่วไพ่</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showResult.value) {
        _push(`<div class="result-page" data-v-7c867744><div class="result-box" data-v-7c867744><div class="back-btn" data-v-7c867744>← ย้อนกลับ</div><div class="result-header" data-v-7c867744> ชื่อ-สกุล : สมชาย มีทรัพย์ <br data-v-7c867744> เกิดวันที่ 20 พฤศจิกายน 2533 เวลา 09:00 </div><div class="result-content" data-v-7c867744><h3 data-v-7c867744>คำทำนายดวง</h3><p data-v-7c867744> ไพ่ที่คุณได้คือ ไพ่ฤาษี เป็นไพ่แห่งสติปัญญา ช่วงนี้เหมาะกับการวางแผนชีวิตและใช้เหตุผล </p><h3 data-v-7c867744>คำแนะนำการดำเนินชีวิต</h3><p data-v-7c867744>ช่วงนี้ควรใช้ความรอบคอบและอย่าตัดสินใจเร็วเกินไป</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/Tarot.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Tarot = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7c867744"]]);
const _sfc_main$1 = {
  __name: "MobileSupers",
  __ssrInlineRender: true,
  setup(__props) {
    const imgcardData = ref([
      {
        id: 1,
        imgSrc: "https://picsum.photos/350/180?random=1",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรงราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแ",
        date: "21 ก.ย. 67",
        taxt: "ข่าวหวย"
      },
      {
        id: 2,
        imgSrc: "https://picsum.photos/350/180?random=2",
        subtitle: "รวม 100 แคปชั่นทองแพง ราคาทอง กวนๆ ฮาๆ โพสต์เรียกไลก์ในวันที่ทองพุ่งแรง",
        date: "21 ก.ย. 67",
        taxt: "ดูดวง"
      },
      {
        id: 3,
        imgSrc: "https://picsum.photos/350/180?random=3",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        date: "21 ก.ย. 67",
        taxt: "ข่าวหวย"
      },
      {
        id: 4,
        imgSrc: "https://picsum.photos/350/180?random=4",
        subtitle: "ออกผลทุก 60 นาที รวม 16 รอบต่อวัน",
        date: "21 ก.ย. 67",
        taxt: "ไพ่ยิปซี"
      }
    ]);
    const tab = ref("fortune");
    const fortuneType = ref("daily");
    const showResult = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-1444b240><div class="home-box" data-v-1444b240><div class="tab-menu" data-v-1444b240><div class="${ssrRenderClass([{ active: tab.value === "fortune" }, "tab"])}" data-v-1444b240><img${ssrRenderAttr("src", _imports_0)} data-v-1444b240> ดูดวง </div><div class="${ssrRenderClass([{ active: tab.value === "tarot" }, "tab"])}" data-v-1444b240><img${ssrRenderAttr("src", _imports_0)} data-v-1444b240> ไพ่ยิปซี </div></div>`);
      if (tab.value === "fortune" && !showResult.value) {
        _push(`<div data-v-1444b240><div class="fortune-box" data-v-1444b240><div class="section-title" data-v-1444b240> ทำนายดวงของคุณช่วงนี้ <div class="sub-title" data-v-1444b240>เลือกหมวดที่ต้องการดู</div></div><div class="fortune-type" data-v-1444b240><div class="${ssrRenderClass([{ active: fortuneType.value === "daily" }, "type-card"])}" data-v-1444b240><img${ssrRenderAttr("src", _imports_0)} data-v-1444b240> รายวัน </div><div class="${ssrRenderClass([{ active: fortuneType.value === "weekly" }, "type-card"])}" data-v-1444b240><img${ssrRenderAttr("src", _imports_0)} data-v-1444b240> รายสัปดาห์ </div><div class="${ssrRenderClass([{ active: fortuneType.value === "monthly" }, "type-card"])}" data-v-1444b240><img${ssrRenderAttr("src", _imports_0)} data-v-1444b240> รายเดือน </div></div><div class="form-grid" data-v-1444b240>`);
        if (fortuneType.value === "daily") {
          _push(`<!--[--><div class="input-group" data-v-1444b240><label data-v-1444b240>ชื่อ</label><input type="text" placeholder="สมชาย" data-v-1444b240></div><div class="input-group" data-v-1444b240><label data-v-1444b240>สกุล</label><input type="text" placeholder="มิตร" data-v-1444b240></div><div class="input-group" data-v-1444b240><label data-v-1444b240>วันเดือนปีเกิด</label><input type="date" data-v-1444b240></div><div class="input-group" data-v-1444b240><label data-v-1444b240>เวลาที่เกิด</label><div class="time-row" data-v-1444b240><input type="number" placeholder="12" data-v-1444b240><span data-v-1444b240>:</span><input type="number" placeholder="00" data-v-1444b240></div></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (fortuneType.value === "weekly") {
          _push(`<!--[--><div class="input-group" data-v-1444b240><label data-v-1444b240>ชื่อ</label><input type="text" placeholder="สมชาย" data-v-1444b240></div><div class="input-group" data-v-1444b240><label data-v-1444b240>วันเดือนปีเกิด</label><input type="date" data-v-1444b240></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (fortuneType.value === "monthly") {
          _push(`<!--[--><div class="input-group" data-v-1444b240><label data-v-1444b240>ชื่อ</label><input type="text" placeholder="สมชาย" data-v-1444b240></div><div class="input-group" data-v-1444b240><label data-v-1444b240>เดือนที่ต้องการดู</label><input type="month" data-v-1444b240></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="note" data-v-1444b240> *เวลาที่เกิด หากไม่ทราบให้เลือกเวลาประมาณใกล้เคียงที่สุด </div><button class="submit-btn" data-v-1444b240>ทำนาย</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (tab.value === "fortune" && showResult.value) {
        _push(`<div class="result-page" data-v-1444b240><div class="result-box" data-v-1444b240><div class="back-btn" data-v-1444b240>← ย้อนกลับ</div><div class="result-header" data-v-1444b240> ชื่อ-สกุล : สมชาย มีทรัพย์ <br data-v-1444b240> เกิดวันที่ 20 พฤศจิกายน 2533 เวลา 09:00 </div><div class="result-content" data-v-1444b240><h3 data-v-1444b240>คำทำนายดวง</h3><p data-v-1444b240> ไพ่ที่คุณได้คือ ไพ่ฤาษี เป็นไพ่แห่งสติปัญญา ช่วงนี้เหมาะกับการวางแผนชีวิตและใช้เหตุผล </p><h3 data-v-1444b240>คำแนะนำการดำเนินชีวิต</h3><p data-v-1444b240>ช่วงนี้ควรใช้ความรอบคอบและอย่าตัดสินใจเร็วเกินไป</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (tab.value === "tarot") {
        _push(`<div data-v-1444b240>`);
        _push(ssrRenderComponent(Tarot, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="news-section" data-v-1444b240><div class="news-header" data-v-1444b240><div data-v-1444b240>ข่าวหวยใหม่วันนี้</div><div class="view-all" data-v-1444b240>ดูทั้งหมด</div></div><div class="home-item" data-v-1444b240><!--[-->`);
      ssrRenderList(imgcardData.value, (imgcard) => {
        _push(ssrRenderComponent(ImageCard, {
          key: imgcard.id,
          icon: "flags/pingpong6.svg",
          obj: imgcard
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/supers/Supers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Mobilesupers = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1444b240"]]);
const _sfc_main = {
  __name: "supers",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const resultLayout = computed(() => mainStore.resultLayout);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-79a7ae6a>`);
      if (unref(resultLayout) === "mobile") {
        _push(`<div class="layout-wrapper" data-v-79a7ae6a>`);
        _push(ssrRenderComponent(Mobilesupers, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container layout-wrapper" data-v-79a7ae6a>`);
        _push(ssrRenderComponent(Desktopsupers, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/supers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const supers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79a7ae6a"]]);

export { supers as default };
//# sourceMappingURL=supers-CRW7M6O3.mjs.map
