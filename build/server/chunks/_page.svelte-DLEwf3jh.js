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

let producttitle = "Uni-Pallet";
let productimage = "unipallet";
let productdesc = "The Shuert Uni-Pallet® product line offers outstanding economy along with strength and durability.  Advanced thermoforming technology is used to ensure lightweight and robust pallets that are consistent in appearance, weight and dimensions. Each Uni-Pallet ® is manufactured using High-Molecular weight, High-Density Polyethylene Co-Polymer plastic that enables the pallets to perform all the functions of wooden pallets without the product damage, frequent and costly repairs, and the continuing problem of wood disposal.  And because they are plastic, every Uni-Pallet® is ISPM 15 compliant and a perfect choice for international shipments. The space saving capacity and lightweight designs combine to reduce shipping costs producing the greatest benefit – a quick return on investment.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      id: "uni-pallet",
      name: "Uni-Pallet",
      svg: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="36.79" viewBox="0 0 235.33 36.79">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        //stroke: #d12539;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }
    </style>
  </defs>
  <g id="Uni-Pallet">
    <path class="cls-1" d="M117.65,34.73s5.95.14,8.05,0c2.1-.14,2.27-2.45,2.27-2.45l3.61-16.42h57.65s4.02,15.95,4.57,17.38,1.76,1.5,1.76,1.5c0,0,23.66,0,25.5,0,1.84,0,2.18-2.32,2.18-2.32,0,0,4.16-15.95,4.5-17.17.34-1.23.95-1.77.95-1.77l3.07-2.45.41-.68v-.95c.41,0,.59-.27.59-.27v-3.31h.57s0-2.83,0-2.83c0,0,.07-.75-.55-.82s-1.02.57-1.02.57v.72l-10.7-.14s-.14-.14-.46-.65-.77-.5-.77-.5c0,0-32.71,0-33.26,0s-.68.27-.68.27l-.7.89h-42.63s-7.02,0-7.02,0l-.41-.82c-.27-.55-.61-.49-.61-.49h-16.86s.03,0,.03,0h-16.86s-.34-.06-.61.49l-.41.82h-49.66l-.7-.89s-.14-.27-.68-.27H15.5s-.45-.01-.77.5-.46.65-.46.65l-10.7.14v-.72s-.41-.64-1.02-.57-.55.82-.55.82v2.83s.57,0,.57,0v3.31s.18.27.59.27v.95l.41.68,3.07,2.45s.61.55.95,1.77c.34,1.23,4.5,17.17,4.5,17.17,0,0,.34,2.32,2.18,2.32h25.5s1.21-.07,1.76-1.5c.55-1.43,4.57-17.38,4.57-17.38h57.65l3.61,16.42s.17,2.32,2.27,2.45c2.1.14,8.05,0,8.05,0"/>
  </g>
</svg>
`,
      selected: false
    }
  ];
  const columns = ["Name", "Outside Dimensions", "Weight", "Load Capacity"];
  const data = [
    ["Gen 2", '48" x 40" x 6.5"', "22 lbs.", "2500 lbs."],
    ["Gen 3", '48" x 40" x 6.5"', "22 lbs.", "2500 lbs."],
    ["42 x 48", '48" x 42" x 6.5"', "23.3 lbs.", "2500 lbs."],
    ["42 x 54", '48" x 42" x 6.5"', "24 lbs", "2500 lbs."],
    ["44 x 48", '48" x 42" x 6.5"', "24 lbs.", "2500 lbs."],
    ["45 x 48", '48" x 42" x 6"', "23.2 lbs.", "2500 lbs."],
    ["48 x 48", '48" x 42" x 6.5"', "29 lbs.", "2500 lbs."],
    ["ExAir", '48" x 40" x 6"', "10.1 lbs.", "2000 lbs."],
    ["Light Weight", '48" x 40" x 6.13"', "16.8 lbs.", "2000 lbs."],
    ["800 x 1200", '47.24" x 31.49" x 6.29"', "15.87 lbs.", "2000 lbs."]
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
//# sourceMappingURL=_page.svelte-DLEwf3jh.js.map
