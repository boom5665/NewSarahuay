import { computed, unref, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CcHW_VpF.mjs';
import { _ as _sfc_main$3 } from './ImageCard-B_h1vW5r.mjs';
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
  __name: "DesktopDetailnewNew",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-ae18ecc3><div class="home-box" data-v-ae18ecc3><div class="text-toplotto" data-v-ae18ecc3><span data-v-ae18ecc3>`);
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
      _push(`</span> / <span data-v-ae18ecc3>ข่าวสารหวย</span></div><div class="article-page" data-v-ae18ecc3><div class="article-header" data-v-ae18ecc3><h1 class="title" data-v-ae18ecc3> โค้งสุดท้ายหวย &quot;เลขเด็ดงวดนี้&quot; 16/9/67 ลุ้นโชคได้ที่ไทยรัฐทีวี-ไทยรัฐออนไลน์ </h1><div class="meta" data-v-ae18ecc3><span class="category" data-v-ae18ecc3>ข่าวหวย</span><span class="date" data-v-ae18ecc3>21 กันยายน 67</span><div class="social" data-v-ae18ecc3><div class="icon fb" data-v-ae18ecc3>f</div><div class="icon line" data-v-ae18ecc3>L</div><div class="icon link" data-v-ae18ecc3>⛓</div></div></div></div><div class="article-image" data-v-ae18ecc3><img src="https://picsum.photos/900/450" data-v-ae18ecc3></div><div class="article-content" data-v-ae18ecc3><p data-v-ae18ecc3> โค้งสุดท้ายข่าว &quot;หวยไทยรัฐ&quot; อย่าลืมส่อง &quot;เลขดัง&quot; กับ &quot;เลขเด็ดงวดนี้&quot; ก่อนการออกรางวัล &quot;สลากกินแบ่ง&quot; งวดวันที่ 16 ก.ย. 2567 ว่าที่เศรษฐีเตรียมลุ้นชัดๆ งวดนี้ใครจะโชคดีถูกหวยรางวัลใหญ่ วันที่ 16 กันยายน 2567 ผู้สื่อข่าวรายงานว่า วันนี้จะมีการออกรางวัลสลากกินแบ่งรัฐบาล หรือลอตเตอรี่ งวดประจำวันที่ 16 ก.ย. 2567 โดยงวดนี้กองสลากได้ออกรางวัลลอตเตอรี่ ณ สนามบินน้ำ จ.นนทบุรี ขณะที่ตามแผงขายลอตเตอรี่ พบว่าส่วนใหญ่ประชาชนจะซื้อลอตเตอรี่รวมชุด 2 ใบ เพื่อลุ้นโชคใหญ่ 12 ล้าน ซึ่งขณะนี้ตามแผงค้าลอตเตอรี่ในพื้นที่หัวเมืองใหญ่ๆ และกรุงเทพมหานคร ยังคงมีตัวเลขให้เลือกจำนวนมาก ด้านนางสาวพรรณี ปู่ลู่เงิน แม่ค้าขายหวยย่านถนนเชียงใหม่-ลำพูน อ.สารภี จ.เชียงใหม่ เปิดเผยว่า เลขเด็ดงวดนี้ที่มาแรงคือ เลขเครื่องบินตกที่ อ.จอมทอง จ.เชียงใหม่ ประกอบด้วย AT-6TH ตัวเลขเครื่องบิน 41107 วันเวลาตก 10.40 น. โดยเลขที่น่าสนใจ ได้แก่ 20, 02, 41, 10, 07, 40, 29, 107, 110, 411, 147, 047, 220, 299, 040 ผู้สื่อข่าวรายงาน 10 เลขขายดี งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 85, 53, 76, 08, 63, 18, 87, 56, 83, 96, 10 เลขเด็ด งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 14, 17, 69, 93, 28, 25, 18, 03, 37, 78 10 เลขดัง งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 96, 56, 41, 38, 82, 97, 95, 91, 98, 36 10 เลขขายยาก งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 55, 33, 66, 77, 30, 06, 40, 01, 80, 43. </p></div><div class="lotto-box" data-v-ae18ecc3><div class="lotto-title" data-v-ae18ecc3>เลขเด็ดงวดนี้มาแล้ว</div><div class="lotto-list" data-v-ae18ecc3><div class="item" data-v-ae18ecc3><span class="label" data-v-ae18ecc3>แนวทางเลข:</span><span class="number" data-v-ae18ecc3>5 - 4 - 6 - 2</span></div><div class="item" data-v-ae18ecc3><span class="label" data-v-ae18ecc3>เลข 3 ตัว:</span><span class="number" data-v-ae18ecc3>546 - 462</span></div><div class="item" data-v-ae18ecc3><span class="label" data-v-ae18ecc3>เลข 2 ตัว:</span><span class="number" data-v-ae18ecc3>54 - 56 - 52 - 46 - 42 - 62</span></div><div class="item" data-v-ae18ecc3><span class="label" data-v-ae18ecc3>เลข 4 ตัว:</span><span class="number" data-v-ae18ecc3>5462</span></div></div><button class="ai-btn" data-v-ae18ecc3>วิเคราะห์เลขเด็ดด้วย AI</button><p class="note" data-v-ae18ecc3> อย่างไรก็ตาม แนวทางดังกล่าว “โปรดใช้วิจารณญาณในการวิเคราะห์” </p></div></div><div class="meta-all" data-v-ae18ecc3><span class="category" data-v-ae18ecc3>ข่าวหวย</span><span class="date" data-v-ae18ecc3>21 กันยายน 67</span><div class="social" data-v-ae18ecc3><div class="" data-v-ae18ecc3>ดูทั้งหมด</div></div></div><div class="home-item" data-v-ae18ecc3><!--[-->`);
      ssrRenderList(imgcardData.value, (imgcard) => {
        _push(ssrRenderComponent(_sfc_main$3, {
          key: imgcard.id,
          icon: "flags/pingpong6.svg",
          obj: imgcard
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/detailnew/New.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Desktoplotto = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae18ecc3"]]);
const _sfc_main$1 = {
  __name: "MobileDetailnewNew",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-content" }, _attrs))} data-v-8affee5c><div class="home-box" data-v-8affee5c><div class="text-toplotto" data-v-8affee5c><span data-v-8affee5c>`);
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
      _push(`</span> / <span data-v-8affee5c>ข่าวสารหวย</span></div><div class="article-page" data-v-8affee5c><div class="article-header" data-v-8affee5c><h1 class="title" data-v-8affee5c> โค้งสุดท้ายหวย &quot;เลขเด็ดงวดนี้&quot; 16/9/67 ลุ้นโชคได้ที่ไทยรัฐทีวี-ไทยรัฐออนไลน์ </h1><div class="meta" data-v-8affee5c><span class="category" data-v-8affee5c>ข่าวหวย</span><span class="date" data-v-8affee5c>21 กันยายน 67</span><div class="social" data-v-8affee5c><div class="icon fb" data-v-8affee5c>f</div><div class="icon line" data-v-8affee5c>L</div><div class="icon link" data-v-8affee5c>⛓</div></div></div></div><div class="article-image" data-v-8affee5c><img src="https://picsum.photos/900/450" data-v-8affee5c></div><div class="article-content" data-v-8affee5c><p data-v-8affee5c> โค้งสุดท้ายข่าว &quot;หวยไทยรัฐ&quot; อย่าลืมส่อง &quot;เลขดัง&quot; กับ &quot;เลขเด็ดงวดนี้&quot; ก่อนการออกรางวัล &quot;สลากกินแบ่ง&quot; งวดวันที่ 16 ก.ย. 2567 ว่าที่เศรษฐีเตรียมลุ้นชัดๆ งวดนี้ใครจะโชคดีถูกหวยรางวัลใหญ่ วันที่ 16 กันยายน 2567 ผู้สื่อข่าวรายงานว่า วันนี้จะมีการออกรางวัลสลากกินแบ่งรัฐบาล หรือลอตเตอรี่ งวดประจำวันที่ 16 ก.ย. 2567 โดยงวดนี้กองสลากได้ออกรางวัลลอตเตอรี่ ณ สนามบินน้ำ จ.นนทบุรี ขณะที่ตามแผงขายลอตเตอรี่ พบว่าส่วนใหญ่ประชาชนจะซื้อลอตเตอรี่รวมชุด 2 ใบ เพื่อลุ้นโชคใหญ่ 12 ล้าน ซึ่งขณะนี้ตามแผงค้าลอตเตอรี่ในพื้นที่หัวเมืองใหญ่ๆ และกรุงเทพมหานคร ยังคงมีตัวเลขให้เลือกจำนวนมาก ด้านนางสาวพรรณี ปู่ลู่เงิน แม่ค้าขายหวยย่านถนนเชียงใหม่-ลำพูน อ.สารภี จ.เชียงใหม่ เปิดเผยว่า เลขเด็ดงวดนี้ที่มาแรงคือ เลขเครื่องบินตกที่ อ.จอมทอง จ.เชียงใหม่ ประกอบด้วย AT-6TH ตัวเลขเครื่องบิน 41107 วันเวลาตก 10.40 น. โดยเลขที่น่าสนใจ ได้แก่ 20, 02, 41, 10, 07, 40, 29, 107, 110, 411, 147, 047, 220, 299, 040 ผู้สื่อข่าวรายงาน 10 เลขขายดี งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 85, 53, 76, 08, 63, 18, 87, 56, 83, 96, 10 เลขเด็ด งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 14, 17, 69, 93, 28, 25, 18, 03, 37, 78 10 เลขดัง งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 96, 56, 41, 38, 82, 97, 95, 91, 98, 36 10 เลขขายยาก งวด 1 กุมภาพันธ์ 69 ประกอบด้วย 55, 33, 66, 77, 30, 06, 40, 01, 80, 43. </p></div><div class="lotto-box" data-v-8affee5c><div class="lotto-title" data-v-8affee5c>เลขเด็ดงวดนี้มาแล้ว</div><div class="lotto-list" data-v-8affee5c><div class="item" data-v-8affee5c><span class="label" data-v-8affee5c>แนวทางเลข:</span><span class="number" data-v-8affee5c>5 - 4 - 6 - 2</span></div><div class="item" data-v-8affee5c><span class="label" data-v-8affee5c>เลข 3 ตัว:</span><span class="number" data-v-8affee5c>546 - 462</span></div><div class="item" data-v-8affee5c><span class="label" data-v-8affee5c>เลข 2 ตัว:</span><span class="number" data-v-8affee5c>54 - 56 - 52 - 46 - 42 - 62</span></div><div class="item" data-v-8affee5c><span class="label" data-v-8affee5c>เลข 4 ตัว:</span><span class="number" data-v-8affee5c>5462</span></div></div><button class="ai-btn" data-v-8affee5c>วิเคราะห์เลขเด็ดด้วย AI</button><p class="note" data-v-8affee5c> อย่างไรก็ตาม แนวทางดังกล่าว “โปรดใช้วิจารณญาณในการวิเคราะห์” </p></div></div><div class="meta-all" data-v-8affee5c><span class="category" data-v-8affee5c>ข่าวหวย</span><span class="date" data-v-8affee5c>21 กันยายน 67</span><div class="social" data-v-8affee5c><div class="" data-v-8affee5c>ดูทั้งหมด</div></div></div><div class="home-item" data-v-8affee5c><!--[-->`);
      ssrRenderList(imgcardData.value, (imgcard) => {
        _push(ssrRenderComponent(_sfc_main$3, {
          key: imgcard.id,
          icon: "flags/pingpong6.svg",
          obj: imgcard
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/detailnew/New.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Mobilelotto = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8affee5c"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const resultLayout = computed(() => mainStore.resultLayout);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-999b6a65>`);
      if (unref(resultLayout) === "mobile") {
        _push(`<div class="layout-wrapper" data-v-999b6a65>`);
        _push(ssrRenderComponent(Mobilelotto, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="container layout-wrapper" data-v-999b6a65>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/detailsnew/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-999b6a65"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-MF0OWXHG.mjs.map
