import { c as create_ssr_component, o as onDestroy, e as escape, v as validate_component, m as missing_component } from './ssr-DzG_XWZZ.js';
import './client-CjdeEz1m.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const css$2 = {
  code: '*{margin:0;padding:0;font-family:"Univers", sans-serif;box-sizing:border-box}.producttitle.svelte-1e564d4.svelte-1e564d4{position:absolute;color:#f2f2f2;width:80%;margin:auto;display:flex;flex-wrap:wrap;justify-content:center;z-index:0;text-align:center}.producttitle.svelte-1e564d4 h1.svelte-1e564d4{line-height:1em}.gallery.svelte-1e564d4.svelte-1e564d4{display:flex;flex-direction:row-reverse;justify-content:center;align-content:center;width:90%;margin:auto;margin-top:-20px;height:100vh}.right.svelte-1e564d4.svelte-1e564d4{width:50%;position:relative}.canvasWrapper.svelte-1e564d4.svelte-1e564d4{top:11.5%;position:relative;display:flex;justify-content:center;z-index:2}canvas.svelte-1e564d4.svelte-1e564d4{width:90%;align-self:center}@media(max-width: 1921px){.gallery.svelte-1e564d4.svelte-1e564d4{flex-direction:column-reverse;align-items:center;margin-top:-20px;justify-content:center;height:100vh}.right.svelte-1e564d4.svelte-1e564d4{position:relative;height:fit-content;width:80%;display:flex;justify-content:center;align-items:center}.canvasWrapper.svelte-1e564d4.svelte-1e564d4{top:0;height:100%;width:100%}canvas.svelte-1e564d4.svelte-1e564d4{width:110%}}@media(max-width: 1921px) and (max-height: 1000px){.right.svelte-1e564d4.svelte-1e564d4{width:80%}.canvasWrapper.svelte-1e564d4.svelte-1e564d4{width:60%}}@media(max-width: 1921px){.gallery.svelte-1e564d4.svelte-1e564d4{display:flex;flex-direction:row-reverse;justify-content:center;align-content:center;width:100%;margin:auto;margin-top:-20px;height:100vh}.left.svelte-1e564d4.svelte-1e564d4{width:50%;display:flex;flex-direction:column;justify-content:center}.lefttextcont.svelte-1e564d4.svelte-1e564d4{width:90%;margin:auto;justify-content:flex-start}.producttitlewrap.svelte-1e564d4.svelte-1e564d4{width:100%}.producttitle.svelte-1e564d4.svelte-1e564d4{position:relative;color:#f2f2f2;width:100%;margin:auto;display:flex;flex-direction:column;flex-wrap:wrap;z-index:0;text-align:left;margin-bottom:30px}.productdesc.svelte-1e564d4.svelte-1e564d4{color:#f2f2f2;text-align:left;width:100%;margin:auto;display:flex;justify-content:flex-start}.productdesc.svelte-1e564d4 p.svelte-1e564d4{width:89%}.producttitle.svelte-1e564d4 h1.svelte-1e564d4{font-size:5em}.right.svelte-1e564d4.svelte-1e564d4{flex:1;height:100%}.canvasWrapper.svelte-1e564d4.svelte-1e564d4{width:80%}}@media(max-width: 1040px){.gallery.svelte-1e564d4.svelte-1e564d4{display:flex;flex-direction:column-reverse;justify-content:center;align-content:center;width:100%;margin:auto;margin-top:-20px;height:100vh}.left.svelte-1e564d4.svelte-1e564d4{width:100%;align-items:center}.lefttextcont.svelte-1e564d4.svelte-1e564d4{width:80%;margin:0}.producttitle.svelte-1e564d4.svelte-1e564d4{text-align:center}.productdesc.svelte-1e564d4.svelte-1e564d4{display:flex;justify-content:center}.right.svelte-1e564d4.svelte-1e564d4{width:60%;margin-top:150px}.canvasWrapper.svelte-1e564d4.svelte-1e564d4{width:100%}.productdesc.svelte-1e564d4 p.svelte-1e564d4{width:100%}}@media(max-width: 600px){.producttitle.svelte-1e564d4 h1.svelte-1e564d4{font-size:4em}}@media(max-width: 426px){.right.svelte-1e564d4.svelte-1e564d4{width:100%}.canvasWrapper.svelte-1e564d4.svelte-1e564d4{width:100%}canvas.svelte-1e564d4.svelte-1e564d4{width:100%}}',
  map: null
};
const Animation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productimage } = $$props;
  let { component } = $$props;
  let { producttitle } = $$props;
  let { productdesc } = $$props;
  function killAnimation() {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    console.log("Animation killed");
  }
  onDestroy(() => {
    console.log("Component destroyed");
    killAnimation();
  });
  if ($$props.productimage === void 0 && $$bindings.productimage && productimage !== void 0)
    $$bindings.productimage(productimage);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.producttitle === void 0 && $$bindings.producttitle && producttitle !== void 0)
    $$bindings.producttitle(producttitle);
  if ($$props.productdesc === void 0 && $$bindings.productdesc && productdesc !== void 0)
    $$bindings.productdesc(productdesc);
  $$result.css.add(css$2);
  return `<div class="gallery svelte-1e564d4"><div class="left svelte-1e564d4"><div class="lefttextcont svelte-1e564d4"><div class="producttitlewrap svelte-1e564d4"><div class="producttitle svelte-1e564d4"><h1 class="svelte-1e564d4">${escape(producttitle)}</h1></div></div> <div class="productdesc svelte-1e564d4"><p class="svelte-1e564d4"><!-- HTML_TAG_START -->${productdesc}<!-- HTML_TAG_END --></p></div> ${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div> <div class="right svelte-1e564d4" data-svelte-h="svelte-10gdc8d"><div class="canvasWrapper svelte-1e564d4"><canvas id="hero-lightpass" class="svelte-1e564d4"></canvas></div></div> </div>`;
});
const css$1 = {
  code: ".left.svelte-12bqzoj{flex:1;outline:1px solid rgb(0, 170, 255);display:flex;justify-content:center}.detailsWrapper.svelte-12bqzoj{width:80%;margin:0;position:relative;outline:1px solid rgb(255, 0, 200);display:flex;flex-direction:column;justify-content:center}.left-element.svelte-12bqzoj{position:absolute;opacity:0;width:100%;outline:1px solid rgb(8, 0, 255);display:flex;flex-direction:column;justify-content:center;transition:opacity 0.7s}.headline.svelte-12bqzoj{background:#2d4e86;border-radius:6px;height:4em;width:100%}.text.svelte-12bqzoj{margin:0.8em 0 0 0;background:#2d4e86;border-radius:6px;height:1em;width:100%}@media(max-width: 1921px){.left.svelte-12bqzoj{width:80%;height:fit-content;position:fixed;top:510px;outline:0px}.left-element.svelte-12bqzoj{outline:0px}.detailsWrapper.svelte-12bqzoj{width:100%;position:relative;height:100%;left:50%;top:50%;-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);outline:0px}}",
  map: null
};
const Unidirectionaltext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="left svelte-12bqzoj" data-svelte-h="svelte-m0k8oi"><div class="detailsWrapper svelte-12bqzoj"><div class="left-element svelte-12bqzoj" id="leftElement1"><div class="headline svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div></div> <div class="left-element svelte-12bqzoj" id="leftElement2"><div class="headline svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div></div> <div class="left-element svelte-12bqzoj" id="leftElement3"><div class="headline svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div> <div class="text svelte-12bqzoj"></div></div></div> </div>`;
});
const css = {
  code: ".spacer.svelte-1o2dnzk{height:200px;width:100%;display:none}@media(max-width: 1040px){.spacer.svelte-1o2dnzk{display:flex}}",
  map: null
};
const Spacer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="spacer svelte-1o2dnzk"></div>`;
});

export { Animation as A, Spacer as S, Unidirectionaltext as U };
//# sourceMappingURL=Spacer-DBuGhYXc.js.map
