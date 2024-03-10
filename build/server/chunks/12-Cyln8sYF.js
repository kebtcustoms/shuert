import { t as transporter } from './emailSetup.server-C54gBjn3.js';
import 'events';
import 'url';
import 'util';
import 'fs';
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'net';
import 'dns';
import 'os';
import 'path';
import 'crypto';
import 'punycode';
import 'tls';
import 'child_process';

const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const first = formData.get("first");
      const last = formData.get("last");
      const company = formData.get("company");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const body = formData.get("body");
      console.log(body);
      const message = {
        from: "hr@shuert.com",
        to: "ksmith@shuert.com",
        subject: `New contact form submission from ${first} ${last} at ${company}!`,
        html: `<html>
                    <body>
                        <p>${first} ${last} from ${company} has submitted the below information in the contact form.</p>
                        <p>Email: ${email}</p>
                        <p>Phone Number: ${phone}</p>
                        <p>Comments: ${body}</p>
                    </body>
                </html>`
      };
      const sendEmail = async (message2) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(message2, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };
      await sendEmail(message);
      return {
        success: "Email is sent"
      };
    } catch (error) {
      console.error(error);
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C198qhb4.js')).default;
const server_id = "src/routes/(app)/products/unipak/+page.server.js";
const imports = ["_app/immutable/nodes/12.D948v7ND.js","_app/immutable/chunks/scheduler.NS8L8LGm.js","_app/immutable/chunks/index.OFbx2xAc.js","_app/immutable/chunks/Form.oILZ8vQZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/firebase.BBKyB6M3.js","_app/immutable/chunks/Specs.DWJFdK10.js","_app/immutable/chunks/Spacer.Cnxwt_mv.js","_app/immutable/chunks/entry.BVh6nDbZ.js"];
const stylesheets = ["_app/immutable/assets/Form.DW72g2Bu.css","_app/immutable/assets/Specs.D6JuxYJt.css","_app/immutable/assets/Spacer.qKiXfdhl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-Cyln8sYF.js.map
