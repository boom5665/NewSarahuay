import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

const _imports_0 = publicAssetsURL("/icon/clock.svg");
const _sfc_main = {
  __name: "DesktopImageCard",
  __ssrInlineRender: true,
  props: {
    obj: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "imgcard" }, _attrs))}><div class="imgcard-card"><div class="imgcard-inner-card"><div class="imgcard-inner-card-img"><img${ssrRenderAttr("src", __props.obj.imgSrc)}></div><div class="imgcard-inner-card-title"><div class="group-text">`);
      if (__props.loading) {
        _push(`<div class="sk-line w40"></div>`);
      } else {
        _push(`<span class="sub-title">${ssrInterpolate(__props.obj.subtitle)}</span>`);
      }
      _push(`</div></div></div><div class="date">`);
      if (__props.loading) {
        _push(`<div class="sk-line w20"></div>`);
      } else {
        _push(`<span><span><img class="clock"${ssrRenderAttr("src", _imports_0)} alt=""> ${ssrInterpolate(__props.obj.date)}</span><span class="taxt">${ssrInterpolate(__props.obj.taxt)}</span></span>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/ImageCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ImageCard-B_h1vW5r.mjs.map
