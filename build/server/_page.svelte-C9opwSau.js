import { c as create_ssr_component, v as validate_component } from './ssr-DzG_XWZZ.js';
import { S as ShuertAdvantage, F as Form } from './Form-D0b2VoMp.js';
import { S as Specs } from './Specs-BZqHowXi.js';
import { U as Unidirectionaltext, A as Animation, S as Spacer } from './Spacer-DBuGhYXc.js';
import './firebase-Duvbu53v.js';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import 'gsap/dist/ScrollTrigger.js';

let productimage = "unicase";
let producttitle = "Uni-Case";
let productdesc = "Uni-Case containers can be used for a variety of parts that need to remain clean and protected. The unique design allows for more part per container and there are no trays or dunnage to remove, making loading and unloading parts less labor intensive. The top and tray dividers are assisted with gas springs for easy use. Finally, the Uni-Case may be latched, locked, or sealed for increased security of your valuable parts. ";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      id: "uni-case",
      name: "Uni-Case",
      svg: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="177" viewBox="0 0 235.63 177">
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
  <g id="Unicase">
    <g id="Layer_42" data-name="Layer 42">
      <g>
        <path class="cls-1" d="M2.01,152.22v3.51s-.23,2.02,2.26,2.02h12.18l.56,13.76s.68,2.71,3.83,2.71h26.62s2.14-.34,2.14-1.8.45-.23.45-.23c0,0,.56,1.01,1.8,1.01h43.53s3.83.45,3.83-3.95l.23,3.95s.23,1.8,2.37,1.8h29.92s4.14-.11,4.14-2.59v-2.18s.11,2.75,2.37,2.75h44.43s2.82.23,2.82-2.26l.23,2.14s.3,2.14,2.41,2.14h27.42s2.99-.11,2.99-2.93l.75-14.32h12.28s1.75-.11,1.75-3.04v-7.31s.17-2.05-2.51-2.05H5.31s-3.31.68-3.31,2.94v3.94Z"/>
        <path class="cls-1" d="M220.82,145.34c2.06-.79,2.23-2.71,2.23-2.71l3.5-33.49s3.5-3.61,4.51-4.4c1.01-.79,1.01-1.69,1.01-1.69l1.13-20.3c.9-.9.12-1.24.12-1.24H17.34l-5.3,5.19h-.9l-.34-4.16-6.86-.44-.24,5.27-.56.68s.45,12.29.45,14.21.34,2.15.34,2.15v3.6c0,1.8.79,2.26.79,2.26l5.07,4.85s2.71,25.37,2.82,27.52,1.45,2.71,1.45,2.71H4.82h226.12v12.41H16.44"/>
        <path class="cls-1" d="M233.31,81.4l-216.76-.11-4.85-3.61-.56,4.17s-.1.29-.34.69c-.49.84-1.55,2.17-3.39,2.24-2.13.09-3.15-1.85-3.48-2.68-.09-.22-.13-.36-.13-.36l-.45-6.54v-.83s.79-15.18.9-18.45,2.82-3.83,2.82-3.83l3.83-.11s3.72-33.95,4.06-38.23c.34-4.29,1.13-4.29,1.13-4.29l2.37-2.48c1.35-1.69,2.37-1.35,2.37-1.35h8.91l2.03-2.93h4.96l1.8,2.93h74.66l2.99-3.61h4.68l2.26,3.38h74.32l2.09-3.04h4.9l2.03,3.16h9.7l4.74,3.95,4.85,47.7,4.4.23c2.14.23,2.37,2.14,2.37,2.14l.79,20.72c.56.76,0,1.16,0,1.16Z"/>
        <rect class="cls-1" x="52.53" y="159.44" width="44.1" height="10.94"/>
        <rect class="cls-1" x="138.8" y="159.44" width="44.1" height="10.94"/>
      </g>
    </g>
  </g>
</svg>
`,
      selected: false
    }
  ];
  const columns = ["Name", "Outside Dimensions", "Weight"];
  const data = [
    ["Single Layer", '78" x 48" x 36.5"', "244.3 lbs."],
    ["Double Layer", '63.5" x 46.5" x 48"', '216 lbs."'],
    ["Triple Layer", '63.5" x 46.5" x 48"', "236 lbs."]
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
  )} ${validate_component(Spacer, "Spacer").$$render($$result, {}, {}, {})} ${validate_component(Specs, "Specs").$$render($$result, { columns, data }, {}, {})} ${validate_component(ShuertAdvantage, "ShuertAdvantage").$$render($$result, {}, {}, {})} <div style="margin-top: 100px;">${validate_component(Form, "Form").$$render($$result, { products }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C9opwSau.js.map
