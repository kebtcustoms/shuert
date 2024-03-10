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

let productimage = "unipak";
let producttitle = "Uni-Pak System";
let productdesc = "Durable, reusable, twin-sheet thermoformed pallets and tops have a ten-year life expectancy ranging between 50 – 100 plus trips. Cost-effective, often paying for itself within six months. Personalized printing of sleeve and embossing of top and pallet is optional. Available in triple wall corrugated fiber-board sleeve or plastic sleeve.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [
    {
      id: "uni-pak",
      name: "Uni-Pak",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="232.578" height="144.947" viewBox="0 0 232.578 144.947">
  <g id="Group_333" data-name="Group 333" transform="translate(51 -2345)" opacity="1" style="isolation: isolate">
    <path id="Path_60" data-name="Path 60" d="M176.114,2356.31a5.507,5.507,0,0,0-5.336-4.152h-9.855l-2.174-3.847a3.124,3.124,0,0,0-2.738-1.312h-4.766a3.053,3.053,0,0,0-2.791,1.415l-1.8,3.743H72.323l-2.174-3.847A3.124,3.124,0,0,0,67.411,2347H62.645a3.053,3.053,0,0,0-2.791,1.415l-1.8,3.743H-16.472l-2.174-3.847A3.124,3.124,0,0,0-21.383,2347H-26.15a3.053,3.053,0,0,0-2.791,1.415l-1.8,3.743H-41.557a5.5,5.5,0,0,0-5.485,5.055A5.492,5.492,0,0,0-49,2361.423v5.934H179.578v-5.934A5.505,5.505,0,0,0,176.114,2356.31Z" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <path id="Path_61" data-name="Path 61" d="M-49,2929v9.833a2.934,2.934,0,0,0,1.939,2.769h0l1.939,15.51H-1.5L.438,2941.6h41.1l1.939,15.51H87.1l1.939-15.51h40.326l1.939,15.51h43.622l1.939-15.51h-.054a2.769,2.769,0,0,0,2.769-2.769V2929Z" transform="translate(0 -469.165)" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <rect id="Rectangle_219" data-name="Rectangle 219" width="222" height="93" transform="translate(-46 2367)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
  </g>
</svg>
`,
      selected: false
    }
  ];
  const columns = [
    "Outside Dimensions",
    "Inside Dimensions",
    "Cover Weight",
    "Pallet Weight",
    "Load Capacity"
  ];
  const data = [
    ['48" x 40"', '37.24" x 45.24"', "13.3 lbs.", "21.3 lbs.", "2000 lbs."],
    ['48" x 45"', '45.24" x 42.24"', "15.5 lbs.", "23.3 lbs.", "2000 lbs."],
    ['52" x 36"', '49.52" x 33.52"', "13.7 lbs.", "20.7 lbs.", "2000 lbs."],
    ['57" x 48"', '54.52" x 45.52"', "19.1 lbs.", "28.9 lbs.", "2000 lbs."],
    ['44" x 44"', '41.25" x 41.25"', "14.2 lbs.", "21.3 lbs.", "2000 lbs."],
    ["46 x 46", '43.25" x 43.25"', "15.5 lbs.", "22.8 lbs.", "2000 lbs."],
    ['96" x 76"', '93.3" x 73.3"', "59.1 lbs.", "116.9 lbs.", "2000 lbs."],
    ['55" x 35"', '52.19" x 32.19"', "13.5 lbs.", "20.2 lbs.", "2000 lbs."],
    ['48" x 48"', '47.65" x 47.15"', "17.4 lbs.", "25.3 lbs.", "2000 lbs."],
    ['63" x 47.25"', '60.1" x 44.33"', "22.1 lbs.", "32.9 lbs.", "2000 lbs."],
    ['36" x 29"', '32.79" x 26.10"', "7.8 lbs.", "14.6 lbs.", "2000 lbs."],
    ['61" x 35"', '58.33" x 32.33"', "15.3 lbs.", "23.15 lbs.", "2000 lbs."],
    ['48" x 35.5"', '45.04" x 32.54"', "13.15 lbs.", "22.42 lbs.", "2000 lbs."],
    ['29" x 23"', '26.94" x 20.94"', "4.68 lbs.", "6.88 lbs.", "2000 lbs."],
    ['48" x 40"', '45.22" x 37.22"', "20.5 lbs.", "20.5 lbs.", "2000 lbs."],
    ['48" x 45"', '45.5" x 42.5"', "26.88 lbs.", "26.88 lbs.", "2000 lbs."],
    ['44" x 54"', '51.43" x 41.43"', "19.89 lbs.", "19.89 lbs.", "2000 lbs."],
    ['62.8" x 47"', '60.08" x 44.33"', "20.19 lbs.", "30.93 lbs.", "2000 lbs."],
    ['47.1" x 39.2"', '44.54" x 36.57"', "13.07 lbs.", "20.39 lbs.", "2000 lbs."],
    ['47.1" x 31.3"', '44.39" x 28.65"', "10.54 lbs.", "14.35 lbs.", "2000 lbs."]
  ];
  return ` ${validate_component(Animation, "Animation").$$render(
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
//# sourceMappingURL=_page.svelte-C198qhb4.js.map
