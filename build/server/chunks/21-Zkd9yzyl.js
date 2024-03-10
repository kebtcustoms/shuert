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
      const email = formData.get("to");
      const subject = formData.get("subject");
      const body = formData.get("body");
      const fileUrl = formData.get("fileUrl");
      console.log(body);
      const message = {
        from: "hr@shuert.com",
        to: "ksmith@shuert.com",
        subject: `New submission for the ${subject} job!`,
        html: `<html>
                    <body>
                        <p>${first} ${last} has submitted the below application for the ${subject} job.</p>
                        <p>Click on the link to view: <a href=${fileUrl}>Link</a></p>
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

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BhqxZC2a.js')).default;
const server_id = "src/routes/(app)/_careers/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/21.D6V-0i3k.js","_app/immutable/chunks/scheduler.NS8L8LGm.js","_app/immutable/chunks/index.OFbx2xAc.js","_app/immutable/chunks/firebase.BBKyB6M3.js","_app/immutable/chunks/stores.DdE3cWeC.js","_app/immutable/chunks/entry.BVh6nDbZ.js"];
const stylesheets = ["_app/immutable/assets/21.Dq5htEtl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=21-Zkd9yzyl.js.map
