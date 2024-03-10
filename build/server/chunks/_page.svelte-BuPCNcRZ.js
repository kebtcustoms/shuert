import { c as create_ssr_component, f as each, e as escape } from './ssr-DzG_XWZZ.js';
import 'firebase/firestore';
import './firebase-Duvbu53v.js';
import './client-CjdeEz1m.js';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let otherBlogs = [];
  let restOfBlogs = [];
  return `<main><div class="maincontainer"><div class="herocontainer">${``} <div class="otherblogs">${each(otherBlogs, (blog) => {
    return `<div class="blog"><h3>${escape(blog.title)}</h3> <p>${escape(blog.content)}</p> </div>`;
  })}</div></div> <div class="blogscontainer"><div class="restofblogs">${each(restOfBlogs, (blog) => {
    return `<div class="blog"><h3>${escape(blog.title)}</h3> <p>${escape(blog.content)}</p> </div>`;
  })}</div></div></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BuPCNcRZ.js.map
