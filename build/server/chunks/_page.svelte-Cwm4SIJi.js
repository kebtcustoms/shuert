import { c as create_ssr_component, v as validate_component } from './ssr-DzG_XWZZ.js';
import { S as ShuertAdvantage, F as Form } from './Form-D0b2VoMp.js';
import { U as Unidirectionaltext, A as Animation, S as Spacer } from './Spacer-DBuGhYXc.js';
import './firebase-Duvbu53v.js';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import 'gsap/dist/ScrollTrigger.js';

let productimage = "unirak";
let producttitle = "Uni-Rak";
let productdesc = "Shuert Technologies presents the Uni-Rak – an innovative logistics solution revolutionizing the way automotive parts are transported. Designed with precision, the Uni-Rak offers unmatched protection for parts typically shipped in steel racks, from transmission components to electric vehicle motors. This modular and stackable design maximizes space efficiency and minimizes storage footprint, both in transit and within warehouse environments. The Uni-Rak's robust structure and reduced weight translate to lower shipping costs and decreased fuel consumption, supporting your sustainability goals while delivering a quick return on investment. Opt for Shuert Technologies' Uni-Rak for a smarter, safer, and more sustainable transportation of automotive parts.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      id: "uni-rak",
      name: "Uni-Rak",
      svg: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="125.01" viewBox="0 0 240 125.01">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        // stroke: #d12539;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }
    </style>
  </defs>
  <g id="Uni-Rak">
    <path class="cls-1" d="M197.83,67.7v5.45l-2.21,2.36h-38.5s-3.7-2.28-3.7-6.04l.07-4.2s.44-7.14,5.38-7.14h36.23s2.58.81,2.58,3.24v4.49l.15,1.84Z"/>
    <path class="cls-1" d="M7.25,10.72l1.4-7.69s.07-1.03,1.03-1.03h4.93s.66.07.81.88,1.5,7.84,1.5,7.84l.85-.03s-6.61.04-10.54.03c-1.46,0-2.55-.01-2.79-.03-.88-.07-1.18.29-1.18.29l-1.03,1.18s-.44.37-.15.72.52.82.52.82c0,0,1.25,27.54,1.4,39.77.15,12.23,12.45,13.55,12.45,13.55-12.3.88-12.15,11.05-12.15,11.05l-1.69,42.42s-.52-.07-.52.44.29.59.29.59c0,0,.15-.22.52.59s1.47.88,1.47.88h97.73s3.76.15,5.52-4.35c0,0,3.31-8.76,12.15-8.76h.41c8.84,0,12.15,8.76,12.15,8.76,1.77,4.49,5.52,4.35,5.52,4.35h97.73s1.1-.07,1.47-.88.52-.59.52-.59c0,0,.29-.07.29-.59s-.52-.44-.52-.44l-1.69-42.42s.15-10.16-12.15-11.05c0,0,12.3-1.33,12.45-13.55s1.4-39.77,1.4-39.77c0,0,.22-.47.52-.82s-.15-.72-.15-.72l-1.03-1.18s-.29-.37-1.18-.29c-.24.02-1.33.03-2.79.03-3.93,0-10.54-.03-10.54-.03l.85.03s1.36-7.03,1.5-7.84.81-.88.81-.88h4.93c.96,0,1.03,1.03,1.03,1.03l1.4,7.69"/>
    <path class="cls-1" d="M17.79,10.69h84.33s4.2-.74,6.19,5.82c0,0,3.39,6.92,10.9,6.92h1.59c7.51,0,10.9-6.92,10.9-6.92,1.99-6.55,6.19-5.82,6.19-5.82h84.33"/>
    <path class="cls-1" d="M86.5,65.26s-.44-7.14-5.38-7.14h-36.23s-2.58.81-2.58,3.24v4.49s-.15,1.84-.15,1.84v5.45s2.21,2.36,2.21,2.36h38.5s3.7-2.28,3.7-6.04l-.07-4.2Z"/>
  </g>
</svg>
`,
      selected: false
    }
  ];
  return `${validate_component(Animation, "Animation").$$render(
    $$result,
    {
      productimage,
      component: Unidirectionaltext,
      producttitle,
      productdesc
    },
    {},
    {}
  )} ${validate_component(Spacer, "Spacer").$$render($$result, {}, {}, {})} ${validate_component(ShuertAdvantage, "ShuertAdvantage").$$render($$result, {}, {}, {})} <div style="margin-top: 100px;">${validate_component(Form, "Form").$$render($$result, { products }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cwm4SIJi.js.map
