import { c as create_ssr_component, f as each, e as escape } from './ssr-DzG_XWZZ.js';
import 'firebase/firestore';
import './firebase-Duvbu53v.js';
import './client-CjdeEz1m.js';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import './exports-DuWZopOC.js';

const css = {
  code: '*{margin:0;padding:0;font-family:"Univers", sans-serif;box-sizing:border-box}h1.svelte-1jbgoly{font-size:18px}h2.svelte-1jbgoly{font-size:16px}main.svelte-1jbgoly{color:#f2f2f2}.careerscontainertop.svelte-1jbgoly{margin:20px auto;display:flex;flex-direction:column;width:100%;gap:20px}.careerscontainer.svelte-1jbgoly{margin:auto;display:flex;flex-direction:column;width:80%;cursor:pointer;gap:10px}.careerswrapper.svelte-1jbgoly{margin-top:10px;margin-bottom:10px}.careerssingle.svelte-1jbgoly{display:flex;align-items:center}.careerssinglecontainer.svelte-1jbgoly{margin-top:10px;margin-bottom:10px}span.svelte-1jbgoly{border:.5px #f2f2f2 solid;width:100%;opacity:20%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let careers = [];
  $$result.css.add(css);
  return `<main class="svelte-1jbgoly"><div><div class="careerscontainertop svelte-1jbgoly">${careers.length > 0 ? `${each(careers, ({ title, category, schedule, location, description, id, snippet }) => {
    return `<div class="careerscontainer svelte-1jbgoly"><span class="svelte-1jbgoly"></span>   <div class="careerswrapper svelte-1jbgoly"><div class="careerssingle svelte-1jbgoly"><h1 class="svelte-1jbgoly">${escape(title)}</h1></div> <div class="careerssinglecontainer svelte-1jbgoly"><div class="careerssingle svelte-1jbgoly"><h2 class="svelte-1jbgoly" data-svelte-h="svelte-18v9asc">Category:</h2> <p>${escape(category)}</p></div> <div class="careerssingle svelte-1jbgoly"><h2 class="svelte-1jbgoly" data-svelte-h="svelte-l7j69d">Schedule:</h2> <p>${escape(schedule)}</p></div> <div class="careerssingle svelte-1jbgoly"><h2 class="svelte-1jbgoly" data-svelte-h="svelte-8vfrrr">Location:</h2> <p>${escape(location)}</p> </div></div> <div class="careerssingle svelte-1jbgoly"><p>${escape(snippet)}</p> </div></div>  </div>`;
  })}` : `<p></p>`}</div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DtS9mtYW.js.map
