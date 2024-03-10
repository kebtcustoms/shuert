import { c as create_ssr_component, o as onDestroy, f as each, e as escape, g as add_attribute } from './ssr-DzG_XWZZ.js';
import './client-CjdeEz1m.js';
import 'swiper';
import 'swiper/modules';
import './exports-DuWZopOC.js';

/* empty css                        */
/* empty css                            */
const css = {
  code: '.productpagetitle.svelte-1c9r7h0.svelte-1c9r7h0{color:#f2f2f2;width:85.5%;margin:auto;margin-top:50px}.productpagetitle.svelte-1c9r7h0 h1.svelte-1c9r7h0{font-size:2.5em}.productoptions.svelte-1c9r7h0.svelte-1c9r7h0{margin:auto;margin-top:20px;display:flex;width:85.5%;gap:50px;display:flex;flex-direction:column}aside.svelte-1c9r7h0.svelte-1c9r7h0{color:white;border-radius:25px;height:fit-content;display:flex;flex-direction:column;gap:0px}fieldset.svelte-1c9r7h0.svelte-1c9r7h0{border:none;display:flex;flex-wrap:wrap}.asidetitle.svelte-1c9r7h0.svelte-1c9r7h0{font-size:2em}.legendtitle.svelte-1c9r7h0.svelte-1c9r7h0{margin-bottom:10px;font-size:1em}input[type="checkbox"].svelte-1c9r7h0.svelte-1c9r7h0{display:none}label.svelte-1c9r7h0.svelte-1c9r7h0{background-color:#f2f2f218;border-radius:10px;padding:10px 30px;transition:background-color 0.3s ease;transition:color 0.3s ease}label.checked.svelte-1c9r7h0.svelte-1c9r7h0{background-color:#ce002218;color:#ce0024}.fieldset1.svelte-1c9r7h0.svelte-1c9r7h0{display:flex;margin-top:5px;font-size:1em;gap:20px}.productsection.svelte-1c9r7h0.svelte-1c9r7h0{color:white;display:flex;flex-wrap:wrap;gap:40px}.productsectionoptions.svelte-1c9r7h0.svelte-1c9r7h0{padding:5px;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:space-between;max-width:380px;height:380px;border:#f2f2f21a solid 1px;border-radius:15px;background-color:rgba(255, 255, 255, 0.047);cursor:pointer;transition:background-color 0.5s ease}.productsectionoptions.svelte-1c9r7h0.svelte-1c9r7h0:hover{background-color:rgba(255, 255, 255, 0.108);transition:background-color 0.3s ease}.productimage.svelte-1c9r7h0.svelte-1c9r7h0{margin:auto;max-height:350px;max-width:350px}@media(max-width: 768px){.productsection.svelte-1c9r7h0.svelte-1c9r7h0{width:100%}.fieldset1.svelte-1c9r7h0.svelte-1c9r7h0{width:85%}.productsectionoptions.svelte-1c9r7h0.svelte-1c9r7h0{max-width:100%;height:380px}.productimage.svelte-1c9r7h0.svelte-1c9r7h0{margin:auto;max-height:350px;max-width:400px}}@media(max-width: 431px){.productsection.svelte-1c9r7h0.svelte-1c9r7h0{width:100%}.fieldset1.svelte-1c9r7h0.svelte-1c9r7h0{width:85%;font-size:0.8em}.productsectionoptions.svelte-1c9r7h0.svelte-1c9r7h0{width:100%;height:380px}.productimage.svelte-1c9r7h0.svelte-1c9r7h0{margin:auto;max-height:350px;max-width:300px}}@media(max-width: 431px){.fieldset1.svelte-1c9r7h0.svelte-1c9r7h0{width:100%;font-size:0.7em}.productimage.svelte-1c9r7h0.svelte-1c9r7h0{margin:auto;max-height:350px;max-width:250px}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredProducts;
  let products = [
    {
      id: 1,
      name: "Uni-Pak",
      type: "Uni-Pak",
      industry: "Consumer Goods",
      image: "/images/unipak.png",
      page: "/products/unipak",
      checked: false
    },
    {
      id: 2,
      name: "Uni-Pallet",
      type: "Uni-Pallet",
      industry: "Consumer Goods",
      image: "/images/unipallet.png",
      page: "/products/unipallet",
      checked: false
    },
    {
      id: 3,
      name: "Uni-Directional Pallet",
      type: "Uni-Directional",
      industry: "Consumer Goods",
      image: "/images/unidirectional.png",
      page: "/products/unidirectional",
      checked: false
    },
    {
      id: 4,
      name: "Uni-Case",
      type: "Uni-Case",
      industry: "Consumer Goods",
      image: "/images/unicase.png",
      page: "/products/unidirectional",
      checked: false
    },
    {
      id: 5,
      name: "Uni-Rak",
      type: "Uni-Rak",
      industry: "Consumer Goods",
      image: "/images/unidirectional.png",
      page: "/products/unidirectional",
      checked: false
    },
    {
      id: 6,
      name: "Yarn-Pak",
      type: "Yarn-Pak",
      industry: "Consumer Goods",
      image: "/images/yarnpak.png",
      page: "/products/yarnpak",
      checked: false
    },
    {
      id: 7,
      name: "Pro-Pak",
      type: "Pro-Pak",
      industry: "Consumer Goods",
      image: "/images/propak.png",
      page: "/products/propak",
      checked: false
    },
    {
      id: 8,
      name: "Reman-Pak",
      type: "Reman-Pak",
      industry: "Consumer Goods",
      image: "/images/reman2.png",
      page: "/products/remanpak",
      checked: false
    },
    {
      id: 9,
      name: "Battery-Pak",
      type: "Battery-Pak",
      industry: "Consumer Goods",
      image: "/images/batterypak.png",
      page: "/products/batterypak",
      checked: false
    },
    {
      id: 10,
      name: "Custom Design",
      type: "Custom Design",
      industry: "Consumer Goods",
      image: "/images/custom.png",
      page: "/customdesign",
      checked: false
    }
  ];
  let selectedTypes = [];
  let selectedIndustries = [];
  onDestroy(() => {
  });
  $$result.css.add(css);
  filteredProducts = products.filter((product) => (selectedTypes.length === 0 || selectedTypes.includes(product.type)) && (selectedIndustries.length === 0 || selectedIndustries.includes(product.industry)));
  return ` <div class="productpagetitle svelte-1c9r7h0" data-svelte-h="svelte-bj18me"><h1 class="svelte-1c9r7h0">Products</h1></div> <div class="productoptions svelte-1c9r7h0"><aside class="svelte-1c9r7h0"><h2 class="asidetitle svelte-1c9r7h0" data-svelte-h="svelte-109q21n">Refine Your Search</h2> <div><fieldset class="fieldset1 svelte-1c9r7h0"><legend class="legendtitle svelte-1c9r7h0" data-svelte-h="svelte-15ms7qv">Select a product type below</legend>  ${each(products, (product) => {
    return `<label class="${"label " + escape(product.checked ? "checked" : "", true) + " svelte-1c9r7h0"}"><input type="checkbox"${add_attribute("value", product.type, 0)} class="svelte-1c9r7h0"${add_attribute("checked", product.checked, 1)}${~selectedTypes.indexOf(product.type) ? add_attribute("checked", true, 1) : ""}> ${escape(product.type)} </label>`;
  })}</fieldset> </div></aside> <section class="productsection svelte-1c9r7h0">${filteredProducts.length ? each(filteredProducts, (product) => {
    return `  <div class="productsectionoptions svelte-1c9r7h0"><h3>${escape(product.name)}</h3>  <img${add_attribute("src", product.image, 0)} class="productimage svelte-1c9r7h0"> </div>`;
  }) : `<p data-svelte-h="svelte-1bjit0y">No products match your filters.</p>`}</section> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ynKhzX60.js.map
