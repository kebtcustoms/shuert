import { c as create_ssr_component, b as subscribe, e as escape, g as add_attribute } from './ssr-DzG_XWZZ.js';
import './firebase-Duvbu53v.js';
import 'firebase/firestore';
import { p as page } from './stores-C7Qa0sep.js';
import 'firebase/storage';
import './client-CjdeEz1m.js';
import 'firebase/app';
import 'firebase/auth';
import './exports-DuWZopOC.js';

const css = {
  code: '*{margin:0;padding:0;font-family:"Univers", sans-serif;box-sizing:border-box}.maincontainer.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{margin-top:20px;display:flex;flex-direction:column}.titlecontainer.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{margin:20px auto;width:85%}h1.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{color:#f2f2f2}h2.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{color:#f2f2f2;font-weight:200}p.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{color:#f2f2f2;font-size:16px}.jobdetails.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{margin:20px auto}.careersformcontainer.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{margin:auto;position:relative;width:85%;margin-top:20px;margin-bottom:50px}.careersform.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{padding:30px;background-color:rgba(128, 128, 128, 0.105);border-radius:30px;display:flex;flex-direction:column;gap:20px;box-shadow:0 0 20px rgba(0, 0, 0, 0.2);color:#f2f2f2}.inputcontainer.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{display:flex;flex-wrap:wrap;width:100%;margin-bottom:-18px}.inputcontainer.svelte-12pwbam>div.svelte-12pwbam.svelte-12pwbam{width:50%;display:flex;flex-direction:column;gap:20px}.inputcontainer.svelte-12pwbam>div.svelte-12pwbam>input.svelte-12pwbam{width:95%}label.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{font-size:16px;font-weight:100;margin-bottom:-10px;padding-top:20px;color:#f2f2f2}input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{border:none;padding:10px;border-radius:15px;font-size:16px}input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:focus{outline:none;box-shadow:0 0 10px rgba(235, 235, 235, 0.5)}.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam::input-placeholder{font-size:18px}input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:-webkit-autofill::first-line,input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:-webkit-autofill,input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:-webkit-autofill:hover,input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:-webkit-autofill:focus,input.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:-webkit-autofill:active{font-size:18px !important;font-family:"Univers", sans-serif !important;font-weight:200 !important}textarea.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{border:none;border-radius:20px;height:200px;padding:20px;font-size:18px;width:100%}textarea.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam:focus{outline:none;box-shadow:0 0 10px rgba(235, 235, 235, 0.5)}.submitbutton.svelte-12pwbam.svelte-12pwbam.svelte-12pwbam{width:250px;padding:10px;font-size:18px;font-weight:bold;border-radius:15px;border:none;margin:auto;margin-bottom:10px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let uploadedFileUrl = "";
  let firstName = "";
  let lastName = "";
  let email = "";
  let phone = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $page.params.slug;
  $$unsubscribe_page();
  return `<div class="maincontainer svelte-12pwbam"><div class="titlecontainer svelte-12pwbam"><h1 class="svelte-12pwbam">${escape(data.title)}</h1> <div class="jobdetails svelte-12pwbam"><h2 class="svelte-12pwbam">${escape(data.category)}</h2> <h2 class="svelte-12pwbam">${escape(data.schedule)}</h2> <h2 class="svelte-12pwbam">${escape(data.location)}</h2></div> <p class="svelte-12pwbam">${escape(data.description)}</p></div> <div class="careersformcontainer svelte-12pwbam"><form method="POST" class="careersform svelte-12pwbam"> <div class="inputcontainer svelte-12pwbam"><div class="svelte-12pwbam"><label for="firstname" class="svelte-12pwbam" data-svelte-h="svelte-1h2slvi">First Name</label> <input name="first" id="firstname" type="text" class="svelte-12pwbam"${add_attribute("value", firstName, 0)}></div> <div class="inputright svelte-12pwbam"><label for="lastname" class="svelte-12pwbam" data-svelte-h="svelte-1635pwo">Last Name</label> <input name="last" id="lastname" type="text" class="svelte-12pwbam"${add_attribute("value", lastName, 0)}></div> <div class="svelte-12pwbam"><label for="phone" class="svelte-12pwbam" data-svelte-h="svelte-xjlanm">Phone</label> <input name="phone" id="Phone" type="tel" class="svelte-12pwbam"${add_attribute("value", phone, 0)}></div> <div class="svelte-12pwbam"><label for="email" class="inputright svelte-12pwbam" data-svelte-h="svelte-gvwxhp">Email</label> <input name="to" type="email" id="email" class="svelte-12pwbam"${add_attribute("value", email, 0)}></div> <div class="svelte-12pwbam"><label for="career" class="svelte-12pwbam" data-svelte-h="svelte-14u3bxe">Career</label> <input name="subject" type="text" id="career"${add_attribute("value", data.title, 0)} readonly class="svelte-12pwbam"></div></div> <label for="comments" class="svelte-12pwbam" data-svelte-h="svelte-1cfsige">Comments</label> <textarea id="comments" name="body" rows="6" class="svelte-12pwbam">${escape("")}</textarea> <input type="file" accept=".pdf,.doc,.docx" class="svelte-12pwbam"> <input name="fileUrl" id="uploadedFileUrl"${add_attribute("value", uploadedFileUrl, 0)} type="hidden" class="svelte-12pwbam"> <button type="submit" class="submitbutton svelte-12pwbam" data-svelte-h="svelte-e9ld3u">Submit Application</button></form></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BhqxZC2a.js.map
