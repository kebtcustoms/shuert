import { c as create_ssr_component, g as add_attribute } from './ssr-DzG_XWZZ.js';
import './firebase-Duvbu53v.js';
import 'firebase/firestore';

const css = {
  code: ".newslettercont.svelte-j50hmp.svelte-j50hmp{width:100%;display:flex;height:250px;margin:auto;margin-top:50px;padding-top:20px;padding-bottom:50px;margin-bottom:-70px;background-color:#f2f2f207;box-shadow:0 0 20px rgba(0, 0, 0, 0.2);border:#f2f2f21a solid 1px}.leftemail.svelte-j50hmp.svelte-j50hmp{width:50%;height:100%;display:flex;justify-content:flex-end}.leftemailcont.svelte-j50hmp.svelte-j50hmp{width:85%;height:100%;display:flex;flex-direction:column;right:0;justify-content:center;color:#f2f2f2;gap:20px}.rightemail.svelte-j50hmp.svelte-j50hmp{display:flex;flex-direction:column;justify-content:center;width:50%;height:100%;gap:20px}.rightemail.svelte-j50hmp label.svelte-j50hmp{font-size:1.5em;font-weight:100;color:#f2f2f2}input.svelte-j50hmp.svelte-j50hmp{border:none;padding:16px;border-radius:20px;font-size:1em;width:85%;background-color:rgba(255, 255, 255, 0.105)}input.svelte-j50hmp.svelte-j50hmp:focus{outline:none;border:#f2f2f21a solid 1px;padding:15px}.svelte-j50hmp.svelte-j50hmp::input-placeholder{font-size:1rem}.emailbutton.svelte-j50hmp.svelte-j50hmp{background-color:transparent;color:#f2f2f2;margin-right:10px;position:relative;justify-self:flex-end;padding:10px 30px;font-size:1em;font-weight:bold;border-radius:15px;border:1px solid #f2f2f2;transition:background-color 0.5s ease;transition:border-color 0.1s ease;cursor:pointer}.emailbutton.svelte-j50hmp.svelte-j50hmp:hover{transition:background-color 0.5s ease;transition:border-color 0.1s ease;background-color:#f2f2f2;background-color:#ce0024;color:#f2f2f2;border:1px solid #ce0024}@media(max-width: 796px){.newslettercont.svelte-j50hmp.svelte-j50hmp{flex-direction:column;gap:20px;margin-bottom:-80px;padding-top:20px;padding-bottom:50px;height:fit-content}.leftemail.svelte-j50hmp.svelte-j50hmp{width:100%;justify-content:center}.rightemail.svelte-j50hmp.svelte-j50hmp{justify-content:center;width:85%;margin:auto}input.svelte-j50hmp.svelte-j50hmp{width:100%}}",
  map: null
};
const EmailCapture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  $$result.css.add(css);
  return `<div class="newslettercont svelte-j50hmp"><div class="leftemail svelte-j50hmp" data-svelte-h="svelte-1ijnblf"><div class="leftemailcont svelte-j50hmp"><h2 class="svelte-j50hmp">Join Our Newsletter</h2> <p class="svelte-j50hmp">Stay updated with the latest trends, products, and news in the reusable transport packaging industry.</p></div></div> <div class="rightemail svelte-j50hmp"><label for="email" class="svelte-j50hmp" data-svelte-h="svelte-1p9d3fm">Email</label> <div class="svelte-j50hmp"><input name="email" id="email" type="email" required class="svelte-j50hmp"${add_attribute("value", email, 0)}></div> <div class="svelte-j50hmp"><button type="submit" class="emailbutton svelte-j50hmp" data-svelte-h="svelte-105vpu8">Submit</button></div></div> </div>`;
});

export { EmailCapture as E };
//# sourceMappingURL=EmailCapture-DWDo-cDR.js.map
