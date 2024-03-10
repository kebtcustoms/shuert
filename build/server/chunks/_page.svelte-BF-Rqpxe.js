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

let producttitle = "Reman Pak";
let productimage = "reman";
let productdesc = "Shuert Technologies proudly presents the Reman Pak – your go-to container for the secure transport of transmissions and electric vehicle motors. Engineered with precision, our Reman Pak employs robust thermoforming processes and is constructed from High-Molecular weight, High-Density Polyethylene Co-Polymer, which guarantees a robust and lightweight container, superior to conventional shipping methods.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      id: "reman-pak",
      name: "Reman-Pak",
      svg: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="137.02" viewBox="0 0 232 137.02">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        // stroke: #d12539;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 4px;
      }
    </style>
  </defs>
  <g id="Layer_13" data-name="Layer 13">
    <path class="cls-1" d="M21.03,96.98c-.09,0-.19,0-.28-.01-2.49-.14-4.46-2.21-4.46-4.74v-6.52"/>
    <path class="cls-1" d="M47.48,134.01h-17.33c-2.3,0-4.25-1.69-4.58-3.96l-4.82-33.08"/>
    <path class="cls-1" d="M54.53,115.9l-.18,6.92c-.02.61-.2,1.2-.54,1.71l-6.32,9.49"/>
    <path class="cls-1" d="M100.81,115.9h-19.03c-.45-1.96-2.21-3.42-4.31-3.42s-3.86,1.46-4.31,3.42h-18.62"/>
    <path class="cls-1" d="M228.39,60.58v-4.4c0-1.81-1.47-3.27-3.27-3.27h-8.2l-10.52-47.53c-.44-1.97-2.19-3.38-4.21-3.38H29.81c-2.02,0-3.77,1.41-4.21,3.38l-10.52,47.53H6.88c-1.81,0-3.27,1.47-3.27,3.27v4.4c-.95.41-1.61,1.36-1.61,2.46v19.19c0,1.92,1.56,3.48,3.48,3.48h221.03c1.92,0,3.48-1.56,3.48-3.48v-19.19c0-1.1-.66-2.04-1.61-2.46Z"/>
    <path class="cls-1" d="M210.97,96.98c.09,0,.19,0,.28-.01,2.49-.14,4.46-2.21,4.46-4.74v-6.52"/>
    <path class="cls-1" d="M184.52,134.01h17.33c2.3,0,4.25-1.69,4.58-3.96l4.82-33.08"/>
    <path class="cls-1" d="M177.47,115.9l.18,6.92c.02.61.2,1.2.54,1.71l6.32,9.49"/>
    <path class="cls-1" d="M131.19,115.9h19.03c.45-1.96,2.21-3.42,4.31-3.42,2.1,0,3.86,1.46,4.31,3.42h18.62"/>
    <path class="cls-1" d="M100.81,115.9l2.55,14.59c.38,2.15,2,3.88,4.13,4.33.57.12,1.23.19,1.97.19h13.08c.74,0,1.4-.07,1.97-.19,2.13-.45,3.75-2.19,4.13-4.33l2.55-14.59"/>
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
//# sourceMappingURL=_page.svelte-BF-Rqpxe.js.map
